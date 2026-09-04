<script setup lang="ts">
import FiveStar from "@/components/five-star.vue";
import type { Testimonial } from "@/lib/testimonials";

defineProps<Testimonial>();
</script>

<template>
  <div
    class="flex h-52 w-80 flex-col gap-3 rounded-lg border border-line bg-[#111113] px-5 py-4 text-sm"
  >
    <div class="flex items-center gap-3">
      <img :src="avatar" alt="" loading="lazy" class="size-9 rounded-full ring-1 ring-white/10" />
      <div>
        <div class="font-medium">{{ name }}</div>
        <div class="text-xs text-muted">{{ title }}</div>
      </div>
    </div>
    <FiveStar />
    <p class="line-clamp-4 text-muted">{{ content }}</p>
  </div>
</template>
