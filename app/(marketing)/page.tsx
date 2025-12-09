'use client';


import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/HeroCTASection';
import  { AudienceSection } from '@/components/sections/WhoItIsForSection';
import WhyChooseSection from '@/components/sections/WhyChooseUsSection';
import SolutionCTA from '@/components/sections/SolutionSection';
import { ProblemSection } from '@/components/sections/ProblemSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      <HeroSection />
      <ProblemSection />
      <SolutionCTA />
      <AudienceSection />
      <WhyChooseSection />
      <CTASection />
    </main>
  );
}
