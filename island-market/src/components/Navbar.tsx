'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Main Nav Container */}
      <nav className={`relative z-50 transition-all duration-500 bg-white/90 ${
        isScrolled ? 'h-32' : 'h-48'
      }`}>
        <div className=" h-full">
          {/* Mobile Menu Button - Large Nav */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden absolute top-4 right-4 text-black hover:text-gray-600 transition-colors duration-200"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Large Logo Container */}
          <div className={`flex flex-col items-center justify-center transition-all duration-300 h-full ${
            isScrolled ? 'opacity-0' : 'opacity-100'
          }`}>
            <Link href="/" className="block">
              <Image
                src="/images/logo.jpg"
                alt="Island Market Logo"
                width={160}
                height={160}
                className="rounded-full shadow-lg w-32 h-32 md:w-40 md:h-40 border border-black"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className={`hidden md:flex w-full bg-white py-1 justify-center space-x-8 transition-all duration-300 ${
            isScrolled ? 'opacity-0 -translate-y-20' : 'opacity-100'
          }`}>
            <Link href="/" className="text-black hover:text-gray-600 transition-colors duration-200">
              Home
            </Link>
            <Link href="/products" className="text-black hover:text-gray-600 transition-colors duration-200">
              Products
            </Link>
            <Link href="/community" className="text-black hover:text-gray-600 transition-colors duration-200">
              Community
            </Link>
            <Link href="/about" className="text-black hover:text-gray-600 transition-colors duration-200">
              About
            </Link>
            <Link href="/contact" className="text-black hover:text-gray-600 transition-colors duration-200">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Fixed Mini Navbar */}
      <div className={`fixed top-6 left-0 right-0 z-50 bg-white backdrop-blur-sm shadow-md transition-all duration-300 ${
        isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}>
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Small Logo */}
          <Link href="/" className="absolute top-1/2 -translate-y-1/2 left-4">
            <Image
              src="/images/logo.jpg"
              alt="Island Market Logo"
              width={60}
              height={60}
              className="rounded-full border border-black"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex w-full justify-center space-x-8">
            <Link href="/" className="text-black hover:text-gray-600 transition-colors duration-200">
              Home
            </Link>
            <Link href="/products" className="text-black hover:text-gray-600 transition-colors duration-200">
              Products
            </Link>
            <Link href="/community" className="text-black hover:text-gray-600 transition-colors duration-200">
              Community
            </Link>
            <Link href="/about" className="text-black hover:text-gray-600 transition-colors duration-200">
              About
            </Link>
            <Link href="/contact" className="text-black hover:text-gray-600 transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-black hover:text-gray-600 transition-colors duration-200"
            aria-label="Open menu"
          >
            <svg
              className="w-0 h-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </>
  );
} 