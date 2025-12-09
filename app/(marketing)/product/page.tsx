'use client';

import { ProductHero } from '@/components/product/ProductSection';
import { EnginesSection } from '@/components/product/EngineSection';
import { HowItWorksSection } from '@/components/product/HowItWorksSection';
import { CapabilitiesSection } from '@/components/product/CapabilitiesSection';

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      <ProductHero />
      <EnginesSection />
      <HowItWorksSection />
      <CapabilitiesSection />
    </main>
  );
}
