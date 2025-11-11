'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-blue-600" />
            <span className="text-lg sm:text-xl font-bold text-gray-900">
              LuminaCore AI
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Features
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Pricing
            </button>
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Contact sales
            </button>
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Sign in
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 shadow-lg shadow-blue-600/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/30"
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
