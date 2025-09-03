// src/utils/cultos.ts
import {
  CURRENT_YEAR,
  secondSundayOfNovember,
  corpusThursday,
  pentecostTuesday,
  octavaTuesday,
  novenaRange,
} from "./dates";

/* Tipos */
export type Culto =
  | { id: string; title: string; start: Date; href: string; type: "single"; end?: undefined }
  | { id: string; title: string; start: Date; end: Date; href: string; type: "range" };

/* Helpers compartidos */
export function formatRangeShort(start: Date, end: Date) {
  const sameMonth = start.getFullYear() === end.getFullYear() && start.getMonth() === end.getMonth();
  const day = (d: Date) => d.toLocaleDateString("es-ES", { day: "2-digit" });
  const monthYear = (d: Date) => d.toLocaleDateString("es-ES", { month: "long", year: "numeric" });
  return sameMonth
    ? `del ${day(start)} al ${day(end)} de ${monthYear(end)}`
    : `del ${start.toLocaleDateString("es-ES", { day: "2-digit", month: "long", year: "numeric" })} al ${end.toLocaleDateString("es-ES", { day: "2-digit", month: "long", year: "numeric" })}`;
}

export function isInRange(date: Date, start: Date, end: Date) {
  const t = date.getTime();
  return t >= start.getTime() && t <= end.getTime();
}

export function monthOverlap(start: Date, end: Date, monthStart: Date, monthEnd: Date) {
  return start <= monthEnd && end >= monthStart;
}

/* Construcción de cultos (año dado) */
export function buildCultos(year: number): Culto[] {
  const diaEsperanza = new Date(year, 11, 18);
  const patrocinio = secondSundayOfNovember(year);
  const corpus = corpusThursday(year);
  const voto = pentecostTuesday(year);
  const octava = octavaTuesday(year);
  const { start: novenaInicio, end: novenaFin } = novenaRange(year);

  return [
    { id: "novena", title: "Novena en honor a la Virgen de la Esperanza", start: novenaInicio, end: novenaFin, href: "/cultos#novena", type: "range" },
    { id: "voto", title: "Procesión del Voto", start: voto, href: "/cultos#voto", type: "single" },
    { id: "octava", title: "Procesión de la Octava", start: octava, href: "/cultos#octava", type: "single" },
    { id: "corpus", title: "Corpus Christi", start: corpus, href: "/cultos#corpus", type: "single" },
    { id: "patrocinio", title: "Día de Patrocinio", start: patrocinio, href: "/cultos#patrocinio", type: "single" },
    { id: "esperanza", title: "Día de la Esperanza", start: diaEsperanza, href: "/cultos#esperanza", type: "single" },
  ];
}

/* (Opcional) Próximos cultos desde 'from' */
export function upcomingCultos(from: Date, year = CURRENT_YEAR) {
  const list = buildCultos(year).concat(buildCultos(year + 1));
  return list
    .filter((c) => (c.type === "single" ? c.start >= from : isInRange(from, c.start, c.end) || c.start >= from))
    .sort((a, b) => a.start.getTime() - b.start.getTime());
}
