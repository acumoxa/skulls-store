import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
  category: 'VEHICLE' | 'WORK' | 'PRODUCTIVITY'
  title: string
  date: string
  author: string
  image: string
  href: string
}

export function BlogCard({
  category,
  title,
  date,
  author,
  image,
  href
}: BlogCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border">
      <div className="aspect-[16/9] overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-blue-600">
            {category}
          </p>
          <div className="mt-2">
            <h3 className="text-xl font-semibold leading-tight text-gray-900">
              <Link href={href}>
                <span className="absolute inset-0" />
                {title}
              </Link>
            </h3>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-muted-foreground">
            {date} by {author}
          </p>
        </div>
      </div>
    </article>
  )
}

