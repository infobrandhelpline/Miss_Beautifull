'use client';
import { motion } from 'framer-motion';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { FaCalendar, FaUser, FaEye, FaHeart, FaShare, FaArrowLeft, FaTag } from 'react-icons/fa';
import Link from 'next/link';

export default function BlogPostPage({ params }) {
  // This would normally fetch from an API or CMS
  const post = {
    id: 1,
    title: "10 Essential Hair Care Tips for Healthy Hair",
    excerpt: "Discover the best practices for maintaining healthy, shiny hair with our expert tips and professional advice.",
    content: `
      <p>Maintaining healthy hair requires a combination of proper care, good nutrition, and the right products. In this comprehensive guide, we'll share 10 essential tips that will help you achieve the hair of your dreams.</p>
      
      <h2>1. Choose the Right Shampoo and Conditioner</h2>
      <p>Your hair type determines which shampoo and conditioner you should use. For oily hair, look for clarifying shampoos. For dry hair, choose moisturizing formulas. Fine hair benefits from volumizing products, while thick hair needs smoothing formulas.</p>
      
      <h2>2. Wash Your Hair Properly</h2>
      <p>Use lukewarm water instead of hot water, as hot water can strip your hair of natural oils. Apply shampoo to your scalp and massage gently with your fingertips. Rinse thoroughly and apply conditioner from mid-length to ends.</p>
      
      <h2>3. Don't Overwash</h2>
      <p>Washing your hair too frequently can strip it of natural oils. Most people can wash their hair 2-3 times per week. If you have oily hair, you might need to wash more frequently, but try to extend the time between washes gradually.</p>
      
      <h2>4. Use Heat Protection</h2>
      <p>Always use a heat protectant before using hot tools like blow dryers, straighteners, or curling irons. This creates a barrier between your hair and the heat, preventing damage.</p>
      
      <h2>5. Trim Regularly</h2>
      <p>Regular trims every 6-8 weeks help prevent split ends and keep your hair looking healthy. Even if you're growing your hair out, regular trims are essential for maintaining hair health.</p>
      
      <h2>6. Eat a Balanced Diet</h2>
      <p>Your hair reflects your overall health. Include protein-rich foods, omega-3 fatty acids, vitamins A, C, D, and E, and minerals like zinc and iron in your diet for healthy hair growth.</p>
      
      <h2>7. Protect Your Hair from the Sun</h2>
      <p>UV rays can damage your hair, making it dry and brittle. Wear a hat or use hair products with UV protection when spending time outdoors.</p>
      
      <h2>8. Use the Right Brush</h2>
      <p>Choose a brush appropriate for your hair type. Wide-tooth combs are great for detangling wet hair, while boar bristle brushes help distribute natural oils.</p>
      
      <h2>9. Deep Condition Regularly</h2>
      <p>Use a deep conditioning treatment once a week to restore moisture and repair damage. Leave it on for 15-30 minutes for best results.</p>
      
      <h2>10. Avoid Tight Hairstyles</h2>
      <p>Tight ponytails, braids, and buns can cause traction alopecia. Opt for looser styles and vary your hairstyles to prevent damage to your hair follicles.</p>
      
      <h2>Conclusion</h2>
      <p>Healthy hair is achievable with the right care routine. Remember that everyone's hair is different, so it may take some experimentation to find what works best for you. Be patient and consistent with your hair care routine, and you'll see results over time.</p>
    `,
    author: "Priya Sharma",
    date: "2024-01-15",
    category: "Hair Care",
    readTime: "5 min read",
    views: 1247,
    likes: 89,
    image: "/blog/hair-care.jpg",
    tags: ["Hair Care", "Beauty Tips", "Hair Health", "Professional Advice"]
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Latest Makeup Trends for 2024",
      excerpt: "Stay ahead of the beauty game with these trending makeup looks.",
      author: "Meera Patel",
      date: "2024-01-12",
      category: "Makeup"
    },
    {
      id: 3,
      title: "Nail Art Designs for Every Occasion",
      excerpt: "From simple elegance to bold statements, explore stunning nail art designs.",
      author: "Anjali Desai",
      date: "2024-01-10",
      category: "Nail Art"
    },
    {
      id: 4,
      title: "Skincare Routine for Different Skin Types",
      excerpt: "Learn how to create the perfect skincare routine tailored to your skin type.",
      author: "Dr. Sneha Reddy",
      date: "2024-01-08",
      category: "Skincare"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Article Header */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-primary-500 to-accent-500">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <Link href="/blog" className="inline-flex items-center text-white hover:text-accent-200 mb-6">
              <FaArrowLeft className="mr-2" />
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {post.excerpt}
            </p>
            
            {/* Article Meta */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <div className="flex items-center">
                <FaUser className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <FaCalendar className="mr-2" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <FaEye className="mr-2" />
                <span>{post.views} views</span>
              </div>
              <div className="flex items-center">
                <FaHeart className="mr-2" />
                <span>{post.likes} likes</span>
              </div>
              <div className="flex items-center">
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            {/* Category and Tags */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              {post.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  <FaTag className="inline mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Article Actions */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center text-gray-600 hover:text-primary-600"
                >
                  <FaHeart className="mr-2" />
                  Like
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center text-gray-600 hover:text-primary-600"
                >
                  <FaShare className="mr-2" />
                  Share
                </motion.button>
              </div>
              <Link 
                href="/blog"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                ← Back to Blog
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Related Articles
            </h2>
            <p className="text-xl text-gray-600">
              Discover more beauty tips and trends
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <motion.article
                key={relatedPost.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-accent-100 to-primary-100 flex items-center justify-center">
                  <div className="text-4xl text-accent-500 opacity-20">
                    {relatedPost.category.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="bg-accent-100 text-accent-600 px-3 py-1 rounded-full text-xs font-medium">
                      {relatedPost.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{relatedPost.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{relatedPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{relatedPost.author}</span>
                    <Link 
                      href={`/blog/${relatedPost.id}`}
                      className="text-accent-600 hover:text-accent-700 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 