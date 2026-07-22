import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';

const Blog: React.FC = () => {
  useSEO({
    title: 'Digital Marketing & SEO Insights Blog',
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

  const posts = [
    {
      title: "10 SEO Trends to Watch in 2026",
      excerpt: "Search algorithms are evolving faster than ever. Stay ahead of the curve with these top 10 SEO trends that will dominate this year.",
      image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&q=80&w=800",
      category: "SEO",
      author: "Alex Morgan",
      date: "Oct 12, 2025",
      readTime: "6 min read"
    },
    {
      title: "Maximizing ROI with TikTok Ads",
      excerpt: "Discover how brands are leveraging short-form video content to drive unprecedented conversion rates on TikTok.",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800",
      category: "Social Media",
      author: "Sarah Jenkins",
      date: "Oct 05, 2025",
      readTime: "8 min read"
    },
    {
      title: "The Ultimate Guide to B2B Content Strategy",
      excerpt: "Stop creating content that doesn't convert. Learn how to map your content to the complex B2B buyer's journey.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      category: "Content Marketing",
      author: "David Chen",
      date: "Sep 28, 2025",
      readTime: "12 min read"
    },
    {
      title: "Core Web Vitals: Why Speed Matters",
      excerpt: "A deep dive into Google's page experience signals and how optimizing your site speed can directly impact your bottom line.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      category: "Web Development",
      author: "Emily Taylor",
      date: "Sep 15, 2025",
      readTime: "5 min read"
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
            className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
            <img 
              src="/assets/ai-marketing-featured.png" 
              alt="Featured Post" 
              loading="lazy"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full md:w-3/4">
              <span className="bg-primary-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                Featured Insight
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:text-primary-400 transition-colors">
                The Future of AI in Digital Marketing
              </h2>
              <p className="text-slate-300 text-lg mb-6 line-clamp-2 md:line-clamp-none">
                How artificial intelligence is reshaping personalization, predictive analytics, and campaign automation across all digital channels.
              </p>
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2"><User className="w-4 h-4" /> Editorial Team</div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Oct 20, 2025</div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> 10 min read</div>
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
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-shadow group flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    {post.category}
                  </div>
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
                    <button className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-1 transition-colors">
                      Read <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
