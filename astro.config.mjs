// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Dirección pública del sitio publicada en Cloudflare (la usa Open Graph).
  site: "https://sebastianvaldezstudio.sebcastillo000.workers.dev",
  vite: {
    plugins: [tailwindcss()],
  },
});
