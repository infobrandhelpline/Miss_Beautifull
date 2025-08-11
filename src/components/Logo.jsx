'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo({ className = "w-16 h-16" }) {
  return (
    <Link href="/" className="flex items-center">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative ${className}`}
      >
        {/* Your uploaded logo image */}
        <div className="w-full h-full rounded-full overflow-hidden shadow-lg">
          <Image
            src="/logo.png"
            alt="Miss Beautyfull Logo"
            width={50}
            height={50}
            quality={100}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </motion.div>
    </Link>
  );
} 