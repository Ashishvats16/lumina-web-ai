'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { Header } from '@/components/layout/Header';
import PricingTiers from '@/components/sections/PricingSection';
import HeroCTA from '@/components/sections/HeroCTASection';
import Footer from '@/components/sections/FooterSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PricingTiers />
      <HeroCTA />
      <Footer />
    </main>
  );
}
