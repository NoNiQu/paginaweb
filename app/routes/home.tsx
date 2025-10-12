// src/pages/home.tsx
import { SectionContainer } from "../components/shared/SectionContainer";
import { SectionHeader } from "../components/shared/SectionHeader";
import { NewsEmptyState } from "../components/news/NewsEmptyState";
import { config } from "../config";
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
import { isInRange } from "../utils/isInRange";

// componentes optimizados
import { HomeHero } from "../components/home/HomeHero";
import { SplitCTA } from "../components/home/SplitCTA";
import { SedeCanonicaSection } from "../components/home/SedeCanonicaSection";
import { NextCultoBanner } from "../components/home/NextCultoBanner";
import { HomeCultoCard } from "../components/home/HomeCultoCard";

const MANY_COUNT = 5;

type Culto =
  | {
      id: string;
      title: string;
      start: Date;
      href: string;
      type: "single";
      end?: undefined;
    }
  | {
      id: string;
      title: string;
      start: Date;
      end: Date;
      href: string;
      type: "range";
    };

function buildCultos(year: number): Culto[] {
  const diaEsperanza = new Date(year, 11, 18);
  const patrocinio = secondSundayOfNovember(year);
  const corpus = corpusThursday(year);
  const voto = pentecostTuesday(year);
  const octava = octavaTuesday(year);
  const { start: novenaInicio, end: novenaFin } = novenaRange(year);

  return [
    {
      id: "novena",
      title: "Novena en honor a la Virgen de la Esperanza",
      start: novenaInicio,
      end: novenaFin,
      href: "/cultos#novena",
      type: "range",
    },
    {
      id: "voto",
      title: "Procesión del Voto",
      start: voto,
      href: "/cultos#voto",
      type: "single",
    },
    {
      id: "octava",
      title: "Procesión de la Octava",
      start: octava,
      href: "/cultos#octava",
      type: "single",
    },
    {
      id: "corpus",
      title: "Corpus Christi",
      start: corpus,
      href: "/cultos#corpus",
      type: "single",
    },
    {
      id: "patrocinio",
      title: "Día de Patrocinio",
      start: patrocinio,
      href: "/cultos#patrocinio",
      type: "single",
    },
    {
      id: "esperanza",
      title: "Día de la Esperanza",
      start: diaEsperanza,
      href: "/cultos#esperanza",
      type: "single",
    },
  ];
}

export default function Home() {
  const today = new Date();
  const midnight = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  ).getTime();

  const eventsThisYear = buildCultos(CURRENT_YEAR);
  const eventsNextYear = buildCultos(CURRENT_YEAR + 1);

  const futureCandidates: Culto[] = [
    ...eventsThisYear,
    ...eventsNextYear,
  ].filter(
    (e) =>
      (e.type === "single" && e.start.getTime() >= midnight) ||
      (e.type === "range" && e.end!.getTime() >= midnight)
  );
  futureCandidates.sort((a, b) => a.start.getTime() - b.start.getTime());

  const runningNow = futureCandidates.find(
    (e) => e.type === "range" && isInRange(today, e.start, e.end!)
  );
  const nextCulto = runningNow ?? futureCandidates[0];

  const month = nextCulto?.start?.getMonth();
  const sameMonthList =
    nextCulto && month !== undefined
      ? buildCultos(nextCulto.start.getFullYear()).filter((e) =>
          e.type === "single"
            ? e.start.getMonth() === month
            : e.start.getMonth() <= month && e.end.getMonth() >= month
        )
      : [];

  return (
    <div className="w-full font-body">
      {/* ===== HERO ===== */}
      <HomeHero />

      {/* ===== HISTORIA | TITULAR ===== */}
      <section aria-label="Historia y Titular" className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <SplitCTA
            title="NUESTRA HISTORIA"
            text="La Cofradía hunde sus raíces en la devoción a la Virgen de la Esperanza. A lo largo de los años, hermanos y devotos han mantenido viva la tradición, el servicio y la caridad, participando en cultos, procesiones y vida parroquial."
            href="/historia"
            buttonLabel="VER HISTORIA"
            bgClass="bg-[#5B4636] text-white"
            buttonVariant="light"
          />
          <SplitCTA
            title="TITULAR"
            text="La sagrada imagen de la Virgen de la Esperanza es una talla de gran unción y delicadeza. Su iconografía invita a la oración y a la confianza, siendo centro de la devoción de la cofradía y protagonista de nuestros cultos y procesiones."
            href="/virgendelaesperanza"
            buttonLabel="VER TITULAR"
            bgClass="bg-[#053C2F] text-white"
            buttonVariant="light"
          />
        </div>
      </section>

      {/* ===== SEDE CANÓNICA ===== */}
      <SedeCanonicaSection
        title="SEDE CANÓNICA"
        paragraph="La Cofradía de la Esperanza tiene su sede en la histórica Iglesia de San Cipriano, uno de los templos más antiguos de Toledo. Este lugar es centro de oración, tradición y encuentro, donde se celebran los cultos principales y se mantiene viva la devoción a la Virgen de la Esperanza."
        href="/sedecanonica"
        buttonLabel="SABER MÁS"
      />

      {/* ===== CULTOS ===== */}
      <section className="pt-12 pb-8">
        <SectionContainer>
          <SectionHeader>Cultos</SectionHeader>

          {nextCulto && (
            <NextCultoBanner
              title={nextCulto.title}
              href={nextCulto.href}
              detail={
                nextCulto.type === "single"
                  ? formatLong(nextCulto.start)
                  : isInRange(today, nextCulto.start, nextCulto.end!)
                    ? `En curso · ${formatRangeShort(nextCulto.start, nextCulto.end!)}`
                    : formatRangeShort(nextCulto.start, nextCulto.end!)
              }
            />
          )}

          {sameMonthList.length >= MANY_COUNT && (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sameMonthList.map((e) => (
                <HomeCultoCard
                  key={`${e.id}-${e.start.toISOString()}`}
                  e={e}
                  formatRange={formatRangeShort}
                />
              ))}
            </div>
          )}

          <div className="mt-6 flex justify-center">
            <a
              href="/cultos"
              className="inline-flex items-center justify-center rounded-full bg-[#053C2F] text-white hover:opacity-95 font-body font-medium sc px-6 py-3 text-base shadow-md transition"
            >
              VER TODOS LOS CULTOS
            </a>
          </div>
        </SectionContainer>
      </section>

      {/* ===== NOTICIAS ===== */}
      <section className="pb-24 sm:pb-16">
        <SectionContainer>
          <SectionHeader>Noticias</SectionHeader>

          {/* Estado sin noticias como componente reutilizable */}
          <NewsEmptyState
            socialLinks={[
              {
                href: config.instagramUrl,
                icon: "/iconos/instagram.svg",
                label: "Instagram",
              },
              {
                href: config.facebookUrl,
                icon: "/iconos/facebook.svg",
                label: "Facebook",
              },
            ]}
          />
        </SectionContainer>
      </section>

      {/* espacio extra móvil */}
      <div className="mb-12 md:mb-0" />
    </div>
  );
}
