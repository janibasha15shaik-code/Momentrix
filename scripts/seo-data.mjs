// Central, build-time SEO data for Momentrix Media.
// Consumed by scripts/prerender.mjs to bake per-route <head> meta + JSON-LD
// into static HTML so that ALL crawlers (Google + non-JS social crawlers like
// WhatsApp / Facebook / LinkedIn / X) see full, correct metadata before any JS runs.
//
// Keep titles/descriptions here in sync with the runtime useSEO() calls in each page.

export const SITE = {
  url: 'https://www.momentrixmedia.com',
  name: 'Momentrix Media',
  brand: 'Momentrix Media',
  // Suffix appended to every page title (matches useSEO.ts)
  titleSuffix: ' | Momentrix Media',
  defaultImage:
    'https://www.momentrixmedia.com/assets/logo-dark.png',
  locale: 'en_IN',
  twitter: '@momentrix_media',
  phone: '+91-868-6546-419',
  email: 'hello@momentrixmedia.com',
  // Search Engine Verification Tokens (Paste verification strings from GSC/Bing here)
  googleSiteVerification: 'pk9KDgeeFJibf5zZd3ngCSwlVt06OaMcrmG6V9wWabU',
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
      areaServed: [
        { '@type': 'City', name: 'Guntur' },
        { '@type': 'City', name: 'Vijayawada' },
        { '@type': 'City', name: 'Amaravati' },
        { '@type': 'City', name: 'Hyderabad' }
      ],
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

// Per-route SEO. `title` here is WITHOUT the brand suffix (added at render time).
export const ROUTES = [
  {
    path: '/',
    title:
      'Momentrix Media | Best Digital Marketing Agency & Web Development Company in Guntur & Hyderabad',
    description:
      'Momentrix Media is a top-rated digital marketing agency and web development company serving Guntur, Vijayawada, Amaravati and Hyderabad. We scale brands with organic SEO, Meta & Google ads, web development, and AI automation.',
    keywords:
      'Momentrix, Momentrix Media, Momentrix Guntur, Momentrix Hyderabad, Momentrix Media Guntur, Momentrix Media Hyderabad, Digital Marketing Agency in Guntur, Digital Marketing Agency in Hyderabad, SEO Services in Guntur, SEO Services in Hyderabad, Web Development Company in Guntur, Web Development Company in Hyderabad, Social Media Marketing Guntur, AI Automation Services, Best Digital Marketing Agency Andhra Pradesh, Best SEO Agency Guntur, Best Web Design Agency Hyderabad, Momentrix Media Agency',
    schema: ORG_GRAPH,
  },
  {
    path: '/about',
    title: 'Our Story & Agency Core Values',
    description:
      'Learn about Momentrix Media, a collective of digital innovators and data-driven strategists specializing in AI automation, SEO, and paid performance marketing.',
    keywords:
      'About Momentrix Media, Digital Marketing Experts, AI Automation Team Hyderabad, Agency Core Values',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      '@id': `${SITE.url}/about#webpage`,
      name: 'About Us - Momentrix Media',
      description: 'Learn about our mission, core values, and team.',
      url: `${SITE.url}/about`,
      publisher: {
        '@type': 'Organization',
        name: 'Momentrix Media',
        logo: {
          '@type': 'ImageObject',
          url: SITE.defaultImage,
        },
      },
    },
  },
  {
    path: '/services',
    title: 'Our Services & Digital Capabilities',
    description:
      'Explore Momentrix Media capabilities in Guntur & Hyderabad: AI automation, search engine optimization (SEO), PPC search ads, web development, performance marketing, social media, and email marketing.',
    keywords:
      'Digital Marketing Services Guntur, AI Automation Services, SEO Services in Hyderabad, PPC Management, Web Development Company Guntur, Social Media Marketing',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE.url}/services#webpage`,
      name: 'Our Services & Digital Capabilities - Momentrix Media',
      description: 'Explore our digital transformational capabilities including web development, search engine optimization, PPC search marketing, social media campaigns, and AI workflows.',
      url: `${SITE.url}/services`,
      publisher: {
        '@type': 'Organization',
        name: 'Momentrix Media',
      },
    },
  },
  {
    path: '/services/seo',
    title: 'SEO Services in Hyderabad & Guntur',
    description:
      'Momentrix Media provides professional SEO Services in Hyderabad and Guntur. We build domain authority blueprints, optimize web speed, and capture high-intent traffic.',
    keywords:
      'SEO Services in Hyderabad, Search Engine Optimization Guntur, Technical SEO Audit, Local SEO Agency, Domain Authority link building',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE.url}/services/seo#service`,
      name: 'Search Engine Optimization (SEO) Services',
      description: 'Premium SEO Services in Hyderabad and Guntur, establishing domain authority, technical auditing, local SEO, and keyword optimization to rank your website on top.',
      provider: {
        '@type': 'Organization',
        name: 'Momentrix Media',
        url: SITE.url,
      },
      areaServed: 'Hyderabad, Guntur, India',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'SEO Capabilities',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Technical SEO Auditing',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'On-Page Semantic Optimization',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Off-Page Link Building',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Local SEO & Map Listing',
            },
          },
        ],
      },
    },
  },
  {
    path: '/services/social',
    title: 'Social Media Marketing Services in Guntur & Hyderabad',
    description:
      'Momentrix Media runs elite Social Media Marketing in Guntur & Hyderabad. We build brand loyalty and high-engagement ad campaigns on Instagram, Facebook, and LinkedIn.',
    keywords:
      'Social Media Marketing Services Guntur, Social Media Agency Hyderabad, Instagram Marketing, Facebook Campaigns Guntur, Brand Engagement Andhra Pradesh',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE.url}/services/social#service`,
      name: 'Social Media Marketing Services',
      description: 'Professional Social Media Marketing Services in Hyderabad, building brand communities, managing page updates, running Meta ads campaigns, and growing organic engagement.',
      provider: {
        '@type': 'Organization',
        name: 'Momentrix Media',
        url: SITE.url,
      },
      areaServed: 'Hyderabad, Guntur, India',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Social Media Capabilities',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Page Management & Schedules',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Meta Sponsored Ad Campaigns',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Organic Community Growth',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Influencer Relations & Campaigns',
            },
          },
        ],
      },
    },
  },
  {
    path: '/services/web',
    title: 'Web Development Services in Hyderabad & Guntur',
    description:
      'Momentrix Media is a top-tier Web Development Company in Hyderabad. We engineer high-performance web systems, custom portals, E-commerce web engines, and API integrations.',
    keywords:
      'Web Development Company in Hyderabad, Web Development Services, E-commerce Web Developer, React Next.js Developer Hyderabad, Responsive Web Design',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE.url}/services/web#service`,
      name: 'Web Development Services',
      description: 'Premium Web Development Services in Hyderabad. We engineer high-performance web systems, custom portals, E-commerce web engines, and API integrations.',
      provider: {
        '@type': 'Organization',
        name: 'Momentrix Media',
        url: SITE.url,
      },
      areaServed: 'Hyderabad, Guntur, India',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web Development Capabilities',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Portal Engineering',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Responsive Web UI/UX Design',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'E-Commerce Systems Setup',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'API & ERP Integration Services',
            },
          },
        ],
      },
    },
  },
  {
    path: '/services/performance',
    title: 'Paid Acquisition & PPC Management in Guntur & Hyderabad',
    description:
      'Momentrix Media is a top PPC management agency in Guntur & Hyderabad. Scale revenue with high-ROAS Meta Ads, Google Ads, and performance-marketing funnels.',
    keywords:
      'PPC Services in Guntur, PPC Services in Hyderabad, Paid Acquisition Agency, Meta Ads Specialist, Google Ads Management Andhra Pradesh, High ROAS Campaigns',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE.url}/services/performance#service`,
      name: 'Paid Acquisition & PPC Management Services',
      description: 'High-ROAS Meta ads, Google ads, and conversion optimization performance marketing services.',
      provider: {
        '@type': 'Organization',
        name: 'Momentrix Media',
        url: SITE.url,
      },
      areaServed: 'Hyderabad, Guntur, India',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'PPC & Acquisition Capabilities',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Google Ads & PPC Search Campaigns',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Meta Ads & Social Targeting',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'High Converting Landing Page Optimization',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Remarketing & Attribution Tracking',
            },
          },
        ],
      },
    },
  },
  {
    path: '/portfolio',
    title: 'Our Case Studies & Creative Portfolio',
    description:
      'Explore the Momentrix Media project portfolio. Read how our data-driven strategies and engineering systems scaled traffic, acquisition, and conversion metrics.',
    keywords:
      'Momentrix Media Portfolio, Marketing Case Studies, Web Development Projects, SEO Success Stories Hyderabad, High-ROAS campaigns',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE.url}/portfolio#webpage`,
      name: 'Portfolio - Momentrix Media',
      description: 'Explore our digital marketing, SEO, and web development case studies and projects.',
      url: `${SITE.url}/portfolio`,
      publisher: {
        '@type': 'Organization',
        name: 'Momentrix Media',
        logo: {
          '@type': 'ImageObject',
          url: SITE.defaultImage,
        },
      },
    },
  },
  {
    path: '/case-studies',
    title: 'Marketing Case Studies & SEO Success Stories',
    description:
      'Read our digital marketing and SEO case studies. Learn how we scale organic traffic, optimize search campaigns, and decrease acquisition costs for brands.',
    keywords:
      'Marketing Case Studies, SEO Success Stories, B2B SaaS SEO Case Study, E-commerce SEO Growth Hyderabad, ROI campaigns',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE.url}/case-studies#webpage`,
      name: 'Case Studies - Momentrix Media',
      description: 'Read our digital marketing, SEO, and web development case studies.',
      url: `${SITE.url}/case-studies`,
      publisher: {
        '@type': 'Organization',
        name: 'Momentrix Media',
        logo: {
          '@type': 'ImageObject',
          url: SITE.defaultImage,
        },
      },
    },
  },
  {
    path: '/blog',
    title: 'Digital Marketing & SEO Insights Blog',
    description:
      'Stay ahead of search algorithm changes and performance marketing shifts. Read the latest SEO trends, Meta ad strategies, and automation guides.',
    keywords:
      'Momentrix Media Blog, Digital Marketing Trends, SEO Blog Hyderabad, Meta Ads Strategy, Content Marketing Insights',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      '@id': `${SITE.url}/blog#blog`,
      name: 'Momentrix Media Insights Blog',
      description: 'Latest trends, strategies, and insights from our team of digital marketing experts.',
      url: `${SITE.url}/blog`,
      publisher: {
        '@type': 'Organization',
        name: 'Momentrix Media',
        logo: {
          '@type': 'ImageObject',
          url: SITE.defaultImage,
        },
      },
      blogPost: [
        {
          '@type': 'BlogPosting',
          headline: '10 SEO Trends to Watch in 2026',
          url: `${SITE.url}/blog`,
          datePublished: '2025-10-12',
          author: {
            '@type': 'Person',
            name: 'Alex Morgan',
          },
          description: 'Search algorithms are evolving faster than ever. Stay ahead of the curve with these top 10 SEO trends that will dominate this year.',
        },
        {
          '@type': 'BlogPosting',
          headline: 'Maximizing ROI with TikTok Ads',
          url: `${SITE.url}/blog`,
          datePublished: '2025-10-05',
          author: {
            '@type': 'Person',
            name: 'Sarah Jenkins',
          },
          description: 'Discover how brands are leveraging short-form video content to drive unprecedented conversion rates on TikTok.',
        },
      ],
    },
  },
  {
    path: '/careers',
    title: 'Careers & Digital Marketing Jobs',
    description:
      'Join the Momentrix Media team. We are looking for talented SEO specialists, paid performance ads managers, developers, and designers to scale brand equity.',
    keywords:
      'Digital Marketing Careers, SEO Jobs Hyderabad, Join Momentrix Media, Remote Developer Jobs, Performance Marketing Roles',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE.url}/careers#webpage`,
      name: 'Careers - Momentrix Media',
      description: 'Join our team of creative, analytical, and growth-oriented professionals.',
      url: `${SITE.url}/careers`,
      publisher: {
        '@type': 'Organization',
        name: 'Momentrix Media',
        logo: {
          '@type': 'ImageObject',
          url: SITE.defaultImage,
        },
      },
    },
  },
  {
    path: '/contact',
    title: 'Book a Consultation | Contact Us',
    description:
      'Get in touch with Momentrix Media today. Request a free growth strategy consultation for AI automation, SEO, PPC ads, or web development services.',
    keywords:
      'Contact Momentrix Media, Digital Marketing Consultation, Hire SEO Expert Hyderabad, Web Development Agency Inquiry',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      '@id': `${SITE.url}/contact#webpage`,
      name: 'Contact Us - Momentrix Media',
      description: 'Book a free digital growth strategy session with our technical marketing team.',
      url: `${SITE.url}/contact`,
      mainEntity: {
        '@type': 'Organization',
        name: 'Momentrix Media',
        telephone: SITE.phone,
        email: 'contact@momentrixmedia.com',
      },
    },
  },
  {
    path: '/explore',
    title: 'Explore Solutions & Interactive Simulators',
    description:
      'Interact with our custom tool simulators: AI workflow bots, SEO keywords, bid optimizers, responsiveness builders, and content generators in real-time.',
    keywords:
      'Interactive Marketing Tools, SEO Simulator, AI Workflow Automation Tool Hyderabad, CPC Bidding Calculator',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE.url}/explore#webpage`,
      name: 'Explore Solutions - Momentrix Media',
      description: 'Interactive workspace showcasing our AI automation, digital marketing, SEO, and web development simulators.',
      url: `${SITE.url}/explore`,
      publisher: {
        '@type': 'Organization',
        name: 'Momentrix Media',
        logo: {
          '@type': 'ImageObject',
          url: SITE.defaultImage,
        },
      },
    },
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy',
    description:
      'Read the Privacy Policy of Momentrix Media. Learn about our commitments to protecting your personal data, privacy settings, and security standards.',
    keywords:
      'Privacy Policy Momentrix Media, Data Protection, Cookie Policy, Compliance Guntur',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE.url}/privacy-policy#webpage`,
      name: 'Privacy Policy - Momentrix Media',
      description: 'Learn about our data collection and privacy practices.',
      url: `${SITE.url}/privacy-policy`,
      publisher: {
        '@type': 'Organization',
        name: 'Momentrix Media',
        logo: {
          '@type': 'ImageObject',
          url: SITE.defaultImage,
        },
      },
    },
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service',
    description:
      'Read the Terms of Service of Momentrix Media. Review intellectual property rights, liability limitations, and governing laws.',
    keywords:
      'Terms of Service Momentrix Media, Terms of Use, Service Agreement, Web Terms, Legal Guntur',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE.url}/terms-of-service#webpage`,
      name: 'Terms of Service - Momentrix Media',
      description: 'Read our terms of service and website usage rules.',
      url: `${SITE.url}/terms-of-service`,
      publisher: {
        '@type': 'Organization',
        name: 'Momentrix Media',
        logo: {
          '@type': 'ImageObject',
          url: SITE.defaultImage,
        },
      },
    },
  },
];
