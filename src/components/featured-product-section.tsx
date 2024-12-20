import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function FeaturedProductSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Featured Product"
              width={600}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold">Medium length hero headline goes here</h2>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              SHOP NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

