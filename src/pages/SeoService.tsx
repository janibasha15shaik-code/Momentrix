import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { Search, TrendingUp, Target, Shield, Star, CheckCircle2, X } from 'lucide-react';

const SeoService: React.FC = () => {
  useSEO({
    title: 'SEO Services in Hyderabad & Guntur',
    description: 'Momentrix Media provides professional SEO Services in Hyderabad and Guntur. We build domain authority blueprints, optimize web speed, and capture high-intent traffic.',
    keywords: 'SEO Services in Hyderabad, Search Engine Optimization Guntur, Technical SEO Audit, Local SEO Agency, Domain Authority link building',
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Search Engine Optimization (SEO) Services",
      "description": "Premium SEO Services in Hyderabad and Guntur, establishing domain authority, technical auditing, local SEO, and keyword optimization to rank your website on top.",
      "provider": {
        "@type": "Organization",
        "name": "Momentrix Media",
        "url": "https://momentrixmedia.com"
      },
      "areaServed": "Hyderabad, Guntur, India",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SEO Capabilities",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO Auditing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "On-Page Semantic Optimization"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Off-Page Link Building"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local SEO & Map Listing"
            }
          }
        ]
      }
    }
  });

  const [websiteUrl, setWebsiteUrl] = useState('');
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWebsiteUrl('');
    setEmail('');
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-12 overflow-hidden bg-slate-950 text-white">
        {/* Glowing technical mesh background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px] opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,197,94,0.15),transparent_60%)] pointer-events-none" />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute top-10 right-[-10%] w-[50%] h-[50%] bg-primary-500/10 blur-[130px] rounded-full pointer-events-none"
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-950/60 border border-primary-500/30 text-primary-400 font-semibold text-xs uppercase tracking-wider mb-6">
                <Search className="w-3.5 h-3.5 animate-pulse" /> Advanced SEO Architectures
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Dominate Search Engine <span className="text-primary-500">Rankings</span>.
              </h1>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                We engineer organic search funnels, optimize domain directories, and maximize target keywords that direct high-intent buyers straight to your ecosystem.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-8 py-4 rounded-full bg-primary-600 text-white font-bold hover:bg-primary-500 transition-colors shadow-lg shadow-primary-600/30">
                  Request Free SEO Audit
                </Link>
              </div>
            </motion.div>

            {/* Interactive Mockup Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/5 to-blue-500/5" />
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">momentrix.seo-console.sh</span>
                </div>
                
                {/* Stats simulation */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { title: 'Organic Growth', val: '+248%', color: 'text-green-500' },
                    { title: 'Domain Authority', val: 'DA 78', color: 'text-blue-500' },
                    { title: 'Keyword Index', val: '22,450', color: 'text-primary-400' }
                  ].map((stat, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-950 border border-slate-850 text-center">
                      <p className="text-[10px] text-slate-500 font-semibold mb-1 uppercase tracking-wider">{stat.title}</p>
                      <h4 className={`text-lg font-bold ${stat.color}`}>{stat.val}</h4>
                    </div>
                  ))}
                </div>

                {/* Simulated Chart */}
                <div className="h-40 flex items-end gap-1.5 pt-4 px-2 bg-slate-950 rounded-xl border border-slate-850 relative">
                  <div className="absolute top-3 left-4 text-xs font-bold text-slate-500 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-green-500" /> Search Index Velocity
                  </div>
                  {[30, 45, 38, 55, 60, 52, 75, 90, 85, 110, 130].map((h, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ height: 0 }}
                      animate={{ height: `${(h / 140) * 100}%` }}
                      transition={{ duration: 1.2, delay: idx * 0.05 }}
                      className="flex-1 bg-gradient-to-t from-primary-600 to-orange-500 rounded-t-sm"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-24 bg-white dark:bg-dark border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-3">SEO Services Blueprint</h2>
            <h3 className="text-3xl md:text-5xl font-bold">Uncompromising Search Strategies</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-7 h-7 text-primary-500" />,
                title: 'Keywords Audit',
                desc: 'In-depth research focusing on high-intent transactional search terms and competitive matrices.'
              },
              {
                icon: <TrendingUp className="w-7 h-7 text-blue-500" />,
                title: 'On-Page Blueprint',
                desc: 'Strict semantic structuring, optimized content tags, schemas, metadata alignment, and core web vitals.'
              },
              {
                icon: <Shield className="w-7 h-7 text-indigo-500" />,
                title: 'Technical Stack',
                desc: 'Automated site speed analysis, clean directory crawls, sitemap indices, and robust HTTPS security protocols.'
              },
              {
                icon: <Star className="w-7 h-7 text-yellow-500" />,
                title: 'Off-Page Authority',
                desc: 'Acquiring high-tier editorial backlinks, strategic press releases, and local search pinning.'
              }
            ].map((comp, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:-translate-y-1.5 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-850 shadow-md flex items-center justify-center mb-6">
                  {comp.icon}
                </div>
                <h4 className="text-lg font-bold mb-3">{comp.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{comp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured workflow */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Our SEO Methodology</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                We take an engineered approach to search authority. Instead of basic blog spam, we build domain directories that attract Google core updates rather than fighting them.
              </p>
              
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Audit & Crawl Analyses', text: 'We crawl every branch of your website to identify load delays, broken links, and metadata leaks.' },
                  { step: '02', title: 'Intent Mapping Matrix', text: 'We map target search groups against specific pages to verify high conversion potential.' },
                  { step: '03', title: 'Link Architecture & Growth', text: 'We build structural references across high-domain networks to steadily improve search credibility.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="text-2xl font-black text-primary-500">{item.step}</span>
                    <div>
                      <h4 className="font-bold text-base mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col gap-6">
              <h4 className="font-bold text-xl">Request a Free Audit Blueprint</h4>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Website URL" 
                  required
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm" 
                />
                <input 
                  type="email" 
                  placeholder="Your Business Email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm" 
                />
                <button type="submit" className="w-full py-4 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold transition-colors">
                  Submit Website Audit Request
                </button>
              </div>
              <p className="text-[10px] text-slate-400 text-center">No commitment required. We deliver your full SEO index report in 24 hours.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Success Popup Modal */}
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 rounded-3xl p-8 max-w-md w-full shadow-2xl relative text-center text-slate-900 dark:text-white"
            >
              <button 
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-650 dark:hover:text-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              
              <h4 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                Audit Request Sent!
              </h4>
              
              <p className="text-slate-650 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                We have received your website audit request. Our search experts will analyze your domain and deliver your free blueprint within 24 hours.
              </p>
              
              <button 
                onClick={() => setShowSuccess(false)}
                className="w-full py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold transition-all hover:shadow-lg hover:shadow-primary-500/20"
              >
                Close Window
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SeoService;
