import { SectionContainer } from "../components/shared/SectionContainer";
import { SectionHeader } from "../components/shared/SectionHeader";
import { Card } from "../components/ui/Card";

export default function Estatutos() {
  return (
    <SectionContainer>
      {/* Título */}
      <SectionHeader>Estatutos</SectionHeader>

      {/* Texto adicional */}
      <div className="mt-6 font-body text-base sm:text-lg text-gray-800 space-y-4">
        <p className="leading-relaxed">
          Los Estatutos orientan nuestra vida como Cofradía: nos recuerdan que
          todo nace de la fe, se alimenta en la oración y se expresa en el
          servicio. Bajo el amparo de la Virgen de la Esperanza, queremos vivir
          con sencillez, unidad y caridad.
        </p>
        <p className="leading-relaxed">
          Estos Estatutos fueron aprobados por el arzobispo de Toledo el 21 de
          marzo de 2017.
        </p>
        <p className="leading-relaxed">
          Los Reglamentos de los Portadores aseguran que el porte de Nuestra
          Señora se realice con devoción, disciplina y continuidad, manteniendo
          viva la tradición transmitida de generación en generación.
        </p>
        <p className="leading-relaxed">
          Estos Reglamentos fueron aprobados por el Presidente de la Cofradía y
          el cura Párroco de San Cipriano de Toledo el 25 de febrero de 2018.
        </p>
        <p className="leading-relaxed">
          Te invitamos a conocer y custodiar estos textos, para caminar juntos
          con un mismo corazón.
        </p>
      </div>

      {/* Botones de descarga */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 mx-auto">
        <Card
          as="a"
          href="/descargas/estatutos-cofradia.pdf"
          className="flex items-center gap-3 justify-center text-lg font-body font-medium min-h-[120px]"
          download
          aria-label="Descargar Estatutos de la Cofradía (PDF)"
        >
          <img src="/descargar.svg" alt="Descargar" className="w-6 h-6" />
          Estatutos de la Cofradía
        </Card>

        <Card
          as="a"
          href="/descargas/Reglamentos_Portadores_Virgen_Esperanza.pdf"
          className="flex items-center gap-3 justify-center text-lg font-body font-medium min-h-[120px]"
          download
          aria-label="Descargar Reglamentos de los Portadores (PDF)"
        >
          <img src="/descargar.svg" alt="Descargar" className="w-6 h-6" />
          Reglamentos de los Portadores
        </Card>
      </div>
    </SectionContainer>
  );
}
