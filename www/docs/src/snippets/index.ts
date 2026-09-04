export const installCommands = {
  pnpm: "pnpm add @selemondev/vue3-marquee",
  npm: "npm install @selemondev/vue3-marquee",
  yarn: "yarn add @selemondev/vue3-marquee",
  bun: "bun add @selemondev/vue3-marquee",
};

export const localImportSnippet = `<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/style.css";
</script>

<template>
  <Marquee fade pauseOnHover>
    <img src="/logos/acme.svg" alt="Acme" />
    <img src="/logos/globex.svg" alt="Globex" />
    <img src="/logos/initech.svg" alt="Initech" />
  </Marquee>
</template>`;

export const globalImportSnippet = `import { createApp } from "vue";
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/style.css";
import App from "./App.vue";

createApp(App).component("Marquee", Marquee).mount("#app");`;

export const nuxtPluginSnippet = `// plugins/marquee.ts
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/style.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Marquee", Marquee);
});`;

export const registerSnippets = {
  Component: { code: localImportSnippet, lang: "vue" },
  Global: { code: globalImportSnippet, lang: "ts" },
  Nuxt: { code: nuxtPluginSnippet, lang: "ts" },
} as const;

const items = `  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>`;

export const fadeCodeSnippet = `<Marquee fade>
${items}
</Marquee>`;

export const reverseCodeSnippet = `<Marquee reverse fade>
${items}
</Marquee>`;

export const pauseOnHoverSnippet = `<Marquee pauseOnHover fade>
${items}
</Marquee>`;

export const verticalCodeSnippet = `<Marquee class="h-100" direction="up" fade>
${items}
</Marquee>`;

export const customGapAndSpeedSnippet = `<Marquee
  class="gap-12 [--duration:12s] [--gap:3rem]"
  innerClassName="gap-12"
  fade
>
${items}
</Marquee>`;

export const reducedMotionSnippet = `<Marquee
  class="py-4 motion-reduce:overflow-auto"
  innerClassName="motion-reduce:animate-none motion-reduce:first:hidden"
>
${items}
</Marquee>`;

export interface PropDoc {
  name: string;
  type: string;
  def: string;
  desc: string;
}

export const propDocs: PropDoc[] = [
  {
    name: "direction",
    type: '"left" | "up"',
    def: '"left"',
    desc: "Axis the content travels along.",
  },
  { name: "reverse", type: "boolean", def: "false", desc: "Play the animation backwards." },
  { name: "fade", type: "boolean", def: "false", desc: "Mask both edges with a soft gradient." },
  {
    name: "pauseOnHover",
    type: "boolean",
    def: "false",
    desc: "Freeze the track while the pointer is over it.",
  },
  {
    name: "numberOfCopies",
    type: "number",
    def: "2",
    desc: "How many times the children are repeated to fill the track.",
  },
  {
    name: "innerClassName",
    type: "string",
    def: '""',
    desc: "Classes applied to each scrolling track.",
  },
  {
    name: "class",
    type: "string",
    def: '""',
    desc: "Classes for the outer container. Set --duration and --gap here.",
  },
];
