// src/pages/juntadirectiva.tsx
import { SectionContainer } from "../components/shared/SectionContainer";
import { SectionHeader } from "../components/shared/SectionHeader";
import { Paragraph } from "../components/shared/Paragraph";
import { BoardRow } from "../components/ui/BoardRow";
import { useJuntaFromTxt } from "../components/hooks/useJuntaFromTxt";

export default function JuntaDirectiva() {
  const currentYear = new Date().getFullYear();
  // Leemos los datos desde /public/data/junta.txt (el hook ya gestiona fallback si lo configuraste)
  const { data: DIRECTIVA } = useJuntaFromTxt();

  return (
    <SectionContainer>
      <SectionHeader>Junta Directiva</SectionHeader>

      {/* Texto explicativo (sin cambios) */}
      <div className="mt-6 space-y-4">
        <Paragraph>
          La Junta Directiva es el órgano ejecutivo de la Cofradía. Ejerce la
          coordinación general, impulsa el plan anual de actividades y vela por
          el cumplimiento de los acuerdos de la Asamblea General.
        </Paragraph>
        <Paragraph>
          Entre sus funciones están: preparar la memoria anual, revisar las
          cuentas y el presupuesto antes de presentarlos a la Asamblea, fijar el
          orden del día de las reuniones, admitir nuevos miembros y, en su caso,
          tramitar bajas o cambios de condición. También puede otorgar poderes
          notariales y representar a la Cofradía en asuntos jurídicos cuando sea
          necesario.
        </Paragraph>
        <Paragraph>
          La Junta celebra al menos tres reuniones ordinarias al año y cuantas
          extraordinarias se convoquen. Se busca la unanimidad en las decisiones
          y, si no fuese posible, se aprueban por mayoría cualificada.
        </Paragraph>
        <Paragraph>
          Los cargos son gratuitos y se ejercen en espíritu de servicio,
          procurando la continuidad de la Cofradía y el cuidado de sus bienes y
          tradiciones.
        </Paragraph>
      </div>

      {/* Texto antes de las cards (mismo contenido) */}
      <div className="mt-12 text-center">
        <Paragraph className="text-lg sm:text-xl text-gray-800 font-medium">
          Estos son los actuales cargos a{" "}
          <span className="font-semibold">{currentYear}</span>
        </Paragraph>
      </div>

      {/* Cards (mismo layout, ahora con datos del .txt) */}
      <div className="mt-10 space-y-8">
        {/* Fila 1: 1 card centrada */}
        <BoardRow
          items={DIRECTIVA.slice(0, 1)}
          className="grid grid-cols-1 sm:max-w-md mx-auto"
        />

        {/* Fila 2: 3 cards */}
        <BoardRow
          items={DIRECTIVA.slice(1, 4)}
          className="grid gap-6 sm:grid-cols-3"
        />

        {/* Fila 3: 1 card centrada */}
        <BoardRow
          items={DIRECTIVA.slice(4, 5)}
          className="grid grid-cols-1 sm:max-w-sm mx-auto"
        />

        {/* Fila 4: 3 cards */}
        <BoardRow
          items={DIRECTIVA.slice(5, 8)}
          className="grid gap-6 sm:grid-cols-3"
        />

        {/* Fila 5: 2 cards centradas */}
        <BoardRow
          items={DIRECTIVA.slice(8, 10)}
          className="grid gap-6 sm:grid-cols-2 sm:max-w-2xl mx-auto mb-12"
        />
      </div>

      {/* espacio extra móvil */}
      <div className="mb-12 md:mb-0" />
    </SectionContainer>
  );
}
