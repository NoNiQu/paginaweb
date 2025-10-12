// src/components/shared/SectionTitle.tsx
import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h2 className={`text-xl sm:text-2xl font-semibold ${className}`.trim()}>
      {children}
    </h2>
  );
}
