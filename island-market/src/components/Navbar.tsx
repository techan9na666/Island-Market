'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-2 bg-white/95 shadow-lg' : 'py-4 bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <Link href="/" className="mb-2">
            <div className="flex items-center gap-2">
              <h1 className={`font-bold transition-all duration-300 ${
                isScrolled 
                  ? 'text-3xl text-[var(--text-dark)]' 
                  : 'text-5xl text-white drop-shadow-lg'
              }`}>
                ISLAND
              </h1>
              <div className={`relative transition-all duration-300 ${
                isScrolled ? 'w-12 h-12' : 'w-16 h-16'
              }`}>
                <Image
                  src="/images/logo.jpg"
                  alt="Island Market Logo"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
              <h1 className={`font-bold transition-all duration-300 ${
                isScrolled 
                  ? 'text-3xl text-[var(--text-dark)]' 
                  : 'text-5xl text-white drop-shadow-lg'
              }`}>
                MARKET
              </h1>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className={`flex space-x-8 transition-all duration-300 ${
            isScrolled ? 'text-[var(--text-dark)]' : 'text-white'
          }`}>
            <Link href="/" className="hover:text-[var(--primary-yellow)] transition-colors">
              Home
            </Link>
            <Link href="/products" className="hover:text-[var(--primary-yellow)] transition-colors">
              Products
            </Link>
            <Link href="/about" className="hover:text-[var(--primary-yellow)] transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-[var(--primary-yellow)] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 