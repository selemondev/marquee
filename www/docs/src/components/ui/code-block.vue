<script setup lang="ts">
import type { BuiltinTheme, BundledLanguage, ShikiTransformer } from "shiki";
import type { Themes } from "./code-block";
import { ref, watch } from "vue";
import { convertCodeToHtml } from "@/lib/code-to-html";

const props = defineProps<{
  code: string;
  lang: BundledLanguage;
  theme: BuiltinTheme | Themes;
  defaultColor?: string;
  cssVariablePrefix?: string;
  transformers?: ShikiTransformer[];
  lineNumbers?: boolean;
}>();

const codeToHtml = ref("");
watch(
  () => [
    props.code,
    props.lang,
    props.theme,
    props.transformers,
    props.defaultColor,
    props.cssVariablePrefix,
  ],
  async () => {
    codeToHtml.value = await convertCodeToHtml(
      props.code.trim(),
      props.lang,
      props.theme,
      props.transformers ?? [],
      props.defaultColor,
      props.cssVariablePrefix,
    );
  },
  { immediate: true },
);
</script>

<template>
  <div class="code-block-wrapper">
    <div
      ref="shiki"
      class="shiki--code--block"
      :class="{ 'with-line-numbers': props.lineNumbers }"
      role="region"
      aria-label="Code block"
      tabindex="0"
      aria-live="polite"
      aria-roledescription="code block"
      lang="en"
      v-html="codeToHtml"
    />
  </div>
</template>

<style>
.code-block-wrapper {
  position: relative;
}

code {
  line-height: 1.7;
  font-size: 15px;
  counter-reset: step;
  counter-increment: step 0;
  font-family: monospace;
  max-height: 300px;
}
.shiki--code--block.with-line-numbers code .line::before {
  content: counter(step);
  counter-increment: step;
  width: 1rem;
  margin-right: 1.5rem;
  text-align: right;
  color: oklch(70.5% 0.015 286.067);
  opacity: 1;
}
.shiki--code--block {
  width: 100%;
}

pre {
  z-index: 1;
  padding: 14px 20px;
  border-radius: 10px;
  overflow: auto;
  scrollbar-width: none;
  position: relative;
}
</style>
