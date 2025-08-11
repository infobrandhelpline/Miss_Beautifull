const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Clear existing data
  await prisma.review.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.enrollment.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.blogPost.deleteMany();
  await prisma.course.deleteMany();
  await prisma.service.deleteMany();
  await prisma.user.deleteMany();
  await prisma.contact.deleteMany();

  // Create users
  const admin = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@missbeautyfull.com',
      phone: '+91 98765 43210',
      role: 'ADMIN'
    }
  });

  const stylist1 = await prisma.user.create({
    data: {
      name: 'Priya Sharma',
      email: 'priya@missbeautyfull.com',
      phone: '+91 98765 43211',
      role: 'STYLIST'
    }
  });

  const stylist2 = await prisma.user.create({
    data: {
      name: 'Meera Patel',
      email: 'meera@missbeautyfull.com',
      phone: '+91 98765 43212',
      role: 'STYLIST'
    }
  });

  const customer1 = await prisma.user.create({
    data: {
      name: 'Anjali Desai',
      email: 'anjali@example.com',
      phone: '+91 98765 43213',
      role: 'CUSTOMER'
    }
  });

  const customer2 = await prisma.user.create({
    data: {
      name: 'Riya Kapoor',
      email: 'riya@example.com',
      phone: '+91 98765 43214',
      role: 'CUSTOMER'
    }
  });

  // Create services
  const services = await Promise.all([
    prisma.service.create({
      data: {
        name: 'Hair Styling',
        description: 'Professional haircuts, styling, coloring, and treatments by expert stylists.',
        price: 800,
        duration: 90,
        category: 'Hair Styling',
        isActive: true
      }
    }),
    prisma.service.create({
      data: {
        name: 'Makeup Art',
        description: 'Bridal makeup, party makeup, and professional makeup services.',
        price: 1500,
        duration: 120,
        category: 'Makeup',
        isActive: true
      }
    }),
    prisma.service.create({
      data: {
        name: 'Nail Art',
        description: 'Creative nail designs, manicure, pedicure, and nail extensions.',
        price: 500,
        duration: 60,
        category: 'Nail Art',
        isActive: true
      }
    }),
    prisma.service.create({
      data: {
        name: 'Facial Treatments',
        description: 'Rejuvenating facials and skin treatments for glowing skin.',
        price: 1200,
        duration: 90,
        category: 'Skincare',
        isActive: true
      }
    }),
    prisma.service.create({
      data: {
        name: 'Bridal Package',
        description: 'Complete bridal makeover with hair, makeup, and nails.',
        price: 5000,
        duration: 240,
        category: 'Package',
        isActive: true
      }
    })
  ]);

  // Create courses
  const courses = await Promise.all([
    prisma.course.create({
      data: {
        name: 'Hair Styling Course',
        description: 'Learn professional hair styling techniques, cutting, coloring, and treatments.',
        duration: '3 months',
        price: 25000,
        level: 'Beginner',
        maxStudents: 20,
        currentStudents: 15,
        isActive: true
      }
    }),
    prisma.course.create({
      data: {
        name: 'Makeup Art Course',
        description: 'Master the art of makeup application for different occasions and skin types.',
        duration: '2 months',
        price: 20000,
        level: 'Intermediate',
        maxStudents: 15,
        currentStudents: 12,
        isActive: true
      }
    }),
    prisma.course.create({
      data: {
        name: 'Nail Art Course',
        description: 'Learn creative nail designs, manicure, pedicure, and nail care techniques.',
        duration: '1 month',
        price: 15000,
        level: 'Beginner',
        maxStudents: 25,
        currentStudents: 18,
        isActive: true
      }
    })
  ]);

  // Create blog posts
  const blogPosts = await Promise.all([
    prisma.blogPost.create({
      data: {
        title: '10 Essential Hair Care Tips for Healthy Hair',
        slug: '10-essential-hair-care-tips-for-healthy-hair',
        excerpt: 'Discover the best practices for maintaining healthy, shiny hair with our expert tips and professional advice.',
        content: 'Maintaining healthy hair requires a combination of proper care, good nutrition, and the right products. In this comprehensive guide, we\'ll share 10 essential tips that will help you achieve the hair of your dreams. From choosing the right shampoo to understanding your hair type, we cover everything you need to know for beautiful, healthy hair.',
        category: 'Hair Care',
        authorId: stylist1.id,
        imageUrl: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=600&fit=crop',
        isPublished: true,
        featured: true,
        views: 1247,
        likes: 89,
        readTime: 5
      }
    }),
    prisma.blogPost.create({
      data: {
        title: 'Latest Makeup Trends for 2024',
        slug: 'latest-makeup-trends-for-2024',
        excerpt: 'Stay ahead of the beauty game with these trending makeup looks that are dominating social media and runways.',
        content: '2024 is all about natural beauty with a twist. From \'no-makeup\' makeup to bold statement looks, here are the hottest trends you need to try. We\'ll explore everything from dewy skin finishes to vibrant eye looks that are making waves in the beauty industry.',
        category: 'Makeup',
        authorId: stylist2.id,
        imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop',
        isPublished: true,
        featured: true,
        views: 2156,
        likes: 156,
        readTime: 4
      }
    }),
    prisma.blogPost.create({
      data: {
        title: 'Nail Art Designs for Every Occasion',
        slug: 'nail-art-designs-for-every-occasion',
        excerpt: 'From simple elegance to bold statements, explore stunning nail art designs perfect for any event or mood.',
        content: 'Your nails are the perfect canvas for expressing your style. Whether you prefer minimalist designs or bold patterns, we\'ve got you covered with the latest nail art trends and techniques.',
        category: 'Nail Art',
        authorId: stylist1.id,
        imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop',
        isPublished: true,
        featured: false,
        views: 1893,
        likes: 134,
        readTime: 6
      }
    })
  ]);

  // Create bookings
  const bookings = await Promise.all([
    prisma.booking.create({
      data: {
        userId: customer1.id,
        serviceId: services[0].id, // Hair Styling
        stylistId: stylist1.id,
        date: new Date('2024-02-15'),
        time: '10:00 AM',
        status: 'CONFIRMED',
        notes: 'Customer prefers natural look',
        totalPrice: 800
      }
    }),
    prisma.booking.create({
      data: {
        userId: customer2.id,
        serviceId: services[1].id, // Makeup Art
        stylistId: stylist2.id,
        date: new Date('2024-02-16'),
        time: '2:00 PM',
        status: 'PENDING',
        notes: 'Bridal makeup consultation',
        totalPrice: 1500
      }
    }),
    prisma.booking.create({
      data: {
        userId: customer1.id,
        serviceId: services[2].id, // Nail Art
        stylistId: stylist1.id,
        date: new Date('2024-02-14'),
        time: '11:00 AM',
        status: 'COMPLETED',
        notes: 'French manicure with gel polish',
        totalPrice: 500
      }
    })
  ]);

  // Create reviews
  await Promise.all([
    prisma.review.create({
      data: {
        userId: customer1.id,
        bookingId: bookings[2].id, // Completed booking
        rating: 5,
        comment: 'Excellent service! The nail art was perfect and the stylist was very professional.',
        isApproved: true
      }
    })
  ]);

  // Create enrollments
  await Promise.all([
    prisma.enrollment.create({
      data: {
        userId: customer1.id,
        courseId: courses[0].id, // Hair Styling Course
        status: 'ENROLLED',
        enrolledAt: new Date('2024-01-15')
      }
    }),
    prisma.enrollment.create({
      data: {
        userId: customer2.id,
        courseId: courses[1].id, // Makeup Art Course
        status: 'IN_PROGRESS',
        enrolledAt: new Date('2024-01-10')
      }
    })
  ]);

  // Create contact submissions
  await Promise.all([
    prisma.contact.create({
      data: {
        name: 'Kavya Singh',
        email: 'kavya@example.com',
        phone: '+91 98765 43215',
        subject: 'General Inquiry',
        message: 'I would like to know more about your bridal packages and pricing.',
        isRead: false
      }
    }),
    prisma.contact.create({
      data: {
        name: 'Sneha Reddy',
        email: 'sneha@example.com',
        phone: '+91 98765 43216',
        subject: 'Academy Course',
        message: 'I am interested in joining your makeup course. Please send me the details.',
        isRead: true
      }
    })
  ]);

  console.log('✅ Database seeded successfully!');
  console.log(`📊 Created:`);
  console.log(`   - ${await prisma.user.count()} users`);
  console.log(`   - ${await prisma.service.count()} services`);
  console.log(`   - ${await prisma.course.count()} courses`);
  console.log(`   - ${await prisma.blogPost.count()} blog posts`);
  console.log(`   - ${await prisma.booking.count()} bookings`);
  console.log(`   - ${await prisma.review.count()} reviews`);
  console.log(`   - ${await prisma.enrollment.count()} enrollments`);
  console.log(`   - ${await prisma.contact.count()} contact submissions`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 