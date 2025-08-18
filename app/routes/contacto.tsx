// src/pages/contacto.tsx
import { SectionContainer } from "../components/shared/SectionContainer";
import { SectionHeader } from "../components/shared/SectionHeader";
import { Card } from "../components/ui/Card";
import { CopiableText } from "../components/ui/CopiableText";
import { config } from "../config";

export default function Contacto() {
  return (
    <SectionContainer className="relative">
      {/* 1) Título */}
      <SectionHeader>Contacto</SectionHeader>

      {/* Contenedor responsive:
         - Móvil: pila en el orden natural (texto, correo, ubi, redes)
         - Desktop: grid 2 cols x 2 filas, filas de igual altura (auto-rows-fr) */}
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:auto-rows-fr lg:gap-8">
        {/* 2) Texto (móvil: primero; desktop: col 1, fila 1) */}
        <section className="font-body text-base sm:text-lg text-gray-800 order-1 lg:order-none lg:col-start-1 lg:row-start-1">
          <p className="leading-relaxed">
            Si deseas ponerte en contacto con la Cofradía, ponemos a tu
            disposición nuestras vías oficiales de comunicación. Estaremos
            encantados de atenderte.
          </p>
        </section>

        {/* 3) Correo (móvil: 2º; desktop: col 2, fila 1) */}
        <Card className="grid place-items-center text-center gap-3 py-5 min-h-[140px] order-2 lg:order-none lg:col-start-2 lg:row-start-1">
          <img
            src="/correo.svg"
            alt="Correo"
            className="w-10 h-10"
            loading="lazy"
          />
          <CopiableText
            text={config.contactEmail}
            label="correo"
            iconSrc="/copy.svg"
            iconAlt="Copiar correo"
            iconClassName="w-6 h-6 invert hover:cursor-pointer"
            // Limita el ancho solo en móvil para que se trunque
            className="font-semibold text-xs sm:text-sm md:text-base text-white/90 cursor-pointer max-w-[240px] md:max-w-none"
            // Trunca en móvil, muestra completo en desktop
            textClassName="whitespace-nowrap overflow-hidden truncate md:whitespace-normal md:overflow-visible"
            truncate
          />
        </Card>

        {/* 4) Ubicación (móvil: 3º; desktop: col 2, fila 2) */}
        <Card className="grid gap-4 text-center place-items-center py-6 min-h-[140px] order-3 lg:order-none lg:col-start-2 lg:row-start-2">
          <img
            src="/ubicacion.svg"
            alt="Ubicación"
            className="w-10 h-10"
            loading="lazy"
          />
          <p className="font-semibold leading-relaxed text-xs sm:text-sm md:text-base">
            {config.addressTitle}
            <br />
            {config.addressCityLine}
          </p>
        </Card>

        {/* 5–7) Bloque de redes (móvil: después de correo/ubi; desktop: col 1, fila 2, abajo) */}
        <div className="order-4 lg:order-none lg:col-start-1 lg:row-start-2 lg:self-end">
          <p className="font-body font-medium mb-4">
            También puedes escribirnos por nuestras redes sociales:
          </p>

          {/* IG + FB */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Card
              as="a"
              href={config.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="grid place-items-center gap-2 text-center min-h-[140px]"
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
              className="grid place-items-center gap-2 text-center min-h-[140px]"
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
      </div>
    </SectionContainer>
  );
}
