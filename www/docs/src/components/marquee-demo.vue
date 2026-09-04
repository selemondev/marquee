<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";
import TestimonialCard from "@/components/testimonial-card.vue";
import { testimonials } from "@/lib/testimonials";

defineProps<{
  direction?: "left" | "up";
  fade?: boolean;
  reverse?: boolean;
  pauseOnHover?: boolean;
  innerClassName?: string;
}>();
</script>

<template>
  <Marquee
    :direction="direction"
    :fade="fade"
    :reverse="reverse"
    :pause-on-hover="pauseOnHover"
    :inner-class-name="innerClassName"
  >
    <TestimonialCard v-for="t in testimonials" :key="t.name" v-bind="t" />
  </Marquee>
</template>
