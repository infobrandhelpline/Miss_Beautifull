/** @type {import('next').NextConfig} */
const nextConfig = {
  // Skip trailing slash redirect (moved to root level for Next.js 15)
  skipTrailingSlashRedirect: true,
  
  // Enable experimental features
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion'],
  },
  
  // Netlify compatibility
  trailingSlash: false,
  
  // Image optimization
  images: {
    domains: ['localhost', '127.0.0.1'],
    formats: ['image/webp', 'image/avif'],
    // Allow local images
    unoptimized: process.env.NODE_ENV === 'development',
    // Image sizes for responsive design
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Development optimizations
  devIndicators: {
    position: 'bottom-right',
  },
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    
    // Development optimizations
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    

    
    return config;
  },
  

};

export default nextConfig;
