import { SITE, absoluteUrl } from './site';
import { fullTitle, schemaFor, type RouteSEO } from './routes';

const esc = (s: string) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Escape "<" inside JSON-LD so a string can never close the <script> tag.
const jsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, '\\u003c');

/**
 * Builds every SEO-related <head> tag for a route as an HTML string.
 * Each tag carries data-seo so the client can swap them on navigation.
 * Used by the build-time prerenderer and by <SEOHead /> at runtime.
 */
export function buildHeadTags(route: RouteSEO): { title: string; html: string } {
  const title = fullTitle(route.title);
  const canonical = absoluteUrl(route.path);
  const image = route.image || SITE.defaultImage;
  const t = esc(title);
  const d = esc(route.description);

  const tags: string[] = [
    `<meta data-seo name="description" content="${d}">`,
    route.noindex
      ? `<meta data-seo name="robots" content="noindex, follow">`
      : `<meta data-seo name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">`,
  ];

  if (!route.noindex) {
    tags.push(`<link data-seo rel="canonical" href="${canonical}">`);
  }

  tags.push(
    `<meta data-seo property="og:site_name" content="${SITE.name}">`,
    `<meta data-seo property="og:title" content="${t}">`,
    `<meta data-seo property="og:description" content="${d}">`,
    `<meta data-seo property="og:type" content="${route.ogType || 'website'}">`,
    `<meta data-seo property="og:url" content="${canonical}">`,
    `<meta data-seo property="og:image" content="${esc(image)}">`,
    `<meta data-seo property="og:locale" content="${SITE.locale}">`,
    `<meta data-seo name="twitter:card" content="summary_large_image">`,
    `<meta data-seo name="twitter:site" content="${SITE.twitter}">`,
    `<meta data-seo name="twitter:title" content="${t}">`,
    `<meta data-seo name="twitter:description" content="${d}">`,
    `<meta data-seo name="twitter:image" content="${esc(image)}">`
  );

  if (image === SITE.defaultImage) {
    tags.push(
      `<meta data-seo property="og:image:width" content="1200">`,
      `<meta data-seo property="og:image:height" content="630">`
    );
  }

  if (!route.noindex) {
    for (const s of schemaFor(route)) {
      tags.push(`<script data-seo type="application/ld+json">${jsonLd(s)}</script>`);
    }
  }

  return { title: t, html: tags.join('\n    ') };
}
