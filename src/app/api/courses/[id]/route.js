import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET single course by ID
export async function GET(request, { params }) {
  try {
    const { id } = params;
    const course = await prisma.course.findUnique({
      where: { id }
    });

    if (!course) {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(course);
  } catch (error) {
    console.error('Error fetching course:', error);
    return NextResponse.json(
      { error: 'Failed to fetch course' },
      { status: 500 }
    );
  }
}

// PUT update course
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    const { name, description, duration, price, level, maxStudents, isActive } = body;

    const course = await prisma.course.update({
      where: { id },
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

    return NextResponse.json(course);
  } catch (error) {
    console.error('Error updating course:', error);
    return NextResponse.json(
      { error: 'Failed to update course' },
      { status: 500 }
    );
  }
}

// DELETE course
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    await prisma.course.delete({
      where: { id }
    });

    return NextResponse.json({ message: 'Course deleted successfully' });
  } catch (error) {
    console.error('Error deleting course:', error);
    return NextResponse.json(
      { error: 'Failed to delete course' },
      { status: 500 }
    );
  }
} 