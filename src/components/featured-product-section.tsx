import { Button } from '@/components/ui/button'
import { PlaceholderImage } from '@/components/ui/placeholder-image'

export function FeaturedProductSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Featured Collection
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Explore our latest skull designs, handcrafted with precision and passion.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">View Collection</Button>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
          </div>
          <div className="mx-auto flex items-center justify-center">
            <PlaceholderImage width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  )
}
