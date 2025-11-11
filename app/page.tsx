'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { Header } from '@/components/layout/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
