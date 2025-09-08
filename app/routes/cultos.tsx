// src/pages/cultos.tsx
import { useEffect, useState } from "react";
import { SectionContainer } from "../components/shared/SectionContainer";
import { SectionHeader } from "../components/shared/SectionHeader";
import { Card } from "../components/ui/Card";
import {
  CURRENT_YEAR,
  formatLong,
  secondSundayOfNovember,
  corpusThursday,
  pentecostTuesday,
  octavaTuesday,
  novenaRange,
} from "../utils/dates";
import { formatRangeShort } from "../utils/cultos";

// Acordeón simple (sin cambiar textos del contenido)
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
        <span aria-hidden>{open ? "–" : "+"}</span>
      </button>
      {open && <div className="mt-2 text-sm text-white/90">{children}</div>}
    </div>
  );
}

export default function Cultos() {
  const year = CURRENT_YEAR;

  // Scroll suave al ancla (ej. /cultos#voto)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  }, []);

  // Fechas automáticas (año actual)
  const diaEsperanza = new Date(year, 11, 18); // 18 de diciembre
  const patrocinio = secondSundayOfNovember(year);
  const corpus = corpusThursday(year); // Jueves de Corpus
  const voto = pentecostTuesday(year); // Martes de Pentecostés
  const octava = octavaTuesday(year); // Martes de la semana del Corpus
  const { start: novenaInicio, end: novenaFin } = novenaRange(year); // Novena

  return (
    <SectionContainer>
      <SectionHeader>Cultos</SectionHeader>

      {/* Introductorio */}
      <div className="mt-6 font-body text-base sm:text-lg text-gray-800 space-y-4">
        <p className="leading-relaxed mb-6">
          Aquí te presentamos los cultos más importantes de la Cofradía de la
          Virgen de la Esperanza, con las fechas aproximadas y una breve
          explicación para que puedas vivirlos y participar con nosotros.
        </p>
      </div>

      {/* Solo las cards de la sección "Todos nuestros cultos" */}
      <div className="grid gap-6 lg:grid-cols-2 items-start">
        {/* NOVENA (largo) */}
        <Card
          id="novena"
          className="lg:col-span-2 flex flex-col gap-4 text-white scroll-mt-24"
        >
          <div>
            <h3 className="text-3xl mb-1">
              Novena en honor a la Virgen de la Esperanza
            </h3>
            <p className="text-sm opacity-90 font-body">
              {formatRangeShort(novenaInicio, novenaFin)}
            </p>
          </div>

          <div className="font-body space-y-2">
            <p className="opacity-95">
              Nueve días de oración y celebración en honor a Nuestra señora de
              la Esperanza. La Novena comienza el
              <strong> lunes de la semana anterior al Corpus</strong> y concluye
              el <strong>martes de la semana del Corpus</strong>.
            </p>
            <Accordion title="Horarios orientativos:">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  19:30 — Rezo del Santo Rosario y, posteriormente, Misa y
                  Novena.
                </li>
              </ul>
            </Accordion>
          </div>
        </Card>

        {/* PROCESIÓN DEL VOTO */}
        <Card id="voto" className="flex flex-col gap-3 text-white scroll-mt-24">
          <div>
            <h3 className="text-3xl mb-1">Procesión del Voto</h3>
            <p className="text-sm opacity-90 font-body">{formatLong(voto)}</p>
          </div>
          <div className="font-body space-y-2">
            <p className="opacity-95">
              La fecha es siempre el <strong>martes de Pentecostés</strong>.
            </p>
            <p className="opacity-95">
              Renovamos el voto de fidelidad y gratitud a Nuestra señora de la
              Esperanza, recordando el compromiso que en el año 1200 se hizo
              para agradecer a la Virgen la desaparición de la peste tras la
              procesión de rogativas. Siglos después, seguimos recorriendo las
              calles de Toledo con nuestra señora, manteniendo viva la memoria
              de aquel voto y confiando siempre en su amparo y protección.
            </p>
            <Accordion title="Horarios orientativos:">
              <ul className="list-disc pl-5 space-y-1">
                <li>08:45 — Salida de la procesión desde San Cipriano.</li>
                <li>
                  09:50 — Entrada en la Catedral por la Puerta Llana y acto ante
                  la Virgen del Sagrario.
                </li>
                <li>
                  11:30 — Misa de acción de gracias en San Ildefonso (Jesuitas).
                </li>
              </ul>
            </Accordion>
            <Accordion title="Recorrido resumido:">
              <p className="opacity-95">
                Parroquia de San Cipriano, Descalzos, Plaza del Conde, Santo
                Tomé, Plaza del Salvador, Ciudad, Plaza del Ayuntamiento,
                Catedral (entrada por Puerta Llana), Arco de Palacio, Hombre de
                Palo, Cuatro Calles, Comercio, Toledo Ohio, Plata, Plaza de San
                Vicente, Alfonso X el Sabio, San Ildefonso (Misa), regreso por
                Alfonso XII, Rojas, Plaza del Salvador, Santa Úrsula,
                Corredorcillo de San Bartolomé, calle de la Mano y llegada a la
                Parroquia de San Cipriano.
              </p>
            </Accordion>
          </div>
        </Card>

        {/* PROCESIÓN DE LA OCTAVA */}
        <Card
          id="octava"
          className="flex flex-col gap-3 text-white scroll-mt-24"
        >
          <div>
            <h3 className="text-3xl mb-1">Procesión de la Octava</h3>
            <p className="text-sm opacity-90 font-body">{formatLong(octava)}</p>
          </div>
          <div className="font-body space-y-2">
            <p className="opacity-95">
              Durante esta procesión, la señora de la Esperanza recorre las
              calles de su barrio, ofreciendo a los fieles una oportunidad de
              participar en los cultos y manifestar su amor y gratitud hacia la
              Madre que nos protege.
            </p>
            <p className="opacity-95">
              La Procesión de la Octava es un acto de continuidad devocional:
              uniendo tradición, historia y fe, mantiene vivo el vínculo de la
              ciudad y la Cofradía con su Titular, renovando cada año la
              confianza en su amparo maternal.
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
                Parroquia de San Cipriano, calle de la Mano, Corredorcillo de
                San Bartolomé, (acto en Santa Isabel), Santa Úrsula, Plaza del
                Salvador, Santo Tomé, Plaza del Conde, Descalzos y llegada a la
                Parroquia de San Cipriano.
              </p>
            </Accordion>
          </div>
        </Card>

        {/* Corpus (largo) */}
        <Card
          id="corpus"
          className="lg:col-span-2 flex flex-col gap-4 text-white scroll-mt-24"
        >
          <div>
            <h3 className="text-3xl mb-1">Corpus Christi</h3>
            <p className="text-sm opacity-90 font-body">{formatLong(corpus)}</p>
          </div>
          <div className="font-body space-y-2">
            <p className="opacity-95">
              Nuestra Cofradía participa cada año en la Procesión del Corpus
              Christi. Citamos a todos los cofrades en la
              <strong> Puerta del Arco de Palacio a las 10:30</strong> para
              incorporarnos con orden.
            </p>
            <p className="opacity-95">
              Existen normas de vestimenta para los cofrades participantes.
            </p>
          </div>
        </Card>

        {/* Día de Patrocinio (largo) */}
        <Card
          id="patrocinio"
          className="lg:col-span-2 flex flex-col gap-3 text-white scroll-mt-24"
        >
          <div>
            <h3 className="text-3xl mb-1">Día de Patrocinio</h3>
            <p className="text-sm opacity-90 font-body">
              {formatLong(patrocinio)}
            </p>
          </div>
          <div className="font-body space-y-2">
            <p className="opacity-95">
              Cada segundo domingo del mes de noviembre, la Cofradía se reúne
              para honrar a su Madre y Titular en la fiesta del Patrocinio de la
              Virgen de la Esperanza. Es un día de especial significado para
              todos los hermanos, en el que expresamos nuestra gratitud a la
              Virgen por su constante protección y renovamos nuestro compromiso
              de vivir bajo su mirada y ejemplo.
            </p>
            <p className="opacity-95">
              Durante la Santa Misa tendrá lugar la imposición de medallas a los
              nuevos hermanos, que pasan así a formar parte de la Cofradía de
              manera oficial, acogidos bajo el manto de Nuestra Madre de la
              Esperanza.
            </p>
            <p className="opacity-95">
              Tras los cultos, compartiremos un momento de fraternidad
              ofreciendo a los asistentes las tradicionales migas y limonada,
              expresión de la alegría y la unión que nos regala nuestra
              Cofradía.
            </p>
          </div>
        </Card>

        {/* Día de la Esperanza (largo) */}
        <Card
          id="esperanza"
          className="lg:col-span-2 flex flex-col gap-3 text-white scroll-mt-24"
        >
          <div>
            <h3 className="text-3xl mb-1">Día de la Esperanza</h3>
            <p className="text-sm opacity-90 font-body">
              {formatLong(diaEsperanza)}
            </p>
          </div>
          <div className="font-body space-y-2">
            <p className="opacity-95">
              La fiesta de la Virgen de la Esperanza se celebra cada 18 de
              diciembre, justo en la última semana del tiempo de Adviento. Esta
              advocación mariana simboliza la esperanza y la expectación del
              nacimiento de Cristo.
            </p>
            <p className="opacity-95">
              Para la Cofradía de la Esperanza, este día es una de las
              celebraciones más importantes del año, un momento de reafirmación
              de la devoción a nuestra Titular, recordando el mensaje de
              esperanza y confianza que María nos transmite en esta temporada de
              Adviento.
            </p>
            <p className="opacity-95">
              Tras la Santa Misa se comparte chocolate caliente con bollo como
              signo de fraternidad.
            </p>
          </div>
        </Card>
      </div>

      <div className="font-body text-gray-900 space-y-4 mt-12">
        <p className="text-sm sm:text-base leading-relaxed text-center italic">
          La Cofradía manifiesta su gratitud a Teresa López-Brea Alarza por su
          dedicación en la redacción y cuidado de los textos.
        </p>
      </div>

      <p className="mt-8 text-center text-sm font-body text-white/80">
        Las fechas y horarios pueden variar por causas pastorales. Consulta
        nuestras redes oficiales para avisos de última hora.
      </p>
    </SectionContainer>
  );
}
