'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme');
    setIsDark(savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    // Apply theme to document
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300"
    >
      <motion.div
        animate={{
          x: isDark ? 24 : 0,
          backgroundColor: isDark ? '#fbbf24' : '#fbbf24'
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
        className="w-4 h-4 bg-yellow-400 rounded-full shadow-md"
      >
        {/* Sun/Moon Icon */}
        <motion.div
          animate={{
            rotate: isDark ? 180 : 0,
            scale: isDark ? 0.8 : 1
          }}
          transition={{
            duration: 0.3
          }}
          className="w-full h-full flex items-center justify-center text-xs"
        >
          {isDark ? '🌙' : '☀️'}
        </motion.div>
      </motion.div>
    </motion.button>
  );
} 