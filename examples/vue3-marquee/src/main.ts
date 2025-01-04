import './assets/css/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css"

const app = createApp(App);
app.component('Marquee', Marquee);
app.mount('#app')
