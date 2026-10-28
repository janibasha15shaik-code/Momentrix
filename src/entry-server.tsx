/* eslint-disable react-refresh/only-export-components -- build-time server entry, never hot-reloaded */
// Server entry used only at build time by scripts/prerender.mjs.
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.tsx'

export { ROUTES, NOT_FOUND_SEO, getRouteSEO } from './seo/routes'
export { buildHeadTags } from './seo/head'
export { SITE, absoluteUrl } from './seo/site'

export function render(url: string): string {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  )
}
