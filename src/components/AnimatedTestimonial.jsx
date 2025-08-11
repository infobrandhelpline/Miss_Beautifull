'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function AnimatedTestimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Hair Stylist Graduate",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "The academy transformed my passion into a profession. The instructors are amazing and the practical training is excellent. I'm now working at a top salon!",
      course: "Advanced Hair Styling"
    },
    {
      name: "Riya Patel",
      role: "Makeup Artist",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "Best decision I ever made! The makeup course was comprehensive and the instructors are industry experts. I've started my own makeup business.",
      course: "Professional Makeup Artistry"
    },
    {
      name: "Anjali Singh",
      role: "Nail Art Specialist",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "The nail art course exceeded my expectations. I learned both traditional and modern techniques. Now I have my own nail studio!",
      course: "Nail Art & Design"
    },
    {
      name: "Meera Kapoor",
      role: "Beauty Consultant",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "The academy not only taught me skills but also business management. I'm now running a successful beauty consultancy.",
      course: "Beauty Business Management"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            What Our Students Say
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Hear from our successful graduates who transformed their passion into thriving careers
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-[#b17400] to-[#d4a017] mx-auto rounded-full"></div>
        </motion.div>

        {/* Enhanced Testimonial Carousel */}
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl p-10 md:p-16 max-w-5xl mx-auto border border-[#b17400]"
          >
            {/* Enhanced Quote Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#b17400] text-6xl mb-8 text-center"
            >
              <FaQuoteLeft />
            </motion.div>

            {/* Enhanced Testimonial Content */}
            <div className="mb-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 italic text-center font-medium"
              >
                "{testimonials[currentIndex].text}"
              </motion.p>

              {/* Enhanced Rating */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center justify-center mb-8"
              >
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    className="mx-1"
                  >
                    <FaStar className="text-[#d4a017] text-2xl drop-shadow-lg" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced Course Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="inline-block bg-[#991b1b] text-white px-6 py-3 rounded-full text-lg font-bold mb-8 border border-[#b17400] shadow-lg"
              >
                {testimonials[currentIndex].course}
              </motion.div>
            </div>

            {/* Enhanced Author Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center justify-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#991b1b] to-[#b17400] rounded-full flex items-center justify-center text-white font-black text-2xl mr-6 shadow-lg">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div className="text-center">
                <h4 className="font-bold text-white text-xl mb-2">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-300 text-lg">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Navigation Buttons */}
          <div className="flex justify-center mt-12 space-x-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-14 h-14 bg-gradient-to-br from-[#991b1b] to-[#b17400] rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-[#991b1b]/50 transition-all duration-300 border border-[#d4a017]"
            >
              <FaChevronLeft className="text-xl" />
            </motion.button>

            {/* Enhanced Dots Indicator */}
            <div className="flex items-center space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#b17400] shadow-lg shadow-[#b17400]/50' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-14 h-14 bg-gradient-to-br from-[#991b1b] to-[#b17400] rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-[#991b1b]/50 transition-all duration-300 border border-[#d4a017]"
            >
              <FaChevronRight className="text-xl" />
            </motion.button>
          </div>
        </div>

        {/* Enhanced Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-[#b17400] shadow-2xl group-hover:shadow-[#b17400]/30 transition-all duration-500">
              <div className="text-5xl font-black text-[#991b1b] mb-3">500+</div>
              <div className="text-gray-200 font-bold text-xl">Graduates</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-[#b17400] shadow-2xl group-hover:shadow-[#b17400]/30 transition-all duration-500">
              <div className="text-5xl font-black text-[#b17400] mb-3">95%</div>
              <div className="text-gray-200 font-bold text-xl">Success Rate</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-[#b17400] shadow-2xl group-hover:shadow-[#b17400]/30 transition-all duration-500">
              <div className="text-5xl font-black text-[#991b1b] mb-3">50+</div>
              <div className="text-gray-200 font-bold text-xl">Expert Instructors</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 