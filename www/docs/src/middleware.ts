import type { MiddlewareHandler } from "astro";
import { siteConfig } from "@/lib/seo-config";
import {
  customGapAndSpeedSnippet,
  fadeCodeSnippet,
  installCommands,
  pauseOnHoverSnippet,
  propDocs,
  registerSnippets,
  reducedMotionSnippet,
  reverseCodeSnippet,
  verticalCodeSnippet,
} from "@/snippets";

export const onRequest: MiddlewareHandler = async (context, next) => {
  const { request, url } = context;

  // Content negotiation: return markdown for AI agents.
  // Path checks come first so prerendered routes never touch request headers.
  if (
    !url.pathname.startsWith("/.well-known") &&
    !url.pathname.endsWith(".xml") &&
    !url.pathname.endsWith(".txt") &&
    (request.headers.get("accept") || "").includes("text/markdown")
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
  if (pathname !== "/" && pathname !== "") return null;

  const fence = (lang: string, code: string) => `\`\`\`${lang}\n${code}\n\`\`\``;
  const examples: Array<[string, string]> = [
    ["Fade", fadeCodeSnippet],
    ["Reverse", reverseCodeSnippet],
    ["Pause on Hover", pauseOnHoverSnippet],
    ["Vertical", verticalCodeSnippet],
    ["Custom Gap and Speed", customGapAndSpeedSnippet],
    ["Reduced Motion", reducedMotionSnippet],
  ];

  return `# ${siteConfig.name}

${siteConfig.description}

## Installation

${fence("bash", installCommands.pnpm)}

## Usage

${Object.entries(registerSnippets)
  .map(([title, { code, lang }]) => `### ${title}\n\n${fence(lang, code)}`)
  .join("\n\n")}

## Examples

${examples.map(([title, code]) => `### ${title}\n\n${fence("vue", code)}`).join("\n\n")}

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
${propDocs.map((p) => `| ${p.name} | \`${p.type}\` | \`${p.def}\` | ${p.desc} |`).join("\n")}

Other attributes are forwarded to the outer container.

## Links

- [GitHub Repository](${siteConfig.repository})
- [npm Package](https://www.npmjs.com/package/@selemondev/vue3-marquee)
- [Report Issues](${siteConfig.repository}/issues/new)
`;
}
