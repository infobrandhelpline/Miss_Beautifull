import { NextResponse } from 'next/server';

// Pinterest API configuration
const PINTEREST_ACCESS_TOKEN = process.env.PINTEREST_ACCESS_TOKEN;
const PINTEREST_API_BASE = 'https://api.pinterest.com/v5';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const service = searchParams.get('service');
    const category = searchParams.get('category');
    const type = searchParams.get('type') || 'single';
    const count = searchParams.get('count') || '1';

    if (!service && !category) {
      return NextResponse.json(
        { success: false, error: 'Service or category parameter is required' },
        { status: 400 }
      );
    }

    // Check if Pinterest API token is available
    if (!PINTEREST_ACCESS_TOKEN || PINTEREST_ACCESS_TOKEN === 'your_pinterest_access_token_here') {
      // Return Unsplash images as fallback
      const fallbackImages = {
        'Hair': 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=600&fit=crop',
        'Makeup': 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop',
        'Nails': 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop',
        'Skincare': 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop',
        'Body & Spa': 'https://images.unsplash.com/photo-1544161512-6f99a7d3b7f3?w=800&h=600&fit=crop',
        'Threading & Waxing': 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=600&fit=crop',
        'Bridal Packages': 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop',
        'Academy': 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=600&fit=crop'
      };

      const fallbackUrl = fallbackImages[category] || fallbackImages['Hair'];
      
      return NextResponse.json({
        success: true,
        data: {
          url: fallbackUrl,
          width: 800,
          height: 600,
          title: `${service || category} Service`,
          description: `Professional ${service || category} service`,
          pinterestUrl: null
        }
      });
    }

    // Search query for Pinterest
    const searchQuery = `${service || category} beauty salon professional`;
    
    // Pinterest API endpoint for searching pins
    const pinterestUrl = `${PINTEREST_API_BASE}/pins/search?query=${encodeURIComponent(searchQuery)}&bookmark=&page_size=${count}`;

    const response = await fetch(pinterestUrl, {
      headers: {
        'Authorization': `Bearer ${PINTEREST_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Pinterest API error: ${response.status}`);
    }

    const data = await response.json();

    if (type === 'single') {
      // Return single image
      if (data.items && data.items.length > 0) {
        const pin = data.items[0];
        return NextResponse.json({
          success: true,
          data: {
            url: pin.image.original.url,
            width: pin.image.original.width,
            height: pin.image.original.height,
            title: pin.title,
            description: pin.description,
            pinterestUrl: pin.link
          }
        });
      } else {
        // Fallback to default beauty images
        const fallbackImages = {
          'Hair': 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=600&fit=crop',
          'Makeup': 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop',
          'Nails': 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop',
          'Skincare': 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop',
          'Body & Spa': 'https://images.unsplash.com/photo-1544161512-6f99a7d3b7f3?w=800&h=600&fit=crop'
        };

        const fallbackUrl = fallbackImages[category] || fallbackImages['Hair'];
        
        return NextResponse.json({
          success: true,
          data: {
            url: fallbackUrl,
            width: 800,
            height: 600,
            title: `${service || category} Service`,
            description: `Professional ${service || category} service`,
            pinterestUrl: null
          }
        });
      }
    } else {
      // Return multiple images
      const images = data.items ? data.items.map(pin => ({
        url: pin.image.original.url,
        width: pin.image.original.width,
        height: pin.image.original.height,
        title: pin.title,
        description: pin.description,
        pinterestUrl: pin.link
      })) : [];

      return NextResponse.json({
        success: true,
        data: images
      });
    }

  } catch (error) {
    console.error('Pinterest API error:', error);
    
    // Return fallback images on error
    const fallbackImages = {
      'Hair': 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=600&fit=crop',
      'Makeup': 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop',
      'Nails': 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop',
      'Skincare': 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop',
      'Body & Spa': 'https://images.unsplash.com/photo-1544161512-6f99a7d3b7f3?w=800&h=600&fit=crop'
    };

    const category = new URL(request.url).searchParams.get('category') || 'Hair';
    const fallbackUrl = fallbackImages[category] || fallbackImages['Hair'];

    return NextResponse.json({
      success: true,
      data: {
        url: fallbackUrl,
        width: 800,
        height: 600,
        title: 'Beauty Service',
        description: 'Professional beauty service',
        pinterestUrl: null
      }
    });
  }
} 