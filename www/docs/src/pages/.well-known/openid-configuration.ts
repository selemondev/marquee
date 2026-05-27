import type { APIRoute } from "astro";

export const prerender = true;

const SITE_URL = "https://vue-marquee.selemon.dev";

export const GET: APIRoute = () => {
  const config = {
    issuer: SITE_URL,
    authorization_endpoint: `${SITE_URL}/oauth/authorize`,
    token_endpoint: `${SITE_URL}/oauth/token`,
    jwks_uri: `${SITE_URL}/.well-known/jwks.json`,
    grant_types_supported: ["authorization_code", "client_credentials"],
    response_types_supported: ["code"],
    scopes_supported: ["read", "openid"],
    subject_types_supported: ["public"],
    id_token_signing_alg_values_supported: ["RS256"],
  };

  return new Response(JSON.stringify(config, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
