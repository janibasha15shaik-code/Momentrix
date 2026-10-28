import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {

  const projects = [
    {
      title: 'FinTech UI/UX & Conversion Architecture',
      category: 'Branding & UI/UX',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      results: 'Streamlined Onboarding Flow',
      link: '/services/web'
    },
    {
      title: 'E-commerce Search & Organic Growth',
      category: 'SEO & Content',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      results: '3x Organic Traffic Blueprint',
      link: '/services/seo'
    },
    {
      title: 'Digital Customer Acquisition Launch',
      category: 'Performance Marketing',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
      results: 'Targeted Multi-Channel Reach',
      link: '/services/performance'
    },
    {
      title: 'Modern Web Platform Engineering',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
      results: 'Core Web Vitals Optimized',
      link: '/services/web'
    },
    {
      title: 'Lifestyle Brand Social Media Engine',
      category: 'Social Media Management',
      image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800',
      results: 'Organic Engagement Growth',
      link: '/services/social'
    },
    {
      title: 'B2B Lead Generation & Funnel Optimisation',
      category: 'Google Ads & Landing Pages',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
      results: 'Qualified Cost-Per-Lead Model',
      link: '/services/performance'
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
            Our <span className="gradient-text">Portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400"
          >
            Explore representative campaign blueprints and digital solutions delivered across SEO, paid media, and web development.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800"
              >
                {/* Image Container */}
                <div className="relative h-80 w-full overflow-hidden bg-slate-900">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  
                  {/* Results Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-slate-200 dark:border-slate-800">
                    <span className="text-xs font-bold gradient-text">{project.results}</span>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  <div className="transform sm:translate-y-8 sm:group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-primary-400 font-semibold text-xs mb-2 uppercase tracking-wider">{project.category}</p>
                    <h3 className="text-xl font-bold text-white mb-4 leading-snug">{project.title}</h3>
                    <Link 
                      to={project.link}
                      className="inline-flex items-center gap-2 text-white font-medium bg-white/20 hover:bg-primary-600 px-5 py-2.5 rounded-full backdrop-blur-sm transition-colors text-sm"
                    >
                      Explore Service Blueprint <ArrowUpRight className="w-4 h-4" />
                    </Link>
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

export default Portfolio;
