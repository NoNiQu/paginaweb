// components/shared/Lightbox.tsx
import React, { useEffect } from "react";

interface LightboxProps {
  open: boolean;
  src?: string;
  alt?: string;
  onClose: () => void;
}

export function Lightbox({ open, src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  if (!open || !src) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60] p-4"
      onClick={onClose}
    >
      <img
        src={src}
        alt={alt || ""}
        className="max-w-[90%] max-h-[90%] object-contain rounded-2xl shadow-2xl"
      />
    </div>
  );
}
