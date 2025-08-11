'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCalendar, FaUser, FaEye, FaArrowRight } from 'react-icons/fa';

export default function BlogSection() {
  const recentPosts = [
    {
      id: 1,
      title: "10 Essential Hair Care Tips for Healthy Hair",
      excerpt: "Discover the best practices for maintaining healthy, shiny hair with our expert tips and professional advice.",
      author: "Priya Sharma",
      date: "2024-01-15",
      category: "Hair Care",
      views: 1247,
      featured: true
    },
    {
      id: 2,
      title: "Latest Makeup Trends for 2024",
      excerpt: "Stay ahead of the beauty game with these trending makeup looks that are dominating social media and runways.",
      author: "Meera Patel",
      date: "2024-01-12",
      category: "Makeup",
      views: 2156,
      featured: true
    },
    {
      id: 3,
      title: "Nail Art Designs for Every Occasion",
      excerpt: "From simple elegance to bold statements, explore stunning nail art designs perfect for any event or mood.",
      author: "Anjali Desai",
      date: "2024-01-10",
      category: "Nail Art",
      views: 1893,
      featured: false
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}/${day}/${year}`;
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Latest from Our Blog
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover beauty tips, trends, and expert advice from our professional stylists
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-[#b17400] to-[#d4a017] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {recentPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-[#b17400] shadow-2xl group-hover:shadow-[#b17400]/30 transition-all duration-500 hover:transform hover:-translate-y-3 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-[#991b1b] to-[#b17400] flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl text-white opacity-30 group-hover:scale-110 transition-transform duration-300">
                    {post.category.charAt(0)}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold border border-[#b17400]">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <span className="flex items-center mr-4">
                      <FaCalendar className="mr-2 text-[#b17400]" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center">
                      <FaUser className="mr-2 text-[#b17400]" />
                      {post.author}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#d4a017] transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 text-base leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <FaEye className="mr-2 text-[#b17400]" />
                        {post.views.toLocaleString()}
                      </span>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-[#d4a017] hover:text-[#b17400] font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                    >
                      Read More
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                  
                  <div className="mt-6 w-16 h-1 bg-gradient-to-r from-[#b17400] to-[#d4a017] group-hover:w-20 transition-all duration-300"></div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="/blog"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#991b1b] to-[#b17400] hover:from-[#8d0101] hover:to-[#991b1b] text-white text-xl px-12 py-6 rounded-2xl font-bold transition-all duration-300 shadow-2xl hover:shadow-[#991b1b]/30 transform hover:-translate-y-2 border-2 border-[#b17400]"
          >
            📚 View All Articles
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 