import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

// GET all reviews
export async function GET() {
  try {
    console.log('API: Attempting to fetch reviews from database...');
    
    const reviews = await prisma.review.findMany({
      include: {
        user: true,
        booking: {
          include: {
            service: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    console.log(`API: Successfully fetched ${reviews.length} reviews`);
    return NextResponse.json(reviews);
  } catch (error) {
    console.error('API: Error fetching reviews from database:', error);
    
    // Return static data when database is unavailable
    const staticReviews = [
      {
        id: 1,
        userId: 1,
        bookingId: 1,
        rating: 5,
        comment: "Excellent service! Very professional and friendly staff.",
        isApproved: true,
        createdAt: new Date().toISOString(),
        user: { name: "John Doe", email: "john@example.com" },
        booking: {
          service: { name: "Hair Styling", price: 1500 }
        }
      },
      {
        id: 2,
        userId: 2,
        bookingId: 2,
        rating: 4,
        comment: "Great experience, highly recommended!",
        isApproved: true,
        createdAt: new Date().toISOString(),
        user: { name: "Jane Smith", email: "jane@example.com" },
        booking: {
          service: { name: "Makeup Artistry", price: 2500 }
        }
      }
    ];

    console.log('API: Returning static reviews as fallback');
    return NextResponse.json(staticReviews);
  }
}

// POST new review
export async function POST(request) {
  try {
    console.log('API: Attempting to create new review...');
    
    const body = await request.json();
    console.log('API: Review request body:', body);
    
    const { userId, bookingId, rating, comment } = body;

    if (!userId || !bookingId || !rating) {
      console.error('API: Missing required fields:', { userId, bookingId, rating });
      return NextResponse.json(
        { error: 'Missing required fields: userId, bookingId, rating' },
        { status: 400 }
      );
    }

    const review = await prisma.review.create({
      data: {
        userId,
        bookingId,
        rating: parseInt(rating),
        comment: comment || ""
      }
    });

    console.log('API: Review created successfully:', review);
    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    console.error('API: Error creating review:', error);
    return NextResponse.json(
      { error: `Failed to create review: ${error.message}` },
      { status: 500 }
    );
  }
} 