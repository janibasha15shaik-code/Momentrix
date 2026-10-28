import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Smartphone, Code, Cpu, Database, CheckCircle2, X, ExternalLink, ArrowRight } from 'lucide-react';

const WebService: React.FC = () => {

  const [projectDetails, setProjectDetails] = useState('');
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: 'Web Inquiry',
          lastName: 'Client',
          email,
          service: 'Web Development & Modern Engineering',
          message: projectDetails,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit project inquiry.');
      }

      setProjectDetails('');
      setEmail('');
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 6000);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-12 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px] opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.15),transparent_60%)] pointer-events-none" />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
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
                <Code className="w-3.5 h-3.5 animate-pulse" /> Growth-Centric Web Systems
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                High-Performance Web <span className="text-primary-500">Development</span>.
              </h1>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                We engineer scalable, fast, responsive portals and E-Commerce platforms that secure your brand equity and convert clicks into sustained enterprise growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-8 py-4 rounded-full bg-primary-600 hover:bg-primary-500 text-white font-bold transition-colors shadow-lg shadow-primary-600/30">
                  Launch Your Web Project Today
                </Link>
                <Link to="/portfolio" className="px-8 py-4 rounded-full bg-slate-800 text-slate-200 font-bold hover:bg-slate-700 transition-colors border border-slate-700">
                  Explore Web Portfolio
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <span>Performance Benchmarks:</span>
                <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline flex items-center gap-1">
                  Google PageSpeed Insights <ExternalLink className="w-3 h-3" />
                </a>
                <span>•</span>
                <a href="https://www.w3.org" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline flex items-center gap-1">
                  W3C Web Standards <ExternalLink className="w-3 h-3" />
                </a>
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
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/5 to-orange-500/5" />
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-primary-500" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">momentrix-compiler.ts</span>
                </div>
                
                {/* Simulated IDE */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 font-mono text-[11px] text-primary-400/90 leading-relaxed overflow-x-auto">
                  <p><span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-yellow-300">'react'</span>;</p>
                  <p><span className="text-purple-400">import</span> &#123; motion &#125; <span className="text-purple-400">from</span> <span className="text-yellow-300">'framer-motion'</span>;</p>
                  <p className="text-slate-500 mt-2">// Initialize Web Ecosystem Architecture</p>
                  <p><span className="text-blue-400">const</span> <span className="text-yellow-400">Ecosystem</span> = () =&gt; &#123;</p>
                  <p className="pl-4">return (</p>
                  <p className="pl-8 text-blue-400">&lt;<span className="text-red-400">div</span> className=<span className="text-yellow-300">"performance-grid max-w-7xl animate-pulse"</span>&gt;</p>
                  <p className="pl-12 text-blue-400">&lt;<span className="text-red-400">h1</span>&gt;Compile Success! Metric: 100/100 Core Web Vitals&lt;/<span className="text-red-400">h1</span>&gt;</p>
                  <p className="pl-8 text-blue-400">&lt;/<span className="text-red-400">div</span>&gt;</p>
                  <p className="pl-4">);</p>
                  <p>&#125;;</p>
                  <p className="text-purple-400 mt-2">export default Ecosystem;</p>
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
            <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-3">Web Architecture Blueprint</h2>
            <h3 className="text-3xl md:text-5xl font-bold">Uncompromising Digital Systems</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Smartphone className="w-7 h-7 text-primary-500" />,
                title: 'Responsive Design',
                desc: 'Tailored mobile layouts that scale cleanly across tablets, laptops, and ultra-wide devices.'
              },
              {
                icon: <Code className="w-7 h-7 text-orange-500" />,
                title: 'Clean Coding Standards',
                desc: 'Structured component development using React, Next.js, and TypeScript, maximizing page speeds.'
              },
              {
                icon: <Database className="w-7 h-7 text-primary-400" />,
                title: 'E-Commerce Engines',
                desc: 'Secure checkout gateways, intuitive inventory frameworks, and robust marketing analytics trackers.'
              },
              {
                icon: <Cpu className="w-7 h-7 text-orange-400" />,
                title: 'API Integrations',
                desc: 'Automating database synchronization with ERP, CRM, and customer operations engines.'
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
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Development Process</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                We bridge the gap between complex database systems and high-converting marketing designs. We don't just build sites—we construct systems.
              </p>
              
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Interactive UX Prototyping', text: 'We mock layouts and click-flows to verify conversion mechanics before any code is written.' },
                  { step: '02', title: 'Modular Architecture Build', text: 'We develop using fast modular components, clean type safety, and optimized assets load paths.' },
                  { step: '03', title: 'Pre-launch Performance Audit', text: 'We test across 30+ browser contexts and mobile platforms to confirm 100/100 Core Web Vitals.' }
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
              <h3 className="font-bold text-xl">Let's Construct Your Digital Engine</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="web-project-details" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Project Goals / Overview <span className="text-red-500">*</span>
                  </label>
                  <input 
                    id="web-project-details"
                    type="text" 
                    placeholder="e.g. Modern e-commerce store / SaaS platform" 
                    required
                    value={projectDetails}
                    onChange={(e) => setProjectDetails(e.target.value)}
                    disabled={loading}
                    className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50" 
                  />
                </div>
                <div>
                  <label htmlFor="web-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    id="web-email"
                    type="email" 
                    placeholder="you@company.com" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50" 
                  />
                </div>

                {error && (
                  <p role="alert" className="text-xs text-red-500 font-semibold">{error}</p>
                )}

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold transition-colors disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                >
                  {loading ? 'Submitting Project Details...' : 'Submit Project Details'}
                </button>
              </div>
              <p className="text-[10px] text-slate-400 text-center">We will set up an engineering roadmap and complete architecture review within 24 hours.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Related Growth Services & Insights (Internal Links) */}
      <section className="py-16 bg-white dark:bg-dark border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h3 className="text-2xl font-bold">Maximize Performance Across Search & Paid Channels</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Combine custom web development with search engine optimization and performance marketing funnels.</p>
            </div>
            <Link to="/services" className="text-primary-600 font-bold hover:underline inline-flex items-center gap-1.5 text-sm">
              Explore All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/services/seo" className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary-500 transition-colors group">
              <h4 className="font-bold text-base mb-2 group-hover:text-primary-600 transition-colors">SEO & Search Optimization →</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Ensure your new web app ranks #1 on Google for high-value search keywords.</p>
            </Link>
            <Link to="/services/performance" className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary-500 transition-colors group">
              <h4 className="font-bold text-base mb-2 group-hover:text-primary-600 transition-colors">PPC Performance Campaigns →</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Drive instant user registrations and ecommerce sales via Google Ads.</p>
            </Link>
            <Link to="/portfolio" className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary-500 transition-colors group">
              <h4 className="font-bold text-base mb-2 group-hover:text-primary-600 transition-colors">Client Portfolio →</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Browse live custom web platforms and e-commerce portals we've built.</p>
            </Link>
            <Link to="/blog" className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary-500 transition-colors group">
              <h4 className="font-bold text-base mb-2 group-hover:text-primary-600 transition-colors">Web Speed & Tech Insights →</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Read our research on Core Web Vitals and React performance optimization.</p>
            </Link>
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
                Project Details Sent!
              </h4>
              
              <p className="text-slate-650 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                We have received your project details. Our technical architects will review your engineering needs and reach out to you within 24 hours.
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

export default WebService;
