import React from 'react';
import { Link } from 'react-router-dom';

export interface CityFaq {
  q: string;
  a: string;
}

export interface CityPage {
  slug: string; // URL path segment, e.g. digital-marketing-agency-guntur
  city: string;
  region: string;
  metaTitle: string;
  description: string;
  h1: string;
  intro: string;
  hasOffice: boolean;
  industries: string[];
  content: React.ReactNode;
  faqs: CityFaq[];
}

export const CITY_PAGES: CityPage[] = [
  {
    slug: 'digital-marketing-agency-guntur',
    city: 'Guntur',
    region: 'Andhra Pradesh',
    metaTitle: 'Digital Marketing Agency in Guntur | Momentrix Media',
    description:
      'Momentrix Media is a Guntur-based digital marketing agency in Chandramouli Nagar offering SEO, Google & Meta ads, social media and website development.',
    h1: 'Digital Marketing Agency in Guntur',
    intro:
      'We are based in Chandramouli Nagar, Guntur, and help local businesses get found on Google, run profitable ad campaigns and turn their websites into lead generators.',
    hasOffice: true,
    industries: [
      'Hospitals, clinics and diagnostic centres',
      'Schools, colleges and coaching institutes',
      'Real estate developers and builders',
      'Retail, jewellery and textile showrooms',
      'Agri-trade, chilli and cotton businesses',
      'Restaurants, cafés and hospitality',
    ],
    content: (
      <>
        <h2>Why Guntur businesses work with a local agency</h2>
        <p>
          Guntur buyers search differently from metro audiences. Many searches mix Telugu and English, a large share
          happen on mobile, and people often compare a handful of nearby options before calling. A local team understands
          those habits, knows the neighbourhoods from Brodipet to Arundelpet, and can meet you in person when it matters.
        </p>

        <h2>Our services in Guntur</h2>
        <h3>Local SEO and Google Business Profile</h3>
        <p>
          We optimise your Google Business Profile, fix inconsistent business listings, build location pages and earn
          genuine reviews so you appear in the map results when people search for your service in Guntur. Learn more
          about our <Link to="/services/seo">SEO services</Link>.
        </p>
        <h3>Google Ads and Meta Ads</h3>
        <p>
          Radius-targeted campaigns that reach people in and around Guntur, with call and WhatsApp tracking so you know
          exactly which enquiries came from which ad. See our{' '}
          <Link to="/services/performance">performance marketing</Link> approach.
        </p>
        <h3>Social media management</h3>
        <p>
          Reels, posts and community management in Telugu and English, planned around local festivals, admission seasons
          and sale periods. Explore <Link to="/services/social">social media marketing</Link>.
        </p>
        <h3>Website design and development</h3>
        <p>
          Fast, mobile-first websites that load well on 4G and are built to rank. View our{' '}
          <Link to="/services/web">web development services</Link>.
        </p>

        <h2>Serving the wider Guntur region</h2>
        <p>
          From our Guntur office we also work with businesses in Tenali, Mangalagiri, Narasaraopet, Amaravati and{' '}
          <Link to="/digital-marketing-agency-vijayawada">Vijayawada</Link>.
        </p>
      </>
    ),
    faqs: [
      {
        q: 'Where is your Guntur office?',
        a: 'Our office is at Ground floor, 1-12, 25, 3rd Line, Chandramouli Nagar, Guntur, Andhra Pradesh 522007. We are open Monday to Saturday, 9:00 to 18:00 IST.',
      },
      {
        q: 'How long does local SEO take to show results in Guntur?',
        a: 'Google Business Profile improvements can show results within a few weeks. Ranking organic pages for competitive keywords usually takes three to six months, depending on your website and competition.',
      },
      {
        q: 'Do you create content in Telugu?',
        a: 'Yes. We create social media content, ad creatives and website pages in Telugu, English or both, depending on how your customers search.',
      },
      {
        q: 'Can you work with small businesses?',
        a: 'Yes. We plan campaigns around your budget and start with the channels most likely to bring enquiries quickly, usually Google Business Profile, search ads and WhatsApp-focused campaigns.',
      },
    ],
  },
  {
    slug: 'digital-marketing-agency-vijayawada',
    city: 'Vijayawada',
    region: 'Andhra Pradesh',
    metaTitle: 'Digital Marketing in Vijayawada | Momentrix Media',
    description:
      'SEO, Google & Meta ads, social media and web development for Vijayawada businesses, delivered by Momentrix Media from our nearby Guntur office.',
    h1: 'Digital Marketing for Vijayawada Businesses',
    intro:
      'Vijayawada is one of Andhra Pradesh’s busiest commercial centres. We help its retailers, dealers, clinics and service businesses win more customers online — from our office in nearby Guntur.',
    hasOffice: false,
    industries: [
      'Automobile dealerships and service centres',
      'Wholesale and retail trade',
      'Hospitals and speciality clinics',
      'Educational institutions',
      'Real estate in the Amaravati capital region',
      'Hotels, restaurants and event venues',
    ],
    content: (
      <>
        <h2>Marketing built for a competitive trading city</h2>
        <p>
          Vijayawada customers have plenty of choice. Whether someone is searching for a car service centre in
          Benz Circle, a clinic in Governorpet or a showroom on MG Road, they compare reviews, prices and photos before
          they call. Our job is to make sure your business shows up first and looks like the best option.
        </p>

        <h2>What we do for Vijayawada clients</h2>
        <h3>Search engine optimisation</h3>
        <p>
          Location-focused keyword research, Google Business Profile optimisation, technical fixes and content that
          answers the questions Vijayawada customers actually ask. See our <Link to="/services/seo">SEO services</Link>.
        </p>
        <h3>Lead-generation campaigns</h3>
        <p>
          Google Search, Performance Max and Meta lead campaigns with call, form and WhatsApp tracking, optimised for cost
          per qualified enquiry. Read about our <Link to="/services/performance">performance marketing</Link>.
        </p>
        <h3>Social media and video</h3>
        <p>
          Reels and creatives that showcase your products, offers and customer stories — in Telugu and English. Explore{' '}
          <Link to="/services/social">social media marketing</Link>.
        </p>
        <h3>Websites that convert</h3>
        <p>
          Fast, mobile-first websites with clear calls to action and built-in SEO. See{' '}
          <Link to="/services/web">web development</Link>.
        </p>

        <h2>How we work with you</h2>
        <p>
          Our team is based in <Link to="/digital-marketing-agency-guntur">Guntur</Link>, about 35 km away, so in-person
          strategy meetings are easy to arrange. Day-to-day we share progress over WhatsApp, video calls and monthly
          reports that tie spend to enquiries.
        </p>
      </>
    ),
    faqs: [
      {
        q: 'Do you have an office in Vijayawada?',
        a: 'Our office is in Guntur, around 35 km from Vijayawada. We serve Vijayawada clients remotely and meet in person whenever it is useful.',
      },
      {
        q: 'Which marketing channel works best for Vijayawada businesses?',
        a: 'It depends on what you sell. Local service businesses usually start with Google Business Profile and search ads, while retail and consumer brands often get faster results from Instagram and Facebook campaigns.',
      },
      {
        q: 'How do you report results?',
        a: 'You receive a monthly report covering leads, calls, cost per enquiry and rankings, plus a review call to agree next steps.',
      },
    ],
  },
  {
    slug: 'digital-marketing-agency-hyderabad',
    city: 'Hyderabad',
    region: 'Telangana',
    metaTitle: 'Digital Marketing for Hyderabad Brands | Momentrix Media',
    description:
      'Momentrix Media helps Hyderabad startups, clinics, real estate and service brands grow with SEO, Google & Meta ads, websites and AI automation.',
    h1: 'Digital Marketing & Web Development for Hyderabad Brands',
    intro:
      'Hyderabad is one of India’s most competitive digital markets. We help startups, healthcare providers, real estate firms and service businesses compete on search, social and paid media.',
    hasOffice: false,
    industries: [
      'Technology startups and SaaS companies',
      'Hospitals, clinics and wellness brands',
      'Real estate projects and developers',
      'Education and training providers',
      'D2C and e-commerce brands',
      'Professional services and consultancies',
    ],
    content: (
      <>
        <h2>Growth marketing for a metro market</h2>
        <p>
          In Hyderabad, cost-per-click is higher and competitors are more sophisticated. Winning requires sharper
          targeting, better landing pages and accurate measurement — whether your customers are in HITEC City,
          Gachibowli, Banjara Hills or Secunderabad.
        </p>

        <h2>Our Hyderabad services</h2>
        <h3>SEO and content</h3>
        <p>
          Technical SEO, topic clusters and location pages that build authority over time. For B2B and SaaS clients we
          focus on content that influences pipeline, not just traffic. See our <Link to="/services/seo">SEO services</Link>.
        </p>
        <h3>Performance marketing</h3>
        <p>
          Google Ads, Meta Ads and LinkedIn campaigns with server-side conversion tracking and CRM integration so bidding
          optimises for real revenue. Read about <Link to="/services/performance">performance marketing</Link>.
        </p>
        <h3>Web development</h3>
        <p>
          React and modern JavaScript websites, landing pages and portals that are fast, accessible and crawlable. See{' '}
          <Link to="/services/web">web development</Link>.
        </p>
        <h3>AI automation</h3>
        <p>
          Lead routing, chat assistants and automated reporting that save your team hours every week. Explore our{' '}
          <Link to="/explore#ai-automation">AI automation solutions</Link>.
        </p>

        <h2>Working together remotely</h2>
        <p>
          We work with Hyderabad clients from our Andhra Pradesh base in{' '}
          <Link to="/digital-marketing-agency-guntur">Guntur</Link>, through scheduled video calls, shared dashboards and
          regular reporting — and visit for workshops and launches when needed.
        </p>
      </>
    ),
    faqs: [
      {
        q: 'Do you work with Hyderabad startups?',
        a: 'Yes. We help startups set up tracking, launch search and social campaigns, build landing pages and create SEO content that supports fundraising and sales.',
      },
      {
        q: 'Is your team located in Hyderabad?',
        a: 'Our office is in Guntur, Andhra Pradesh. We work with Hyderabad clients remotely and travel for workshops and key meetings.',
      },
      {
        q: 'What budget do I need for Google Ads in Hyderabad?',
        a: 'It depends on your industry and goals. We recommend a test budget large enough to gather meaningful conversion data in the first month, then scale what works. We will suggest a figure after reviewing your market.',
      },
    ],
  },
];

export const getCityBySlug = (slug: string) => CITY_PAGES.find((c) => c.slug === slug);
