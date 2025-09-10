import { SectionContainer } from "../components/shared/SectionContainer";
import { SectionHeader } from "../components/shared/SectionHeader";
import { Card } from "../components/ui/Card";
import { config } from "../config";
import { CURRENT_YEAR, formatLong } from "../utils/dates";
import {
  buildCultos,
  formatRangeShort,
  isInRange,
  monthOverlap,
  type Culto,
} from "../utils/cultos";

/* ====== Página Home ====== */
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

  let sameMonthList: Culto[] = [];
  if (nextCulto) {
    const y = nextCulto.start.getFullYear();
    const m = nextCulto.start.getMonth();
    const monthStart = new Date(y, m, 1);
    const monthEnd = new Date(y, m + 1, 0);
    const pool = y === CURRENT_YEAR ? eventsThisYear : buildCultos(y);

    sameMonthList = pool.filter((e) =>
      e.type === "single"
        ? e.start.getFullYear() === y && e.start.getMonth() === m
        : monthOverlap(e.start, e.end!, monthStart, monthEnd)
    );
  }

  const showManyOfSameMonth = sameMonthList.length >= 5;

  return (
    <div className="w-full font-body">
      {/* ===== HERO ===== */}
      <section className="relative w-full overflow-hidden min-h-hero">
        <picture className="absolute inset-0 z-0 block">
          {/* Móvil */}
          <source media="(max-width: 640px)" srcSet="/hero/heroB.jpg" />

          {/* Tablet vertical */}
          <source
            media="(min-width: 641px) and (max-width: 1024px) and (orientation: portrait)"
            srcSet="/hero/heroM.png"
          />

          {/* Tablet apaisado */}
          <source
            media="(min-width: 641px) and (max-width: 1024px) and (orientation: landscape)"
            srcSet="/hero/heroT.png"
          />

          {/* Desktop */}
          <source media="(min-width: 1025px)" srcSet="/hero/heroO.png" />

          {/* Fallback correcto */}
          <img
            src="/hero/heroO.png"
            alt="Cofradía de la Esperanza"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 66%" }}
            loading="eager"
            decoding="sync"
          />
        </picture>

        {/* Overlays */}
        <div className="absolute inset-0 z-10 bg-black/25" />
        <div className="absolute inset-x-0 top-0 z-20 h-40 sm:h-56 bg-gradient-to-b from-black/90 via-black/45 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 z-20 h-36 sm:h-48 bg-gradient-to-t from-black/55 via-black/35 to-transparent pointer-events-none" />

        {/* Contenido: todo al fondo */}
        <div className="relative z-30 flex flex-col justify-end items-center text-center min-h-hero px-4 pb-8 sm:pb-16 lg:pb-20 pt-safe-nav hero-stack">
          <div className="flex flex-col items-center">
            <img
              src="/hero/headerB.png"
              alt="Nuestra Señora de la Esperanza"
              className="only-desktop block drop-shadow-[0_6px_24px_rgba(0,0,0,1)]"
              style={{ width: "min(65vw, 550px)" }}
              loading="eager"
              decoding="sync"
            />
            <img
              src="/hero/headerB.png"
              alt="Nuestra Señora de la Esperanza"
              className="only-mobile block drop-shadow-[0_6px_24px_rgba(0,0,0,1)]"
              style={{ width: "min(78vw, 300px)" }}
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
            <div className="relative flex min-h-[380px] md:min-h-[420px] flex-col justify-between p-8 sm:p-12 text-center">
              <h2 className="font-display sc text-3xl sm:text-4xl">
                NUESTRA HISTORIA
              </h2>
              <div className="flex-grow flex items-center">
                <p className="text-base sm:text-lg leading-relaxed text-white/95 w-full">
                  La Cofradía hunde sus raíces en la devoción a la Virgen de la
                  Esperanza. A lo largo de los años, hermanos y devotos han
                  mantenido viva la tradición, el servicio y la caridad,
                  participando en cultos, procesiones y vida parroquial.
                </p>
              </div>
              <div className="mt-8 sm:mt-10">
                <a
                  href="/historia"
                  className="inline-flex items-center justify-center rounded-full bg-white text-[#5B4636] hover:bg-neutral-100 font-body font-medium sc px-6 py-3 text-base shadow-md transition"
                >
                  VER HISTORIA
                </a>
              </div>
            </div>
          </div>

          {/* Titular */}
          <div className="bg-[#053C2F] text-white">
            <div className="relative flex min-h-[380px] md:min-h-[420px] flex-col justify-between p-8 sm:p-12 text-center">
              <h2 className="font-display sc text-3xl sm:text-4xl">TITULAR</h2>
              <div className="flex-grow flex items-center">
                <p className="text-base sm:text-lg leading-relaxed text-white/95 w-full">
                  La sagrada Virgen de la Esperanza es una talla de gran unción
                  y delicadeza. Su iconografía invita a la oración y a la
                  confianza, siendo centro de la devoción de la cofradía y
                  protagonista de nuestros cultos y procesiones.
                </p>
              </div>
              <div className="mt-8 sm:mt-10">
                <a
                  href="/virgendelaesperanza"
                  className="inline-flex items-center justify-center rounded-full bg-white text-[#053C2F] hover:bg-emerald-50 font-body font-medium sc px-6 py-3 text-base shadow-md transition"
                >
                  VER TITULAR
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CULTOS ===== */}
      <section className="pt-12 pb-8">
        <SectionContainer>
          <SectionHeader>Cultos</SectionHeader>

          {nextCulto && (
            <Card className="mt-6 p-6 bg-[#053C2F] text-white">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="uppercase tracking-wide text-white/80 text-sm">
                    Próximo culto
                  </p>
                  <h3 className="text-2xl font-body">{nextCulto.title}</h3>
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
                    className="inline-flex items-center justify-center rounded-full bg-white text-[#053C2F] hover:bg-emerald-50 font-body font-medium sc px-5 py-2 text-base shadow-md transition"
                  >
                    VER DETALLES
                  </a>
                </div>
              </div>
            </Card>
          )}

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

          <div className="mt-6 flex flex-col items-center text-center gap-8 w-full">
            {/* Misma imagen que en /noticias */}
            <img
              src="/images/noticias.png"
              alt="No hay noticias disponibles"
              className="max-w-lg w-full h-auto"
              loading="lazy"
            />

            {/* Redes sociales */}
            <div className="w-full flex flex-col gap-4">
              <p className="text-gray-800 mt-2 mb-4">
                Síguenos en nuestras redes sociales para estar al día de
                cualquier novedad sobre la Cofradía.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <Card
                  as="a"
                  href={config.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center justify-center gap-4 p-4 h-14 w-full"
                  aria-label="Instagram de la Cofradía"
                >
                  <img
                    src="/iconos/instagram.svg"
                    alt="Instagram"
                    className="w-7 h-7"
                    loading="lazy"
                  />
                  <strong className="text-white text-lg">Instagram</strong>
                </Card>

                <Card
                  as="a"
                  href={config.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center justify-center gap-4 p-4 h-14 w-full"
                  aria-label="Facebook de la Cofradía"
                >
                  <img
                    src="/iconos/facebook.svg"
                    alt="Facebook"
                    className="w-7 h-7"
                    loading="lazy"
                  />
                  <strong className="text-white text-lg">Facebook</strong>
                </Card>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
