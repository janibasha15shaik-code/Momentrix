import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  useSEO({
    title: 'Our Case Studies & Creative Portfolio',
    description: 'Explore the Momentrix Media project portfolio. Read how our data-driven strategies and engineering systems scaled traffic, acquisition, and conversion metrics.',
    keywords: 'Momentrix Media Portfolio, Marketing Case Studies, Web Development Projects, SEO Success Stories Hyderabad, High-ROAS campaigns',
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Portfolio - Momentrix Media",
      "description": "Explore our digital marketing, SEO, and web development case studies and projects.",
      "url": "https://momentrixmedia.com/portfolio",
      "publisher": {
        "@type": "Organization",
        "name": "Momentrix Media",
        "logo": {
          "@type": "ImageObject",
          "url": "https://momentrixmedia.com/assets/logo-dark.png"
        }
      }
    }
  });

  const projects = [
    {
      title: 'FinTech Rebranding',
      category: 'Branding & UI/UX',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      results: '+45% User Retention'
    },
    {
      title: 'E-commerce SEO Escalation',
      category: 'SEO & Content',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      results: '3x Organic Traffic'
    },
    {
      title: 'Global App Launch',
      category: 'Performance Marketing',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
      results: '1M+ Downloads in 30 Days'
    },
    {
      title: 'SaaS Website Redesign',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
      results: '+120% Conversion Rate'
    },
    {
      title: 'Lifestyle Brand Socials',
      category: 'Social Media Management',
      image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800',
      results: '2.5M Monthly Impressions'
    },
    {
      title: 'B2B Lead Generation',
      category: 'Google Ads & Landing Pages',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
      results: 'Cost per Lead reduced by 60%'
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
            Explore our recent projects and see how we've helped leading brands achieve digital excellence.
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
                className="group relative rounded-3xl overflow-hidden cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-80 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  
                  {/* Results Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg transform translate-y-0 opacity-100 transition-all duration-300">
                    <span className="text-sm font-bold gradient-text">{project.results}</span>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-primary-400 font-medium text-sm mb-2 uppercase tracking-wider">{project.category}</p>
                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                    <div className="inline-flex items-center gap-2 text-white font-medium bg-white/20 hover:bg-white/30 px-5 py-2.5 rounded-full backdrop-blur-sm transition-colors">
                      View Case Study <ArrowUpRight className="w-4 h-4" />
                    </div>
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
