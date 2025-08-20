// app/root.tsx
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import "./app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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

/** Favicon único + fuentes */
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
  // Usa el que tengas en /public (SVG recomendado). Si usas .ico, cambia type y href.
  { rel: "icon", type: "image/svg+xml", href: "/LOGO.svg" },
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

export default function App() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      {/* aplica el modificador que quieras */}
      <main className="container mx-auto px-4">
        <Outlet />
      </main>
      <Footer />
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
