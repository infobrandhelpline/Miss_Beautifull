'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import BlogSection from '../components/BlogSection';
import NewHeroSection from '../components/NewHeroSection';
import AnimatedTestimonial from '../components/AnimatedTestimonial';
import FloatingMakeupBrushes from '../components/AnimatedMakeupBrush';
import { BeautyToolsCollection } from '../components/AnimatedBeautyTools';
import { BeautyServicesIcons, AnimatedBeautyQuote } from '../components/AnimatedBeautyIcons';
// Using simple divs instead of icons to avoid import issues

export default function HomePage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/services', {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        },
        cache: 'no-store'
      });
      if (response.ok) {
        const data = await response.json();
        setServices(data);
      } else {
        // Fallback to static data if API fails
        setServices([
          {
            id: 1,
            name: "Hair Styling",
            description: "Professional hair cutting, coloring, and styling services",
            price: 800,
            duration: 90,
            category: "Hair Styling"
          },
          {
            id: 2,
            name: "Makeup Artistry",
            description: "Bridal, party, and special occasion makeup services",
            price: 1500,
            duration: 120,
            category: "Makeup"
          },
          {
            id: 3,
            name: "Nail Art",
            description: "Creative nail designs and professional manicures",
            price: 500,
            duration: 60,
            category: "Nail Art"
          }
        ]);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
      // Use static data as fallback
      setServices([
        {
          id: 1,
          name: "Hair Styling",
          description: "Professional hair cutting, coloring, and styling services",
          price: 800,
          duration: 90,
          category: "Hair Styling"
        },
        {
          id: 2,
          name: "Makeup Artistry",
          description: "Bridal, party, and special occasion makeup services",
          price: 1500,
          duration: 120,
          category: "Makeup"
        },
        {
          id: 3,
          name: "Nail Art",
          description: "Creative nail designs and professional manicures",
          price: 500,
          duration: 60,
          category: "Nail Art"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getServiceIcon = (category) => {
    const iconMap = {
      'Hair Styling': () => <div className="text-white text-xl">✂️</div>,
      'Makeup': () => <div className="text-white text-xl">🎨</div>,
      'Nail Art': () => <div className="text-white text-xl">💅</div>,
      'Skincare': () => <div className="text-white text-xl">✨</div>,
      'Package': () => <div className="text-white text-xl">👑</div>
    };
    return iconMap[category] || (() => <div className="text-white text-xl">💄</div>);
  };

  const getServiceColor = (index) => {
    const colors = [
      "from-red-800 to-blue-600",
      "from-blue-600 to-red-800",
      "from-red-700 to-blue-700",
      "from-blue-700 to-red-700",
      "from-red-600 to-blue-500"
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <NewHeroSection />
      
      {/* Floating Animated Makeup Brushes */}
      <FloatingMakeupBrushes />

      {/* Enhanced Features Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Why Choose Us?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the perfect blend of expertise, creativity, and personalized care that sets us apart
            </p>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-[#b17400] to-[#d4a017] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Expert Stylists",
                description: "Our team of certified beauty professionals brings years of experience and creativity to every service, ensuring exceptional results every time.",
                image: "/Home Icons/Expert Stylists.png",
                highlight: "15+ Years Experience"
              },
              {
                title: "Premium Products",
                description: "We use only the highest quality, professional-grade products from renowned brands for the best results and long-lasting beauty.",
                image: "/Home Icons/Premium Products.png",
                highlight: "Top Quality Brands"
              },
              {
                title: "Personalized Care",
                description: "Every service is tailored to your unique style, preferences, and beauty goals, creating a truly customized experience.",
                image: "/Home Icons/Personalized Care.png",
                highlight: "100% Customized"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-black p-10 rounded-3xl">
                  <div className="text-center">
                    {/* Image Container */}
                    <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={96}
                        height={96}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    {/* Highlight Badge */}
                    <div className="mb-6">
                      <span className="inline-block px-4 py-2 bg-[#991b1b] text-white text-sm font-bold rounded-full border border-[#991b1b] shadow-lg">
                        {feature.highlight}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Preview */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Services
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Professional beauty services tailored to enhance your natural beauty and confidence
            </p>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-[#b17400] to-[#d4a017] mx-auto rounded-full"></div>
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#991b1b]"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {services.slice(0, 3).map((service, index) => {
                const IconComponent = getServiceIcon(service.category);
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl border border-[#b17400] shadow-2xl group-hover:shadow-[#b17400]/30 transition-all duration-500 hover:transform hover:-translate-y-3">
                      <div className="text-center">
                        {/* Service Icon */}
                        <div className="w-24 h-24 bg-gradient-to-br from-[#991b1b] to-[#b17400] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-[#991b1b]/50 transition-all duration-300">
                          <IconComponent />
                        </div>
                        
                        {/* Service Content */}
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#d4a017] transition-colors duration-300">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg mb-6 group-hover:text-gray-200 transition-colors duration-300">
                          {service.description}
                        </p>
                        
                        {/* Service Details */}
                        <div className="flex justify-between items-center mb-6 p-4 bg-black/30 rounded-xl border border-gray-700">
                          <div className="text-center">
                            <div className="text-2xl font-black text-[#991b1b]">₹{service.price}</div>
                            <div className="text-sm text-gray-400">Price</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-black text-[#b17400]">{service.duration}</div>
                            <div className="text-sm text-gray-400">Minutes</div>
                          </div>
                        </div>
                        
                        {/* Bottom Accent */}
                        <div className="mt-6 w-16 h-1 bg-gradient-to-r from-[#991b1b] to-[#b17400] mx-auto rounded-full group-hover:w-20 transition-all duration-300"></div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-[#991b1b] hover:bg-[#8d0101] text-white text-xl px-10 py-5 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 border-2 border-[#b17400]"
            >
              View All Services
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Animated Testimonials */}
      <AnimatedTestimonial />

      {/* Beauty Tools Section */}
      <BeautyToolsCollection />

      {/* Beauty Services Icons */}
      <BeautyServicesIcons />

      {/* Beauty Quote */}
      <AnimatedBeautyQuote />

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight"
            >
              Ready to Start Your Journey?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Join our academy and transform your passion for beauty into a rewarding career. 
              Discover your potential and become a professional beauty artist.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-10 w-32 h-1 bg-gradient-to-r from-[#b17400] to-[#d4a017] mx-auto rounded-full mb-12"
            ></motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.a
                href="/academy"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#991b1b] to-[#b17400] hover:from-[#8d0101] hover:to-[#991b1b] text-white text-xl px-12 py-6 rounded-2xl font-bold transition-all duration-300 shadow-2xl hover:shadow-[#991b1b]/30 transform hover:-translate-y-2 border-2 border-[#b17400]"
              >
                🎓 Enroll Now
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-transparent text-white px-12 py-6 font-bold border-2 border-[#b17400] rounded-2xl hover:bg-[#b17400] hover:text-black transition-all duration-300 shadow-2xl hover:shadow-[#b17400]/30 transform hover:-translate-y-2"
              >
                💫 Learn More
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-900 to-black rounded-2xl border border-[#b17400] shadow-xl">
                <span className="text-[#d4a017] text-2xl">✨</span>
                <span className="text-white text-lg font-semibold">Limited Time Offer: Get 20% Off on All Courses!</span>
                <span className="text-[#d4a017] text-2xl">✨</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <BlogSection />
      <Footer />
    </div>
  );
}
