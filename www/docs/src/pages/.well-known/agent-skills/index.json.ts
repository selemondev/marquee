import type { APIRoute } from "astro";

export const prerender = true;

const SITE_NAME = "Vue Marquee";
const SITE_URL = "https://vue-marquee.vercel.app";
const SITE_DESCRIPTION =
  "A beautiful, performant marquee component for Vue 3 with TypeScript support. Create smooth scrolling animations with fade, reverse, vertical, pause-on-hover, and custom speed options.";

export const GET: APIRoute = () => {
  const skills = {
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    version: "1.4.0",
    skills: [
      {
        id: "vue-marquee-docs",
        name: "Vue Marquee Documentation",
        description:
          "Documentation for the @selemondev/vue3-marquee component library including installation, configuration, and usage examples.",
        url: SITE_URL,
        tags: ["documentation", "vue", "component", "marquee"],
      },
    ],
  };

  return new Response(JSON.stringify(skills, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
