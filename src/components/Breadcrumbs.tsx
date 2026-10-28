import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  name: string;
  path?: string;
}

/** Visible breadcrumb trail. The matching BreadcrumbList JSON-LD is generated in src/seo/routes.ts. */
const Breadcrumbs: React.FC<{ items: Crumb[]; className?: string }> = ({ items, className = '' }) => (
  <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
    <ol className="flex flex-wrap items-center gap-1.5 text-slate-500 dark:text-slate-400">
      {items.map((c, i) => (
        <li key={c.name} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />}
          {c.path ? (
            <Link to={c.path} className="hover:text-primary-600 transition-colors">
              {c.name}
            </Link>
          ) : (
            <span aria-current="page" className="text-slate-700 dark:text-slate-200 font-medium line-clamp-1">
              {c.name}
            </span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
