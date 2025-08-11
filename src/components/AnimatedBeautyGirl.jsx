'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AnimatedBeautyGirl() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full min-h-[480px] flex flex-col md:flex-row items-center justify-between overflow-hidden bg-gradient-to-br from-pink-100 to-white py-12 md:py-0">
      {/* Animated Beauty Girl */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative z-10">
        <motion.div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
        >
          {/* Main Girl Figure */}
          <motion.div
            animate={{
              y: isHovered ? [-5, 5, -5] : 0,
              rotate: isHovered ? [0, 2, -2, 0] : 0
            }}
            transition={{
              duration: 3,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut"
            }}
            className="relative w-[400px] h-[500px]"
          >
            {/* Hair */}
            <motion.div
              animate={{
                scale: isHovered ? [1, 1.02, 1] : 1,
                rotate: isHovered ? [0, 1, -1, 0] : 0
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-32"
            >
              {/* Hair layers */}
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.1, 1] : 1
                }}
                transition={{
                  duration: 1.5,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-b from-pink-300 to-purple-400 rounded-full"
              />
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.05, 1] : 1
                }}
                transition={{
                  duration: 1.8,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="absolute inset-2 bg-gradient-to-b from-pink-200 to-purple-300 rounded-full"
              />
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.08, 1] : 1
                }}
                transition={{
                  duration: 1.2,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="absolute inset-4 bg-gradient-to-b from-pink-100 to-purple-200 rounded-full"
              />
            </motion.div>

            {/* Face */}
            <motion.div
              animate={{
                scale: isHovered ? [1, 1.02, 1] : 1
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
              className="absolute top-16 left-1/2 transform -translate-x-1/2 w-32 h-40 bg-gradient-to-b from-pink-50 to-pink-100 rounded-full"
            >
              {/* Eyes */}
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.1, 1] : 1
                }}
                transition={{
                  duration: 1,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="absolute top-8 left-8 w-4 h-6 bg-white rounded-full border-2 border-gray-300"
              >
                <motion.div
                  animate={{
                    scale: isHovered ? [1, 1.2, 1] : 1
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: isHovered ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1 left-1 w-2 h-2 bg-blue-500 rounded-full"
                />
              </motion.div>

              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.1, 1] : 1
                }}
                transition={{
                  duration: 1.2,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="absolute top-8 right-8 w-4 h-6 bg-white rounded-full border-2 border-gray-300"
              >
                <motion.div
                  animate={{
                    scale: isHovered ? [1, 1.2, 1] : 1
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: isHovered ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1 left-1 w-2 h-2 bg-blue-500 rounded-full"
                />
              </motion.div>

              {/* Lips */}
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.05, 1] : 1
                }}
                transition={{
                  duration: 1.5,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-red-400 rounded-full"
              />

              {/* Cheek blush */}
              <motion.div
                animate={{
                  opacity: isHovered ? [0.3, 0.8, 0.3] : 0.5
                }}
                transition={{
                  duration: 2,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="absolute top-12 left-4 w-3 h-2 bg-pink-300 rounded-full opacity-50"
              />
              <motion.div
                animate={{
                  opacity: isHovered ? [0.3, 0.8, 0.3] : 0.5
                }}
                transition={{
                  duration: 2.2,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="absolute top-12 right-4 w-3 h-2 bg-pink-300 rounded-full opacity-50"
              />
            </motion.div>

            {/* Neck */}
            <motion.div
              animate={{
                scale: isHovered ? [1, 1.01, 1] : 1
              }}
              transition={{
                duration: 2.5,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
              className="absolute top-52 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-b from-pink-50 to-pink-100 rounded-full"
            />

            {/* Body */}
            <motion.div
              animate={{
                scale: isHovered ? [1, 1.02, 1] : 1
              }}
              transition={{
                duration: 2.8,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
              className="absolute top-56 left-1/2 transform -translate-x-1/2 w-24 h-32 bg-gradient-to-b from-pink-100 to-purple-200 rounded-full"
            />

            {/* Arms */}
            <motion.div
              animate={{
                rotate: isHovered ? [0, 5, -5, 0] : 0
              }}
              transition={{
                duration: 3,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
              className="absolute top-60 left-8 w-4 h-16 bg-gradient-to-b from-pink-50 to-pink-100 rounded-full"
            />
            <motion.div
              animate={{
                rotate: isHovered ? [0, -5, 5, 0] : 0
              }}
              transition={{
                duration: 3.2,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
              className="absolute top-60 right-8 w-4 h-16 bg-gradient-to-b from-pink-50 to-pink-100 rounded-full"
            />
          </motion.div>

          {/* Beauty Elements */}
          <motion.div
            animate={{
              rotate: isHovered ? [0, 360] : 0
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full opacity-80"
          />
          
          <motion.div
            animate={{
              rotate: isHovered ? [0, -360] : 0
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-300 rounded-full opacity-80"
          />

          {/* Sparkles */}
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              animate={{
                opacity: isHovered ? [0, 1, 0] : 0,
                scale: isHovered ? [0, 1, 0] : 0,
                x: isHovered ? [0, Math.random() * 20 - 10] : 0,
                y: isHovered ? [0, Math.random() * 20 - 10] : 0
              }}
              transition={{
                duration: 1.5,
                repeat: isHovered ? Infinity : 0,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full"
              style={{
                left: `${20 + index * 15}%`,
                top: `${30 + index * 10}%`
              }}
            />
          ))}

          {/* Makeup Brush */}
          <motion.div
            animate={{
              x: isHovered ? [0, 10, 0] : 0,
              y: isHovered ? [0, -5, 0] : 0,
              rotate: isHovered ? [0, 15, 0] : 0
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-20"
          >
            <div className="relative">
              {/* Brush handle */}
              <div className="w-1 h-8 bg-gradient-to-t from-gray-600 to-gray-400 rounded-full" />
              {/* Brush bristles */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-400 rounded-full" />
            </div>
          </motion.div>

          {/* Lipstick */}
          <motion.div
            animate={{
              x: isHovered ? [0, -8, 0] : 0,
              y: isHovered ? [0, 3, 0] : 0,
              rotate: isHovered ? [0, -10, 0] : 0
            }}
            transition={{
              duration: 2.5,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut"
            }}
            className="absolute bottom-32 left-16"
          >
            <div className="relative">
              {/* Lipstick tube */}
              <div className="w-3 h-8 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full" />
              {/* Lipstick tip */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full" />
            </div>
          </motion.div>
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
          Salon & Beauty Academy
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-pink-600 mb-6 max-w-md"
        >
          Discover your beauty, master your art. Join our academy for professional training in hair, makeup, and more!
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
            <a href="/academy" className="btn-paper-cut text-lg">Explore Courses</a>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/booking" className="btn-paper-cut bg-pink-600 hover:bg-pink-700 text-white text-lg">Book Appointment</a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
} 