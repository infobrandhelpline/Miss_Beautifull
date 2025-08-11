'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceCard from '@/components/ServiceCard';
import {
  FaArrowLeft,
  FaCut
} from 'react-icons/fa';

export default function HairServicesPage() {
  const [hairServices, setHairServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHairServices();
  }, []);

  const fetchHairServices = async () => {
    try {
      setError(null);
      const response = await fetch('/api/services');
      if (!response.ok) {
        throw new Error('Failed to fetch services');
      }
      const data = await response.json();
      // Filter only hair services
      const hairData = data.filter(service => service.category === 'Hair');
      setHairServices(hairData);
    } catch (error) {
      console.error('Error fetching hair services:', error);
      setError('Failed to load hair services. Please try again later.');
    } finally {
      setLoading(false);
    }
  };



  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading hair services...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-red-600 mb-4">{error}</p>
              <button 
                onClick={fetchHairServices}
                className="btn-primary"
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
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-primary-500 to-accent-500">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <div className="flex items-center justify-center mb-6">
              <FaCut className="text-6xl mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">
                Hair Services
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional hair styling, cutting, coloring, and treatment services
            </p>
            <a 
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <FaArrowLeft />
              Back to All Services
            </a>
          </motion.div>
        </div>
      </section>

      {/* Hair Services Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Hair Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {hairServices.length} professional hair services available
            </p>
          </motion.div>

          {hairServices.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No hair services available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hairServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ready for a New Look?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Book your appointment today and transform your hair with our professional services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/booking"
                className="btn-primary text-lg px-8 py-4"
              >
                Book Appointment
              </a>
              <a 
                href="/contact"
                className="btn-secondary text-lg px-8 py-4"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 