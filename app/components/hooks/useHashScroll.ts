import { useEffect } from "react";

/** Desplaza suavemente al elemento con id que venga en window.location.hash */
export function useHashScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }, []);
}
