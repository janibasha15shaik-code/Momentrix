// Per-route SEO metadata. Used both at runtime (useSEO) and at build time
// (scripts/prerender.mjs via src/entry-server.tsx), so there is exactly one
// place to edit titles, descriptions and structured data.

import { SITE, ORG_GRAPH, ORG_ID, LOCAL_ID, WEBSITE_ID, absoluteUrl } from './site';
import { BLOG_POSTS } from '../data/blogPosts';
import { CITY_PAGES } from '../data/cities';

export interface RouteSEO {
  path: string;
  /** Without brand suffix; the suffix is added unless the title already contains "Momentrix". */
  title: string;
  description: string;
  image?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  /** Breadcrumb label; omitted for the homepage. */
  crumb?: string;
  /** Parent breadcrumbs (path + label) between Home and this page. */
  parents?: { path: string; name: string }[];
  schema?: Record<string, unknown> | Record<string, unknown>[];
  /** Sitemap hints */
  priority?: number;
  changefreq?: 'daily' | 'weekly' | 'monthly' | 'yearly';
  lastmod?: string;
}

const webPage = (path: string, name: string, description: string, type = 'WebPage') => ({
  '@context': 'https://schema.org',
  '@type': type,
  '@id': `${absoluteUrl(path)}#webpage`,
  url: absoluteUrl(path),
  name,
  description,
  inLanguage: 'en-IN',
  isPartOf: { '@id': WEBSITE_ID },
  publisher: { '@id': ORG_ID },
});

const service = (path: string, name: string, description: string, offers: string[]) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${absoluteUrl(path)}#service`,
  name,
  description,
  url: absoluteUrl(path),
  provider: { '@type': 'ProfessionalService', '@id': LOCAL_ID, name: SITE.name, url: SITE.url },
  areaServed: ['Guntur', 'Vijayawada', 'Amaravati', 'Hyderabad'].map((name) => ({ '@type': 'City', name })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name,
    itemListElement: offers.map((o) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: o } })),
  },
});

const STATIC_ROUTES: RouteSEO[] = [
  {
    path: '/',
    title: 'Momentrix Media | Digital Marketing Agency, Guntur & Hyderabad',
    description:
      'Guntur-based digital marketing agency serving Andhra Pradesh and Hyderabad: SEO, Google & Meta ads, social media, web development and AI automation.',
    schema: ORG_GRAPH,
    priority: 1.0,
    changefreq: 'weekly',
  },
  {
    path: '/about',
    title: 'About Us – Our Team in Guntur',
    crumb: 'About',
    description:
      'Meet Momentrix Media, a Guntur-based team of marketers, designers and developers specialising in SEO, paid ads, web development and AI automation.',
    schema: webPage('/about', 'About Momentrix Media', 'Our story, values and team.', 'AboutPage'),
    priority: 0.6,
    changefreq: 'monthly',
  },
  {
    path: '/services',
    title: 'Digital Marketing Services',
    crumb: 'Services',
    description:
      'SEO, Google & Meta ads, social media, web development, content and AI automation services for businesses in Guntur, Vijayawada and Hyderabad.',
    schema: webPage(
      '/services',
      'Digital Marketing Services',
      'SEO, paid ads, social media, web development and AI automation services.',
      'CollectionPage'
    ),
    priority: 0.9,
  },
  {
    path: '/services/seo',
    title: 'SEO Services in Guntur & Hyderabad',
    crumb: 'SEO Services',
    parents: [{ path: '/services', name: 'Services' }],
    description:
      'Rank higher on Google with technical SEO audits, on-page optimisation, local SEO and Google Business Profile management for Guntur and Hyderabad businesses.',
    schema: service(
      '/services/seo',
      'SEO Services',
      'Technical SEO, on-page optimisation, link building and local SEO for businesses in Andhra Pradesh and Telangana.',
      ['Technical SEO Audit', 'On-Page Optimisation', 'Link Building & Digital PR', 'Local SEO & Google Business Profile']
    ),
    priority: 0.9,
  },
  {
    path: '/services/social',
    title: 'Social Media Marketing in Guntur',
    crumb: 'Social Media Marketing',
    parents: [{ path: '/services', name: 'Services' }],
    description:
      'Instagram, Facebook and LinkedIn management, Reels, and Meta ad campaigns in Telugu and English for brands in Guntur, Vijayawada and Hyderabad.',
    schema: service(
      '/services/social',
      'Social Media Marketing',
      'Social media management, content creation and Meta ad campaigns.',
      ['Page Management & Content Calendar', 'Meta Ad Campaigns', 'Organic Community Growth', 'Influencer Campaigns']
    ),
    priority: 0.9,
  },
  {
    path: '/services/web',
    title: 'Web Development Company in Guntur',
    crumb: 'Web Development',
    parents: [{ path: '/services', name: 'Services' }],
    description:
      'Fast, SEO-ready websites, e-commerce stores, custom portals and API integrations built in React by Momentrix Media for clients in Guntur and Hyderabad.',
    schema: service(
      '/services/web',
      'Web Development',
      'Custom websites, e-commerce, portals and API integrations.',
      ['Custom Website Development', 'Responsive UI/UX Design', 'E-Commerce Development', 'API & ERP Integration']
    ),
    priority: 0.9,
  },
  {
    path: '/services/performance',
    title: 'Google Ads & Meta Ads Management (PPC)',
    crumb: 'Performance Marketing',
    parents: [{ path: '/services', name: 'Services' }],
    description:
      'Performance marketing and PPC management in Guntur and Hyderabad: Google Ads, Meta Ads, landing pages and conversion tracking focused on cost per lead.',
    schema: service(
      '/services/performance',
      'Performance Marketing & PPC Management',
      'Google Ads, Meta Ads, landing page optimisation and conversion tracking.',
      ['Google Ads Management', 'Meta Ads Management', 'Landing Page Optimisation', 'Remarketing & Conversion Tracking']
    ),
    priority: 0.9,
  },
  {
    path: '/portfolio',
    title: 'Portfolio – Marketing & Web Projects',
    crumb: 'Portfolio',
    description:
      'Selected Momentrix Media projects across SEO, paid advertising, social media and web development, with the results each campaign delivered.',
    schema: webPage('/portfolio', 'Portfolio', 'Selected marketing and web development projects.', 'CollectionPage'),
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    path: '/case-studies',
    title: 'Case Studies – Client Results',
    crumb: 'Case Studies',
    description:
      'Read how Momentrix Media grew organic traffic, lowered cost per lead and increased sales for clients through SEO, paid ads and web development.',
    schema: webPage('/case-studies', 'Case Studies', 'Client success stories.', 'CollectionPage'),
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/blog',
    title: 'Digital Marketing & SEO Blog',
    crumb: 'Blog',
    description:
      'Practical guides on SEO, Google and Meta ads, social media, web performance and AI automation from the Momentrix Media team in Guntur.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      '@id': `${SITE.url}/blog#blog`,
      url: `${SITE.url}/blog`,
      name: 'Momentrix Media Blog',
      publisher: { '@id': ORG_ID },
      blogPost: BLOG_POSTS.map((p) => ({
        '@type': 'BlogPosting',
        headline: p.title,
        url: absoluteUrl(`/blog/${p.slug}`),
        datePublished: p.datePublished,
        dateModified: p.dateModified,
      })),
    },
    priority: 0.8,
  },
  {
    path: '/careers',
    title: 'Careers at Momentrix Media',
    crumb: 'Careers',
    description:
      'Join Momentrix Media. We hire SEO specialists, performance marketers, designers and developers who want to do measurable, high-quality work.',
    schema: webPage('/careers', 'Careers', 'Open roles at Momentrix Media.'),
    priority: 0.5,
    changefreq: 'monthly',
  },
  {
    path: '/contact',
    title: 'Contact Us – Free Marketing Consultation',
    crumb: 'Contact',
    description:
      'Call +91 97034 68919 or visit our Guntur office in Chandramouli Nagar. Book a free consultation for SEO, ads, social media or web development.',
    schema: {
      ...webPage('/contact', 'Contact Momentrix Media', 'Contact details and enquiry form.', 'ContactPage'),
      mainEntity: { '@id': LOCAL_ID },
    },
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/explore',
    title: 'Explore Marketing Tools & AI Solutions',
    crumb: 'Explore',
    description:
      'Try interactive demos of our AI automation, SEO, paid ads, web and content solutions to see how Momentrix Media can help your business grow.',
    schema: webPage('/explore', 'Explore Solutions', 'Interactive demos of our marketing and AI solutions.'),
    priority: 0.6,
    changefreq: 'monthly',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy',
    crumb: 'Privacy Policy',
    description:
      'How Momentrix Media collects, uses and protects personal information submitted through our website, forms and newsletter.',
    schema: webPage('/privacy-policy', 'Privacy Policy', 'Our privacy practices.'),
    priority: 0.2,
    changefreq: 'yearly',
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service',
    crumb: 'Terms of Service',
    description:
      'The terms that govern use of the Momentrix Media website and services, including intellectual property, liability and governing law.',
    schema: webPage('/terms-of-service', 'Terms of Service', 'Website terms of use.'),
    priority: 0.2,
    changefreq: 'yearly',
  },
];

const BLOG_ROUTES: RouteSEO[] = BLOG_POSTS.map((p) => {
  const path = `/blog/${p.slug}`;
  const image = p.image.startsWith('http') ? p.image : `${SITE.url}${p.image}`;
  return {
    path,
    title: p.metaTitle,
    description: p.description,
    image,
    ogType: 'article',
    crumb: p.title,
    parents: [{ path: '/blog', name: 'Blog' }],
    lastmod: p.dateModified,
    priority: 0.7,
    changefreq: 'monthly',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${absoluteUrl(path)}#article`,
      mainEntityOfPage: absoluteUrl(path),
      headline: p.title,
      description: p.description,
      image: [image],
      datePublished: p.datePublished,
      dateModified: p.dateModified,
      articleSection: p.category,
      inLanguage: 'en-IN',
      author: { '@type': 'Organization', '@id': ORG_ID, name: SITE.name, url: SITE.url },
      publisher: { '@id': ORG_ID },
    },
  };
});

const CITY_ROUTES: RouteSEO[] = CITY_PAGES.map((c) => {
  const path = `/${c.slug}`;
  return {
    path,
    title: c.metaTitle,
    description: c.description,
    crumb: c.city,
    priority: 0.9,
    changefreq: 'monthly',
    schema: [
      {
        ...service(
          path,
          `Digital Marketing Services in ${c.city}`,
          c.description,
          ['SEO & Local SEO', 'Google Ads & Meta Ads', 'Social Media Marketing', 'Website Development']
        ),
        areaServed: { '@type': 'City', name: c.city, containedInPlace: { '@type': 'State', name: c.region } },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: c.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };
});

export const NOT_FOUND_SEO: RouteSEO = {
  path: '/404',
  title: 'Page Not Found',
  description: 'The page you were looking for could not be found.',
  noindex: true,
};

export const ROUTES: RouteSEO[] = [...STATIC_ROUTES, ...CITY_ROUTES, ...BLOG_ROUTES];

export const getRouteSEO = (path: string): RouteSEO => {
  const clean = path !== '/' ? path.replace(/\/+$/, '') : path;
  return ROUTES.find((r) => r.path === clean) ?? NOT_FOUND_SEO;
};

// Brand suffix is added only when the result still fits in ~60 characters (Google truncates longer titles).
export const fullTitle = (title: string) =>
  title.includes('Momentrix') || title.length + SITE.titleSuffix.length > 60 ? title : `${title}${SITE.titleSuffix}`;

/** Route schema plus an automatic BreadcrumbList for every page except the homepage. */
export const schemaFor = (route: RouteSEO): Record<string, unknown>[] => {
  const list: Record<string, unknown>[] = [];
  if (route.schema) list.push(...(Array.isArray(route.schema) ? route.schema : [route.schema]));
  if (route.crumb && !route.noindex) {
    const trail = [{ path: '/', name: 'Home' }, ...(route.parents ?? []), { path: route.path, name: route.crumb }];
    list.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: trail.map((t, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: t.name,
        item: absoluteUrl(t.path),
      })),
    });
  }
  return list;
};
