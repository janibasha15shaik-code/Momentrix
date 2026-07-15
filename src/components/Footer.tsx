import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe.');
      }
      setEmail('');
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-slate-50 dark:bg-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Bio */}
          <div className="col-span-1 lg:col-span-1">
            <Logo size="md" className="mb-4" />
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-sm">
              Transforming Brands Into Digital Success. We are a premium digital marketing agency driving growth for ambitious brands.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-500 hover:shadow-md transition-all shadow-sm border border-slate-100 dark:border-slate-700">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-500 hover:shadow-md transition-all shadow-sm border border-slate-100 dark:border-slate-700">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-500 hover:shadow-md transition-all shadow-sm border border-slate-100 dark:border-slate-700">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-500 hover:shadow-md transition-all shadow-sm border border-slate-100 dark:border-slate-700">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Case Studies', path: '/case-studies' },
                { name: 'Blog', path: '/blog' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors inline-block hover:translate-x-1 transform duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'AI Automation', path: '/explore#ai-automation' },
                { name: 'SEO Services', path: '/services/seo' },
                { name: 'Social Media Marketing', path: '/services/social' },
                { name: 'Web Development', path: '/services/web' },
                { name: 'Performance Marketing', path: '/services/performance' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors inline-block hover:translate-x-1 transform duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link to="/services" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-bold transition-all inline-flex items-center gap-1.5 hover:translate-x-1 transform duration-200">
                  More Services <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Subscribe to get the latest digital marketing insights.
            </p>
            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-semibold text-xs text-center shadow-sm">
                🎉 Subscribed successfully!
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <form className="space-y-3" onSubmit={handleSubmit}>
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                      className="w-full pl-4 pr-12 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-sm disabled:opacity-50"
                    />
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="absolute right-2 top-2 bottom-2 w-9 rounded-lg bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center transition-colors disabled:opacity-50"
                    >
                      {loading ? '...' : <ArrowRight className="w-4 h-4" />}
                    </button>
                  </div>
                </form>
                {error && (
                  <p className="text-xs text-red-500 font-medium pl-1">{error}</p>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Momentrix Media. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-400">
            <Link to="/privacy-policy" className="hover:text-primary-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


