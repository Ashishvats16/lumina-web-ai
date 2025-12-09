import { OurStorySection } from "@/components/about/our-story-section"
import { OurMissionSection } from "@/components/about/our-mission-section"
import { OurValuesSection } from "@/components/about/our-values-section"
import { ContactSection } from "@/components/about/contact-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <OurStorySection />
      <OurMissionSection />
      <OurValuesSection />
      <ContactSection />
    </main>
  )
}
