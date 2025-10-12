// src/components/ui/CopiableEmail.tsx
import React, { useState } from "react";
import { Card } from "./Card";

interface CopiableEmailBaseProps {
  email: string;
}

export function CopiableEmail({ email }: CopiableEmailBaseProps) {
  const [copiado, setCopiado] = useState(false);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const handleCopy = (e: React.MouseEvent<HTMLDivElement>) => {
    navigator.clipboard.writeText(email);
    setPos({ x: e.clientX, y: e.clientY });
    setCopiado(true);
    setTimeout(() => setCopiado(false), 1800);
  };

  return (
    <div className="relative">
      <Card
        onClick={handleCopy}
        className="cursor-pointer select-none bg-[#053C2F] !text-white p-4 flex items-center justify-center gap-2 transition"
      >
        <span className="font-medium break-all text-xs sm:text-sm md:text-base">
          {email}
        </span>
        <img
          src="/iconos/copy.svg"
          alt="Copiar correo"
          className="w-5 h-5 invert"
        />
      </Card>

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
  );
}

/** Variación con estructura tipo “card” (icono arriba + email centrado) */
export function CopiableEmailCard({ email }: CopiableEmailBaseProps) {
  const [copiado, setCopiado] = useState(false);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const handleCopy = (e: React.MouseEvent<HTMLDivElement>) => {
    navigator.clipboard.writeText(email);
    setPos({ x: e.clientX, y: e.clientY });
    setCopiado(true);
    setTimeout(() => setCopiado(false), 1800);
  };

  return (
    <div className="relative">
      <Card
        onClick={handleCopy}
        className="cursor-pointer select-none flex flex-col items-center justify-center gap-3 p-6 min-h-[150px] text-center"
      >
        <img
          src="/iconos/correo.svg"
          alt="Icono de correo"
          className="w-9 h-9 sm:w-10 sm:h-10"
          loading="lazy"
        />
        <div className="flex items-center gap-2">
          <span className="font-semibold text-xs sm:text-sm md:text-base text-white/90 max-w-[200px] md:max-w-none whitespace-nowrap overflow-hidden truncate md:whitespace-normal md:overflow-visible">
            {email}
          </span>
          <img
            src="/iconos/copy.svg"
            alt="Copiar correo"
            className="w-5 h-5 invert"
          />
        </div>
      </Card>

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
  );
}
