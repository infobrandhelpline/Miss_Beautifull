import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

// GET single booking by ID
export async function GET(request, { params }) {
  try {
    const { id } = await params;
    console.log('API: Attempting to fetch booking with ID:', id);
    
    const booking = await prisma.booking.findUnique({
      where: { id },
      include: {
        user: true,
        service: true,
        stylist: true
      }
    });

    if (!booking) {
      console.log('API: Booking not found with ID:', id);
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      );
    }

    console.log('API: Booking found:', booking);
    return NextResponse.json(booking);
  } catch (error) {
    console.error('API: Error fetching booking:', error);
    return NextResponse.json(
      { error: `Failed to fetch booking: ${error.message}` },
      { status: 500 }
    );
  }
}

// PUT update booking
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    console.log('API: Attempting to update booking with ID:', id);
    
    const body = await request.json();
    console.log('API: Update booking request body:', body);
    
    const { status, date, time, notes, stylistId } = body;

    const booking = await prisma.booking.update({
      where: { id },
      data: {
        status: status || undefined,
        date: date ? new Date(date) : undefined,
        time: time || undefined,
        notes: notes || undefined,
        stylistId: stylistId || undefined
      },
      include: {
        user: true,
        service: true,
        stylist: true
      }
    });

    console.log('API: Booking updated successfully:', booking);
    return NextResponse.json(booking);
  } catch (error) {
    console.error('API: Error updating booking:', error);
    return NextResponse.json(
      { error: `Failed to update booking: ${error.message}` },
      { status: 500 }
    );
  }
}

// DELETE booking
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    console.log('API: Attempting to delete booking with ID:', id);
    
    await prisma.booking.delete({
      where: { id }
    });

    console.log('API: Booking deleted successfully');
    return NextResponse.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    console.error('API: Error deleting booking:', error);
    return NextResponse.json(
      { error: `Failed to delete booking: ${error.message}` },
      { status: 500 }
    );
  }
} 