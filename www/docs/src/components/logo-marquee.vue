<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";
import { logos } from "@/lib/testimonials";
</script>

<template>
  <Marquee class="gap-12 [--duration:12s] [--gap:3rem]" inner-class-name="items-center gap-12" fade>
    <img
      v-for="logo in logos"
      :key="logo"
      :alt="logo"
      :src="`https://www.vectorlogo.zone/logos/${logo}/${logo}-ar21.svg`"
      class="h-12 w-auto opacity-60 brightness-0 invert transition-opacity hover:opacity-100"
      loading="lazy"
    />
  </Marquee>
</template>
