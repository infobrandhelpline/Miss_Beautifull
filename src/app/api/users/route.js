import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

// GET all users
export async function GET() {
  try {
    console.log('API: Attempting to fetch users from database...');
    
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    console.log(`API: Successfully fetched ${users.length} users`);
    return NextResponse.json(users);
  } catch (error) {
    console.error('API: Error fetching users from database:', error);
    
    // Return static data when database is unavailable
    const staticUsers = [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "+91 98765 43210",
        role: "CUSTOMER",
        createdAt: new Date().toISOString()
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "+91 98765 43211",
        role: "STYLIST",
        createdAt: new Date().toISOString()
      }
    ];

    console.log('API: Returning static users as fallback');
    return NextResponse.json(staticUsers);
  }
}

// POST new user
export async function POST(request) {
  try {
    console.log('API: Attempting to create new user...');
    
    const body = await request.json();
    console.log('API: User request body:', body);
    
    const { name, email, phone, role = 'CUSTOMER' } = body;

    if (!name || !email) {
      console.error('API: Missing required fields:', { name, email });
      return NextResponse.json(
        { error: 'Missing required fields: name, email' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      console.log('API: User already exists with email:', email);
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone: phone || null,
        role
      }
    });

    console.log('API: User created successfully:', user);
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error('API: Error creating user:', error);
    return NextResponse.json(
      { error: `Failed to create user: ${error.message}` },
      { status: 500 }
    );
  }
} 