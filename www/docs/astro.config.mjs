// @ts-check
import tailwindcss from "@tailwindcss/vite";

import vue from "@astrojs/vue";

// https://astro.build/config
export default /** @type {import("astro").AstroUserConfig} */ ({
  vite: {
    plugins: tailwindcss(),
  },

  integrations: [vue()],
});
