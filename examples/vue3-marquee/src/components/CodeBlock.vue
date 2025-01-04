<script setup lang='ts'>
import { ref, watch } from 'vue';
import { convertCodeToHtml } from '@/lib/utils/codeToHtml';
const props = defineProps<{
    code: string,
    lang: string
    theme: string,
}>();

const codeToHtml = ref('');

watch(props, async (val: { code: string, lang: string, theme: string }) => {
    if (val) {
        return codeToHtml.value = await convertCodeToHtml(val.code, val.lang, val.theme)
    }
}, {
    immediate: true
})
</script>

<template>
    <div v-html="codeToHtml" />
</template>

<style>

</style>