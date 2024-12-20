import Image from 'next/image'
import Link from 'next/link'

const locations = [
  {
    city: "Sydney",
    address: "123 Sample St, Sydney NSW 2000 AU",
    mapLink: "#"
  },
  {
    city: "New York",
    address: "123 Sample St, New York NY 10000 USA",
    mapLink: "#"
  },
  {
    city: "London",
    address: "123 Sample St, London W1C 1DE, United Kingdom",
    mapLink: "#"
  }
]

export function LocationsSection() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4">Our locations</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            {locations.map((location, index) => (
              <div key={index} className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-semibold mb-2">{location.city}</h3>
                <p className="text-muted-foreground mb-2">{location.address}</p>
                <Link href={location.mapLink} className="text-primary hover:text-primary/80">
                  View Map
                </Link>
              </div>
            ))}
          </div>
          <div className="relative h-[400px] md:h-auto">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Locations map"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
