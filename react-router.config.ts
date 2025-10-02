import { vercelPreset } from "@vercel/react-router/vite";
import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,              // SPA (solo cliente)
  presets: [vercelPreset()] // elimina el WARN y activa integración Vercel
} satisfies Config;
