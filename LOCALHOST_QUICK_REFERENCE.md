# 🚀 Localhost Quick Reference

## 🌐 **Access URLs**

### **Main Application**
```
🏠 Homepage:     http://localhost:3000
💇 Services:     http://localhost:3000/services
💆 Hair Services: http://localhost:3000/hair-services
📝 Blog:         http://localhost:3000/blog
📞 Contact:      http://localhost:3000/contact
📅 Booking:      http://localhost:3000/booking
🎓 Academy:      http://localhost:3000/academy
⚙️ Admin:        http://localhost:3000/admin
```

### **API Endpoints**
```
🔌 Services API:  http://localhost:3000/api/services
👥 Users API:     http://localhost:3000/api/users
📅 Bookings API:  http://localhost:3000/api/bookings
📝 Blog API:      http://localhost:3000/api/blog
🎓 Courses API:   http://localhost:3000/api/courses
📞 Contact API:   http://localhost:3000/api/contact
```

### **Development Tools**
```
🗄️ Prisma Studio: http://localhost:5555
```

## ⚡ **Quick Commands**

### **Start Development**
```bash
npm run dev          # Standard development
npm run dev:local    # Localhost only
npm run dev:network  # Network accessible
```

### **Database Operations**
```bash
npm run db:push      # Push schema changes
npm run db:seed      # Seed with data
npm run db:reset     # Reset + seed
npm run db:studio    # Open database GUI
```

### **Build & Deploy**
```bash
npm run build        # Production build
npm run start        # Start production
npm run lint         # Check code
```

## 🔧 **Configuration Files**

| File | Purpose |
|------|---------|
| `.env` | Production environment |
| `.env.local` | Local development |
| `next.config.mjs` | Next.js configuration |
| `tailwind.config.js` | Tailwind CSS config |
| `prisma/schema.prisma` | Database schema |

## 🐛 **Troubleshooting**

### **Common Issues**

#### **Server Won't Start**
```bash
# Check if port 3000 is in use
netstat -ano | findstr :3000

# Kill process on port 3000
taskkill /PID <PID> /F
```

#### **Database Issues**
```bash
# Reset database
npm run db:reset

# Check database file
dir prisma\dev.db
```

#### **Image Loading Issues**
- Check image paths in `public/` directory
- Use Next.js Image component
- Verify image URLs

#### **API Issues**
- Check browser Network tab
- Verify API route files
- Check database connection

## 📱 **Mobile Testing**

### **Network Access**
```bash
# Start network server
npm run dev:network

# Access from mobile
http://192.168.x.x:3000
```

### **Device Simulation**
- Chrome DevTools → Toggle device toolbar
- Test responsive design
- Check mobile performance

## 🎯 **Development Tips**

### **Hot Reload**
- ✅ Automatic page refresh
- ✅ Fast React refresh
- ✅ CSS hot reload

### **Database Management**
- ✅ SQLite for development
- ✅ Prisma Studio GUI
- ✅ Automatic schema sync

### **Image Optimization**
- ✅ Next.js Image component
- ✅ Local image support
- ✅ Responsive sizes

## 📊 **Performance**

### **Build Metrics**
- **Build Time**: ~13s
- **Bundle Size**: 268 kB
- **Pages**: 20 static
- **API Routes**: 10 dynamic

### **Development Features**
- ✅ SWC minification
- ✅ Package optimization
- ✅ Image optimization
- ✅ Security headers

---

**🚀 Your localhost is ready! Access http://localhost:3000** 