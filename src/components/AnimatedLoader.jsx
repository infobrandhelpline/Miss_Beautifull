'use client';
import { motion } from 'framer-motion';

export default function AnimatedLoader({ size = 'medium', color = 'primary' }) {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'border-primary-200 border-t-primary-600',
    accent: 'border-accent-200 border-t-accent-600',
    white: 'border-white/20 border-t-white'
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 1, repeat: Infinity, ease: "linear" },
          scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }}
        className={`${sizeClasses[size]} ${colorClasses[color]} border-4 rounded-full`}
      />
    </div>
  );
}

// Pulse loader
export const PulseLoader = ({ size = 'medium', color = 'primary' }) => {
  const sizeClasses = {
    small: 'w-2 h-2',
    medium: 'w-3 h-3',
    large: 'w-4 h-4'
  };

  const colorClasses = {
    primary: 'bg-primary-600',
    accent: 'bg-accent-600',
    white: 'bg-white'
  };

  return (
    <div className="flex items-center justify-center space-x-1">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: index * 0.2
          }}
          className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full`}
        />
      ))}
    </div>
  );
};

// Dots loader
export const DotsLoader = ({ size = 'medium', color = 'primary' }) => {
  const sizeClasses = {
    small: 'w-1 h-1',
    medium: 'w-2 h-2',
    large: 'w-3 h-3'
  };

  const colorClasses = {
    primary: 'bg-primary-600',
    accent: 'bg-accent-600',
    white: 'bg-white'
  };

  return (
    <div className="flex items-center justify-center space-x-1">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -10, 0]
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: index * 0.2
          }}
          className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full`}
        />
      ))}
    </div>
  );
};

// Wave loader
export const WaveLoader = ({ size = 'medium', color = 'primary' }) => {
  const sizeClasses = {
    small: 'w-1 h-4',
    medium: 'w-2 h-6',
    large: 'w-3 h-8'
  };

  const colorClasses = {
    primary: 'bg-primary-600',
    accent: 'bg-accent-600',
    white: 'bg-white'
  };

  return (
    <div className="flex items-center justify-center space-x-1">
      {[0, 1, 2, 3, 4].map((index) => (
        <motion.div
          key={index}
          animate={{
            scaleY: [1, 2, 1]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: index * 0.1
          }}
          className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full`}
        />
      ))}
    </div>
  );
};

// Progress loader
export const ProgressLoader = ({ progress = 0, duration = 2, color = 'primary' }) => {
  const colorClasses = {
    primary: 'bg-primary-600',
    accent: 'bg-accent-600',
    white: 'bg-white'
  };

  return (
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration, ease: "easeOut" }}
        className={`h-full ${colorClasses[color]} rounded-full`}
      />
    </div>
  );
};

// Skeleton loader
export const SkeletonLoader = ({ lines = 3, className = "" }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {[...Array(lines)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="h-4 bg-gray-200 rounded mb-2"
          style={{ width: `${100 - (index * 10)}%` }}
        />
      ))}
    </div>
  );
}; 