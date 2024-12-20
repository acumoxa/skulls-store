import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Call to action that invites visitor to try the product for free</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="w-full md:w-1/2 max-w-md">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Product showcase"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 max-w-md">
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Try it for free
              </Button>
            </form>
            <p className="mt-4 text-sm text-center text-gray-500">
              By clicking Sign Up you're confirming that you agree with our{' '}
              <Link href="/terms" className="underline hover:text-gray-700">
                Terms and Conditions
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

