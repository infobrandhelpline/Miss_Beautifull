import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET single blog post by ID
export async function GET(request, { params }) {
  try {
    const { id } = params;
    const post = await prisma.blogPost.findUnique({
      where: { id },
      include: {
        author: true,
        tags: true,
        comments: {
          include: {
            author: true
          }
        }
      }
    });

    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Increment view count
    await prisma.blogPost.update({
      where: { id },
      data: {
        views: {
          increment: 1
        }
      }
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
}

// PUT update blog post
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { title, excerpt, content, category, authorId, imageUrl, isPublished, featured } = body;

    const post = await prisma.blogPost.update({
      where: { id },
      data: {
        title,
        excerpt,
        content,
        category,
        author: {
          connect: { id: authorId }
        },
        imageUrl,
        isPublished,
        featured,
        readTime: Math.ceil(content.split(' ').length / 200)
      },
      include: {
        author: true,
        tags: true
      }
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to update blog post' },
      { status: 500 }
    );
  }
}

// DELETE blog post
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await prisma.blogPost.delete({
      where: { id }
    });

    return NextResponse.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog post' },
      { status: 500 }
    );
  }
} 