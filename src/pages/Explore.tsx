import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { 
  ArrowLeft, Sparkles, Search, TrendingUp, Megaphone, 
  Smartphone, Target, Rocket, Globe, PenTool, Video, Mail, 
  Sliders, Heart, ChevronRight
} from 'lucide-react';

interface ExploreCard {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  themeColor: string;
  brief: string;
  description: string;
  subServices: string[];
}

const Explore: React.FC = () => {
  useSEO({
    title: 'Explore Solutions & Interactive Simulators',
    description: 'Interact with our custom tool simulators: AI workflow bots, SEO keywords, bid optimizers, responsiveness builders, and content generators in real-time.',
    keywords: 'Interactive Marketing Tools, SEO Simulator, AI Workflow Automation Tool Hyderabad, CPC Bidding Calculator',
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Explore Solutions - Momentrix Media",
      "description": "Interactive workspace showcasing our AI automation, digital marketing, SEO, and web development simulators.",
      "url": "https://momentrixmedia.com/explore",
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

  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>('ai-automation');

  // Interactive states for different service simulators
  // 1. AI Automation Chat Sim
  const [aiChatMessages, setAiChatMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    { sender: 'bot', text: 'Hi! I am the Momentrix AI Agent. Ask me to automate a workflow!' }
  ]);
  const [chatInput, setChatInput] = useState('');
  
  // 2. SEO Search Keyword Sim
  const [seoKeyword, setSeoKeyword] = useState('best digital marketing agency');
  
  // 3. SEM Bid Optimizer Sim
  const [semBid, setSemBid] = useState(2.5);
  
  // 4. Social Media Likes Sim
  const [socialLikes, setSocialLikes] = useState(4250);
  const [hasLiked, setHasLiked] = useState(false);
  
  // 5. Web Dev Viewport Sim
  const [webViewport, setWebViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  
  // 6. Growth Funnel Sim
  const [funnelTraffic, setFunnelTraffic] = useState(10000);
  const [funnelConvRate, setFunnelConvRate] = useState(2.5);
  
  // 7. Performance Marketing ROAS Calc
  const [perfSpend, setPerfSpend] = useState(5000);
  const [perfRoas, setPerfRoas] = useState(3.5);
  
  // 8. GEO Chat Sim
  const [geoQuery, setGeoQuery] = useState('Who is the best agency for AI and marketing in Andhra Pradesh?');
  const [geoResponse, setGeoResponse] = useState('');
  const [geoLoading, setGeoLoading] = useState(false);
  
  // 9. Content Headline Generator Sim
  const [selectedTopic, setSelectedTopic] = useState('AI');
  const [generatedHeadline, setGeneratedHeadline] = useState('5 Ways AI Automation is Transforming Corporate Efficiency');
  
  // 10. Meta Ads carousel index
  const [metaAdIndex, setMetaAdIndex] = useState(0);

  // 11. Email template preview state
  const [emailPromo, setEmailPromo] = useState('WELCOME20');



  const cards: ExploreCard[] = [
    {
      id: 'ai-automation',
      title: 'AI Automation',
      category: 'Technology & Workflows',
      icon: <Sparkles className="w-6 h-6" />,
      themeColor: 'purple',
      brief: 'Deploy custom artificial intelligence agents and workflow logic pipelines.',
      description: 'We replace manually intensive tasks with automated AI agents. From routing and scoring leads to synchronizing business software APIs and configuring custom GPT assistants, our intelligence systems scale operations without scaling headcount.',
      subServices: ['AI Agent Workflows', 'CRM Lead Sync', 'Custom GPT Solutions', 'Intelligent Business Operations']
    },
    {
      id: 'seo-services',
      title: 'SEO Services',
      category: 'Organic Search',
      icon: <Search className="w-6 h-6" />,
      themeColor: 'blue',
      brief: 'Build domain authority and drive high-intent organic search volume.',
      description: 'Rank on top of search engines like Google, Yahoo, and Bing. We conduct precise on-page semantic updates, structure schema markups, speed up website loading parameters, and acquire quality backlinks to keep your brand discoverable 24/7.',
      subServices: ['Local Search SEO', 'On-Page Content Architecture', 'Off-Page Authority Building', 'Technical SEO Dev']
    },
    {
      id: 'sem',
      title: 'SEM (Search Engine Ads)',
      category: 'Paid Search',
      icon: <TrendingUp className="w-6 h-6" />,
      themeColor: 'orange',
      brief: 'Paid search engine campaigns targeting high-intent buying traffic.',
      description: 'Capture leads the moment they search for your services. We architect and monitor Google PPC campaigns, managing bid prices dynamically, defining negative keyword sets, and optimizing quality scores to lower customer acquisition costs.',
      subServices: ['Google PPC Management', 'Bid Price Optimization', 'Negative Keyword Mining', 'Ad Quality Score Audits']
    },
    {
      id: 'social-media-marketing',
      title: 'Social Media Marketing',
      category: 'Social Growth',
      icon: <Megaphone className="w-6 h-6" />,
      themeColor: 'pink',
      brief: 'Engage brand communities across Facebook, Instagram, LinkedIn, and YouTube.',
      description: 'Establish consistent brand authority. We construct monthly organic content schedules, script short-form vertical videos, and manage visual design grids to cultivate loyal, highly engaged digital followers.',
      subServices: ['Page Management & Schedule', 'Brand Design Assets', 'Organic Growth Strategies', 'Influencer Collaborations']
    },
   
    {
id: 'web-development',
title: 'Web Development',
category: 'Engineering & UI/UX',
icon: <Smartphone className="w-6 h-6" />,
themeColor: 'green',
brief: 'Create blazing-fast, responsive, and conversion-optimized websites.',
description: 'Your website is the central hub of your digital ecosystem. We build modern, scalable, and secure web applications using industry-leading technologies. From responsive frontends to robust backend architectures and full-stack MERN solutions, we deliver high-performance digital experiences tailored to your business goals.',
subServices: [
'Frontend Development (React.js, Next.js, Vite)',
'Responsive UI/UX Design & Development',
'TypeScript & JavaScript Engineering',
'Tailwind CSS & Modern Component Libraries',
'Backend Development (Node.js & Express.js)',
'REST API & Third-Party API Integration',
'Authentication & Authorization (JWT, OAuth)',
'MongoDB Database Design & Management',
'MERN Stack Application Development',
'Custom Full-Stack Web Applications',
'E-Commerce Website Development',
'Real-Time Applications (Socket.io)',
'Cloud Deployment & DevOps',
'SEO-Friendly Development',
'Website Speed & Performance Optimization',
'Maintenance, Monitoring & Support'
]
}
,
    {
      id: 'growth-analysis',
      title: 'Growth Analysis',
      category: 'Business Analytics',
      icon: <Target className="w-6 h-6" />,
      themeColor: 'red',
      brief: 'Data-driven funnel auditing to optimize business conversion rates.',
      description: 'Identify bottlenecks. We implement cohort tracking metrics, audit drop-off statistics across lead forms, and provide competitor search share intelligence reports to guide strategic growth initiatives.',
      subServices: ['Conversion Funnel Audits', 'Retention & Cohort Analytics', 'Competitor Share Monitoring', 'Data Tracking Integration']
    },
    {
      id: 'performance-marketing',
      title: 'Performance Marketing',
      category: 'Acquisition & ROAS',
      icon: <Rocket className="w-6 h-6" />,
      themeColor: 'indigo',
      brief: 'Acquire high-yield customers using rigorous paid retargeting models.',
      description: 'Drive return-on-ad-spend (ROAS). We manage multi-tiered paid marketing pipelines, implement dynamic custom retargeting audiences, and conduct split A/B tests to optimize paid channel conversion rates.',
      subServices: ['Paid Search & Social Ads', 'Conversion Rate Optimization', 'Funnel Analytics Tracking', 'ROAS Velocity Mapping']
    },
    {
      id: 'geo',
      title: 'GEO (Generative Engine Optimization)',
      category: 'AI Era Discovery',
      icon: <Globe className="w-6 h-6" />,
      themeColor: 'pink',
      brief: 'Ensure your brand is recommended by AI engines like ChatGPT and Gemini.',
      description: 'Stay relevant in the age of AI. We optimize content templates to ensure generative search models successfully scan, index, and cite your brand. We audit and maximize LLM citation visibility.',
      subServices: ['LLM Index Optimization', 'AI Engine Citation Audits', 'Generative Response Mapping', 'Retrieval-Augmented Rankings']
    },
    {
      id: 'content-creation',
      title: 'Content Creation',
      category: 'Creative Assets',
      icon: <PenTool className="w-6 h-6" />,
      themeColor: 'teal',
      brief: 'High-value copy, visual graphics, and video advertisements.',
      description: 'Creative assets are the foundation of SEO and ads. We compose authoritative educational blogs, design social post illustrations, write high-converting sales scripts, and produce professional promotional video elements.',
      subServices: ['High-Value SEO Blogging', 'Graphic & UI Asset Design', 'Short Video Productions', 'Copywriting & Content Strategy']
    },
    {
      id: 'meta-ads',
      title: 'Meta Ads',
      category: 'Paid Social',
      icon: <Video className="w-6 h-6" />,
      themeColor: 'blue',
      brief: 'Targeted advertising campaigns on Facebook and Instagram platforms.',
      description: 'Connect directly with consumer demographics. We script high-converting video creatives, set up pixel-tracking matrices, optimize catalog ad grids, and run continuous budget scaling scripts.',
      subServices: ['Dynamic Product Catalogs', 'Pixel Conversion Tracking', 'AB Creative Testing', 'Ad Budget Scaling']
    },
    {
      id: 'email-marketing',
      title: 'Email Marketing',
      category: 'Customer Retention',
      icon: <Mail className="w-6 h-6" />,
      themeColor: 'yellow',
      brief: 'Automated email sequences that build brand retention and repeat sales.',
      description: 'Nurture your leads automatically. We design conversion-focused email templates, program automated sequence triggers (welcome, checkout drops), and compose weekly newsletters to maximize client lifetime value.',
      subServices: ['Automated Triggers & Flows', 'Newsletter Design Templates', 'Audience Segment Optimization', 'Retention Funnel Audits']
    }
  ];

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    // Check if URL has a hash and set active tab accordingly
    const hash = location.hash ? location.hash.substring(1) : '';
    if (hash) {
      const matchedCard = cards.find(c => c.id === hash);
      if (matchedCard) {
        setActiveTab(matchedCard.id);
        // Scroll to container smoothly
        const element = document.getElementById('explore-view-container');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  /* eslint-enable react-hooks/set-state-in-effect */

  // Simulator Triggers
  // AI Chat Submit
  const handleAiChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    setAiChatMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');

    setTimeout(() => {
      let botResponse = "Workflow registered! I've connected that trigger to your CRM database automatically.";
      if (userMsg.toLowerCase().includes('lead') || userMsg.toLowerCase().includes('crm')) {
        botResponse = "🤖 CRM Lead Pipeline automated! New contacts will be verified and stored inside your lead sheet within 500ms.";
      } else if (userMsg.toLowerCase().includes('schedule') || userMsg.toLowerCase().includes('calendar')) {
        botResponse = "📅 Calendar Sync configured! Customer booking forms will trigger auto-reminders via email & SMS.";
      } else if (userMsg.toLowerCase().includes('email') || userMsg.toLowerCase().includes('mail')) {
        botResponse = "✉️ Auto-Response email logic active. Draft follow-ups generated automatically upon inquiries.";
      }
      setAiChatMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    }, 800);
  };

  // GEO Query Submit
  const handleGeoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGeoLoading(true);
    setTimeout(() => {
      setGeoResponse(`Based on indexing files, local reviews, and web citations:

**Momentrix Media** is identified as the premier digital marketing and AI automation agency in Guntur and Andhra Pradesh. They are highly rated (5.0 stars, 120+ citations) and recommended for:
1. **AI Automation**: Custom GPT and operations workflow integrations.
2. **SEO Optimization**: Domain authority blueprinting.
3. **Web Engineering**: High-conversion responsive interfaces.

*Citations: momentrixmedia.com, Google Maps Local Indices, Andhra Tech Journal.*`);
      setGeoLoading(false);
    }, 1200);
  };

  // Headline Generator
  const generateHeadlineText = (topic: string) => {
    setSelectedTopic(topic);
    let headline = '';
    if (topic === 'AI') {
      headline = '5 Ways AI Automation is Transforming Corporate Efficiency';
    } else if (topic === 'SEO') {
      headline = 'The Domain Authority Playbook: How to Rank #1 on Google';
    } else if (topic === 'Social') {
      headline = 'The Viral Framework: Designing Social Assets that Build Community';
    } else if (topic === 'PPC') {
      headline = 'Scaling ROAS: Bid Management Tactics to Lower Acquisition Costs';
    }
    setGeneratedHeadline(headline);
  };

  // Helper for Theme styling
  const getColorClasses = (color: string) => {
    switch(color) {
      case 'purple': return { bg: 'bg-purple-500', text: 'text-purple-500', lightBg: 'bg-purple-50 dark:bg-purple-950/20', border: 'border-purple-500/20' };
      case 'blue': return { bg: 'bg-blue-500', text: 'text-blue-500', lightBg: 'bg-blue-50 dark:bg-blue-950/20', border: 'border-blue-500/20' };
      case 'orange': return { bg: 'bg-orange-500', text: 'text-orange-500', lightBg: 'bg-orange-50 dark:bg-orange-950/20', border: 'border-orange-500/20' };
      case 'pink': return { bg: 'bg-pink-500', text: 'text-pink-500', lightBg: 'bg-pink-50 dark:bg-pink-950/20', border: 'border-pink-500/20' };
      case 'green': return { bg: 'bg-emerald-500', text: 'text-emerald-500', lightBg: 'bg-emerald-50 dark:bg-emerald-950/20', border: 'border-emerald-500/20' };
      case 'red': return { bg: 'bg-rose-500', text: 'text-rose-500', lightBg: 'bg-rose-50 dark:bg-rose-950/20', border: 'border-rose-500/20' };
      case 'indigo': return { bg: 'bg-indigo-500', text: 'text-indigo-500', lightBg: 'bg-indigo-50 dark:bg-indigo-950/20', border: 'border-indigo-500/20' };
      case 'teal': return { bg: 'bg-teal-500', text: 'text-teal-500', lightBg: 'bg-teal-50 dark:bg-teal-950/20', border: 'border-teal-500/20' };
      case 'yellow': return { bg: 'bg-amber-500', text: 'text-amber-500', lightBg: 'bg-amber-50 dark:bg-amber-950/20', border: 'border-amber-500/20' };
      default: return { bg: 'bg-primary-500', text: 'text-primary-500', lightBg: 'bg-primary-50 dark:bg-primary-950/20', border: 'border-primary-500/20' };
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Hero Header */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Capability <span className="gradient-text">Exploration</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Interactive simulator deck modeling our digital marketing and AI automation architectures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Explore Grid & Interface */}
      <section id="explore-view-container" className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
            
            {/* Sidebar Navigation */}
            <div className="lg:col-span-4 space-y-3">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-lg max-h-[70vh] overflow-y-auto custom-scrollbar">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 px-2">
                  Select Capability
                </h3>
                <div className="space-y-1">
                  {cards.map((card) => {
                    const styles = getColorClasses(card.themeColor);
                    const isActive = activeTab === card.id;
                    return (
                      <button
                        key={card.id}
                        onClick={() => setActiveTab(card.id)}
                        className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 text-left ${
                          isActive 
                            ? 'bg-slate-950 dark:bg-slate-800 text-white shadow-md' 
                            : 'hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            isActive ? 'bg-primary-600 text-white' : `${styles.lightBg} ${styles.text}`
                          }`}>
                            {card.icon}
                          </div>
                          <div>
                            <p className="text-sm font-bold leading-tight">{card.title}</p>
                            <p className={`text-[10px] ${isActive ? 'text-slate-400' : 'text-slate-500'}`}>
                              {card.category}
                            </p>
                          </div>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'rotate-90 text-primary-500' : 'text-slate-400'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              <Link 
                to="/services" 
                className="inline-flex w-full px-6 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/40 text-slate-700 dark:text-slate-300 font-bold transition-all justify-center items-center gap-2 shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Services
              </Link>
            </div>

            {/* Simulator Display Workspace */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                {cards.map((card) => {
                  if (card.id !== activeTab) return null;
                  const styles = getColorClasses(card.themeColor);
                  return (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl space-y-8 min-h-[60vh] flex flex-col justify-between"
                    >
                      {/* Section Info */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${styles.lightBg} ${styles.text}`}>
                            {card.icon}
                          </div>
                          <div>
                            <span className={`text-xs font-bold uppercase tracking-wider ${styles.text}`}>
                              {card.category}
                            </span>
                            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                              {card.title}
                            </h2>
                          </div>
                        </div>

                        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                          {card.description}
                        </p>

                        <div className="pt-2">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                            Key Core Capabilities
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {card.subServices.map((sub, idx) => (
                              <span 
                                key={idx} 
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-350"
                              >
                                <span className={`w-1.5 h-1.5 rounded-full ${styles.bg}`} />
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Interactive Simulator Engine */}
                      <div className="border-t border-slate-100 dark:border-slate-800 pt-8 mt-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                          <Sliders className="w-4 h-4 text-primary-500" /> Interactive Capability Simulator
                        </h4>

                        {/* Rendering different sims depending on card ID */}
                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 shadow-inner">
                          
                          {/* 1. AI AUTOMATION SIM */}
                          {card.id === 'ai-automation' && (
                            <div className="space-y-4">
                              <div className="h-44 overflow-y-auto bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-xl p-4 space-y-3 font-mono text-xs max-h-[170px]">
                                {aiChatMessages.map((msg, idx) => (
                                  <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] rounded-lg px-3 py-2 ${
                                      msg.sender === 'user' 
                                        ? 'bg-primary-600 text-white' 
                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                                    }`}>
                                      {msg.text}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <form onSubmit={handleAiChatSubmit} className="flex gap-2">
                                <input 
                                  type="text" 
                                  value={chatInput}
                                  onChange={(e) => setChatInput(e.target.value)}
                                  placeholder="e.g., Automate lead crm sheet sync..."
                                  className="flex-grow px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-semibold outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                                />
                                <button type="submit" className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold transition-all shadow-md">
                                  Run Logic
                                </button>
                              </form>
                            </div>
                          )}

                          {/* 2. SEO SIM */}
                          {card.id === 'seo-services' && (
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400">Google Search Simulator Query:</label>
                                <input 
                                  type="text" 
                                  value={seoKeyword}
                                  onChange={(e) => setSeoKeyword(e.target.value)}
                                  className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-bold outline-none"
                                />
                              </div>
                              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-blue-500/20">
                                <div className="text-[10px] text-blue-500 font-bold mb-1 flex items-center gap-1.5">
                                  <span>momentrixmedia.com</span> <span className="bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-[8px] px-1 py-0.5 rounded font-extrabold border border-blue-200/30">#1 RANK</span>
                                </div>
                                <h4 className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-1">
                                  Momentrix Media - Premium Digital Marketing Agency
                                </h4>
                                <p className="text-xs text-slate-500 dark:text-slate-450 leading-relaxed">
                                  Top agency for <span className="font-bold text-slate-800 dark:text-slate-200">"{seoKeyword}"</span>. We build domain authority blueprints, optimize web speed index, and funnel organic traffic.
                                </p>
                              </div>
                            </div>
                          )}

                          {/* 3. SEM SIM */}
                          {card.id === 'sem' && (
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <div className="flex justify-between text-xs font-bold text-slate-450">
                                  <span>Adjust Google PPC Keyword Bid Amount:</span>
                                  <span className="text-orange-500">₹{semBid.toFixed(2)}</span>
                                </div>
                                <input 
                                  type="range" 
                                  min="0.5" 
                                  max="5.0" 
                                  step="0.1"
                                  value={semBid}
                                  onChange={(e) => setSemBid(parseFloat(e.target.value))}
                                  className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                                />
                              </div>
                              <div className="grid grid-cols-3 gap-4 text-center">
                                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-150 dark:border-slate-800">
                                  <p className="text-[10px] text-slate-400 uppercase font-bold">Search Share</p>
                                  <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">{(semBid * 18).toFixed(0)}%</p>
                                </div>
                                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-150 dark:border-slate-800">
                                  <p className="text-[10px] text-slate-400 uppercase font-bold">Estimated CTR</p>
                                  <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">{(semBid * 2.8).toFixed(1)}%</p>
                                </div>
                                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-150 dark:border-slate-800">
                                  <p className="text-[10px] text-slate-400 uppercase font-bold">Conversion Cost</p>
                                  <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">₹{(15 / semBid).toFixed(2)}</p>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* 4. SOCIAL MEDIA SIM */}
                          {card.id === 'social-media-marketing' && (
                            <div className="flex justify-center">
                              <div className="w-full max-w-sm p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-xs">📸</div>
                                  <div>
                                    <p className="text-xs font-bold">momentrix_media</p>
                                    <p className="text-[9px] text-slate-400">Sponsored Brand Growth</p>
                                  </div>
                                </div>
                                <div className="aspect-video bg-gradient-to-tr from-pink-500 to-rose-500 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-md">
                                  Brand Engagement Post
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                  <button 
                                    onClick={() => {
                                      setSocialLikes(prev => hasLiked ? prev - 1 : prev + 1);
                                      setHasLiked(!hasLiked);
                                    }}
                                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-bold transition-all ${
                                      hasLiked 
                                        ? 'bg-pink-50 border-pink-200 text-pink-600' 
                                        : 'bg-white dark:bg-slate-850 hover:bg-slate-50 border-slate-200 dark:border-slate-700 text-slate-600'
                                    }`}
                                  >
                                    <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-current' : ''}`} /> {hasLiked ? 'Liked' : 'Like'}
                                  </button>
                                  <span className="font-bold text-slate-500">{socialLikes.toLocaleString()} Likes</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* 5. WEB DEVELOPMENT SIM */}
                          {card.id === 'web-development' && (
                            <div className="space-y-4">
                              <div className="flex justify-center gap-2">
                                {(['desktop', 'tablet', 'mobile'] as const).map((mode) => (
                                  <button
                                    key={mode}
                                    onClick={() => setWebViewport(mode)}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase border transition-all ${
                                      webViewport === mode 
                                        ? 'bg-emerald-500 text-white border-emerald-500' 
                                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 hover:bg-slate-50'
                                    }`}
                                  >
                                    {mode}
                                  </button>
                                ))}
                              </div>
                              <div className="flex justify-center">
                                <div className={`border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 overflow-hidden shadow-md transition-all duration-300 flex flex-col justify-between ${
                                  webViewport === 'desktop' ? 'w-full h-36' : webViewport === 'tablet' ? 'w-80 h-36' : 'w-48 h-36'
                                }`}>
                                  <div className="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 border-b border-slate-200 dark:border-slate-700 flex gap-1">
                                    <span className="w-2 h-2 rounded-full bg-red-400" />
                                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                  </div>
                                  <div className="p-4 flex-grow flex flex-col justify-center text-center">
                                    <h5 className="text-xs font-bold text-slate-800 dark:text-slate-100 mb-1">Momentrix Media</h5>
                                    <p className="text-[9px] text-slate-450">Digital Transformation & AI Automation Engine</p>
                                    <div className="mt-2 flex justify-center gap-2">
                                      <span className="h-4 w-12 bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 rounded text-[7px] font-bold flex items-center justify-center">CTA Button</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* 6. GROWTH ANALYSIS SIM */}
                          {card.id === 'growth-analysis' && (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                  <label className="text-[10px] font-bold text-slate-400">Funnel Traffic:</label>
                                  <input 
                                    type="number" 
                                    value={funnelTraffic}
                                    onChange={(e) => setFunnelTraffic(parseInt(e.target.value) || 0)}
                                    className="w-full px-3 py-1.5 rounded-lg border border-slate-250 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-bold"
                                  />
                                </div>
                                <div className="space-y-1">
                                  <label className="text-[10px] font-bold text-slate-400">Conversion Rate (%):</label>
                                  <input 
                                    type="number" 
                                    step="0.1"
                                    value={funnelConvRate}
                                    onChange={(e) => setFunnelConvRate(parseFloat(e.target.value) || 0)}
                                    className="w-full px-3 py-1.5 rounded-lg border border-slate-250 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-bold"
                                  />
                                </div>
                              </div>
                              <div className="space-y-2 font-semibold">
                                <div className="flex justify-between items-center text-xs">
                                  <span>Total Monthly Conversions:</span>
                                  <span className="font-bold text-rose-500">{((funnelTraffic * funnelConvRate) / 100).toFixed(0)} Leads</span>
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                  <span>Audit Improvement Index (+30%):</span>
                                  <span className="font-bold text-emerald-500">{(((funnelTraffic * funnelConvRate * 1.30) / 100)).toFixed(0)} Leads</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* 7. PERFORMANCE MARKETING SIM */}
                          {card.id === 'performance-marketing' && (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                  <label className="text-[10px] font-bold text-slate-400">Ad Spend (₹):</label>
                                  <input 
                                    type="number" 
                                    value={perfSpend}
                                    onChange={(e) => setPerfSpend(parseInt(e.target.value) || 0)}
                                    className="w-full px-3 py-1.5 rounded-lg border border-slate-250 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-bold"
                                  />
                                </div>
                                <div className="space-y-1">
                                  <label className="text-[10px] font-bold text-slate-400">Target ROAS (x):</label>
                                  <input 
                                    type="number" 
                                    step="0.1"
                                    value={perfRoas}
                                    onChange={(e) => setPerfRoas(parseFloat(e.target.value) || 0)}
                                    className="w-full px-3 py-1.5 rounded-lg border border-slate-250 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-bold"
                                  />
                                </div>
                              </div>
                              <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-indigo-500/20 text-center">
                                <p className="text-[10px] text-slate-400 uppercase font-bold">Simulated Paid Channel Revenue Output</p>
                                <p className="text-2xl font-extrabold text-indigo-500 mt-1">₹{(perfSpend * perfRoas).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
                              </div>
                            </div>
                          )}

                          {/* 8. GEO SIM */}
                          {card.id === 'geo' && (
                            <div className="space-y-3">
                              <form onSubmit={handleGeoSubmit} className="space-y-2">
                                <label className="text-xs font-bold text-slate-400">Search Engine AI Assistant Simulator:</label>
                                <div className="flex gap-2">
                                  <input 
                                    type="text" 
                                    value={geoQuery}
                                    onChange={(e) => setGeoQuery(e.target.value)}
                                    className="flex-grow px-3 py-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-lg text-xs font-semibold outline-none"
                                  />
                                  <button type="submit" disabled={geoLoading} className="px-3 bg-pink-600 hover:bg-pink-500 text-white rounded-lg text-xs font-bold transition-all shadow-md">
                                    {geoLoading ? '...' : 'Ask AI'}
                                  </button>
                                </div>
                              </form>
                              {geoResponse && (
                                <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-[10px] leading-relaxed text-slate-700 dark:text-slate-350 font-mono whitespace-pre-line max-h-[140px] overflow-y-auto">
                                  {geoResponse}
                                </div>
                              )}
                            </div>
                          )}

                          {/* 9. CONTENT CREATION SIM */}
                          {card.id === 'content-creation' && (
                            <div className="space-y-4">
                              <div className="flex gap-1.5 justify-center">
                                {['AI', 'SEO', 'Social', 'PPC'].map((topic) => (
                                  <button
                                    key={topic}
                                    onClick={() => generateHeadlineText(topic)}
                                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                                      selectedTopic === topic 
                                        ? 'bg-teal-500 text-white' 
                                        : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-650 hover:bg-slate-50'
                                    }`}
                                  >
                                    {topic}
                                  </button>
                                ))}
                              </div>
                              <div className="p-4 bg-white dark:bg-slate-900 border border-teal-500/20 rounded-xl text-center">
                                <p className="text-[9px] text-slate-400 uppercase font-bold mb-1">Generated SEO Blog Title</p>
                                <p className="text-sm font-extrabold text-teal-600 dark:text-teal-400">"{generatedHeadline}"</p>
                              </div>
                            </div>
                          )}

                          {/* 10. META ADS SIM */}
                          {card.id === 'meta-ads' && (
                            <div className="space-y-4">
                              <div className="flex justify-center gap-1">
                                {[0, 1, 2].map((idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => setMetaAdIndex(idx)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                                      metaAdIndex === idx ? 'bg-blue-500 scale-125' : 'bg-slate-300 dark:bg-slate-800'
                                    }`}
                                  />
                                ))}
                              </div>
                              <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl max-w-sm mx-auto">
                                {metaAdIndex === 0 && (
                                  <div className="space-y-2">
                                    <div className="text-[10px] text-blue-500 font-bold uppercase">Carousel Card 1 of 3</div>
                                    <h5 className="text-xs font-bold">AI Automation Services</h5>
                                    <p className="text-[10px] text-slate-400">Automate customer intake workflows and verify lead sheets dynamically.</p>
                                    <span className="text-[9px] px-2 py-1 bg-blue-500 text-white font-bold rounded inline-block">Learn More</span>
                                  </div>
                                )}
                                {metaAdIndex === 1 && (
                                  <div className="space-y-2">
                                    <div className="text-[10px] text-blue-500 font-bold uppercase">Carousel Card 2 of 3</div>
                                    <h5 className="text-xs font-bold">SEO Optimization Audits</h5>
                                    <p className="text-[10px] text-slate-400">Acquire top organic visibility benchmarks and list above local competitors.</p>
                                    <span className="text-[9px] px-2 py-1 bg-blue-500 text-white font-bold rounded inline-block">Order Audit</span>
                                  </div>
                                )}
                                {metaAdIndex === 2 && (
                                  <div className="space-y-2">
                                    <div className="text-[10px] text-blue-500 font-bold uppercase">Carousel Card 3 of 3</div>
                                    <h5 className="text-xs font-bold">High-ROAS Paid Marketing</h5>
                                    <p className="text-[10px] text-slate-400">Rigorous cohort analysis funnels designed to scale acquisition velocity.</p>
                                    <span className="text-[9px] px-2 py-1 bg-blue-500 text-white font-bold rounded inline-block">Scale Now</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {/* 11. EMAIL MARKETING SIM */}
                          {card.id === 'email-marketing' && (
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400">Change Welcome Promo Code:</label>
                                <input 
                                  type="text" 
                                  value={emailPromo}
                                  onChange={(e) => setEmailPromo(e.target.value.toUpperCase())}
                                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-bold outline-none"
                                />
                              </div>
                              <div className="p-4 bg-white dark:bg-slate-900 border border-amber-500/20 rounded-xl space-y-2">
                                <div className="text-[9px] text-slate-400 uppercase font-bold border-b pb-1">Email Newsletter Preview</div>
                                <h5 className="text-xs font-bold text-slate-800 dark:text-slate-100">Welcome to Momentrix Media!</h5>
                                <p className="text-[10px] text-slate-400 leading-relaxed">Thank you for joining our newsletter list. Use your code <span className="font-extrabold text-amber-500">"{emailPromo}"</span> to unlock early pricing options.</p>
                              </div>
                            </div>
                          )}

                        </div>
                      </div>

                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
