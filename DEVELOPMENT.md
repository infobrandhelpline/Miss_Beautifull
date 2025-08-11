# 🚀 Development Guide - Localhost Configuration

## 📋 **Quick Start**

### **1. Start Development Server**
```bash
# Standard development server
npm run dev

# Localhost only (recommended for development)
npm run dev:local

# Network accessible (for mobile testing)
npm run dev:network
```

### **2. Database Operations**
```bash
# Push database schema
npm run db:push

# Seed database with initial data
npm run db:seed

# Reset database (push + seed)
npm run db:reset

# Open Prisma Studio (database GUI)
npm run db:studio
```

## 🌐 **Localhost URLs**

### **Main Application**
- **Homepage**: http://localhost:3000
- **Services**: http://localhost:3000/services
- **Hair Services**: http://localhost:3000/hair-services
- **Blog**: http://localhost:3000/blog
- **Contact**: http://localhost:3000/contact
- **Booking**: http://localhost:3000/booking
- **Academy**: http://localhost:3000/academy
- **Admin**: http://localhost:3000/admin

### **API Endpoints**
- **Services API**: http://localhost:3000/api/services
- **Users API**: http://localhost:3000/api/users
- **Bookings API**: http://localhost:3000/api/bookings
- **Blog API**: http://localhost:3000/api/blog
- **Courses API**: http://localhost:3000/api/courses
- **Contact API**: http://localhost:3000/api/contact

### **Development Tools**
- **Prisma Studio**: http://localhost:5555 (after running `npm run db:studio`)

## ⚙️ **Configuration Files**

### **Environment Variables**
- `.env` - Production environment variables
- `.env.local` - Local development variables

### **Next.js Configuration**
- `next.config.mjs` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration

## 🔧 **Development Features**

### **Hot Reload**
- ✅ Automatic page refresh on file changes
- ✅ Fast refresh for React components
- ✅ CSS hot reload

### **Development Indicators**
- ✅ Build activity indicator (bottom-right)
- ✅ Compilation status
- ✅ Error overlay

### **Database Features**
- ✅ SQLite database for development
- ✅ Prisma Studio for database management
- ✅ Automatic schema synchronization
- ✅ Seed data for testing

### **Image Optimization**
- ✅ Next.js Image component
- ✅ Local image support
- ✅ Responsive image sizes
- ✅ WebP/AVIF format support

## 🛠️ **Development Workflow**

### **1. Starting Development**
```bash
# Clone and setup
git clone <repository>
cd salon-academy-app

# Install dependencies
npm install

# Setup database
npm run db:reset

# Start development server
npm run dev:local
```

### **2. Making Changes**
1. Edit files in `src/` directory
2. Changes automatically reflect in browser
3. Check console for any errors
4. Test functionality

### **3. Database Changes**
```bash
# After modifying prisma/schema.prisma
npm run db:push

# To reset database with fresh data
npm run db:reset
```

### **4. Adding New Features**
1. Create new components in `src/components/`
2. Add new pages in `src/app/`
3. Create API routes in `src/app/api/`
4. Update database schema if needed

## 🐛 **Debugging**

### **Browser Developer Tools**
- **Console**: Check for JavaScript errors
- **Network**: Monitor API requests
- **Elements**: Inspect HTML/CSS
- **Application**: Check local storage, cookies

### **Server Logs**
- Check terminal for server logs
- API requests are logged in console
- Database queries are logged

### **Common Issues**

#### **Database Connection Issues**
```bash
# Reset database
npm run db:reset

# Check database file
ls prisma/dev.db
```

#### **Image Loading Issues**
- Check image paths in `public/` directory
- Verify image URLs in components
- Use Next.js Image component for optimization

#### **API Endpoint Issues**
- Check API route files in `src/app/api/`
- Verify database connection
- Check request/response in browser network tab

## 📱 **Mobile Testing**

### **Local Network Access**
```bash
# Start server accessible on network
npm run dev:network

# Access from mobile device
http://192.168.x.x:3000
```

### **Browser DevTools**
- Use Chrome DevTools device simulation
- Test responsive design
- Check mobile performance

## 🔒 **Security (Development)**

### **Environment Variables**
- Never commit `.env` files
- Use `.env.local` for local development
- Keep sensitive data in environment variables

### **Database Security**
- SQLite database is local only
- No external database connections in development
- Reset database regularly for testing

## 📊 **Performance Monitoring**

### **Build Performance**
- Check build times in terminal
- Monitor bundle sizes
- Use Next.js built-in analytics

### **Runtime Performance**
- Use browser DevTools Performance tab
- Monitor API response times
- Check image loading performance

## 🚀 **Production Preparation**

### **Build Testing**
```bash
# Test production build
npm run build

# Start production server
npm run start
```

### **Environment Variables**
- Set production environment variables
- Configure database URL for production
- Set up email and payment services

## 📚 **Useful Commands**

```bash
# Development
npm run dev              # Start dev server
npm run dev:local        # Localhost only
npm run dev:network      # Network accessible

# Database
npm run db:push          # Push schema
npm run db:seed          # Seed data
npm run db:reset         # Reset database
npm run db:studio        # Open Prisma Studio

# Build & Deploy
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Utilities
npm install              # Install dependencies
npm update               # Update dependencies
```

## 🎯 **Best Practices**

### **Code Organization**
- Keep components in `src/components/`
- Organize pages in `src/app/`
- Use consistent naming conventions
- Add proper TypeScript types (if using TS)

### **Database Management**
- Use Prisma migrations for schema changes
- Keep seed data up to date
- Test database operations locally

### **Performance**
- Optimize images with Next.js Image
- Use proper loading states
- Implement error boundaries
- Monitor bundle sizes

---

**Happy Coding! 🎨✨** 