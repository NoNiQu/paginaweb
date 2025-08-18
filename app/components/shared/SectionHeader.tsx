import type { ReactNode } from "react";

// Componente SectionHeader: encabezado de sección o página con estilo estandarizado
interface SectionHeaderProps {
  children: ReactNode;
  className?: string;
}
export function SectionHeader({
  children,
  className = "",
}: SectionHeaderProps) {
  const baseClasses = "text-center text-5xl font-display mb-10";
  const combinedClasses = baseClasses + (className ? " " + className : "");
  return <h1 className={combinedClasses}>{children}</h1>;
}
