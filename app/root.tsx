// app/root.tsx
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import "./app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDayTheme } from "./components/hooks/useDayTheme";

import { useEffect, useState } from "react";

/** Título global (y meta básicos) */
export const meta = () => [
  { title: "Cofradía de Nuestra Señora de la Esperanza de Toledo" },
  {
    name: "description",
    content:
      "Web oficial de la Cofradía de Nuestra Señora de la Esperanza de Toledo.",
  },
  { name: "theme-color", content: "#053C2F" },
];

/** Favicon / fuentes / preloads críticos */
export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "icon", type: "image/svg+xml", href: "/iconos/LOGO.svg" },

  // ✅ Preload responsivo del hero
  {
    rel: "preload",
    as: "image",
    href: "/hero/heroO.webp", // fallback

    imageSrcSet:
      "/hero/heroB.webp 640w, " +
      "/hero/heroM.webp 768w, " +
      "/hero/heroT.webp 1024w, " +
      "/hero/heroO.webp 1920w",

    imageSizes:
      "(max-width: 640px) 100vw, " + "(max-width: 1024px) 100vw, " + "100vw",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

/** Botón flotante: aparece tarde, no pisa el footer y es más pequeño en móvil */
function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(24); // px

  useEffect(() => {
    const computeOffsets = () => {
      const SHOW_AFTER_PX = Math.max(window.innerHeight * 0.85, 900);
      const shouldShow = window.scrollY > SHOW_AFTER_PX;
      setVisible(shouldShow);

      if (!shouldShow) {
        setBottomOffset(24);
        return;
      }

      const footer = document.querySelector("footer");
      const baseBottom = 24;
      const extraGap = 16;
      if (footer) {
        const rect = (footer as HTMLElement).getBoundingClientRect();
        const overlap = window.innerHeight - rect.top;
        if (overlap > 0) {
          setBottomOffset(overlap + extraGap);
          return;
        }
      }
      setBottomOffset(baseBottom);
    };

    computeOffsets();
    window.addEventListener("scroll", computeOffsets, { passive: true });
    window.addEventListener("resize", computeOffsets);
    return () => {
      window.removeEventListener("scroll", computeOffsets);
      window.removeEventListener("resize", computeOffsets);
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Volver arriba"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="
        fixed z-40
        rounded-full shadow-lg
        bg-[#053C2F]
        hover:bg-[#075646] focus:bg-[#075646]
        transition
        right-6 md:right-8
        w-12 h-12 md:w-16 md:h-16
        flex items-center justify-center
        hover:cursor-pointer
      "
      style={{ bottom: bottomOffset }}
    >
      <img
        src="/iconos/flecha.svg"
        alt="Ir arriba"
        className="w-5 h-5 md:w-7 md:h-7 invert"
        draggable={false}
      />
    </button>
  );
}

export default function App() {
  useDayTheme();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div
      className={
        isHome
          ? "relative min-h-screen grid grid-rows-[1fr_auto]"
          : "min-h-screen grid grid-rows-[auto_1fr_auto]"
      }
    >
      {/* En Home el header flota sobre el Hero */}
      {isHome ? (
        <div className="absolute inset-x-0 top-0 z-50 drop-shadow-[0_6px_24px_rgba(0,0,0,0.9)]">
          <Header />
        </div>
      ) : (
        <Header />
      )}

      {/* En Home no aplicamos container/padding globales */}
      {isHome ? (
        <main>
          <Outlet />
        </main>
      ) : (
        <main className="container mx-auto px-4">
          <Outlet />
        </main>
      )}

      <Footer />
      <BackToTopButton />
    </div>
  );
}

export function ErrorBoundary({ error }: { error: unknown }) {
  let message = "Oops!";
  let details = "Ha ocurrido un error inesperado.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "La página solicitada no se ha encontrado."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1 className="font-display text-2xl mb-2">{message}</h1>
      <p className="mb-4">{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto bg-gray-100 rounded">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
