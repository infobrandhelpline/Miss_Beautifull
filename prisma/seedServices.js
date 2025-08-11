const { PrismaClient } = require('@prisma/client');
const { servicesData } = require('../src/lib/servicesData.js');

const prisma = new PrismaClient();

async function seedServices() {
  try {
    console.log('🌱 Starting services seeding...');
    
    // Get existing services to avoid duplicates
    const existingServices = await prisma.service.findMany();
    console.log(`📊 Found ${existingServices.length} existing services`);
    
    // Create services that don't already exist
    let createdCount = 0;
    for (const serviceData of servicesData) {
      const existing = existingServices.find(s => 
        s.name === serviceData.name && s.category === serviceData.category
      );
      
      if (!existing) {
        await prisma.service.create({
          data: {
            ...serviceData,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        });
        createdCount++;
      }
    }
    
    console.log(`✅ Successfully created ${createdCount} new services`);
    
    // Get total services count
    const totalServices = await prisma.service.count();
    console.log(`📊 Total services in database: ${totalServices}`);
    
    // Log categories summary
    const allServices = await prisma.service.findMany();
    const categories = [...new Set(allServices.map(s => s.category))];
    console.log('📊 Services by category:');
    categories.forEach(category => {
      const count = allServices.filter(s => s.category === category).length;
      console.log(`  ${category}: ${count} services`);
    });
    
  } catch (error) {
    console.error('❌ Error seeding services:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seed function
seedServices(); 