import { DirectivoCard } from "./DirectivoCard";
import type { Cargo } from "./DirectivoCard"; // ✅ type-only import (verbatimModuleSyntax)

interface BoardRowProps {
  items: Cargo[];
  className: string; // Clases de grid para mantener el layout exacto
}

export function BoardRow({ items, className }: BoardRowProps) {
  return (
    <div className={className}>
      {items.map((item) => (
        <DirectivoCard
          key={`${item.cargo}-${item.nombre}-${item.apellidos}`}
          item={item}
        />
      ))}
    </div>
  );
}
