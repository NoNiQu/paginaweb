// src/pages/noticias.tsx
import { SectionContainer } from "../components/shared/SectionContainer";
import { SectionHeader } from "../components/shared/SectionHeader";
import { Card } from "../components/ui/Card";
import { config } from "../config";

export default function Noticias() {
  const noticias: any[] = [];

  const noHayNoticias = noticias.length === 0;

  return (
    <SectionContainer>
      {/* Título */}
      <SectionHeader>Noticias</SectionHeader>

      {noHayNoticias ? (
        <div className="flex flex-col gap-8 items-center text-center w-full">
          {/* Imagen en lugar del texto */}
          <img
            src="/images/noticias.png"
            alt="No hay noticias disponibles"
            className="max-w-lg w-full h-auto"
            loading="lazy"
          />

          {/* Redes sociales */}
          <div className="w-full flex flex-col gap-4">
            <p className="text-gray-800 mt-2 mb-4">
              Síguenos en nuestras redes sociales para estar al día de cualquier
              novedad sobre la Cofradía.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <Card
                as="a"
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center justify-center gap-4 p-4 h-14 w-full"
                aria-label="Instagram de la Cofradía"
              >
                <img
                  src="/iconos/instagram.svg"
                  alt="Instagram"
                  className="w-7 h-7"
                  loading="lazy"
                />
                <strong className="text-white text-lg">Instagram</strong>
              </Card>

              <Card
                as="a"
                href={config.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center justify-center gap-4 p-4 h-14 w-full"
                aria-label="Facebook de la Cofradía"
              >
                <img
                  src="/iconos/facebook.svg"
                  alt="Facebook"
                  className="w-7 h-7"
                  loading="lazy"
                />
                <strong className="text-white text-lg">Facebook</strong>
              </Card>
            </div>
          </div>
        </div>
      ) : (
        <div>{/* Aquí se mostrarían las noticias reales */}</div>
      )}
    </SectionContainer>
  );
}
