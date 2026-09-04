<div align="center">

# Marquee <br> 🌬️

> A beautiful marquee component for Vue ✨.

</div>

<!-- automd:badges color="green" license name="@selemondev/vue3-marquee" bundlephobia packagephobia -->

[![npm version](https://img.shields.io/npm/v/@selemondev/vue3-marquee?color=green)](https://npmjs.com/package/@selemondev/vue3-marquee)
[![npm downloads](https://img.shields.io/npm/dm/@selemondev/vue3-marquee?color=green)](https://npm.chart.dev/@selemondev/vue3-marquee)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@selemondev/vue3-marquee?color=green)](https://bundlephobia.com/package/@selemondev/vue3-marquee)
[![install size](https://badgen.net/packagephobia/install/@selemondev/vue3-marquee?color=green)](https://packagephobia.com/result?p=@selemondev/vue3-marquee)
[![license](https://img.shields.io/github/license/selemondev/marquee?color=green)](https://github.com/selemondev/marquee/blob/main/LICENSE)

<!-- /automd -->

## Installation

<!-- automd:pm-install name="@selemondev/vue3-marquee@latest" -->

```sh
# ✨ Auto-detect
npx nypm install @selemondev/vue3-marquee@latest

# npm
npm install @selemondev/vue3-marquee@latest

# yarn
yarn add @selemondev/vue3-marquee@latest

# pnpm
pnpm add @selemondev/vue3-marquee@latest

# bun
bun install @selemondev/vue3-marquee@latest

# deno
deno install npm:@selemondev/vue3-marquee@latest
```

<!-- /automd -->

or you can skip the npm install, and just copy and paste the source code into your component like Shadcn Vue (copy the `@theme` block from `src/assets/css/tailwind.css` too).

## Usage

Import the stylesheet once, then use the component locally:

```vue
<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/style.css";
</script>

<template>
  <Marquee fade pauseOnHover>
    <img src="/logos/acme.svg" alt="Acme" />
    <img src="/logos/globex.svg" alt="Globex" />
    <img src="/logos/initech.svg" alt="Initech" />
  </Marquee>
</template>
```

Or register it globally:

```ts
import { createApp } from "vue";
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/style.css";
import App from "./App.vue";

createApp(App).component("Marquee", Marquee).mount("#app");
```

### Nuxt

```ts
// plugins/marquee.ts
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/style.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Marquee", Marquee);
});
```

## Props

| Prop             | Type             | Default  | Description                                                         |
| ---------------- | ---------------- | -------- | ------------------------------------------------------------------- |
| `direction`      | `"left" \| "up"` | `"left"` | Axis the content travels along.                                     |
| `reverse`        | `boolean`        | `false`  | Play the animation backwards.                                       |
| `fade`           | `boolean`        | `false`  | Mask both edges with a soft gradient.                               |
| `pauseOnHover`   | `boolean`        | `false`  | Freeze the track while the pointer is over it.                      |
| `numberOfCopies` | `number`         | `2`      | How many times the children are repeated to fill the track.         |
| `innerClassName` | `string`         | `""`     | Classes applied to each scrolling track.                            |
| `class`          | `string`         | `""`     | Classes for the outer container. Set `--duration` and `--gap` here. |

Other attributes are forwarded to the outer container.

```vue
<Marquee class="gap-12 [--duration:12s] [--gap:3rem]" innerClassName="gap-12" fade>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>
```

The component styles ship in the `components` cascade layer, so your own utilities or plain CSS always override them. Tailwind is not required to use the component.

## Credits

- Inspired by [@devnomic's](https://github.com/devnomic) React Marquee component.

## License

Released under [MIT](/LICENSE) by [@selemondev](https://github.com/selemondev).
