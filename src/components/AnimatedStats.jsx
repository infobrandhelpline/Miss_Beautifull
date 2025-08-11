'use client';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaUsers, FaGraduationCap, FaStar, FaAward } from 'react-icons/fa';

export default function AnimatedStats({ stats = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-lg shadow-lg p-6 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.2 }}
            className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            {stat.icon || <FaUsers className="text-white text-2xl" />}
          </motion.div>
          
          <AnimatedCounter
            target={stat.value}
            duration={2}
            delay={index * 0.3}
            className="text-3xl font-bold text-gray-800 mb-2"
            suffix={stat.suffix || ""}
          />
          
          <p className="text-gray-600 font-medium">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

// Animated counter component
function AnimatedCounter({ 
  target, 
  duration = 2, 
  delay = 0,
  className = "",
  prefix = "",
  suffix = ""
}) {
  const [isInView, setIsInView] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration, delay });
      return controls.stop;
    }
  }, [isInView, target, duration, delay, count]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
      className={className}
    >
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.div>
  );
}

// Stats with icons
export const IconStats = ({ stats = [] }) => {
  const iconMap = {
    users: FaUsers,
    graduates: FaGraduationCap,
    rating: FaStar,
    awards: FaAward
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = iconMap[stat.icon] || FaUsers;
        
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Icon className="text-white text-2xl" />
            </motion.div>
            
            <AnimatedCounter
              target={stat.value}
              duration={2}
              delay={index * 0.3}
              className="text-4xl font-bold text-gray-800 mb-2"
              suffix={stat.suffix || ""}
            />
            
            <p className="text-gray-600 font-medium">{stat.label}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

// Circular stats
export const CircularStats = ({ stats = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative inline-block mb-4">
            <svg width="120" height="120" className="transform -rotate-90">
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-gray-200"
              />
              <motion.circle
                cx="60"
                cy="60"
                r="50"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                strokeLinecap="round"
                strokeDasharray={314}
                initial={{ strokeDashoffset: 314 }}
                whileInView={{ strokeDashoffset: 314 - (stat.value / 100) * 314 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="text-primary-500"
              />
            </svg>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatedCounter
                target={stat.value}
                duration={1}
                delay={index * 0.3}
                className="text-2xl font-bold text-gray-800"
                suffix="%"
              />
            </div>
          </div>
          
          <h3 className="font-semibold text-gray-800 mb-1">{stat.label}</h3>
          <p className="text-sm text-gray-500">{stat.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

// Progress stats
export const ProgressStats = ({ stats = [] }) => {
  return (
    <div className="space-y-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4">
                {stat.icon || <FaUsers />}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{stat.label}</h3>
                <p className="text-sm text-gray-500">{stat.description}</p>
              </div>
            </div>
            
            <AnimatedCounter
              target={stat.value}
              duration={1}
              delay={index * 0.2}
              className="text-2xl font-bold text-primary-600"
              suffix={stat.suffix || ""}
            />
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${stat.percentage}%` }}
              transition={{ duration: 1, delay: index * 0.3 }}
              className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
            />
          </div>
          
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500">Progress</span>
            <span className="text-sm font-semibold text-primary-600">
              {stat.percentage}%
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Comparison stats
export const ComparisonStats = ({ stats = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h3 className="font-semibold text-gray-800 mb-4">{stat.label}</h3>
          
          <div className="space-y-4">
            {stat.items?.map((item, itemIndex) => (
              <motion.div
                key={itemIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + itemIndex * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-between"
              >
                <span className="text-gray-600">{item.label}</span>
                <div className="flex items-center">
                  <AnimatedCounter
                    target={item.value}
                    duration={1}
                    delay={index * 0.3 + itemIndex * 0.1}
                    className="text-lg font-semibold text-gray-800 mr-2"
                    suffix={item.suffix || ""}
                  />
                  {item.trend && (
                    <span className={`text-sm ${
                      item.trend > 0 ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {item.trend > 0 ? '↗' : '↘'} {Math.abs(item.trend)}%
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}; 