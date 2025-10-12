import { SectionContainer } from "../components/shared/SectionContainer";
import { SectionHeader } from "../components/shared/SectionHeader";
import { Paragraph } from "../components/shared/Paragraph";
import { CopiableEmailCard } from "../components/ui/CopiableEmail";
import { Card } from "../components/ui/Card";
import { config } from "../config";

export default function Contacto() {
  return (
    <SectionContainer className="relative">
      <SectionHeader>Contacto</SectionHeader>

      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-6">
        <section className="lg:col-span-2 text-center font-body text-base sm:text-lg text-gray-800 mb-2">
          <Paragraph className="leading-relaxed mx-auto">
            Para cualquier consulta, petición o información sobre la Cofradía,
            ponemos a tu disposición diferentes vías de contacto. Escríbenos y
            estaremos encantados de atenderte lo antes posible.
          </Paragraph>
        </section>

        <CopiableEmailCard email={config.contactEmail} />

        <Card className="flex flex-col items-center justify-center gap-3 p-6 min-h-[150px] text-center">
          <img
            src="/iconos/ubicacion.svg"
            alt="Icono de ubicación"
            className="w-9 h-9 sm:w-10 sm:h-10"
            loading="lazy"
          />
          <Paragraph className="font-semibold leading-relaxed text-white text-xs sm:text-sm md:text-base">
            {config.addressTitle}, {config.addressCityLine}
          </Paragraph>
        </Card>

        <section className="lg:col-span-2 text-center font-body text-base sm:text-lg text-gray-800 mb-2">
          <Paragraph className="leading-relaxed mx-auto">
            También puedes contactar con nosotros a través de nuestras redes
            sociales:
          </Paragraph>
        </section>

        <Card
          as="a"
          href={config.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-2 p-6 min-h-[150px] text-center"
        >
          <img
            src="/iconos/instagram.svg"
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
          className="flex flex-col items-center justify-center gap-2 p-6 min-h-[150px] text-center"
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

      {/* espacio extra móvil */}
      <div className="mb-12 md:mb-0" />
    </SectionContainer>
  );
}
