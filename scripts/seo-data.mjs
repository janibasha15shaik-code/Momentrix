// Central, build-time SEO data for Momentrix Media.
// Consumed by scripts/prerender.mjs to bake per-route <head> meta + JSON-LD
// into static HTML so that ALL crawlers (Google + non-JS social crawlers like
// WhatsApp / Facebook / LinkedIn / X) see full, correct metadata before any JS runs.
//
// Keep titles/descriptions here in sync with the runtime useSEO() calls in each page.

export const SITE = {
  url: 'https://momentrixmedia.com',
  name: 'Momentrix Media',
  brand: 'Momentrix Media',
  // Suffix appended to every page title (matches useSEO.ts)
  titleSuffix: ' | Momentrix Media',
  defaultImage:
    'https://momentrixmedia.com/assets/Main%20Favicon%20Dark-D6WWraH_.png',
  locale: 'en_IN',
  twitter: '@momentrix_media',
  phone: '+91-868-6546-419',
  email: 'hello@momentrixmedia.com',
  // Search Engine Verification Tokens (Paste verification strings from GSC/Bing here)
  googleSiteVerification: '', 
  bingSiteVerification: '',
};

// Cities/regions we serve — used for areaServed and to enrich local intent.
const AREA_SERVED = [
  'Guntur',
  'Vijayawada',
  'Amaravati',
  'Hyderabad',
  'Andhra Pradesh',
  'Telangana',
  'India',
];

// Shared JSON-LD graph describing the business itself. Injected on the homepage.
export const ORG_GRAPH = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE.url}/#organization`,
      name: 'Momentrix Media',
      url: SITE.url,
      logo: {
        '@type': 'ImageObject',
        url: SITE.defaultImage,
      },
      email: SITE.email,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: SITE.phone,
        contactType: 'sales',
        areaServed: 'IN',
        availableLanguage: ['en', 'te', 'hi'],
      },
      sameAs: [
        'https://facebook.com/momentrixmedia',
        'https://instagram.com/momentrix_media',
        'https://linkedin.com/company/momentrixmedia',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE.url}/#localbusiness`,
      name: 'Momentrix Media',
      image: SITE.defaultImage,
      url: SITE.url,
      telephone: SITE.phone,
      email: SITE.email,
      priceRange: '₹₹',
      currenciesAccepted: 'INR',
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          'Ground floor, 1-12, 25, 3rd Line, Chandramouli Nagar',
        addressLocality: 'Guntur',
        addressRegion: 'Andhra Pradesh',
        postalCode: '522007',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 16.3132285,
        longitude: 80.42806,
      },
      areaServed: AREA_SERVED.map((name) => ({ '@type': 'City', name })),
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '18:00',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '120',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      name: 'Momentrix Media',
      url: SITE.url,
      publisher: { '@id': `${SITE.url}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE.url}/explore?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

// Helper: build a Service JSON-LD node for the service pages.
const service = (name, description, serviceType) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  serviceType,
  description,
  provider: { '@type': 'Organization', name: 'Momentrix Media', url: SITE.url },
  areaServed: AREA_SERVED.map((n) => ({ '@type': 'City', name: n })),
});

// Per-route SEO. `title` here is WITHOUT the brand suffix (added at render time).
export const ROUTES = [
  {
    path: '/',
    title:
      'Digital Marketing Agency & Web Development Company in Guntur & Hyderabad',
    description:
      'Momentrix Media is a top-rated digital marketing agency and web development company serving Guntur, Vijayawada, Amaravati and Hyderabad. We scale brands with organic SEO, Meta & Google ads, web development, and AI automation.',
    keywords:
      'Digital Marketing Agency in Guntur, Digital Marketing Agency in Hyderabad, SEO Services in Guntur, SEO Services in Hyderabad, Web Development Company in Guntur, Social Media Marketing Guntur, AI Automation Services, Best Digital Marketing Agency Andhra Pradesh',
    schema: ORG_GRAPH,
  },
  {
    path: '/about',
    title: 'Our Story & Agency Core Values',
    description:
      'Learn about Momentrix Media — a collective of digital innovators and data-driven strategists in Guntur specializing in AI automation, SEO, paid performance, and web development across Andhra Pradesh & Hyderabad.',
    keywords:
      'About Momentrix Media, Digital Marketing Experts Guntur, AI Automation Team, Marketing Agency Andhra Pradesh, Agency Core Values',
  },
  {
    path: '/services',
    title: 'Our Services & Digital Capabilities',
    description:
      'Explore Momentrix Media capabilities in Guntur & Hyderabad: AI automation, SEO, PPC search ads, web development, performance marketing, social media, and email marketing.',
    keywords:
      'Digital Marketing Services Guntur, AI Automation Services, SEO Services in Hyderabad, PPC Management, Web Development Company Guntur, Social Media Marketing',
  },
  {
    path: '/services/seo',
    title: 'SEO Services in Guntur & Hyderabad',
    description:
      'Momentrix Media provides professional SEO services in Guntur, Vijayawada and Hyderabad. We build domain-authority blueprints, technical audits, local SEO, and capture high-intent search traffic.',
    keywords:
      'SEO Services in Guntur, SEO Services in Hyderabad, Local SEO Agency Guntur, Technical SEO Audit, Search Engine Optimization Vijayawada, Domain Authority link building',
    schema: service(
      'SEO Services',
      'Premium SEO services in Guntur and Hyderabad — domain authority building, technical auditing, local SEO, and keyword optimization to rank your website on top of Google.',
      'Search Engine Optimization'
    ),
  },
  {
    path: '/services/social',
    title: 'Social Media Marketing Services in Guntur & Hyderabad',
    description:
      'Momentrix Media runs elite social media marketing in Guntur & Hyderabad. We build brand loyalty and high-engagement ad campaigns on Instagram, Facebook, and LinkedIn.',
    keywords:
      'Social Media Marketing Services Guntur, Social Media Agency Hyderabad, Instagram Marketing, Facebook Campaigns Guntur, Brand Engagement Andhra Pradesh',
    schema: service(
      'Social Media Marketing',
      'Social media marketing and paid social campaigns across Instagram, Facebook and LinkedIn for brands in Guntur, Vijayawada and Hyderabad.',
      'Social Media Marketing'
    ),
  },
  {
    path: '/services/web',
    title: 'Web Development Services in Guntur & Hyderabad',
    description:
      'Momentrix Media is a top web development company in Guntur & Hyderabad. We engineer high-performance websites, custom portals, e-commerce engines, and API integrations.',
    keywords:
      'Web Development Company in Guntur, Web Development Company in Hyderabad, E-commerce Web Developer, React Next.js Developer Andhra Pradesh, Responsive Web Design Guntur',
    schema: service(
      'Web Development',
      'High-performance web development in Guntur and Hyderabad — custom websites, portals, e-commerce engines and API integrations built on modern React/Next.js stacks.',
      'Web Development'
    ),
  },
  {
    path: '/services/performance',
    title: 'Paid Acquisition & PPC Management in Guntur & Hyderabad',
    description:
      'Momentrix Media is a top PPC management agency in Guntur & Hyderabad. Scale revenue with high-ROAS Meta Ads, Google Ads, and performance-marketing funnels.',
    keywords:
      'PPC Services in Guntur, PPC Services in Hyderabad, Paid Acquisition Agency, Meta Ads Specialist, Google Ads Management Andhra Pradesh, High ROAS Campaigns',
    schema: service(
      'PPC & Paid Acquisition',
      'Performance marketing and PPC management in Guntur and Hyderabad — high-ROAS Meta Ads, Google Ads and conversion funnels.',
      'Pay Per Click Advertising'
    ),
  },
  {
    path: '/portfolio',
    title: 'Our Case Studies & Creative Portfolio',
    description:
      'Explore the Momentrix Media project portfolio. See how our data-driven strategies and engineering scaled traffic, acquisition, and conversions for brands in Andhra Pradesh & beyond.',
    keywords:
      'Momentrix Media Portfolio, Marketing Case Studies, Web Development Projects Guntur, SEO Success Stories, High-ROAS campaigns',
  },
  {
    path: '/case-studies',
    title: 'Marketing Case Studies & SEO Success Stories',
    description:
      'Read our digital marketing and SEO case studies. Learn how we scale organic traffic, optimize search campaigns, and reduce acquisition costs for brands in Guntur, Hyderabad and across India.',
    keywords:
      'Marketing Case Studies, SEO Success Stories, B2B SaaS SEO Case Study, E-commerce SEO Growth, ROI campaigns Andhra Pradesh',
  },
  {
    path: '/blog',
    title: 'Digital Marketing & SEO Insights Blog',
    description:
      'Stay ahead of search-algorithm changes and performance-marketing shifts. Read the latest SEO trends, Meta ad strategies, and automation guides from Momentrix Media.',
    keywords:
      'Momentrix Media Blog, Digital Marketing Trends, SEO Blog, Meta Ads Strategy, Content Marketing Insights',
  },
  {
    path: '/careers',
    title: 'Careers & Digital Marketing Jobs in Guntur',
    description:
      'Join the Momentrix Media team in Guntur. We are hiring SEO specialists, paid-performance managers, developers, and designers to scale brand equity.',
    keywords:
      'Digital Marketing Careers Guntur, SEO Jobs Andhra Pradesh, Join Momentrix Media, Developer Jobs Guntur, Performance Marketing Roles',
  },
  {
    path: '/contact',
    title: 'Book a Consultation | Contact Us',
    description:
      'Get in touch with Momentrix Media in Guntur. Request a free growth-strategy consultation for AI automation, SEO, PPC ads, or web development.',
    keywords:
      'Contact Momentrix Media, Digital Marketing Consultation Guntur, Hire SEO Expert Guntur, Web Development Agency Andhra Pradesh',
  },
  {
    path: '/explore',
    title: 'Explore Solutions & Interactive Simulators',
    description:
      'Interact with our custom tool simulators: AI workflow bots, SEO keywords, bid optimizers, responsiveness builders, and content generators in real time.',
    keywords:
      'Interactive Marketing Tools, SEO Simulator, AI Workflow Automation Tool, CPC Bidding Calculator',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy',
    description:
      'Read the Privacy Policy of Momentrix Media. Learn how we protect your personal data, privacy settings, and security standards.',
    keywords:
      'Privacy Policy Momentrix Media, Data Protection, Cookie Policy, Compliance Guntur',
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service',
    description:
      'Read the Terms of Service of Momentrix Media. Review intellectual-property rights, liability limitations, and governing laws.',
    keywords:
      'Terms of Service Momentrix Media, Terms of Use, Service Agreement, Legal Guntur',
  },
];
