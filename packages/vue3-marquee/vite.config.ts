import tailwindcss from "@tailwindcss/vite";
import LightningCSS from "unplugin-lightningcss/vite";
import { defineConfig } from "vite";
export default defineConfig({ plugins: [tailwindcss(), LightningCSS()] });
