<script setup lang='ts'>
import FiveStar from './FiveStar.vue';
const props = defineProps<{
    name: string,
    avatar: string,
    title: string,
    content: string
}>()
</script>

<template>
    <div class="h-56 px-5 py-3 space-y-3 text-sm bg-white rounded-lg shadow-sm w-80">
        <div class="flex items-center gap-2">
            <img :src="props.avatar" :alt="props.name" class="rounded-full size-8" />
            <div>
                <div class="font-medium">{{ props.name }}</div>
                <div class="text-xs text-stone-600">{{ props.title }}</div>
            </div>
        </div>
        <FiveStar />
        <div class="whitespace-pre-line text-stone-600">{{ props.content }}</div>
    </div>
</template>