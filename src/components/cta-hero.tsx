import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CTAHero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Smartwatch with colorful display"
          width={1920}
          height={1080}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Overlay for better text readability */}
      </div>

      {/* Content */}
      <div className="container relative flex h-full items-center justify-center text-center">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Find Your Perfect Piece
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            From morning coffee in your skeleton-adorned mug to wrapping yourself in the comfort of our skull-patterned blankets, we're here for every moment of your day. Browse our collections and find the pieces that speak to your soul.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary/20 text-white hover:bg-primary/30"
          >
            <Link href="/shop">
              SHOP NOW
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
