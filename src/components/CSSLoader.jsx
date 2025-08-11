'use client';

import { useEffect, useState } from 'react';

export default function CSSLoader() {
  const [cssLoaded, setCssLoaded] = useState(false);

  useEffect(() => {
    // Simple timeout approach - show loader for max 1.5 seconds
    const timer = setTimeout(() => {
      setCssLoaded(true);
    }, 1500);

    // Also try to detect when CSS is actually loaded
    const checkCSSLoaded = () => {
      try {
        // Check if Tailwind classes are available
        const testElement = document.createElement('div');
        testElement.className = 'bg-red-500 text-white p-2';
        testElement.style.display = 'none';
        document.body.appendChild(testElement);
        
        const computedStyle = window.getComputedStyle(testElement);
        const hasTailwind = computedStyle.backgroundColor !== 'rgba(0, 0, 0, 0)';
        
        document.body.removeChild(testElement);
        
        if (hasTailwind) {
          setCssLoaded(true);
          clearTimeout(timer);
        }
      } catch (error) {
        // If there's any error, just proceed
        setCssLoaded(true);
        clearTimeout(timer);
      }
    };

    // Check after a short delay
    const checkTimer = setTimeout(checkCSSLoaded, 200);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(checkTimer);
    };
  }, []);

  if (!cssLoaded) {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Loading Styles...</h2>
          <p className="text-gray-600 dark:text-gray-400">Please wait while we load the website styles</p>
        </div>
      </div>
    );
  }

  return null;
} 