'use client';
import { useState, useEffect, useCallback } from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { serviceCategories } from '@/lib/servicesData';
import ServiceCard from '@/components/ServiceCard';
import {
  FaFilter,
  FaTimes,
  FaArrowRight
} from 'react-icons/fa';

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Hair');
  const [showFilters, setShowFilters] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const fetchServices = useCallback(async () => {
    try {
      setError(null);
      const response = await fetch('/api/services');
      if (!response.ok) {
        throw new Error(`Failed to fetch services: ${response.status}`);
      }
      const data = await response.json();
      setServices(data);
      setFilteredServices(data.filter(service => service.category === selectedCategory));
    } catch (error) {
      console.error('Error fetching services:', error);
      setError(`Failed to load services. ${error.message}`);
    } finally {
      setLoading(false);
    }
  }, [selectedCategory]);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  useEffect(() => {
    setFilteredServices(services.filter(service => service.category === selectedCategory));
  }, [services, selectedCategory]);

  const allCategories = serviceCategories.map(cat => cat.name);

  // Helper functions for category display
  const getCategoryIcon = (category) => {
    const iconMap = {
      'Hair': '💇‍♀️',
      'Makeup': '💄',
      'Nails': '💅',
      'Skincare': '🧴',
      'Body & Spa': '💆‍♀️',
      'Threading & Waxing': '✨',
      'Bridal Packages': '👰‍♀️',
      'Academy': '🎓'
    };
    return iconMap[category] || '✨';
  };

  const getCategoryDescription = (category) => {
    const descriptionMap = {
      'Hair': 'Professional hair styling, cutting, coloring, and treatment services for all hair types',
      'Makeup': 'Bridal, party, and professional makeup services to enhance your natural beauty',
      'Nails': 'Manicure, pedicure, nail art, and nail care services for beautiful hands and feet',
      'Skincare': 'Facial treatments, skin care, and anti-aging solutions for healthy, glowing skin',
      'Body & Spa': 'Relaxing massage, body treatments, and spa services for complete wellness',
      'Threading & Waxing': 'Professional hair removal services for smooth, hair-free skin',
      'Bridal Packages': 'Complete bridal packages including hair, makeup, and beauty treatments',
      'Academy': 'Professional beauty training courses and workshops for aspiring beauticians'
    };
    return descriptionMap[category] || 'Professional beauty services for your needs';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-500 mx-auto"></div>
            <p className="mt-4 text-gray-300">Loading services...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="bg-red-900 bg-opacity-20 border border-red-500 rounded-lg p-8 max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-red-400 mb-4">Error Loading Services</h2>
              <p className="text-gray-300 mb-4">{error}</p>
              {retryCount > 0 && (
                <p className="text-gray-400 text-sm mb-4">Retry attempt: {retryCount}</p>
              )}
              <button 
                onClick={() => {
                  setLoading(true);
                  setRetryCount(prev => prev + 1);
                  fetchServices();
                }} 
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

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-gray-900 via-black to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.02)_75%)] bg-[length:20px_20px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Discover our comprehensive range of professional beauty services designed to enhance your natural beauty
            </p>
          </div>
        </div>
      </section>

      {/* Hair Services Special Section */}
      {selectedCategory === 'Hair' && (
        <section className="py-8 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gray-800 rounded-lg shadow-2xl p-6 border border-gray-700 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-3">
                  💇‍♀️ Featured: Hair Services
                </h3>
                <p className="text-gray-300 mb-4">
                  Explore our complete range of professional hair services with detailed images and descriptions
                </p>
                <a 
                  href="/hair-services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg"
                >
                  View All Hair Services
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white mb-4 md:mb-0">
              Filter by Category
            </h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 transition-all border border-gray-600"
            >
              {showFilters ? <FaTimes /> : <FaFilter />}
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          {showFilters && (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
                  }`}
                >
                  {getCategoryIcon(category)} {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Nail Art Special Section */}
      <section className="py-8 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-700 bg-gray-800">
            {/* Mobile Image */}
            <div 
              className="md:hidden w-full relative bg-gray-800"
              style={{
                backgroundImage: `url('/Service Page/nail_art_cover.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '300px'
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#b2841b', fontFamily: 'Poppins, sans-serif', fontWeight: '800', letterSpacing: '2px' }}>
                    💅 Nail Art Services
                  </h3>
                  <p className="text-lg md:text-xl mb-6 text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.6' }}>
                    Professional nail care, manicure, pedicure, and stunning nail art designs
                  </p>
                  <button
                    onClick={() => window.location.href = '/nail-art'}
                    className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg text-lg"
                  >
                    Explore Nail Services
                  </button>
                </div>
              </div>
            </div>
            
            {/* Desktop Image - Actual Size */}
            <div 
              className="hidden md:block w-full bg-gray-800 flex items-center justify-center p-4"
            >
              <img 
                src="/Service Page/nail_art_cover_desktop.png"
                alt="Nail Art Desktop Cover"
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '100%',
                  maxHeight: '600px',
                  objectFit: 'contain',
                  border: '2px solid #374151',
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our services organized by category for easy navigation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {allCategories.map((category, index) => {
              const categoryServices = services.filter(service => service.category === category);
              return (
                <div
                  key={category}
                  className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-pink-500 transition-all cursor-pointer relative"
                  onClick={() => {
                    try {
                      if (category === 'Nails') {
                        window.location.href = '/nail-art';
                      } else {
                        setSelectedCategory(category);
                      }
                    } catch (error) {
                      console.error('Navigation error:', error);
                      setSelectedCategory(category);
                    }
                  }}
                  onKeyDown={(e) => {
                    try {
                      if (e.key === 'Enter' || e.key === ' ') {
                        if (category === 'Nails') {
                          window.location.href = '/nail-art';
                        } else {
                          setSelectedCategory(category);
                        }
                      }
                    } catch (error) {
                      console.error('Navigation error:', error);
                      setSelectedCategory(category);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${category} services`}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2">{getCategoryIcon(category)}</div>
                    <h3 className="font-semibold text-white text-sm mb-1">{category}</h3>
                    <p className="text-pink-400 text-xs font-bold">{categoryServices.length} services</p>
                  </div>
                  {category === 'Nails' && (
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full">
                      NEW
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ⭐ Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and highly-rated services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <div key={service.id} className="relative">
                <ServiceCard service={service} index={index} />
                {index < 3 && (
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    POPULAR
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services by Category */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Services by Category
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete overview of all our services organized by category
            </p>
          </div>

          {/* Category Sections */}
          {allCategories.map((category, categoryIndex) => {
            const categoryServices = services.filter(service => service.category === category);
            if (categoryServices.length === 0) return null;
            return (
              <div key={category} className="mb-16">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {getCategoryIcon(category)} {category} Services
                  </h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    {getCategoryDescription(category)}
                  </p>
                  <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryServices.map((service, index) => (
                    <ServiceCard key={service.id} service={service} index={index} />
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <p className="text-gray-300">
                      <span className="text-pink-400 font-semibold">{categoryServices.length}</span> services available in {category}
                    </p>
                    <button onClick={() => setSelectedCategory(category)} className="mt-3 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all text-sm">
                      View All {category} Services
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
} 