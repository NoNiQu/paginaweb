import { createPortal } from "react-dom";
import type { ReactNode } from "react";
import type { Position } from "../../types/Position";

// Componente Toast: muestra un tooltip flotante usando un portal (fuera del flujo normal del DOM)
export function Toast({
  show,
  pos,
  children,
}: {
  show: boolean;
  pos: Position;
  children: ReactNode;
}) {
  if (!show || !pos) return null;
  // Creamos un portal para renderizar el tooltip directamente en el <body>
  return createPortal(
    <div
      style={{
        position: "fixed",
        left: pos.x + 20, // Colocar un poco a la derecha del cursor
        top: pos.y - 30, // Colocar un poco arriba del cursor
        background: "#fff",
        color: "#053C2F",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        padding: "6px 16px",
        fontSize: "15px",
        fontWeight: 500,
        pointerEvents: "none", // El tooltip no interfiere con clics
        zIndex: 9999,
        transition: "opacity .2s ease-in-out",
      }}
      aria-live="polite"
    >
      {children}
    </div>,
    document.body
  );
}
