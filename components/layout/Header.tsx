import { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Menu, X } from 'lucide-react';
import lumaLogo from '../../public/assets/icons/luminaLogo.jpg'; // adjust path if needed
import Image from 'next/image';
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-white/95 backdrop-blur-lg shadow-sm'
            : 'bg-white/80 backdrop-blur-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            <button
              className="md:hidden p-2 -ml-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            <div className="flex items-center space-x-2">
              <Image
                src={lumaLogo}
                alt="LuminaCore AI Logo"
                width={120}
                height={40}
                className="h-8 sm:h-10 lg:h-12 w-auto object-contain hover:scale-105"
                priority
              />
                         <span className="text-lg sm:text-xl font-bold text-gray-900">
              LuminaCore AI
            </span>

            </div>

            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <button className="flex items-center text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
                Features
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <button className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
                Pricing
              </button>
              <button className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
                Contact sales
              </button>
              <button className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
                Sign in
              </button>
            </nav>

            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full px-5 py-2 sm:px-6 sm:py-2.5 shadow-md hover:shadow-lg transition-all duration-200">
              Sign up
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-14 left-0 right-0 bottom-0 bg-white z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col px-4 py-6 space-y-1">
          <button className="flex items-center justify-between w-full text-left px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
            Features
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="w-full text-left px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
            Pricing
          </button>
          <button className="w-full text-left px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
            Contact sales
          </button>
          <button className="w-full text-left px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
            Sign in
          </button>
        </nav>
      </div>
    </>
  );
}
