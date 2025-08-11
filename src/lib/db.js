import { PrismaClient } from '@prisma/client';

let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    // Force the database URL to be set
    const databaseUrl = process.env.DATABASE_URL || "file:./dev.db";
    console.log('Database connection - Using URL:', databaseUrl);
    
    try {
      global.prisma = new PrismaClient({
        datasources: {
          db: {
            url: databaseUrl
          }
        }
      });
      console.log('Database connection - Prisma client initialized successfully');
    } catch (error) {
      console.error('Database connection - Failed to initialize Prisma client:', error);
      // Fallback to a basic client
      global.prisma = new PrismaClient();
    }
  }
  prisma = global.prisma;
}

export default prisma; 