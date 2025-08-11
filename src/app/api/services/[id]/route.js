import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

// GET single service by ID
export async function GET(request, { params }) {
  try {
    const { id } = await params;
    console.log('API: Attempting to fetch service with ID:', id);
    
    const service = await prisma.service.findUnique({
      where: { id }
    });

    if (!service) {
      console.log('API: Service not found with ID:', id);
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }

    console.log('API: Service found:', service);
    return NextResponse.json(service);
  } catch (error) {
    console.error('API: Error fetching service:', error);
    return NextResponse.json(
      { error: `Failed to fetch service: ${error.message}` },
      { status: 500 }
    );
  }
}

// PUT update service
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    console.log('API: Attempting to update service with ID:', id);
    
    const body = await request.json();
    console.log('API: Update request body:', body);
    
    const { name, description, price, duration, category, isActive } = body;

    const service = await prisma.service.update({
      where: { id },
      data: {
        name,
        description,
        price: parseFloat(price),
        duration: parseInt(duration),
        category,
        isActive
      }
    });

    console.log('API: Service updated successfully:', service);
    return NextResponse.json(service);
  } catch (error) {
    console.error('API: Error updating service:', error);
    return NextResponse.json(
      { error: `Failed to update service: ${error.message}` },
      { status: 500 }
    );
  }
}

// DELETE service
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    console.log('API: Attempting to delete service with ID:', id);
    
    await prisma.service.delete({
      where: { id }
    });

    console.log('API: Service deleted successfully');
    return NextResponse.json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error('API: Error deleting service:', error);
    return NextResponse.json(
      { error: `Failed to delete service: ${error.message}` },
      { status: 500 }
    );
  }
} 