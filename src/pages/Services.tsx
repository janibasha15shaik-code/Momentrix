import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { Search, Megaphone, Smartphone, Target, TrendingUp, PenTool, Globe, Video, Mail, ArrowRight, Sparkles, Rocket } from 'lucide-react';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
  subServices: string[];
}

const Services: React.FC = () => {
  useSEO({
    title: 'Our Services & Digital Capabilities',
    description: 'Explore Momentrix Media capabilities in Guntur & Hyderabad: AI automation, search engine optimization (SEO), PPC search ads, web development, performance marketing, social media, and email marketing.',
    keywords: 'Digital Marketing Services Guntur, AI Automation Services, SEO Services in Hyderabad, PPC Management, Web Development Company Guntur, Social Media Marketing',
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Our Services & Digital Capabilities - Momentrix Media",
      "description": "Explore our digital transformational capabilities including web development, search engine optimization, PPC search marketing, social media campaigns, and AI workflows.",
      "url": "https://momentrixmedia.com/services",
      "publisher": {
        "@type": "Organization",
        "name": "Momentrix Media"
      }
    }
  });

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);
    }
  }, []);

  const allServices: ServiceItem[] = [
     { 
      icon: <Sparkles className="w-8 h-8 text-purple-500" />, 
      title: 'AI Automation', 
      desc: 'Deploying custom artificial intelligence pipelines to automate workflows.',
      subServices: ['AI Agent Workflows', 'CRM & Lead Automation', 'Custom GPT Solutions', 'Intelligent Business Operations']
    },
    { 
      icon: <Search className="w-8 h-8 text-blue-500" />, 
      title: 'SEO Services', 
      desc: 'Boost your visibility on search engines and drive high-quality organic traffic.',
      subServices: ['Local SEO', 'On-Page SEO', 'Off-Page SEO', 'Technical SEO']
    },
    { 
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />, 
      title: 'SEM', 
      desc: 'Paid search engine marketing campaigns designed to capture high-intent buying traffic.',
      subServices: ['Google PPC Management', 'Bid Price Optimization', 'Keyword Search Strategies', 'Ad Quality Score Audit']
    },
    { 
      icon: <Megaphone className="w-8 h-8 text-purple-500" />, 
      title: 'Social Media Marketing', 
      desc: 'Build brand loyalty and engage your target audience across major platforms.',
      subServices: ['Page Management', 'Media Campaigns', 'Organic Growth', 'Influencer Marketing']
    },
    { 
      icon: <Smartphone className="w-8 h-8 text-green-500" />, 
      title: 'Web Development', 
      desc: 'Create fast, responsive, and conversion-focused websites.',
      subServices: ['Website Design', 'Web Development', 'E-Commerce', 'Website Maintenance']
    },
    { 
      icon: <Target className="w-8 h-8 text-red-500" />, 
      title: 'Growth Analysis', 
      desc: 'Data-driven funnel mapping and metric analysis to unlock scale.',
      subServices: ['Funnel Performance Audit', 'Retention & Cohort Analysis', 'Competitor Insights', 'Growth Strategy']
    },
    { 
      icon: <Rocket className="w-8 h-8 text-indigo-500" />, 
      title: 'Performance Marketing', 
      desc: 'High-yielding paid acquisition and conversion optimization models.',
      subServices: ['Paid Search & Social Ads', 'Conversion Rate Optimization', 'Funnel Analytics Tracking', 'Return-on-Ad-Spend Velocity']
    },
    { 
      icon: <Globe className="w-8 h-8 text-pink-500" />, 
      title: 'GEO', 
      desc: 'Optimize your brand visibility across generative search engines and AI models.',
      subServices: ['LLM Search Optimization', 'AI Engine Citation Audits', 'Generative Response Mapping', 'Retrieval-Augmented Rankings']
    },
    { 
      icon: <PenTool className="w-8 h-8 text-teal-500" />, 
      title: 'Content Creation', 
      desc: 'Engaging copywriting and design assets that resonate globally.',
      subServices: ['High-Value SEO Blogging', 'Graphic Assets Design', 'Video Production', 'Copywriting & Content Strategy']
    },
   
    { 
      icon: <Video className="w-8 h-8 text-blue-600" />, 
      title: 'Meta Ads', 
      desc: 'Strategic advertising on Facebook and Instagram to reach ideal demographics.',
      subServices: ['Audience Retargeting', 'Catalog & Dynamic Ads', 'Video Ad Production', 'AB Testing']
    },
    { 
      icon: <Mail className="w-8 h-8 text-yellow-500" />, 
      title: 'Email Marketing', 
      desc: 'Automated email sequences that nurture leads and drive repeat business.',
      subServices: ['Automated Flows', 'Newsletter Campaigns', 'Segment Optimization', 'Lead Magnets']
    },
  ];

  const approachSteps = [
    {
      num: '01',
      title: 'Audit',
      desc: 'Understanding Your Business',
      details: 'We deep dive into your existing digital footprint, brand architecture, and operational metrics to identify friction points and leverage areas.'
    },
    {
      num: '02',
      title: 'Research',
      desc: 'Understanding The Market',
      details: 'Comprehensive competitor intelligence mapping and audience demographic audits to find greenfield opportunities in search and social spaces.'
    },
    {
      num: '03',
      title: 'Transform',
      desc: 'Implementing Digital Services',
      details: 'Deploying high-impact UI/UX redesigns, targeted keyword funnels, custom web apps, and data tracking pixels across all channels.'
    },
    {
      num: '04',
      title: 'Grow',
      desc: 'Expanding Your Business',
      details: 'Continual optimization of bidding engines, scale analytics monitoring, dynamic retargeting matrices, and creative content updates.'
    }
  ];

  /*
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      desc: 'Perfect for small businesses looking to establish a digital presence.',
      features: ['Basic SEO Optimization', '2 Social Media Platforms', 'Monthly Reporting', 'Email Support', 'Basic Content Creation'],
      popular: false
    },
    {
      name: 'Growth',
      price: '$2,499',
      period: '/month',
      desc: 'Ideal for growing companies ready to scale their digital marketing efforts.',
      features: ['Advanced SEO & Content', '4 Social Media Platforms', 'Google & Meta Ads Management', 'Bi-weekly Strategy Calls', 'Priority Support', 'Conversion Rate Optimization'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      desc: 'Tailored solutions for large organizations with complex marketing needs.',
      features: ['Full-Service Digital Marketing', 'Omnichannel Strategy', 'Custom Web Development', 'Dedicated Account Manager', '24/7 Premium Support', 'Advanced Analytics & BI'],
      popular: false
    }
  ];
  */

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
            Our <span className="gradient-text">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400"
          >
            Comprehensive digital marketing solutions designed to drive growth, engagement, and revenue for your business.
          </motion.p>
        </div>
      </section>

      {/* Services 3D Flip Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-3">Interactive Capabilities</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Hover to Explore Sub-capabilities</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allServices.map((service, idx) => (
              <motion.div 
                key={idx}
                id={service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flip-box h-80 w-full cursor-pointer"
              >
                <div className="flip-box-inner shadow-lg">
                  {/* Front Side */}
                  <div className="flip-box-front p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-4 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                        {service.desc}
                      </p>
                    </div>
                    <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-1.5 mt-2">
                      Hover to Expand <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Back Side (Explores sub services list similar to Saka Digital) */}
                  <div className="flip-box-back p-8 bg-slate-950 dark:bg-dark text-white border border-primary-500/30 flex flex-col justify-between text-left">
                    <div>
                      <h4 className="text-lg font-bold text-primary-400 mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
                        {service.title}
                      </h4>
                      <ul className="space-y-2.5">
                        {service.subServices.map((sub, sIdx) => (
                          <li key={sIdx} className="text-sm text-slate-300 flex items-center gap-2 font-medium">
                            <span className="text-primary-500">➜</span> {sub}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center">
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Capabilities</span>
                      <Link to={`/explore#${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="text-primary-500 hover:text-primary-400 font-bold text-sm flex items-center gap-1">
                        Explore <span className="text-lg">➤</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section (Saka Digital Inspired) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-t border-b border-slate-200 dark:border-slate-800 relative overflow-hidden">
        {/* Background Glowing Lines & Elements */}
        <div className="absolute top-[30%] left-[-10%] w-[35%] h-[35%] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[30%] right-[-10%] w-[35%] h-[35%] bg-primary-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-3">Our Methodology</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Our Approach: Steps to Going Digital</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              We leverage a structured four-stage process to map objectives, streamline execution, and optimize business scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approachSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary-500 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer flex flex-col h-full"
              >
                {/* Large Background Transparent Numbers */}
                <div className="absolute -top-12 right-4 text-8xl font-black font-mono text-slate-100 dark:text-slate-800 group-hover:text-primary-500/10 select-none transition-colors duration-500 pointer-events-none">
                  {step.num}
                </div>

                <div className="relative z-10 flex-grow flex flex-col">
                  <div className="mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 dark:bg-primary-900/30 px-3 py-1.5 rounded-full">
                      Stage {step.num}
                    </span>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary-500 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">
                    {step.desc}
                  </p>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow">
                    {step.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-3">Transparent Pricing</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Choose Your Growth Plan</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Flexible pricing options designed to scale with your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative p-8 rounded-3xl bg-white dark:bg-slate-900 border flex flex-col h-full ${
                  plan.popular 
                    ? 'border-primary-500 shadow-2xl shadow-primary-500/20 scale-100 md:scale-105 z-10' 
                    : 'border-slate-200 dark:border-slate-800 shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-primary-600 to-primary-400 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-8">
                  <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 h-10">{plan.desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-extrabold">{plan.price}</span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">{plan.period}</span>
                  </div>
                </div>
                
                <div className="flex-grow mb-8 space-y-4">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Services;
