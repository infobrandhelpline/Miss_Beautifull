'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Animated Lipstick
export const AnimatedLipstick = ({ color = "red" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    red: 'bg-red-500',
    pink: 'bg-pink-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
    brown: 'bg-yellow-700'
  };

  return (
    <motion.div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Lipstick tube */}
      <motion.div
        animate={{
          y: isHovered ? [-5, 5, -5] : 0,
          rotate: isHovered ? [0, 5, -5, 0] : 0
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
        className="w-4 h-12 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full mx-auto"
      />
      
      {/* Lipstick tip */}
      <motion.div
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1,
          y: isHovered ? [-2, 2, -2] : 0
        }}
        transition={{
          duration: 1.5,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
        className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 ${colorClasses[color]} rounded-full`}
      />
    </motion.div>
  );
};

// Animated Nail Polish
export const AnimatedNailPolish = ({ color = "pink" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    pink: 'bg-pink-400',
    red: 'bg-red-400',
    purple: 'bg-purple-400',
    blue: 'bg-blue-400',
    green: 'bg-green-400'
  };

  return (
    <motion.div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Nail polish bottle */}
      <motion.div
        animate={{
          rotate: isHovered ? [0, -10, 10, 0] : 0,
          y: isHovered ? [-3, 3, -3] : 0
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
        className="w-6 h-8 bg-white border-2 border-gray-300 rounded-lg mx-auto relative"
      >
        {/* Polish color */}
        <motion.div
          animate={{
            scale: isHovered ? [1, 1.1, 1] : 1
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
          className={`absolute bottom-1 left-1 right-1 h-4 ${colorClasses[color]} rounded-sm`}
        />
      </motion.div>
      
      {/* Brush */}
      <motion.div
        animate={{
          rotate: isHovered ? [0, 15, -15, 0] : 0
        }}
        transition={{
          duration: 1.8,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
        className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gray-600 rounded-full"
      />
    </motion.div>
  );
};

// Animated Mirror
export const AnimatedMirror = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Mirror frame */}
      <motion.div
        animate={{
          rotate: isHovered ? [0, -5, 5, 0] : 0,
          scale: isHovered ? [1, 1.05, 1] : 1
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
        className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full mx-auto border-4 border-yellow-600"
      >
        {/* Mirror reflection */}
        <motion.div
          animate={{
            opacity: isHovered ? [0.3, 0.8, 0.3] : 0.5
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
          className="w-full h-full bg-gradient-to-br from-white to-gray-200 rounded-full"
        />
      </motion.div>
      
      {/* Sparkles */}
      <motion.div
        animate={{
          opacity: isHovered ? [0, 1, 0] : 0,
          scale: isHovered ? [0, 1, 0] : 0
        }}
        transition={{
          duration: 1,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
        className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full"
      />
    </motion.div>
  );
};

// Animated Hair Dryer
export const AnimatedHairDryer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Hair dryer body */}
      <motion.div
        animate={{
          rotate: isHovered ? [0, -15, 15, 0] : 0,
          y: isHovered ? [-3, 3, -3] : 0
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
        className="w-8 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mx-auto"
      />
      
      {/* Air flow */}
      <motion.div
        animate={{
          scale: isHovered ? [0, 1, 0] : 0,
          opacity: isHovered ? [0, 0.8, 0] : 0
        }}
        transition={{
          duration: 1,
          repeat: isHovered ? Infinity : 0,
          ease: "easeOut"
        }}
        className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-2 bg-gradient-to-r from-blue-200 to-transparent rounded-r-full"
      />
    </motion.div>
  );
};

// Beauty Tools Collection
export const BeautyToolsCollection = () => {
  const tools = [
    { component: AnimatedLipstick, props: { color: "red" }, name: "Lipstick" },
    { component: AnimatedNailPolish, props: { color: "pink" }, name: "Nail Polish" },
    { component: AnimatedMirror, props: {}, name: "Mirror" },
    { component: AnimatedHairDryer, props: {}, name: "Hair Dryer" },
    { component: AnimatedLipstick, props: { color: "purple" }, name: "Lipstick" }
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
            Professional Beauty Tools
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover our collection of premium beauty tools and accessories for professional results
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-[#b17400] to-[#d4a017] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-[#b17400] shadow-2xl group-hover:shadow-[#b17400]/30 transition-all duration-500 hover:transform hover:-translate-y-3">
                <div className="mb-6">
                  <tool.component {...tool.props} />
                </div>
                <h3 className="font-bold text-white text-lg group-hover:text-[#d4a017] transition-colors duration-300">
                  {tool.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-[#991b1b] hover:bg-[#8d0101] text-white text-xl px-10 py-5 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 border-2 border-[#b17400]"
          >
            Explore All Tools
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

// Floating Beauty Tools
export const FloatingBeautyTools = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Lipstick */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-32 left-16"
      >
        <AnimatedLipstick color="red" />
      </motion.div>

      {/* Nail Polish */}
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 50, 0],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-48 right-24"
      >
        <AnimatedNailPolish color="pink" />
      </motion.div>

      {/* Mirror */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -20, 0],
          rotate: [0, 90, 180]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-32 left-20"
      >
        <AnimatedMirror />
      </motion.div>

      {/* Hair Dryer */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 30, 0],
          rotate: [0, -90, -180]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-48 right-16"
      >
        <AnimatedHairDryer />
      </motion.div>
    </div>
  );
}; 