import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

// GET all bookings
export async function GET() {
  try {
    console.log('API: Attempting to fetch bookings from database...');
    
    const bookings = await prisma.booking.findMany({
      include: {
        user: true,
        service: true,
        stylist: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    console.log(`API: Successfully fetched ${bookings.length} bookings`);
    return NextResponse.json(bookings);
  } catch (error) {
    console.error('API: Error fetching bookings from database:', error);
    
    // Return static data when database is unavailable
    const staticBookings = [
      {
        id: 1,
        userId: 1,
        serviceId: 1,
        stylistId: 1,
        date: new Date().toISOString(),
        time: "10:00 AM",
        status: "CONFIRMED",
        totalPrice: 1500,
        notes: "Sample booking",
        createdAt: new Date().toISOString(),
        user: { name: "John Doe", email: "john@example.com" },
        service: { name: "Hair Styling", price: 1500 },
        stylist: { name: "Jane Smith" }
      }
    ];

    console.log('API: Returning static bookings as fallback');
    return NextResponse.json(staticBookings);
  }
}

// POST new booking
export async function POST(request) {
  try {
    console.log('API: Attempting to create new booking...');
    
    const body = await request.json();
    console.log('API: Booking request body:', body);
    
    const { userId, serviceId, stylistId, date, time, notes, totalPrice } = body;

    if (!userId || !serviceId || !date || !time) {
      console.error('API: Missing required fields:', { userId, serviceId, date, time });
      return NextResponse.json(
        { error: 'Missing required fields: userId, serviceId, date, time' },
        { status: 400 }
      );
    }

    // userId should be a string (Prisma cuid format)
    if (typeof userId !== 'string') {
      console.error('API: userId must be a string:', userId);
      return NextResponse.json(
        { error: 'userId must be a string' },
        { status: 400 }
      );
    }

    console.log('API: Using userId as string:', userId);

    const booking = await prisma.booking.create({
      data: {
        userId: userId,
        serviceId: serviceId,
        stylistId: stylistId || null,
        date: new Date(date),
        time,
        status: "PENDING",
        totalPrice: parseFloat(totalPrice || 0),
        notes: notes || ""
      }
    });

    console.log('API: Booking created successfully:', booking);
    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error('API: Error creating booking:', error);
    return NextResponse.json(
      { error: `Failed to create booking: ${error.message}` },
      { status: 500 }
    );
  }
} 