// src/components/Footer.tsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const instagram = import.meta.env.VITE_INSTAGRAM_URL as string;
  const facebook = import.meta.env.VITE_FACEBOOK_URL as string;
  const currentYear = new Date().getFullYear();

  const [copiado, setCopiado] = useState(false);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const handleCopy = (e: React.MouseEvent) => {
    navigator.clipboard.writeText(import.meta.env.VITE_CONTACT_EMAIL as string);
    setPos({ x: e.clientX, y: e.clientY });
    setCopiado(true);
    setTimeout(() => setCopiado(false), 1800);
  };

  return (
    <footer className="footer">
      <div className="container px-4 py-10 flex flex-col items-center gap-8">
        {/* Logo móvil (b.png) */}
        <img
          src="/footer/footerB.png"
          alt="Logo de la Cofradía"
          className="block sm:hidden h-60 w-auto select-none"
          draggable={false}
        />

        {/* Logo tablet/desktop (a.png) */}
        <img
          src="/footer/footerA.png"
          alt="Logo de la Cofradía"
          className="hidden sm:block h-40 lg:h-60 w-auto select-none"
          draggable={false}
        />

        {/* Redes sociales */}
        <div className="flex items-center gap-4 relative">
          <button
            className="social-link hover:cursor-pointer"
            type="button"
            aria-label="Copiar correo electrónico"
            onClick={handleCopy}
          >
            <img src="/iconos/correo.svg" width={25} height={25} alt="correo" />
          </button>

          <a
            className="social-link"
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src="/iconos/instagram.svg"
              width={30}
              height={30}
              alt="Instagram"
            />
          </a>

          <a
            className="social-link"
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img
              src="/iconos/facebook.svg"
              width={22}
              height={22}
              alt="Facebook"
            />
          </a>

          {copiado && pos && (
            <div
              style={{
                position: "fixed",
                left: pos.x + 20,
                top: pos.y - 30,
                background: "#fff",
                color: "#053C2F",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                padding: "6px 16px",
                fontSize: "14px",
                pointerEvents: "none",
                zIndex: 9999,
                fontWeight: 500,
              }}
              aria-live="polite"
            >
              Correo copiado
            </div>
          )}
        </div>

        {/* Aviso legal + Política */}
        <div className="footer-legal flex flex-col sm:flex-row items-center gap-4 text-sm sm:text-base">
          <Link to="/avisolegal">Aviso Legal</Link>
          <Link to="/politicaprivacidad">Política de Privacidad</Link>
          <Link to="/politicacookies">Política de Cookies</Link>
        </div>

        <div className="footer-divider" />

        {/* Texto inferior */}
        <p className="text-center text-xs sm:text-sm tracking-wide">
          COFRADÍA DE NUESTRA SEÑORA DE LA ESPERANZA DE TOLEDO ®{" "}
          <span>{currentYear}</span>
        </p>
      </div>
    </footer>
  );
}
