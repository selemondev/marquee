<script setup lang='ts'>
import { ref } from "vue";
import Card from "./components/Card.vue";
import GithubIcon from "./components/icons/GithubIcon.vue"
import CodeBlock from "./components/CodeBlock.vue";
interface TestimonialProps {
  name: string,
  title: string,
  avatar: string,
  content: string
}
const testimonials: TestimonialProps[] = [
  {
    name: "Selemondev",
    title: "Senior Frontend Developer",
    avatar: "https://github.com/selemondev.png",
    content:
      "Marquee Library has been a game-changer for our TypeScript projects. Its seamless integration and robust features have significantly improved our UI's dynamic capabilities.",
  },
  {
    name: "Raj Patel",
    title: "Tech Lead",
    avatar: "https://i.pravatar.cc/150?img=18",
    content:
      "I'm thoroughly impressed with Marquee's performance and ease of use. It made implementing complex scrolling texts a breeze, and the support for TypeScript is top-notch.",
  },
  {
    name: "Sofia Garcia",
    title: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/150?img=45",
    content:
      "As a designer, I appreciate how Marquee enhances the visual appeal of our applications. The flexibility it offers in styling and animation is fantastic.",
  },
  {
    name: "John Mack",
    title: "Full Stack Developer",
    avatar: "https://i.pravatar.cc/150?img=60",
    content:
      "Integrating Marquee into our full-stack TypeScript projects has been incredibly efficient. Its compatibility and ease of customization are ideal for our diverse project needs.",
  },
  {
    name: "Isabella Smith",
    title: "Project Manager",
    avatar: "https://i.pravatar.cc/150?img=32",
    content:
      "Marquee Library has consistently delivered beyond our expectations. It's not just a tool; it's an asset that enhances productivity and creativity in our TypeScript applications.",
  },
];
const installCmd = ref(`npm install @selemondev/vue3-marquee`);
const globalImportSnippet = ref(`import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css"
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.component('Marquee', Marquee)
app.mount('#app')`)

const localImportSnippet = ref(`import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css"`);

const fadeCodeSnippet = ref(`<Marquee :fade="true">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>`);

const reverseCodeSnippet = ref(`<Marquee :reverse="true" :fade="true">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>`);

const pauseOnHoverSnippet = ref(`<Marquee :pauseOnHover="true" :fade="true">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>`
);

const verticalCodeSnippet = ref(`<Marquee class="h-[400px]" direction="up" :fade="true">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>`
);

const customGapAndSpeedSnippet = ref(`<Marquee class="gap-[3rem] [--duration:5s] [--gap:3rem]" innerClassName="gap-[3rem]" :fade="true">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>`
);

const reducedMotionSnippet = ref(`<Marquee class="py-4 motion-reduce:overflow-auto" innerClassName="motion-reduce:animate-none motion-reduce:first:hidden">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>`
);

const nuxtPluginSnippet = ref(`
// plugins/marquee.ts

import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css"
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('Marquee', Marquee)
})`)
</script>

<template>
  <div class="w-screen min-h-screen bg-stone-100/90">
    <div class="max-w-screen-lg px-4 py-6 mx-auto space-y-4">
      <div class="space-y-2 md:flex md:justify-between">
        <div>
          <h1 class="text-2xl font-semibold">Marquee</h1>
          <div class="text-stone-600">
            A beautiful marquee component for Vue.
          </div>
        </div>
        <div class="flex items-center gap-1">
          <a href="https://x.com/selemondev" target="_blank"
            class="bg-black text-xs font-semibold text-white px-2.5 py-1 rounded-md inline-flex items-center hover:bg-black/80 transition-all duration-200 ease-in">
            <svg class="mr-1 size-4 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor"
                d="M8 2H1l8.26 11.015L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886zm9 18L5 4h2l12 16z" />
            </svg>
            @selemondev
          </a>
          <a href="https://github.com/selemondev/marquee" target="_blank"
            class="bg-black text-xs font-semibold text-white px-2.5 py-1 rounded-md inline-flex items-center hover:bg-black/80 transition-all duration-200 ease-in">
            <GithubIcon class="mr-1 size-4" />
            Github
          </a>
        </div>
      </div>
      <div class="flex flex-col space-y-4">
        <Marquee :fade="true">
          <div v-for="testimonial in testimonials" :key="testimonial.name">
            <Card :avatar="testimonial.avatar" :name="testimonial.name" :title="testimonial.title"
              :content="testimonial.content" />
          </div>
        </Marquee>
        <Marquee :reverse="true" :fade="true">
          <div v-for="testimonial in testimonials" :key="testimonial.name">
            <Card :avatar="testimonial.avatar" :name="testimonial.name" :title="testimonial.title"
              :content="testimonial.content" />
          </div>
        </Marquee>
      </div>
      <div class="space-y-1">
        <h2 class="text-lg font-semibold">Installation</h2>
        <CodeBlock :code="installCmd" lang="bash" />
        <div class="text-sm">
          or you can skip npm install, and just copy and paste the source code
          into your component like
          <a class="underline" href="https://shadcn-vue.com">
            Shadcn Vue
          </a>
          (don't forget to also copy the tailwind config if you do this).
        </div>
      </div>
      <div class="space-y-1">
        <h3 class="font-semibold">Register it as a global component</h3>
        <CodeBlock :code="globalImportSnippet" lang="javascript" />
      </div>

      <div class="flex items-center space-x-2">
        <span class="w-full h-px bg-gray-200"></span>
        <span>or</span>
        <span class="w-full h-px bg-gray-200"></span>

      </div>

      <div class="space-y-1">
        <h3 class="font-semibold">Register it as a local component</h3>
        <CodeBlock :code="localImportSnippet" lang="javascript" />
      </div>

      <div class="space-y-1">
        <h3 class="font-semibold">Nuxt 3</h3>
        <p class="text-sm">If you are using Nuxt 3, you can simply register it as a Nuxt plugin as shown below:</p>
        <CodeBlock :code="nuxtPluginSnippet" lang="typescript" />
      </div>
      <hr class="border-stone-200" />
      <div class="space-y-1">
        <h3 class="font-semibold">Fade</h3>
        <Marquee :fade="true">
          <div v-for="testimonial in testimonials" :key="testimonial.name">
            <Card :avatar="testimonial.avatar" :name="testimonial.name" :title="testimonial.title"
              :content="testimonial.content" />
          </div>
        </Marquee>
      </div>
      <div class="space-y-1">
        <h3 class="font-semibold">Code</h3>
        <CodeBlock :code="fadeCodeSnippet" lang="vue" />
      </div>
      <hr class="border-stone-200" />
      <div class="space-y-1">
        <h3 class="font-semibold">Reverse direction</h3>
        <Marquee :reverse="true" :fade="true">
          <div v-for="testimonial in testimonials" :key="testimonial.name">
            <Card :avatar="testimonial.avatar" :name="testimonial.name" :title="testimonial.title"
              :content="testimonial.content" />
          </div>
        </Marquee>
      </div>
      <div class="space-y-1">
        <h3 class="font-semibold">Code</h3>
        <CodeBlock :code="reverseCodeSnippet" lang="vue" />
      </div>
      <hr class="border-stone-200" />
      <div>
        <h3 class="font-semibold">Pause on hover</h3>
        <Marquee :pauseOnHover="true" :fade="true">
          <div v-for="testimonial in testimonials" :key="testimonial.name">
            <Card :avatar="testimonial.avatar" :name="testimonial.name" :title="testimonial.title"
              :content="testimonial.content" />
          </div>
        </Marquee>
      </div>
      <div>
        <h3 class="font-semibold">Code</h3>
        <CodeBlock :code="pauseOnHoverSnippet" lang="vue" />
      </div>
      <hr class="border-stone-200" />
      <div class="space-y-1">
        <h3 class="font-semibold">Vertical</h3>
        <div class="flex justify-center">
          <Marquee class="h-[400px]" direction="up" :fade="true">
            <div v-for="testimonial in testimonials" :key="testimonial.name">
              <Card :avatar="testimonial.avatar" :name="testimonial.name" :title="testimonial.title"
                :content="testimonial.content" />
            </div>
          </Marquee>
        </div>
      </div>
      <div class="space-y-1">
        <h3 class="font-semibold">Code</h3>
        <CodeBlock :code="verticalCodeSnippet" lang="vue" />
      </div>
      <hr class="border-stone-200" />
      <div class="space-y-1 ">
        <h3 class="font-semibold">Custom gap and speed</h3>
        <Marquee class="gap-[3rem] [--duration:5s] [--gap:3rem]" innerClassName="gap-[3rem]" :fade="true">
          <div v-for="testimonial in testimonials" :key="testimonial.name">
            <Card :avatar="testimonial.avatar" :name="testimonial.name" :title="testimonial.title"
              :content="testimonial.content" />
          </div>
        </Marquee>
      </div>
      <div class="space-y-1">
        <h3 class="font-semibold">Code</h3>
        <CodeBlock :code="customGapAndSpeedSnippet" lang="vue" />
      </div>
      <hr class="border-stone-200" />
      <div class="space-y-1">
        <h3 class="font-semibold">Reduced motion</h3>
        <div>Disable animation when user device prefers reduced motion.</div>
        <Marquee class="py-4 motion-reduce:overflow-auto"
          innerClassName="motion-reduce:animate-none motion-reduce:first:hidden">
          <div v-for="testimonial in testimonials" :key="testimonial.name">
            <Card :avatar="testimonial.avatar" :name="testimonial.name" :title="testimonial.title"
              :content="testimonial.content" />
          </div>
        </Marquee>
      </div>
      <div class="space-y-1">
        <h3 class="font-semibold">Code</h3>
        <CodeBlock :code="reducedMotionSnippet" lang="vue" />
      </div>
    </div>
  </div>
</template>