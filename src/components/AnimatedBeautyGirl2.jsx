'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AnimatedBeautyGirl2() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full min-h-[600px] flex flex-col md:flex-row items-center justify-between overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50 py-12 md:py-0">
      {/* Animated Beauty Girl */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative z-10">
        <motion.div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.02 }}
        >
          {/* Main Container */}
          <motion.div
            animate={{
              y: isHovered ? [-3, 3, -3] : 0
            }}
            transition={{
              duration: 4,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut"
            }}
            className="relative w-[450px] h-[550px]"
          >
            {/* Hair */}
            <motion.div
              animate={{
                scale: isHovered ? [1, 1.03, 1] : 1,
                rotate: isHovered ? [0, 1, -1, 0] : 0
              }}
              transition={{
                duration: 3,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-56 h-36"
            >
              {/* Hair layers with more detail */}
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.05, 1] : 1
                }}
                transition={{
                  duration: 2,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-b from-pink-400 via-purple-400 to-pink-500 rounded-full shadow-lg"
              />
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.03, 1] : 1
                }}
                transition={{
                  duration: 2.5,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="absolute inset-3 bg-gradient-to-b from-pink-300 via-purple-300 to-pink-400 rounded-full"
              />
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.04, 1] : 1
                }}
                transition={{
                  duration: 2.2,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="absolute inset-6 bg-gradient-to-b from-pink-200 via-purple-200 to-pink-300 rounded-full"
              />
              
              {/* Hair highlights */}
              <motion.div
                animate={{
                  opacity: isHovered ? [0.3, 0.8, 0.3] : 0.5
                }}
                transition={{
                  duration: 2.8,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="absolute top-2 left-8 w-4 h-8 bg-yellow-200 rounded-full opacity-60"
              />
              <motion.div
                animate={{
                  opacity: isHovered ? [0.3, 0.8, 0.3] : 0.5
                }}
                transition={{
                  duration: 3,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="absolute top-4 right-12 w-3 h-6 bg-yellow-200 rounded-full opacity-60"
              />
            </motion.div>

            {/* Face */}
            <motion.div
              animate={{
                scale: isHovered ? [1, 1.01, 1] : 1
              }}
              transition={{
                duration: 2.5,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
              className="absolute top-20 left-1/2 transform -translate-x-1/2 w-36 h-44 bg-gradient-to-b from-pink-50 via-pink-100 to-pink-150 rounded-full shadow-md"
            >
              {/* Eyes with more detail */}
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.08, 1] : 1
                }}
                transition={{
                  duration: 1.2,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="absolute top-10 left-10 w-5 h-7 bg-white rounded-full border-2 border-gray-300 shadow-sm"
              >
                <motion.div
                  animate={{
                    scale: isHovered ? [1, 1.3, 1] : 1
                  }}
                  transition={{
                    duration: 1,
                    repeat: isHovered ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1 left-1 w-2.5 h-2.5 bg-blue-500 rounded-full"
                />
                <motion.div
                  animate={{
                    scale: isHovered ? [1, 1.2, 1] : 1
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: isHovered ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                  className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full"
                />
              </motion.div>

              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.08, 1] : 1
                }}
                transition={{
                  duration: 1.4,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="absolute top-10 right-10 w-5 h-7 bg-white rounded-full border-2 border-gray-300 shadow-sm"
              >
                <motion.div
                  animate={{
                    scale: isHovered ? [1, 1.3, 1] : 1
                  }}
                  transition={{
                    duration: 1,
                    repeat: isHovered ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1 left-1 w-2.5 h-2.5 bg-blue-500 rounded-full"
                />
                <motion.div
                  animate={{
                    scale: isHovered ? [1, 1.2, 1] : 1
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: isHovered ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                  className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full"
                />
              </motion.div>

              {/* Eyebrows */}
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.05, 1] : 1
                }}
                transition={{
                  duration: 1.6,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="absolute top-8 left-8 w-4 h-1 bg-brown-600 rounded-full"
              />
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.05, 1] : 1
                }}
                transition={{
                  duration: 1.6,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="absolute top-8 right-8 w-4 h-1 bg-brown-600 rounded-full"
              />

              {/* Nose */}
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.02, 1] : 1
                }}
                transition={{
                  duration: 2,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="absolute top-16 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-pink-200 rounded-full"
              />

              {/* Lips */}
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.06, 1] : 1
                }}
                transition={{
                  duration: 1.8,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-red-400 rounded-full shadow-sm"
              />

              {/* Cheek blush */}
              <motion.div
                animate={{
                  opacity: isHovered ? [0.4, 0.9, 0.4] : 0.6
                }}
                transition={{
                  duration: 2.5,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="absolute top-14 left-6 w-4 h-3 bg-pink-300 rounded-full opacity-60"
              />
              <motion.div
                animate={{
                  opacity: isHovered ? [0.4, 0.9, 0.4] : 0.6
                }}
                transition={{
                  duration: 2.7,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="absolute top-14 right-6 w-4 h-3 bg-pink-300 rounded-full opacity-60"
              />
            </motion.div>

            {/* Neck */}
            <motion.div
              animate={{
                scale: isHovered ? [1, 1.01, 1] : 1
              }}
              transition={{
                duration: 2.8,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
              className="absolute top-60 left-1/2 transform -translate-x-1/2 w-20 h-10 bg-gradient-to-b from-pink-50 to-pink-100 rounded-full"
            />

            {/* Body/Dress */}
            <motion.div
              animate={{
                scale: isHovered ? [1, 1.02, 1] : 1
              }}
              transition={{
                duration: 3,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
              className="absolute top-64 left-1/2 transform -translate-x-1/2 w-32 h-40 bg-gradient-to-b from-pink-200 via-purple-200 to-pink-300 rounded-full shadow-lg"
            >
              {/* Dress details */}
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.05, 1] : 1
                }}
                transition={{
                  duration: 2.5,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-pink-400 rounded-full"
              />
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.03, 1] : 1
                }}
                transition={{
                  duration: 2.8,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="absolute top-12 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-purple-400 rounded-full"
              />
            </motion.div>

            {/* Arms */}
            <motion.div
              animate={{
                rotate: isHovered ? [0, 3, -3, 0] : 0
              }}
              transition={{
                duration: 3.5,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
              className="absolute top-68 left-6 w-5 h-20 bg-gradient-to-b from-pink-50 to-pink-100 rounded-full"
            />
            <motion.div
              animate={{
                rotate: isHovered ? [0, -3, 3, 0] : 0
              }}
              transition={{
                duration: 3.7,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
              className="absolute top-68 right-6 w-5 h-20 bg-gradient-to-b from-pink-50 to-pink-100 rounded-full"
            />
          </motion.div>

          {/* Beauty Elements Around */}
          <motion.div
            animate={{
              rotate: isHovered ? [0, 360] : 0
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-6 -right-6 w-10 h-10 bg-yellow-300 rounded-full opacity-80 shadow-lg"
          />
          
          <motion.div
            animate={{
              rotate: isHovered ? [0, -360] : 0
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-6 -left-6 w-8 h-8 bg-pink-300 rounded-full opacity-80 shadow-lg"
          />

          {/* More Sparkles */}
          {[...Array(8)].map((_, index) => (
            <motion.div
              key={index}
              animate={{
                opacity: isHovered ? [0, 1, 0] : 0,
                scale: isHovered ? [0, 1, 0] : 0,
                x: isHovered ? [0, Math.random() * 30 - 15] : 0,
                y: isHovered ? [0, Math.random() * 30 - 15] : 0
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                delay: index * 0.15,
                ease: "easeOut"
              }}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full"
              style={{
                left: `${15 + index * 12}%`,
                top: `${25 + index * 8}%`
              }}
            />
          ))}

          {/* Makeup Brush */}
          <motion.div
            animate={{
              x: isHovered ? [0, 15, 0] : 0,
              y: isHovered ? [0, -8, 0] : 0,
              rotate: isHovered ? [0, 20, 0] : 0
            }}
            transition={{
              duration: 2.5,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut"
            }}
            className="absolute top-24 right-24"
          >
            <div className="relative">
              {/* Brush handle */}
              <div className="w-1.5 h-10 bg-gradient-to-t from-gray-600 to-gray-400 rounded-full shadow-md" />
              {/* Brush bristles */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-pink-400 rounded-full shadow-sm" />
            </div>
          </motion.div>

          {/* Lipstick */}
          <motion.div
            animate={{
              x: isHovered ? [0, -12, 0] : 0,
              y: isHovered ? [0, 5, 0] : 0,
              rotate: isHovered ? [0, -15, 0] : 0
            }}
            transition={{
              duration: 3,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut"
            }}
            className="absolute bottom-40 left-20"
          >
            <div className="relative">
              {/* Lipstick tube */}
              <div className="w-4 h-10 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full shadow-md" />
              {/* Lipstick tip */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full" />
            </div>
          </motion.div>

          {/* Mirror */}
          <motion.div
            animate={{
              scale: isHovered ? [1, 1.1, 1] : 1,
              rotate: isHovered ? [0, 5, -5, 0] : 0
            }}
            transition={{
              duration: 2.8,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut"
            }}
            className="absolute top-32 left-8"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full border-4 border-yellow-600 shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-white to-gray-200 rounded-full" />
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