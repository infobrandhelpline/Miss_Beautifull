import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

// GET all courses
export async function GET() {
  try {
    console.log('API: Attempting to fetch courses from database...');
    
    const courses = await prisma.course.findMany({
      where: {
        isActive: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    console.log(`API: Successfully fetched ${courses.length} courses`);
    return NextResponse.json(courses);
  } catch (error) {
    console.error('API: Error fetching courses from database:', error);
    
    // Return static data when database is unavailable
    const staticCourses = [
      {
        id: 1,
        name: "Beauty Academy Course",
        description: "Complete beauty and makeup course",
        duration: "3 months",
        price: 25000,
        level: "Beginner",
        maxStudents: 20,
        currentStudents: 15,
        isActive: true,
        createdAt: new Date().toISOString()
      },
      {
        id: 2,
        name: "Advanced Hair Styling",
        description: "Professional hair styling techniques",
        duration: "2 months",
        price: 18000,
        level: "Intermediate",
        maxStudents: 15,
        currentStudents: 8,
        isActive: true,
        createdAt: new Date().toISOString()
      }
    ];

    console.log('API: Returning static courses as fallback');
    return NextResponse.json(staticCourses);
  }
}

// POST new course
export async function POST(request) {
  try {
    console.log('API: Attempting to create new course...');
    
    const body = await request.json();
    console.log('API: Course request body:', body);
    
    const { name, description, duration, price, level, maxStudents, isActive = true } = body;

    if (!name || !description || !duration || !price || !level || !maxStudents) {
      console.error('API: Missing required fields:', { name, description, duration, price, level, maxStudents });
      return NextResponse.json(
        { error: 'Missing required fields: name, description, duration, price, level, maxStudents' },
        { status: 400 }
      );
    }

    const course = await prisma.course.create({
      data: {
        name,
        description,
        duration,
        price: parseFloat(price),
        level,
        maxStudents: parseInt(maxStudents),
        isActive
      }
    });

    console.log('API: Course created successfully:', course);
    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    console.error('API: Error creating course:', error);
    return NextResponse.json(
      { error: `Failed to create course: ${error.message}` },
      { status: 500 }
    );
  }
} 