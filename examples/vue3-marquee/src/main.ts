import './assets/css/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css"
import { VCodeBlock } from '@wdns/vue-code-block';

const app = createApp(App);
app.component('Marquee', Marquee);
app.component('VCodeBlock', VCodeBlock);
app.mount('#app')
