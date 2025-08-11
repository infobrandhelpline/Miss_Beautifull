'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsers, FaCut, FaGraduationCap, FaNewspaper, 
  FaCalendarAlt, FaStar, FaPlus, FaEdit, FaTrash,
  FaEye, FaSearch, FaFilter, FaSort, FaUpload,
  FaSave, FaTimes, FaCheck, FaExclamationTriangle
} from 'react-icons/fa';
import ServiceRow from '@/components/ServiceRow';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalServices: 0,
    totalCourses: 0,
    totalBookings: 0,
    totalPosts: 0,
    totalReviews: 0
  });

  const tabs = [
    { id: 'overview', name: 'Overview', icon: FaEye },
    { id: 'services', name: 'Services', icon: FaCut },
    { id: 'courses', name: 'Courses', icon: FaGraduationCap },
    { id: 'enrollments', name: 'Enrollments', icon: FaGraduationCap },
    { id: 'blog', name: 'Blog Posts', icon: FaNewspaper },
    { id: 'users', name: 'Users', icon: FaUsers },
    { id: 'bookings', name: 'Bookings', icon: FaCalendarAlt },
    { id: 'reviews', name: 'Reviews', icon: FaStar }
  ];

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setIsLoading(true);
      const [usersRes, servicesRes, coursesRes, bookingsRes, postsRes, reviewsRes] = await Promise.all([
        fetch('/api/users'),
        fetch('/api/services'),
        fetch('/api/courses'),
        fetch('/api/bookings'),
        fetch('/api/blog'),
        fetch('/api/reviews')
      ]);

      const [users, services, courses, bookings, posts, reviews] = await Promise.all([
        usersRes.json(),
        servicesRes.json(),
        coursesRes.json(),
        bookingsRes.json(),
        postsRes.json(),
        reviewsRes.json()
      ]);

      setStats({
        totalUsers: users.length || 0,
        totalServices: services.length || 0,
        totalCourses: courses.length || 0,
        totalBookings: bookings.length || 0,
        totalPosts: posts.length || 0,
        totalReviews: reviews.length || 0
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}/${day}/${year}`;
  };

  // Helper function for all components
  const formatDateHelper = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}/${day}/${year}`;
  };

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Notification */}
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg ${
            notification.type === 'success' 
              ? 'bg-green-500 text-white' 
              : notification.type === 'error'
              ? 'bg-red-500 text-white'
              : 'bg-blue-500 text-white'
          }`}
        >
          <div className="flex items-center space-x-2">
            {notification.type === 'success' && <FaCheck />}
            {notification.type === 'error' && <FaExclamationTriangle />}
            <span>{notification.message}</span>
          </div>
        </motion.div>
      )}

      {/* Delete Confirmation */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Delete</h3>
            <p className="text-gray-600 mb-6">{deleteConfirm.message}</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  deleteConfirm.onConfirm();
                  setDeleteConfirm(null);
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-red-600 rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Manage your salon and academy</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Admin Panel</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm border mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                      activeTab === tab.id
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="text-lg" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-sm border">
          {activeTab === 'overview' && (
            <OverviewTab stats={stats} isLoading={isLoading} />
          )}
          {activeTab === 'services' && (
            <ServicesTab showNotification={showNotification} setDeleteConfirm={setDeleteConfirm} />
          )}
          {activeTab === 'courses' && (
            <CoursesTab showNotification={showNotification} setDeleteConfirm={setDeleteConfirm} />
          )}
          {activeTab === 'blog' && (
            <BlogTab showNotification={showNotification} setDeleteConfirm={setDeleteConfirm} />
          )}
          {activeTab === 'users' && (
            <UsersTab showNotification={showNotification} setDeleteConfirm={setDeleteConfirm} />
          )}
          {activeTab === 'bookings' && (
            <BookingsTab showNotification={showNotification} setDeleteConfirm={setDeleteConfirm} />
          )}
          {activeTab === 'reviews' && (
            <ReviewsTab showNotification={showNotification} setDeleteConfirm={setDeleteConfirm} />
          )}
          {activeTab === 'enrollments' && (
            <EnrollmentsTab showNotification={showNotification} setDeleteConfirm={setDeleteConfirm} />
          )}
        </div>
      </div>
    </div>
  );
}

// Overview Tab Component
function OverviewTab({ stats, isLoading }) {
  const statCards = [
    { name: 'Total Users', value: stats.totalUsers, color: 'bg-blue-500' },
    { name: 'Total Services', value: stats.totalServices, color: 'bg-green-500' },
    { name: 'Total Courses', value: stats.totalCourses, color: 'bg-purple-500' },
    { name: 'Total Bookings', value: stats.totalBookings, color: 'bg-yellow-500' },
    { name: 'Blog Posts', value: stats.totalPosts, color: 'bg-pink-500' },
    { name: 'Reviews', value: stats.totalReviews, color: 'bg-indigo-500' }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>
      
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statCards.map((stat) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-sm border p-6"
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-full ${stat.color} bg-opacity-10`}>
                  <div className={`w-6 h-6 ${stat.color.replace('bg-', 'text-')}`}></div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

// Services Tab Component
function ServicesTab({ showNotification, setDeleteConfirm }) {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/services');
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeleteConfirm({
      message: 'Are you sure you want to delete this service?',
      onConfirm: async () => {
        try {
          const response = await fetch(`/api/services/${id}`, {
            method: 'DELETE'
          });
          if (response.ok) {
            fetchServices();
            showNotification('Service deleted successfully', 'success');
          }
        } catch (error) {
          console.error('Error deleting service:', error);
          showNotification('Failed to delete service', 'error');
        }
      }
    });
  };

  // Function to get image URL for each service


  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Manage Services</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="btn-primary flex items-center space-x-2"
        >
          <FaPlus className="text-sm" />
          <span>Add Service</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="mb-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredServices.map((service) => (
                <ServiceRow 
                  key={service.id} 
                  service={service} 
                  onEdit={setEditingService}
                  onDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add/Edit Service Modal */}
      {(showAddModal || editingService) && (
        <ServiceModal
          service={editingService}
          onClose={() => {
            setShowAddModal(false);
            setEditingService(null);
          }}
          onSave={() => {
            fetchServices();
            setShowAddModal(false);
            setEditingService(null);
            showNotification(editingService ? 'Service updated successfully' : 'Service created successfully', 'success');
          }}
          showNotification={showNotification}
        />
      )}
    </div>
  );
}

// Service Modal Component
function ServiceModal({ service, onClose, onSave, showNotification }) {
  const [formData, setFormData] = useState({
    name: service?.name || '',
    description: service?.description || '',
    price: service?.price || '',
    duration: service?.duration || '',
    category: service?.category || 'Hair',
    isActive: service?.isActive ?? true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'Hair', 'Skincare', 'Makeup', 'Nails', 'Body & Spa', 'Threading & Waxing', 'Bridal Packages', 'Academy'
  ];

  // Comprehensive salon services list
  const salonServices = {
    'Hair': [
      'Hair Cut & Styling',
      'Hair Wash & Blow Dry',
      'Hair Spa Treatment',
      'Hair Color (Global)',
      'Hair Color (Highlights)',
      'Hair Color (Balayage)',
      'Hair Smoothening',
      'Hair Rebonding',
      'Hair Botox / Keratin Treatment',
      'Hair Fall & Dandruff Treatment',
      'Bridal Hairstyling',
      'Hair Extensions',
      'Hair Straightening',
      'Hair Curling',
      'Hair Perming',
      'Hair Trimming',
      'Hair Conditioning',
      'Hair Treatment'
    ],
    'Skincare': [
      'Fruit Facial',
      'Gold Facial',
      'Diamond Facial',
      'Hydra Facial',
      'Skin Polishing',
      'Anti-Aging Treatment',
      'Acne Treatment',
      'Pigmentation Treatment',
      'Skin Brightening',
      'Deep Cleansing',
      'Moisturizing Treatment',
      'Skin Rejuvenation',
      'Collagen Treatment',
      'Vitamin C Treatment',
      'Aloe Vera Treatment',
      'Charcoal Facial',
      'Oxygen Facial',
      'Chemical Peel'
    ],
    'Makeup': [
      'Party Makeup',
      'Bridal Makeup',
      'Engagement Makeup',
      'Reception Makeup',
      'Natural Makeup',
      'Glamour Makeup',
      'Airbrush Makeup',
      'HD Makeup',
      'Matte Makeup',
      'Shimmer Makeup',
      'Eye Makeup',
      'Lip Makeup',
      'Contouring',
      'Highlighting',
      'Blush Application',
      'Eyebrow Shaping',
      'Eyelash Extensions',
      'Makeup Removal'
    ],
    'Nails': [
      'Manicure',
      'Pedicure',
      'Nail Art',
      'Gel Nail Polish',
      'Acrylic Nails',
      'Nail Extensions',
      'Nail Repair',
      'Nail Strengthening',
      'Nail Whitening',
      'French Manicure',
      'Nail Stamping',
      '3D Nail Art',
      'Nail Foil',
      'Nail Stickers',
      'Nail Rhinestones',
      'Nail Glitter',
      'Nail Ombre',
      'Nail Marble Effect'
    ],
    'Body & Spa': [
      'Full Body Massage',
      'Head Massage',
      'Foot Massage',
      'Back Massage',
      'Neck Massage',
      'Shoulder Massage',
      'Aromatherapy',
      'Hot Stone Massage',
      'Swedish Massage',
      'Deep Tissue Massage',
      'Body Scrub',
      'Body Wrap',
      'Sauna Therapy',
      'Steam Therapy',
      'Mud Therapy',
      'Herbal Bath',
      'Body Polishing',
      'Cellulite Treatment'
    ],
    'Threading & Waxing': [
      'Eyebrow Threading',
      'Upper Lip Threading',
      'Chin Threading',
      'Sideburns Threading',
      'Full Face Threading',
      'Arm Waxing',
      'Leg Waxing',
      'Bikini Waxing',
      'Brazilian Waxing',
      'Chest Waxing',
      'Back Waxing',
      'Stomach Waxing',
      'Full Body Waxing',
      'Underarm Waxing',
      'Facial Waxing',
      'Nose Threading',
      'Ear Threading',
      'Neck Threading'
    ],
    'Bridal Packages': [
      'Complete Bridal Package',
      'Bridal Hair & Makeup',
      'Bridal Skin Treatment',
      'Bridal Manicure & Pedicure',
      'Bridal Hair Styling',
      'Bridal Facial',
      'Bridal Body Treatment',
      'Bridal Nail Art',
      'Bridal Hair Color',
      'Bridal Hair Extensions',
      'Bridal Hair Spa',
      'Bridal Hair Treatment',
      'Bridal Makeup Trial',
      'Bridal Hair Trial',
      'Bridal Package with Family',
      'Bridal Package with Friends',
      'Destination Bridal Package',
      'Luxury Bridal Package'
    ],
    'Academy': [
      'Hair Styling Course',
      'Makeup Course',
      'Nail Art Course',
      'Skincare Course',
      'Bridal Makeup Course',
      'Hair Coloring Course',
      'Hair Cutting Course',
      'Facial Course',
      'Manicure Pedicure Course',
      'Threading Course',
      'Waxing Course',
      'Spa Therapy Course',
      'Beauty Therapy Course',
      'Cosmetology Course',
      'Beauty Consultant Course',
      'Salon Management Course',
      'Beauty Product Course',
      'Advanced Beauty Course'
    ]
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const url = service ? `/api/services/${service.id}` : '/api/services';
      const method = service ? 'PUT' : 'POST';
      const payload = {
        ...formData,
        price: Number(formData.price),
        duration: Number(formData.duration),
        name: formData.name?.trim() || '',
        description: formData.description?.trim() || '',
        category: formData.category?.trim() || ''
      };

      // Check required fields before sending
      if (!payload.name || !payload.description || !payload.price || !payload.duration || !payload.category) {
        showNotification('Please fill all required fields.', 'error');
        setIsSubmitting(false);
        return;
      }

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        onSave();
      } else {
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        try {
          const errorData = await response.json();
          if (errorData.error) {
            errorMessage += ` - ${errorData.error}`;
          }
        } catch {}
        showNotification(`Failed to ${service ? 'update' : 'create'} service: ${errorMessage}`, 'error');
      }
    } catch (error) {
      showNotification(`Network error: ${error.message}`, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to handle service selection
  const handleServiceSelection = (selectedService) => {
    setFormData({...formData, name: selectedService});
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b">
          <h3 className="text-lg font-medium text-gray-900">
            {service ? 'Edit Service' : 'Add New Service'}
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value, name: ''})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Service Name
              </label>
              <select
                required
                value={formData.name}
                onChange={(e) => handleServiceSelection(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Select a service...</option>
                {salonServices[formData.category]?.map(serviceName => (
                  <option key={serviceName} value={serviceName}>{serviceName}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price (₹)
              </label>
              <input
                type="number"
                required
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration (minutes)
              </label>
              <input
                type="number"
                required
                value={formData.duration}
                onChange={(e) => setFormData({...formData, duration: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows="3"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>



          <div className="flex items-center">
            <input
              type="checkbox"
              id="isActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({...formData, isActive: e.target.checked})}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="isActive" className="ml-2 block text-sm text-gray-900">
              Active Service
            </label>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex items-center space-x-2"
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              ) : (
                <FaSave className="text-sm" />
              )}
              <span>{service ? 'Update' : 'Create'} Service</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Courses Tab Component
function CoursesTab({ showNotification, setDeleteConfirm }) {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('/api/courses');
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeleteConfirm({
      message: 'Are you sure you want to delete this course?',
      onConfirm: async () => {
        try {
          const response = await fetch(`/api/courses/${id}`, {
            method: 'DELETE'
          });
          if (response.ok) {
            fetchCourses();
            showNotification('Course deleted successfully', 'success');
          }
        } catch (error) {
          console.error('Error deleting course:', error);
          showNotification('Failed to delete course', 'error');
        }
      }
    });
  };

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Manage Courses</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="btn-primary flex items-center space-x-2"
        >
          <FaPlus className="text-sm" />
          <span>Add Course</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="mb-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCourses.map((course) => (
                <tr key={course.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                          <span className="text-purple-600 font-medium">{course.name.charAt(0)}</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{course.name}</div>
                        <div className="text-sm text-gray-500">{course.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {course.instructor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {course.duration} weeks
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ₹{course.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      course.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {course.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setEditingCourse(course)}
                        className="text-primary-600 hover:text-primary-900"
                      >
                        <FaEdit className="text-lg" />
                      </button>
                      <button
                        onClick={() => handleDelete(course.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <FaTrash className="text-lg" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add/Edit Course Modal */}
      {(showAddModal || editingCourse) && (
        <CourseModal
          course={editingCourse}
          onClose={() => {
            setShowAddModal(false);
            setEditingCourse(null);
          }}
          onSave={() => {
            fetchCourses();
            setShowAddModal(false);
            setEditingCourse(null);
            showNotification(editingCourse ? 'Course updated successfully' : 'Course created successfully', 'success');
          }}
          showNotification={showNotification}
        />
      )}
    </div>
  );
}

// Course Modal Component
function CourseModal({ course, onClose, onSave, showNotification }) {
  const [formData, setFormData] = useState({
    name: course?.name || '',
    description: course?.description || '',
    instructor: course?.instructor || '',
    duration: course?.duration || '',
    price: course?.price || '',
    isActive: course?.isActive ?? true,
    curriculum: course?.curriculum || []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const url = course ? `/api/courses/${course.id}` : '/api/courses';
      const method = course ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onSave();
      } else {
        showNotification('Failed to save course', 'error');
      }
    } catch (error) {
      console.error('Error saving course:', error);
      showNotification('Network error occurred', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b">
          <h3 className="text-lg font-medium text-gray-900">
            {course ? 'Edit Course' : 'Add New Course'}
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Course Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Instructor
              </label>
              <input
                type="text"
                required
                value={formData.instructor}
                onChange={(e) => setFormData({...formData, instructor: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration (weeks)
              </label>
              <input
                type="number"
                required
                value={formData.duration}
                onChange={(e) => setFormData({...formData, duration: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price (₹)
              </label>
              <input
                type="number"
                required
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows="3"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="isActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({...formData, isActive: e.target.checked})}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="isActive" className="ml-2 block text-sm text-gray-900">
              Active Course
            </label>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex items-center space-x-2"
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              ) : (
                <FaSave className="text-sm" />
              )}
              <span>{course ? 'Update' : 'Create'} Course</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Blog Tab Component
function BlogTab({ showNotification, setDeleteConfirm }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Helper function for date formatting
  const formatDateHelper = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}/${day}/${year}`;
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/blog');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeleteConfirm({
      message: 'Are you sure you want to delete this blog post?',
      onConfirm: async () => {
        try {
          const response = await fetch(`/api/blog/${id}`, {
            method: 'DELETE'
          });
          if (response.ok) {
            fetchPosts();
            showNotification('Blog post deleted successfully', 'success');
          }
        } catch (error) {
          console.error('Error deleting post:', error);
          showNotification('Failed to delete blog post', 'error');
        }
      }
    });
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Manage Blog Posts</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="btn-primary flex items-center space-x-2"
        >
          <FaPlus className="text-sm" />
          <span>Add Post</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="mb-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Post</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center">
                          <span className="text-pink-600 font-medium">{post.title.charAt(0)}</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{post.title}</div>
                        <div className="text-sm text-gray-500">{post.excerpt}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {post.author?.name || 'Unknown'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      post.isPublished ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.isPublished ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatDateHelper(post.createdAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setEditingPost(post)}
                        className="text-primary-600 hover:text-primary-900"
                      >
                        <FaEdit className="text-lg" />
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <FaTrash className="text-lg" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add/Edit Blog Post Modal */}
      {(showAddModal || editingPost) && (
        <BlogModal
          post={editingPost}
          onClose={() => {
            setShowAddModal(false);
            setEditingPost(null);
          }}
          onSave={() => {
            fetchPosts();
            setShowAddModal(false);
            setEditingPost(null);
            showNotification(editingPost ? 'Blog post updated successfully' : 'Blog post created successfully', 'success');
          }}
          showNotification={showNotification}
        />
      )}
    </div>
  );
}

// Blog Modal Component
function BlogModal({ post, onClose, onSave, showNotification }) {
  const [formData, setFormData] = useState({
    title: post?.title || '',
    content: post?.content || '',
    excerpt: post?.excerpt || '',
    category: post?.category || 'Beauty Tips',
    authorId: post?.authorId || '',
    imageUrl: post?.imageUrl || '',
    isPublished: post?.isPublished ?? false,
    featured: post?.featured ?? false,
    tags: post?.tags || []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authors, setAuthors] = useState([]);
  const [isLoadingAuthors, setIsLoadingAuthors] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(post?.imageUrl || '');

  const categories = [
    'Beauty Tips', 'Hair Care', 'Makeup', 'Nail Art', 'Skincare', 'Fashion', 'Lifestyle'
  ];

  const fetchAuthors = async () => {
    try {
      setIsLoadingAuthors(true);
      const response = await fetch('/api/users');
      const data = await response.json();
      setAuthors(data);
    } catch (error) {
      console.error('Error fetching authors:', error);
    } finally {
      setIsLoadingAuthors(false);
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => setPreviewUrl(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setUploadProgress(0);

    try {
      const formData = new FormData();
      formData.append('image', selectedFile);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setFormData({ ...formData, imageUrl: result.url });
        setPreviewUrl(result.url);
        setSelectedFile(null);
        setUploadProgress(100);
      } else {
        const error = await response.json();
        alert(`Upload failed: ${error.error}`);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Upload image first if selected
      if (selectedFile) {
        await handleImageUpload();
      }

      const url = post ? `/api/blog/${post.id}` : '/api/blog';
      const method = post ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onSave();
      }
    } catch (error) {
      console.error('Error saving post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b">
          <h3 className="text-lg font-medium text-gray-900">
            {post ? 'Edit Blog Post' : 'Add New Blog Post'}
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Author
              </label>
              <select
                required
                value={formData.authorId}
                onChange={(e) => setFormData({...formData, authorId: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                disabled={isLoadingAuthors}
              >
                <option value="">Select Author</option>
                {authors.map(author => (
                  <option key={author.id} value={author.id}>
                    {author.name} ({author.email})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Featured Image
              </label>
              <div className="space-y-3">
                {/* File Upload */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <FaUpload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">
                      {selectedFile ? selectedFile.name : 'Click to upload image'}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      PNG, JPG, WebP up to 5MB
                    </p>
                  </label>
                </div>

                {/* Upload Progress */}
                {isUploading && (
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                )}

                {/* Preview */}
                {previewUrl && (
                  <div className="relative">
                    <img 
                      src={previewUrl} 
                      alt="Preview" 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setPreviewUrl('');
                        setFormData({...formData, imageUrl: ''});
                        setSelectedFile(null);
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                    >
                      ×
                    </button>
                  </div>
                )}

                {/* URL Input (Alternative) */}
                <div className="mt-3">
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Or enter image URL directly:
                  </label>
                  <input
                    type="url"
                    value={formData.imageUrl}
                    onChange={(e) => {
                      setFormData({...formData, imageUrl: e.target.value});
                      setPreviewUrl(e.target.value);
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                    placeholder="https://example.com/image.jpg"
                  />
                  <div className="text-xs text-gray-500 mt-1">
                    💡 Tip: You can use free image hosting services like:
                    <br />• <a href="https://imgur.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Imgur</a>
                    <br />• <a href="https://postimages.org" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Postimages</a>
                    <br />• <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Unsplash</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Excerpt
            </label>
            <textarea
              rows="2"
              value={formData.excerpt}
              onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Brief description of the post..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <textarea
              rows="10"
              required
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Write your blog post content here..."
            />
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="isPublished"
                checked={formData.isPublished}
                onChange={(e) => setFormData({...formData, isPublished: e.target.checked})}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="isPublished" className="ml-2 block text-sm text-gray-900">
                Publish immediately
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="featured" className="ml-2 block text-sm text-gray-900">
                Featured post
              </label>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex items-center space-x-2"
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              ) : (
                <FaSave className="text-sm" />
              )}
              <span>{post ? 'Update' : 'Create'} Post</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Users Tab Component
function UsersTab({ showNotification, setDeleteConfirm }) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Helper function for date formatting
  const formatDateHelper = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}/${day}/${year}`;
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeleteConfirm({
      message: 'Are you sure you want to delete this user?',
      onConfirm: async () => {
        try {
          const response = await fetch(`/api/users/${id}`, {
            method: 'DELETE'
          });
          if (response.ok) {
            fetchUsers();
            showNotification('User deleted successfully', 'success');
          }
        } catch (error) {
          console.error('Error deleting user:', error);
          showNotification('Failed to delete user', 'error');
        }
      }
    });
  };

  const filteredUsers = users.filter(user =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRoleColor = (role) => {
    switch (role) {
      case 'ADMIN': return 'bg-red-100 text-red-800';
      case 'STYLIST': return 'bg-blue-100 text-blue-800';
      case 'CUSTOMER': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Manage Users</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="btn-primary flex items-center space-x-2"
        >
          <FaPlus className="text-sm" />
          <span>Add User</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="mb-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                          <span className="text-indigo-600 font-medium">{user.name?.charAt(0) || 'U'}</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">ID: {user.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.phone || 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      user.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setEditingUser(user)}
                        className="text-primary-600 hover:text-primary-900"
                      >
                        <FaEdit className="text-lg" />
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <FaTrash className="text-lg" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add/Edit User Modal */}
      {(showAddModal || editingUser) && (
        <UserModal
          user={editingUser}
          onClose={() => {
            setShowAddModal(false);
            setEditingUser(null);
          }}
          onSave={() => {
            fetchUsers();
            setShowAddModal(false);
            setEditingUser(null);
            showNotification(editingUser ? 'User updated successfully' : 'User created successfully', 'success');
          }}
          showNotification={showNotification}
        />
      )}
    </div>
  );
}

// User Modal Component
function UserModal({ user, onClose, onSave, showNotification }) {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    role: user?.role || 'CUSTOMER',
    isActive: user?.isActive ?? true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const roles = [
    { value: 'ADMIN', label: 'Admin' },
    { value: 'STYLIST', label: 'Stylist' },
    { value: 'CUSTOMER', label: 'Customer' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const url = user ? `/api/users/${user.id}` : '/api/users';
      const method = user ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onSave();
      }
    } catch (error) {
      console.error('Error saving user:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b">
          <h3 className="text-lg font-medium text-gray-900">
            {user ? 'Edit User' : 'Add New User'}
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({...formData, role: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {roles.map(role => (
                  <option key={role.value} value={role.value}>{role.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="isActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({...formData, isActive: e.target.checked})}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="isActive" className="ml-2 block text-sm text-gray-900">
              Active User
            </label>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex items-center space-x-2"
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              ) : (
                <FaSave className="text-sm" />
              )}
              <span>{user ? 'Update' : 'Create'} User</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Bookings Tab Component
function BookingsTab({ showNotification, setDeleteConfirm }) {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Helper function for date formatting
  const formatDateHelper = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}/${day}/${year}`;
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('/api/bookings');
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeleteConfirm({
      message: 'Are you sure you want to delete this booking?',
      onConfirm: async () => {
        try {
          const response = await fetch(`/api/bookings/${id}`, {
            method: 'DELETE'
          });
          if (response.ok) {
            fetchBookings();
            showNotification('Booking deleted successfully', 'success');
          }
        } catch (error) {
          console.error('Error deleting booking:', error);
          showNotification('Failed to delete booking', 'error');
        }
      }
    });
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const response = await fetch(`/api/bookings/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (response.ok) {
        fetchBookings();
        showNotification('Booking status updated successfully', 'success');
      }
    } catch (error) {
      console.error('Error updating booking status:', error);
      showNotification('Failed to update booking status', 'error');
    }
  };

  const filteredBookings = bookings.filter(booking =>
    booking.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.service?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.status?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'CONFIRMED': return 'bg-green-100 text-green-800';
      case 'PENDING': return 'bg-yellow-100 text-yellow-800';
      case 'CANCELLED': return 'bg-red-100 text-red-800';
      case 'COMPLETED': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Manage Bookings</h2>
      </div>

      {/* Search and Filter */}
      <div className="mb-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search bookings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                          <span className="text-yellow-600 font-medium">{booking.user?.name?.charAt(0) || 'C'}</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{booking.user?.name}</div>
                        <div className="text-sm text-gray-500">{booking.user?.phone}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{booking.service?.name}</div>
                    <div className="text-sm text-gray-500">₹{booking.service?.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div>{formatDateHelper(booking.appointmentDate)}</div>
                    <div className="text-gray-500">{booking.appointmentTime}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={booking.status}
                      onChange={(e) => handleStatusUpdate(booking.id, e.target.value)}
                      className={`px-2 py-1 text-xs font-semibold rounded-full border-0 ${getStatusColor(booking.status)}`}
                    >
                      <option value="PENDING">Pending</option>
                      <option value="CONFIRMED">Confirmed</option>
                      <option value="COMPLETED">Completed</option>
                      <option value="CANCELLED">Cancelled</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          setSelectedBooking(booking);
                          setShowViewModal(true);
                        }}
                        className="text-primary-600 hover:text-primary-900"
                      >
                        <FaEye className="text-lg" />
                      </button>
                      <button
                        onClick={() => handleDelete(booking.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <FaTrash className="text-lg" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* View Booking Modal */}
      {showViewModal && selectedBooking && (
        <BookingViewModal
          booking={selectedBooking}
          onClose={() => {
            setShowViewModal(false);
            setSelectedBooking(null);
          }}
        />
      )}
    </div>
  );
}

// Booking View Modal Component
function BookingViewModal({ booking, onClose }) {
  // Helper function for date formatting
  const formatDateHelper = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}/${day}/${year}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b">
          <h3 className="text-lg font-medium text-gray-900">Booking Details</h3>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
              <p className="text-sm text-gray-900">{booking.user?.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <p className="text-sm text-gray-900">{booking.user?.phone}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
              <p className="text-sm text-gray-900">{booking.service?.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
              <p className="text-sm text-gray-900">₹{booking.service?.price}</p>
            </div>
                         <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
               <p className="text-sm text-gray-900">{formatDateHelper(booking.appointmentDate)}</p>
             </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
              <p className="text-sm text-gray-900">{booking.appointmentTime}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <p className="text-sm text-gray-900">{booking.status}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Booking ID</label>
              <p className="text-sm text-gray-900">#{booking.id}</p>
            </div>
          </div>

          {booking.notes && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
              <p className="text-sm text-gray-900">{booking.notes}</p>
            </div>
          )}

          <div className="flex justify-end pt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reviews Tab Component
function ReviewsTab({ showNotification, setDeleteConfirm }) {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Helper function for date formatting
  const formatDateHelper = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}/${day}/${year}`;
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews');
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeleteConfirm({
      message: 'Are you sure you want to delete this review?',
      onConfirm: async () => {
        try {
          const response = await fetch(`/api/reviews/${id}`, {
            method: 'DELETE'
          });
          if (response.ok) {
            fetchReviews();
            showNotification('Review deleted successfully', 'success');
          }
        } catch (error) {
          console.error('Error deleting review:', error);
          showNotification('Failed to delete review', 'error');
        }
      }
    });
  };

  const filteredReviews = reviews.filter(review =>
    review.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    review.service?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    review.comment?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Manage Reviews</h2>
      </div>

      {/* Search and Filter */}
      <div className="mb-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search reviews..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredReviews.map((review) => (
                <tr key={review.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                          <span className="text-orange-600 font-medium">{review.user?.name?.charAt(0) || 'R'}</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{review.user?.name}</div>
                        <div className="text-sm text-gray-500">{review.user?.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {review.service?.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex text-sm">
                        {renderStars(review.rating)}
                      </div>
                      <span className="ml-2 text-sm text-gray-500">({review.rating}/5)</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <div className="max-w-xs truncate">
                      {review.comment}
                    </div>
                  </td>
                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                     {formatDateHelper(review.createdAt)}
                   </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          setSelectedReview(review);
                          setShowViewModal(true);
                        }}
                        className="text-primary-600 hover:text-primary-900"
                      >
                        <FaEye className="text-lg" />
                      </button>
                      <button
                        onClick={() => handleDelete(review.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <FaTrash className="text-lg" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* View Review Modal */}
      {showViewModal && selectedReview && (
        <ReviewViewModal
          review={selectedReview}
          onClose={() => {
            setShowViewModal(false);
            setSelectedReview(null);
          }}
        />
      )}
    </div>
  );
}

// Review View Modal Component
function ReviewViewModal({ review, onClose }) {
  // Helper function for date formatting
  const formatDateHelper = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}/${day}/${year}`;
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400 text-xl' : 'text-gray-300 text-xl'}>
        ★
      </span>
    ));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b">
          <h3 className="text-lg font-medium text-gray-900">Review Details</h3>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
              <p className="text-sm text-gray-900">{review.user?.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <p className="text-sm text-gray-900">{review.user?.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
              <p className="text-sm text-gray-900">{review.service?.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
              <div className="flex items-center">
                <div className="flex">
                  {renderStars(review.rating)}
                </div>
                <span className="ml-2 text-sm text-gray-500">({review.rating}/5)</span>
              </div>
            </div>
                         <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
               <p className="text-sm text-gray-900">{formatDateHelper(review.createdAt)}</p>
             </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Review ID</label>
              <p className="text-sm text-gray-900">#{review.id}</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
            <p className="text-sm text-gray-900 bg-gray-50 p-3 rounded-lg">{review.comment}</p>
          </div>

          <div className="flex justify-end pt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Enrollments Tab Component
function EnrollmentsTab({ showNotification, setDeleteConfirm }) {
  const [enrollments, setEnrollments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedEnrollment, setSelectedEnrollment] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);

  const formatDateHelper = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}/${day}/${year}`;
  };

  const fetchEnrollments = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/enrollments');
      const data = await response.json();
      setEnrollments(data);
    } catch (error) {
      console.error('Error fetching enrollments:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeleteConfirm({
      message: 'Are you sure you want to delete this enrollment?',
      onConfirm: async () => {
        try {
          const response = await fetch(`/api/enrollments/${id}`, {
            method: 'DELETE'
          });
          
          if (response.ok) {
            setEnrollments(enrollments.filter(enrollment => enrollment.id !== id));
            showNotification('Enrollment deleted successfully', 'success');
          }
        } catch (error) {
          console.error('Error deleting enrollment:', error);
          showNotification('Failed to delete enrollment', 'error');
        }
      }
    });
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const response = await fetch(`/api/enrollments/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (response.ok) {
        // Update the enrollment in the local state
        setEnrollments(enrollments.map(enrollment => 
          enrollment.id === id 
            ? { ...enrollment, status: newStatus }
            : enrollment
        ));
        showNotification('Enrollment status updated successfully', 'success');
      }
    } catch (error) {
      console.error('Error updating enrollment status:', error);
      showNotification('Failed to update enrollment status', 'error');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ENROLLED':
        return 'bg-blue-100 text-blue-800';
      case 'IN_PROGRESS':
        return 'bg-yellow-100 text-yellow-800';
      case 'COMPLETED':
        return 'bg-green-100 text-green-800';
      case 'DROPPED':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  useEffect(() => {
    fetchEnrollments();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Enrollments</h2>
        <button
          onClick={fetchEnrollments}
          className="btn-primary"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Refresh'}
        </button>
      </div>

      {isLoading ? (
        <div className="text-center py-8">
          <div className="loading-spinner"></div>
          <p className="text-gray-500 mt-2">Loading enrollments...</p>
        </div>
      ) : enrollments.length === 0 ? (
        <div className="text-center py-8">
          <FaGraduationCap className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No enrollments</h3>
          <p className="mt-1 text-sm text-gray-500">No enrollments found.</p>
        </div>
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {enrollments.map((enrollment) => (
              <li key={enrollment.id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              {enrollment.user?.name || 'Unknown User'}
                            </p>
                            <p className="text-sm text-gray-500">
                              {enrollment.user?.email || 'No email'}
                            </p>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              {enrollment.course?.name || 'Unknown Course'}
                            </p>
                            <p className="text-sm text-gray-500">
                              ₹{enrollment.course?.price?.toLocaleString() || 'N/A'}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(enrollment.status)}`}>
                          {enrollment.status}
                        </span>
                        <span className="text-sm text-gray-500">
                          {formatDateHelper(enrollment.enrolledAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <select
                      value={enrollment.status}
                      onChange={(e) => handleStatusUpdate(enrollment.id, e.target.value)}
                      className="text-xs border border-gray-300 rounded px-2 py-1 bg-white"
                    >
                      <option value="ENROLLED">ENROLLED</option>
                      <option value="IN_PROGRESS">IN PROGRESS</option>
                      <option value="COMPLETED">COMPLETED</option>
                      <option value="DROPPED">DROPPED</option>
                    </select>
                    <button
                      onClick={() => {
                        setSelectedEnrollment(enrollment);
                        setShowViewModal(true);
                      }}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <FaEye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(enrollment.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showViewModal && selectedEnrollment && (
        <EnrollmentViewModal
          enrollment={selectedEnrollment}
          onClose={() => {
            setShowViewModal(false);
            setSelectedEnrollment(null);
          }}
        />
      )}
    </div>
  );
}

// Enrollment View Modal Component
function EnrollmentViewModal({ enrollment, onClose }) {
  const formatDateHelper = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}/${day}/${year}`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ENROLLED':
        return 'bg-blue-100 text-blue-800';
      case 'IN_PROGRESS':
        return 'bg-yellow-100 text-yellow-800';
      case 'COMPLETED':
        return 'bg-green-100 text-green-800';
      case 'DROPPED':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b">
          <h3 className="text-lg font-medium text-gray-900">Enrollment Details</h3>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
              <p className="text-sm text-gray-900">{enrollment.user?.name || 'N/A'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <p className="text-sm text-gray-900">{enrollment.user?.email || 'N/A'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <p className="text-sm text-gray-900">{enrollment.user?.phone || 'N/A'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
              <p className="text-sm text-gray-900">{enrollment.course?.name || 'N/A'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Course Price</label>
              <p className="text-sm text-gray-900">₹{enrollment.course?.price?.toLocaleString() || 'N/A'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Course Duration</label>
              <p className="text-sm text-gray-900">{enrollment.course?.duration || 'N/A'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Enrolled Date</label>
              <p className="text-sm text-gray-900">{formatDateHelper(enrollment.enrolledAt)}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(enrollment.status)}`}>
                {enrollment.status}
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Course Description</label>
            <p className="text-sm text-gray-900 bg-gray-50 p-3 rounded-lg">{enrollment.course?.description || 'N/A'}</p>
          </div>

          {enrollment.completedAt && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Completed Date</label>
              <p className="text-sm text-gray-900">{formatDateHelper(enrollment.completedAt)}</p>
            </div>
          )}

          <div className="flex justify-end pt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 