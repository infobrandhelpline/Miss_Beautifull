'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BookingForm from '../../components/BookingForm';
import { FaCut, FaPalette, FaGem, FaSpa, FaCrown } from 'react-icons/fa';

const iconMap = {
  'Hair Styling': FaCut,
  'Makeup': FaPalette,
  'Nail Art': FaGem,
  'Spa': FaSpa,
  'Package': FaCrown,
};

export default function BookingPage() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/services');
      if (response.ok) {
        const data = await response.json();
        setServices(data);
      } else {
        // Fallback to static data if API fails
        setServices([
          {
            id: '1',
            title: "Hair Styling",
            description: "Professional haircuts, styling, coloring, and treatments",
            price: 800,
            duration: 90,
            icon: FaCut,
            category: "Hair"
          },
          {
            id: '2',
            title: "Makeup Art",
            description: "Bridal makeup, party makeup, and professional makeup",
            price: 1500,
            duration: 120,
            icon: FaPalette,
            category: "Makeup"
          },
          {
            id: '3',
            title: "Nail Art",
            description: "Creative nail designs, manicure, pedicure, and extensions",
            price: 500,
            duration: 60,
            icon: FaGem,
            category: "Nails"
          },
          {
            id: '4',
            title: "Facial Treatments",
            description: "Rejuvenating facials and skin treatments",
            price: 1200,
            duration: 90,
            icon: FaSpa,
            category: "Spa"
          },
          {
            id: '5',
            title: "Eyebrow & Eyelash",
            description: "Eyebrow threading, waxing, and lash extensions",
            price: 300,
            duration: 45,
            icon: FaCrown,
            category: "Package"
          },
          {
            id: '6',
            title: "Hand & Foot Care",
            description: "Professional manicure and pedicure services",
            price: 400,
            duration: 60,
            icon: FaCrown,
            category: "Package"
          },
          {
            id: '7',
            title: "Bridal Package",
            description: "Complete bridal makeover with hair, makeup, and nails",
            price: 5000,
            duration: 240,
            icon: FaCrown,
            category: "Package"
          },
          {
            id: '8',
            title: "Party Makeup",
            description: "Glamorous party makeup with hair styling",
            price: 2000,
            duration: 120,
            icon: FaCrown,
            category: "Package"
          }
        ]);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
      // Use static data as fallback
      setServices([
        {
          id: '1',
          title: "Hair Styling",
          description: "Professional haircuts, styling, coloring, and treatments",
          price: 800,
          duration: 90,
          icon: FaCut,
          category: "Hair"
        },
        {
          id: '2',
          title: "Makeup Art",
          description: "Bridal makeup, party makeup, and professional makeup",
          price: 1500,
          duration: 120,
          icon: FaPalette,
          category: "Makeup"
        },
        {
          id: '3',
          title: "Nail Art",
          description: "Creative nail designs, manicure, pedicure, and extensions",
          price: 500,
          duration: 60,
          icon: FaGem,
          category: "Nails"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setShowBookingForm(true);
  };

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Book Your Appointment
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Choose your preferred service and schedule your appointment with our expert stylists
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Selection */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Select Your Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our range of professional beauty services and choose what suits you best
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const Icon = iconMap[service.name] || FaCut;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-primary-200"
                    onClick={() => handleServiceSelect(service)}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mb-4 mx-auto"
                    >
                      <Icon className="text-white text-2xl" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{service.title || service.name}</h3>
                    <p className="text-gray-600 text-center mb-4 text-sm">{service.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-primary-600">₹{service.price}</span>
                      <span className="text-sm text-gray-500">{service.duration} min</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary w-full"
                    >
                      Select Service
                    </motion.button>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Booking Form Modal */}
      {showBookingForm && selectedService && (
        <BookingForm
          selectedService={selectedService}
          onClose={() => {
            setShowBookingForm(false);
            setSelectedService(null);
          }}
        />
      )}

      <Footer />
    </div>
  );
} 