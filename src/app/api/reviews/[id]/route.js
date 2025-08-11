import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET single review by ID
export async function GET(request, { params }) {
  try {
    const { id } = params;
    const review = await prisma.review.findUnique({
      where: { id },
      include: {
        user: true,
        booking: {
          include: {
            service: true
          }
        }
      }
    });

    if (!review) {
      return NextResponse.json(
        { error: 'Review not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(review);
  } catch (error) {
    console.error('Error fetching review:', error);
    return NextResponse.json(
      { error: 'Failed to fetch review' },
      { status: 500 }
    );
  }
}

// PUT update review
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    const { rating, comment, isApproved } = body;

    const review = await prisma.review.update({
      where: { id },
      data: {
        rating,
        comment,
        isApproved
      },
      include: {
        user: true,
        booking: {
          include: {
            service: true
          }
        }
      }
    });

    return NextResponse.json(review);
  } catch (error) {
    console.error('Error updating review:', error);
    return NextResponse.json(
      { error: 'Failed to update review' },
      { status: 500 }
    );
  }
}

// DELETE review
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    await prisma.review.delete({
      where: { id }
    });

    return NextResponse.json({ message: 'Review deleted successfully' });
  } catch (error) {
    console.error('Error deleting review:', error);
    return NextResponse.json(
      { error: 'Failed to delete review' },
      { status: 500 }
    );
  }
} 