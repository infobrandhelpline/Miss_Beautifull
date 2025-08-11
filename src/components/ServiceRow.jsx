'use client';

import { useState } from 'react';
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
  FaStar as FaBeauty,
  FaScissors,
  FaPaintBrush,
  FaSprayCan,
  FaLips,
  FaEye as FaEyelashes,
  FaHeart as FaHandHoldingHeart,
  FaHandHoldingWater,
  FaMagic as FaHandHoldingMagic,
  FaLeaf as FaHandHoldingSeedling,
  FaUserTie as FaHandHoldingMedical,
  FaHandHoldingWater as FaHandHoldingDroplet,
  FaStar as FaHandHoldingSparkles,
  FaGift as FaHandHoldingGift,
  FaHeart as FaFacial,
  FaHandHoldingWater as FaHydra,
  FaMagic as FaAntiAging,
  FaLeaf as FaSkinTreatment,
  FaUserTie as FaThreading,
  FaHandHoldingWater as FaWaxing,
  FaStar as FaNailArt,
  FaGift as FaBridalPackage
} from 'react-icons/fa';

export default function ServiceRow({ service, onEdit, onDelete }) {
  const [showIcon, setShowIcon] = useState(true); // Always show icons instead of images

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
      'Nail Art': FaNailArt,
      'Manicure': FaGem,
      'Pedicure': FaGem,
      'Nail Polish': FaHandHoldingSparkles,
      'Nail Extension': FaHandHoldingGift,
      
      // Skincare Services - Unique icons for each
      'Facial': FaFacial,
      'Skin Treatment': FaSkinTreatment,
      'Anti-Aging': FaAntiAging,
      'Hydra Facial': FaHydra,
      'Fruit Facial': FaHandHoldingSeedling,
      'Gold Facial': FaCrown,
      'Diamond Facial': FaGem,
      'Skin Polishing': FaHandHoldingMagic,
      
      // Body & Spa Services - Unique icons for each
      'Body Massage': FaSpa,
      'Spa Treatment': FaHandHoldingWater,
      'Waxing': FaWaxing,
      'Threading': FaThreading,
      'Body Scrub': FaHandHoldingSeedling,
      'Hot Stone Massage': FaHandHoldingHeart,
      
      // Bridal Packages - Unique icons for each
      'Bridal Package': FaBridalPackage,
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
    return FaBeauty;
  };

  const IconComponent = getServiceIcon(service.name, service.category);

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-12 w-12">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center shadow-md">
              <IconComponent className="text-white text-lg" />
            </div>
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{service.name}</div>
            <div className="text-sm text-gray-500">{service.category}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        ₹{service.price}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {service.duration} min
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
          service.isActive 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {service.isActive ? 'Active' : 'Inactive'}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit && onEdit(service)}
            className="text-primary-600 hover:text-primary-900"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete && onDelete(service.id)}
            className="text-red-600 hover:text-red-900"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
} 