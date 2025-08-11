import React from 'react';

export default function PaperCutHero() {
  return (
    <section className="relative w-full min-h-[480px] flex flex-col md:flex-row items-center justify-between overflow-hidden bg-gradient-to-br from-pink-100 to-white py-12 md:py-0">
      {/* SVG Paper Cut Illustration */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative z-10">
        <svg
          viewBox="0 0 600 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[340px] h-[340px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px]"
        >
          {/* Hair Layers */}
          <path d="M100 300 Q200 100 500 180 Q600 300 400 400 Q200 500 100 300 Z" fill="url(#hair1)" filter="url(#shadow1)" />
          <path d="M120 320 Q220 120 480 200 Q580 320 380 420 Q180 520 120 320 Z" fill="url(#hair2)" filter="url(#shadow2)" />
          <path d="M140 340 Q240 140 460 220 Q560 340 360 440 Q160 540 140 340 Z" fill="url(#hair3)" filter="url(#shadow3)" />
          {/* Face */}
          <ellipse cx="320" cy="260" rx="90" ry="120" fill="#fff" filter="url(#shadow4)" />
          {/* Eye */}
          <path d="M320 270 Q335 275 350 270" stroke="#c44569" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="340" cy="275" rx="7" ry="2" fill="#c44569" />
          {/* Lips */}
          <path d="M330 320 Q340 330 350 320" stroke="#e17055" strokeWidth="3" strokeLinecap="round" />
          {/* Cheek blush */}
          <ellipse cx="370" cy="310" rx="14" ry="7" fill="#f8a5c2" opacity="0.5" />
          {/* Flowers */}
          <circle cx="180" cy="180" r="18" fill="#f8a5c2" filter="url(#shadow5)" />
          <circle cx="170" cy="210" r="8" fill="#f78fb3" />
          <circle cx="210" cy="160" r="7" fill="#f78fb3" />
          <circle cx="200" cy="200" r="5" fill="#f8a5c2" />
          {/* Leaves */}
          <ellipse cx="160" cy="230" rx="6" ry="2" fill="#c44569" />
          <ellipse cx="220" cy="150" rx="5" ry="2" fill="#c44569" />
          {/* Gradients */}
          <defs>
            <linearGradient id="hair1" x1="100" y1="300" x2="500" y2="180" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f8a5c2" />
              <stop offset="1" stopColor="#c44569" />
            </linearGradient>
            <linearGradient id="hair2" x1="120" y1="320" x2="480" y2="200" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f78fb3" />
              <stop offset="1" stopColor="#e17055" />
            </linearGradient>
            <linearGradient id="hair3" x1="140" y1="340" x2="460" y2="220" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f3a683" />
              <stop offset="1" stopColor="#b33771" />
            </linearGradient>
            {/* Shadows */}
            <filter id="shadow1" x="0" y="0" width="600" height="600">
              <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#c44569" floodOpacity="0.12" />
            </filter>
            <filter id="shadow2" x="0" y="0" width="600" height="600">
              <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#e17055" floodOpacity="0.10" />
            </filter>
            <filter id="shadow3" x="0" y="0" width="600" height="600">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#b33771" floodOpacity="0.10" />
            </filter>
            <filter id="shadow4" x="0" y="0" width="600" height="600">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#c44569" floodOpacity="0.08" />
            </filter>
            <filter id="shadow5" x="0" y="0" width="600" height="600">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#f78fb3" floodOpacity="0.12" />
            </filter>
          </defs>
        </svg>
      </div>
      {/* Hero Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-6 md:px-12 py-8 md:py-0 z-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-700 mb-4 drop-shadow-lg">
          Salon & Beauty Academy
        </h1>
        <p className="text-lg md:text-xl text-pink-600 mb-6 max-w-md">
          Discover your beauty, master your art. Join our academy for professional training in hair, makeup, and more!
        </p>
        <div className="flex gap-4">
          <a href="/academy" className="btn-paper-cut text-lg">Explore Courses</a>
          <a href="/booking" className="btn-paper-cut bg-pink-600 hover:bg-pink-700 text-white text-lg">Book Appointment</a>
        </div>
      </div>
    </section>
  );
} 