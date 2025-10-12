import { Card } from "../ui/Card";

type SocialLink = {
  href: string;
  icon: string;
  label: string;
  ariaLabel?: string;
};

type Props = {
  /** Imagen que ya usas en la home y en noticias */
  imageSrc?: string;
  imageAlt?: string;
  /** Mensaje que aparece encima de los botones */
  message?: string;
  /** Enlaces a redes a pintar como cards */
  socialLinks: SocialLink[];
  className?: string;
};

export function NewsEmptyState({
  imageSrc = "/images/noticias.png",
  imageAlt = "No hay noticias disponibles",
  message = "Síguenos en nuestras redes sociales para estar al día de cualquier novedad sobre la Cofradía.",
  socialLinks,
  className = "",
}: Props) {
  return (
    <div
      className={`flex flex-col gap-8 items-center text-center w-full ${className}`}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="max-w-lg w-full h-auto"
        loading="lazy"
      />

      <div className="w-full flex flex-col gap-4">
        <p className="text-gray-800 mt-2 mb-4">{message}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {socialLinks.map((s) => (
            <Card
              key={s.label}
              as="a"
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center gap-4 p-4 h-14 w-full"
              aria-label={s.ariaLabel ?? `${s.label} de la Cofradía`}
            >
              <img
                src={s.icon}
                alt={s.label}
                className="w-7 h-7"
                loading="lazy"
              />
              <strong className="text-white text-lg">{s.label}</strong>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
