import { useEffect, useMemo, useState } from "react";
import type { Cargo } from "../ui/DirectivoCard";

type State = {
  data: Cargo[];
  loading: boolean;
  error: string | null;
};

const TXT_URL = "/data/junta.txt";

function parseLine(line: string): Cargo | null {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) return null;

  const parts = trimmed.split("|").map((s) => s.trim());
  if (parts.length < 3) return null;

  const [cargo, nombre, apellidos] = parts;
  if (!cargo || !nombre || !apellidos) return null;

  return { cargo, nombre, apellidos };
}

function parseTxt(txt: string): Cargo[] {
  return txt
    .split(/\r?\n/)
    .map(parseLine)
    .filter((x): x is Cargo => Boolean(x));
}

export function useJuntaFromTxt(): State {
  const [state, setState] = useState<State>({ data: [], loading: true, error: null });
  const cacheBust = useMemo(() => `cb=${Date.now()}`, []);

  useEffect(() => {
    let alive = true;

    fetch(`${TXT_URL}?${cacheBust}`, { cache: "no-store" })
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const txt = await res.text();
        const data = parseTxt(txt);
        if (!data.length) throw new Error("El .txt está vacío o mal formateado.");
        if (alive) setState({ data, loading: false, error: null });
      })
      .catch((err) => {
        console.error("[useJuntaFromTxt] error:", err);
        if (alive) setState({ data: [], loading: false, error: err.message });
      });

    return () => {
      alive = false;
    };
  }, [cacheBust]);

  return state;
}
