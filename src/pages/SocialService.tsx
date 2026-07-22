import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { Megaphone, Heart, Share2, Sparkles, CheckCircle2, X } from 'lucide-react';

const SocialService: React.FC = () => {
  useSEO({
    title: 'Social Media Marketing Services in Guntur & Hyderabad',
    description: 'Momentrix Media runs elite Social Media Marketing in Guntur & Hyderabad. We build brand loyalty and high-engagement ad campaigns on Instagram, Facebook, and LinkedIn.',
    keywords: 'Social Media Marketing Services Guntur, Social Media Agency Hyderabad, Instagram Marketing, Facebook Campaigns Guntur, Brand Engagement Andhra Pradesh',
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.momentrixmedia.com/services/social#service",
      "name": "Social Media Marketing Services",
      "description": "Professional Social Media Marketing Services in Hyderabad, building brand communities, managing page updates, running Meta ads campaigns, and growing organic engagement.",
      "provider": {
        "@type": "Organization",
        "name": "Momentrix Media",
        "url": "https://www.momentrixmedia.com"
      },
      "areaServed": "Hyderabad, Guntur, India",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Social Media Capabilities",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Page Management & Schedules"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Meta Sponsored Ad Campaigns"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Organic Community Growth"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Influencer Relations & Campaigns"
            }
          }
        ]
      }
    }
  });

  const [brandName, setBrandName] = useState('');
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBrandName('');
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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px] opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(236,72,153,0.15),transparent_60%)] pointer-events-none" />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-10 right-[-10%] w-[50%] h-[50%] bg-pink-500/10 blur-[130px] rounded-full pointer-events-none"
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-950/60 border border-pink-500/30 text-pink-400 font-semibold text-xs uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Unified Social Brand Growth
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Amplify Organic Brand <span className="text-pink-500">Presence</span>.
              </h1>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                We design and manage high-engagement brand campaigns across Facebook, Instagram, LinkedIn, and YouTube to build lasting, authentic community loyalty.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-8 py-4 rounded-full bg-pink-600 hover:bg-pink-500 text-white font-bold transition-colors shadow-lg shadow-pink-600/30">
                  Book A Social Discovery Session
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
              <div className="relative p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/5 to-purple-500/5" />
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">momentrix.social-planner</span>
                </div>
                
                {/* Simulated Social Card */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-850 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-purple-500" />
                      <div>
                        <h4 className="text-xs font-bold">momentrix_media</h4>
                        <p className="text-[9px] text-slate-500">Sponsored • Meta Ads</p>
                      </div>
                    </div>
                    <span className="text-[8px] bg-pink-900/40 text-pink-400 font-extrabold px-2 py-0.5 rounded-full uppercase">Meta Verified</span>
                  </div>
                  <div className="aspect-[4/3] bg-slate-900 rounded-xl mb-3 flex items-center justify-center relative overflow-hidden border border-slate-800">
                    <img 
                      src="/assets/social-ad-campaign.png" 
                      alt="Sponsored Ads Campaign" 
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex gap-3 text-xs text-slate-400 font-semibold mb-2">
                    <span className="flex items-center gap-1">❤️ 12.8k</span>
                    <span className="flex items-center gap-1">💬 482</span>
                    <span className="flex items-center gap-1">🔁 82</span>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-800/80">
                    <span className="text-[10px] text-slate-400 flex items-center gap-1 font-medium">🏷️ View Campaign Details</span>
                    <button className="bg-pink-600 hover:bg-pink-500 text-white text-[9px] font-bold px-3 py-1.5 rounded-lg transition-all active:scale-95 uppercase tracking-wider">
                      Learn More
                    </button>
                  </div>
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
            <h2 className="text-sm font-bold text-pink-600 uppercase tracking-widest mb-3">Brand Capabilities Blueprint</h2>
            <h3 className="text-3xl md:text-5xl font-bold">Maximize Authentic Community Scale</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Megaphone className="w-7 h-7 text-pink-500" />,
                title: 'Meta & LinkedIn Pages',
                desc: 'Strategic posting frameworks, modern visual assets design, and highly targeted community interaction.'
              },
              {
                icon: <Share2 className="w-7 h-7 text-purple-500" />,
                title: 'Influencer Matrices',
                desc: 'Coordinating high-profile influencer collaborations that drive natural audience adoption.'
              },
              {
                icon: <Heart className="w-7 h-7 text-red-500" />,
                title: 'Organic Loyalty Funnels',
                desc: 'Turning standard page viewers into active, referring brand advocates via tailored content updates.'
              },
              {
                icon: <Sparkles className="w-7 h-7 text-pink-400" />,
                title: 'Brand Assets Production',
                desc: 'Generating beautiful, conversion-oriented images, video templates, and engaging stories copywriting.'
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
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Unified Content Architecture</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                We coordinate complete, automated content calendars so your platforms stay active, professional, and visually spectacular 24/7.
              </p>
              
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Competitor Brand Analysis', text: 'We map target audiences and study competitor campaign benchmarks.' },
                  { step: '02', title: 'Content Calendar Drafting', text: 'We build structured templates, graphic overlays, and copywriting matrices.' },
                  { step: '03', title: 'Daily Automation & Audit', text: 'We actively post, analyze metrics, and adjust targeting to maintain momentum.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="text-2xl font-black text-pink-500">{item.step}</span>
                    <div>
                      <h4 className="font-bold text-base mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col gap-6">
              <h4 className="font-bold text-xl">Let's Craft Your Brand Narrative</h4>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Brand Name" 
                  required
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
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
                <button type="submit" className="w-full py-4 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold transition-colors">
                  Get Free Brand Discovery Audit
                </button>
              </div>
              <p className="text-[10px] text-slate-400 text-center">We will conduct a complete meta-presence index of your brand within 24 hours.</p>
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
                Discovery Audit Requested!
              </h4>
              
              <p className="text-slate-655 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                We have received your request. Our social strategists will analyze your brand's metadata presence and compile your free report within 24 hours.
              </p>
              
              <button 
                onClick={() => setShowSuccess(false)}
                className="w-full py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold transition-all hover:shadow-lg hover:shadow-pink-500/20"
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

export default SocialService;
