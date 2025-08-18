import type { ReactNode } from "react";

// Componente SectionContainer: contenedor con anchura máxima (6xl) y padding estándar para secciones
interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}
export function SectionContainer({
  children,
  className = "",
}: SectionContainerProps) {
  const baseClasses = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12";
  const combinedClasses = baseClasses + (className ? " " + className : "");
  return <section className={combinedClasses}>{children}</section>;
}
