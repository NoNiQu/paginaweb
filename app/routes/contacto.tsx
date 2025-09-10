// src/pages/contacto.tsx
import { useState } from "react";
import { SectionContainer } from "../components/shared/SectionContainer";
import { SectionHeader } from "../components/shared/SectionHeader";
import { Card } from "../components/ui/Card";
import { config } from "../config";

export default function Contacto() {
  const [copiado, setCopiado] = useState(false);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const handleCopy = (e: React.MouseEvent<HTMLDivElement>) => {
    navigator.clipboard.writeText(config.contactEmail);
    setPos({ x: e.clientX, y: e.clientY });
    setCopiado(true);
    setTimeout(() => setCopiado(false), 1800);
  };

  return (
    <SectionContainer className="relative">
      {/* 1) Título */}
      <SectionHeader>Contacto</SectionHeader>

      {/* 2) Layout: todas las cards iguales */}
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-6">
        {/* 2.1) Intro: ocupa todo el ancho arriba */}
        <section className="lg:col-span-2 text-center font-body text-base sm:text-lg text-gray-800 mb-2">
          <p className="leading-relaxed mx-auto">
            Para cualquier consulta, petición o información sobre la Cofradía,
            ponemos a tu disposición diferentes vías de contacto. Escríbenos y
            estaremos encantados de atenderte lo antes posible.
          </p>
        </section>

        {/* 2.2) Correo: toda la card es clicable/copiar con feedback */}
        <div className="relative">
          <Card
            onClick={handleCopy}
            className="cursor-pointer select-none flex flex-col items-center justify-center gap-3 p-6 min-h-[150px]"
          >
            <img
              src="/iconos/correo.svg"
              alt="Icono de correo"
              className="w-9 h-9 sm:w-10 sm:h-10"
              loading="lazy"
            />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-xs sm:text-sm md:text-base text-white/90 max-w-[200px] md:max-w-none whitespace-nowrap overflow-hidden truncate md:whitespace-normal md:overflow-visible">
                {config.contactEmail}
              </span>
              <img
                src="/iconos/copy.svg"
                alt="Copiar correo"
                className="w-5 h-5 invert"
              />
            </div>
          </Card>

          {copiado && pos && (
            <div
              style={{
                position: "fixed",
                left: pos.x + 20,
                top: pos.y - 30,
                background: "#fff",
                color: "#053C2F",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                padding: "6px 16px",
                fontSize: "14px",
                pointerEvents: "none",
                zIndex: 9999,
                fontWeight: 500,
              }}
              aria-live="polite"
            >
              Correo copiado
            </div>
          )}
        </div>

        {/* 2.3) Ubicación */}
        <Card className="flex flex-col items-center justify-center gap-3 p-6 min-h-[150px] text-center">
          <img
            src="/iconos/ubicacion.svg"
            alt="Icono de ubicación"
            className="w-9 h-9 sm:w-10 sm:h-10"
            loading="lazy"
          />
          <p className="font-semibold leading-relaxed text-xs sm:text-sm md:text-base">
            {config.addressTitle}, {config.addressCityLine}
          </p>
        </Card>

        <section className="lg:col-span-2 text-center font-body text-base sm:text-lg text-gray-800 mb-2">
          <p className="leading-relaxed mx-auto">
            También puedes contactar con nosotros a través de nuestras redes
            sociales:
          </p>
        </section>

        {/* 2.4) Instagram */}
        <Card
          as="a"
          href={config.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-2 p-6 min-h-[150px] text-center"
          aria-label="Instagram de la Cofradía"
        >
          <img
            src="/iconos/instagram.svg"
            alt="Instagram"
            className="w-10 h-10 sm:w-11 sm:h-11"
            loading="lazy"
          />
          <strong className="text-white">Instagram</strong>
        </Card>

        {/* 2.5) Facebook */}
        <Card
          as="a"
          href={config.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-2 p-6 min-h-[150px] text-center"
          aria-label="Facebook de la Cofradía"
        >
          <img
            src="/iconos/facebook.svg"
            alt="Facebook"
            className="w-10 h-10 sm:w-11 sm:h-11"
            loading="lazy"
          />
          <strong className="text-white">Facebook</strong>
        </Card>
      </div>
    </SectionContainer>
  );
}
