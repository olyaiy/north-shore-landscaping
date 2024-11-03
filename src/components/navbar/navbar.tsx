'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (elementId: string) => {
    setIsMenuOpen(false);
    
    if (elementId === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(elementId.replace('#', ''));
    if (element) {
      const navbarHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed w-full z-50">
      {/* Desktop Navigation */}
      <div className="hidden md:block bg-white shadow-md">
        <div className="w-full px-4 max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <button 
                onClick={() => scrollToSection('#')} 
                className="text-emerald-800 font-extrabold text-xl"
              >
                NORTH SHORE LANDSCAPING
              </button>
            </div>

            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-bold"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Square hamburger button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="fixed top-4 right-4 p-2 bg-white rounded-md shadow-lg text-gray-600 hover:text-gray-900 focus:outline-none flex items-center justify-center w-12 h-12"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 relative flex items-center justify-center">
            <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-200 ease-in-out ${
              isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
            }`} />
            <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-200 ease-in-out ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`} />
            <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-200 ease-in-out ${
              isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
            }`} />
          </div>
        </button>

        {/* Animated mobile menu overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <motion.div 
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", bounce: 0, duration: 0.2 }}
                className="absolute right-4 left-4 top-20 bg-white rounded-lg shadow-xl"
                onClick={e => e.stopPropagation()}
              >
                {/* Logo Section */}
                <div className="p-4 border-b border-gray-100 rounded-t-lg">
                  <button 
                    onClick={() => scrollToSection('#')}
                    className="text-emerald-800 font-extrabold text-xl"
                  >
                    NORTH SHORE LANDSCAPING
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="py-2">
                  {navItems.map((item, index) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`w-full text-left text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-3
                        ${index === navItems.length - 1 ? 'rounded-b-lg' : ''}`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
} 