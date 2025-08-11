'use client';

import { useState, useEffect } from 'react';

export default function TestUnsplash() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const testServices = [
    { name: 'Hair Cut & Styling', category: 'Hair' },
    { name: 'Party Makeup', category: 'Makeup' },
    { name: 'Manicure', category: 'Nails' },
    { name: 'Fruit Facial', category: 'Skincare' },
    { name: 'Full Body Massage', category: 'Body & Spa' }
  ];

  const fetchServiceImage = async (serviceName, category) => {
    try {
      const response = await fetch(`/api/unsplash?service=${encodeURIComponent(serviceName)}&category=${encodeURIComponent(category)}&type=single`);
      
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.data) {
          return {
            service: serviceName,
            category: category,
            url: data.data.url,
            alt: data.data.alt,
            photographer: data.data.photographer,
            unsplashUrl: data.data.unsplashUrl
          };
        }
      }
      return null;
    } catch (error) {
      console.error('Error fetching image:', error);
      return null;
    }
  };

  const loadAllImages = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const imagePromises = testServices.map(service => 
        fetchServiceImage(service.name, service.category)
      );
      
      const results = await Promise.all(imagePromises);
      const validResults = results.filter(result => result !== null);
      
      setImages(validResults);
    } catch (error) {
      setError('Failed to load images');
      console.error('Error loading images:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadRandomImages = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/unsplash?type=random&count=5');
      
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.data) {
          const randomImages = data.data.map((image, index) => ({
            service: `Random Beauty ${index + 1}`,
            category: 'Beauty',
            url: image.url,
            alt: image.alt,
            photographer: image.photographer,
            unsplashUrl: image.unsplashUrl
          }));
          
          setImages(randomImages);
        }
      }
    } catch (error) {
      setError('Failed to load random images');
      console.error('Error loading random images:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllImages();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Unsplash Integration Test</h1>
      
      <div className="mb-6 space-x-4">
        <button
          onClick={loadAllImages}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Load Service Images'}
        </button>
        
        <button
          onClick={loadRandomImages}
          disabled={loading}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Load Random Beauty Images'}
        </button>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {loading && (
        <div className="mb-4 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded">
          Loading images from Unsplash...
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Image failed to load</span>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{image.service}</h3>
              <p className="text-sm text-gray-600 mb-2">Category: {image.category}</p>
              <p className="text-xs text-gray-500 mb-2">
                Photo by: {image.photographer}
              </p>
              <a
                href={image.unsplashUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-500 hover:underline"
              >
                View on Unsplash
              </a>
            </div>
          </div>
        ))}
      </div>

      {images.length === 0 && !loading && (
        <div className="text-center py-8">
          <p className="text-gray-500">No images loaded. Click a button above to load images.</p>
        </div>
      )}

      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h2 className="text-lg font-bold mb-2">How it works:</h2>
        <ul className="text-sm space-y-1">
          <li>• Images are fetched from Unsplash API based on service names</li>
          <li>• Each service has specific search queries for relevant images</li>
          <li>• Fallback to static images if Unsplash fails</li>
          <li>• Images are cached to avoid repeated API calls</li>
          <li>• Proper attribution to photographers is maintained</li>
        </ul>
      </div>
    </div>
  );
} 