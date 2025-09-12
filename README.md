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
pnpm install @selemondev/vue3-marquee@latest

# bun
bun install @selemondev/vue3-marquee@latest

# deno
deno install @selemondev/vue3-marquee@latest
```

<!-- /automd -->

or you can skip the npm install, and just copy and paste the source code into your component like Shadcn Vue (don't forget to also copy the tailwind config if you do this).

## Register it as a global component

```js
import Marquee from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/index.css"
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.component('Marquee', Marquee)
app.mount('#app')
```

or

## Register it as a local component

```js
import Marquee from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/index.css"
```

## Nuxt

If you are using Nuxt 3, you can simply register it as a Nuxt plugin as shown below:

```ts
// plugins/marquee.ts

import Marquee from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css"
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('Marquee', Marquee)
})
```

## Usage

The library has a few props that are self-explanatory, you can get it running in no time. See the web examples for more details.

```js
<Marquee
  :fade="true"
  direction="left"
  :reverse="false"
  :pauseOnHover="false"
  className="" // pass class to change gap or speed
  innerClassName="" // pass class to change gap or speed
>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
  <div>Content 4</div>
</Marquee>
```

This library is made specifically for Tailwind users, however you can also use vanilla CSS classes to override the gap.

## Credits

- Inspired by [@devnomic's](https://github.com/devnomic) React Marquee component.

## License

Released under [MIT](/LICENSE) by [@selemondev](https://github.com/selemondev).
