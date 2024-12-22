import { ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductCard } from './product-card'
import Link from 'next/link'

const products = [
  {
    name: 'Gothic Comfort Sweatshirt',
    price: 4999,
    image: '/placeholder.svg?height=500&width=500',
    colors: ['#1E1E1E', '#4A4A4A']
  },
  {
    name: 'Skull Pattern Blanket',
    price: 7999,
    image: '/placeholder.svg?height=500&width=500',
    colors: ['#1E1E1E', '#800000']
  },
  {
    name: 'Skeleton Art Mug',
    price: 2499,
    image: '/placeholder.svg?height=500&width=500',
    colors: ['#1E1E1E', '#FFFFFF']
  },
  {
    name: 'Skull Society Sweater',
    price: 5999,
    image: '/placeholder.svg?height=500&width=500',
    colors: ['#1E1E1E', '#2B2B2B']
  },
  {
    name: 'Macabre Morning Mug',
    price: 2499,
    image: '/placeholder.svg?height=500&width=500',
    colors: ['#1E1E1E', '#8B0000']
  },
  {
    name: 'Gothic Throw Blanket',
    price: 6999,
    image: '/placeholder.svg?height=500&width=500',
    colors: ['#1E1E1E', '#363636']
  }
]

export function ProductGrid() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/">Home</Link>
        <span>-</span>
        <Link href="/products">Products</Link>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Products</h1>
          <p className="mt-1 text-sm text-muted-foreground">06 products</p>
        </div>
        <Button variant="outline" className="gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </Button>
      </div>

      <div className="relative mt-6">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        
        <Button
          variant="outline"
          size="icon"
          className="absolute -left-12 top-1/2 hidden -translate-y-1/2 lg:flex"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="absolute -right-12 top-1/2 hidden -translate-y-1/2 lg:flex"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
