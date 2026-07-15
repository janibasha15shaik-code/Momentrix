import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { ShieldCheck, Eye, Lock, RefreshCw } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  useSEO({
    title: 'Privacy Policy',
    description: 'Read the Privacy Policy of Momentrix Media. Learn about our commitments to protecting your personal data, privacy settings, and security standards.',
    keywords: 'Privacy Policy Momentrix Media, Data Protection, Cookie Policy, Compliance Guntur',
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy - Momentrix Media",
      "description": "Learn about our data collection and privacy practices.",
      "url": "https://momentrixmedia.com/privacy-policy",
      "publisher": {
        "@type": "Organization",
        "name": "Momentrix Media",
        "logo": {
          "@type": "ImageObject",
          "url": "https://momentrixmedia.com/assets/logo-dark.png"
        }
      }
    }
  });

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Hero Header */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Last Updated: June 13, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-xl space-y-10"
          >
            {/* Intro */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <ShieldCheck className="text-primary-600 w-6 h-6" /> 1. Introduction
              </h2>
              <p className="text-slate-600 dark:text-slate-450 leading-relaxed">
                Welcome to Momentrix Media. We are committed to protecting your personal data and respecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or interact with our digital transformation, SEO, web development, and performance marketing services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Eye className="text-blue-500 w-6 h-6" /> 2. Information We Collect
              </h2>
              <p className="text-slate-600 dark:text-slate-450 leading-relaxed mb-4">
                We may collect personal identification information from you in a variety of ways, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-450 pl-2">
                <li><strong>Identity Data:</strong> First name, last name, and job title.</li>
                <li><strong>Contact Data:</strong> Email address, phone number, and physical office address.</li>
                <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, operating system, and platform.</li>
                <li><strong>Usage Data:</strong> Information about how you navigate and interact with our website.</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Lock className="text-emerald-500 w-6 h-6" /> 3. How We Use Your Information
              </h2>
              <p className="text-slate-600 dark:text-slate-450 leading-relaxed mb-4">
                We use the information we collect to provide and maintain our services, specifically:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-450 pl-2">
                <li>To respond to your inquiries made via our Contact Form.</li>
                <li>To send periodic digital marketing insights and newsletters (only if you subscribe).</li>
                <li>To improve our website navigation, loading speeds, and overall user experience.</li>
                <li>To comply with legal obligations and prevent fraudulent activity.</li>
              </ul>
            </div>

            {/* Changes to this Policy */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <RefreshCw className="text-orange-500 w-6 h-6" /> 4. Updates to this Policy
              </h2>
              <p className="text-slate-605 dark:text-slate-450 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this page periodically for any changes.
              </p>
            </div>

            {/* Contact Details */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold mb-2">Contact Us</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                If you have any questions about this Privacy Policy, please reach out to us at: <br />
                <a href="mailto:info@momentrixmedia.com" className="text-primary-600 hover:underline font-semibold">info@momentrixmedia.com</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
