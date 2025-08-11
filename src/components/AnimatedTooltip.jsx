'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function AnimatedTooltip({ 
  children, 
  content, 
  position = "top",
  delay = 0.5,
  className = ""
}) {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
  };

  const arrowClasses = {
    top: "top-full left-1/2 transform -translate-x-1/2 border-t-gray-800",
    bottom: "bottom-full left-1/2 transform -translate-x-1/2 border-b-gray-800",
    left: "left-full top-1/2 transform -translate-y-1/2 border-l-gray-800",
    right: "right-full top-1/2 transform -translate-y-1/2 border-r-gray-800"
  };

  return (
    <div 
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 5 }}
            transition={{ duration: 0.2, delay }}
            className={`absolute z-50 ${positionClasses[position]}`}
          >
            <div className="bg-gray-800 text-white text-sm rounded-lg px-3 py-2 whitespace-nowrap shadow-lg">
              {content}
              <div className={`absolute w-0 h-0 border-4 border-transparent ${arrowClasses[position]}`} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Info tooltip with icon
export const InfoTooltip = ({ content, children, position = "top" }) => {
  return (
    <AnimatedTooltip content={content} position={position}>
      <div className="inline-flex items-center">
        {children}
        <div className="ml-1 w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold cursor-help">
          i
        </div>
      </div>
    </AnimatedTooltip>
  );
};

// Help tooltip
export const HelpTooltip = ({ content, children, position = "top" }) => {
  return (
    <AnimatedTooltip content={content} position={position}>
      <div className="inline-flex items-center">
        {children}
        <div className="ml-1 w-4 h-4 bg-gray-500 text-white rounded-full flex items-center justify-center text-xs font-bold cursor-help">
          ?
        </div>
      </div>
    </AnimatedTooltip>
  );
};

// Error tooltip
export const ErrorTooltip = ({ content, children, position = "top" }) => {
  return (
    <AnimatedTooltip content={content} position={position}>
      <div className="inline-flex items-center">
        {children}
        <div className="ml-1 w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold cursor-help">
          !
        </div>
      </div>
    </AnimatedTooltip>
  );
};

// Success tooltip
export const SuccessTooltip = ({ content, children, position = "top" }) => {
  return (
    <AnimatedTooltip content={content} position={position}>
      <div className="inline-flex items-center">
        {children}
        <div className="ml-1 w-4 h-4 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold cursor-help">
          ✓
        </div>
      </div>
    </AnimatedTooltip>
  );
};

// Rich tooltip with title and description
export const RichTooltip = ({ 
  title, 
  description, 
  children, 
  position = "top",
  type = "info" 
}) => {
  const typeClasses = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    success: "bg-green-50 border-green-200 text-green-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    error: "bg-red-50 border-red-200 text-red-800"
  };

  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 5 }}
            transition={{ duration: 0.2 }}
            className={`absolute z-50 ${positionClasses[position]} max-w-xs`}
          >
            <div className={`${typeClasses[type]} border rounded-lg p-3 shadow-lg`}>
              {title && (
                <div className="font-semibold mb-1">{title}</div>
              )}
              {description && (
                <div className="text-sm opacity-90">{description}</div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Interactive tooltip with actions
export const InteractiveTooltip = ({ 
  content, 
  children, 
  position = "top",
  actions = []
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 5 }}
            transition={{ duration: 0.2 }}
            className={`absolute z-50 ${positionClasses[position]}`}
          >
            <div className="bg-gray-800 text-white rounded-lg p-3 shadow-lg min-w-48">
              <div className="mb-2">{content}</div>
              
              {actions.length > 0 && (
                <div className="flex gap-2 pt-2 border-t border-gray-600">
                  {actions.map((action, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={action.onClick}
                      className="text-xs px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded transition-colors"
                    >
                      {action.label}
                    </motion.button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 