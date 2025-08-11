'use client';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaCut, FaPalette, FaGem, FaGraduationCap, FaUsers, FaClock, FaCertificate, FaStar, FaArrowRight, FaDownload, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function EnrollForm({ open, onClose, courseTitle }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!open) return null;

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/enrollments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          course: data.course,
        }),
      });
      if (res.ok) {
        toast.success('Enrollment successful!');
        reset();
        onClose();
      } else {
        throw new Error('Failed to enroll');
      }
    } catch (e) {
      toast.error('Enrollment failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative border border-gray-100"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-red-800 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaGraduationCap className="text-white text-2xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Enroll in {courseTitle || 'a Course'}</h2>
          <p className="text-gray-600 mt-2">Start your beauty journey today!</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">Full Name</label>
            <input 
              type="text" 
              {...register('name', { required: 'Name is required' })} 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent transition-all duration-200" 
              placeholder="Enter your full name" 
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">Email Address</label>
            <input 
              type="email" 
              {...register('email', { required: 'Email is required' })} 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent transition-all duration-200" 
              placeholder="Enter your email" 
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">Phone Number</label>
            <input 
              type="tel" 
              {...register('phone', { required: 'Phone is required' })} 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent transition-all duration-200" 
              placeholder="Enter your phone number" 
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">Course Selection</label>
            <select 
              {...register('course', { required: 'Course is required' })} 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent transition-all duration-200"
            >
              <option value="">Select your preferred course</option>
              <option value={courseTitle}>{courseTitle}</option>
              <option value="Hair Styling Course">Hair Styling Course</option>
              <option value="Makeup Art Course">Makeup Art Course</option>
              <option value="Nail Art Course">Nail Art Course</option>
            </select>
            {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course.message}</p>}
          </div>
          
          <div className="flex gap-3 pt-3">
            <button 
              type="button" 
              onClick={onClose} 
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="flex-1 px-6 py-3 bg-gradient-to-r from-red-800 to-blue-600 text-white rounded-lg hover:from-red-700 hover:to-blue-700 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Enrolling...
                </div>
              ) : (
                <div className="flex items-center">
                  Enroll Now
                  <FaArrowRight className="ml-2 w-4 h-4" />
                </div>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default function AcademyPage() {
  const courses = [
    {
      title: "Hair Styling Course",
      description: "Learn professional hair styling techniques, cutting, coloring, and treatments from industry experts.",
      duration: "3 months",
      students: 45,
      price: "25,000",
      level: "Beginner",
      icon: FaCut,
      features: ["Basic hair cutting", "Advanced styling", "Color theory", "Hair treatments", "Client consultation", "Business skills"],
      rating: 4.9,
      popular: true
    },
    {
      title: "Makeup Art Course",
      description: "Master the art of makeup application for different occasions and skin types with hands-on training.",
      duration: "2 months",
      students: 38,
      price: "20,000",
      level: "Intermediate",
      icon: FaPalette,
      features: ["Skin preparation", "Foundation techniques", "Eye makeup", "Lip artistry", "Bridal makeup", "Special effects"],
      rating: 4.8,
      popular: false
    },
    {
      title: "Nail Art Course",
      description: "Learn creative nail designs, manicure, pedicure, and nail care techniques for professional services.",
      duration: "1 month",
      students: 52,
      price: "15,000",
      level: "Beginner",
      icon: FaGem,
      features: ["Nail shaping", "Polish application", "Nail art design", "Gel extensions", "Acrylic nails", "Nail care"],
      rating: 4.7,
      popular: false
    },
    {
      title: "Beauty Therapy Course",
      description: "Comprehensive beauty therapy training including facials, body treatments, and spa techniques.",
      duration: "4 months",
      students: 28,
      price: "30,000",
      level: "Advanced",
      icon: FaGraduationCap,
      features: ["Facial treatments", "Body therapies", "Spa techniques", "Aromatherapy", "Client care", "Professional ethics"],
      rating: 4.9,
      popular: true
    }
  ];

  const features = [
    { icon: FaUsers, title: "Expert Instructors", description: "Learn from industry professionals with years of experience", highlight: "15+ Years Experience" },
    { icon: FaCertificate, title: "Certified Courses", description: "Receive industry-recognized certifications upon completion", highlight: "100% Certified" },
    { icon: FaClock, title: "Flexible Schedule", description: "Choose from morning, afternoon, or evening classes", highlight: "24/7 Support" },
    { icon: FaStar, title: "Hands-on Training", description: "Practical training with real clients and equipment", highlight: "Real Practice" }
  ];

  const [enrollOpen, setEnrollOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-red-900 via-red-800 to-blue-700 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm"
            >
              <FaGraduationCap className="text-white text-4xl" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Beauty Academy
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-gray-100 leading-relaxed">
              Transform your passion for beauty into a thriving career. Learn from industry experts, 
              master cutting-edge techniques, and join a community of beauty professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
                className="group bg-white text-red-800 text-lg px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
              onClick={() => { setEnrollOpen(true); setSelectedCourse(''); }}
            >
                Start Your Journey
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-white text-white text-lg px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-red-800 transition-all duration-300 flex items-center"
              >
                <FaDownload className="mr-2" />
                Download Brochure
            </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Academy?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We provide comprehensive training programs designed to launch your career in the beauty industry
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-center border border-gray-700 hover:border-red-800 transition-all duration-300 hover:transform hover:-translate-y-2">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-gradient-to-r from-red-800 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-red-800/25 transition-all duration-300"
                >
                    <feature.icon className="text-white text-3xl" />
                </motion.div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-red-800 text-white text-xs font-semibold rounded-full mb-3">
                      {feature.highlight}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Premium Courses
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose from our comprehensive range of beauty courses designed for every skill level
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                variants={itemVariants}
                className="group relative"
              >
                {course.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      ⭐ Most Popular
                    </span>
                  </div>
                )}
                
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                      className="w-20 h-20 bg-gradient-to-r from-red-800 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
                  >
                      <course.icon className="text-white text-3xl" />
                  </motion.div>
                    
                  <div className="text-right">
                      <div className="flex items-center justify-end mb-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                            className={`w-5 h-5 ${
                            i < Math.floor(course.rating) 
                                ? 'text-blue-600' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                        <span className="ml-3 text-sm text-gray-600 font-medium">({course.rating})</span>
                    </div>
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                        {course.level}
                      </span>
                  </div>
                </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-bold text-red-800 mb-1">₹{course.price}</div>
                      <div className="text-sm text-gray-500 font-medium">Course Fee</div>
                  </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{course.duration}</div>
                      <div className="text-sm text-gray-500 font-medium">Duration</div>
                  </div>
                </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                      <FaCheckCircle className="text-red-800 mr-2" />
                      Course Includes:
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                    {course.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-red-800 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500 font-medium">
                      {course.students} students enrolled
                    </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-red-800 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
                    onClick={() => { setEnrollOpen(true); setSelectedCourse(course.title); }}
                  >
                    Enroll Now
                      <FaArrowRight className="ml-2 w-4 h-4" />
                  </motion.button>
                </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-red-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-blue-900/20"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-20 h-20 bg-gradient-to-r from-red-800 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <FaGraduationCap className="text-white text-3xl" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Beauty Career?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join our academy today and transform your passion for beauty into a successful career. 
              Take the first step towards your dreams!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-red-800 to-blue-600 text-white text-xl px-10 py-5 rounded-full font-bold hover:from-red-700 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-red-800/25 flex items-center"
                onClick={() => { setEnrollOpen(true); setSelectedCourse(''); }}
              >
                Start Your Journey Today
                <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-white text-white text-xl px-10 py-5 rounded-full font-bold hover:bg-white hover:text-red-800 transition-all duration-300 flex items-center"
              >
                <FaDownload className="mr-3" />
                Download Brochure
              </motion.button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">500+</div>
                <div className="text-gray-300">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">50+</div>
                <div className="text-gray-300">Industry Partners</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <EnrollForm open={enrollOpen} onClose={() => setEnrollOpen(false)} courseTitle={selectedCourse} />
      <Footer />
    </div>
  );
} 