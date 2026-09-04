import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite-plus";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
    },
  },
  pack: {
    entry: ["src/index.ts"],
    format: ["esm"],
    clean: true,
    minify: true,
    fromVite: true,
    dts: { vue: true },
    target: "chrome100",
    platform: "browser",
    deps: {
      onlyBundle: ["clsx", "tailwind-merge"],
    },
    exports: {
      customExports(exports) {
        exports["./style.css"] = "./dist/style.css";
        return exports;
      },
    },
  },
  test: {
    environment: "happy-dom",
  },
});
