# Database Setup Guide

## Overview
This salon website uses **Prisma ORM** with **SQLite** database for data management. The database stores information about users, services, bookings, blog posts, courses, and more.

## Database Schema

### Models

1. **User** - Customers, staff, and stylists
   - Fields: id, email, name, phone, role, createdAt, updatedAt
   - Roles: ADMIN, STAFF, STYLIST, CUSTOMER

2. **Service** - Salon services offered
   - Fields: id, name, description, price, duration, category, isActive
   - Categories: Hair, Makeup, Nails, Skincare, Package

3. **BlogPost** - Blog articles
   - Fields: id, title, slug, excerpt, content, category, authorId, isPublished, featured, views, likes, readTime
   - Includes author and tags relationships

4. **Booking** - Customer appointments
   - Fields: id, userId, serviceId, stylistId, date, time, status, notes, totalPrice
   - Status: PENDING, CONFIRMED, CANCELLED, COMPLETED

5. **Review** - Customer reviews
   - Fields: id, userId, bookingId, rating, comment, isApproved

6. **Course** - Academy courses
   - Fields: id, name, description, duration, price, level, maxStudents, currentStudents, isActive

7. **Enrollment** - Course enrollments
   - Fields: id, userId, courseId, status, enrolledAt, completedAt
   - Status: ENROLLED, IN_PROGRESS, COMPLETED, DROPPED

8. **Contact** - Contact form submissions
   - Fields: id, name, email, phone, subject, message, isRead

## Setup Instructions

### 1. Install Dependencies
```bash
npm install prisma @prisma/client
```

### 2. Initialize Prisma
```bash
npx prisma init
```

### 3. Configure Database
The database URL is set in `.env`:
```
DATABASE_URL="file:./dev.db"
```

### 4. Generate Prisma Client
```bash
npx prisma generate
```

### 5. Create Database Tables
```bash
npx prisma db push
```

### 6. Seed Database
```bash
npm run seed
```

## API Endpoints

### Services
- `GET /api/services` - Get all active services
- `POST /api/services` - Create new service

### Blog Posts
- `GET /api/blog` - Get published blog posts
- `POST /api/blog` - Create new blog post

### Bookings
- `GET /api/bookings` - Get all bookings
- `POST /api/bookings` - Create new booking

### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Create new user

### Courses
- `GET /api/courses` - Get all active courses
- `POST /api/courses` - Create new course

### Reviews
- `GET /api/reviews` - Get all reviews
- `POST /api/reviews` - Create new review

## Admin Dashboard

Access the admin dashboard at `/admin` to:
- View database statistics
- Monitor recent bookings
- Check recent blog posts
- Manage salon operations

## Database Operations

### View Database
```bash
npx prisma studio
```

### Reset Database
```bash
npx prisma db push --force-reset
npm run seed
```

### Generate New Migration
```bash
npx prisma migrate dev --name migration_name
```

## Sample Data

The seed script creates:
- 1 Admin user
- 2 Stylist users
- 6 Services (Hair Styling, Makeup Art, Nail Art, Facial Treatment, Hair Coloring, Bridal Package)
- 3 Courses (Hair Styling Course, Makeup Art Course, Nail Art Course)
- 3 Blog posts with tags

## File Structure

```
prisma/
├── schema.prisma    # Database schema
└── seed.js         # Database seeding script

src/
├── lib/
│   └── db.js       # Database connection
└── app/
    └── api/        # API routes
        ├── services/
        ├── blog/
        ├── bookings/
        ├── users/
        ├── courses/
        └── reviews/
```

## Troubleshooting

### Common Issues

1. **Database not found**
   - Run `npx prisma db push` to create the database

2. **Prisma client not generated**
   - Run `npx prisma generate`

3. **Environment variables not loaded**
   - Check `.env` file exists and has correct DATABASE_URL

4. **Seed script fails**
   - Clear database: `npx prisma db push --force-reset`
   - Run seed again: `npm run seed`

### Useful Commands

```bash
# View database in browser
npx prisma studio

# Reset database
npx prisma db push --force-reset

# Generate client after schema changes
npx prisma generate

# Push schema changes
npx prisma db push

# Run seed script
npm run seed
```

## Production Deployment

For production, consider:
1. Using PostgreSQL instead of SQLite
2. Setting up proper environment variables
3. Implementing authentication for admin routes
4. Adding data validation and sanitization
5. Setting up database backups 