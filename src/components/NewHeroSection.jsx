'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import NewLogo from './NewLogo';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';

export default function NewHeroSection() {
  const [currentImage, setCurrentImage] = useState(0); // 0: logo, 1: bridal, 2: experts
  const [key, setKey] = useState(0); // Add key for CountUp restart

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 3); // Cycle through 3 images
    }, 5000); // Toggle every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Add useEffect for CountUp restart
  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prevKey => prevKey + 1); // Change key to restart CountUp
    }, 4000); // Restart every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const getImageComponent = () => {
    switch (currentImage) {
      case 0:
  return (
        <motion.div
            key="logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center"
          >
            <div style={{ transform: 'scale(3.5)' }}>
              <NewLogo />
            </div>
          </motion.div>
        );
      case 1:
        return (
        <motion.div
            key="bridal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center"
          >
            <Image
              src="/Service Page/Bridal_cover.png"
              alt="Bridal Cover"
              width={600}
              height={600}
              className="max-w-full h-auto object-contain"
              unoptimized
              style={{ maxHeight: '580px', objectPosition: 'center' }}
            />
          </motion.div>
        );
      case 2:
        return (
        <motion.div
            key="experts"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center"
          >
            <Image
              src="/Service Page/Experts_Cover.png"
              alt="Experts Cover"
              width={600}
              height={600}
              className="max-w-full h-auto object-contain"
              unoptimized
              style={{ maxHeight: '580px', objectPosition: 'center' }}
            />
        </motion.div>
        );
      default:
        return null;
    }
  };
        
  return (
    <section className="relative bg-black min-h-screen flex flex-col items-center justify-center overflow-hidden py-16">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-10">
        {/* Logo/Bridal/Experts Image Animation */}
        <motion.div
          className="flex justify-center items-center mb-8"
          style={{ height: '600px' }}
        >
          <AnimatePresence mode="wait">
            {getImageComponent()}
          </AnimatePresence>
        </motion.div>
        
        {/* Main Content - Logo and Description Only */}
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Logo Section */}
            <div className="flex justify-center mb-8">
              <div style={{ transform: 'scale(2.5)' }}>
                <NewLogo />
              </div>
            </div>
            
            {/* Description Section */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed font-medium">
              Discover the art of beauty transformation at Miss Beautiful Salon & Academy. 
              Where expertise meets elegance, and every service is crafted with precision and care.
              <br /><br />
              <span className="text-gray-200">
                From classic cuts to contemporary styles, professional makeup to advanced treatments, 
                we offer comprehensive beauty solutions for every occasion.
              </span>
            </p>
          </motion.div>

        {/* Enhanced Service Icons */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div 
            className="text-center group"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/services/hair-styling">
              <div className="w-24 h-24 mx-auto mb-3 bg-black rounded-full flex items-center justify-center group-hover:bg-black transition-all duration-300 p-2 cursor-pointer shadow-lg group-hover:shadow-2xl">
                <Image
                  src="/Hair Styling/Hair_Styling_Logo.png"
                  alt="Hair Styling"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  unoptimized
                />
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors duration-300">Hair Styling</h3>
            </Link>
          </motion.div>
          
          <motion.div 
            className="text-center group"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/services/makeup-art">
              <div className="w-24 h-24 mx-auto mb-3 bg-black rounded-full flex items-center justify-center group-hover:bg-black transition-all duration-300 p-2 cursor-pointer shadow-lg group-hover:shadow-2xl">
                <Image
                  src="/Makeup_Art/Makeup_Art_Logo.png"
                  alt="Makeup Art"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  unoptimized
                />
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors duration-300">Makeup Art</h3>
            </Link>
          </motion.div>
          
          <motion.div 
            className="text-center group"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/services/nail-art">
              <div className="w-24 h-24 mx-auto mb-3 bg-black rounded-full flex items-center justify-center group-hover:bg-black transition-all duration-300 p-2 cursor-pointer shadow-lg group-hover:shadow-2xl">
                <Image
                  src="/Nail Art/Nail_Art_Logo.png"
                  alt="Nail Art"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  unoptimized
                />
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors duration-300">Nail Art</h3>
            </Link>
          </motion.div>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/booking" 
              className="bg-[#991b1b] hover:bg-[#991b1b] text-white text-xl px-10 py-5 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 border-2 border-[#b17400] focus:outline-none focus:ring-0 focus:ring-offset-0 focus:text-white focus:bg-[#991b1b]"
              style={{ outline: 'none' }}
            >
              ✨ Book Now
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/academy" 
              className="bg-[#00464c] hover:bg-[#003a3f] text-white text-xl px-10 py-5 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 border-2 border-[#b17400] focus:outline-none focus:ring-0 focus:ring-offset-0 focus:text-white focus:bg-[#00464c]"
              style={{ outline: 'none' }}
            >
              🎓 Join Courses
            </Link>
          </motion.div>
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto"
        >
          <motion.div 
            className="text-center group"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-[#b17400] shadow-2xl group-hover:shadow-[#b17400]/20 transition-all duration-500">
              <div className="text-6xl font-black text-[#b17400] mb-3 group-hover:text-[#d4a017] transition-colors duration-300">
                <CountUp key={key} end={500} duration={2.5} suffix="+" />
              </div>
              <div className="text-gray-200 font-bold text-xl mb-2 group-hover:text-white transition-colors duration-300">
                Happy Clients
              </div>
              <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                Satisfied & Beautiful
              </div>
              <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#b17400] to-[#d4a017] mx-auto rounded-full group-hover:w-20 transition-all duration-300"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center group"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-[#b17400] shadow-2xl group-hover:shadow-[#b17400]/20 transition-all duration-500">
              <div className="text-6xl font-black text-[#b17400] mb-3 group-hover:text-[#d4a017] transition-colors duration-300">
                <CountUp key={key} end={50} duration={2.5} suffix="+" />
              </div>
              <div className="text-gray-200 font-bold text-xl mb-2 group-hover:text-white transition-colors duration-300">
                Expert Stylists
              </div>
              <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                Professional Artists
              </div>
              <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#b17400] to-[#d4a017] mx-auto rounded-full group-hover:w-20 transition-all duration-300"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center group"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-[#b17400] shadow-2xl group-hover:shadow-[#b17400]/20 transition-all duration-500">
              <div className="text-6xl font-black text-[#b17400] mb-3 group-hover:text-[#d4a017] transition-colors duration-300">
                <CountUp key={key} end={100} duration={2.5} suffix="+" />
              </div>
              <div className="text-gray-200 font-bold text-xl mb-2 group-hover:text-white transition-colors duration-300">
                Students Trained
              </div>
              <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                Future Professionals
              </div>
              <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#b17400] to-[#d4a017] mx-auto rounded-full group-hover:w-20 transition-all duration-300"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 