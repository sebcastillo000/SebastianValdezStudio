// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Dirección pública del sitio (la usa Open Graph).
  // PROVISIONAL: cámbiala por la dirección .pages.dev que te dé Cloudflare en la clase 2.
  site: "https://mi-sitio.pages.dev",
  vite: {
    plugins: [tailwindcss()],
  },
});
