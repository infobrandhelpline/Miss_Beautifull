'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AnimatedMakeupKit() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full min-h-[600px] flex flex-col md:flex-row items-center justify-between overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50 py-12 md:py-0">
      {/* Animated Makeup Kit */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative z-10">
        <motion.div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.02 }}
        >
          {/* Makeup Kit Container */}
          <motion.div
            animate={{
              y: isHovered ? [-5, 5, -5] : 0,
              rotate: isHovered ? [0, 2, -2, 0] : 0
            }}
            transition={{
              duration: 4,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut"
            }}
            className="relative w-[500px] h-[400px]"
          >
            {/* Kit Box */}
            <motion.div
              animate={{
                scale: isHovered ? [1, 1.05, 1] : 1
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 rounded-2xl shadow-2xl border-4 border-pink-400"
            >
              {/* Kit Lid */}
              <motion.div
                animate={{
                  y: isHovered ? [-2, 2, -2] : 0
                }}
                transition={{
                  duration: 3,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-pink-300 to-purple-300 rounded-t-2xl"
              />
            </motion.div>

            {/* Makeup Brushes */}
            <motion.div
              animate={{
                x: isHovered ? [0, 10, 0] : 0,
                y: isHovered ? [0, -5, 0] : 0,
                rotate: isHovered ? [0, 15, 0] : 0
              }}
              transition={{
                duration: 2.5,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
              className="absolute top-20 left-20"
            >
              {/* Brush 1 - Foundation */}
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.1, 1] : 1
                }}
                transition={{
                  duration: 1.5,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="relative mb-4"
              >
                <div className="w-2 h-12 bg-gradient-to-t from-gray-600 to-gray-400 rounded-full" />
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-pink-400 rounded-full" />
              </motion.div>

              {/* Brush 2 - Eyeshadow */}
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.08, 1] : 1
                }}
                transition={{
                  duration: 1.8,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="relative mb-4"
              >
                <div className="w-1.5 h-10 bg-gradient-to-t from-gray-600 to-gray-400 rounded-full" />
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full" />
              </motion.div>

              {/* Brush 3 - Lip */}
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.12, 1] : 1
                }}
                transition={{
                  duration: 1.2,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="w-1 h-8 bg-gradient-to-t from-gray-600 to-gray-400 rounded-full" />
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-400 rounded-full" />
              </motion.div>
            </motion.div>

            {/* Compact Mirror */}
            <motion.div
              animate={{
                x: isHovered ? [0, -8, 0] : 0,
                y: isHovered ? [0, 3, 0] : 0,
                rotate: isHovered ? [0, -10, 0] : 0
              }}
              transition={{
                duration: 2.8,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
              className="absolute top-16 right-24"
            >
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.15, 1] : 1
                }}
                transition={{
                  duration: 1.5,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="w-16 h-12 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-lg border-2 border-yellow-600 shadow-lg"
              >
                <div className="w-full h-full bg-gradient-to-br from-white to-gray-200 rounded-lg" />
                <motion.div
                  animate={{
                    opacity: isHovered ? [0.3, 0.8, 0.3] : 0.5
                  }}
                  transition={{
                    duration: 2,
                    repeat: isHovered ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1 right-1 w-2 h-2 bg-yellow-300 rounded-full"
                />
              </motion.div>
            </motion.div>

            {/* Lipsticks */}
            <motion.div
              animate={{
                x: isHovered ? [0, 12, 0] : 0,
                y: isHovered ? [0, -3, 0] : 0,
                rotate: isHovered ? [0, 8, 0] : 0
              }}
              transition={{
                duration: 3,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
              className="absolute bottom-20 left-16"
            >
              {/* Lipstick 1 - Red */}
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.1, 1] : 1
                }}
                transition={{
                  duration: 1.6,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="relative mb-3"
              >
                <div className="w-4 h-12 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full shadow-md" />
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full" />
              </motion.div>

              {/* Lipstick 2 - Pink */}
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.08, 1] : 1
                }}
                transition={{
                  duration: 1.8,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="w-4 h-12 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full shadow-md" />
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-pink-500 rounded-full" />
              </motion.div>
            </motion.div>

            {/* Eyeshadow Palette */}
            <motion.div
              animate={{
                x: isHovered ? [0, -10, 0] : 0,
                y: isHovered ? [0, 5, 0] : 0,
                rotate: isHovered ? [0, -5, 0] : 0
              }}
              transition={{
                duration: 2.2,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
              className="absolute bottom-24 right-16"
            >
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.12, 1] : 1
                }}
                transition={{
                  duration: 1.4,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="w-20 h-16 bg-gradient-to-br from-purple-300 to-purple-500 rounded-lg border-2 border-purple-600 shadow-lg"
              >
                {/* Eyeshadow colors */}
                <div className="grid grid-cols-4 gap-1 p-2">
                  <div className="w-3 h-3 bg-pink-400 rounded-sm" />
                  <div className="w-3 h-3 bg-purple-400 rounded-sm" />
                  <div className="w-3 h-3 bg-blue-400 rounded-sm" />
                  <div className="w-3 h-3 bg-green-400 rounded-sm" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-sm" />
                  <div className="w-3 h-3 bg-orange-400 rounded-sm" />
                  <div className="w-3 h-3 bg-red-400 rounded-sm" />
                  <div className="w-3 h-3 bg-gray-400 rounded-sm" />
                </div>
              </motion.div>
            </motion.div>

            {/* Nail Polish */}
            <motion.div
              animate={{
                x: isHovered ? [0, 8, 0] : 0,
                y: isHovered ? [0, -2, 0] : 0,
                rotate: isHovered ? [0, 12, 0] : 0
              }}
              transition={{
                duration: 2.6,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
              className="absolute top-32 left-8"
            >
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.1, 1] : 1
                }}
                transition={{
                  duration: 1.7,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="w-6 h-10 bg-white border-2 border-gray-300 rounded-lg shadow-md">
                  <div className="absolute bottom-1 left-1 right-1 h-6 bg-pink-400 rounded-sm" />
                </div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gray-600 rounded-full" />
              </motion.div>
            </motion.div>

            {/* Mascara */}
            <motion.div
              animate={{
                x: isHovered ? [0, -5, 0] : 0,
                y: isHovered ? [0, 8, 0] : 0,
                rotate: isHovered ? [0, -8, 0] : 0
              }}
              transition={{
                duration: 2.4,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
              className="absolute bottom-16 right-8"
            >
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.08, 1] : 1
                }}
                transition={{
                  duration: 1.9,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="w-4 h-16 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full shadow-md" />
            </motion.div>

            {/* Eyeliner */}
            <motion.div
              animate={{
                x: isHovered ? [0, 6, 0] : 0,
                y: isHovered ? [0, -4, 0] : 0,
                rotate: isHovered ? [0, 10, 0] : 0
              }}
              transition={{
                duration: 2.7,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
              className="absolute top-40 left-12"
            >
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.05, 1] : 1
                }}
                transition={{
                  duration: 1.3,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="w-3 h-12 bg-gradient-to-b from-black to-gray-800 rounded-full shadow-md" />
            </motion.div>
          </motion.div>

          {/* Sparkles around the kit */}
          {[...Array(10)].map((_, index) => (
            <motion.div
              key={index}
              animate={{
                opacity: isHovered ? [0, 1, 0] : 0,
                scale: isHovered ? [0, 1, 0] : 0,
                x: isHovered ? [0, Math.random() * 40 - 20] : 0,
                y: isHovered ? [0, Math.random() * 40 - 20] : 0
              }}
              transition={{
                duration: 2.5,
                repeat: isHovered ? Infinity : 0,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full"
              style={{
                left: `${10 + index * 8}%`,
                top: `${20 + index * 6}%`
              }}
            />
          ))}

          {/* Floating beauty elements */}
          <motion.div
            animate={{
              rotate: isHovered ? [0, 360] : 0
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-8 -right-8 w-12 h-12 bg-pink-300 rounded-full opacity-80 shadow-lg"
          />
          
          <motion.div
            animate={{
              rotate: isHovered ? [0, -360] : 0
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-8 -left-8 w-10 h-10 bg-purple-300 rounded-full opacity-80 shadow-lg"
          />
        </motion.div>
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-6 md:px-12 py-8 md:py-0 z-20"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-700 mb-4 drop-shadow-lg"
        >
          Professional Makeup Kit
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-pink-600 mb-6 max-w-md"
        >
          Discover our premium makeup collection with professional brushes, cosmetics, and beauty tools for every look!
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/services" className="btn-paper-cut text-lg">Explore Products</a>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/booking" className="btn-paper-cut bg-pink-600 hover:bg-pink-700 text-white text-lg">Book Session</a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
} 