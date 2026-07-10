import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogType?: string;
  ogImage?: string;
  schemaMarkup?: object;
}

export const useSEO = ({
  title,
  description,
  keywords = 'Digital Marketing Agency in Guntur, Digital Marketing Agency in Hyderabad, SEO Services in Guntur, SEO Services in Hyderabad, Web Development Company in Guntur, AI Automation Services, Social Media Marketing Services Andhra Pradesh',
  canonicalPath,
  ogType = 'website',
  ogImage = 'https://momentrixmedia.com/assets/Main%20Favicon%20Dark-D6WWraH_.png',
  schemaMarkup
}: SEOProps) => {
  useEffect(() => {
    // 1. Base URL config
    const baseUrl = 'https://momentrixmedia.com';
    const currentPath = canonicalPath || window.location.pathname;
    const canonicalUrl = `${baseUrl}${currentPath === '/' ? '' : currentPath}`;
    const fullTitle = `${title} | Momentrix Media`;

    // 2. Helper to set/update meta tag
    const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Update Title
    document.title = fullTitle;

    // 4. Update Standard SEO tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1');
    setMetaTag('name', 'author', 'Momentrix Media');

    // 5. Update Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 6. Update Open Graph tags
    setMetaTag('property', 'og:site_name', 'Momentrix Media');
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:locale', 'en_IN');

    // 7. Update Twitter Card tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:site', '@momentrix_media');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 8. Inject JSON-LD Schema Markup
    let schemaScript = document.getElementById('seo-schema-script') as HTMLScriptElement;
    if (schemaMarkup) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'seo-schema-script';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.text = JSON.stringify(schemaMarkup);
    } else {
      if (schemaScript) {
        schemaScript.remove();
      }
    }

    // Cleanup: remove schema script when page unmounts to prevent leakage between pages
    return () => {
      const scriptToRemove = document.getElementById('seo-schema-script');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, keywords, canonicalPath, ogType, ogImage, schemaMarkup]);
};
