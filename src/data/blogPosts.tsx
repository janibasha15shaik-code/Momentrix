import React from 'react';
import { Link } from 'react-router-dom';

export interface BlogPost {
  slug: string;
  title: string;
  /** <title> tag — keep under ~60 characters */
  metaTitle: string;
  /** meta description — keep between 120 and 160 characters */
  description: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  category: string;
  categoryLink: string;
  author: string;
  /** ISO dates (YYYY-MM-DD) */
  datePublished: string;
  dateModified: string;
  readTime: string;
  featured?: boolean;
  content: React.ReactNode;
}

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'future-of-ai-in-digital-marketing',
    title: 'The Future of AI in Digital Marketing',
    metaTitle: 'The Future of AI in Digital Marketing',
    description:
      'How AI is changing personalisation, ad buying, content and customer support — and a practical plan for Indian businesses to adopt it without wasting budget.',
    excerpt:
      'How artificial intelligence is reshaping personalization, predictive analytics, and campaign automation across all digital channels.',
    image: '/assets/ai-marketing-featured.webp',
    imageAlt: 'Illustration of AI tools powering a digital marketing dashboard',
    category: 'AI Automation',
    categoryLink: '/explore#ai-automation',
    author: 'Momentrix Media Team',
    datePublished: '2025-10-20',
    dateModified: '2026-10-01',
    readTime: '7 min read',
    featured: true,
    content: (
      <>
        <p>
          Artificial intelligence has moved from an experiment to everyday infrastructure in marketing. The ad platforms
          you already use — Google Ads, Meta Ads Manager, YouTube — now decide bids, audiences and even creative
          combinations with machine learning. Search engines summarise answers with AI before a user ever clicks. For a
          growing business in Guntur, Vijayawada or Hyderabad, the question is no longer <em>whether</em> to use AI, but
          where it actually pays for itself.
        </p>

        <h2>1. Ad platforms already run on AI — feed them better signals</h2>
        <p>
          Campaign types such as Google's Performance Max and Meta's Advantage+ use automated bidding and targeting. They
          work well only when they receive accurate conversion data. If your website reports every page view as a
          “lead”, the algorithm will happily find you more page views. The single highest-return AI task for most
          advertisers is therefore unglamorous: clean conversion tracking, offline conversion imports from your CRM, and
          clear separation between real enquiries and noise.
        </p>

        <h2>2. Personalisation at a practical scale</h2>
        <p>
          You do not need a data-science team to personalise. Segmenting WhatsApp and email lists by interest, sending
          different follow-ups to first-time and repeat customers, and showing location-specific landing pages already
          lift conversion rates. AI tools help write and test those variations quickly, but the strategy — who gets which
          message and why — still comes from understanding your customers.
        </p>

        <h2>3. Content creation: faster drafts, human judgement</h2>
        <p>
          Generative AI is excellent for outlines, first drafts, ad copy variations and translating content into Telugu
          or Hindi. Google's guidance is clear that it rewards helpful content regardless of how it is produced, but it
          also looks for first-hand experience and expertise. Use AI to speed up production, then add what only your
          business knows: real prices, real client questions, real photos and results.
        </p>

        <h2>4. AI search changes what “ranking” means</h2>
        <p>
          AI Overviews and chat-style search answer many questions directly. Pages that are cited in those answers tend
          to be well-structured, specific and trustworthy. That makes classic{' '}
          <Link to="/services/seo">SEO fundamentals</Link> more important, not less: clear headings, structured data,
          fast pages, consistent business details across the web, and content that answers questions precisely.
        </p>

        <h2>5. Automation that saves hours every week</h2>
        <ul>
          <li>Instant WhatsApp or email replies to new enquiries, routed to the right salesperson.</li>
          <li>Lead scoring that flags the enquiries most likely to convert.</li>
          <li>Automatic weekly performance reports pulled from ad and analytics accounts.</li>
          <li>Chat assistants that answer common questions on your website outside office hours.</li>
        </ul>

        <h2>A simple adoption plan</h2>
        <ol>
          <li>Fix tracking first so every AI-driven system optimises for real business outcomes.</li>
          <li>Automate one repetitive workflow (usually lead follow-up) and measure the time saved.</li>
          <li>Use AI for content drafts, but keep a human editor who knows your customers.</li>
          <li>Review results monthly and expand only what clearly works.</li>
        </ol>
        <p>
          If you want help deciding where AI fits in your marketing, see our{' '}
          <Link to="/explore#ai-automation">AI automation solutions</Link> or{' '}
          <Link to="/contact">book a free consultation</Link>.
        </p>
      </>
    ),
  },
  {
    slug: 'seo-trends-2026',
    title: '10 SEO Trends to Watch in 2026',
    metaTitle: '10 SEO Trends to Watch in 2026',
    description:
      'AI Overviews, E-E-A-T, local search, Core Web Vitals and more: the 10 SEO trends that matter in 2026 and what Indian businesses should do about each one.',
    excerpt:
      'Search algorithms are evolving faster than ever. Stay ahead of the curve with these top 10 SEO trends that will dominate this year.',
    image:
      'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Laptop showing search analytics charts on a desk',
    category: 'SEO',
    categoryLink: '/services/seo',
    author: 'Momentrix Media Team',
    datePublished: '2025-10-12',
    dateModified: '2026-10-01',
    readTime: '8 min read',
    content: (
      <>
        <p>
          Search keeps changing, but the direction is consistent: Google rewards sites that are genuinely useful, fast and
          trustworthy. Here are the ten trends we are planning around for our clients this year, with a practical action
          for each.
        </p>

        <h2>1. AI Overviews and zero-click answers</h2>
        <p>
          More queries are answered directly on the results page. Informational traffic for simple questions is falling,
          while clicks increasingly go to pages that offer depth, tools or a clear next step. <strong>Action:</strong>{' '}
          structure content with direct answers near the top, followed by detail that an AI summary cannot replace.
        </p>

        <h2>2. E-E-A-T is the filter for competitive topics</h2>
        <p>
          Experience, Expertise, Authoritativeness and Trust shape how Google evaluates content. <strong>Action:</strong>{' '}
          show who wrote each page, add real case studies, photos and credentials, and keep business details consistent
          everywhere.
        </p>

        <h2>3. Local SEO keeps growing</h2>
        <p>
          “Near me” and city-specific searches convert well. <strong>Action:</strong> fully complete your Google Business
          Profile, collect genuine reviews, and build a dedicated page for each city you serve — for example our{' '}
          <Link to="/digital-marketing-agency-guntur">Guntur</Link> and{' '}
          <Link to="/digital-marketing-agency-hyderabad">Hyderabad</Link> pages.
        </p>

        <h2>4. Core Web Vitals and INP</h2>
        <p>
          Interaction to Next Paint (INP) replaced First Input Delay as a Core Web Vital in 2024. Heavy JavaScript and
          slow third-party scripts hurt it. <strong>Action:</strong> audit scripts, compress images to WebP or AVIF, and
          test with PageSpeed Insights.
        </p>

        <h2>5. Structured data for richer results</h2>
        <p>
          Schema markup helps search engines understand your organisation, services, articles and FAQs.{' '}
          <strong>Action:</strong> add Organization, LocalBusiness, Service, Article and Breadcrumb markup, and validate
          it in the Rich Results Test.
        </p>

        <h2>6. Topical authority over single keywords</h2>
        <p>
          Ranking for one phrase is less about repeating it and more about covering the whole topic well.{' '}
          <strong>Action:</strong> build clusters — one main service page supported by articles that answer related
          questions and link back to it.
        </p>

        <h2>7. Video and visual search</h2>
        <p>
          Short videos and images appear across results pages, and YouTube is a major search engine in India.{' '}
          <strong>Action:</strong> add descriptive file names, alt text and captions, and publish short explainer videos
          for your key services.
        </p>

        <h2>8. Multilingual content for Indian audiences</h2>
        <p>
          Searches in Telugu, Hindi and mixed “Tenglish” are growing quickly. <strong>Action:</strong> where your
          customers search in regional languages, create properly translated pages rather than machine-only copies.
        </p>

        <h2>9. Brand mentions and digital PR</h2>
        <p>
          Links still matter, but quality beats quantity. Mentions in local news, industry associations and partner
          websites build trust. <strong>Action:</strong> replace bulk link-buying with outreach, partnerships and
          genuinely newsworthy content.
        </p>

        <h2>10. Technical hygiene for JavaScript sites</h2>
        <p>
          Modern React and single-page sites can hide content from crawlers if not set up correctly.{' '}
          <strong>Action:</strong> make sure every page ships its main content and metadata in the initial HTML through
          server-side rendering or prerendering — something we build into every{' '}
          <Link to="/services/web">website we develop</Link>.
        </p>

        <h2>Where to start</h2>
        <p>
          Most businesses get the fastest wins from local SEO, page speed and fixing technical issues. If you would like a
          prioritised list for your own website, <Link to="/contact">request a free SEO audit</Link>.
        </p>
      </>
    ),
  },
  {
    slug: 'instagram-reels-meta-ads-roi',
    title: 'Maximising ROI with Instagram Reels & Meta Ads',
    metaTitle: 'Maximising ROI with Instagram Reels & Meta Ads',
    description:
      'A practical playbook for Indian brands: creative, targeting, budgets and tracking that turn Instagram Reels and Meta Ads into measurable leads and sales.',
    excerpt:
      'How brands use short-form video on Instagram and Facebook to drive conversions — and the tracking that proves it works.',
    image:
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Smartphone showing social media apps',
    category: 'Social Media',
    categoryLink: '/services/social',
    author: 'Momentrix Media Team',
    datePublished: '2025-10-05',
    dateModified: '2026-10-01',
    readTime: '7 min read',
    content: (
      <>
        <p>
          Short-form video is now the default format on Instagram and Facebook. Reels reach people who do not follow you
          yet, and Meta's ad system can turn the best-performing ones into efficient paid campaigns. Here is the playbook
          we use to make that spend accountable.
        </p>

        <h2>Start with the offer, not the video</h2>
        <p>
          A Reel cannot rescue a weak offer. Before filming, decide exactly what the viewer should do next — book a
          consultation, claim a first-visit discount, download a price list, or message you on WhatsApp — and make that
          action easy.
        </p>

        <h2>Creative that stops the scroll</h2>
        <ul>
          <li>
            <strong>Hook in the first two seconds:</strong> show the result, the problem or a bold statement before the
            logo.
          </li>
          <li>
            <strong>Design for sound-off:</strong> add on-screen captions; many people watch muted.
          </li>
          <li>
            <strong>Look native:</strong> phone-shot, real people and real locations often beat polished studio ads.
          </li>
          <li>
            <strong>Speak your audience's language:</strong> Telugu or Hindi voice-overs frequently outperform English
            for local businesses.
          </li>
        </ul>

        <h2>Test organically, scale with ads</h2>
        <p>
          Post several Reels organically and watch retention, shares and saves. Promote the winners as ads. This keeps
          creative testing cheap and gives the ad algorithm content that already resonates.
        </p>

        <h2>Targeting: broad audiences, strong signals</h2>
        <p>
          Meta's delivery system usually finds buyers better than narrow interest stacks — provided it gets reliable
          conversion data. Set up the Meta Pixel and the Conversions API so that leads and purchases are reported
          accurately even when browsers block cookies. For local businesses, combine broad targeting with a sensible
          radius around your location.
        </p>

        <h2>Budget and measurement</h2>
        <ol>
          <li>Give each campaign enough budget to exit the learning phase before judging it.</li>
          <li>Judge performance on cost per qualified lead or sale, not on likes or reach.</li>
          <li>Refresh creative every few weeks as frequency rises and results fade.</li>
          <li>Retarget video viewers and website visitors with testimonials and offers.</li>
        </ol>

        <h2>Pair social with search</h2>
        <p>
          Social ads create demand; search captures it. Brands that run both usually see branded searches rise after a
          strong social campaign. Our <Link to="/services/social">social media marketing</Link> and{' '}
          <Link to="/services/performance">performance marketing</Link> teams plan the two together.{' '}
          <Link to="/contact">Talk to us</Link> about your next campaign.
        </p>
      </>
    ),
  },
  {
    slug: 'b2b-content-strategy-guide',
    title: 'The Ultimate Guide to B2B Content Strategy',
    metaTitle: 'B2B Content Strategy: Map Content to the Buyer Journey',
    description:
      'Stop publishing content that never converts. Map B2B content to each stage of the buyer journey, choose the right formats and measure pipeline impact.',
    excerpt:
      "Stop creating content that doesn't convert. Learn how to map your content to the complex B2B buyer's journey.",
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Team planning a content strategy around a table',
    category: 'Content Marketing',
    categoryLink: '/services/performance',
    author: 'Momentrix Media Team',
    datePublished: '2025-09-28',
    dateModified: '2026-10-01',
    readTime: '8 min read',
    content: (
      <>
        <p>
          B2B purchases involve several decision-makers, longer timelines and higher risk. Buyers research on their own
          long before they speak to sales. Good B2B content guides them through that research — and makes your company
          the obvious shortlist choice.
        </p>

        <h2>Step 1: Define your buyers and their questions</h2>
        <p>
          List the roles involved in a purchase — for example the owner, the finance head and the person who will use the
          product day to day. Talk to your sales team and existing clients, and write down the exact questions each role
          asks. Those questions become your content plan.
        </p>

        <h2>Step 2: Map content to the buyer journey</h2>
        <h3>Awareness — “Do I have a problem?”</h3>
        <p>
          Educational articles, short videos and LinkedIn posts that explain common problems and their costs. Aim for
          search visibility and shareability.
        </p>
        <h3>Consideration — “What are my options?”</h3>
        <p>
          Comparison guides, checklists, webinars and how-to articles. This is where you show expertise and capture
          email or WhatsApp contacts.
        </p>
        <h3>Decision — “Why this vendor?”</h3>
        <p>
          <Link to="/case-studies">Case studies</Link>, pricing explanations, implementation timelines, FAQs and
          testimonials. These pages should make it easy to book a call.
        </p>

        <h2>Step 3: Choose formats you can sustain</h2>
        <p>
          Consistency beats volume. Two in-depth articles a month, repurposed into LinkedIn posts, a newsletter and short
          videos, will outperform a burst of rushed content followed by silence.
        </p>

        <h2>Step 4: Build topic clusters for SEO</h2>
        <p>
          Create one strong pillar page for each core service and support it with articles that answer related
          questions. Link the articles to the pillar and to each other. This structure helps search engines understand
          your expertise and helps readers move naturally toward an enquiry.
        </p>

        <h2>Step 5: Measure pipeline, not page views</h2>
        <ul>
          <li>Track which pages people visit before they submit an enquiry.</li>
          <li>Ask new leads how they found you and record it in your CRM.</li>
          <li>Retire or update content that attracts traffic but never contributes to leads.</li>
        </ul>

        <h2>Distribution matters as much as creation</h2>
        <p>
          Promote each piece through LinkedIn, email, sales follow-ups and, where it makes sense, paid campaigns. Our{' '}
          <Link to="/services/performance">performance marketing framework</Link> amplifies the content that already
          converts. <Link to="/contact">Schedule a growth call</Link> to plan yours.
        </p>
      </>
    ),
  },
  {
    slug: 'core-web-vitals-why-speed-matters',
    title: 'Core Web Vitals: Why Speed Matters',
    metaTitle: 'Core Web Vitals Explained: LCP, INP & CLS',
    description:
      "What LCP, INP and CLS measure, the thresholds Google uses, and the fixes that make the biggest difference to your website's speed, rankings and leads.",
    excerpt:
      "A deep dive into Google's page experience signals and how optimizing your site speed can directly impact your bottom line.",
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Website performance analytics displayed on a laptop',
    category: 'Web Development',
    categoryLink: '/services/web',
    author: 'Momentrix Media Team',
    datePublished: '2025-09-15',
    dateModified: '2026-10-01',
    readTime: '6 min read',
    content: (
      <>
        <p>
          Most of your visitors arrive on a mobile phone, often on a patchy connection. If the page is slow or jumps
          around while loading, they leave — and Google notices. Core Web Vitals are Google's way of measuring that
          experience.
        </p>

        <h2>The three Core Web Vitals</h2>
        <ul>
          <li>
            <strong>Largest Contentful Paint (LCP)</strong> — how quickly the main content appears. Good: 2.5 seconds
            or less.
          </li>
          <li>
            <strong>Interaction to Next Paint (INP)</strong> — how quickly the page responds when someone taps or
            clicks. Good: 200 milliseconds or less. INP replaced First Input Delay in March 2024.
          </li>
          <li>
            <strong>Cumulative Layout Shift (CLS)</strong> — how much the layout jumps while loading. Good: 0.1 or less.
          </li>
        </ul>
        <p>
          Google assesses these using real-user data from Chrome, measured at the 75th percentile. In other words, most
          of your real visitors need a good experience — not just you on office Wi-Fi.
        </p>

        <h2>Why it matters for business</h2>
        <p>
          Page experience is one of many ranking signals, so speed alone will not push weak content to the top. But
          between comparable pages it can be the tie-breaker, and its effect on conversions is direct: faster pages keep
          more visitors, and more visitors become enquiries.
        </p>

        <h2>The fixes with the biggest impact</h2>
        <h3>Improve LCP</h3>
        <ul>
          <li>Serve images as WebP or AVIF, sized for the screen they are shown on.</li>
          <li>Do not lazy-load the main hero image; do lazy-load images further down the page.</li>
          <li>Use good hosting with a CDN and render the main content in the initial HTML.</li>
        </ul>
        <h3>Improve INP</h3>
        <ul>
          <li>Reduce and defer JavaScript, especially third-party chat, tracking and widget scripts.</li>
          <li>Split large bundles so each page loads only the code it needs.</li>
        </ul>
        <h3>Improve CLS</h3>
        <ul>
          <li>Set width and height on images and video embeds.</li>
          <li>Reserve space for banners and ads instead of inserting them above content.</li>
          <li>Load web fonts with a sensible fallback to avoid text jumping.</li>
        </ul>

        <h2>How to check your site</h2>
        <p>
          Run your key pages through{' '}
          <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer">
            PageSpeed Insights
          </a>{' '}
          and review the Core Web Vitals report in Google Search Console. Focus on the field data (real users) first.
        </p>
        <p>
          Need a faster site? Our <Link to="/services/web">web development team</Link> builds performance in from day
          one. <Link to="/contact">Request a site audit</Link>.
        </p>
      </>
    ),
  },
];

export const getPostBySlug = (slug: string | undefined) => BLOG_POSTS.find((p) => p.slug === slug);
