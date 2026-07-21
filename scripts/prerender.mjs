// Post-build prerender step.
//
// Vite ships a single dist/index.html for this SPA, so every route is served
// the same near-empty <head>. Crawlers that DON'T execute JavaScript
// (WhatsApp, Facebook, LinkedIn, X/Twitter, many others) therefore see no
// per-page title, description, or Open Graph data — and even Google indexes
// faster when metadata is present in the initial HTML.
//
// This script clones dist/index.html into dist/<route>/index.html for every
// route and bakes the correct <title>, meta description, keywords, canonical,
// Open Graph, Twitter Card, and JSON-LD schema directly into the head.
//
// The React app still hydrates and useSEO() keeps things correct during
// client-side navigation — this only fixes the FIRST paint the crawler sees.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, ROUTES } from './seo-data.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const TEMPLATE_PATH = join(DIST, 'index.html');

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const canonicalFor = (path) => `${SITE.url}${path === '/' ? '' : path}`;

function buildHead(route) {
  const fullTitle = route.title.includes('Momentrix') ? route.title : `${route.title}${SITE.titleSuffix}`;
  const canonical = canonicalFor(route.path);
  const image = route.image || SITE.defaultImage;
  const t = escapeHtml(fullTitle);
  const d = escapeHtml(route.description);

  const tags = [
    `<meta name="description" content="${d}" />`,
    `<meta name="keywords" content="${escapeHtml(route.keywords)}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />`,
    `<meta name="author" content="${SITE.name}" />`,
    `<meta name="geo.region" content="IN-AP" />`,
    `<meta name="geo.placename" content="Guntur" />`,
    `<meta name="geo.position" content="16.313229;80.42806" />`,
    `<meta name="ICBM" content="16.313229, 80.42806" />`,
  ];

  if (SITE.googleSiteVerification) {
    tags.push(`<meta name="google-site-verification" content="${escapeHtml(SITE.googleSiteVerification)}" />`);
  }
  if (SITE.bingSiteVerification) {
    tags.push(`<meta name="msvalidate.01" content="${escapeHtml(SITE.bingSiteVerification)}" />`);
  }

  tags.push(
    `<link rel="canonical" href="${canonical}" />`,
    // Open Graph
    `<meta property="og:site_name" content="${SITE.name}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:locale" content="${SITE.locale}" />`,
    // Twitter
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:site" content="${SITE.twitter}" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${image}" />`
  );

  if (route.schema) {
    tags.push(
      `<script type="application/ld+json" id="seo-schema-script">${JSON.stringify(
        route.schema
      )}</script>`
    );
  }

  return { fullTitle: t, tags: tags.join('\n    ') };
}

function buildFallbackNav() {
  let nav = `\n    <!-- Fallback static navigation for non-JS crawlers -->\n    <noscript>\n      <nav style="display:none;">\n`;
  for (const route of ROUTES) {
    const name = route.path === '/' ? 'Home' : route.title.split(' | ')[0];
    nav += `        <a href="${route.path}">${name}</a>\n`;
  }
  nav += `      </nav>\n    </noscript>\n  `;
  return nav;
}

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const route of ROUTES) {
    const canonical = canonicalFor(route.path);
    let priority = '0.8';
    let changefreq = 'weekly';

    if (route.path === '/') {
      priority = '1.0';
      changefreq = 'weekly';
    } else if (route.path === '/privacy-policy' || route.path === '/terms-of-service') {
      priority = '0.3';
      changefreq = 'yearly';
    } else if (route.path === '/careers' || route.path === '/about' || route.path === '/explore') {
      priority = '0.6';
      changefreq = 'monthly';
    } else if (route.path.startsWith('/services')) {
      priority = '0.9';
      changefreq = 'weekly';
    }

    xml += `  <url>\n`;
    xml += `    <loc>${canonical}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;
  return xml;
}

function renderRoute(template, route) {
  const { fullTitle, tags } = buildHead(route);

  let html = template;

  // Replace <title>…</title>
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${fullTitle}</title>`);

  // Drop any placeholder default description that shipped in index.html
  html = html.replace(
    /<meta\s+name=["']description["'][^>]*>\s*/i,
    ''
  );

  // Inject the per-route tags at the SEO placeholder (fallback: before </head>)
  if (html.includes('<!--SEO-->')) {
    html = html.replace('<!--SEO-->', tags);
  } else {
    html = html.replace('</head>', `    ${tags}\n  </head>`);
  }

  // Inject fallback navigation inside <div id="root"></div>
  const fallbackNav = buildFallbackNav();
  html = html.replace('<div id="root"></div>', `<div id="root">${fallbackNav}</div>`);

  return html;
}

function main() {
  let template;
  try {
    template = readFileSync(TEMPLATE_PATH, 'utf8');
  } catch {
    console.error(
      `[prerender] dist/index.html not found — run "vite build" first.`
    );
    process.exit(1);
  }

  let count = 0;
  for (const route of ROUTES) {
    const html = renderRoute(template, route);

    if (route.path === '/') {
      // Overwrite the root index.html (the SPA fallback) with homepage meta.
      writeFileSync(TEMPLATE_PATH, html);
    } else {
      const dir = join(DIST, route.path.replace(/^\//, ''));
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, 'index.html'), html);
    }
    count += 1;
  }

  console.log(`[prerender] wrote ${count} static route pages to dist/`);

  // Generate sitemap.xml dynamically
  try {
    const sitemapXml = generateSitemap();
    writeFileSync(join(DIST, 'sitemap.xml'), sitemapXml);
    const PUBLIC_DIR = join(__dirname, '..', 'public');
    writeFileSync(join(PUBLIC_DIR, 'sitemap.xml'), sitemapXml);
    console.log(`[prerender] generated dynamic sitemap.xml with ${ROUTES.length} routes`);
  } catch (err) {
    console.error(`[prerender] failed to generate sitemap.xml:`, err);
  }
}

main();
