'use client';

import { FeaturesSection } from '@/components/sections/FeaturesSection';
import PricingTiers from '@/components/sections/PricingSection';
import Footer from '@/components/sections/FooterSection';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/HeroCTASection';
import { Header } from '@/components/layout/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PricingTiers />
      <CTASection />
      <Footer />
    </main>
  );
}
