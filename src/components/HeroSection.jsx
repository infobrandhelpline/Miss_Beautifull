'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCut, FaPalette, FaGem } from 'react-icons/fa';
import Logo from './Logo';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-primary-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-accent-200 rounded-full opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <Logo className="w-24 h-24" />
        </motion.div>
        
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6"
          >
            <span className="text-primary-600">Miss Beautyfull</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl text-gray-600">
              Salon & Academy
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Transform your beauty with our professional services and learn the art of beauty at our academy
          </motion.p>
        </motion.div>

        {/* Service Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-8 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-2">
              <FaCut className="text-primary-600 text-2xl" />
            </div>
            <span className="text-sm text-gray-600">Hair Styling</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-2">
              <FaPalette className="text-accent-600 text-2xl" />
            </div>
            <span className="text-sm text-gray-600">Makeup Art</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-2">
              <FaGem className="text-primary-600 text-2xl" />
            </div>
            <span className="text-sm text-gray-600">Nail Art</span>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/booking" className="btn-primary text-lg px-8 py-4">
              Book Your Appointment
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/academy" className="btn-secondary text-lg px-8 py-4">
              Join Our Academy
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-600">50+</div>
            <div className="text-gray-600">Expert Stylists</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">100+</div>
            <div className="text-gray-600">Students Trained</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 