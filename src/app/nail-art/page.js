'use client';

import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function NailArtPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const nailServices = [
    {
      name: 'Classic Manicure',
      description: 'Basic nail care and polish application',
      price: 500,
      duration: 45
    },
    {
      name: 'Gel Manicure',
      description: 'Long-lasting gel polish with nail care',
      price: 800,
      duration: 60
    },
    {
      name: 'Nail Art Design',
      description: 'Creative nail art with hand-painted designs',
      price: 1200,
      duration: 90
    },
    {
      name: 'Pedicure',
      description: 'Complete foot care and nail treatment',
      price: 600,
      duration: 60
    },
    {
      name: 'Nail Extension',
      description: 'Professional nail extensions and sculpting',
      price: 1500,
      duration: 120
    },
    {
      name: 'Luxury Nail Spa',
      description: 'Premium nail care with spa treatment',
      price: 2000,
      duration: 90
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-500 mx-auto"></div>
            <p className="mt-4 text-gray-300">Loading nail art services...</p>
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
              <button 
                onClick={() => window.location.reload()} 
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
      {/* Navbar at top */}
      <Navbar />

      {/* Silver Shine Divider */}
      <div className="relative h-2 bg-gradient-to-r from-gray-400 via-silver-500 to-gray-400 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-70 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-silver-300 via-white to-silver-300 opacity-40"></div>
      </div>

      {/* Hero Section with Full Cover Image */}
      <section className="relative">
        {/* Full Cover Image with proper contrast */}
                 <div 
           className="relative h-screen w-full bg-cover bg-center bg-no-repeat border-b-4 border-yellow-500"
          style={{
            backgroundImage: `url('/Service Page/nail_art_cover.png')`,
            paddingTop: '60px',
                         boxShadow: '0 0 50px rgba(245, 158, 11, 0.3), inset 0 0 100px rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* Enhanced fallback for background image */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-pink-400 opacity-0 hover:opacity-100 transition-opacity"></div>
          
          {/* Subtle overlay to enhance image visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
        </div>
      </section>

      {/* Content Section - Text starts below image */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black relative">
                 {/* Decorative separator */}
         <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white mb-12">
                         <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{
               color: '#b2841b',
               fontFamily: 'Poppins, sans-serif',
               fontWeight: '800',
               letterSpacing: '2px'
             }}>
               💅 Nail Art Studio
             </h1>
                                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white" style={{
               fontFamily: 'Inter, sans-serif',
               fontWeight: '400',
               letterSpacing: '0.5px',
               lineHeight: '1.6'
             }}>
               Transform your nails into stunning works of art with our professional nail services
             </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                             <div className="flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2 border-2 border-yellow-400 shadow-lg" style={{
                 boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
               }}>
                 <span className="text-yellow-300 drop-shadow-lg">⭐</span>
                 <span className="text-sm text-yellow-200 font-semibold drop-shadow-sm">4.9/5 Rating</span>
               </div>
               <div className="flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2 border-2 border-silver-400 shadow-lg" style={{
                 boxShadow: '0 4px 15px rgba(192, 192, 192, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
               }}>
                 <span className="text-silver-200 drop-shadow-lg">👥</span>
                 <span className="text-sm text-silver-100 font-semibold drop-shadow-sm">500+ Happy Clients</span>
               </div>
               <div className="flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2 border-2 border-yellow-400 shadow-lg" style={{
                 boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
               }}>
                 <span className="text-yellow-300 drop-shadow-lg">⏰</span>
                 <span className="text-sm text-yellow-200 font-semibold drop-shadow-sm">Expert Artists</span>
               </div>
            </div>
                         <a
               href="#services"
               className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-black rounded-lg font-semibold hover:from-yellow-500 hover:to-amber-600 transition-all shadow-2xl text-lg relative overflow-hidden"
               style={{
                 boxShadow: '0 10px 30px rgba(245, 158, 11, 0.4), 0 0 20px rgba(245, 158, 11, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                 textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
               }}
             >
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
               Explore Our Services
               <span>→</span>
             </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
                     <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{
               color: '#b2841b',
               fontFamily: 'Poppins, sans-serif',
               fontWeight: '700',
               letterSpacing: '1px'
             }}>
               Why Choose Our Nail Art Studio?
             </h2>
                                        <p className="text-xl text-white max-w-3xl mx-auto" style={{
               fontFamily: 'Inter, sans-serif',
               fontWeight: '400',
               letterSpacing: '0.3px',
               lineHeight: '1.5'
             }}>
               Experience the perfect blend of creativity, quality, and care
             </p>
           </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         <div className="bg-gray-800 rounded-lg p-6 border-2 border-yellow-400 hover:border-yellow-300 transition-all shadow-2xl" style={{
               boxShadow: '0 8px 25px rgba(245, 158, 11, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
             }}>
               <div className="text-4xl mb-4 drop-shadow-lg">💅</div>
               <h3 className="text-xl font-bold mb-3" style={{
                 color: '#b2841b',
                 fontFamily: 'Poppins, sans-serif',
                 fontWeight: '600',
                 letterSpacing: '0.5px'
               }}>
                 Professional Nail Art
               </h3>
               <p className="text-white" style={{
                 fontFamily: 'Inter, sans-serif',
                 fontWeight: '400',
                 letterSpacing: '0.2px',
                 lineHeight: '1.4'
               }}>Creative and artistic nail designs by expert nail artists</p>
             </div>
             <div className="bg-gray-800 rounded-lg p-6 border-2 border-silver-400 hover:border-silver-300 transition-all shadow-2xl" style={{
               boxShadow: '0 8px 25px rgba(192, 192, 192, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
             }}>
               <div className="text-4xl mb-4 drop-shadow-lg">✨</div>
               <h3 className="text-xl font-bold mb-3" style={{
                 color: '#b2841b',
                 fontFamily: 'Poppins, sans-serif',
                 fontWeight: '600',
                 letterSpacing: '0.5px'
               }}>
                 Premium Materials
               </h3>
               <p className="text-white" style={{
                 fontFamily: 'Inter, sans-serif',
                 fontWeight: '400',
                 letterSpacing: '0.2px',
                 lineHeight: '1.4'
               }}>High-quality nail polishes and materials for long-lasting results</p>
             </div>
             <div className="bg-gray-800 rounded-lg p-6 border-2 border-yellow-400 hover:border-yellow-300 transition-all shadow-2xl" style={{
               boxShadow: '0 8px 25px rgba(245, 158, 11, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
             }}>
               <div className="text-4xl mb-4 drop-shadow-lg">🎨</div>
               <h3 className="text-xl font-bold mb-3" style={{
                 color: '#b2841b',
                 fontFamily: 'Poppins, sans-serif',
                 fontWeight: '600',
                 letterSpacing: '0.5px'
               }}>
                 Custom Designs
               </h3>
               <p className="text-white" style={{
                 fontFamily: 'Inter, sans-serif',
                 fontWeight: '400',
                 letterSpacing: '0.2px',
                 lineHeight: '1.4'
               }}>Personalized nail art designs according to your preferences</p>
             </div>
             <div className="bg-gray-800 rounded-lg p-6 border-2 border-silver-400 hover:border-silver-300 transition-all shadow-2xl" style={{
               boxShadow: '0 8px 25px rgba(192, 192, 192, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
             }}>
               <div className="text-4xl mb-4 drop-shadow-lg">💎</div>
               <h3 className="text-xl font-bold mb-3" style={{
                 color: '#b2841b',
                 fontFamily: 'Poppins, sans-serif',
                 fontWeight: '600',
                 letterSpacing: '0.5px'
               }}>
                 Luxury Treatments
               </h3>
               <p className="text-white" style={{
                 fontFamily: 'Inter, sans-serif',
                 fontWeight: '400',
                 letterSpacing: '0.2px',
                 lineHeight: '1.4'
               }}>Premium nail care and treatment services for healthy nails</p>
             </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
                     <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{
               color: '#b2841b',
               fontFamily: 'Poppins, sans-serif',
               fontWeight: '700',
               letterSpacing: '1px'
             }}>
               💎 Our Nail Services
             </h2>
                                        <p className="text-xl text-white max-w-3xl mx-auto" style={{
               fontFamily: 'Inter, sans-serif',
               fontWeight: '400',
               letterSpacing: '0.3px',
               lineHeight: '1.5'
             }}>
               From classic manicures to artistic nail designs, we have everything you need
             </p>
           </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nailServices.map((service, index) => (
                             <div key={index} className="bg-gray-800 rounded-lg shadow-2xl p-6 border-2 border-yellow-400 backdrop-blur-sm hover:scale-105 transition-all" style={{
                 boxShadow: '0 10px 30px rgba(245, 158, 11, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
               }}>
                 <div className="text-center mb-4">
                   <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg" style={{
                     boxShadow: '0 8px 20px rgba(245, 158, 11, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                   }}>
                     <span className="text-black text-2xl drop-shadow-sm">✨</span>
                   </div>
                   <h3 className="text-xl font-bold mb-2" style={{
                     color: '#b2841b',
                     fontFamily: 'Poppins, sans-serif',
                     fontWeight: '600',
                     letterSpacing: '0.5px'
                   }}>
                     {service.name}
                   </h3>
                   <p className="text-white text-sm mb-4" style={{
                     fontFamily: 'Inter, sans-serif',
                     fontWeight: '400',
                     letterSpacing: '0.1px',
                     lineHeight: '1.3'
                   }}>{service.description}</p>
                 </div>

                 <div className="flex justify-between items-center mb-4">
                   <span className="text-2xl font-bold text-yellow-400 drop-shadow-sm" style={{
                     textShadow: '0 0 10px rgba(245, 158, 11, 0.6)'
                   }}>₹{service.price}</span>
                   <span className="text-sm text-silver-400 drop-shadow-sm">{service.duration} min</span>
                 </div>

                 <button className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-black rounded-lg font-semibold hover:from-yellow-500 hover:to-amber-600 transition-all shadow-2xl relative overflow-hidden" style={{
                   boxShadow: '0 8px 25px rgba(245, 158, 11, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                   textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                 }}>
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
                   Book Now
                 </button>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
                     <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{
               color: '#b2841b',
               fontFamily: 'Poppins, sans-serif',
               fontWeight: '700',
               letterSpacing: '1px'
             }}>
               🎨 Nail Art Gallery
             </h2>
                                        <p className="text-xl text-white max-w-3xl mx-auto" style={{
               fontFamily: 'Inter, sans-serif',
               fontWeight: '400',
               letterSpacing: '0.3px',
               lineHeight: '1.5'
             }}>
               Explore our stunning nail art designs and get inspired
             </p>
           </div>

                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
               <div key={index} className="relative group cursor-pointer">
                 <div className="aspect-square bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg overflow-hidden">
                   <div className="w-full h-full bg-gray-700 rounded-lg flex items-center justify-center">
                     <span className="text-yellow-400 text-2xl">💖</span>
                   </div>
                 </div>
                 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all rounded-lg flex items-center justify-center">
                   <span className="text-yellow-300 text-2xl opacity-0 group-hover:opacity-100 transition-all">✨</span>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 