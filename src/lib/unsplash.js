import { createApi } from 'unsplash-js';

// Initialize Unsplash API
const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY || 'IrtgPbWxucC2bDfRs8cjyfU2mktTaBR0LzMOhUmz70M',
});

// Service to image search mapping
const serviceImageQueries = {
  // Hair Services
  'Hair Cut': 'hair cut salon',
  'Hair Cut & Styling': 'hair styling salon',
  'Hair Wash & Blow Dry': 'hair wash blow dry',
  'Hair Spa Treatment': 'hair spa treatment',
  'Hair Color (Global)': 'hair coloring salon',
  'Hair Color (Highlights)': 'hair highlights',
  'Hair Color (Balayage)': 'hair balayage',
  'Hair Smoothening': 'hair smoothing treatment',
  'Hair Rebonding': 'hair rebonding',
  'Hair Botox / Keratin Treatment': 'hair botox treatment',
  'Hair Fall & Dandruff Treatment': 'hair treatment',
  'Bridal Hairstyling': 'bridal hairstyle',
  'Hair Extensions': 'hair extensions',
  
  // Skincare Services
  'Fruit Facial': 'facial treatment',
  'Gold Facial': 'gold facial treatment',
  'Diamond Facial': 'diamond facial',
  'Hydra Facial': 'hydra facial',
  'Skin Polishing': 'skin polishing',
  'Anti-Aging Treatment': 'anti aging facial',
  'Acne Treatment': 'acne treatment',
  'Pigmentation Treatment': 'skin treatment',
  'Skin Brightening': 'skin brightening',
  'Deep Cleansing': 'facial cleansing',
  'Moisturizing Treatment': 'moisturizing facial',
  'Skin Rejuvenation': 'skin rejuvenation',
  'Collagen Treatment': 'collagen facial',
  'Vitamin C Treatment': 'vitamin c facial',
  'Aloe Vera Treatment': 'aloe vera facial',
  'Charcoal Facial': 'charcoal facial',
  'Oxygen Facial': 'oxygen facial',
  'Chemical Peel': 'chemical peel',
  
  // Makeup Services
  'Party Makeup': 'party makeup',
  'Bridal Makeup': 'bridal makeup',
  'Engagement Makeup': 'engagement makeup',
  'Reception Makeup': 'reception makeup',
  'Natural Makeup': 'natural makeup',
  'Glamour Makeup': 'glamour makeup',
  'Airbrush Makeup': 'airbrush makeup',
  'HD Makeup': 'hd makeup',
  'Matte Makeup': 'matte makeup',
  'Shimmer Makeup': 'shimmer makeup',
  'Eye Makeup': 'eye makeup',
  'Lip Makeup': 'lip makeup',
  'Contouring': 'makeup contouring',
  'Highlighting': 'makeup highlighting',
  'Blush Application': 'blush makeup',
  'Eyebrow Shaping': 'eyebrow shaping',
  'Eyelash Extensions': 'eyelash extensions',
  'Makeup Removal': 'makeup removal',
  
  // Nails Services
  'Manicure': 'manicure',
  'Pedicure': 'pedicure',
  'Nail Art': 'nail art',
  'Gel Nail Polish': 'gel nail polish',
  'Acrylic Nails': 'acrylic nails',
  'Nail Extensions': 'nail extensions',
  'Nail Repair': 'nail repair',
  'Nail Strengthening': 'nail strengthening',
  'Nail Whitening': 'nail whitening',
  'French Manicure': 'french manicure',
  'Nail Stamping': 'nail stamping',
  '3D Nail Art': '3d nail art',
  'Nail Foil': 'nail foil',
  'Nail Stickers': 'nail stickers',
  'Nail Rhinestones': 'nail rhinestones',
  'Nail Glitter': 'nail glitter',
  'Nail Ombre': 'nail ombre',
  'Nail Marble Effect': 'nail marble',
  
  // Body & Spa Services
  'Full Body Massage': 'full body massage',
  'Head Massage': 'head massage',
  'Foot Massage': 'foot massage',
  'Back Massage': 'back massage',
  'Neck Massage': 'neck massage',
  'Shoulder Massage': 'shoulder massage',
  'Leg Massage': 'leg massage',
  'Arm Massage': 'arm massage',
  'Hand Massage': 'hand massage',
  'Face Massage': 'face massage',
  'Body Scrub': 'body scrub',
  'Body Wrap': 'body wrap',
  'Hot Stone Massage': 'hot stone massage',
  'Aromatherapy': 'aromatherapy',
  'Reflexology': 'reflexology',
  'Swedish Massage': 'swedish massage',
  'Deep Tissue Massage': 'deep tissue massage',
  'Thai Massage': 'thai massage',
  
  // Threading & Waxing Services
  'Eyebrow Threading': 'eyebrow threading',
  'Upper Lip Threading': 'upper lip threading',
  'Chin Threading': 'chin threading',
  'Sideburns Threading': 'sideburns threading',
  'Full Face Threading': 'full face threading',
  'Arm Waxing': 'arm waxing',
  'Leg Waxing': 'leg waxing',
  'Bikini Waxing': 'bikini waxing',
  'Brazilian Waxing': 'brazilian waxing',
  'Full Body Waxing': 'full body waxing',
  'Chest Waxing': 'chest waxing',
  'Back Waxing': 'back waxing',
  'Stomach Waxing': 'stomach waxing',
  'Underarm Waxing': 'underarm waxing',
  'Full Arms Waxing': 'full arms waxing',
  'Full Legs Waxing': 'full legs waxing',
  'Half Arms Waxing': 'half arms waxing',
  'Half Legs Waxing': 'half legs waxing',
  
  // Bridal Packages
  'Bridal Package': 'bridal package',
  'Engagement Package': 'engagement package',
  'Reception Package': 'reception package',
  'Pre-Bridal Package': 'pre bridal package',
  'Post-Bridal Package': 'post bridal package',
  'Bridal Makeup & Hair': 'bridal makeup hair',
  'Bridal Facial': 'bridal facial',
  'Bridal Manicure': 'bridal manicure',
  'Bridal Pedicure': 'bridal pedicure',
  'Bridal Waxing': 'bridal waxing',
  'Bridal Threading': 'bridal threading',
  'Bridal Massage': 'bridal massage',
  'Bridal Spa': 'bridal spa',
  'Bridal Treatment': 'bridal treatment',
  'Bridal Glow': 'bridal glow',
  'Bridal Cleanup': 'bridal cleanup',
  'Bridal Bleach': 'bridal bleach',
  'Bridal Cleanup & Bleach': 'bridal cleanup bleach',
  
  // Academy Services
  'Beauty Course': 'beauty course',
  'Makeup Course': 'makeup course',
  'Hair Course': 'hair course',
  'Nail Course': 'nail course',
  'Skincare Course': 'skincare course',
  'Spa Course': 'spa course',
  'Beauty Therapy': 'beauty therapy',
  'Cosmetology': 'cosmetology',
  'Beauty Training': 'beauty training',
  'Makeup Training': 'makeup training',
  'Hair Training': 'hair training',
  'Nail Training': 'nail training',
  'Skincare Training': 'skincare training',
  'Spa Training': 'spa training',
  'Beauty Certification': 'beauty certification',
  'Makeup Certification': 'makeup certification',
  'Hair Certification': 'hair certification',
  'Nail Certification': 'nail certification'
};

// Function to get image for a service
export async function getServiceImage(serviceName, category) {
  try {
    // Get search query for the service
    const searchQuery = serviceImageQueries[serviceName] || `${serviceName} salon`;
    
    // Search for images
    const result = await unsplash.search.getPhotos({
      query: searchQuery,
      page: 1,
      perPage: 1,
      orientation: 'landscape'
    });
    
    if (result.response && result.response.results.length > 0) {
      const photo = result.response.results[0];
      return {
        url: photo.urls.regular,
        alt: photo.alt_description || serviceName,
        photographer: photo.user.name,
        unsplashUrl: photo.links.html
      };
    }
    
    // Fallback to category-based search
    const categoryQuery = `${category} salon beauty`;
    const categoryResult = await unsplash.search.getPhotos({
      query: categoryQuery,
      page: 1,
      perPage: 1,
      orientation: 'landscape'
    });
    
    if (categoryResult.response && categoryResult.response.results.length > 0) {
      const photo = categoryResult.response.results[0];
      return {
        url: photo.urls.regular,
        alt: photo.alt_description || `${category} service`,
        photographer: photo.user.name,
        unsplashUrl: photo.links.html
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching Unsplash image:', error);
    return null;
  }
}

// Function to get multiple images for a service
export async function getServiceImages(serviceName, category, count = 3) {
  try {
    const searchQuery = serviceImageQueries[serviceName] || `${serviceName} salon`;
    
    const result = await unsplash.search.getPhotos({
      query: searchQuery,
      page: 1,
      perPage: count,
      orientation: 'landscape'
    });
    
    if (result.response && result.response.results.length > 0) {
      return result.response.results.map(photo => ({
        url: photo.urls.regular,
        alt: photo.alt_description || serviceName,
        photographer: photo.user.name,
        unsplashUrl: photo.links.html
      }));
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching Unsplash images:', error);
    return [];
  }
}

// Function to get random beauty/salon related images
export async function getRandomBeautyImages(count = 5) {
  try {
    const result = await unsplash.search.getPhotos({
      query: 'beauty salon spa',
      page: 1,
      perPage: count,
      orientation: 'landscape'
    });
    
    if (result.response && result.response.results.length > 0) {
      return result.response.results.map(photo => ({
        url: photo.urls.regular,
        alt: photo.alt_description || 'Beauty salon',
        photographer: photo.user.name,
        unsplashUrl: photo.links.html
      }));
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching random beauty images:', error);
    return [];
  }
} 