import { useState } from "react";
import type { MouseEvent, ReactNode } from "react";
import { Toast } from "./Toast";
import type { Position } from "../../types/Position";

// Componente CopiableText: copia al portapapeles y muestra un tooltip de confirmación
type Variant = "inline" | "icon-only";

interface CopiableTextProps {
  /** Texto que se copiará al portapapeles */
  text: string;
  /** Etiqueta descriptiva para accesibilidad y tooltip (ej. "correo", "código Bizum") */
  label?: string;
  /** Contenido opcional antes del texto (icono/emoji) */
  prefix?: ReactNode;
  /** Clases para el contenedor (envolvente) */
  className?: string;
  /** Clases para el texto mostrado (tamaño, peso, etc.) */
  textClassName?: string;
  /** Mostrar elipsis si es muy largo (añade truncate + break-words) */
  truncate?: boolean;

  /** Variante de presentación:
   *  - "inline": muestra texto + botón (por defecto)
   *  - "icon-only": solo el botón de copiar (para layouts donde el texto va aparte)
   */
  variant?: Variant;

  /** Icono del botón de copiar */
  iconSrc?: string;
  iconAlt?: string;
  iconClassName?: string;

  /** Duración del tooltip (ms). Por defecto 1800ms */
  toastDurationMs?: number;

  /** Callback cuando se copia correctamente */
  onCopy?: (value: string) => void;
}

export function CopiableText({
  text,
  label,
  prefix,
  className,
  textClassName,
  truncate = false,
  variant = "inline",
  iconSrc = "/copy.svg",
  iconAlt = "Copiar",
  iconClassName,
  toastDurationMs = 1800,
  onCopy,
}: CopiableTextProps) {
  const [copied, setCopied] = useState(false);
  const [pos, setPos] = useState<Position>(null);

  const handleCopy = (e: MouseEvent<HTMLButtonElement>) => {
    if (!text) return;
    // Copiar el texto al portapapeles
    void navigator.clipboard.writeText(text);
    // Posicionar el tooltip cerca del cursor
    setPos({ x: e.clientX, y: e.clientY });
    setCopied(true);
    // Notificar al consumidor
    onCopy?.(text);
    // Ocultar el tooltip después de X ms
    window.setTimeout(() => setCopied(false), toastDurationMs);
  };

  // Accesibilidad y mensaje del tooltip
  const itemLabel = label?.trim() ?? "";
  const tooltipMessage = itemLabel
    ? `${itemLabel.charAt(0).toUpperCase()}${itemLabel.slice(1)} copiado`
    : "¡Copiado!";
  const ariaLabel = itemLabel ? `Copiar ${itemLabel}` : "Copiar texto";

  // Clases utilitarias
  const containerClasses = `inline-flex items-center gap-2 ${className ?? ""}`;
  const iconClasses = iconClassName ?? "w-6 h-6";
  const textClassesBase = `break-all ${truncate ? "truncate max-w-full break-words" : ""}`;
  const textClasses = `${textClassesBase} ${textClassName ?? ""}`.trim();

  // Variante: solo botón (para layouts donde el texto va aparte, p.ej. Bizum)
  if (variant === "icon-only") {
    return (
      <>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center p-1 rounded-md hover:cursor-pointer"
          title={ariaLabel}
          aria-label={ariaLabel}
        >
          <img src={iconSrc} alt={iconAlt} className={iconClasses} />
        </button>
        <Toast show={copied} pos={pos}>
          {tooltipMessage}
        </Toast>
      </>
    );
  }

  // Variante por defecto: texto + botón
  return (
    <span className={containerClasses}>
      {prefix && <span>{prefix}</span>}
      <span className={textClasses}>{text}</span>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center justify-center p-1 rounded-md hover:cursor-pointer"
        title={ariaLabel}
        aria-label={ariaLabel}
      >
        <img src={iconSrc} alt={iconAlt} className={iconClasses} />
      </button>
      <Toast show={copied} pos={pos}>
        {tooltipMessage}
      </Toast>
    </span>
  );
}
