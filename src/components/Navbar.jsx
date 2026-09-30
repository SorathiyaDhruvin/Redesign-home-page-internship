import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'About', href: '#about' },
  { name: 'Resources', href: '#resources' },
  { name: 'Clients', href: '#clients' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? 'glass-effect shadow-sm py-4 border-gray-200' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Cling Logo typography representation */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded bg-brand-red flex items-center justify-center">
                <span className="text-white font-bold text-xl leading-none">C</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-brand-navy">
                CLING
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Let's Talk Button */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-navy text-white text-sm font-medium hover:bg-brand-blue transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-brand-navy focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect border-t border-gray-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50/50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="#contact"
                  className="flex items-center justify-center w-full gap-2 px-5 py-3 rounded-full bg-brand-navy text-white text-base font-medium hover:bg-brand-blue transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Let's Talk
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
