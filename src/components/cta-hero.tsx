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
            Medium length hero headline goes here
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-purple-200 text-purple-900 hover:bg-purple-300"
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

