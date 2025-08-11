'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AnimatedMakeupBrush({ 
  size = "medium",
  color = "pink",
  className = ""
}) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const colorClasses = {
    pink: 'text-pink-500',
    purple: 'text-purple-500',
    red: 'text-red-500',
    gold: 'text-yellow-500',
    blue: 'text-blue-500'
  };

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Brush handle */}
      <motion.div
        animate={{
          rotate: isHovered ? [0, -5, 5, 0] : 0,
          y: isHovered ? [-2, 2, -2] : 0
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-t from-gray-600 to-gray-400 rounded-full ${colorClasses[color]}`}
      />
      
      {/* Brush bristles */}
      <motion.div
        animate={{
          scale: isHovered ? [1, 1.1, 1] : 1,
          rotate: isHovered ? [0, -10, 10, 0] : 0
        }}
        transition={{
          duration: 1.5,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
        className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 ${colorClasses[color]}`}
      >
        {/* Bristle group 1 */}
        <motion.div
          animate={{
            rotate: isHovered ? [0, 15, -15, 0] : 0
          }}
          transition={{
            duration: 1.2,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        >
          <div className="w-full h-full bg-current rounded-full opacity-60" />
        </motion.div>
        
        {/* Bristle group 2 */}
        <motion.div
          animate={{
            rotate: isHovered ? [0, -20, 20, 0] : 0
          }}
          transition={{
            duration: 1.8,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
          className="absolute inset-1 w-4 h-4 bg-current rounded-full opacity-80"
        />
        
        {/* Bristle group 3 */}
        <motion.div
          animate={{
            rotate: isHovered ? [0, 25, -25, 0] : 0
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
          className="absolute inset-2 w-2 h-2 bg-current rounded-full opacity-100"
        />
      </motion.div>

      {/* Sparkle effects */}
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
        className="absolute -top-2 -right-2 w-2 h-2 bg-yellow-300 rounded-full"
      />
      
      <motion.div
        animate={{
          opacity: isHovered ? [0, 1, 0] : 0,
          scale: isHovered ? [0, 1, 0] : 0
        }}
        transition={{
          duration: 1.2,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
        className="absolute -bottom-1 -left-1 w-1 h-1 bg-pink-300 rounded-full"
      />
    </motion.div>
  );
}

// Makeup brush collection
export const MakeupBrushCollection = () => {
  const brushes = [
    { color: "pink", size: "medium" },
    { color: "purple", size: "small" },
    { color: "gold", size: "large" },
    { color: "red", size: "medium" },
    { color: "blue", size: "small" }
  ];

  return (
    <div className="flex items-center justify-center space-x-4">
      {brushes.map((brush, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <AnimatedMakeupBrush
            color={brush.color}
            size={brush.size}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Floating makeup brushes
export const FloatingMakeupBrushes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {/* Brush 1 */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 360, 720]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-32 left-10"
      >
        <AnimatedMakeupBrush color="pink" size="medium" />
      </motion.div>

      {/* Brush 2 */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          rotate: [0, -360, -720]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-52 right-20"
      >
        <AnimatedMakeupBrush color="purple" size="small" />
      </motion.div>

      {/* Brush 3 */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -30, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-40 left-20"
      >
        <AnimatedMakeupBrush color="gold" size="large" />
      </motion.div>

      {/* Brush 4 */}
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-10"
      >
        <AnimatedMakeupBrush color="red" size="medium" />
      </motion.div>
    </div>
  );
};

// Makeup brush with particles
export const MakeupBrushWithParticles = ({ color = "pink" }) => {
  return (
    <div className="relative">
      <AnimatedMakeupBrush color={color} size="large" />
      
      {/* Particles */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3,
            ease: "easeOut"
          }}
          className={`absolute w-2 h-2 rounded-full ${
            color === "pink" ? "bg-pink-300" :
            color === "purple" ? "bg-purple-300" :
            color === "gold" ? "bg-yellow-300" :
            color === "red" ? "bg-red-300" :
            "bg-blue-300"
          }`}
          style={{
            left: `${50 + Math.random() * 20 - 10}%`,
            top: `${50 + Math.random() * 20 - 10}%`
          }}
        />
      ))}
    </div>
  );
}; 