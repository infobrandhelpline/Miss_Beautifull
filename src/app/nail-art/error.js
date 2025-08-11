'use client';

import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Nail Art Page Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="bg-red-900 bg-opacity-20 border border-red-500 rounded-lg p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-red-400 mb-4">Something went wrong!</h2>
            <p className="text-gray-300 mb-4">
              We encountered an error while loading the nail art page. Please try again.
            </p>
            <button 
              onClick={reset} 
              className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 