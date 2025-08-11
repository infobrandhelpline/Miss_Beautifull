'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedProgress({ 
  progress = 0, 
  max = 100,
  size = "medium",
  color = "primary",
  showLabel = true,
  animated = true,
  className = ""
}) {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setCurrentProgress(progress);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setCurrentProgress(progress);
    }
  }, [progress, animated]);

  const sizeClasses = {
    small: 'h-2',
    medium: 'h-3',
    large: 'h-4'
  };

  const colorClasses = {
    primary: 'bg-primary-500',
    accent: 'bg-accent-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
    info: 'bg-blue-500'
  };

  const percentage = Math.min((currentProgress / max) * 100, 100);

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm text-gray-500">{Math.round(percentage)}%</span>
        </div>
      )}
      
      <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full ${colorClasses[color]} rounded-full`}
        />
      </div>
    </div>
  );
}

// Circular progress
export const CircularProgress = ({ 
  progress = 0, 
  size = 120,
  strokeWidth = 8,
  color = "primary",
  showLabel = true,
  animated = true
}) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (currentProgress / 100) * circumference;

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setCurrentProgress(progress);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setCurrentProgress(progress);
    }
  }, [progress, animated]);

  const colorClasses = {
    primary: 'stroke-primary-500',
    accent: 'stroke-accent-500',
    success: 'stroke-green-500',
    warning: 'stroke-yellow-500',
    error: 'stroke-red-500',
    info: 'stroke-blue-500'
  };

  return (
    <div className="relative inline-block">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-gray-200"
        />
        
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={colorClasses[color]}
        />
      </svg>
      
      {showLabel && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-gray-700">
            {Math.round(currentProgress)}%
          </span>
        </div>
      )}
    </div>
  );
};

// Skill progress bar
export const SkillProgress = ({ 
  skill, 
  progress, 
  color = "primary",
  showPercentage = true 
}) => {
  const colorClasses = {
    primary: 'bg-primary-500',
    accent: 'bg-accent-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
    info: 'bg-blue-500'
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{skill}</span>
        {showPercentage && (
          <span className="text-sm text-gray-500">{progress}%</span>
        )}
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`h-full ${colorClasses[color]} rounded-full`}
        />
      </div>
    </div>
  );
};

// Multi-step progress
export const MultiStepProgress = ({ 
  steps = [], 
  currentStep = 0,
  className = ""
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between mb-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                index <= currentStep
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {index < currentStep ? '✓' : index + 1}
            </motion.div>
            
            {index < steps.length - 1 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className={`h-1 mx-2 ${
                  index < currentStep ? 'bg-primary-500' : 'bg-gray-200'
                }`}
                style={{ width: '40px' }}
              />
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800">
          {steps[currentStep]?.title || 'Step ' + (currentStep + 1)}
        </h3>
        {steps[currentStep]?.description && (
          <p className="text-gray-600 text-sm mt-1">
            {steps[currentStep].description}
          </p>
        )}
      </div>
    </div>
  );
};

// Animated loading progress
export const LoadingProgress = ({ 
  message = "Loading...",
  showProgress = true,
  duration = 3000
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, duration / 100);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className="text-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full mx-auto mb-4"
      />
      
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{message}</h3>
      
      {showProgress && (
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-primary-500 rounded-full"
          />
        </div>
      )}
      
      <p className="text-sm text-gray-500 mt-2">{Math.round(progress)}%</p>
    </div>
  );
};

// Course progress
export const CourseProgress = ({ 
  completed = 0, 
  total = 10,
  title = "Course Progress"
}) => {
  const percentage = (completed / total) * 100;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className="text-sm text-gray-500">
          {completed} of {total} completed
        </span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
        />
      </div>
      
      <div className="flex justify-between items-center mt-2">
        <span className="text-sm text-gray-600">Progress</span>
        <span className="text-sm font-semibold text-primary-600">
          {Math.round(percentage)}%
        </span>
      </div>
    </div>
  );
}; 