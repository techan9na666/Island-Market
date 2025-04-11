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
          backgroundSize: '120% auto',
          transform: `translateY(${scrollPosition * 0.05}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {/* White to Transparent Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
      </div>
    </div>
  );
} 