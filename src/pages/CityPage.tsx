import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { CITY_PAGES, type CityPage as CityData } from '../data/cities';
import { SITE } from '../seo/site';
import Breadcrumbs from '../components/Breadcrumbs';

const CityPage: React.FC<{ city: CityData }> = ({ city }) => {
  const others = CITY_PAGES.filter((c) => c.slug !== city.slug);
  const tel = SITE.phone.replace(/[^+\d]/g, '');

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <section className="container mx-auto px-4 md:px-6 max-w-5xl">
        <Breadcrumbs className="mb-8" items={[{ name: 'Home', path: '/' }, { name: city.city }]} />

        <header className="mb-12">
          <p className="flex items-center gap-2 text-primary-600 font-semibold mb-4">
            <MapPin className="w-4 h-4" /> {city.city}, {city.region}
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">{city.h1}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mb-8">{city.intro}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
            >
              Get a free consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${tel}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-800 font-semibold"
            >
              <Phone className="w-4 h-4" /> {SITE.phone.replace(/-/g, ' ')}
            </a>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 article">{city.content}</div>

          <aside className="space-y-6">
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h2 className="text-lg font-bold mb-4">Industries we serve in {city.city}</h2>
              <ul className="space-y-3">
                {city.industries.map((i) => (
                  <li key={i} className="flex gap-2 text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" /> {i}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h2 className="text-lg font-bold mb-3">{city.hasOffice ? 'Visit our office' : 'Our nearest office'}</h2>
              <address className="not-italic text-slate-600 dark:text-slate-300 leading-relaxed">
                {SITE.name}
                <br />
                {SITE.address.streetAddress}
                <br />
                {SITE.address.addressLocality}, {SITE.address.addressRegion} {SITE.address.postalCode}
                <br />
                <a href={`tel:${tel}`} className="text-primary-600 font-semibold">
                  {SITE.phone.replace(/-/g, ' ')}
                </a>
                <br />
                Mon–Sat, 09:00–18:00 IST
              </address>
            </div>
          </aside>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently asked questions</h2>
          <div className="space-y-4">
            {city.faqs.map((f) => (
              <details
                key={f.q}
                className="group p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
              >
                <summary className="font-semibold cursor-pointer list-none flex justify-between gap-4">
                  {f.q}
                  <span className="text-primary-600 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-slate-600 dark:text-slate-300">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-xl font-bold mb-4">Other areas we serve</h2>
          <div className="flex flex-wrap gap-3">
            {others.map((c) => (
              <Link
                key={c.slug}
                to={`/${c.slug}`}
                className="px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 hover:border-primary-500 hover:text-primary-600 transition-colors"
              >
                Digital marketing in {c.city}
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default CityPage;
