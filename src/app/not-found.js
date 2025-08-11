'use client';
import Link from 'next/link';
import { FaHome, FaSearch, FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaSearch className="text-blue-600 text-2xl" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h1>
        
        <p className="text-gray-600 mb-6">
          The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn-primary flex items-center justify-center gap-2"
          >
            <FaHome className="text-sm" />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="btn-secondary flex items-center justify-center gap-2"
          >
            <FaArrowLeft className="text-sm" />
            Go Back
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Popular Pages:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/services" className="text-primary-600 hover:text-primary-700 text-sm">
              Services
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/academy" className="text-primary-600 hover:text-primary-700 text-sm">
              Academy
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/blog" className="text-primary-600 hover:text-primary-700 text-sm">
              Blog
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/contact" className="text-primary-600 hover:text-primary-700 text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 