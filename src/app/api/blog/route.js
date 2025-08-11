import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

// GET all blog posts
export async function GET() {
  try {
    console.log('API: Attempting to fetch blog posts from database...');
    
    const posts = await prisma.blogPost.findMany({
      include: {
        author: true,
        tags: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    console.log(`API: Successfully fetched ${posts.length} blog posts`);
    return NextResponse.json(posts);
  } catch (error) {
    console.error('API: Error fetching blog posts from database:', error);
    
    // Return static data when database is unavailable
    const staticPosts = [
      {
        id: 1,
        title: "Beauty Tips for Summer",
        slug: "beauty-tips-summer",
        excerpt: "Essential beauty tips to keep you looking great this summer",
        content: "Summer is here and with it comes the need to adjust your beauty routine...",
        category: "Beauty Tips",
        authorId: 1,
        imageUrl: "/images/summer-beauty.jpg",
        isPublished: true,
        featured: true,
        views: 150,
        likes: 25,
        readTime: 5,
        createdAt: new Date().toISOString(),
        author: { name: "Beauty Expert", email: "expert@beauty.com" },
        tags: [{ name: "Summer" }, { name: "Beauty" }]
      },
      {
        id: 2,
        title: "Hair Care Essentials",
        slug: "hair-care-essentials",
        excerpt: "Complete guide to maintaining healthy hair",
        content: "Healthy hair starts with proper care and maintenance...",
        category: "Hair Care",
        authorId: 1,
        imageUrl: "/images/hair-care.jpg",
        isPublished: true,
        featured: false,
        views: 120,
        likes: 18,
        readTime: 8,
        createdAt: new Date().toISOString(),
        author: { name: "Hair Specialist", email: "hair@beauty.com" },
        tags: [{ name: "Hair" }, { name: "Care" }]
      }
    ];

    console.log('API: Returning static blog posts as fallback');
    return NextResponse.json(staticPosts);
  }
}

// POST new blog post
export async function POST(request) {
  try {
    console.log('API: Attempting to create new blog post...');
    
    const body = await request.json();
    console.log('API: Blog post request body:', body);
    
    const { title, slug, excerpt, content, category, authorId, imageUrl, isPublished = false, featured = false, readTime } = body;

    if (!title || !slug || !excerpt || !content || !category || !authorId) {
      console.error('API: Missing required fields:', { title, slug, excerpt, content, category, authorId });
      return NextResponse.json(
        { error: 'Missing required fields: title, slug, excerpt, content, category, authorId' },
        { status: 400 }
      );
    }

    const post = await prisma.blogPost.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        category,
        authorId,
        imageUrl: imageUrl || null,
        isPublished,
        featured,
        readTime: readTime || 5
      }
    });

    console.log('API: Blog post created successfully:', post);
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error('API: Error creating blog post:', error);
    return NextResponse.json(
      { error: `Failed to create blog post: ${error.message}` },
      { status: 500 }
    );
  }
} 