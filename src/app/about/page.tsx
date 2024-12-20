import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { AboutHero } from '@/components/about/about-hero'
import { AboutFeature } from '@/components/about/about-feature'
import { TestimonialSection } from '@/components/about/testimonial-section'
import { LocationsSection } from '@/components/about/locations-section'

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <AboutHero />
        <AboutFeature />
        <TestimonialSection />
        <LocationsSection />
      </main>
      <SiteFooter />
    </div>
  )
}

