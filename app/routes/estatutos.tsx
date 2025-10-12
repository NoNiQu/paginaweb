// src/pages/estatutos.tsx
import { SectionContainer } from "../components/shared/SectionContainer";
import { SectionHeader } from "../components/shared/SectionHeader";
import { Paragraph } from "../components/shared/Paragraph";
import { DownloadButton } from "../components/ui/DownloadButton";

export default function Estatutos() {
  return (
    <SectionContainer>
      <SectionHeader>Estatutos</SectionHeader>

      <div className="mt-6 space-y-4">
        <Paragraph>
          Los estatutos orientan nuestra vida como cofradía: nos recuerdan que
          todo nace de la fe, se alimenta en la oración y se expresa en el
          servicio. Bajo el amparo de la Virgen de la Esperanza, queremos vivir
          con sencillez, unidad y caridad.
        </Paragraph>

        <Paragraph>
          Estos estatutos fueron aprobados por el Arzobispo de Toledo el 21 de
          marzo de 2017.
        </Paragraph>

        <Paragraph>
          Los reglamentos de los portadores aseguran que el porte de Nuestra
          Señora se realice con devoción, disciplina y continuidad, manteniendo
          viva la tradición transmitida de generación en generación.
        </Paragraph>

        <Paragraph>
          Estos reglamentos fueron aprobados por el presidente de la cofradía y
          el señor párroco de San Cipriano de Toledo el 25 de febrero de 2018.
        </Paragraph>

        <Paragraph>
          Te invitamos a conocer y custodiar estos textos, para caminar juntos
          con un mismo corazón.
        </Paragraph>
      </div>

      {/* Botones de descarga unificados */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 mx-auto">
        <DownloadButton
          href="/descargas/Estatutos_Cofradia_Virgen_Esperanza.pdf"
          label="Estatutos de la Cofradía"
          ariaLabel="Descargar Estatutos de la Cofradía (PDF)"
        />
        <DownloadButton
          href="/descargas/Reglamentos_Portadores_Virgen_Esperanza.pdf"
          label="Reglamentos de los Portadores"
          ariaLabel="Descargar Reglamentos de los Portadores (PDF)"
        />
      </div>

      {/* Espacio móvil */}
      <div className="mb-12 md:mb-0" />
    </SectionContainer>
  );
}
