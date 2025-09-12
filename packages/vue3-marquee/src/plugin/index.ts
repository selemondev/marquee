/* eslint-disable vue/no-reserved-component-names */
import type { App } from "vue";
import Marquee from "@/components/Marquee.vue";
export default {
	install(app: App) {
		app.component("Marquee", Marquee);
	},
};
