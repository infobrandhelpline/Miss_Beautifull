'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  FaCut, 
  FaPalette, 
  FaGem, 
  FaSpa, 
  FaEye, 
  FaCrown, 
  FaGraduationCap,
  FaBrush,
  FaHandSparkles,
  FaStar,
  FaHeart,
  FaMagic,
  FaUserTie,
  FaUsers,
  FaGift,
  FaCamera,
  FaSmile,
  FaLeaf,
  FaUser,
  FaScissors,
  FaPaintBrush,
  FaSprayCan,
  FaLips,
  FaEyelashes,
  FaHandHoldingHeart,
  FaHandHoldingWater,
  FaHandHoldingMagic,
  FaHandHoldingSeedling,
  FaHandHoldingMedical,
  FaHandHoldingDroplet,
  FaHandHoldingSparkles,
  FaHandHoldingGift
} from 'react-icons/fa';

export default function ServiceCard({ service, index }) {
  const [showIcon, setShowIcon] = useState(false); // Show images by default
  const [serviceImage, setServiceImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const loadPinterestImage = async () => {
      try {
        setImageLoading(true);
        setImageError(false);
        
        // Try to get Pinterest/Unsplash image
        const response = await fetch(`/api/pinterest?service=${encodeURIComponent(service.name)}&category=${encodeURIComponent(service.category)}&type=single`);
        
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.data) {
            setServiceImage(data.data.url);
            setShowIcon(false);
          } else {
            setImageError(true);
            setShowIcon(true);
          }
        } else {
          setImageError(true);
          setShowIcon(true);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
        setImageError(true);
        setShowIcon(true);
      } finally {
        setImageLoading(false);
      }
    };

    loadPinterestImage();
  }, [service.name, service.category]);

  const getServiceIcon = (serviceName, category) => {
    // Service-specific icons
    const serviceIconMap = {
      // Hair Services - Unique icons for each
      'Hair Cut': FaScissors,
      'Hair Styling': FaCut,
      'Hair Color': FaPaintBrush,
      'Hair Spa': FaSpa,
      'Hair Treatment': FaMagic,
      'Hair Extensions': FaUser,
      'Bridal Hairstyling': FaCrown,
      'Hair Wash': FaHandHoldingWater,
      'Hair Smoothening': FaHandHoldingMagic,
      'Hair Rebonding': FaHandHoldingMagic,
      'Hair Botox': FaHandHoldingMedical,
      'Hair Fall Treatment': FaHandHoldingHeart,
      
      // Makeup Services - Unique icons for each
      'Makeup': FaPalette,
      'Bridal Makeup': FaCrown,
      'Party Makeup': FaStar,
      'Makeup Art': FaBrush,
      'Lipstick': FaLips,
      'Eyeliner': FaEyelashes,
      'Foundation': FaSprayCan,
      'Blush': FaHandHoldingHeart,
      
      // Nail Services - Unique icons for each
      'Nail Art': FaHandHoldingSparkles,
      'Manicure': FaGem,
      'Pedicure': FaGem,
      'Nail Polish': FaHandHoldingSparkles,
      'Nail Extension': FaHandHoldingGift,
      
      // Skincare Services - Unique icons for each
      'Facial': FaHandHoldingHeart,
      'Skin Treatment': FaHandHoldingSeedling,
      'Anti-Aging': FaHandHoldingMagic,
      'Hydra Facial': FaHandHoldingWater,
      'Fruit Facial': FaHandHoldingSeedling,
      'Gold Facial': FaCrown,
      'Diamond Facial': FaGem,
      'Skin Polishing': FaHandHoldingMagic,
      
      // Body & Spa Services - Unique icons for each
      'Body Massage': FaSpa,
      'Spa Treatment': FaHandHoldingWater,
      'Waxing': FaHandHoldingDroplet,
      'Threading': FaHandHoldingMedical,
      'Body Scrub': FaHandHoldingSeedling,
      'Hot Stone Massage': FaHandHoldingHeart,
      
      // Bridal Packages - Unique icons for each
      'Bridal Package': FaHandHoldingGift,
      'Wedding Package': FaGift,
      'Engagement Package': FaHandHoldingHeart,
      'Reception Package': FaCrown,
      
      // Academy Services - Unique icons for each
      'Course': FaGraduationCap,
      'Training': FaUsers,
      'Workshop': FaCamera,
      'Certification': FaHandHoldingGift,
      'Diploma': FaGraduationCap,
      
      // Default categories
      'Hair': FaUser,
      'Makeup': FaPalette,
      'Nails': FaGem,
      'Skincare': FaSpa,
      'Body & Spa': FaSpa,
      'Threading & Waxing': FaEye,
      'Bridal Packages': FaCrown,
      'Academy': FaGraduationCap
    };
    
    // Try service name first
    if (serviceIconMap[serviceName]) {
      return serviceIconMap[serviceName];
    }
    
    // Try category
    if (serviceIconMap[category]) {
      return serviceIconMap[category];
    }
    
    // Default icon
    return FaStar;
  };

  const formatDuration = (minutes) => {
    if (!minutes || isNaN(minutes)) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins > 0 ? `${mins}m` : ''}`;
    }
    return `${mins}m`;
  };

  const IconComponent = getServiceIcon(service.name, service.category);
  
  const getIconColor = (serviceName, category) => {
    const colorMap = {
      // Hair Services - Purple gradient
      'Hair': 'from-purple-500 to-pink-500',
      'Hair Cut': 'from-purple-500 to-pink-500',
      'Hair Styling': 'from-purple-500 to-pink-500',
      'Hair Color': 'from-purple-500 to-pink-500',
      'Hair Spa': 'from-purple-500 to-pink-500',
      
      // Makeup Services - Pink gradient
      'Makeup': 'from-pink-500 to-rose-500',
      'Bridal Makeup': 'from-pink-500 to-rose-500',
      'Party Makeup': 'from-pink-500 to-rose-500',
      'Makeup Art': 'from-pink-500 to-rose-500',
      
      // Nail Services - Red gradient
      'Nail Art': 'from-red-500 to-pink-500',
      'Manicure': 'from-red-500 to-pink-500',
      'Pedicure': 'from-red-500 to-pink-500',
      
      // Skincare Services - Green gradient
      'Facial': 'from-green-500 to-emerald-500',
      'Skin Treatment': 'from-green-500 to-emerald-500',
      'Anti-Aging': 'from-green-500 to-emerald-500',
      'Hydra Facial': 'from-green-500 to-emerald-500',
      
      // Body & Spa - Blue gradient
      'Body Massage': 'from-blue-500 to-cyan-500',
      'Spa Treatment': 'from-blue-500 to-cyan-500',
      'Waxing': 'from-blue-500 to-cyan-500',
      'Threading': 'from-blue-500 to-cyan-500',
      
      // Bridal Packages - Gold gradient
      'Bridal Package': 'from-yellow-500 to-orange-500',
      'Wedding Package': 'from-yellow-500 to-orange-500',
      'Bridal Packages': 'from-yellow-500 to-orange-500',
      
      // Academy - Indigo gradient
      'Course': 'from-indigo-500 to-purple-500',
      'Training': 'from-indigo-500 to-purple-500',
      'Workshop': 'from-indigo-500 to-purple-500',
      'Academy': 'from-indigo-500 to-purple-500'
    };
    
    // Try service name first
    if (colorMap[serviceName]) {
      return colorMap[serviceName];
    }
    
    // Try category
    if (colorMap[category]) {
      return colorMap[category];
    }
    
    // Default gradient
    return 'from-primary-500 to-accent-500';
  };
  
  const iconColorClass = getIconColor(service.name, service.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gray-800 rounded-lg shadow-2xl p-6 hover:shadow-3xl transition-all border border-gray-700 backdrop-blur-sm hover:scale-105"
    >
      {/* Service Image or Icon */}
      <div className="w-full h-32 flex items-center justify-center mb-4">
        {imageLoading ? (
          <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
          </div>
        ) : serviceImage && !showIcon ? (
                      <div className="relative w-full h-32">
              <Image
                src={serviceImage}
                alt={service.name}
                fill
                className="object-cover rounded-lg shadow-lg"
                onError={() => {
                  setImageError(true);
                  setShowIcon(true);
                }}
              />
              {/* Image source attribution */}
              <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                🖼️ Image
              </div>
            </div>
        ) : (
          <motion.div
            whileHover={{ 
              rotate: 360,
              scale: 1.1,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            transition={{ duration: 0.6 }}
            className={`w-20 h-20 bg-gradient-to-r ${iconColorClass} rounded-full flex items-center justify-center mx-auto shadow-lg hover:shadow-xl`}
          >
            <IconComponent className="text-white text-3xl" />
          </motion.div>
        )}
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 text-center">{service.name}</h3>
      <p className="text-gray-300 text-center mb-4 text-sm line-clamp-2">{service.description}</p>

      {/* Category Badge */}
      <div className="text-center mb-4">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full">
          {service.category}
        </span>
      </div>

      {/* Price and Duration */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-2xl font-bold text-pink-400">₹{service.price || 'N/A'}</span>
        <span className="text-sm text-gray-400">{formatDuration(service.duration)}</span>
      </div>

      <motion.a
        href="/booking"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full text-center block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg"
      >
        Book Now
      </motion.a>
    </motion.div>
  );
} 