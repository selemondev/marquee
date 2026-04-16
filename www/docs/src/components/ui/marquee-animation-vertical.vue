<script setup lang="ts">
import Marquee from "@selemondev/vue3-marquee";
import MarqueeCard from "@/components/ui/marquee-card.vue";
import type { Testimonials } from "@/pages/index.astro";
defineProps<{
  testimonials: Testimonials[];
}>();
</script>
<template>
  <div class="flex flex-col items-center space-y-4">
    <Marquee class="h-100" direction="up" :fade="true">
      <div v-for="testimonial in testimonials" :key="testimonial.name">
        <MarqueeCard
          :avatar="testimonial.avatar"
          :name="testimonial.name"
          :title="testimonial.title"
          :content="testimonial.content"
        />
      </div>
    </Marquee>
  </div>
</template>
