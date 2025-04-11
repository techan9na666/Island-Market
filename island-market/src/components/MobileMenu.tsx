'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-50 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Slide-out Menu */}
      <div
        className={`fixed top-6 right-0 h-full w-64 bg-white/95 backdrop-blur-sm shadow-lg z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-black hover:text-gray-600 transition-colors duration-200"
            aria-label="Close menu"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Logo */}
          <div className="mb-8">
            <Link href="/" onClick={onClose}>
              <Image
                src="/images/logo.jpg"
                alt="Island Market Logo"
                width={80}
                height={80}
                className="rounded-full shadow-lg"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1">
            <ul className="space-y-6">
              <li>
                <Link
                  href="/"
                  className="block text-lg text-black hover:text-gray-600 transition-colors duration-200"
                  onClick={onClose}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="block text-lg text-black hover:text-gray-600 transition-colors duration-200"
                  onClick={onClose}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="block text-lg text-black hover:text-gray-600 transition-colors duration-200"
                  onClick={onClose}
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block text-lg text-black hover:text-gray-600 transition-colors duration-200"
                  onClick={onClose}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-lg text-black hover:text-gray-600 transition-colors duration-200"
                  onClick={onClose}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
} 