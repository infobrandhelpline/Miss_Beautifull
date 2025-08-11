'use client';

import { useEffect } from 'react';

export default function Template({ children }) {
  useEffect(() => {
    // This will run on every route change
    console.log('Route changed');
  });

  return (
    <div>
      {children}
    </div>
  );
} 