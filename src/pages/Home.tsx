import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { 
  ArrowRight, CheckCircle2, Megaphone, Smartphone, 
  TrendingUp, Target, PenTool, Search, 
  Rocket, Sparkles, BookOpen, FileText,
  LayoutDashboard, Users, Zap, Brain, Link2, BarChart3
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Swapping hero text state
const heroWords = [
  'SEO Services',
  'Web Development',
  'Digital Marketing',
  'AI Automation',
  'Social Media Marketing'
];

const Home: React.FC = () => {
  useSEO({
    title: 'Digital Marketing Agency & Web Development Company in Guntur & Hyderabad',
    description: 'Momentrix Media is a top-rated digital marketing agency and web development company serving Guntur, Vijayawada, Amaravati and Hyderabad. We scale brands with organic SEO, Meta & Google ads, web development, and AI automation.',
    keywords: 'Digital Marketing Agency in Guntur, Digital Marketing Agency in Hyderabad, SEO Services in Guntur, SEO Services in Hyderabad, Web Development Company in Guntur, Social Media Marketing Guntur, AI Automation Services, Best Digital Marketing Agency Andhra Pradesh',
    schemaMarkup: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://momentrixmedia.com/#organization",
          "name": "Momentrix Media",
          "url": "https://momentrixmedia.com",
          "logo": "https://momentrixmedia.com/assets/Main%20Favicon%20Dark-D6WWraH_.png",
          "email": "hello@momentrixmedia.com",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-868-6546-419",
            "contactType": "sales",
            "areaServed": "IN",
            "availableLanguage": ["en", "te", "hi"]
          },
          "sameAs": [
            "https://facebook.com/momentrixmedia",
            "https://instagram.com/momentrix_media",
            "https://linkedin.com/company/momentrixmedia"
          ]
        },
        {
          "@type": "ProfessionalService",
          "name": "Momentrix Media",
          "image": "https://momentrixmedia.com/assets/Main%20Favicon%20Dark-D6WWraH_.png",
          "@id": "https://momentrixmedia.com/#localbusiness",
          "url": "https://momentrixmedia.com",
          "telephone": "+91-868-6546-419",
          "email": "hello@momentrixmedia.com",
          "priceRange": "₹₹",
          "currenciesAccepted": "INR",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Ground floor, 1-12, 25, 3rd Line, Chandramouli Nagar",
            "addressLocality": "Guntur",
            "addressRegion": "Andhra Pradesh",
            "postalCode": "522007",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 16.3132285,
            "longitude": 80.42806
          },
          "areaServed": [
            { "@type": "City", "name": "Guntur" },
            { "@type": "City", "name": "Vijayawada" },
            { "@type": "City", "name": "Amaravati" },
            { "@type": "City", "name": "Hyderabad" }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "120",
            "bestRating": "5",
            "worstRating": "1"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          }
        },
        {
          "@type": "WebSite",
          "name": "Momentrix Media",
          "url": "https://momentrixmedia.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://momentrixmedia.com/explore?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
      ]
    }
  });

  const [wordIdx, setWordIdx] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [showNewsletterSuccess, setShowNewsletterSuccess] = useState(false);
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterLoading(true);
    setNewsletterError('');
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe.');
      }
      setNewsletterEmail('');
      setShowNewsletterSuccess(true);
      setTimeout(() => {
        setShowNewsletterSuccess(false);
      }, 5000);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setNewsletterError(msg);
    } finally {
      setNewsletterLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIdx((prev) => (prev + 1) % heroWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Platform showcase carousel state with original brand vector SVGs and glowing interactive borders
  const platforms = [
    { 
      name: 'Google Search', 
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.87-2.6-3.3-4.53-6.16-4.53z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
        </svg>
      ), 
      desc: 'Rank Top on Google Search', 
      action: 'Increase Store Walk-ins',
      glowClass: 'hover:shadow-[0_0_30px_rgba(66,133,244,0.3)] hover:border-[#4285F4]/40'
    },
    { 
      name: 'Google Ads', 
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M16.5 18L9 5h5l7.5 13h-5z" fill="#4285F4" />
          <path d="M9 5L1.5 18h5L14 5H9z" fill="#FBBC05" />
        </svg>
      ), 
      desc: 'Reach Your Target Audience', 
      action: 'Direct Leads Generation',
      glowClass: 'hover:shadow-[0_0_30px_rgba(251,188,5,0.3)] hover:border-[#FBBC05]/40'
    },
    { 
      name: 'LinkedIn', 
      icon: (
        <svg className="w-8 h-8 text-[#0a66c2]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ), 
      desc: 'Build a Business Network', 
      action: 'Enterprise Partnerships',
      glowClass: 'hover:shadow-[0_0_30px_rgba(10,102,194,0.3)] hover:border-[#0a66c2]/40'
    },
    { 
      name: 'Instagram', 
      icon: (
        <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ), 
      desc: 'Increase Brand Awareness', 
      action: 'Interactive Stories Ads',
      glowClass: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:border-[#ec4899]/40'
    },
    { 
      name: 'X / Twitter', 
      icon: (
        <svg className="w-8 h-8 text-slate-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), 
      desc: 'Build Online Communities', 
      action: 'Realtime Brand Advocacy',
      glowClass: 'hover:shadow-[0_0_30px_rgba(15,23,42,0.3)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:border-slate-450/40'
    },
    { 
      name: 'Local Maps SEO', 
      icon: (
        <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ), 
      desc: 'Become Accessible Nearby', 
      action: 'Local Foot-Traffic Velocity',
      glowClass: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:border-[#ef4444]/40'
    }
  ];

  const [isCentering, setIsCentering] = useState(false);
  const [centerOffset, setCenterOffset] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const cardElement = e.currentTarget;
    const trackElement = trackRef.current;
    const viewportElement = viewportRef.current;

    if (cardElement && trackElement && viewportElement) {
      const cardRect = cardElement.getBoundingClientRect();
      const viewportRect = viewportElement.getBoundingClientRect();
      const trackRect = trackElement.getBoundingClientRect();

      // Calculate the offset of the card relative to the track's start
      const cardLeftInTrack = cardRect.left - trackRect.left;

      // Centered position inside the viewport
      const targetTx = (viewportRect.width - cardRect.width) / 2 - cardLeftInTrack;

      setCenterOffset(targetTx);
      setIsCentering(true);
    }
  };

  const handleMouseLeave = () => {
    if (isCentering) {
      setIsCentering(false);
    }
  };

  // 3D Flip Box Services list (Saka Digital 8 Services Mapping)
  const homeServices = [
    {
      icon: <Sparkles className="w-8 h-8 text-purple-500" />,
      title: 'AI Automation',
      desc: 'Deploying custom artificial intelligence pipelines to automate workflows.',
      subServices: ['AI Agent Workflows', 'CRM & Lead Automation', 'Custom GPT Solutions', 'Intelligent Business Operations'],
      link: '/services'
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: 'Growth Analysis',
      desc: 'Data-driven funnel mapping and metric analysis to unlock scale.',
      subServices: ['Funnel Performance Audit', 'Retention & Cohort Analysis', 'Competitor Insights', 'Growth Strategy'],
      link: '/services'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-green-500" />,
      title: 'Website',
      desc: 'A growth-centric digital foundation for modern scaling.',
      subServices: ['Website Design', 'Web Development', 'E-Commerce Platforms', 'Website Maintenance'],
      link: '/services#web-development'
    },
    {
      icon: <PenTool className="w-8 h-8 text-teal-500" />,
      title: 'Content Creation',
      desc: 'Engaging copywriting and design assets that resonate globally.',
      subServices: ['High-Value SEO Blogging', 'Graphic Assets Design', 'Video Production', 'Copywriting & Content Strategy'],
      link: '/services'
    },
    {
      icon: <Rocket className="w-8 h-8 text-indigo-500" />,
      title: 'Performance Marketing',
      desc: 'High-yielding paid acquisition and conversion optimization models.',
      subServices: ['Paid Search & Social Ads', 'Conversion Rate Optimization', 'Funnel Analytics Tracking', 'Return-on-Ad-Spend Velocity'],
      link: '/services#performance-marketing'
    },
    {
      icon: <Megaphone className="w-8 h-8 text-blue-500" />,
      title: 'Social Media Marketing',
      desc: 'Strategic presence that amplifies your organic brand voice.',
      subServices: ['Page Management', 'Media Campaigns', 'Organic Engagement', 'Influencer Marketing'],
      link: '/services#social-media-marketing'
    },
    {
      icon: <Search className="w-8 h-8 text-yellow-500" />,
      title: 'SEO Services',
      desc: 'Increase digital discovery, traffic, and web search authority.',
      subServices: ['Local Search Maps', 'On-Page SEO Audit', 'Off-Page SEO Authority', 'Technical SEO Dev'],
      link: '/services#seo-services'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: 'Advertisement',
      desc: 'Targeted paid campaigns that drive scalable revenue.',
      subServices: [ 'Google Ads', 'Meta Platform Ads', 'YouTube Advertisements','Pay-Per-Click Ads',],
      link: '/services'
    },
    
  ];

  /*
  // Testimonials state
  const testimonials = [
    {
      quote: "We have been working with Momentrix for several years and have seen a significant, measurable growth in the digital space. They maintain our complete online ecosystem and have assisted us in increasing our conversion rate by over 148%.",
      author: "Samantha K., Chief of Growth",
      company: "MGS Enterprise"
    },
    {
      quote: "Momentrix transformed our brand with absolute precision and purpose. Their custom SEO and performance marketing strategies gave us a sustainable #1 ranking on search engines and tripled our online lead velocity.",
      author: "David L., VP of Marketing",
      company: "Solis Tech Global"
    }
  ];
  const [testIdx, setTestIdx] = useState(0);
  */

  // Thought leadership logs (Saka Digital Reference)
  const resources = [
    {
      publisher: 'Gartner Research',
      hasIcon: true,
      badge: { text: '• New', isPill: true },
      category: 'Leadership · Digital Strategy',
      title: 'Living in a Digital World — Modern Leadership & Digitisation',
      description: 'How C-suite leaders are navigating digital transformation pressures and redefining org-wide strategy for scalable growth.',
      relevanceScore: 94,
      date: 'May 2026',
      readTime: '5 min',
      styles: {
        pillBg: 'bg-blue-50 dark:bg-blue-950/40 border border-blue-100/50 dark:border-blue-900/30',
        pillText: 'text-blue-600 dark:text-blue-400',
        categoryText: 'text-blue-600 dark:text-blue-400',
        relevanceText: 'text-blue-600 dark:text-blue-400',
        progressBar: 'bg-blue-600'
      }
    },
    {
      publisher: 'Forbes Analysis',
      hasIcon: true,
      badge: { text: '4 min read', isPill: false },
      category: 'AI Marketing · Scale Forecasts',
      title: 'Five Digital Marketing Predictions & AI-Driven Scale Forecasts',
      description: 'The top 5 shifts reshaping digital marketing spend in 2026, with AI automation at the centre of every growth model.',
      relevanceScore: 88,
      date: 'April 2026',
      readTime: '4 min',
      styles: {
        pillBg: 'bg-green-50 dark:bg-green-950/40 border border-green-100/50 dark:border-green-900/30',
        pillText: 'text-green-700 dark:text-green-400',
        categoryText: 'text-green-700 dark:text-green-400',
        relevanceText: 'text-green-700 dark:text-green-400',
        progressBar: 'bg-green-600'
      }
    },
    {
      publisher: 'Deloitte Industry',
      hasIcon: false,
      badge: { text: '6 min read', isPill: false },
      category: 'Industry 4.0 · Transformation',
      title: 'Digital Industrial Transformation — Scaling to Industry 4.0 Ecosystems',
      description: 'A framework for enterprises bridging legacy systems with smart, connected digital operations across the full value chain.',
      relevanceScore: 81,
      date: 'March 2026',
      readTime: '6 min',
      styles: {
        pillBg: 'bg-amber-50 dark:bg-amber-950/40 border border-amber-150/50 dark:border-amber-900/30',
        pillText: 'text-amber-850 dark:text-amber-400',
        categoryText: 'text-amber-800 dark:text-amber-400',
        relevanceText: 'text-amber-800 dark:text-amber-400',
        progressBar: 'bg-amber-700'
      }
    },
    {
      publisher: 'KPMG SMB Report',
      hasIcon: true,
      badge: { text: '4 min read', isPill: false },
      category: 'SMB Growth · Automation',
      title: 'Impact of Internet, Automation & Digitisation on Global SMBs',
      description: 'How small and mid-size businesses are leveraging automation and internet access to compete at a global scale for the first time.',
      relevanceScore: 77,
      date: 'February 2026',
      readTime: '4 min',
      styles: {
        pillBg: 'bg-purple-50 dark:bg-purple-950/40 border border-purple-100/50 dark:border-purple-900/30',
        pillText: 'text-purple-750 dark:text-purple-400',
        categoryText: 'text-purple-700 dark:text-purple-400',
        relevanceText: 'text-purple-700 dark:text-purple-400',
        progressBar: 'bg-purple-600'
      }
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-28 lg:pt-28 pb-12 overflow-hidden">
        {/* Background Elements & Saka Digital Inspired Looping Globe Video */}
        {/* <div className="hidden dark:block absolute inset-y-0 right-0 w-full lg:w-1/2 overflow-hidden dark:opacity-20 pointer-events-none z-0 mix-blend-plus-lighter">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover scale-110 object-center"
          >
            <source src="https://www.sakadigital.in/wp-content/uploads/2023/07/Saka-Digital-Hero.mp4" type="video/mp4" />
          </video>
        </div> */}

        {/* Animated Background Tech Grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />
        
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[40%] h-[50%] bg-primary-500/20 blur-[120px] rounded-full pointer-events-none z-0" 
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[40%] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none z-0" 
        />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium text-sm mb-6 border border-primary-100 dark:border-primary-800/50">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
                </span>
                #1 Digital Marketing & Search Agency
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
                <span className="text-primary-600 dark:text-primary-400">Momentrix Media</span> — Strategic Marketing & <span className="gradient-text">AI Automation</span>
              </motion.h1>
              
              <motion.div variants={fadeIn} className="text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-300 mb-8 flex flex-wrap items-center gap-x-2 gap-y-1 min-h-[2.5rem] py-1">
                <span>Empowering Businesses with</span>
                <span className="text-primary-500 inline-block font-extrabold relative min-w-[240px] h-8 overflow">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIdx}
                      className="absolute left-0 top-0 w-full whitespace-nowrap"
                      initial={{ y: 25, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -25, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {heroWords[wordIdx]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.div>
              
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <Link to="/services" className="px-8 py-4 rounded-full bg-primary-600 text-white font-bold hover:bg-primary-700 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all hover:-translate-y-1 flex items-center gap-2">
                  Go Digital <Rocket className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="px-8 py-4 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
             </motion.div>
            
            {/* Visual Column: Custom AI/Digital Marketing Illustration */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 p-2 group"
            >
              {/* Backlight glow behind the card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] w-full">
                <img 
                  src="/assets/hero-marketing.png" 
                  alt="Momentrix Digital Marketing & AI Automation" 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-700 ease-out rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-12 border-y border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Success Rate', value: '98%' },
              { label: 'Happy Clients', value: '120+' },
              { label: 'Years Experience', value: '8+' },
              { label: 'Completed Ecosystems', value: '250+' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">{stat.value}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Who We Are / About Us Section */}
      <section className="py-24 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden bg-white dark:bg-darker">
        <div className="absolute top-[20%] right-[-15%] w-[45%] h-[45%] bg-primary-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual Column: Team Image with Glowing Border and Overlapping Glass Stat */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl group border border-slate-200 dark:border-slate-800"
            >
              <img 
                src="/assets/momentrix-team.png" 
                alt="Momentrix Agency Team" 
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-8">
                <div className="glass p-6 rounded-2xl w-full border border-white/20 dark:border-slate-800/30 flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Momentrix HQ</h4>
                    <p className="text-xs text-slate-350 font-medium">Empowering brand growth globally</p>
                  </div>
                  <span className="text-xs font-bold bg-primary-500 text-white px-3 py-1.5 rounded-full uppercase tracking-wider">
                    Our HQ
                  </span>
                </div>
              </div> */}
            </motion.div>

            {/* Text Column: Narrative & Pillars */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-extrabold uppercase tracking-widest text-primary-600 bg-primary-50 dark:bg-primary-900/30 px-3 py-1.5 rounded-full mb-6 inline-block">
                Who We Are
              </span>
              <h3 className="text-3xl md:text-5xl font-bold mb-6">
                Creating<span className="gradient-text"> Momentum </span>For Modern Brands
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                Momentrix Media is a strategic marketing and technology partner committed to helping businesses build stronger visibility, improve operational efficiency, and accelerate sustainable growth. We bring together traditional marketing, digital marketing, Meta advertising, SEO, GEO, website design, and AI automation into one integrated framework designed for measurable business impact.
                We work with organizations that require more than promotional execution. Our approach combines strategic thinking, advanced technology, and disciplined execution to strengthen brand presence, improve customer engagement, and support scalable business performance.
                </p>         
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  { title: 'Global Vision', desc: 'Crafting localized experiences for global markets.' },
                  { title: 'Data Led', desc: 'Campaign strategies optimized through deep learning models.' },
                  { title: 'Refined Styling', desc: 'Curating gorgeous user interfaces that leave a lasting impression.' },
                  { title: 'High Yield ROI', desc: 'Focusing exclusively on meaningful outcomes that scale metrics.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1">
                      <span className="text-[10px] font-bold">✓</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{item.title}</h5>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div> */}

              <Link to="/about" className="inline-flex px-8 py-4 rounded-full bg-primary-600 text-white font-bold hover:bg-primary-700 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all hover:-translate-y-0.5 items-center gap-2">
                Discover Our Story <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sales Team/Operations CRM Features Grid (Centered 8-card grid) */}
      <section className="py-24 bg-slate-50/50 dark:bg-slate-900/10 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute top-[20%] left-[-10%] w-[35%] h-[35%] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[35%] h-[35%] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary-600 bg-primary-50 dark:bg-primary-900/30 px-3 py-1.5 rounded-full mb-6 inline-block">
                Powerful AI Features
              </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white">
              Everything your sales team needs
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              From lead capture to deal closure, <span className="gradient-text">  MOMENTRIX MEDIA </span>gives you the tools to manage every step of your sales process with confidence.            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: <LayoutDashboard className="w-5 h-5 text-orange-500 dark:text-orange-400" />,
                title: 'Custom Dashboards',
                desc: 'KPI widgets, charts, and analytics tailored to your role and business.'
              },
              {
                icon: <Users className="w-5 h-5 text-orange-500 dark:text-orange-400" />,
                title: 'Lead Management',
                desc: 'Full lifecycle tracking - capture, score, nurture, and convert with AI guidance.'
              },
              {
                icon: <BarChart3 className="w-5 h-5 text-orange-500 dark:text-orange-400" />,
                title: 'Reports & Analytics',
                desc: 'Slice performance by product, region, channel, or team in a few clicks.'
              },
              {
                icon: <Zap className="w-5 h-5 text-orange-500 dark:text-orange-400" />,
                title: 'Sales Automation',
                desc: 'Automated follow-ups, SLA timers, and next-best-action workflows.'
              },
              {
                icon: <Brain className="w-5 h-5 text-orange-500 dark:text-orange-400" />,
                title: 'AI Lead Scoring',
                desc: 'Predictive scoring based on behaviour, responses, and timeline signals.'
              },
              {
                icon: <Link2 className="w-5 h-5 text-orange-500 dark:text-orange-400" />,
                title: 'Integrations',
                desc: 'Connect with WhatsApp, email, ERPs, and payment systems via APIs.'
              },
              {
                icon: <FileText className="w-5 h-5 text-orange-500 dark:text-orange-400" />,
                title: 'Proposal Management',
                desc: 'Create, send, and track proposals directly from deal views.'
              },
              {
                icon: <Target className="w-5 h-5 text-orange-500 dark:text-orange-400" />,
                title: 'Performance Management',
                desc: 'Track team productivity, conversion rates, and forecast accuracy.'
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 shadow-sm hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:-translate-y-1 transition-all duration-300 group flex flex-col items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/explore" className="inline-flex px-8 py-4 rounded-full bg-primary-600 text-white font-bold hover:bg-primary-700 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:-translate-y-0.5 transition-all duration-300">
              Click For More
            </Link>
          </div>
        </div>
      </section>

      {/* Take Your Business Online - Carousel Showcase (Saka Digital Reference) */}
      {/* Service Highlight 1: Search Engine Optimization (Drive Organic Traffic) */}
      <section className="py-24 relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-primary-600 bg-primary-50 dark:bg-primary-900/30 px-3 py-1.5 rounded-full mb-6 inline-block">
                Search Engine Optimization
              </span>
              <h3 className="text-3xl md:text-5xl font-bold mb-6">Drive Organic Traffic</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                At Momentrix, we build your online domain authority and increase search rankings so that you list on top of search engines like Google, Yahoo, and Bing. We design strategic keywords funnels that attract high-intent customers directly to your platform.
              </p>
              
              <div className="space-y-4 mb-8">
                {['Local Map Listing Integrations', 'Domain Authority Blueprinting', 'Strict Semantic Content Writing'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <Link to="/services" className="inline-flex px-8 py-4 rounded-full bg-primary-600 text-white font-bold hover:bg-primary-700 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 items-center gap-2">
                Rank on Top <TrendingUp className="w-5 h-5" />
              </Link>
            </div>

            {/* Interactive Simulated Search Mockup Graphic */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="relative p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl">
                {/* Search Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-primary-500" />
                  </div>
                  <div className="flex-grow h-7 rounded bg-slate-50 dark:bg-slate-800 border border-slate-150 dark:border-slate-700 px-3 flex items-center text-xs text-slate-400 dark:text-slate-500 font-mono">
                    https://www.google.com/search?q=best+digital+marketing
                  </div>
                </div>

                {/* Google Search Result Item Mockup */}
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-primary-500/20">
                    <div className="text-xs text-primary-500 font-bold mb-1 flex items-center gap-1.5">
                      Ad · <a href="https://momentrixmedia.com" target="_blank" rel="noopener noreferrer" className="hover:underline">momentrixmedia.com</a><span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-[9px] px-1.5 py-0.5 rounded font-extrabold">#1 RANK</span>
                    </div>
                    <h4 className="text-base font-bold text-blue-600 dark:text-blue-400 hover:underline mb-1">
                      <a href="https://momentrixmedia.com" target="_blank" rel="noopener noreferrer">Momentrix Media</a>
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      We engineer high-impact SEO domain blueprints, design local optimization matrix strategies, and maximize commercial intent traffic.
                    </p>
                  </div>

                  {/* Local Map Listing Mockup */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-150 dark:border-slate-800 flex items-center gap-4">
                    <div className="w-12 h-12 rounded bg-red-100 dark:bg-red-950/30 flex items-center justify-center text-red-500 text-xl font-bold">
                      📍
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">Momentrix Headquarters</h4>
                      <p className="text-xs text-slate-400 font-semibold mb-1">5.0 ⭐⭐⭐⭐⭐ (120+ Reviews)</p>
                      <p className="text-[10px] text-primary-600 dark:text-primary-400 font-bold uppercase tracking-wider">Open Now · 24/7 Operations</p>
                    </div>
                    <span className="text-xs text-slate-400 font-extrabold uppercase bg-white dark:bg-slate-850 px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700">Map Pin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlight 2: Social Media Marketing (Build Your Brand) */}
      <section className="py-24 relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual Instagram / Social Card Mockup */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="relative p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl max-w-md mx-auto">
                {/* Social Card Header */}
                <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-0.5">
                      <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-xs">
                        📸
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">momentrix_media</h4>
                      <p className="text-[10px] text-slate-400">Sponsored Ads Campaign</p>
                    </div>
                  </div>
                  <span className="text-xs text-primary-500 font-extrabold bg-primary-50 dark:bg-primary-900/30 px-2.5 py-1 rounded-full uppercase tracking-wider">Meta Ads</span>
                </div>

                {/* Social Post Graphic Mockup */}
                <div className="w-full aspect-square bg-slate-100 dark:bg-slate-800 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center border border-slate-150 dark:border-slate-750">
                  <img 
                    src="/assets/social-ad-campaign.png" 
                    alt="Social Ad Campaign" 
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 z-10" />
                  {/* <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transitio     n={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="glass px-4 py-2.5 rounded-full text-xs font-bold text-slate-900 dark:text-white shadow-lg border border-white/50 flex items-center gap-1.5 z-20"
                  >
                    🏷️ View Campaign Details <span className="bg-primary-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[8px]">➜</span>
                  </motion.div> */}
                </div>

                {/* Engagement icons */}
                <div className="flex gap-3 mb-2 text-slate-600 dark:text-slate-400">
                  <span>❤️ 4,250 Likes</span>
                  <span>💬 120 Comments</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  <span className="font-bold mr-1.5">momentrix_media</span> Empowering brand perception globally using data, design, and robust technology pipelines! 🚀 #GoDigital
                </p>
              </div>
            </div>

            {/* Social Text */}
            <div className="order-1 lg:order-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-primary-600 bg-primary-50 dark:bg-primary-900/30 px-3 py-1.5 rounded-full mb-6 inline-block">
                Social Media
              </span>
              <h3 className="text-3xl md:text-5xl font-bold mb-6">Build Your Brand</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                Showcase your brand globally through successful dynamic marketing campaigns on platforms like Facebook, Instagram, and LinkedIn. We architect unified digital presences that engage key demographics and spark organic, loyal brand advocacy.
              </p>
              
              <div className="space-y-4 mb-8">
                {['Meta Ads Campaign Architecture', 'Organic Brand Loyalty Funneling', 'Influencer Collaboration Frameworks'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <Link to="/services" className="inline-flex px-8 py-4 rounded-full bg-primary-600 text-white font-bold hover:bg-primary-700 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 items-center gap-2">
                Grow Online <CheckCircle2 className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview (3D Flip Box version similar to Saka Digital) */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Comprehensive Digital Solutions</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              We provide end-to-end digital marketing services tailored to your specific business goals. Hover to explore our sub-capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeServices.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flip-box h-80 w-full cursor-pointer"
              >
                <div className="flip-box-inner shadow-lg">
                  {/* Front Side */}
                  <div className="flip-box-front p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-4 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                        {service.desc}
                      </p>
                    </div>
                    <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-1.5 mt-2">
                      Hover to Expand <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="flip-box-back p-8 bg-slate-950 dark:bg-dark text-white border border-primary-500/30 flex flex-col justify-between text-left">
                    <div>
                      <h5 className="text-base font-bold text-primary-400 mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
                        {service.title}
                      </h5>
                      <ul className="space-y-2">
                        {service.subServices.map((sub, sIdx) => (
                          <li key={sIdx} className="text-sm text-slate-300 flex items-center gap-2 font-medium">
                            <span className="text-primary-500">➜</span> {sub}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center">
                      {/* <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Services</span> */}
                      <Link
                        to="/services"
                        className="text-xs text-slate-400 font-bold uppercase tracking-wider hover:text-white transition-colors"
                      >
                        Services
                      </Link>
                      <Link 
                        to={`/explore#${
                          service.title === 'Website' ? 'web-development' :
                          service.title === 'SEO Services' ? 'seo-optimization' :
                          service.title === 'Advertisement' ? 'meta-ads' :
                          service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
                        }`} 
                        className="text-primary-500 hover:text-primary-400 font-bold text-sm flex items-center gap-1"
                      >
                        Explore <span className="text-lg">➤</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex px-8 py-4 rounded-full bg-primary-600 text-white font-bold hover:bg-primary-700 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:-translate-y-0.5 transition-all duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* AI-Enabled Marketing Banner ("A New Era of Digital") */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30 border-t border-b border-slate-200 dark:border-slate-800 relative overflow-hidden">
        <div className="absolute top-[20%] left-[-15%] w-[45%] h-[45%] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Spinning Glowing Planet Graphic */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-primary-500/15 blur-[120px] rounded-full pointer-events-none" />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                className="w-80 h-80 rounded-full border-2 border-dashed border-primary-500/30 flex items-center justify-center mx-auto"
              >
                <div className="w-64 h-64 rounded-full border-2 border-dotted border-blue-500/30 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-primary-500 to-blue-600/80 shadow-2xl flex items-center justify-center text-white text-3xl font-extrabold relative overflow-hidden">
                    <Sparkles className="w-12 h-12 text-white animate-pulse" />
                    <div className="absolute inset-y-0 right-0 w-1/2 bg-white/10 skew-x-12" />
                  </div>
                </div>
              </motion.div>
            </div>

            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-primary-600 bg-primary-50 dark:bg-primary-900/30 px-3 py-1.5 rounded-full mb-6 inline-block">
                AI-Powered Marketing
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              <span className="gradient-text"> Smarter</span> System
              </h2>
               <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
                 <span className="gradient-text"> Stronger</span> Brands
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                Our AI automation solutions are developed to improve business operations and reduce manual dependency across key workflows. We design intelligent systems that support customer interaction, lead qualification, scheduling, follow-up processes, and internal task automation.
                These solutions are tailored to each organization’s specific requirements and are implemented to enhance productivity, consistency, and responsiveness. Our objective is to ensure that AI functions as a practical business asset that contributes directly to efficiency and growth.
              </p>
              <Link to="/about" className="inline-flex px-8 py-4 rounded-full bg-primary-600 text-white font-bold hover:bg-primary-700 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 items-center gap-2">
                About Our Tech <BookOpen className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Thought Leadership Showcase (Saka Digital Reference) */}
      <section className="py-24 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-3">Industry Insights</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Stay Ahead in Digital Excellence</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              We monitor global technical journals and publication indices to keep our marketing engines at the cutting edge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((res, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative"
              >
                <div className="space-y-4">
                  {/* Top line with publisher pill and read time/new badge */}
                  <div className="flex justify-between items-center">
                    <div className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold ${res.styles.pillBg} ${res.styles.pillText}`}>
                      {res.hasIcon && <FileText className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />}
                      {res.publisher}
                    </div>
                    {res.badge.isPill ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-100/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
                        {res.badge.text.replace('• ', '')}
                      </span>
                    ) : (
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {res.badge.text}
                      </span>
                    )}
                  </div>

                  {/* Category and Title */}
                  <div className="space-y-2">
                    <div className={`text-xs font-bold ${res.styles.categoryText}`}>
                      {res.category}
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors leading-snug text-base">
                      {res.title}
                    </h4>
                    <p className="text-xs text-slate-650 dark:text-slate-400 leading-relaxed">
                      {res.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  {/* Relevance Score bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-semibold text-slate-500 dark:text-slate-400">
                      <span>Relevance score</span>
                      <span className={`font-bold ${res.styles.relevanceText}`}>{res.relevanceScore}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${res.styles.progressBar}`} 
                        style={{ width: `${res.relevanceScore}%` }}
                      />
                    </div>
                  </div>

                  {/* Divider line */}
                  {/* <div className="border-t border-slate-100 dark:border-slate-800/80 my-4" /> */}

                  {/* Bottom section with date/readtime and button */}
                  {/* <div className="flex justify-between items-center">
                    <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 font-semibold">
                      <FileText className="w-3.5 h-3.5 mr-1.5 text-slate-400 flex-shrink-0" />
                      <span>{res.date}</span>
                      <span className="mx-1.5">·</span>
                      <span>{res.readTime}</span>
                    </div>
                    <span className="inline-flex items-center px-3 py-1.5 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 text-slate-750 dark:text-slate-300 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-350 dark:hover:border-slate-650 transition-all">
                      Read analysis <span className="ml-1">↗</span>
                    </span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials (Saka Digital Reference) */}
      {/* <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">What Leaders Say About Us</h3>
          
          <div className="relative min-h-[160px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={testIdx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-350 italic leading-relaxed font-medium">
                  "{testimonials[testIdx].quote}"
                </p>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">{testimonials[testIdx].author}</h4>
                  <p className="text-xs text-primary-500 font-extrabold uppercase tracking-widest">{testimonials[testIdx].company}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setTestIdx(idx)}
                className={`w-3 h-3 rounded-full transition-all ${idx === testIdx ? 'bg-primary-500 scale-125' : 'bg-slate-300 dark:bg-slate-700'}`}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Dynamic Newsletter Card (Saka Digital smartwatch reference style) */}
      <section className="py-12 bg-white dark:bg-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 bg-gradient-to-tr from-slate-900 to-dark text-white border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
            <div className="relative z-10 max-w-md">
              <span className="text-[10px] font-extrabold text-primary-400 uppercase tracking-widest bg-primary-950/60 border border-primary-500/20 px-3 py-1 rounded-full mb-3 inline-block">
                Stay Updated
              </span>
              <h4 className="text-2xl font-bold mb-2">Subscribe to Our newsletter</h4>
              <p className="text-xs text-slate-400 font-medium">Get the latest SEO blueprints, social updates, and growth scaling methods delivered straight to your inbox.</p>
            </div>
            
            {showNewsletterSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 w-full max-w-sm text-center md:text-left p-4 rounded-2xl bg-emerald-955/40 dark:bg-emerald-950/40 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold text-sm shadow-lg"
              >
                🎉 Thank you! You've subscribed successfully.
              </motion.div>
            ) : (
              <div className="relative z-10 w-full max-w-sm flex flex-col">
                <form onSubmit={handleNewsletterSubmit} className="w-full flex items-center bg-white/5 border border-slate-800 rounded-full p-1.5 focus-within:border-primary-500 transition-colors">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    required 
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    disabled={newsletterLoading}
                    className="flex-grow bg-transparent text-sm text-white pl-4 pr-2 outline-none border-none placeholder-slate-500 disabled:opacity-50" 
                  />
                  <button 
                    type="submit" 
                    disabled={newsletterLoading}
                    className="w-10 h-10 rounded-full bg-primary-600 hover:bg-primary-500 flex items-center justify-center transition-colors text-white disabled:opacity-50"
                  >
                    {newsletterLoading ? '...' : '➜'}
                  </button>
                </form>
                {newsletterError && (
                  <p className="text-xs text-red-400 mt-2 font-medium pl-4">{newsletterError}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner: Take your Business Online! (Saka Digital inspired) */}
      <section className="py-24 relative overflow-hidden text-center text-white bg-slate-950">
        {/* Saka Digital Inspired Data Stream Video Background */}
        <div className="absolute inset-0 overflow-hidden opacity-20 z-0 mix-blend-overlay pointer-events-none">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="https://www.sakadigital.in/wp-content/uploads/2023/10/3.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
          {/* Circular spinning neon green badge */}
          <div className="relative w-36 h-36 mb-10 flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center text-primary-500 font-bold text-[9px] uppercase tracking-widest"
            >
              {/* Simple inline spinning SVG text to mimic Saka Digital custom badge */}
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                <text fill="#f97316" fontSize="7.5" fontWeight="bold">
                  <textPath href="#circlePath" startOffset="0%">
                    GO DIGITAL • MOMENTRIX • GO DIGITAL • MOMENTRIX •
                  </textPath>
                </text>
              </svg>
            </motion.div>
            <div className="w-20 h-20 rounded-full bg-primary-600/10 border border-primary-500/30 flex items-center justify-center text-primary-400">
              <Rocket className="w-8 h-8 animate-bounce" />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">Take your Business Online!</h2>
          <p className="text-lg md:text-xl text-slate-350 mb-10 max-w-xl font-medium">
            Let's build a robust, high-performance digital ecosystem that drives real-world enterprise outcomes for your brand.
          </p>
          
          <Link to="/contact" className="inline-flex px-8 py-4 rounded-full bg-white text-primary-600 font-bold hover:bg-slate-100 shadow-xl transition-all hover:-translate-y-1">
            Get Your Free Marketing Audit
          </Link>
        </div>
      </section>
       <section className="py-5 bg-slate-50/50 dark:bg-slate-950/20 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          
          <div ref={viewportRef} className="relative w-full overflow-hidden pt-10 pb-6">
            <div 
              ref={trackRef} 
              className={`flex gap-6 ${isCentering ? 'transition-transform duration-500 ease-out' : 'animate-marquee'} w-max`}
              style={isCentering ? { transform: `translate3d(${centerOffset}px, 0, 0)` } : undefined}
              onMouseLeave={handleMouseLeave}
            >
              {platforms.concat(platforms).map((plat, idx) => (
                <div 
                  key={idx} 
                  onClick={handleCardClick}
                  className={`w-[260px] flex-shrink-0 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-500 flex flex-col justify-between h-52 cursor-pointer group relative overflow-hidden ${plat.glowClass} hover:-translate-y-2`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(168,85,247,0.06),transparent)] pointer-events-none" />
                  
                  <div className="flex justify-between items-start relative z-10">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      {plat.icon}
                    </div>
                    <span className="text-[10px] font-extrabold bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-2 py-1 rounded-full uppercase tracking-wider">
                      Live Channel
                    </span>
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-bold text-lg mb-1 group-hover:text-primary-500 transition-colors">{plat.name}</h4>
                    <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">{plat.desc}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
                      <span className="text-primary-500">➜</span> {plat.action}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      
    </div>
  );
};

export default Home;
