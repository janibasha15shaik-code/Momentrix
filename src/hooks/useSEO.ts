import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRouteSEO } from '../seo/routes';
import { buildHeadTags } from '../seo/head';
import { fullTitle } from '../seo/routes';

/**
 * Keeps <head> in sync with the current route during client-side navigation.
 * Page metadata lives in src/seo/routes.ts — edit it there, not in the pages.
 * On first load the prerendered HTML already contains identical tags.
 */
export const useRouteSEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = getRouteSEO(pathname);
    const { html } = buildHeadTags(route);

    document.title = fullTitle(route.title);
    document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove());

    const tpl = document.createElement('template');
    tpl.innerHTML = html;
    // Scripts created via innerHTML are inert, which is fine for JSON-LD
    // (search engines read it from the DOM; it never needs to execute).
    document.head.append(...Array.from(tpl.content.childNodes).filter((n) => n.nodeType === 1));
  }, [pathname]);
};
