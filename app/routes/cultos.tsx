// src/pages/cultos.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { SectionContainer } from "../components/shared/SectionContainer";
import { SectionHeader } from "../components/shared/SectionHeader";
import { Card } from "../components/ui/Card";
import { Paragraph } from "../components/shared/Paragraph";
import { FinalNote } from "../components/shared/FinalNote";
import { Accordion } from "../components/ui/Accordion";
import { NormasModal } from "../components/ui/NormasModal";
import { useHashScroll } from "../components/hooks/useHashScroll";
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

export default function Cultos() {
  useHashScroll(); // scroll suave a #novena, #voto, etc.

  const year = CURRENT_YEAR;

  const diaEsperanza = new Date(year, 11, 18); // 18 de diciembre
  const patrocinio = secondSundayOfNovember(year);
  const corpus = corpusThursday(year); // Jueves de Corpus
  const voto = pentecostTuesday(year); // Martes de Pentecostés
  const octava = octavaTuesday(year); // Martes de la semana del Corpus
  const { start: novenaInicio, end: novenaFin } = novenaRange(year);

  const [showNormas, setShowNormas] = useState(false);

  return (
    <SectionContainer>
      <SectionHeader>Cultos</SectionHeader>

      {/* Introductorio */}
      <div className="mt-6 space-y-4 mb-6">
        <Paragraph>
          Aquí te presentamos los cultos más importantes de la Cofradía de la
          Virgen de la Esperanza, con las fechas aproximadas y una breve
          explicación para que puedas vivirlos y participar con nosotros.
        </Paragraph>
      </div>

      {/* Cards */}
      <div className="grid gap-6 lg:grid-cols-2 items-start">
        {/* NOVENA */}
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

          <div className="space-y-2">
            <Paragraph color="light">
              Nueve días de oración y celebración en honor a Nuestra señora de
              la Esperanza. La Novena comienza el
              <strong> lunes de la semana anterior al Corpus</strong> y concluye
              el <strong>martes de la semana del Corpus</strong>.
            </Paragraph>

            <Accordion title="Horarios orientativos:">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  19:30 — Rezo del Santo Rosario y, posteriormente, Misa y
                  Novena.
                </li>
                <li>
                  Después de la Misa las tradicionales quinolas y limonada en el
                  patio de la Parroquia.
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

          <div className="space-y-2">
            <Paragraph color="light">
              La fecha es siempre el <strong>martes de Pentecostés</strong>.
            </Paragraph>
            <Paragraph color="light">
              Renovamos el voto de fidelidad y gratitud a Nuestra señora de la
              Esperanza, recordando el compromiso que en el año 1200 se hizo
              para agradecer a la Virgen la desaparición de la peste tras la
              procesión de rogativas. Siglos después, seguimos recorriendo las
              calles de Toledo con nuestra señora, manteniendo viva la memoria
              de aquel voto y confiando siempre en su amparo y protección.
            </Paragraph>

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
              <Paragraph color="light" className="!text-sm">
                Parroquia de San Cipriano, Descalzos, Plaza del Conde, Santo
                Tomé, Plaza del Salvador, Ciudad, Plaza del Ayuntamiento,
                Catedral (entrada por Puerta Llana), Arco de Palacio, Hombre de
                Palo, Cuatro Calles, Comercio, Toledo Ohio, Plata, Plaza de San
                Vicente, Alfonso X el Sabio, San Ildefonso (Misa), regreso por
                Alfonso XII, Rojas, Plaza del Salvador, Santa Úrsula,
                Corredorcillo de San Bartolomé, calle de la Mano y llegada a la
                Parroquia de San Cipriano.
              </Paragraph>
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

          <div className="space-y-2">
            <Paragraph color="light">
              Durante esta procesión, la señora de la Esperanza recorre las
              calles de su barrio, ofreciendo a los fieles una oportunidad de
              participar en los cultos y manifestar su amor y gratitud hacia la
              Madre que nos protege.
            </Paragraph>
            <Paragraph color="light">
              La Procesión de la Octava es un acto de continuidad devocional:
              uniendo tradición, historia y fe, mantiene vivo el vínculo de la
              ciudad y la Cofradía con su Titular, renovando cada año la
              confianza en su amparo maternal.
            </Paragraph>

            <Accordion title="Horarios orientativos:">
              <ul className="list-disc pl-5 space-y-1">
                <li>19:45 — Salida de la procesión desde San Cipriano.</li>
                <li>
                  20:15 — Acto en los Jardines del Convento de Santa Isabel.
                </li>
              </ul>
            </Accordion>

            <Accordion title="Recorrido resumido:">
              <Paragraph color="light" className="!text-sm">
                Parroquia de San Cipriano, calle de la Mano, Corredorcillo de
                San Bartolomé, (acto en Santa Isabel), Santa Úrsula, Plaza del
                Salvador, Santo Tomé, Plaza del Conde, Descalzos y llegada a la
                Parroquia de San Cipriano.
              </Paragraph>
            </Accordion>
          </div>
        </Card>

        {/* CORPUS */}
        <Card
          id="corpus"
          className="lg:col-span-2 flex flex-col gap-4 text-white scroll-mt-24"
        >
          <div>
            <h3 className="text-3xl mb-1">Corpus Christi</h3>
            <p className="text-sm opacity-90 font-body">{formatLong(corpus)}</p>
          </div>

          <div className="space-y-2">
            <Paragraph color="light">
              Nuestra Cofradía participa cada año en la Procesión del Corpus
              Christi. Citamos a todos los cofrades en la
              <strong> Puerta del Arco de Palacio a las 10:30</strong> para
              incorporarnos con orden.
            </Paragraph>
            <Paragraph color="light">
              Existen{" "}
              <span
                onClick={() => setShowNormas(true)}
                className="underline underline-offset-4 cursor-pointer hover:text-emerald-300 transition-colors"
              >
                normas de vestimenta
              </span>{" "}
              para los cofrades participantes.
            </Paragraph>
          </div>
        </Card>

        {/* Modal de Normas (cierre al click fuera) */}
        <NormasModal
          open={showNormas}
          onClose={() => setShowNormas(false)}
          title="Normas de Vestimenta"
        >
          <ul className="space-y-4 text-[15px] md:text-base leading-relaxed">
            <li>
              <span className="text-emerald-700 mr-2">●</span>
              Los <strong>portadores</strong> que participen como tal, deberán
              asistir conforme a las normas establecidas en los{" "}
              <Link
                to="/estatutos"
                className="font-medium underline underline-offset-4 hover:text-emerald-600"
              >
                reglamentos de los portadores
              </Link>{" "}
              de la Virgen de la Esperanza.
            </li>
            <li>
              <span className="text-emerald-700 mr-2">●</span>
              Los <strong>hombres</strong> deberán vestir traje sobrio, camisa,
              corbata y zapatos formales.
            </li>
            <li>
              <span className="text-emerald-700 mr-2">●</span>
              Las <strong>mujeres</strong> que acudan con mantilla deberán
              seguir el protocolo de la procesión del Corpus. Puedes descargar
              las normas completas aquí:
              <br />
              <div className="flex justify-center mt-7">
                <a
                  href="/descargas/ProtocoloCorpus_ChicasySeñoras.pdf"
                  download
                  className="px-4 py-2 text-sm md:text-[15px] font-medium text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 transition"
                >
                  Descargar normas de protocolo
                </a>
              </div>
            </li>
          </ul>
        </NormasModal>

        {/* DÍA DE PATROCINIO */}
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
          <div className="space-y-2">
            <Paragraph color="light">
              Cada segundo domingo del mes de noviembre, la Cofradía se reúne
              para honrar a su Madre y Titular en la fiesta del Patrocinio de la
              Virgen de la Esperanza. Es un día de especial significado para
              todos los hermanos, en el que expresamos nuestra gratitud a la
              Virgen por su constante protección y renovamos nuestro compromiso
              de vivir bajo su mirada y ejemplo.
            </Paragraph>
            <Paragraph color="light">
              Durante la Santa Misa tendrá lugar la imposición de medallas a los
              nuevos hermanos, que pasan así a formar parte de la Cofradía de
              manera oficial, acogidos bajo el manto de Nuestra Madre de la
              Esperanza.
            </Paragraph>
            <Paragraph color="light">
              Tras los cultos, compartiremos un momento de fraternidad
              ofreciendo a los asistentes las tradicionales migas y limonada,
              expresión de la alegría y la unión que nos regala nuestra
              Cofradía.
            </Paragraph>
          </div>
        </Card>

        {/* DÍA DE LA ESPERANZA */}
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
          <div className="space-y-2">
            <Paragraph color="light">
              La fiesta de la Virgen de la Esperanza se celebra cada 18 de
              diciembre, justo en la última semana del tiempo de Adviento. Esta
              advocación mariana simboliza la esperanza y la expectación del
              nacimiento de Cristo.
            </Paragraph>
            <Paragraph color="light">
              Para la Cofradía de la Esperanza, este día es un momento de
              reafirmación de la devoción a nuestra Titular, recordando el
              mensaje de esperanza y confianza que María nos transmite en esta
              temporada de Adviento.
            </Paragraph>
            <Paragraph color="light">
              Tras la Santa Misa se comparte chocolate caliente con bollo como
              signo de fraternidad.
            </Paragraph>
          </div>
        </Card>
      </div>

      <FinalNote>
        La Cofradía manifiesta su gratitud a Teresa López-Brea Alarza por su
        dedicación en la redacción y cuidado de los textos.
      </FinalNote>

      {/* espacio extra móvil */}
      <div className="mb-12 md:mb-0" />
    </SectionContainer>
  );
}
