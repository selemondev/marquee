<script setup lang="ts">
import Card from "./components/Card.vue";
import GithubIcon from "./components/icons/GithubIcon.vue";
import CodeBlock from "shiki-code-block-vue";
import { transformerCopyButton } from "@selemondev/shiki-transformer-copy-button";
import { testimonials } from "./utils/testimonials";
import Marquee from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/index.css";
import {
    installCmd,
    globalImportSnippet,
    localImportSnippet,
    nuxtPluginSnippet,
    fadeCodeSnippet,
    reverseCodeSnippet,
    pauseOnHoverSnippet,
    verticalCodeSnippet,
    customGapAndSpeedSnippet,
    reducedMotionSnippet,
} from "./utils/snippets";
</script>

<template>
    <div class="min-h-screen bg-[#eee]">
        <div class="max-w-screen-lg px-4 py-6 mx-auto space-y-4">
            <div class="space-y-2 md:flex md:justify-between">
                <div>
                    <h1 class="text-2xl font-semibold">Marquee</h1>
                    <div class="text-stone-600">
                        A beautiful marquee component for Vue.
                    </div>
                </div>
                <div class="flex items-center gap-1">
                    <a
                        href="https://x.com/selemondev"
                        target="_blank"
                        class="bg-black text-xs font-semibold text-white px-2.5 py-1 rounded-md inline-flex items-center hover:bg-black/80 transition-all duration-200 ease-in"
                    >
                        <svg
                            class="mr-1 size-4 shrink-0"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="currentColor"
                                d="M8 2H1l8.26 11.015L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886zm9 18L5 4h2l12 16z"
                            />
                        </svg>
                        @selemondev
                    </a>
                    <a
                        href="https://github.com/selemondev/marquee"
                        target="_blank"
                        class="bg-black text-xs font-semibold text-white px-2.5 py-1 rounded-md inline-flex items-center hover:bg-black/80 transition-all duration-200 ease-in"
                    >
                        <GithubIcon class="mr-1 size-4" />
                        Github
                    </a>
                </div>
            </div>
            <div class="flex flex-col space-y-4">
                <Marquee :fade="true">
                    <div
                        v-for="testimonial in testimonials"
                        :key="testimonial.name"
                    >
                        <Card
                            :avatar="testimonial.avatar"
                            :name="testimonial.name"
                            :title="testimonial.title"
                            :content="testimonial.content"
                        />
                    </div>
                </Marquee>
                <Marquee :reverse="true" :fade="true">
                    <div
                        v-for="testimonial in testimonials"
                        :key="testimonial.name"
                    >
                        <Card
                            :avatar="testimonial.avatar"
                            :name="testimonial.name"
                            :title="testimonial.title"
                            :content="testimonial.content"
                        />
                    </div>
                </Marquee>
            </div>
            <div class="space-y-1">
                <h2 class="text-lg font-semibold">Installation</h2>
                <CodeBlock
                    :code="installCmd"
                    lang="bash"
                    :theme="{
                        light: 'vitesse-light',
                        dark: 'vitesse-dark',
                    }"
                    :transformers="[
                        transformerCopyButton({
                            duration: 2000,
                            display: 'ready',
                            successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
                            copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`,
                        }),
                    ]"
                />
                <div class="text-sm">
                    or you can skip npm install, and just copy and paste the
                    source code into your component like
                    <a class="underline" href="https://shadcn-vue.com">
                        Shadcn Vue
                    </a>
                    (don't forget to also copy the tailwind config if you do
                    this).
                </div>
            </div>
            <div class="space-y-1">
                <h3 class="font-semibold">Register it as a global component</h3>
                <CodeBlock
                    :code="globalImportSnippet"
                    lang="javascript"
                    :theme="{
                        light: 'vitesse-light',
                        dark: 'vitesse-dark',
                    }"
                    :transformers="[
                        transformerCopyButton({
                            duration: 2000,
                            display: 'ready',
                            successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
                            copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`,
                        }),
                    ]"
                />
            </div>

            <div class="flex items-center space-x-2">
                <span class="w-full h-px bg-gray-300"></span>
                <span>or</span>
                <span class="w-full h-px bg-gray-300"></span>
            </div>

            <div class="space-y-1">
                <h3 class="font-semibold">Register it as a local component</h3>
                <CodeBlock
                    :code="localImportSnippet"
                    lang="javascript"
                    :theme="{
                        light: 'vitesse-light',
                        dark: 'vitesse-dark',
                    }"
                    :transformers="[
                        transformerCopyButton({
                            duration: 2000,
                            display: 'ready',
                            successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
                            copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`,
                        }),
                    ]"
                />
            </div>

            <div class="space-y-1">
                <h3 class="font-semibold">Nuxt 3</h3>
                <p class="text-sm">
                    If you are using Nuxt 3, you can simply register it as a
                    Nuxt plugin as shown below:
                </p>
                <CodeBlock
                    :code="nuxtPluginSnippet"
                    lang="javascript"
                    :theme="{
                        light: 'vitesse-light',
                        dark: 'vitesse-dark',
                    }"
                    :transformers="[
                        transformerCopyButton({
                            duration: 2000,
                            display: 'ready',
                            successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
                            copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`,
                        }),
                    ]"
                />
            </div>
            <hr class="border-gray-300" />
            <div class="space-y-1">
                <h3 class="font-semibold">Fade</h3>
                <Marquee :fade="true">
                    <div
                        v-for="testimonial in testimonials"
                        :key="testimonial.name"
                    >
                        <Card
                            :avatar="testimonial.avatar"
                            :name="testimonial.name"
                            :title="testimonial.title"
                            :content="testimonial.content"
                        />
                    </div>
                </Marquee>
            </div>
            <div class="space-y-1">
                <h3 class="font-semibold">Code</h3>
                <CodeBlock
                    :code="fadeCodeSnippet"
                    lang="vue-html"
                    :theme="{
                        light: 'vitesse-light',
                        dark: 'vitesse-dark',
                    }"
                    :transformers="[
                        transformerCopyButton({
                            duration: 2000,
                            display: 'ready',
                            successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
                            copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`,
                        }),
                    ]"
                />
            </div>
            <hr class="border-gray-300" />
            <div class="space-y-1">
                <h3 class="font-semibold">Reverse direction</h3>
                <Marquee :reverse="true" :fade="true">
                    <div
                        v-for="testimonial in testimonials"
                        :key="testimonial.name"
                    >
                        <Card
                            :avatar="testimonial.avatar"
                            :name="testimonial.name"
                            :title="testimonial.title"
                            :content="testimonial.content"
                        />
                    </div>
                </Marquee>
            </div>
            <div class="space-y-1">
                <h3 class="font-semibold">Code</h3>
                <CodeBlock
                    :code="reverseCodeSnippet"
                    lang="vue-html"
                    :theme="{
                        light: 'vitesse-light',
                        dark: 'vitesse-dark',
                    }"
                    :transformers="[
                        transformerCopyButton({
                            duration: 2000,
                            display: 'ready',
                            successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
                            copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`,
                        }),
                    ]"
                />
            </div>
            <hr class="border-gray-300" />
            <div>
                <h3 class="font-semibold">Pause on hover</h3>
                <Marquee :pauseOnHover="true" :fade="true">
                    <div
                        v-for="testimonial in testimonials"
                        :key="testimonial.name"
                    >
                        <Card
                            :avatar="testimonial.avatar"
                            :name="testimonial.name"
                            :title="testimonial.title"
                            :content="testimonial.content"
                        />
                    </div>
                </Marquee>
            </div>
            <div>
                <h3 class="font-semibold">Code</h3>
                <CodeBlock
                    :code="pauseOnHoverSnippet"
                    lang="vue-html"
                    :theme="{
                        light: 'vitesse-light',
                        dark: 'vitesse-dark',
                    }"
                    :transformers="[
                        transformerCopyButton({
                            duration: 2000,
                            display: 'ready',
                            successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
                            copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`,
                        }),
                    ]"
                />
            </div>
            <hr class="border-gray-300" />
            <div class="space-y-1">
                <h3 class="font-semibold">Vertical</h3>
                <div class="flex justify-center">
                    <Marquee class="h-[400px]" direction="up" :fade="true">
                        <div
                            v-for="testimonial in testimonials"
                            :key="testimonial.name"
                        >
                            <Card
                                :avatar="testimonial.avatar"
                                :name="testimonial.name"
                                :title="testimonial.title"
                                :content="testimonial.content"
                            />
                        </div>
                    </Marquee>
                </div>
            </div>
            <div class="space-y-1">
                <h3 class="font-semibold">Code</h3>
                <CodeBlock
                    :code="verticalCodeSnippet"
                    lang="vue-html"
                    :theme="{
                        light: 'vitesse-light',
                        dark: 'vitesse-dark',
                    }"
                    :transformers="[
                        transformerCopyButton({
                            duration: 2000,
                            display: 'ready',
                            successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
                            copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`,
                        }),
                    ]"
                />
            </div>
            <hr class="border-gray-300" />
            <div class="space-y-1">
                <h3 class="font-semibold">Custom gap and speed</h3>
                <Marquee
                    class="gap-[3rem] [--duration:5s] [--gap:3rem]"
                    innerClassName="gap-[3rem]"
                    :fade="true"
                >
                    <div
                        v-for="testimonial in testimonials"
                        :key="testimonial.name"
                    >
                        <Card
                            :avatar="testimonial.avatar"
                            :name="testimonial.name"
                            :title="testimonial.title"
                            :content="testimonial.content"
                        />
                    </div>
                </Marquee>
            </div>
            <div class="space-y-1">
                <h3 class="font-semibold">Code</h3>
                <CodeBlock
                    :code="customGapAndSpeedSnippet"
                    lang="vue-html"
                    :theme="{
                        light: 'vitesse-light',
                        dark: 'vitesse-dark',
                    }"
                    :transformers="[
                        transformerCopyButton({
                            duration: 2000,
                            display: 'ready',
                            successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
                            copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`,
                        }),
                    ]"
                />
            </div>
            <hr class="border-gray-300" />
            <div class="space-y-1">
                <h3 class="font-semibold">Reduced motion</h3>
                <div>
                    Disable animation when user device prefers reduced motion.
                </div>
                <Marquee
                    class="py-4 motion-reduce:overflow-auto"
                    innerClassName="motion-reduce:animate-none motion-reduce:first:hidden"
                >
                    <div
                        v-for="testimonial in testimonials"
                        :key="testimonial.name"
                    >
                        <Card
                            :avatar="testimonial.avatar"
                            :name="testimonial.name"
                            :title="testimonial.title"
                            :content="testimonial.content"
                        />
                    </div>
                </Marquee>
            </div>
            <div class="space-y-1">
                <h3 class="font-semibold">Code</h3>
                <CodeBlock
                    :code="reducedMotionSnippet"
                    lang="vue-html"
                    :theme="{
                        light: 'vitesse-light',
                        dark: 'vitesse-dark',
                    }"
                    :transformers="[
                        transformerCopyButton({
                            duration: 2000,
                            display: 'ready',
                            successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
                            copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`,
                        }),
                    ]"
                />
            </div>
        </div>
    </div>
</template>

<style>
@media (prefers-color-scheme: dark) {
    .shiki,
    .shiki span {
        color: var(--shiki-dark) !important;
        background-color: var(--shiki-dark-bg) !important;
        font-style: var(--shiki-dark-font-style) !important;
        font-weight: var(--shiki-dark-font-weight) !important;
        text-decoration: var(--shiki-dark-text-decoration) !important;
    }
}

html.dark .shiki,
html.dark .shiki span {
    color: var(--shiki-dark) !important;
    background-color: var(--shiki-dark-bg) !important;
    font-style: var(--shiki-dark-font-style) !important;
    font-weight: var(--shiki-dark-font-weight) !important;
    text-decoration: var(--shiki-dark-text-decoration) !important;
}

pre {
    z-index: 1;
    padding: 15px 20px;
    border-radius: 10px;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    position: relative;
    background-color: #f9f9f9 !important;
}

code {
    display: block;
    line-height: 1.7;
    font-size: 15px;
}
</style>
