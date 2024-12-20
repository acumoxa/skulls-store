import Image from 'next/image'

export function BenefitsSection() {
  return (
    <section className="container py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Highlight the key benefits of using your product or service
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-12">
            <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-purple-200 before:to-pink-200">
              <h3 className="text-xl font-semibold">Highlight benefit one</h3>
              <p className="mt-2 text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
            </div>

            <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-purple-200 before:to-pink-200">
              <h3 className="text-xl font-semibold">Highlight benefit two</h3>
              <p className="mt-2 text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
            </div>

            <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-purple-200 before:to-pink-200">
              <h3 className="text-xl font-semibold">Highlight benefit three</h3>
              <p className="mt-2 text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
            </div>
          </div>

          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-pink-400/20 to-purple-400/20 rounded-3xl" />
            <Image
              src="/placeholder.svg?height=800&width=800"
              alt="Colorful smartwatch with floral display"
              width={800}
              height={800}
              className="relative z-10 object-contain p-6"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
