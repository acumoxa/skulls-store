import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { ProductGrid } from '@/components/product-grid'
import { FeatureSection } from '@/components/feature-section'
import { BenefitsSection } from '@/components/benefits-section'
import { CTAHero } from '@/components/cta-hero'
import { TryFreeForm } from '@/components/try-free-form'
import { FeaturedProductSection } from '@/components/featured-product-section'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ProductGrid />
        <FeatureSection />
        <BenefitsSection />
        <CTAHero />
        <TryFreeForm />
        <FeaturedProductSection />
      </main>
      <SiteFooter />
    </div>
  )
}

