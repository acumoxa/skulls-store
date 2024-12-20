import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { PlaceholderImage } from '@/components/ui/placeholder-image'

export function HeroSection() {
  return (
    <section className="container grid min-h-[80vh] items-center gap-8 pb-8 pt-6 md:grid-cols-2 md:py-10">
      <div className="flex flex-col justify-center gap-4">
        <h1 className="font-heading text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Your Source for Stylish Smartwatches
        </h1>
        <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
          we believe that time should be both smart and stylish. Our mission is to bring you the latest innovations in wearable technology, combining cutting-edge features with fashion-forward design
        </p>
        <div className="flex gap-4">
          <Button
            asChild
            className="bg-gradient-to-r from-primary/20 to-primary/30 text-primary hover:from-primary/30 hover:to-primary/40"
            size="lg"
          >
            <Link href="/shop">
              SHOP NOW
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <PlaceholderImage width={600} height={600} />
      </div>
    </section>
  )
}
