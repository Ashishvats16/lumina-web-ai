'use client';

import { SolutionsHero } from '@/components/solutions/SolutionHeroSection';
import { CreatorsSection } from '@/components/solutions/creators-section';
import { MarketingSection } from '@/components/solutions/marketing-section';
import { TrainingSection } from '@/components/solutions/training-section';
import { FutureVisionSection } from '@/components/solutions/future-vision-section';
import { SolutionsCTA } from '@/components/solutions/solutions-cta';

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      <SolutionsHero />
      <CreatorsSection />
      <MarketingSection />
      <TrainingSection />
      <FutureVisionSection />
      <SolutionsCTA />
    </main>
  );
}
