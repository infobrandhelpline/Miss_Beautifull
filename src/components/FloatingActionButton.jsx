'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaTimes } from 'react-icons/fa';

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const actionButtons = [
    {
      icon: FaPhone,
      label: 'Call Us',
      href: 'tel:+919876543210',
      color: 'bg-green-500',
      delay: 0.1
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/919876543210',
      color: 'bg-green-600',
      delay: 0.2
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      href: 'mailto:info@missbeautiful.com',
      color: 'bg-blue-500',
      delay: 0.3
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action Buttons */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="flex flex-col items-end space-y-3"
      >
        {actionButtons.map((button, index) => (
          <motion.a
            key={button.label}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              closed: {
                opacity: 0,
                scale: 0,
                x: 20,
                transition: {
                  duration: 0.2,
                  delay: index * 0.1
                }
              },
              open: {
                opacity: 1,
                scale: 1,
                x: 0,
                transition: {
                  duration: 0.3,
                  delay: button.delay
                }
              }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`${button.color} text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2`}
          >
            <button.icon className="text-lg" />
            <span className="text-sm font-medium whitespace-nowrap">
              {button.label}
            </span>
          </motion.a>
        ))}
      </motion.div>

      {/* Main FAB Button */}
      <motion.button
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-gradient-to-r from-primary-500 to-accent-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaTimes className="text-xl" /> : <FaPhone className="text-xl" />}
        </motion.div>
      </motion.button>
    </div>
  );
}

// Animated notification badge
export const AnimatedNotificationBadge = ({ count = 0, children }) => {
  return (
    <div className="relative">
      {children}
      {count > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
        >
          {count > 99 ? '99+' : count}
        </motion.div>
      )}
    </div>
  );
};

// Animated progress indicator
export const AnimatedProgressBar = ({ progress = 0, duration = 2 }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
      />
    </div>
  );
}; 