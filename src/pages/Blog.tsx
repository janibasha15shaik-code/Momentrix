import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { BLOG_POSTS, formatDate } from '../data/blogPosts';

const Blog: React.FC = () => {
  const featuredPost = BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0];
  const posts = BLOG_POSTS.filter((p) => p !== featuredPost);

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
            Digital Marketing & SEO <span className="gradient-text">Insights</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400"
          >
            Practical guides on SEO, paid ads, social media, web performance and AI automation from our team in Guntur.
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
            className="relative rounded-3xl overflow-hidden shadow-2xl group"
          >
            <Link to={`/blog/${featuredPost.slug}`} className="block" aria-label={featuredPost.title}>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
            <img 
              src={featuredPost.image}
              alt={featuredPost.imageAlt}
              width={1200}
              height={500}
              fetchPriority="high"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full md:w-3/4">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
                  Featured Insight
                </span>
                <span className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold transition-colors">{featuredPost.category}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:text-primary-400 transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-slate-300 text-lg mb-6 line-clamp-2 md:line-clamp-none">
                {featuredPost.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2"><User className="w-4 h-4" /> {featuredPost.author}</div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> <time dateTime={featuredPost.datePublished}>{formatDate(featuredPost.datePublished)}</time></div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {featuredPost.readTime}</div>
              </div>
            </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <motion.div 
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-shadow group flex flex-col h-full relative"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.imageAlt}
                    width={800}
                    height={448}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm transition-colors">{post.category}</span>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time></span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    <Link to={`/blog/${post.slug}`} className="after:absolute after:inset-0">{post.title}</Link>
                  </h3>
                  
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

    </div>
  );
};

export default Blog;

