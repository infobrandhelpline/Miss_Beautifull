'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaCheck, FaExclamationTriangle, FaInfo, FaTimes, FaBell } from 'react-icons/fa';

export default function AnimatedNotification({ 
  message, 
  type = "info", 
  duration = 5000, 
  onClose,
  position = "top-right"
}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => onClose?.(), 300);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const typeConfig = {
    success: {
      icon: FaCheck,
      bgColor: "bg-green-500",
      borderColor: "border-green-500",
      textColor: "text-green-800",
      bgLight: "bg-green-50"
    },
    error: {
      icon: FaExclamationTriangle,
      bgColor: "bg-red-500",
      borderColor: "border-red-500",
      textColor: "text-red-800",
      bgLight: "bg-red-50"
    },
    warning: {
      icon: FaExclamationTriangle,
      bgColor: "bg-yellow-500",
      borderColor: "border-yellow-500",
      textColor: "text-yellow-800",
      bgLight: "bg-yellow-50"
    },
    info: {
      icon: FaInfo,
      bgColor: "bg-blue-500",
      borderColor: "border-blue-500",
      textColor: "text-blue-800",
      bgLight: "bg-blue-50"
    }
  };

  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 transform -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2"
  };

  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 300, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 300, scale: 0.8 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className={`fixed ${positionClasses[position]} z-50 max-w-sm w-full`}
        >
          <div className={`${config.bgLight} border ${config.borderColor} rounded-lg shadow-lg p-4`}>
            <div className="flex items-start">
              <div className={`${config.bgColor} rounded-full p-2 mr-3 flex-shrink-0`}>
                <Icon className="text-white text-sm" />
              </div>
              
              <div className="flex-1">
                <p className={`${config.textColor} font-medium`}>{message}</p>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setIsVisible(false);
                  setTimeout(() => onClose?.(), 300);
                }}
                className="ml-3 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaTimes size={16} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Notification container for multiple notifications
export const NotificationContainer = ({ children, position = "top-right" }) => {
  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 transform -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2"
  };

  return (
    <div className={`fixed ${positionClasses[position]} z-50 space-y-2`}>
      {children}
    </div>
  );
};

// Toast notification hook
export const useNotification = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, type = "info", duration = 5000) => {
    const id = Date.now();
    const notification = { id, message, type, duration };
    
    setNotifications(prev => [...prev, notification]);
    
    if (duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, duration);
    }
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const showSuccess = (message, duration) => addNotification(message, "success", duration);
  const showError = (message, duration) => addNotification(message, "error", duration);
  const showWarning = (message, duration) => addNotification(message, "warning", duration);
  const showInfo = (message, duration) => addNotification(message, "info", duration);

  return {
    notifications,
    addNotification,
    removeNotification,
    showSuccess,
    showError,
    showWarning,
    showInfo
  };
};

// Animated bell notification
export const AnimatedBell = ({ count = 0, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="relative cursor-pointer"
    >
      <FaBell className="text-2xl text-gray-600" />
      
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
    </motion.div>
  );
};

// Progress notification
export const ProgressNotification = ({ 
  message, 
  progress = 0, 
  onComplete,
  type = "info" 
}) => {
  const typeConfig = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500"
  };

  useEffect(() => {
    if (progress >= 100 && onComplete) {
      setTimeout(onComplete, 500);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white border border-gray-200 rounded-lg shadow-lg p-4"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{message}</span>
        <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
          className={`h-full ${typeConfig[type]} rounded-full`}
        />
      </div>
    </motion.div>
  );
}; 