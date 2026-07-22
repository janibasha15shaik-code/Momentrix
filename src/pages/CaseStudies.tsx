import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  useSEO({
    title: 'Marketing Case Studies & SEO Success Stories',
    description: 'Read our digital marketing and SEO case studies. Learn how we scale organic traffic, optimize search campaigns, and decrease acquisition costs for brands.',
    keywords: 'Marketing Case Studies, SEO Success Stories, B2B SaaS SEO Case Study, E-commerce SEO Growth Hyderabad, ROI campaigns',
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.momentrixmedia.com/case-studies#webpage",
      "name": "Case Studies - Momentrix Media",
      "description": "Read our digital marketing, SEO, and web development case studies.",
      "url": "https://www.momentrixmedia.com/case-studies",
      "publisher": {
        "@type": "Organization",
        "name": "Momentrix Media",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.momentrixmedia.com/assets/logo-dark.png"
        }
      }
    }
  });

  const cases = [
    {
      client: "TechFlow Solutions",
      industry: "B2B SaaS",
      title: "Scaling MRR by 300% through Targeted SEO & Content",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      challenge: "TechFlow was struggling to acquire organic leads, heavily relying on expensive paid advertising with a high customer acquisition cost (CAC).",
      solution: "We implemented a comprehensive SEO strategy, restructuring their site architecture and launching a robust content marketing engine targeting bottom-of-the-funnel keywords.",
      results: [
        { metric: "300%", label: "MRR Growth" },
        { metric: "85%", label: "CAC Reduction" },
        { metric: "12x", label: "Organic Traffic" }
      ]
    },
    {
      client: "Urban Wear",
      industry: "E-Commerce",
      title: "Omnichannel Campaign Drives Record Holiday Sales",
      image: "/assets/urban-wear-holiday.png",
      challenge: "Urban Wear needed to maximize their Q4 revenue amidst fierce competition, with a primary goal of increasing average order value (AOV).",
      solution: "We deployed a synchronized Meta and Google Ads campaign, coupled with personalized email flows and dynamic retargeting to maximize conversion rates.",
      results: [
        { metric: "$2.4M", label: "Revenue Generated" },
        { metric: "6.8x", label: "Return on Ad Spend" },
        { metric: "+42%", label: "Average Order Value" }
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Header */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight"
          >
            Case <span className="gradient-text">Studies</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400"
          >
            Deep dives into our most successful campaigns and the data-driven strategies behind them.
          </motion.p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-20">
            {cases.map((study, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group/img">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-orange-500/20 mix-blend-overlay z-10" />
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      loading="lazy"
                      className="w-full h-[400px] md:h-[500px] object-cover group-hover/img:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6 z-20">
                      <span className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-primary-500/30 text-primary-600 dark:text-primary-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                  <div>
                    <h3 className="gradient-text font-bold tracking-wider uppercase text-sm mb-2">{study.client}</h3>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{study.title}</h2>
                  </div>
                  
                  <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg">
                    <div>
                      <strong className="text-slate-900 dark:text-slate-200 block mb-1">The Challenge:</strong>
                      <p>{study.challenge}</p>
                    </div>
                    <div>
                      <strong className="text-slate-900 dark:text-slate-200 block mb-1">The Solution:</strong>
                      <p>{study.solution}</p>
                    </div>
                  </div>

                  {/* Results Stats */}
                  <div className="grid grid-cols-3 gap-4 py-6 border-y border-slate-200 dark:border-slate-800 mt-2">
                    {study.results.map((result, rIdx) => (
                      <div key={rIdx} className="text-center">
                        <div className="text-2xl md:text-3xl font-extrabold gradient-text mb-1">{result.metric}</div>
                        <div className="text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <button className="inline-flex items-center gap-2 text-primary-600 hover:text-orange-500 font-bold transition-colors group">
                      Read Full Case Study <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
