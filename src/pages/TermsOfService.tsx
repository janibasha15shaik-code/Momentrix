import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { FileText, Award, AlertCircle, HelpCircle } from 'lucide-react';

const TermsOfService: React.FC = () => {
  useSEO({
    title: 'Terms of Service',
    description: 'Read the Terms of Service of Momentrix Media. Review intellectual property rights, liability limitations, and governing laws.',
    keywords: 'Terms of Service Momentrix Media, Terms of Use, Service Agreement, Web Terms, Legal Guntur',
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.momentrixmedia.com/terms-of-service#webpage",
      "name": "Terms of Service - Momentrix Media",
      "description": "Read our terms of service and website usage rules.",
      "url": "https://www.momentrixmedia.com/terms-of-service",
      "publisher": {
        "@type": "Organization",
        "name": "Momentrix Media",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.momentrixmedia.com/assets/logo-dark.png"
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
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Last Updated: June 13, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-xl space-y-10"
          >
            {/* Agreement */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FileText className="text-primary-600 w-6 h-6" /> 1. Acceptance of Terms
              </h2>
              <p className="text-slate-600 dark:text-slate-450 leading-relaxed">
                By accessing or using the website of Momentrix Media, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use this site or access our services.
              </p>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Award className="text-blue-500 w-6 h-6" /> 2. Intellectual Property Rights
              </h2>
              <p className="text-slate-600 dark:text-slate-450 leading-relaxed">
                All content, layout, designs, logos, images, code, and materials on this site are the exclusive property of Momentrix Media and are protected by applicable copyright, trademark, and intellectual property laws. Unauthorized reproduction, modification, or distribution is strictly prohibited.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <AlertCircle className="text-red-500 w-6 h-6" /> 3. Limitation of Liability
              </h2>
              <p className="text-slate-600 dark:text-slate-450 leading-relaxed">
                Momentrix Media shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use this website, or for the cost of procurement of substitute services.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <HelpCircle className="text-orange-500 w-6 h-6" /> 4. Governing Law
              </h2>
              <p className="text-slate-605 dark:text-slate-450 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of India, specifically within the jurisdiction of the state of Andhra Pradesh, without regard to conflict of law principles.
              </p>
            </div>

            {/* Contact Details */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold mb-2">Questions or Comments?</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                If you have any questions about our Terms of Service, please contact us at: <br />
                <a href="mailto:info@momentrixmedia.com" className="text-primary-600 hover:underline font-semibold">info@momentrixmedia.com</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
