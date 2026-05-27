import type { APIRoute } from "astro";

export const prerender = true;

const SITE_NAME = "Vue Marquee";
const SITE_URL = "https://vue-marquee.vercel.app";
const SITE_DESCRIPTION =
  "A beautiful, performant marquee component for Vue 3 with TypeScript support. Create smooth scrolling animations with fade, reverse, vertical, pause-on-hover, and custom speed options.";
const REPOSITORY = "https://github.com/selemondev/marquee";

export const GET: APIRoute = () => {
  const serverCard = {
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    version: "1.4.0",
    capabilities: {
      documentation: true,
      examples: true,
    },
    links: {
      documentation: SITE_URL,
      source: REPOSITORY,
      issues: `${REPOSITORY}/issues`,
    },
  };

  return new Response(JSON.stringify(serverCard, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
