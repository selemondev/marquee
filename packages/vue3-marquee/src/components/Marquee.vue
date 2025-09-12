<script setup lang="ts">
import { cn } from "@/lib/utils";
import { useAttrs } from "vue";
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
        numberOfCopies: 2,
    },
);

const attrs = useAttrs();
</script>

<script lang="ts">
export default {
    name: "Marquee",
    inheritAttrs: false,
};
</script>
<template>
    <div
        :class="
            cn(
                'group flex gap-[1rem] overflow-hidden',
                {
                    'marquee-flex-row': props.direction === 'left',
                    'marquee-flex-column': props.direction !== 'left',
                },
                attrs && attrs.class,
            )
        "
        :style="{
            maskImage: props.fade
                ? `linear-gradient(${
                      props.direction === 'left' ? 'to right' : 'to bottom'
                  }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
                : '',
            WebkitMaskImage: props.fade
                ? `linear-gradient(${
                      props.direction === 'left' ? 'to right' : 'to bottom'
                  }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
                : '',
        }"
    >
        <div v-for="(_, i) in Array(props.numberOfCopies).fill(0)" :key="i">
            <div
                :class="
                    cn(
                        'flex justify-around gap-[1rem] [--gap:1rem] shrink-0',
                        props.direction === 'left'
                            ? 'animate-marquee-left marquee-flex-row'
                            : 'animate-marquee-up marquee-flex-column',
                        props.pauseOnHover &&
                            'group-hover:[animation-play-state:paused]',
                        props.reverse && 'direction-reverse',
                        props.innerClassName,
                    )
                "
            >
                <slot />
            </div>
        </div>
    </div>
</template>

<style scoped>
.marquee-flex-row {
    display: flex;
    flex-direction: row;
}

.marquee-flex-column {
    display: flex;
    flex-direction: column;
}
</style>
