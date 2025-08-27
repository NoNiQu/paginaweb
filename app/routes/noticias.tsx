// src/pages/noticias.tsx
import { SectionContainer } from "../components/shared/SectionContainer";
import { SectionHeader } from "../components/shared/SectionHeader";
import { Card } from "../components/ui/Card";
import { config } from "../config";

export default function Noticias() {
  // Aquí en un futuro puedes cargar las noticias desde un array o API
  const noticias: any[] = [];

  const noHayNoticias = noticias.length === 0;

  return (
    <SectionContainer>
      {/* Título */}
      <SectionHeader>Noticias</SectionHeader>

      {noHayNoticias ? (
        <div className="flex flex-col gap-6 items-center text-center">
          <p className="text-base sm:text-lg text-gray-800">
            No hay noticias disponibles actualmente.
          </p>

          {/* Redes sociales */}
          <p>
            <p>
              Síguenos en nuestras redes sociales para estar al día de cualquier
              novedad sobre la Cofradía.
            </p>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
            <Card
              as="a"
              href={config.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-3 p-6 min-h-[150px]"
              aria-label="Instagram de la Cofradía"
            >
              <img
                src="/instagram.svg"
                alt="Instagram"
                className="w-10 h-10 sm:w-11 sm:h-11"
                loading="lazy"
              />
              <strong className="text-white">Instagram</strong>
            </Card>

            <Card
              as="a"
              href={config.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-3 p-6 min-h-[150px]"
              aria-label="Facebook de la Cofradía"
            >
              <img
                src="/facebook.svg"
                alt="Facebook"
                className="w-10 h-10 sm:w-11 sm:h-11"
                loading="lazy"
              />
              <strong className="text-white">Facebook</strong>
            </Card>
          </div>
        </div>
      ) : (
        // Aquí se mostrarían las noticias reales en cards
        <div>{/* Map de noticias en el futuro */}</div>
      )}
    </SectionContainer>
  );
}
