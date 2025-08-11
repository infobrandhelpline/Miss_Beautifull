'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCheck, FaClock, FaMapMarkerAlt, FaUser } from 'react-icons/fa';

export default function AnimatedTimeline({ 
  events = [], 
  layout = "vertical",
  className = ""
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (layout === "horizontal") {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`flex overflow-x-auto space-x-4 pb-4 ${className}`}
      >
        {events.map((event, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary-500"
          >
            <div className="flex items-center mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center mr-3"
              >
                {event.icon || <FaCheck />}
              </motion.div>
              <div>
                <h3 className="font-semibold text-gray-800">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.date}</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">{event.description}</p>
            
            {event.location && (
              <div className="flex items-center text-sm text-gray-500">
                <FaMapMarkerAlt className="mr-2" />
                {event.location}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`relative ${className}`}
    >
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
      
      {events.map((event, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="relative flex items-start mb-8"
        >
          {/* Timeline dot */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg"
          />
          
          {/* Content */}
          <div className="ml-16 bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary-500">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-3">
                {event.icon || <FaCheck />}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.date}</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">{event.description}</p>
            
            {event.location && (
              <div className="flex items-center text-sm text-gray-500">
                <FaMapMarkerAlt className="mr-2" />
                {event.location}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// Course timeline
export const CourseTimeline = ({ modules = [] }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500" />
      
      {modules.map((module, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative flex items-start mb-8"
        >
          {/* Timeline dot */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.3 }}
            className="absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg"
          />
          
          {/* Content */}
          <div className="ml-16 bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary-500">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">{module.title}</h3>
                <p className="text-sm text-gray-500">{module.duration}</p>
              </div>
              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                Module {index + 1}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4">{module.description}</p>
            
            {/* Lessons */}
            <div className="space-y-2">
              {module.lessons?.map((lesson, lessonIndex) => (
                <motion.div
                  key={lessonIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + lessonIndex * 0.1 }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                      {lessonIndex + 1}
                    </div>
                    <span className="text-gray-700">{lesson.title}</span>
                  </div>
                  <span className="text-sm text-gray-500">{lesson.duration}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Booking timeline
export const BookingTimeline = ({ steps = [] }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
      
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative flex items-start mb-8"
        >
          {/* Timeline dot */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.3 }}
            className={`absolute left-6 w-4 h-4 rounded-full border-4 border-white shadow-lg ${
              step.completed ? 'bg-green-500' : 'bg-gray-300'
            }`}
          />
          
          {/* Content */}
          <div className="ml-16 bg-white rounded-lg shadow-lg p-6 border-l-4 border-gray-200">
            <div className="flex items-center mb-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                step.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
              }`}>
                {step.completed ? <FaCheck /> : <FaClock />}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            </div>
            
            {step.details && (
              <div className="text-sm text-gray-600">
                {step.details}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Achievement timeline
export const AchievementTimeline = ({ achievements = [] }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 to-primary-500" />
      
      {achievements.map((achievement, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative flex items-start mb-8"
        >
          {/* Timeline dot */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.3 }}
            className="absolute left-6 w-4 h-4 bg-accent-500 rounded-full border-4 border-white shadow-lg"
          />
          
          {/* Content */}
          <div className="ml-16 bg-white rounded-lg shadow-lg p-6 border-l-4 border-accent-500">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mr-4">
                {achievement.icon || '🏆'}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">{achievement.title}</h3>
                <p className="text-sm text-gray-500">{achievement.date}</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">{achievement.description}</p>
            
            {achievement.stats && (
              <div className="grid grid-cols-2 gap-4">
                {achievement.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className="text-2xl font-bold text-accent-600">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}; 