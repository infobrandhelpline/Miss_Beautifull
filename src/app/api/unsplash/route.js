import { NextResponse } from 'next/server';
import { getServiceImage, getServiceImages, getRandomBeautyImages } from '@/lib/unsplash';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const serviceName = searchParams.get('service');
    const category = searchParams.get('category');
    const type = searchParams.get('type') || 'single';
    const count = parseInt(searchParams.get('count')) || 1;

    let result;

    switch (type) {
      case 'single':
        if (!serviceName) {
          return NextResponse.json({ error: 'Service name is required' }, { status: 400 });
        }
        result = await getServiceImage(serviceName, category);
        break;

      case 'multiple':
        if (!serviceName) {
          return NextResponse.json({ error: 'Service name is required' }, { status: 400 });
        }
        result = await getServiceImages(serviceName, category, count);
        break;

      case 'random':
        result = await getRandomBeautyImages(count);
        break;

      default:
        return NextResponse.json({ error: 'Invalid type parameter' }, { status: 400 });
    }

    if (!result || (Array.isArray(result) && result.length === 0)) {
      return NextResponse.json({ 
        error: 'No images found',
        fallback: '/service-list/Hair Services/Hair Cut.png'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: result,
      service: serviceName,
      category: category
    });

  } catch (error) {
    console.error('Unsplash API error:', error);
    return NextResponse.json({ 
      error: 'Failed to fetch images',
      message: error.message,
      fallback: '/service-list/Hair Services/Hair Cut.png'
    }, { status: 500 });
  }
} 