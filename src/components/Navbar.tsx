import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const isServiceSubpage = location.pathname.startsWith('/services/') && location.pathname !== '/services';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and reset scroll state on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setIsScrolled(window.scrollY > 20);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
  ];

  const services = [
    { name: 'AI Automation', path: '/explore#ai-automation' },
    { name: 'SEO Optimization', path: '/services/seo' },
    { name: 'Social Media', path: '/services/social' },
    { name: 'Web Development', path: '/services/web' },
    { name: 'Performance Marketing', path: '/services/performance' },
  ];

  // Dynamic colors depending on whether the page has a dark hero background at the top
  const isHeaderTransparent = !isScrolled && !mobileMenuOpen;
  const linkColorClass = isHeaderTransparent && isServiceSubpage
    ? 'text-white/90 hover:text-primary-300'
    : 'text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400';

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 will-change-[background-color,border-color,box-shadow] border-b py-4 ${
        isScrolled || mobileMenuOpen
          ? 'bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border-slate-200 dark:border-slate-800/80 shadow-sm' 
          : 'bg-transparent border-transparent shadow-none'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Logo 
          size="md" 
          textColorClass={isHeaderTransparent && isServiceSubpage ? 'text-white' : undefined}
          forceDarkThemeLogo={isHeaderTransparent && isServiceSubpage}
        />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, 2).map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium transition-colors duration-300 ${linkColorClass}`}
            >
              {link.name}
            </Link>
          ))}
          
          <div 
            className="relative group"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <Link 
              to="/services"
              className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 py-2 ${linkColorClass}`}
            >
              Services <ChevronDown className="w-4 h-4" />
            </Link>
            
            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-56 p-2 rounded-xl shadow-lg glass"
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-4 py-2 text-sm rounded-lg text-slate-700 dark:text-slate-200 hover:bg-primary-50 dark:hover:bg-slate-800 hover:text-primary-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="border-t border-slate-200 dark:border-slate-700 mt-2 pt-2">
                    <Link 
                      to="/services" 
                      className="block px-4 py-2 text-sm font-medium text-primary-600 rounded-lg hover:bg-primary-50 dark:hover:bg-slate-800"
                    >
                      View All Services
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(2).map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium transition-colors duration-300 ${linkColorClass}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link 
            to="/contact" 
            className="px-6 py-2.5 rounded-full bg-primary-600 text-white font-medium text-sm hover:bg-primary-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 -mr-2 transition-colors duration-300 ${
              isHeaderTransparent && isServiceSubpage 
                ? 'text-white hover:text-primary-300' 
                : 'text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden glass border-t border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {/* Home & About Links */}
              {navLinks.slice(0, 2).map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-lg font-medium py-2 border-b border-slate-100 dark:border-slate-800"
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Services Accordion (Click to expand) */}
              <div className="py-1 border-b border-slate-100 dark:border-slate-800">
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full text-left text-lg font-medium py-2 flex justify-between items-center hover:text-primary-500 transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown 
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      mobileServicesOpen ? 'rotate-180' : 'rotate-0'
                    }`} 
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-3.5 pl-5 ml-2 border-l border-slate-200 dark:border-slate-800/80 pb-2 pt-1">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors duration-200"
                          >
                            {service.name}
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Portfolio, Case Studies, & Blog Links */}
              {navLinks.slice(2).map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-lg font-medium py-2 border-b border-slate-100 dark:border-slate-800"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="mt-4 px-6 py-3 rounded-full bg-primary-600 text-white font-medium text-center hover:bg-primary-700 transition-colors w-full"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
