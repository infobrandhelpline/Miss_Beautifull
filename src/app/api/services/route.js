import { NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { servicesData } from '@/lib/servicesData';

// GET all services
export async function GET() {
  try {
    console.log('API: Attempting to fetch services from database...');
    
    const services = await prisma.service.findMany({
      where: {
        isActive: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    console.log(`API: Successfully fetched ${services.length} services`);
    return NextResponse.json(services);
  } catch (error) {
    console.error('API: Error fetching services from database:', error);
    
    // Return comprehensive static data when database is unavailable
    console.log('API: Returning comprehensive static services as fallback');
    return NextResponse.json(servicesData);
  }
}

// POST new service
export async function POST(request) {
  try {
    console.log('API: Attempting to create new service...');
    
    const body = await request.json();
    console.log('API: Request body:', body);
    
    const { name, description, price, duration, category, isActive = true } = body;

    if (!name || !description || !price || !duration || !category) {
      console.error('API: Missing required fields:', { name, description, price, duration, category });
      return NextResponse.json(
        { error: 'Missing required fields: name, description, price, duration, category' },
        { status: 400 }
      );
    }

    const service = await prisma.service.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        duration: parseInt(duration),
        category,
        isActive
      }
    });

    console.log('API: Service created successfully:', service);
    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    console.error('API: Error creating service:', error);
    return NextResponse.json(
      { error: `Failed to create service: ${error.message}` },
      { status: 500 }
    );
  }
} 