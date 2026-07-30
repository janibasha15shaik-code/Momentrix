import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, Calendar, User, Clock, X, ExternalLink } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  categoryLink: string;
  author: string;
  date: string;
  readTime: string;
  externalRefName?: string;
  externalRefUrl?: string;
  content: React.ReactNode;
}

const Blog: React.FC = () => {
  useSEO({
    title: 'Blog | SEO & Digital Marketing Insights',
    description: 'Stay ahead of search algorithm changes and performance marketing shifts. Read the latest SEO trends, Meta ad strategies, and automation guides.',
    keywords: 'Momentrix Media Blog, Digital Marketing Trends, SEO Blog Hyderabad, Meta Ads Strategy, Content Marketing Insights',
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": "https://www.momentrixmedia.com/blog#blog",
      "name": "Momentrix Media Insights Blog",
      "description": "Latest trends, strategies, and insights from our team of digital marketing experts.",
      "url": "https://www.momentrixmedia.com/blog",
      "publisher": {
        "@type": "Organization",
        "name": "Momentrix Media",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.momentrixmedia.com/assets/logo-dark.png"
        }
      },
      "blogPost": [
        {
          "@type": "BlogPosting",
          "headline": "10 SEO Trends to Watch in 2026",
          "url": "https://www.momentrixmedia.com/blog",
          "datePublished": "2025-10-12",
          "author": {
            "@type": "Person",
            "name": "Alex Morgan"
          },
          "description": "Search algorithms are evolving faster than ever. Stay ahead of the curve with these top 10 SEO trends that will dominate this year."
        },
        {
          "@type": "BlogPosting",
          "headline": "Maximizing ROI with TikTok Ads",
          "url": "https://www.momentrixmedia.com/blog",
          "datePublished": "2025-10-05",
          "author": {
            "@type": "Person",
            "name": "Sarah Jenkins"
          },
          "description": "Discover how brands are leveraging short-form video content to drive unprecedented conversion rates on TikTok."
        }
      ]
    }
  });

  const [activePost, setActivePost] = useState<Post | null>(null);

  const featuredPost: Post = {
    id: "featured-ai-marketing",
    title: "The Future of AI in Digital Marketing",
    excerpt: "How artificial intelligence is reshaping personalization, predictive analytics, and campaign automation across all digital channels.",
    image: "/assets/ai-marketing-featured.png",
    category: "AI Automation",
    categoryLink: "/explore#ai-automation",
    author: "Editorial Team",
    date: "Oct 20, 2025",
    readTime: "10 min read",
    externalRefName: "OpenAI Marketing Intelligence Report",
    externalRefUrl: "https://openai.com/research",
    content: (
      <div className="space-y-4 text-slate-600 dark:text-slate-300">
        <p>
          Artificial intelligence is no longer a peripheral technology; it has become the core driver of modern customer acquisition and automated retention workflows.
        </p>
        <p>
          By combining programmatic data pipelines with contextual LLM agents, brands can personalize touchpoints in real time. Learn more about our specialized{' '}
          <Link to="/explore#ai-automation" className="text-primary-600 font-semibold hover:underline">
            AI Automation Solutions
          </Link>{' '}
          and see how we integrate intelligent automation with our{' '}
          <Link to="/services/seo" className="text-primary-600 font-semibold hover:underline">
            Advanced SEO Architectures
          </Link>.
        </p>
        <p className="p-4 bg-slate-100 dark:bg-slate-800/60 rounded-xl border-l-4 border-primary-500 text-sm">
          <strong>External Reference:</strong> For official technical developer guidelines on AI-assisted search indexing, explore the{' '}
          <a href="https://developers.google.com/search/docs/fundamentals/ai-generated-content" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-semibold hover:underline inline-flex items-center gap-1">
            Google Search Central AI Guidance <ExternalLink className="w-3 h-3 inline" />
          </a>.
        </p>
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex gap-4">
          <Link to="/contact" className="px-6 py-2.5 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors">
            Book AI Consultation
          </Link>
          <Link to="/case-studies" className="px-6 py-2.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
            View Case Studies
          </Link>
        </div>
      </div>
    )
  };

  const posts: Post[] = [
    {
      id: "seo-trends-2026",
      title: "10 SEO Trends to Watch in 2026",
      excerpt: "Search algorithms are evolving faster than ever. Stay ahead of the curve with these top 10 SEO trends that will dominate this year.",
      image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&q=80&w=800",
      category: "SEO",
      categoryLink: "/services/seo",
      author: "Alex Morgan",
      date: "Oct 12, 2025",
      readTime: "6 min read",
      externalRefName: "Google Search Central Documentation",
      externalRefUrl: "https://developers.google.com/search",
      content: (
        <div className="space-y-4 text-slate-600 dark:text-slate-300">
          <p>
            Search Engine Optimization continues to move beyond simple keyword density toward deep semantic search intent, entity authority, and real-time site experience signals.
          </p>
          <p>
            If you want to secure top search rankings in high-competition niches, review our complete{' '}
            <Link to="/services/seo" className="text-primary-600 font-semibold hover:underline">
              SEO Services Blueprint
            </Link>{' '}
            or read how we pair SEO with{' '}
            <Link to="/services/web" className="text-primary-600 font-semibold hover:underline">
              High-Speed Web Development
            </Link>.
          </p>
          <p className="p-4 bg-slate-100 dark:bg-slate-800/60 rounded-xl border-l-4 border-primary-500 text-sm">
            <strong>External Reference:</strong> Read official structured data schemas at{' '}
            <a href="https://schema.org" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-semibold hover:underline inline-flex items-center gap-1">
              Schema.org Documentation <ExternalLink className="w-3 h-3 inline" />
            </a>.
          </p>
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex gap-4">
            <Link to="/contact" className="px-6 py-2.5 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors">
              Get Free SEO Audit
            </Link>
          </div>
        </div>
      )
    },
    {
      id: "tiktok-ads-roi",
      title: "Maximizing ROI with TikTok & Meta Ads",
      excerpt: "Discover how brands are leveraging short-form video content to drive unprecedented conversion rates on TikTok and Instagram.",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800",
      category: "Social Media",
      categoryLink: "/services/social",
      author: "Sarah Jenkins",
      date: "Oct 05, 2025",
      readTime: "8 min read",
      externalRefName: "Meta for Business Hub",
      externalRefUrl: "https://www.facebook.com/business",
      content: (
        <div className="space-y-4 text-slate-600 dark:text-slate-300">
          <p>
            Short-form organic and paid video strategies are producing higher engagement rates than static ad placements across major social networks.
          </p>
          <p>
            Explore our dedicated{' '}
            <Link to="/services/social" className="text-primary-600 font-semibold hover:underline">
              Social Media Marketing Services
            </Link>{' '}
            and pair your video funnels with our{' '}
            <Link to="/services/performance" className="text-primary-600 font-semibold hover:underline">
              Performance Marketing Campaigns
            </Link>.
          </p>
          <p className="p-4 bg-slate-100 dark:bg-slate-800/60 rounded-xl border-l-4 border-primary-500 text-sm">
            <strong>External Reference:</strong> Access advertising tools directly via the{' '}
            <a href="https://www.tiktok.com/business" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-semibold hover:underline inline-flex items-center gap-1">
              TikTok for Business Platform <ExternalLink className="w-3 h-3 inline" />
            </a>{' '}
            and{' '}
            <a href="https://www.facebook.com/business" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-semibold hover:underline inline-flex items-center gap-1">
              Meta Ads Manager <ExternalLink className="w-3 h-3 inline" />
            </a>.
          </p>
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex gap-4">
            <Link to="/contact" className="px-6 py-2.5 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors">
              Launch Social Campaign
            </Link>
          </div>
        </div>
      )
    },
    {
      id: "b2b-content-strategy",
      title: "The Ultimate Guide to B2B Content Strategy",
      excerpt: "Stop creating content that doesn't convert. Learn how to map your content to the complex B2B buyer's journey.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      category: "Content Marketing",
      categoryLink: "/services/performance",
      author: "David Chen",
      date: "Sep 28, 2025",
      readTime: "12 min read",
      externalRefName: "HubSpot Marketing Insights",
      externalRefUrl: "https://www.hubspot.com/resources",
      content: (
        <div className="space-y-4 text-slate-600 dark:text-slate-300">
          <p>
            B2B buyers go through multiple consideration phases before booking a sales consultation. High-converting content aligns with every stage of the sales pipeline.
          </p>
          <p>
            Discover how we build multi-touch acquisition funnels in our{' '}
            <Link to="/services/performance" className="text-primary-600 font-semibold hover:underline">
              Performance Marketing Framework
            </Link>{' '}
            or read real client outcomes in our{' '}
            <Link to="/case-studies" className="text-primary-600 font-semibold hover:underline">
              Client Case Studies
            </Link>.
          </p>
          <p className="p-4 bg-slate-100 dark:bg-slate-800/60 rounded-xl border-l-4 border-primary-500 text-sm">
            <strong>External Reference:</strong> Learn more about standard B2B research methodologies on the{' '}
            <a href="https://www.gartner.com/en/marketing" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-semibold hover:underline inline-flex items-center gap-1">
              Gartner Marketing Hub <ExternalLink className="w-3 h-3 inline" />
            </a>.
          </p>
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex gap-4">
            <Link to="/contact" className="px-6 py-2.5 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors">
              Schedule Growth Call
            </Link>
          </div>
        </div>
      )
    },
    {
      id: "core-web-vitals-speed",
      title: "Core Web Vitals: Why Speed Matters",
      excerpt: "A deep dive into Google's page experience signals and how optimizing your site speed can directly impact your bottom line.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      category: "Web Development",
      categoryLink: "/services/web",
      author: "Emily Taylor",
      date: "Sep 15, 2025",
      readTime: "5 min read",
      externalRefName: "Google PageSpeed Insights Tool",
      externalRefUrl: "https://pagespeed.web.dev",
      content: (
        <div className="space-y-4 text-slate-600 dark:text-slate-300">
          <p>
            Sub-second website loading speeds significantly reduce bounce rates and boost organic rankings across mobile and desktop devices.
          </p>
          <p>
            Learn about our headless architecture capabilities on our{' '}
            <Link to="/services/web" className="text-primary-600 font-semibold hover:underline">
              Web Development Page
            </Link>{' '}
            and check our{' '}
            <Link to="/portfolio" className="text-primary-600 font-semibold hover:underline">
              Web Development Portfolio
            </Link>.
          </p>
          <p className="p-4 bg-slate-100 dark:bg-slate-800/60 rounded-xl border-l-4 border-primary-500 text-sm">
            <strong>External Reference:</strong> Benchmark your domain using Google's official{' '}
            <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-semibold hover:underline inline-flex items-center gap-1">
              PageSpeed Insights Engine <ExternalLink className="w-3 h-3 inline" />
            </a>.
          </p>
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex gap-4">
            <Link to="/contact" className="px-6 py-2.5 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors">
              Request Site Audit
            </Link>
          </div>
        </div>
      )
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
            Insights & <span className="gradient-text">News</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400"
          >
            Latest trends, strategies, and insights from our team of digital marketing experts.
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => setActivePost(featuredPost)}
            className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
            <img 
              src={featuredPost.image} 
              alt={featuredPost.title} 
              loading="lazy"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full md:w-3/4">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
                  Featured Insight
                </span>
                <Link 
                  to={featuredPost.categoryLink}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold transition-colors"
                >
                  {featuredPost.category}
                </Link>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:text-primary-400 transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-slate-300 text-lg mb-6 line-clamp-2 md:line-clamp-none">
                {featuredPost.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2"><User className="w-4 h-4" /> {featuredPost.author}</div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {featuredPost.date}</div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {featuredPost.readTime}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-3xl font-bold">Latest Articles</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <motion.div 
                key={post.id || idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActivePost(post)}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-shadow group flex flex-col h-full cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Link 
                    to={post.categoryLink}
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm transition-colors"
                  >
                    {post.category}
                  </Link>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                    <span className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-1 transition-colors">
                      Read <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Article Reader Modal */}
      <AnimatePresence>
        {activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 md:p-8"
            >
              <button 
                onClick={() => setActivePost(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <Link 
                  to={activePost.categoryLink} 
                  className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-bold text-xs uppercase mb-3 hover:underline"
                >
                  {activePost.category}
                </Link>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
                  {activePost.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {activePost.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {activePost.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {activePost.readTime}</span>
                </div>
              </div>

              <div className="mb-6 rounded-2xl overflow-hidden h-64">
                <img src={activePost.image} alt={activePost.title} className="w-full h-full object-cover" />
              </div>

              <div className="mb-6">
                {activePost.content}
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-sm text-slate-500">
                <Link to="/blog" onClick={() => setActivePost(null)} className="hover:text-primary-600 font-medium">
                  ← Back to Insights
                </Link>
                {activePost.externalRefUrl && (
                  <a 
                    href={activePost.externalRefUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary-600 font-semibold hover:underline inline-flex items-center gap-1 text-xs"
                  >
                    {activePost.externalRefName || 'External Source'} <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;

