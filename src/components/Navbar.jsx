'use client';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSearch, FaUser, FaBell } from 'react-icons/fa';
import NewLogo from './NewLogo';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Memoized navigation items for better performance
  const navigation = useMemo(() => [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Services', href: '/services', icon: '💇' },
    { name: 'Academy', href: '/academy', icon: '🎓' },
    { name: 'Blog', href: '/blog', icon: '📝' },
    { name: 'Contact', href: '/contact', icon: '📞' }
  ], []);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 50);
    
    // Update active section based on scroll position
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        setActiveSection(section.id);
      }
    });
  }, []);

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  // Throttle function for performance
  const throttle = (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close mobile menu on route change
  const handleNavClick = (href) => {
    setIsOpen(false);
    // Add smooth scroll for same-page navigation
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-black/95 backdrop-blur-md shadow-lg' 
          : 'py-4 bg-black/80 backdrop-blur-sm'
      }`}
      style={{
        borderBottom: isScrolled ? '1px solid rgba(220, 38, 38, 0.3)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3"
          >
            <NewLogo className="w-10 h-10 sm:w-12 sm:h-12" />
            <span className="hidden sm:block text-white font-bold text-lg">
              Salon Academy
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group px-4 py-2 rounded-lg transition-all duration-300 hover:bg-red-800/20"
                onClick={() => handleNavClick(item.href)}
              >
                <span className="flex items-center space-x-2 text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.name}</span>
                </span>
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-800 to-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Search Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-white hover:text-blue-400 transition-colors duration-300"
              aria-label="Search"
            >
              <FaSearch size={18} />
            </motion.button>

            {/* Notifications */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-white hover:text-blue-400 transition-colors duration-300 relative"
              aria-label="Notifications"
            >
              <FaBell size={18} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-800 rounded-full animate-pulse"></span>
            </motion.button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Book Now Button */}
            <motion.a
              href="/booking"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-white font-medium hover:text-blue-400 transition-colors duration-300"
              onClick={() => handleNavClick('/booking')}
            >
              Book Now
            </motion.a>

            {/* Enroll Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-red-800 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-red-700 hover:to-blue-700"
            >
              Enroll
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-blue-400 transition-colors duration-300"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden mobile-menu overflow-hidden"
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="py-6 space-y-4"
              >
                {/* Mobile Navigation Items */}
                <div className="grid grid-cols-2 gap-4">
                  {navigation.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-4 bg-red-800/20 rounded-lg text-white hover:bg-red-800/30 transition-all duration-300"
                      onClick={() => handleNavClick(item.href)}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                </motion.a>
              ))}
                </div>

                {/* Mobile CTA Section */}
                <div className="pt-6 border-t border-red-800/30 space-y-4">
                <motion.a
                  href="/booking"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-center space-x-3 w-full p-4 bg-gradient-to-r from-red-800 to-blue-600 text-white font-semibold rounded-lg"
                    onClick={() => handleNavClick('/booking')}
                  >
                    <span>📅</span>
                    <span>Book Now</span>
                </motion.a>
                  
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="w-full p-4 bg-blue-600/20 text-white font-semibold rounded-lg hover:bg-blue-600/30 transition-all duration-300"
                  >
                    🎓 Enroll in Academy
                </motion.button>
              </div>

                {/* Mobile Quick Actions */}
                <div className="flex justify-center space-x-6 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="p-3 text-white hover:text-blue-400 transition-colors duration-300"
                    aria-label="Search"
                  >
                    <FaSearch size={20} />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="p-3 text-white hover:text-blue-400 transition-colors duration-300"
                    aria-label="User profile"
                  >
                    <FaUser size={20} />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="p-3 text-white hover:text-blue-400 transition-colors duration-300 relative"
                    aria-label="Notifications"
                  >
                    <FaBell size={20} />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-800 rounded-full animate-pulse"></span>
                  </motion.button>
          </div>
        </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
} 