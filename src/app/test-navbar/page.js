'use client';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';

export default function TestNavbar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Navbar Test
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto"
          >
            Test the optimized navbar with smooth animations, responsive design, and enhanced user experience.
          </motion.p>
        </div>
      </section>

      {/* Test Sections */}
      <section id="section1" className="py-20 px-4 bg-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Section 1</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-white"
              >
                <h3 className="text-xl font-semibold mb-4">Feature {item}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="section2" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Section 2</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: item === 1 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-white"
              >
                <h3 className="text-xl font-semibold mb-4">Content {item}</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="section3" className="py-20 px-4 bg-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-8"
          >
            Section 3
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-blue-200 max-w-2xl mx-auto"
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto text-center text-white">
          <p>&copy; 2024 Salon Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
