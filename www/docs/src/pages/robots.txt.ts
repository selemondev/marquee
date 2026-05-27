import type { APIRoute } from "astro";

export const prerender = true;

const SITE_URL = "https://vue-marquee.selemon.dev";
const SITE_NAME = "Vue Marquee";

export const GET: APIRoute = () => {
  const sitemapUrl = `${SITE_URL}/sitemap.xml`;

  const content = `# robots.txt for ${SITE_NAME}
# ${SITE_URL}

User-agent: *
Allow: /
Disallow: /api/

# Sitemap
Sitemap: ${sitemapUrl}

# AI Crawler Rules
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Bytespider
Disallow: /

User-agent: CCBot
Allow: /

# Content Signals (draft-romm-aipref-contentsignals)
Content-Signal: ai-train=no, search=yes, ai-input=no
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
