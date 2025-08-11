'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Animated Beauty Icon
export const AnimatedBeautyIcon = ({ 
  icon, 
  label, 
  color = "primary",
  size = "medium",
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-16 h-16',
    large: 'w-20 h-20'
  };

  const colorClasses = {
    primary: 'bg-primary-500',
    accent: 'bg-accent-500',
    pink: 'bg-pink-500',
    purple: 'bg-purple-500',
    gold: 'bg-yellow-500'
  };

  return (
    <motion.div
      className={`text-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{
          scale: isHovered ? [1, 1.1, 1] : 1,
          rotate: isHovered ? [0, 5, -5, 0] : 0
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut"
        }}
        className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg`}
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? [0, 10, -10, 0] : 0
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut"
          }}
          className="text-white text-2xl"
        >
          {icon}
        </motion.div>
      </motion.div>
      
      <motion.p
        animate={{
          color: isHovered ? '#8B5CF6' : '#374151'
        }}
        transition={{
          duration: 0.3
        }}
        className="text-sm font-medium text-gray-700"
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

// Beauty Services Icons
export const BeautyServicesIcons = () => {
  const services = [
    { icon: '💄', label: 'Makeup', color: 'pink' },
    { icon: '💇‍♀️', label: 'Hair Styling', color: 'primary' },
    { icon: '💅', label: 'Nail Art', color: 'purple' },
    { icon: '✨', label: 'Facial', color: 'accent' },
    { icon: '🎨', label: 'Beauty Art', color: 'gold' },
    { icon: '🌟', label: 'Glamour', color: 'pink' }
  ];

  return (
    <div className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Our Beauty Services
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Professional beauty services tailored to enhance your natural beauty and confidence
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-[#b17400] to-[#d4a017] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-[#b17400] shadow-2xl group-hover:shadow-[#b17400]/30 transition-all duration-500 hover:transform hover:-translate-y-3">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#991b1b] to-[#b17400] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-[#991b1b]/50 transition-all duration-300">
                    <span className="text-white text-3xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-lg group-hover:text-[#d4a017] transition-colors duration-300">
                    {service.label}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Animated Beauty Stats
export const AnimatedBeautyStats = () => {
  const stats = [
    { icon: '👩‍🎨', label: 'Expert Artists', value: '50+', color: 'pink' },
    { icon: '💄', label: 'Services', value: '25+', color: 'primary' },
    { icon: '⭐', label: 'Happy Clients', value: '1000+', color: 'purple' },
    { icon: '🏆', label: 'Awards', value: '15+', color: 'gold' }
  ];

  return (
    <div className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Our Achievements
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Celebrating our success and commitment to excellence in beauty services
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-[#b17400] to-[#d4a017] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-[#b17400] shadow-2xl group-hover:shadow-[#b17400]/30 transition-all duration-500 hover:transform hover:-translate-y-3">
                <div className="text-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  >
                    {stat.icon}
                  </motion.div>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.3 }}
                    viewport={{ once: true }}
                    className="text-4xl font-black text-[#d4a017] mb-4 group-hover:text-[#b17400] transition-colors duration-300"
                  >
                    {stat.value}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#d4a017] transition-colors duration-300">
                    {stat.label}
                  </h3>
                  
                  <div className="mt-4 w-12 h-1 bg-gradient-to-r from-[#b17400] to-[#d4a017] mx-auto rounded-full group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Floating Beauty Icons
export const FloatingBeautyIcons = () => {
  const icons = ['💄', '💅', '✨', '🌟', '🎨', '💇‍♀️'];

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          animate={{
            x: [0, Math.random() * 300 - 150],
            y: [0, Math.random() * 300 - 150],
            rotate: [0, 360],
            scale: [0.3, 0.8, 0.3],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: 12 + index * 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute text-3xl filter drop-shadow-lg"
          style={{
            left: `${15 + index * 12}%`,
            top: `${25 + index * 8}%`,
            filter: 'drop-shadow(0 0 10px rgba(177, 116, 0, 0.3))'
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

// Animated Beauty Quote
export const AnimatedBeautyQuote = () => {
  return (
    <div className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-7xl mb-8 filter drop-shadow-lg"
            style={{ filter: 'drop-shadow(0 0 20px rgba(177, 116, 0, 0.5))' }}
          >
            ✨
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight"
          >
            "Beauty begins the moment you decide to be yourself"
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 w-32 h-1 bg-gradient-to-r from-[#b17400] to-[#d4a017] mx-auto rounded-full"
          ></motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
            className="text-2xl text-[#d4a017] font-bold mt-8"
          >
            - Coco Chanel
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#991b1b] to-[#b17400] rounded-full border-2 border-[#b17400] shadow-2xl">
              <span className="text-white text-lg font-semibold">Discover Your Beauty</span>
              <span className="text-white text-2xl">✨</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}; 