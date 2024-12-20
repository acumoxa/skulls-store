import Image from 'next/image'

export function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Colorful smartwatch display"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center">
          <h2 className="max-w-4xl text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Describe what makes your company unique
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
        </div>
      </div>
    </section>
  )
}
