import { SectionContainer } from "../components/shared/SectionContainer";
import { Paragraph } from "../components/shared/Paragraph";
import { DownloadButton } from "../components/ui/DownloadButton";
import { CopiableEmail } from "../components/ui/CopiableEmail";
import { SectionTitle } from "../components/shared/SectionTitle";
import { config } from "../config";

export default function Secretaria() {
  return (
    <SectionContainer className="relative overflow-hidden">
      <h1 className="block md:hidden mb-4 text-3xl font-display font-semibold tracking-tight text-center">
        ¿Quieres hacerte hermano/a?
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="relative">
          <img
            src="/images/haztehermano.webp"
            alt="Nuestra Señora de la Esperanza"
            className="w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[570px] object-cover rounded-2xl shadow-xl"
            loading="eager"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 pointer-events-none" />
        </div>

        <div className="space-y-6 font-body">
          <h1 className="hidden md:block text-4xl font-display font-semibold tracking-tight">
            ¿Quieres hacerte hermano/a?
          </h1>

          <Paragraph>
            Para hacerte hermano/a, solo tienes que descargar la solicitud,
            cumplimentarla y enviarla por correo electrónico a la Secretaría.
          </Paragraph>

          <Paragraph>
            Ser hermano/a significa formar parte activa de una comunidad de fe y
            tradición de Toledo en nuestros cultos y mantener vivas nuestras
            costumbres.
          </Paragraph>

          <DownloadButton
            href="/descargas/SOLICITUD_ALTA_COFRADE_VIRGEN_DE_LA_ESPERANZA_SAN_CIPRIANO.pdf"
            label="Descargar solicitud de hermano"
            ariaLabel="Descargar solicitud para hacerse hermano (PDF)"
          />

          <CopiableEmail email={config.contactEmail} />

          <div className="space-y-2">
            <SectionTitle>Hacerlo de manera presencial</SectionTitle>
            <Paragraph className="text-base">
              También puedes hacerlo en las semanas de fiestas de la Novena y en
              el Día del Patrocinio. Allí la Secretaría recogerá las
              inscripciones de nuevos hermanos y actualizará datos en persona.
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="mb-12 md:mb-0" />
    </SectionContainer>
  );
}
