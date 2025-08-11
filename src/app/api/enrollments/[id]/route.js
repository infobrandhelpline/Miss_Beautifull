import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status } = body;

    if (!status) {
      return new Response(JSON.stringify({ error: 'Status is required' }), { status: 400 });
    }

    // Validate status
    const validStatuses = ['ENROLLED', 'IN_PROGRESS', 'COMPLETED', 'DROPPED'];
    if (!validStatuses.includes(status)) {
      return new Response(JSON.stringify({ error: 'Invalid status' }), { status: 400 });
    }

    const enrollment = await prisma.enrollment.update({
      where: { id },
      data: { 
        status,
        ...(status === 'COMPLETED' && { completedAt: new Date() })
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

    return new Response(JSON.stringify(enrollment), { status: 200 });
  } catch (error) {
    console.error('Error updating enrollment:', error);
    return new Response(JSON.stringify({ error: 'Failed to update enrollment' }), { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    // Get the enrollment to find the course ID for updating student count
    const enrollment = await prisma.enrollment.findUnique({
      where: { id },
      include: { course: true }
    });

    if (!enrollment) {
      return new Response(JSON.stringify({ error: 'Enrollment not found' }), { status: 404 });
    }

    // Delete the enrollment
    await prisma.enrollment.delete({
      where: { id }
    });

    // Update course student count (decrease by 1)
    await prisma.course.update({
      where: { id: enrollment.courseId },
      data: {
        currentStudents: {
          decrement: 1
        }
      }
    });

    return new Response(JSON.stringify({ message: 'Enrollment deleted successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error deleting enrollment:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete enrollment' }), { status: 500 });
  }
} 