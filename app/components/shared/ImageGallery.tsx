// components/shared/ImageGallery.tsx
import React, { useState } from "react";
import { GalleryGrid, type GalleryItem } from "./GalleryGrid";
import { Lightbox } from "./Lightbox";

export interface ImageGalleryProps {
  images: GalleryItem[];
  maxWidth?: string;
  maxCols?: 1 | 2 | 3 | 4;
  thumbClassName?: string;
  /** divide la galería en grupos de N imágenes (opcional) */
  chunk?: number;
}

function chunkArray<T>(arr: T[], size: number): T[][] {
  if (!size || size <= 0) return [arr];
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export function ImageGallery({
  images,
  maxWidth = "max-w-6xl",
  maxCols = 4,
  thumbClassName = "h-72 md:h-80",
  chunk,
}: ImageGalleryProps) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const groups = chunkArray(images, chunk || 0);

  // función auxiliar para forzar tipado 1|2|3|4
  const clampCols = (n: number): 1 | 2 | 3 | 4 => {
    if (n <= 1) return 1;
    if (n === 2) return 2;
    if (n === 3) return 3;
    return 4;
  };

  return (
    <>
      {groups.map((group, i) => (
        <GalleryGrid
          key={i}
          images={group}
          maxWidth={maxWidth}
          maxCols={clampCols(Math.min(maxCols, group.length))}
          thumbClassName={thumbClassName}
          onSelect={setSelected}
        />
      ))}

      <Lightbox
        open={!!selected}
        src={selected?.src}
        alt={selected?.alt}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
