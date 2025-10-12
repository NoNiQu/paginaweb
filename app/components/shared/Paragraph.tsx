// components/shared/Paragraph.tsx
import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  /** 'dark' para texto oscuro (por defecto), 'light' para texto claro sobre fondos oscuros */
  color?: "dark" | "light";
  /** Clases extra opcionales */
  className?: string;
}

export function Paragraph({
  children,
  color = "dark",
  className = "",
}: ParagraphProps) {
  const base = "text-sm sm:text-base leading-relaxed font-body";
  const tone = color === "light" ? "text-white/90" : "text-gray-900";
  return <p className={`${base} ${tone} ${className}`.trim()}>{children}</p>;
}
