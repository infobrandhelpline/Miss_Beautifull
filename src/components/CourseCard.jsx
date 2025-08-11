'use client';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaClock, FaUsers, FaCertificate } from 'react-icons/fa';

export default function CourseCard({ 
  title, 
  description, 
  duration, 
  students, 
  price, 
  level = "Beginner",
  icon: Icon = FaGraduationCap 
}) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        y: -10
      }}
      transition={{ duration: 0.3 }}
      className="card p-6 h-full flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center"
        >
          <Icon className="text-white text-xl" />
        </motion.div>
        <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
          {level}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {/* Course Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <FaClock className="mr-2" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <FaUsers className="mr-2" />
            <span>{students} students enrolled</span>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <span className="text-2xl font-bold text-primary-600">₹{price}</span>
          <span className="text-sm text-gray-500 ml-2">/course</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary flex-1"
        >
          Enroll Now
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-secondary flex-1"
        >
          Learn More
        </motion.button>
      </div>

      {/* Certificate Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 flex items-center justify-center text-sm text-accent-600"
      >
        <FaCertificate className="mr-1" />
        Certificate included
      </motion.div>
    </motion.div>
  );
} 