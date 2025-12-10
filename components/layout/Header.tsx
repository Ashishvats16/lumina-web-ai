"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import lumaLogo from "../../public/assets/icons/luminaLogo.jpg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Product", href: "/product" },
    { label: "Solutions", href: "/solutions" },
    { label: "About & Contact", href: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent backdrop-blur-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 -ml-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo */}
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

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 font-inter font-normal leading-[100%] tracking-normal">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-inter font-semibold text-xl leading-9 tracking-normal align-middle transition-colors ${
                    pathname === item.href ? "text-black" : "text-[#00000080]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

          
            </nav>

<div className="flex gap-4 lg:gap-6 items-center">

    <Link
                href="/signin"
                className="font-inter font-semibold text-md lg:text-xl sm:text-sm leading-9 align-middle"
              >
                Sign in
              </Link>
            {/* Sign Up Button */}
            <Link
              href="/signin"
              className="px-4 py-2 text-gray-700 font-medium bg-blue-600 text-white text-sm rounded-full px-5 py-2 sm:px-6 sm:py-2.5 shadow-md hover:shadow-lg transition-all duration-200"
            >
              Sign up
            </Link>
</div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Background */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-14 left-0 right-0 bottom-0 bg-white z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col px-4 py-6 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/signin"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-left px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
          >
            Sign in
          </Link>
        </nav>
      </div>
    </>
  );
}
