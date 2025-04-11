'use client';

import { useEffect, useState } from 'react';

export default function ParallaxBackground() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/images/background.jpeg")',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          transform: `translateY(${scrollPosition * 0.05}px)`,
          transition: 'transform 0.1s ease-out',
          opacity: 0.5,
        }}
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>
      </div>
    </div>
  );
} 