// Single source of truth for business details (NAP: name, address, phone).
// Keep these identical to your Google Business Profile listing — Google
// cross-checks them, and mismatches weaken local rankings.

export const SITE = {
  url: 'https://www.momentrixmedia.com',
  name: 'Momentrix Media',
  titleSuffix: ' | Momentrix Media',
  defaultImage: 'https://www.momentrixmedia.com/assets/og-image.jpg',
  logo: 'https://www.momentrixmedia.com/assets/logo-dark.png',
  locale: 'en_IN',
  twitter: '@momentrixmedia',
  phone: '+91-97034-68919',
  phoneAlt: '+91-63001-40031',
  email: 'info@momentrixmedia.com',
  googleSiteVerification: 'pk9KDgeeFJibf5zZd3ngCSwlVt06OaMcrmG6V9wWabU',
  bingSiteVerification: '',
  address: {
    streetAddress: 'Ground floor, 1-12, 25, 3rd Line, Chandramouli Nagar',
    addressLocality: 'Guntur',
    addressRegion: 'Andhra Pradesh',
    postalCode: '522007',
    addressCountry: 'IN',
  },
  geo: { latitude: 16.3132285, longitude: 80.42806 },
  sameAs: [
    'https://facebook.com/momentrixmedia',
    'https://x.com/momentrixmedia',
    'https://instagram.com/momentrixmedia',
    'https://linkedin.com/company/momentrixmedia',
  ],
} as const;

export const ORG_ID = `${SITE.url}/#organization`;
export const LOCAL_ID = `${SITE.url}/#localbusiness`;
export const WEBSITE_ID = `${SITE.url}/#website`;

export const absoluteUrl = (path: string) => `${SITE.url}${path === '/' ? '' : path}`;

/** Organization + LocalBusiness + WebSite graph, used on the homepage. */
export const ORG_GRAPH = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: SITE.name,
      url: SITE.url,
      logo: { '@type': 'ImageObject', url: SITE.logo },
      email: SITE.email,
      telephone: SITE.phone,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: SITE.phone,
        contactType: 'sales',
        areaServed: 'IN',
        availableLanguage: ['en', 'te', 'hi'],
      },
      sameAs: SITE.sameAs,
    },
    {
      '@type': 'ProfessionalService',
      '@id': LOCAL_ID,
      name: SITE.name,
      image: SITE.defaultImage,
      logo: SITE.logo,
      url: SITE.url,
      telephone: SITE.phone,
      email: SITE.email,
      priceRange: '₹₹',
      currenciesAccepted: 'INR',
      address: { '@type': 'PostalAddress', ...SITE.address },
      geo: { '@type': 'GeoCoordinates', ...SITE.geo },
      hasMap:
        'https://maps.google.com/?q=Ground+floor+1-12+25+3rd+Line+Chandramouli+Nagar+Guntur+Andhra+Pradesh+522007',
      areaServed: [
        { '@type': 'City', name: 'Guntur' },
        { '@type': 'City', name: 'Vijayawada' },
        { '@type': 'City', name: 'Amaravati' },
        { '@type': 'City', name: 'Hyderabad' },
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
      parentOrganization: { '@id': ORG_ID },
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      name: SITE.name,
      url: SITE.url,
      inLanguage: 'en-IN',
      publisher: { '@id': ORG_ID },
    },
  ],
};
