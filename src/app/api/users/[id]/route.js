import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Force dynamic runtime to avoid build-time execution
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Lazy load Prisma to avoid build-time connection
let prisma;
function getPrisma() {
  if (!prisma) {
    prisma = new PrismaClient();
  }
  return prisma;
}

// GET single user by ID
export async function GET(request, { params }) {
  try {
    const { id } = params;
    const db = getPrisma();
    const user = await db.user.findUnique({
      where: { id }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user' },
      { status: 500 }
    );
  }
}

// PUT update user
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    const { name, email, phone, role } = body;

    const db = getPrisma();
    const user = await db.user.update({
      where: { id },
      data: {
        name,
        email,
        phone,
        role
      }
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json(
      { error: 'Failed to update user' },
      { status: 500 }
    );
  }
}

// DELETE user
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const db = getPrisma();
    await db.user.delete({
      where: { id }
    });

    return NextResponse.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 }
    );
  }
} 