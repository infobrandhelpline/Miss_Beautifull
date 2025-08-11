'use client';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import NewLogo from './NewLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Academy", href: "/academy" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Hair Styling", href: "/services" },
        { name: "Makeup Art", href: "/services" },
        { name: "Nail Art", href: "/services" },
        { name: "Beauty Treatments", href: "/services" }
      ]
    },
    {
      title: "Academy",
      links: [
        { name: "Hair Styling Course", href: "/academy" },
        { name: "Makeup Art Course", href: "/academy" },
        { name: "Nail Art Course", href: "/academy" },
        { name: "Beauty Therapy", href: "/academy" }
      ]
    }
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div style={{ transform: 'scale(1.5)', flexShrink: 0 }}>
                <NewLogo />
              </div>
              <div className="flex-1 ml-2">
                <span className="text-2xl font-black text-white">Miss Beautiful</span>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Transform your passion for beauty into a rewarding career with our professional training programs and expert guidance.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <motion.div 
                className="flex items-center space-x-4 p-3 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-[#b17400] transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#991b1b] to-[#b17400] rounded-full flex items-center justify-center">
                  <FaPhone className="text-white text-sm" />
                </div>
                <span className="text-gray-300">+91 98765 43210</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4 p-3 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-[#b17400] transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#991b1b] to-[#b17400] rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <span className="text-gray-300">info@missbeautiful.com</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4 p-3 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-[#b17400] transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#991b1b] to-[#b17400] rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white text-sm" />
                </div>
                <span className="text-gray-300">Mumbai, Maharashtra, India</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: sectionIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-white border-b border-[#b17400] pb-2">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (sectionIndex * 0.2) + (linkIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={link.href}
                      className="inline-flex items-center gap-2 text-gray-300 hover:text-[#d4a017] transition-all duration-300 group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="group-hover:text-[#d4a017]">{link.name}</span>
                      <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links & Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-800"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
            {/* Social Links */}
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <span className="text-white font-bold text-lg">Follow us:</span>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gradient-to-br from-[#991b1b] to-[#b17400] hover:from-[#8d0101] hover:to-[#991b1b] flex items-center justify-center transition-all duration-300 rounded-xl shadow-lg hover:shadow-[#991b1b]/30"
                    aria-label={social.label}
                  >
                    <social.icon className="text-white text-lg" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col items-center lg:items-end space-y-4">
              <span className="text-white font-bold text-lg">Newsletter:</span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-6 py-3 bg-gray-900 text-white border border-gray-700 focus:border-[#b17400] focus:outline-none rounded-l-xl w-64"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-[#991b1b] to-[#b17400] hover:from-[#8d0101] hover:to-[#991b1b] text-white font-bold rounded-r-xl transition-all duration-300 border border-[#b17400]"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} Miss Beautiful. All rights reserved. | 
            <a href="#" className="text-[#d4a017] hover:text-[#b17400] ml-1 transition-colors duration-300">Privacy Policy</a> | 
            <a href="#" className="text-[#d4a017] hover:text-[#b17400] ml-1 transition-colors duration-300">Terms of Service</a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
} 