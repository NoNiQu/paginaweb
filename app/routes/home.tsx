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

/* ====== Tipos y utilidades de Cultos ====== */
type Culto =
  | {
      id: string;
      title: string;
      start: Date;
      end?: undefined;
      href: string;
      type: "single";
    }
  | {
      id: string;
      title: string;
      start: Date;
      end: Date;
      href: string;
      type: "range";
    };

const MANY_COUNT = 5;

function formatRangeShort(start: Date, end: Date) {
  const sameMonth =
    start.getFullYear() === end.getFullYear() &&
    start.getMonth() === end.getMonth();
  const day = (d: Date) => d.toLocaleDateString("es-ES", { day: "2-digit" });
  const monthYear = (d: Date) =>
    d.toLocaleDateString("es-ES", { month: "long", year: "numeric" });
  return sameMonth
    ? `del ${day(start)} al ${day(end)} de ${monthYear(end)}`
    : `del ${start.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })} al ${end.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })}`;
}

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

function isInRange(date: Date, start: Date, end: Date) {
  const t = date.getTime();
  return t >= start.getTime() && t <= end.getTime();
}

function monthOverlap(
  start: Date,
  end: Date,
  monthStart: Date,
  monthEnd: Date
) {
  return start <= monthEnd && end >= monthStart;
}

/* ====== Tipos y fetch de Noticias ====== */
type NewsItem = {
  id: string;
  title: string;
  href: string;
  excerpt?: string;
  date?: string;
  image?: string;
};

const NEWS_MAX = 3;

function normalizeNews(data: any): NewsItem[] {
  if (!Array.isArray(data)) return [];
  return data.map(
    (n: any, i: number): NewsItem => ({
      id: n.id ?? n.slug ?? String(n.title ?? i),
      title: n.title ?? "Sin título",
      href: n.href ?? n.url ?? (n.slug ? `/noticias/${n.slug}` : "/noticias"),
      excerpt: n.excerpt ?? n.summary ?? "",
      date: n.date ?? n.publishedAt ?? undefined,
      image: n.image ?? n.cover ?? undefined,
    })
  );
}

/* ====== Página Home ====== */
export default function Home() {
  /* ==== HERO ==== */
  const today = new Date();
  const midnight = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  ).getTime();

  // Construimos cultos de este y siguiente año
  const eventsThisYear = buildCultos(CURRENT_YEAR);
  const eventsNextYear = buildCultos(CURRENT_YEAR + 1);

  // Candidatos futuros (incluye rangos en curso)
  const futureCandidates: Culto[] = [
    ...eventsThisYear,
    ...eventsNextYear,
  ].filter(
    (e) =>
      (e.type === "single" && e.start.getTime() >= midnight) ||
      (e.type === "range" && e.end.getTime() >= midnight)
  );

  futureCandidates.sort((a, b) => a.start.getTime() - b.start.getTime());

  const runningNow = futureCandidates.find(
    (e) => e.type === "range" && isInRange(today, e.start, e.end!)
  );
  const nextCulto = runningNow ?? futureCandidates[0];

  // Si hay siguiente culto, miramos cuántos hay en el mismo mes/año que él
  let sameMonthList: Culto[] = [];
  if (nextCulto) {
    const y = nextCulto.start.getFullYear();
    const m = nextCulto.start.getMonth();
    const monthStart = new Date(y, m, 1);
    const monthEnd = new Date(y, m + 1, 0);

    // Tomamos el pool del año correcto
    const pool = y === CURRENT_YEAR ? eventsThisYear : buildCultos(y);

    sameMonthList = pool.filter((e) => {
      if (e.type === "single") {
        return e.start.getFullYear() === y && e.start.getMonth() === m;
      } else {
        return monthOverlap(e.start, e.end, monthStart, monthEnd);
      }
    });
  }

  const showManyOfSameMonth = sameMonthList.length >= MANY_COUNT;

  return (
    <div className="w-full font-body">
      {/* ===== HERO ===== */}
      <section className="relative w-full min-h-[100svh] overflow-hidden">
        <picture className="absolute inset-0 z-0 block">
          <source media="(max-width: 640px)" srcSet="/hero/heroB.jpg" />
          <img
            src="/hero/heroA.jpg"
            alt="Cofradía de la Esperanza"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 66%" }}
            loading="eager"
            decoding="sync"
          />
        </picture>
        <div className="absolute inset-0 z-10 bg-black/25" />
        <div className="absolute inset-x-0 top-0 z-20 h-40 sm:h-56 bg-gradient-to-b from-black/90 via-black/45 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 z-20 h-36 sm:h-48 bg-gradient-to-t from-black/55 via-black/35 to-transparent pointer-events-none" />
        <div className="relative z-30 flex items-end justify-center text-center min-h-[100svh] px-4 pb-8 sm:pb-16 lg:pb-20">
          <div className="flex flex-col items-center">
            <img
              src="/hero/headerB.png"
              alt="Nuestra Señora de la Esperanza"
              className="only-desktop block w-[min(65vw,550px)] h-auto drop-shadow-[0_6px_24px_rgba(0,0,0,0.9)]"
              loading="eager"
              decoding="sync"
            />
            <img
              src="/hero/headerB.png"
              alt="Nuestra Señora de la Esperanza"
              className="only-mobile block w-[min(78vw,300px)] h-auto drop-shadow-[0_6px_24px_rgba(0,0,0,0.9)]"
              loading="eager"
              decoding="sync"
            />
            <p className="mt-5 sm:mt-7 text-base sm:text-xl text-white drop-shadow-lg max-w-3xl mx-auto">
              Tradición, Fe y Esperanza en el corazón de Toledo
            </p>
          </div>
        </div>
      </section>

      {/* ===== HISTORIA | TITULAR ===== */}
      <section aria-label="Historia y Titular" className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Historia */}
          <div className="bg-[#5B4636] text-white">
            <div className="relative flex min-h-[380px] md:min-h-[420px] flex-col justify-between p-8 sm:p-12">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-display sc text-3xl sm:text-4xl">
                  NUESTRA HISTORIA
                </h2>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/95">
                  La Cofradía hunde sus raíces en la devoción a la Virgen de la
                  Esperanza. A lo largo de los años, hermanos y devotos han
                  mantenido viva la tradición, el servicio y la caridad,
                  participando en cultos, procesiones y vida parroquial.
                </p>
              </div>
              <div className="mt-8 sm:mt-10 flex justify-center pb-2">
                <a
                  href="/historia"
                  className="inline-flex items-center justify-center rounded-full bg-white text-[#5B4636] hover:bg-neutral-100 font-display sc px-6 py-3 text-base shadow-md transition"
                >
                  VER HISTORIA
                </a>
              </div>
            </div>
          </div>

          {/* Titular */}
          <div className="bg-[#053C2F] text-white">
            <div className="relative flex min-h-[380px] md:min-h-[420px] flex-col justify-between p-8 sm:p-12">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-display sc text-3xl sm:text-4xl">
                  TITULAR
                </h2>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/95">
                  La sagrada imagen de la Virgen de la Esperanza es una talla de
                  gran unción y delicadeza. Su iconografía invita a la oración y
                  a la confianza, siendo centro de la devoción de la cofradía y
                  protagonista de nuestros cultos y procesiones.
                </p>
              </div>
              <div className="mt-8 sm:mt-10 flex justify-center pb-2">
                <a
                  href="/virgendelaesperanza"
                  className="inline-flex items-center justify-center rounded-full bg-white text-[#053C2F] hover:bg-emerald-50 font-display sc px-6 py-3 text-base shadow-md transition"
                >
                  VER TITULAR
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CULTOS (Próximo + “muchos en el mismo mes”) ===== */}
      <section className="pt-12 pb-8">
        <SectionContainer>
          <SectionHeader>Cultos</SectionHeader>

          {/* Próximo culto */}
          {nextCulto && (
            <Card className="mt-6 p-6 bg-[#053C2F] text-white">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="uppercase tracking-wide text-white/80 text-sm">
                    Próximo culto
                  </p>
                  <h3 className="text-2xl font-display">{nextCulto.title}</h3>
                  <p className="mt-1 opacity-90">
                    {nextCulto.type === "single"
                      ? formatLong(nextCulto.start)
                      : isInRange(today, nextCulto.start, nextCulto.end!)
                        ? `En curso · ${formatRangeShort(nextCulto.start, nextCulto.end!)}`
                        : formatRangeShort(nextCulto.start, nextCulto.end!)}
                  </p>
                </div>
                <div>
                  <a
                    href={nextCulto.href}
                    className="inline-flex items-center justify-center rounded-full bg-white text-[#053C2F] hover:bg-emerald-50 font-display sc px-5 py-2 text-base shadow-md transition"
                  >
                    VER DETALLES
                  </a>
                </div>
              </div>
            </Card>
          )}

          {/* Si hay MUCHOS en el MISMO mes del próximo, muéstralos todos */}
          {showManyOfSameMonth && (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sameMonthList.map((e) => (
                <Card
                  key={`${e.id}-${e.start.toISOString()}`}
                  as="a"
                  href={e.href}
                  className="p-5"
                >
                  <h5 className="text-xl font-display">{e.title}</h5>
                  <p className="mt-1 text-gray-700">
                    {e.type === "single"
                      ? formatLong(e.start)
                      : formatRangeShort(e.start, e.end!)}
                  </p>
                </Card>
              ))}
            </div>
          )}

          {/* Botón centrado */}
          <div className="mt-6 flex justify-center">
            <a
              href="/cultos"
              className="inline-flex items-center justify-center rounded-full bg-[#053C2F] text-white hover:opacity-95 font-display sc px-6 py-3 text-base shadow-md transition"
            >
              VER TODOS LOS CULTOS
            </a>
          </div>
        </SectionContainer>
      </section>

      {/* ===== NOTICIAS (máx 3, centradas; vacío → mensaje) ===== */}
      <section className="pt-8 pb-24 sm:pb-16">
        <SectionContainer>
          <SectionHeader>Noticias</SectionHeader>
          <p className="mt-8 text-center text-gray-900">
            No hay noticias disponibles por el momento.
          </p>
        </SectionContainer>
      </section>
    </div>
  );
}
