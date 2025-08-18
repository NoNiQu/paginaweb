// Cálculos de fechas móviles para el calendario litúrgico/cultos

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
  const nd = new Date(d);
  nd.setDate(nd.getDate() + days);
  return nd;
}

export function secondSundayOfNovember(year: number): Date {
  const first = new Date(year, 10, 1); // 0=Ene ... 10=Nov
  const day = first.getDay(); // 0=Dom
  const firstSunday = addDays(first, (7 - day) % 7);
  return addDays(firstSunday, 7);
}

export function corpusThursday(year: number): Date {
  const easter = easterSunday(year);
  return addDays(easter, 60); // Corpus (jueves)
}

export function formatLong(d: Date): string {
  return d.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
