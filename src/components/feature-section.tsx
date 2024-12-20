import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function FeatureSection() {
  return (
    <section className="container py-16 md:py-24">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <div className="relative aspect-square md:aspect-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/20 to-primary/30 rounded-3xl" />
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Smartwatch with colorful floral display"
            width={600}
            height={600}
            className="relative z-10 object-contain p-6"
            priority
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Feature one
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Describe benefit of feature one
            </h2>
            <p className="text-lg text-muted-foreground">
              Highlight Unique Selling Proposition (USP) with a short summary of the key feature and how it benefits customers.
            </p>
          </div>
          <div className="mt-4">
            <Button
              asChild
              className="bg-primary/10 text-primary hover:bg-primary/20"
            >
              <Link href="/learn-more">
                Learn more
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
