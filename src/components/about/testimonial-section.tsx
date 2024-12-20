import Image from 'next/image'
import { Star } from 'lucide-react'

export function TestimonialSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current text-primary" />
            ))}
          </div>
          
          <blockquote className="mb-10">
            <p className="text-2xl font-medium mb-8">
              "A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers."
            </p>
            
            <footer className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Profile picture"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="text-left">
                  <div className="font-medium">Name Surname</div>
                  <div className="text-sm text-muted-foreground">Position, Company name</div>
                </div>
              </div>
              <div className="w-px h-8 bg-border mx-4" />
              <Image
                src="/placeholder.svg?height=24&width=100"
                alt="Webflow logo"
                width={100}
                height={24}
                className="h-6 w-auto"
              />
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
