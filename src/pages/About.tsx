import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { CheckCircle2, Users, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  useSEO({
    title: 'Our Story & Agency Core Values',
    description: 'Learn about Momentrix Media, a collective of digital innovators and data-driven strategists specializing in AI automation, SEO, and paid performance marketing.',
    keywords: 'About Momentrix Media, Digital Marketing Experts, AI Automation Team Hyderabad, Agency Core Values',
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Us - Momentrix Media",
      "description": "Learn about our mission, core values, and team.",
      "url": "https://momentrixmedia.com/about",
      "publisher": {
        "@type": "Organization",
        "name": "Momentrix Media",
        "logo": {
          "@type": "ImageObject",
          "url": "https://momentrixmedia.com/assets/Main%20Favicon%20Dark-D6WWraH_.png"
        }
      }
    }
  });

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
                About <span className="gradient-text">Momentrix</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                We are a collective of digital innovators, creative thinkers, and data-driven strategists dedicated to transforming brands in the digital space.
              </p>
              
              <div className="flex flex-col gap-4">
                {[
                  'Data-Driven Decision Making',
                  'Award-Winning Creative Team',
                  'Transparent Reporting & Analytics',
                  'Dedicated Account Managers'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[500px] rounded-3xl overflow-hidden"
            >
              <img 
                src="/assets/momentrix-team.png" 
                alt="Momentrix Team" 
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
                <div className="glass p-6 rounded-2xl w-full border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-2">Our Mission</h3>
                  <p className="text-slate-200">To empower businesses with cutting-edge digital strategies that drive sustainable growth and measurable ROI.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-3">Our Core Values</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">What Drives Us Forward</h3>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">What Drives Us Forward</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Users className="w-8 h-8 text-blue-500" />, title: 'Collaboration', desc: 'We believe in working closely with our clients as an extension of their team, fostering open communication and shared goals.' },
              { icon: <Target className="w-8 h-8 text-primary-500" />, title: 'Excellence', desc: 'We are committed to delivering the highest quality of work, constantly pushing the boundaries of what is possible in digital marketing.' },
              { icon: <Zap className="w-8 h-8 text-orange-500" />, title: 'Innovation', desc: 'The digital landscape is always evolving. We stay ahead of the curve, utilizing the latest tools and strategies to keep our clients competitive.' }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-center hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center mb-6 shadow-sm">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{value.title}</h4>
                <p className="text-slate-600 dark:text-slate-400">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
