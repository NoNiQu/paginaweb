// components/shared/GalleryGrid.tsx
import React from "react";

export type GalleryItem = { src: string; alt: string; caption?: string };

interface GalleryGridProps {
  images: GalleryItem[];
  /** clases max-w-* para limitar ancho total, ej: "max-w-6xl" */
  maxWidth?: string;
  /** número máximo de columnas en desktop (1-4) */
  maxCols?: 1 | 2 | 3 | 4;
  /** clases extra para la miniatura (altura, etc.) */
  thumbClassName?: string;
  onSelect?: (img: GalleryItem) => void;
}

export function GalleryGrid({
  images,
  maxWidth = "max-w-6xl",
  maxCols = 4,
  thumbClassName = "h-72 md:h-80",
  onSelect,
}: GalleryGridProps) {
  const colsClass =
    {
      1: "lg:grid-cols-1",
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3",
      4: "lg:grid-cols-4",
    }[maxCols] || "lg:grid-cols-4";

  return (
    <div className="w-full my-12 flex justify-center">
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${colsClass} gap-8 ${maxWidth} w-full px-4`}
      >
        {images.map((img, idx) => (
          <div
            key={`${img.src}-${idx}`}
            className="cursor-pointer flex justify-center"
            onClick={() => onSelect?.(img)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className={`w-full ${thumbClassName} object-cover rounded-2xl shadow-md transition-transform duration-200 hover:scale-[1.02]`}
              loading="lazy"
            />
            {img.caption && (
              <p className="mt-3 text-sm text-gray-900 text-center">
                {img.caption}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
