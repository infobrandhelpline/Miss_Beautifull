# 🚀 Localhost Setup Guide for Salon Academy App

## 📋 **Prerequisites**
- Node.js 18+ installed
- npm or yarn package manager
- Git (for version control)

## 🔧 **Step 1: Environment Configuration**

### **Create `.env` file in root directory:**
```bash
# Create .env file manually in your project root
touch .env
```

### **Add these environment variables to `.env`:**
```env
# Development Environment
NODE_ENV=development
PORT=3000
HOST=localhost

# Database Configuration
DATABASE_URL="file:./prisma/dev.db"

# API Keys (replace with your actual keys)
GIPHY_API_KEY=your_giphy_api_key_here
UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
PINTEREST_ACCESS_TOKEN=your_pinterest_access_token_here

# Development Settings
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Security (development only - change in production)
JWT_SECRET=dev_jwt_secret_key_12345
ENCRYPTION_KEY=dev_encryption_key_12345

# Image Upload
UPLOAD_DIR=./public/uploads
MAX_FILE_SIZE=5242880
```

## 🗄️ **Step 2: Database Setup**

### **Initialize Database:**
```bash
# Push database schema
npm run db:push

# Seed database with sample data
npm run db:seed

# Open Prisma Studio (database GUI)
npm run db:studio
```

## 📦 **Step 3: Install Dependencies**

### **Install packages:**
```bash
# Install all dependencies
npm install

# Or if using yarn
yarn install
```

## 🚀 **Step 4: Start Development Server**

### **Choose your development mode:**

#### **Option 1: Standard Development (Recommended)**
```bash
npm run dev
```
- Access: http://localhost:3000
- Hot reload enabled
- Database connected

#### **Option 2: Localhost Only**
```bash
npm run dev:local
```
- Access: http://localhost:3000
- Only accessible from localhost
- More secure for development

#### **Option 3: Network Accessible**
```bash
npm run dev:network
```
- Access: http://localhost:3000
- Also accessible from other devices on network
- Good for mobile testing

## 🌐 **Access URLs**

### **Main Application:**
- 🏠 **Homepage**: http://localhost:3000
- 💇 **Services**: http://localhost:3000/services
- 💆 **Hair Services**: http://localhost:3000/hair-services
- 📝 **Blog**: http://localhost:3000/blog
- 📞 **Contact**: http://localhost:3000/contact
- 📅 **Booking**: http://localhost:3000/booking
- 🎓 **Academy**: http://localhost:3000/academy
- ⚙️ **Admin**: http://localhost:3000/admin

### **API Endpoints:**
- 🔌 **Services API**: http://localhost:3000/api/services
- 👥 **Users API**: http://localhost:3000/api/users
- 📅 **Bookings API**: http://localhost:3000/api/bookings
- 📝 **Blog API**: http://localhost:3000/api/blog
- 🎓 **Courses API**: http://localhost:3000/api/courses
- 📞 **Contact API**: http://localhost:3000/api/contact

### **Development Tools:**
- 🗄️ **Prisma Studio**: http://localhost:5555

## 🐛 **Troubleshooting**

### **Port 3000 Already in Use:**
```bash
# Check what's using port 3000
netstat -ano | findstr :3000

# Kill the process
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- -p 3001
```

### **Database Connection Issues:**
```bash
# Reset database
npm run db:reset

# Check database file exists
dir prisma\dev.db

# Reinstall Prisma
npm install prisma @prisma/client
npx prisma generate
```

### **Module Not Found Errors:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Next.js cache
rm -rf .next
```

### **Image Loading Issues:**
- Check image paths in `public/` directory
- Use Next.js Image component
- Verify image URLs in database

## 📱 **Mobile Testing**

### **Network Access:**
```bash
# Start network server
npm run dev:network

# Find your IP address
ipconfig

# Access from mobile
http://192.168.x.x:3000
```

### **Device Simulation:**
- Chrome DevTools → Toggle device toolbar
- Test responsive design
- Check mobile performance

## 🔒 **Security Notes**

### **Development Only:**
- Never use development keys in production
- Change default secrets in production
- Use HTTPS in production
- Secure your database connections

### **Environment Variables:**
- Keep `.env` files out of version control
- Use `.env.local` for local overrides
- Use `.env.example` for documentation

## 📊 **Performance Tips**

### **Development:**
- Use `npm run dev` for fastest development
- Enable hot reload
- Use Prisma Studio for database management
- Monitor console for errors

### **Build:**
- Use `npm run build` for production builds
- Check bundle size
- Optimize images
- Enable compression

## ✅ **Verification Checklist**

- [ ] `.env` file created with correct variables
- [ ] Database initialized with `npm run db:push`
- [ ] Dependencies installed with `npm install`
- [ ] Development server starts with `npm run dev`
- [ ] Application accessible at http://localhost:3000
- [ ] Database accessible via Prisma Studio
- [ ] API endpoints responding correctly
- [ ] Images loading properly
- [ ] No console errors

## 🎯 **Quick Start Commands**

```bash
# Complete setup in one go
npm install && npm run db:push && npm run db:seed && npm run dev
```

---

**🚀 Your localhost is ready! Access http://localhost:3000**

**Need help? Check the console for error messages or refer to the troubleshooting section above.**
