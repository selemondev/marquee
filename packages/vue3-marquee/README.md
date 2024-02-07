<div align="center">

# Marquee <br> 🌬️

> A beautiful marquee component for Vue.

</div>

## Installation

```bash
npm install @selemondev/vue3-marquee
```
or you can skip npm install, and just copy and paste the source code into your component like Shadcn Vue (don't forget to also copy the tailwind config if you do this).

## Register it as a global component

```js
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css"
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.component('Marquee', Marquee)
app.mount('#app')
```

or 

## Register it as a local component

```js
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css"
```

## Nuxt

If you are using Nuxt 3, you can simply register it as a Nuxt plugin as shown below:

```ts
// plugins/marquee.ts

import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css"
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('Marquee', Marquee)
})
```

## Usage

The library has a few props that are self-explanatory; you can get it running in no time. See the web examples for more details.

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

