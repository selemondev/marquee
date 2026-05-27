/** Structured data (JSON-LD) builders for SEO. */

import { siteConfig, getCanonicalUrl } from "./seo-config";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/** Generate WebSite schema. */
export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en",
  };
}

/** Generate Organization schema. */
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.author,
    url: siteConfig.url,
    sameAs: [
      siteConfig.repository,
      `https://twitter.com/${siteConfig.twitterHandle.replace("@", "")}`,
    ],
  };
}

/** Generate SoftwareApplication schema. */
export function buildSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: "@selemondev/vue3-marquee",
    description: siteConfig.description,
    url: siteConfig.repository,
    codeRepository: siteConfig.repository,
    programmingLanguage: ["TypeScript", "Vue"],
    runtimePlatform: "Node.js",
    license: "https://opensource.org/licenses/MIT",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

/** Generate BreadcrumbList schema. */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.url),
    })),
  };
}

/** Generate TechArticle schema for documentation pages. */
export function buildTechArticleSchema(options: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: options.title,
    description: options.description,
    url: getCanonicalUrl(options.path),
    author: {
      "@type": "Person",
      name: siteConfig.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.author,
    },
    inLanguage: "en",
    isAccessibleForFree: true,
    proficiencyLevel: "Beginner",
  };
}

/** Serialize schema objects to JSON-LD script tag content. */
export function toJsonLd(schema: Record<string, unknown> | Record<string, unknown>[]): string {
  return JSON.stringify(Array.isArray(schema) ? schema : schema);
}
