export const installCmd = `npm install @selemondev/vue3-marquee`;
export const globalImportSnippet = `import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css"
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.component('Marquee', Marquee)
app.mount('#app')`

export const localImportSnippet = `import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css"`;

export const nuxtPluginSnippet = `// ~/plugins/marquee.ts

import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css"
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('Marquee', Marquee)
})`;

export const fadeCodeSnippet = `<Marquee :fade="true">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>`;

export const reverseCodeSnippet = `<Marquee :reverse="true" :fade="true">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>`;

export const pauseOnHoverSnippet = `<Marquee :pauseOnHover="true" :fade="true">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>`;

export const verticalCodeSnippet = `<Marquee class="h-[400px]" direction="up" :fade="true">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>`;

export const customGapAndSpeedSnippet = `<Marquee class="gap-[3rem] [--duration:5s] [--gap:3rem]" innerClassName="gap-[3rem]" :fade="true">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>`
;

export const reducedMotionSnippet = `<Marquee class="py-4 motion-reduce:overflow-auto" innerClassName="motion-reduce:animate-none motion-reduce:first:hidden">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>`
;