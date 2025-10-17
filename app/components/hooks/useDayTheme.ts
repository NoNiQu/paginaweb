import { useEffect } from "react";

export function useDayTheme() {
  useEffect(() => {
    // Elimina clases de modo oscuro (si las hay)
    document.documentElement.classList.remove("dark");
    document.body.classList.remove("dark");

    // Fuerza el color de fondo claro
    document.documentElement.style.backgroundColor = "#ffffff";
    document.body.style.backgroundColor = "#ffffff";

    // Si hay algún tema almacenado en localStorage (p. ej. 'dark'), lo sobreescribe
    try {
      localStorage.setItem("theme", "light");
    } catch {
      /* ignore */
    }

    // Si alguien intenta cambiar el tema desde el SO, lo anulamos
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
      document.documentElement.style.backgroundColor = "#ffffff";
      document.body.style.backgroundColor = "#ffffff";
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
}
