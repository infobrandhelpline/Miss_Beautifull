'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

export default function AnimatedAccordion({ 
  title, 
  children, 
  isOpen = false,
  onToggle,
  className = ""
}) {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    onToggle?.(!isExpanded);
  };

  return (
    <div className={`border border-gray-200 rounded-lg ${className}`}>
      <motion.button
        whileHover={{ backgroundColor: '#f9fafb' }}
        whileTap={{ scale: 0.98 }}
        onClick={handleToggle}
        className="w-full px-4 py-3 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
      >
        <span className="font-medium text-gray-800">{title}</span>
        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaChevronRight className="text-gray-500" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-3 text-gray-600">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Accordion group for multiple accordions
export const AccordionGroup = ({ children, className = "" }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {children}
    </div>
  );
};

// FAQ Accordion with custom styling
export const FAQAccordion = ({ question, answer, isOpen = false, onToggle }) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    onToggle?.(!isExpanded);
  };

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <motion.button
        whileHover={{ backgroundColor: '#f8fafc' }}
        whileTap={{ scale: 0.99 }}
        onClick={handleToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
      >
        <span className="font-semibold text-gray-800 text-lg">{question}</span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-primary-500"
        >
          <FaChevronDown />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 text-gray-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Course module accordion
export const CourseModuleAccordion = ({ 
  title, 
  description, 
  duration, 
  lessons = [],
  isOpen = false,
  onToggle 
}) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    onToggle?.(!isExpanded);
  };

  return (
    <div className="border border-gray-200 rounded-lg bg-white shadow-sm">
      <motion.button
        whileHover={{ backgroundColor: '#f9fafb' }}
        whileTap={{ scale: 0.98 }}
        onClick={handleToggle}
        className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 text-lg mb-1">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <span>{lessons.length} lessons</span>
              <span className="mx-2">•</span>
              <span>{duration}</span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-primary-500 ml-4"
          >
            <FaChevronDown />
          </motion.div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 border-t border-gray-100">
              <div className="space-y-2 mt-4">
                {lessons.map((lesson, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{lesson.title}</span>
                    </div>
                    <span className="text-sm text-gray-500">{lesson.duration}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Service details accordion
export const ServiceAccordion = ({ 
  service, 
  isOpen = false, 
  onToggle 
}) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    onToggle?.(!isExpanded);
  };

  return (
    <div className="border border-gray-200 rounded-lg bg-white">
      <motion.button
        whileHover={{ backgroundColor: '#f9fafb' }}
        whileTap={{ scale: 0.98 }}
        onClick={handleToggle}
        className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 text-lg">{service.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{service.description}</p>
            <div className="flex items-center mt-2">
              <span className="text-primary-600 font-semibold">₹{service.price}</span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-gray-500 text-sm">{service.duration}</span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-primary-500 ml-4"
          >
            <FaChevronDown />
          </motion.div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 border-t border-gray-100">
              <div className="mt-4 space-y-3">
                {service.features && (
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">What's included:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-600 transition-colors"
                >
                  Book This Service
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 