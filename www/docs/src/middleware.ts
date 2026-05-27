import type { MiddlewareHandler } from "astro";
import { siteConfig } from "@/lib/seo-config";

export const onRequest: MiddlewareHandler = async (context, next) => {
  const { request, url } = context;

  // Content negotiation: return markdown for AI agents
  const accept = request.headers.get("accept") || "";
  if (
    accept.includes("text/markdown") &&
    !url.pathname.startsWith("/.well-known") &&
    !url.pathname.endsWith(".xml") &&
    !url.pathname.endsWith(".txt")
  ) {
    const markdown = generateMarkdownForPath(url.pathname);
    if (markdown) {
      return new Response(markdown, {
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Cache-Control": "public, max-age=3600",
        },
      });
    }
  }

  const response = await next();

  // Add discovery Link headers to HTML responses
  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("text/html")) {
    const headers = new Headers(response.headers);
    headers.append("Link", `<${siteConfig.url}/.well-known/api-catalog>; rel="api-catalog"`);
    headers.append("Link", `<${siteConfig.url}>; rel="help"`);
    headers.append("Link", `<${siteConfig.repository}>; rel="service-doc"`);
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("X-Robots-Tag", "index, follow");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }

  return response;
};

function generateMarkdownForPath(pathname: string): string | null {
  if (pathname === "/" || pathname === "") {
    return `# Vue Marquee

A beautiful, performant marquee component for Vue 3 with TypeScript support.

## Installation

\`\`\`bash
npm install @selemondev/vue3-marquee
\`\`\`

## Usage

### Global Registration

\`\`\`javascript
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/style.css"
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.component('Marquee', Marquee)
app.mount('#app')
\`\`\`

### Local Registration

\`\`\`javascript
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/style.css"
\`\`\`

### Nuxt 3 Plugin

\`\`\`javascript
// ~/plugins/marquee.ts
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/style.css"
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('Marquee', Marquee)
})
\`\`\`

## Examples

### Fade

\`\`\`html
<Marquee :fade="true">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>
\`\`\`

### Reverse

\`\`\`html
<Marquee :reverse="true" :fade="true">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>
\`\`\`

### Pause on Hover

\`\`\`html
<Marquee :pauseOnHover="true" :fade="true">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>
\`\`\`

### Vertical

\`\`\`html
<Marquee class="h-100" direction="up" :fade="true">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>
\`\`\`

### Custom Gap and Speed

\`\`\`html
<Marquee class="gap-12 [--duration:5s] [--gap:3rem]" innerClassName="gap-[3rem]" :fade="true">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>
\`\`\`

### Reduced Motion

\`\`\`html
<Marquee class="py-4 motion-reduce:overflow-auto" innerClassName="motion-reduce:animate-none motion-reduce:first:hidden">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>
\`\`\`

## Links

- [GitHub Repository](https://github.com/selemondev/marquee)
- [npm Package](https://www.npmjs.com/package/@selemondev/vue3-marquee)
- [Report Issues](https://github.com/selemondev/marquee/issues/new)
`;
  }
  return null;
}
