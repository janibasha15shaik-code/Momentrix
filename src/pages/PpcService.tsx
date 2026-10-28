import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, BarChart3, Target, Sparkles, DollarSign, CheckCircle2, X, ExternalLink, ArrowRight } from 'lucide-react';

const PpcService: React.FC = () => {

  const [adBudget, setAdBudget] = useState('');
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
          firstName: 'PPC Client',
          lastName: '',
          email,
          service: 'Performance Marketing (Google & Meta Ads)',
          message: `Campaign scaling inquiry. Stated monthly ad budget: ${adBudget}`,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit campaign request.');
      }

      setAdBudget('');
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(249,115,22,0.15),transparent_60%)] pointer-events-none" />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-10 right-[-10%] w-[50%] h-[50%] bg-orange-500/10 blur-[130px] rounded-full pointer-events-none"
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-950/60 border border-orange-500/30 text-orange-400 font-semibold text-xs uppercase tracking-wider mb-6">
                <DollarSign className="w-3.5 h-3.5 animate-pulse" /> High-ROAS performance advertising
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Paid Acquisition & <span className="text-orange-500">Performance</span>.
              </h1>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                We design and scale high-conversion search and social paid ad campaigns that minimize lead costs and maximize measurable acquisition ROI.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-8 py-4 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-bold transition-colors shadow-lg shadow-orange-600/30">
                  Scale Your Ad Campaigns Now
                </Link>
                <Link to="/case-studies" className="px-8 py-4 rounded-full bg-slate-800 text-slate-200 font-bold hover:bg-slate-700 transition-colors border border-slate-700">
                  View Performance Case Studies
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <span>Ad Partner Engines:</span>
                <a href="https://ads.google.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline flex items-center gap-1">
                  Google Ads Portal <ExternalLink className="w-3 h-3" />
                </a>
                <span>•</span>
                <a href="https://www.facebook.com/business" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline flex items-center gap-1">
                  Meta Ads Manager <ExternalLink className="w-3 h-3" />
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
              <div className="relative p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-red-500/5" />
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">momentrix.performance-console</span>
                </div>
                
                {/* Stats simulation */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { title: 'Ad Spend ROI', val: '5.2x ROAS', color: 'text-orange-500' },
                    { title: 'Cost-Per-Lead', val: '$2.40 CPL', color: 'text-green-500' },
                    { title: 'Click-Thru', val: '4.8% CTR', color: 'text-orange-400' }
                  ].map((stat, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-950 border border-slate-850 text-center">
                      <p className="text-[10px] text-slate-500 font-semibold mb-1 uppercase tracking-wider">{stat.title}</p>
                      <h4 className={`text-sm font-bold ${stat.color}`}>{stat.val}</h4>
                    </div>
                  ))}
                </div>

                {/* Simulated Chart */}
                <div className="h-40 flex items-end gap-1.5 pt-4 px-2 bg-slate-950 rounded-xl border border-slate-850 relative">
                  <div className="absolute top-3 left-4 text-xs font-bold text-slate-500 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-orange-500" /> Daily Revenue Velocity
                  </div>
                  {[20, 35, 45, 38, 55, 60, 85, 100, 95, 120, 140].map((h, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ height: 0 }}
                      animate={{ height: `${(h / 140) * 100}%` }}
                      transition={{ duration: 1.2, delay: idx * 0.05 }}
                      className="flex-1 bg-gradient-to-t from-orange-600 to-red-400 rounded-t-sm"
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
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-3">Performance Blueprint</h2>
            <h3 className="text-3xl md:text-5xl font-bold">Uncompromising Paid Advertising</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <DollarSign className="w-7 h-7 text-orange-500" />,
                title: 'Meta & Google Ads',
                desc: 'Strategic PPC bidding, Meta demographic targeting matrices, and hyper-segmented keyword matching.'
              },
              {
                icon: <BarChart3 className="w-7 h-7 text-red-500" />,
                title: 'Conversion Audit',
                desc: 'Auditing and designing high-converting user flow landing pages that maximize direct leads.'
              },
              {
                icon: <Target className="w-7 h-7 text-orange-400" />,
                title: 'Remarketing Funnels',
                desc: 'Segmented custom audience targeting to capture missed prospects and optimize customer lifetime value.'
              },
              {
                icon: <Sparkles className="w-7 h-7 text-yellow-500" />,
                title: 'Advanced Analytics',
                desc: 'UTM parameter tracking, precise attribution dashboards, and direct ROAS metrics reporting.'
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
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Attribution & Scale Methodology</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                We manage and scale ads with rigorous statistical oversight, ensuring budget flows solely into top-converting channels.
              </p>
              
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Audience Micro-segmentation', text: 'We map target groups by interest, job title, and detailed buying indicators.' },
                  { step: '02', title: 'Creative Variation Matrix', text: 'We test multiple creative versions, titles, and templates to find peak CTR.' },
                  { step: '03', title: 'Attribution & Auto-scaling', text: 'We direct ad budget directly into the highest performing assets to maximize ROAS.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="text-2xl font-black text-orange-500">{item.step}</span>
                    <div>
                      <h4 className="font-bold text-base mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col gap-6">
              <h3 className="font-bold text-xl">Let's Scale Your Acquisition Funnel</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="ppc-ad-budget" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Monthly Ad Budget / Target <span className="text-red-500">*</span>
                  </label>
                  <input 
                    id="ppc-ad-budget"
                    type="text" 
                    placeholder="e.g. ₹50,000 - ₹2,00,000 / month" 
                    required
                    value={adBudget}
                    onChange={(e) => setAdBudget(e.target.value)}
                    disabled={loading}
                    className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50" 
                  />
                </div>
                <div>
                  <label htmlFor="ppc-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    id="ppc-email"
                    type="email" 
                    placeholder="you@company.com" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50" 
                  />
                </div>

                {error && (
                  <p role="alert" className="text-xs text-red-500 font-semibold">{error}</p>
                )}

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold transition-colors disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  {loading ? 'Submitting Strategy Request...' : 'Submit Campaign Scaling Request'}
                </button>
              </div>
              <p className="text-[10px] text-slate-400 text-center">We will conduct a tailored acquisition forecast and performance audit within 24 hours.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Related Growth Services & Insights (Internal Links) */}
      <section className="py-16 bg-white dark:bg-dark border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h3 className="text-2xl font-bold">Maximize Campaign ROI Across All Customer Touchpoints</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Combine paid ad acquisition with long-term organic search rankings and custom landing pages.</p>
            </div>
            <Link to="/services" className="text-orange-600 font-bold hover:underline inline-flex items-center gap-1.5 text-sm">
              Explore All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/services/social" className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500 transition-colors group">
              <h4 className="font-bold text-base mb-2 group-hover:text-orange-600 transition-colors">Social Media Marketing →</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Scale organic brand credibility alongside paid Meta and Instagram ads.</p>
            </Link>
            <Link to="/services/seo" className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500 transition-colors group">
              <h4 className="font-bold text-base mb-2 group-hover:text-orange-600 transition-colors">SEO & Search Engine Blueprint →</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Capture non-paid high-intent organic search volume on top keywords.</p>
            </Link>
            <Link to="/services/web" className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500 transition-colors group">
              <h4 className="font-bold text-base mb-2 group-hover:text-orange-600 transition-colors">High-Converting Landing Pages →</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Build optimized React landing pages designed to maximize ad ROAS.</p>
            </Link>
            <Link to="/blog" className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500 transition-colors group">
              <h4 className="font-bold text-base mb-2 group-hover:text-orange-600 transition-colors">Performance Marketing Insights →</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Read our guides on audience retargeting and attribution modeling.</p>
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
                Scaling Request Sent!
              </h4>
              
              <p className="text-slate-650 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                We have received your campaign scaling details. Our acquisition strategists will review your budget options and contact you within 24 hours.
              </p>
              
              <button 
                onClick={() => setShowSuccess(false)}
                className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold transition-all hover:shadow-lg hover:shadow-orange-500/20"
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

export default PpcService;
