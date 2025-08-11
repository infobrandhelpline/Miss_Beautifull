'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TestPinterest() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const testServices = [
    { name: 'Hair Cut', category: 'Hair' },
    { name: 'Bridal Makeup', category: 'Makeup' },
    { name: 'Nail Art', category: 'Nails' },
    { name: 'Facial', category: 'Skincare' },
    { name: 'Body Massage', category: 'Body & Spa' }
  ];

  const fetchPinterestImages = async () => {
    setLoading(true);
    setError(null);
    setImages([]);

    try {
      const imagePromises = testServices.map(async (service) => {
        const response = await fetch(`/api/pinterest?service=${encodeURIComponent(service.name)}&category=${encodeURIComponent(service.category)}&type=single`);
        
        if (response.ok) {
          const data = await response.json();
          return {
            service: service.name,
            category: service.category,
            ...data.data
          };
        } else {
          throw new Error(`Failed to fetch image for ${service.name}`);
        }
      });

      const results = await Promise.all(imagePromises);
      setImages(results);
    } catch (error) {
      console.error('Error fetching Pinterest images:', error);
      setError('Failed to load Pinterest images. Please check your API key.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            📌 Pinterest Integration Test
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Test high-quality Pinterest images for your salon services
          </p>
          
          <button
            onClick={fetchPinterestImages}
            disabled={loading}
            className="px-6 py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Load Pinterest Images'}
          </button>
        </motion.div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <p className="text-red-600">{error}</p>
            <p className="text-sm text-red-500 mt-2">
              To use Pinterest API, you need to:
              <br />1. Get a Pinterest Developer Account
              <br />2. Create an app and get access token
              <br />3. Add PINTEREST_ACCESS_TOKEN to your .env.local file
            </p>
          </div>
        )}

        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading Pinterest images...</p>
          </div>
        )}

        {images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={image.url}
                    alt={image.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                    📌 Pinterest
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">{image.service}</h3>
                  <p className="text-sm text-gray-600 mb-2">{image.category}</p>
                  <p className="text-xs text-gray-500">{image.title}</p>
                  {image.pinterestUrl && (
                    <a
                      href={image.pinterestUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-pink-500 hover:underline mt-2 inline-block"
                    >
                      View on Pinterest →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎨 Pinterest Integration Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">✅ Benefits:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• High-quality professional images</li>
                <li>• Curated beauty and salon content</li>
                <li>• Automatic fallback to Unsplash</li>
                <li>• Pinterest attribution</li>
                <li>• Responsive image loading</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">🔧 Setup:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Get Pinterest Developer Account</li>
                <li>• Create Pinterest App</li>
                <li>• Add access token to .env.local</li>
                <li>• Restart development server</li>
                <li>• Test with /test-pinterest</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 