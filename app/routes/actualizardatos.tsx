import { SectionContainer } from "../components/shared/SectionContainer";
import { Paragraph } from "../components/shared/Paragraph";
import { DownloadButton } from "../components/ui/DownloadButton";
import { CopiableEmail } from "../components/ui/CopiableEmail";
import { SectionTitle } from "../components/shared/SectionTitle";
import { config } from "../config";

export default function actualizardatos() {
  return (
    <SectionContainer className="relative overflow-hidden">
      {/* Título móvil encima de la imagen */}
      <h1 className="block md:hidden mb-4 text-3xl font-display font-semibold tracking-tight text-center">
        Actualización de datos
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Imagen */}
        <div className="relative">
          <img
            src="/images/actualizardatos.webp"
            alt="Nuestra Señora de la Esperanza"
            className="w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[570px] object-cover rounded-2xl shadow-xl"
            loading="eager"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 pointer-events-none" />
        </div>

        {/* Texto */}
        <div className="space-y-6 font-body">
          <h1 className="hidden md:block text-4xl font-display font-semibold tracking-tight">
            Actualización de datos
          </h1>

          <Paragraph>
            Si ya eres hermano/a y deseas modificar algún dato personal, ponte
            en contacto con la Secretaría a través del correo electrónico.
          </Paragraph>

          <Paragraph>
            En caso de que quieras actualizar tu domiciliación bancaria,
            descarga la solicitud correspondiente, complétala y envíala por
            correo electrónico a la Secretaría
          </Paragraph>

          <DownloadButton
            href="/descargas/SOLICITUD_DOMICILIACION_COFRADE_VIRGEN_DE_LA_ESPERANZA_SAN_CIPRIANO.pdf"
            label="Descargar solicitud de domicilición"
            ariaLabel="Descargar solicitud para domiciliar (PDF)"
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

      {/* espacio extra móvil */}
      <div className="mb-12 md:mb-0" />
    </SectionContainer>
  );
}
