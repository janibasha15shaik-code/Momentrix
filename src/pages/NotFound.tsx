import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <div className="pt-36 pb-24 min-h-[70vh] container mx-auto px-4 md:px-6 text-center max-w-2xl">
    <p className="text-primary-600 font-bold mb-3">404</p>
    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Page not found</h1>
    <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
      The page you are looking for has moved or no longer exists. Try one of these instead:
    </p>
    <div className="flex flex-wrap justify-center gap-3">
      <Link to="/" className="px-6 py-3 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700">
        Home
      </Link>
      <Link to="/services" className="px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-800 font-semibold">
        Services
      </Link>
      <Link to="/blog" className="px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-800 font-semibold">
        Blog
      </Link>
      <Link to="/contact" className="px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-800 font-semibold">
        Contact
      </Link>
    </div>
  </div>
);

export default NotFound;
