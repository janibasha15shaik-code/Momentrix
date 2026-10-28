import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CaseStudies: React.FC = () => {

  const cases = [
    {
      client: "B2B Technology & SaaS Strategy Framework",
      industry: "B2B SaaS",
      title: "Scaling Inbound Pipeline through Targeted SEO & Content",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      challenge: "The business relied heavily on high-cost paid ads with an unsustainable customer acquisition cost (CAC) and needed reliable organic discovery.",
      solution: "We engineered a full technical SEO overhaul, restructured commercial topic clusters, and published intent-focused content matching bottom-funnel queries.",
      results: [
        { metric: "3x", label: "Organic Inquiries" },
        { metric: "-45%", label: "Blended CAC" },
        { metric: "Top 3", label: "Rankings on Key Terms" }
      ]
    },
    {
      client: "Retail & E-Commerce Campaign Framework",
      industry: "E-Commerce",
      title: "Omnichannel Acquisition Campaign for High-Demand Seasons",
      image: "/assets/urban-wear-holiday.webp",
      challenge: "The brand sought to maximize seasonal campaign revenue amidst intensive regional competition, requiring strict positive return on ad spend.",
      solution: "We deployed a synchronized Google Ads and Meta Ads framework, paired with fast mobile landing pages, event tracking, and automated customer follow-ups.",
      results: [
        { metric: "4.8x", label: "Target ROAS" },
        { metric: "+42%", label: "Order Conversion Lift" },
        { metric: "<24h", label: "Inquiry Turnaround" }
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
            Representative campaign blueprints and data-driven strategies delivering measurable growth for digital brands.
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
                       width={1200}
                       height={800}
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
                    <Link 
                      to={study.industry === "B2B SaaS" ? "/services/seo" : "/services/performance"} 
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-orange-500 font-bold transition-colors group"
                    >
                      Explore Service Blueprint ({study.industry === "B2B SaaS" ? "SEO & Content" : "PPC & Social"}) <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Consultation CTA */}
          <div className="mt-20 p-10 rounded-3xl bg-slate-900 text-white text-center border border-slate-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-transparent to-orange-500/10 pointer-events-none" />
            <h3 className="text-3xl font-extrabold mb-4 relative z-10">Ready to replicate these results for your business?</h3>
            <p className="text-slate-400 max-w-xl mx-auto mb-8 relative z-10 text-base">
              Partner with our performance marketing and technical SEO team to scale revenue, decrease customer acquisition cost, and rank on search.
            </p>
            <div className="flex justify-center gap-4 relative z-10">
              <Link to="/contact" className="px-8 py-4 rounded-full bg-primary-600 hover:bg-primary-500 text-white font-bold transition-all shadow-lg">
                Book Growth Consultation
              </Link>
              <Link to="/services" className="px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold transition-all border border-slate-700">
                Browse All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
