// src/pages/noticias.tsx
import { SectionContainer } from "../components/shared/SectionContainer";
import { SectionHeader } from "../components/shared/SectionHeader";
import { NewsEmptyState } from "../components/news/NewsEmptyState";
import { config } from "../config";

export default function Noticias() {
  const noticias: any[] = []; // tu fuente real cuando la haya
  const noHayNoticias = noticias.length === 0;

  return (
    <SectionContainer>
      <SectionHeader>Noticias</SectionHeader>

      {noHayNoticias ? (
        <NewsEmptyState
          socialLinks={[
            {
              href: config.instagramUrl,
              icon: "/iconos/instagram.svg",
              label: "Instagram",
            },
            {
              href: config.facebookUrl,
              icon: "/iconos/facebook.svg",
              label: "Facebook",
            },
          ]}
        />
      ) : (
        <div>{/* Aquí se renderizarían las noticias reales */}</div>
      )}

      {/* espacio extra móvil */}
      <div className="mb-12 md:mb-0" />
    </SectionContainer>
  );
}
