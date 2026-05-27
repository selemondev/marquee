import type { APIRoute } from "astro";

export const prerender = true;

const SITE_URL = "https://vue-marquee.selemon.dev";

export const GET: APIRoute = () => {
  const metadata = {
    resource: SITE_URL,
    authorization_servers: [SITE_URL],
    scopes_supported: ["read", "openid"],
  };

  return new Response(JSON.stringify(metadata, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
