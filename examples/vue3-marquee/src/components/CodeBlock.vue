<script setup lang='ts'>
import { codeToHtml } from 'shiki'
import { addCopyButton } from "../utils/addCopyButton";
import { onMounted, ref, watch } from "vue";

const props = defineProps<{
  code: string,
  lang: string
}>()

const html = ref();

const hightLightCode = async () => {
  return html.value = await codeToHtml(props.code, {
    lang: props.lang,
    theme: 'vitesse-light',
    transformers: [
      addCopyButton(props.code)
    ]
  })
}

watch(() => [props.code, props.lang], () => hightLightCode());

onMounted(() => {
  hightLightCode()
});
</script>

<template>
  <div class="overflow-x-auto bg-white rounded-md ">
    <code v-html="html" />
  </div>
</template>

<style>
pre {
  padding: 10px;
  border-radius: 5px;
}

pre:has(code) {
  position: relative;
}

pre button.copy {
  position: absolute;
  right: 16px;
  top: 12px;
  height: 20px;
  width: 20px;
  padding: 0;
  display: flex;

  & span {
    width: 100%;
    aspect-ratio: 1 / 1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  & .ready {
    background-image: url('https://api.iconify.design/material-symbols:content-copy-outline.svg?color=%23878787');
  }

  & .ready:hover {
    background-image: url('https://api.iconify.design/material-symbols:content-copy-outline.svg?color=%23707070');
  }

  & .success {
    display: none;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMGI4MGMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGVjay1jaXJjbGUtMiI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cGF0aCBkPSJtOSAxMiAyIDIgNC00Ii8+PC9zdmc+');
  }

  &.copied {
    & .success {
      display: block;
    }

    & .ready {
      display: none;
    }
  }
}


.shiki {
  width: 100%;
}
</style>