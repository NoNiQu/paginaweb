// src/components/ui/DownloadButton.tsx
import React from "react";
import { Card } from "./Card";

interface DownloadButtonProps {
  href: string;
  label: string;
  ariaLabel: string;
}

export function DownloadButton({
  href,
  label,
  ariaLabel,
}: DownloadButtonProps) {
  return (
    <Card
      as="a"
      href={href}
      className="bg-[#053C2F] p-4 flex items-center justify-center gap-2 font-medium"
      download
      aria-label={ariaLabel}
    >
      <span className="text-white">{label}</span>
      <img src="/iconos/descargar.svg" alt="Descargar" className="w-5 h-5" />
    </Card>
  );
}
