/** Centralized SEO configuration for the Vue Marquee documentation site. */

export const siteConfig = {
  name: "Vue Marquee",
  description:
    "A beautiful, performant marquee component for Vue 3 with TypeScript support. Create smooth scrolling animations with fade, reverse, vertical, pause-on-hover, and custom speed options.",
  url: "https://vue-marquee.selemon.dev",
  repository: "https://github.com/selemondev/marquee",
  author: "Selemondev",
  twitterHandle: "@selemondev",
  themeColor: "#0a0a0b",
  locale: "en_US",
  keywords: [
    "vue marquee",
    "vue 3 marquee",
    "vue scrolling component",
    "vue animation component",
    "marquee component",
    "vue3 marquee",
    "typescript marquee",
    "tailwindcss marquee",
    "nuxt marquee",
    "vue ticker",
    "vue carousel text",
    "infinite scroll vue",
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/** Generate a canonical URL from a path. */
export function getCanonicalUrl(path: string = "/"): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized === "/" ? "" : normalized}`;
}

/** Build page title with site name suffix. */
export function buildTitle(pageTitle?: string): string {
  if (!pageTitle || pageTitle === siteConfig.name) {
    return `${siteConfig.name} - Beautiful Marquee Component for Vue 3`;
  }
  return `${pageTitle} | ${siteConfig.name}`;
}
