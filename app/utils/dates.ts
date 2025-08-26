// src/utils/dates.ts

// Año actual
export const CURRENT_YEAR = new Date().getFullYear();

// Algoritmo de Meeus/Jones/Butcher para el Domingo de Pascua (gregoriano)
export function easterSunday(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31); // 3=Marzo, 4=Abril
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

export function addDays(d: Date, days: number): Date {
  const nd = new Date(d.getFullYear(), d.getMonth(), d.getDate()); // normaliza a 00:00
  nd.setDate(nd.getDate() + days);
  return nd;
}

// Lunes de la semana (asumiendo semana que empieza en lunes)
export function mondayOfWeek(d: Date): Date {
  const base = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const dow = base.getDay(); // 0=Dom, 1=Lun, ..., 6=Sáb
  const diffSinceMonday = (dow + 6) % 7; // días transcurridos desde lunes
  base.setDate(base.getDate() - diffSinceMonday);
  return base;
}

// Corpus Christi (jueves): 60 días después de Pascua
export function corpusThursday(year: number): Date {
  return addDays(easterSunday(year), 60);
}

// ✅ “Día de la Octava”: el MARTES de la semana del Corpus
// (ej. 2025 → Corpus J 19/06 → Martes de esa semana 17/06)
export function octavaTuesday(year: number): Date {
  const corpus = corpusThursday(year);
  const mondayCorpusWeek = mondayOfWeek(corpus);
  return addDays(mondayCorpusWeek, 1); // martes
}

// ✅ Novena: del LUNES de la semana ANTERIOR al Corpus, 9 días (L–M)
// (ej. 2025 → inicio 09/06, fin 17/06)
export function novenaRange(year: number): { start: Date; end: Date } {
  const corpus = corpusThursday(year);
  const mondayCorpusWeek = mondayOfWeek(corpus);
  const start = addDays(mondayCorpusWeek, -7); // lunes de la semana anterior
  const end = addDays(start, 8); // 9 días en total (incluyendo ambos)
  return { start, end };
}

// Martes de Pentecostés (para la Procesión del Voto)
export function pentecostTuesday(year: number): Date {
  // Domingo de Pentecostés = Pascua + 49; Martes = +51
  return addDays(easterSunday(year), 51);
}

// Segundo domingo de noviembre (Patrocinio)
export function secondSundayOfNovember(year: number): Date {
  const first = new Date(year, 10, 1); // 10 = noviembre
  const dow = first.getDay(); // 0=Dom
  const firstSunday = addDays(first, (7 - dow) % 7);
  return addDays(firstSunday, 7);
}

// Formato largo en español, e.g. "martes, 17 de junio de 2025"
export function formatLong(d: Date): string {
  return d.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
