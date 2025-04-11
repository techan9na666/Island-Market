'use client';

import { useState, useEffect } from 'react';

export default function NavbarInfo() {
  const [isOpen, setIsOpen] = useState(true);
  const [closingTime, setClosingTime] = useState('');

  useEffect(() => {
    const updateStoreStatus = () => {
      const now = new Date();
      const hour = now.getHours();
      const day = now.getDay();

      // Store hours:
      // Mon-Thu: 7:00 AM - 10:00 PM
      // Fri-Sat: 7:00 AM - 11:00 PM
      // Sun: 8:00 AM - 10:00 PM
      let closingHour = 22; // 10 PM default
      if (day === 0) { // Sunday
        setIsOpen(hour >= 8 && hour < 22);
        closingHour = 22;
      } else if (day === 5 || day === 6) { // Friday or Saturday
        setIsOpen(hour >= 7 && hour < 23);
        closingHour = 23;
      } else { // Monday through Thursday
        setIsOpen(hour >= 7 && hour < 22);
        closingHour = 22;
      }

      // Format closing time
      const closingTimeStr = new Date();
      closingTimeStr.setHours(closingHour, 0, 0, 0);
      setClosingTime(closingTimeStr.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }));
    };

    updateStoreStatus();
    const interval = setInterval(updateStoreStatus, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white/90 backdrop-blur-sm fixed z-[100] border-b border-black">
      <div className="container mx-auto">
        <div className="flex justify-center items-center space-x-6 text-xs py-1">
          <div className="flex items-center space-x-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className={isOpen ? 'text-green-600' : 'text-red-600'}>
              {isOpen ? 'Open Now' : 'Closed'}
            </span>
          </div>
          {isOpen && (
            <div className="flex items-center space-x-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Closes at {closingTime}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 