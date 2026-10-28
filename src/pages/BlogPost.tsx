import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { BLOG_POSTS, formatDate, getPostBySlug } from '../data/blogPosts';
import Breadcrumbs from '../components/Breadcrumbs';
import NotFound from './NotFound';

const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <NotFound />;

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <article className="container mx-auto px-4 md:px-6 max-w-3xl">
        <Breadcrumbs
          className="mb-8"
          items={[{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: post.title }]}
        />

        <header className="mb-8">
          <Link
            to={post.categoryLink}
            className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-bold text-xs uppercase mb-4 hover:underline"
          >
            {post.category}
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
            </span>
            {post.dateModified !== post.datePublished && (
              <span>
                Updated <time dateTime={post.dateModified}>{formatDate(post.dateModified)}</time>
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {post.readTime}
            </span>
          </div>
        </header>

        <img
          src={post.image}
          alt={post.imageAlt}
          width={1200}
          height={630}
          fetchPriority="high"
          className="w-full aspect-[1200/630] object-cover rounded-3xl mb-10 shadow-xl"
        />

        <div className="article">{post.content}</div>

        <div className="mt-12 p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
          <h2 className="text-2xl font-bold mb-3">Want results like these for your business?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Book a free consultation with our team in Guntur — we will review your website and marketing and suggest
            the quickest wins.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
          >
            Book a free consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>

      {related.length > 0 && (
        <section className="container mx-auto px-4 md:px-6 max-w-5xl mt-20">
          <h2 className="text-2xl font-bold mb-8">More articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-shadow bg-white dark:bg-slate-900"
              >
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  width={600}
                  height={315}
                  loading="lazy"
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <span className="text-xs font-bold uppercase text-primary-600">{p.category}</span>
                  <h3 className="font-bold mt-2 group-hover:text-primary-600 transition-colors">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;
