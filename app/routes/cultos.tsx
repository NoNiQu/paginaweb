import { useState } from "react";
import { SectionContainer } from "../components/shared/SectionContainer";
import { SectionHeader } from "../components/shared/SectionHeader";
import { Card } from "../components/ui/Card";
import {
  addDays,
  corpusThursday,
  formatLong,
  secondSundayOfNovember,
} from "../utils/dates";

// Acordeón
function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-white/30 pt-2">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center font-medium text-white cursor-pointer"
      >
        {title}
        <span>{open ? "–" : "+"}</span>
      </button>
      {open && <div className="mt-2 text-sm text-white/90">{children}</div>}
    </div>
  );
}

export default function Cultos() {
  const year = new Date().getFullYear();

  // Fechas automáticas
  const diaEsperanza = new Date(year, 11, 18);
  const patrocinio = secondSundayOfNovember(year);
  const corpus = corpusThursday(year);
  const octava = addDays(corpus, -2);
  const voto = addDays(octava, -7);

  return (
    <SectionContainer>
      <SectionHeader>Cultos</SectionHeader>

      <div className="grid gap-6 sm:grid-cols-2 items-start">
        {/* PROCESIÓN DEL VOTO */}
        <Card id="voto" className="flex flex-col gap-4 text-white">
          <div>
            <h3 className="text-2xl font-display">Procesión del Voto</h3>
            <p className="text-sm opacity-90 font-body">{formatLong(voto)}</p>
          </div>

          <div className="font-body space-y-2">
            <p className="opacity-95">
              Renovamos el voto de fidelidad y gratitud a Nuestra Señora
              recorriendo las calles de Toledo.
            </p>

            <Accordion title="Horarios orientativos:">
              <ul className="list-disc pl-5 space-y-1">
                <li>08:45 — Salida de la procesión desde San Cipriano.</li>
                <li>
                  09:50 — Entrada en la Catedral por la Puerta Llana, recepción
                  del Cabildo y acto ante la Virgen del Sagrario.
                </li>
                <li>
                  11:30 — Misa de acción de gracias en San Ildefonso (Jesuitas).
                </li>
              </ul>
            </Accordion>

            <Accordion title="Recorrido resumido:">
              <p className="opacity-95">
                San Cipriano, Descalzos, Plaza del Conde, Santo Tomé, Plaza del
                Salvador, Ciudad, Plaza del Ayuntamiento, Catedral, salida por
                Puerta Llana, Arco de Palacio, Hombre de Palo, Cuatro Calles,
                Comercio, Toledo Ohio, Plata, Plaza de San Vicente, Alfonso X el
                Sabio, San Ildefonso (Misa), regreso por Alfonso XII, Roja,
                Plaza del Salvador, Santa Úrsula, Corredorcillo de San
                Bartolomé, calle de la Mano y llegada a San Cipriano.
              </p>
            </Accordion>
          </div>
        </Card>

        {/* PROCESIÓN DE LA OCTAVA */}
        <Card id="octava" className="flex flex-col gap-4 text-white">
          <div>
            <h3 className="text-2xl font-display">Procesión de la Octava</h3>
            <p className="text-sm opacity-90 font-body">{formatLong(octava)}</p>
          </div>

          <div className="font-body space-y-2">
            <p className="opacity-95">
              Renovamos el voto de fidelidad y gratitud a Nuestra Señora
              recorriendo las calles de Toledo.
            </p>
            <Accordion title="Horarios orientativos:">
              <ul className="list-disc pl-5 space-y-1">
                <li>19:45 — Salida de la procesión desde San Cipriano.</li>
                <li>
                  20:15 — Acto en los Jardines del Convento de Santa Isabel.
                </li>
              </ul>
            </Accordion>

            <Accordion title="Recorrido resumido:">
              <p className="opacity-95">
                San Cipriano, calle de la Mano, Corredorcillo de San Bartolomé,
                (acto en Santa Isabel), Santa Úrsula, Plaza del Salvador, Santo
                Tomé, Plaza del Conde, Descalzos y llegada a San Cipriano.
              </p>
            </Accordion>
          </div>
        </Card>

        {/* DÍA DE PATROCINIO */}
        <Card id="patrocinio" className="flex flex-col gap-3 text-white">
          <div>
            <h3 className="text-2xl font-display">Día de Patrocinio</h3>
            <p className="text-sm opacity-90 font-body">
              {formatLong(patrocinio)}
            </p>
          </div>
          <p className="font-body opacity-95">
            Celebramos el patrocinio de la Virgen sobre la Cofradía, pidiendo su
            amparo y bendición para todos.
          </p>
          <p className="font-body opacity-95">
            Tras la Santa Misa, la Cofradía ofrece a los asistentes las
            tradicionales migas y limonada.
          </p>
        </Card>

        {/* DÍA DE LA ESPERANZA */}
        <Card id="esperanza" className="flex flex-col gap-3 text-white">
          <div>
            <h3 className="text-2xl font-display">Día de la Esperanza</h3>
            <p className="text-sm opacity-90 font-body">
              {formatLong(diaEsperanza)}
            </p>
          </div>
          <p className="font-body opacity-95">
            Día grande de la Cofradía. Nos encomendamos a la Virgen de la
            Esperanza y renovamos nuestra devoción.
          </p>
          <p className="font-body opacity-95">
            Tras la Misa se comparte chocolate caliente con bollo como signo de
            fraternidad.
          </p>
        </Card>
      </div>

      <p className="mt-8 text-center text-sm font-body text-white/80">
        Para posibles cambios de horario o detalles, síguenos en nuestras redes
        sociales oficiales.
      </p>
    </SectionContainer>
  );
}
