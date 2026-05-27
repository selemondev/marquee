import type { APIRoute } from "astro";

export const prerender = true;

const SITE_URL = "https://vue-marquee.selemon.dev";
const REPOSITORY = "https://github.com/selemondev/marquee";

export const GET: APIRoute = () => {
  const catalog = {
    linkset: [
      {
        anchor: SITE_URL,
        "service-desc": [
          {
            href: `${SITE_URL}/.well-known/agent-skills/index.json`,
            type: "application/json",
          },
        ],
        "service-doc": [
          {
            href: SITE_URL,
            type: "text/html",
          },
          {
            href: REPOSITORY,
            type: "text/html",
          },
        ],
        status: [
          {
            href: SITE_URL,
            type: "text/html",
          },
        ],
      },
    ],
  };

  return new Response(JSON.stringify(catalog, null, 2), {
    headers: {
      "Content-Type": "application/linkset+json; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
