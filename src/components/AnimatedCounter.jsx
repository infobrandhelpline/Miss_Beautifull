'use client';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedCounter({ 
  target, 
  duration = 2, 
  delay = 0,
  className = "",
  prefix = "",
  suffix = "",
  color = "primary"
}) {
  const [isInView, setIsInView] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  const colorClasses = {
    primary: 'text-primary-600',
    accent: 'text-accent-600',
    white: 'text-white',
    gray: 'text-gray-800'
  };

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
      className={`text-3xl md:text-4xl font-bold ${colorClasses[color]} ${className}`}
    >
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.div>
  );
}

// Animated stats counter
export const AnimatedStats = ({ stats = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <AnimatedCounter
            target={stat.value}
            duration={2}
            delay={index * 0.2}
            className="mb-2"
            suffix={stat.suffix || ""}
            color={stat.color || "primary"}
          />
          <div className="text-gray-600">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

// Animated progress counter
export const AnimatedProgressCounter = ({ 
  current, 
  total, 
  label = "", 
  showPercentage = true 
}) => {
  const percentage = (current / total) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        {showPercentage && (
          <span className="text-sm text-gray-500">
            <AnimatedCounter target={percentage} duration={1} suffix="%" />
          </span>
        )}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
        />
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>{current}</span>
        <span>{total}</span>
      </div>
    </motion.div>
  );
};

// Animated countdown timer
export const AnimatedCountdown = ({ targetDate, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        onComplete?.();
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center"
        >
          <AnimatedCounter
            target={unit.value}
            duration={0.5}
            className="text-2xl md:text-3xl font-bold text-primary-600"
          />
          <div className="text-sm text-gray-600 mt-1">{unit.label}</div>
        </motion.div>
      ))}
    </div>
  );
}; 