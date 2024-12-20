import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  name: string
  price: number
  image: string
  colors?: string[]
  isFavorite?: boolean
}

export function ProductCard({ name, price, image, colors = [], isFavorite = false }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">
            <Link href="#">
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">${price.toLocaleString()}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0 rounded-full bg-white p-2 shadow-md"
        >
          <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
        </Button>
      </div>
      {colors.length > 0 && (
        <div className="mt-2 flex gap-1">
          {colors.map((color) => (
            <div
              key={color}
              className="h-4 w-4 rounded-full border border-gray-200"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

