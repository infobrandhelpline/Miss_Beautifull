'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function NewLogo({ className = "w-24 h-24" }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative ${className}`}
    >
      {/* Simple Logo Display */}
      <motion.div
        animate={{ 
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="w-full h-full relative"
      >
        <Image
          src="/logo.png"
          alt="Miss Beautiful Logo"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </motion.div>
  );
} 