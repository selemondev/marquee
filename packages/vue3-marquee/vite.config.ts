import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import Vue from "unplugin-vue/rolldown";
import { defineConfig } from "vite-plus";
export default defineConfig({
  plugins: [tailwindcss(), vue()],
  pack: {
    entry: ["src/index.ts"],
    format: ["esm"],
    clean: true,
    minify: true,
    plugins: [Vue({ isProduction: true })],
    dts: { vue: true },
    target: "chrome100",
    exports: true,
    platform: "browser",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
