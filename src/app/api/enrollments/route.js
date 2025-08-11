import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET() {
  try {
    const enrollments = await prisma.enrollment.findMany({
      include: {
        user: {
          select: {
            name: true,
            email: true,
            phone: true,
          }
        },
        course: {
          select: {
            name: true,
            description: true,
            duration: true,
            price: true,
          }
        }
      },
      orderBy: { enrolledAt: 'desc' },
    });
    return new Response(JSON.stringify(enrollments), { status: 200 });
  } catch (error) {
    console.error('Error fetching enrollments:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch enrollments' }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    console.log('Starting enrollment creation...');
    const body = await req.json();
    const { name, email, phone, course } = body;
    
    console.log('Received data:', { name, email, phone, course });
    
    if (!name || !email || !phone || !course) {
      console.log('Missing required fields');
      return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 });
    }

    // Test database connection first
    console.log('Testing database connection...');
    const userCount = await prisma.user.count();
    console.log('User count:', userCount);

    // 1. Find or create user
    console.log('Looking for user with email:', email);
    let user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      console.log('Creating new user...');
      user = await prisma.user.create({
        data: {
          name,
          email,
          phone,
          role: 'CUSTOMER'
        }
      });
      console.log('User created:', user.id);
    } else {
      console.log('User found:', user.id);
    }

    // 2. Find course by name (exact match for SQLite)
    console.log('Looking for course:', course);
    const courseRecord = await prisma.course.findFirst({
      where: {
        name: course,
        isActive: true
      }
    });

    if (!courseRecord) {
      console.log('Course not found');
      return new Response(JSON.stringify({ error: 'Course not found' }), { status: 404 });
    }
    console.log('Course found:', courseRecord.id);

    // 3. Check if user is already enrolled in this course
    console.log('Checking existing enrollment...');
    const existingEnrollment = await prisma.enrollment.findFirst({
      where: {
        userId: user.id,
        courseId: courseRecord.id
      }
    });

    if (existingEnrollment) {
      console.log('User already enrolled');
      return new Response(JSON.stringify({ error: 'Already enrolled in this course' }), { status: 400 });
    }

    // 4. Create enrollment
    console.log('Creating enrollment...');
    const enrollment = await prisma.enrollment.create({
      data: {
        userId: user.id,
        courseId: courseRecord.id,
        status: 'ENROLLED'
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
            phone: true,
          }
        },
        course: {
          select: {
            name: true,
            description: true,
            duration: true,
            price: true,
          }
        }
      }
    });

    console.log('Enrollment created successfully');

    // 5. Update course student count
    console.log('Updating course student count...');
    await prisma.course.update({
      where: { id: courseRecord.id },
      data: {
        currentStudents: {
          increment: 1
        }
      }
    });

    console.log('Course updated successfully');
    return new Response(JSON.stringify(enrollment), { status: 201 });
  } catch (error) {
    console.error('Error creating enrollment:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      meta: error.meta
    });
    return new Response(JSON.stringify({ error: 'Failed to create enrollment', details: error.message }), { status: 500 });
  }
} 