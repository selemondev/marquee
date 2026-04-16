import { defineConfig } from "astro/config";
// @ts-check
import tailwindcss from "@tailwindcss/vite";

import vue from "@astrojs/vue";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  /** @type {import("astro").AstroUserConfig} */ vite: {
    plugins: tailwindcss(),
  },

  integrations: [vue()],
  adapter: vercel(),
});
