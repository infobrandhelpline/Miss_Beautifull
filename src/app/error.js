'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { FaExclamationTriangle, FaHome, FaRedo } from 'react-icons/fa';

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaExclamationTriangle className="text-red-600 text-2xl" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Something went wrong!
        </h1>
        
        <p className="text-gray-600 mb-6">
          We encountered an unexpected error. Please try again or contact support if the problem persists.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="btn-primary flex items-center justify-center gap-2"
          >
            <FaRedo className="text-sm" />
            Try Again
          </button>
          


          <Link
            href="/"
            className="btn-secondary flex items-center justify-center gap-2"
          >
            <FaHome className="text-sm" />
            Go Home
          </Link>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <details className="mt-6 text-left">
            <summary className="text-sm text-gray-500 cursor-pointer hover:text-gray-700">
              Error Details (Development)
            </summary>
            <pre className="mt-2 text-xs text-red-600 bg-red-50 p-3 rounded overflow-auto">
              {error?.message || 'Unknown error'}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
} 