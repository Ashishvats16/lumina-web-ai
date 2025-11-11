'use client';

import { Linkedin, Instagram, Twitter, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="bg-[#F0EBE7] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 sm:mb-6">
              LuminaCore AI
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs">
              LuminaCore is an AI-powered platform that turns hours of video into ready-to-publish clips, summaries, and searchable insights.
            </p>
          </div>

          <div>
            <h3 className="text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-6">
              ABOUT
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              <li>
                <a href="#" className="text-gray-700 hover:text-black text-sm sm:text-base transition-colors">
                  Campaign Engine
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black text-sm sm:text-base transition-colors">
                  Video Insights
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black text-sm sm:text-base transition-colors">
                  Summarization
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black text-sm sm:text-base transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black text-sm sm:text-base transition-colors">
                  Demo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-6">
              SERVICES
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              <li>
                <a href="#" className="text-gray-700 hover:text-black text-sm sm:text-base transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black text-sm sm:text-base transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black text-sm sm:text-base transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black text-sm sm:text-base transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black text-sm sm:text-base transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-6">
              EXPLORE
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              <li>
                <a href="#" className="text-gray-700 hover:text-black text-sm sm:text-base transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black text-sm sm:text-base transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black text-sm sm:text-base transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black text-sm sm:text-base transition-colors">
                  Awards
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-6">
              LET'S CONNECTS
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              <li>
                <a href="#" className="text-gray-700 hover:text-black text-sm sm:text-base transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 sm:pt-10 lg:pt-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8 mb-8 sm:mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <span className="text-xs sm:text-sm text-gray-600">contact@luminacore.ai</span>
              <form onSubmit={handleSubscribe} className="flex items-center">
                <div className="flex items-center border border-gray-400 rounded-full px-4 py-2.5 sm:px-5 sm:py-3 bg-white hover:border-gray-500 transition-colors">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="text-xs sm:text-sm bg-transparent placeholder-gray-400 text-gray-700 focus:outline-none w-40 sm:w-48"
                  />
                  <button
                    type="submit"
                    className="ml-2 text-blue-500 hover:text-blue-600 transition-colors flex-shrink-0"
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
            <p className="text-xs sm:text-sm text-gray-500">
              © 2025 LuminaCore AI. All rights reserved.
              <span className="ml-4 space-x-4 inline-flex">
                <a href="#" className="hover:text-gray-700 transition-colors">
                  PRIVACY
                </a>
                <a href="#" className="hover:text-gray-700 transition-colors">
                  LEGALS
                </a>
              </span>
            </p>

            <div className="flex items-center gap-4 sm:gap-5">
              <span className="text-xs sm:text-sm text-gray-500">FOLLOW US</span>
              <div className="flex items-center gap-3 sm:gap-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
