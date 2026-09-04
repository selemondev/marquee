<script setup lang="ts">
import { useAttrs } from "vue";
import { cn } from "@/lib/utils";

defineOptions({ name: "Marquee", inheritAttrs: false });

const props = withDefaults(
  defineProps<{
    direction?: "left" | "up";
    pauseOnHover?: boolean;
    reverse?: boolean;
    fade?: boolean;
    innerClassName?: string;
    numberOfCopies?: number;
  }>(),
  {
    direction: "left",
    pauseOnHover: false,
    reverse: false,
    fade: false,
    innerClassName: "",
    numberOfCopies: 2,
  },
);

const attrs = useAttrs();

/** Everything except `class`, which is merged through `cn` so Tailwind conflicts resolve. */
function restAttrs(source: Record<string, unknown>) {
  const { class: _class, ...rest } = source;
  return rest;
}

function fadeMask(direction: "left" | "up") {
  return `linear-gradient(${direction === "left" ? "to right" : "to bottom"}, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`;
}
</script>

<template>
  <div
    v-bind="restAttrs(attrs)"
    :class="
      cn(
        'group flex gap-4 overflow-hidden',
        props.direction === 'left' ? 'flex-row' : 'flex-col',
        attrs.class as string | undefined,
      )
    "
    :style="
      props.fade
        ? {
            'mask-image': fadeMask(props.direction),
            '-webkit-mask-image': fadeMask(props.direction),
          }
        : undefined
    "
  >
    <div
      v-for="i in props.numberOfCopies"
      :key="i"
      :class="
        cn(
          'flex shrink-0 justify-around gap-4 [--gap:1rem]',
          props.direction === 'left'
            ? 'animate-marquee-left flex-row'
            : 'animate-marquee-up flex-col',
          props.pauseOnHover && 'group-hover:paused',
          props.reverse && 'direction-reverse',
          props.innerClassName,
        )
      "
    >
      <slot />
    </div>
  </div>
</template>
