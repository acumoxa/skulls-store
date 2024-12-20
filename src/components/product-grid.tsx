import { ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductCard } from './product-card'
import Link from 'next/link'

const products = [
  {
    name: 'Luxe 2 series',
    price: 23000,
    image: '/placeholder.svg?height=500&width=500',
    colors: ['#FF69B4', '#1E1E1E']
  },
  {
    name: 'Luxe 2 series',
    price: 23000,
    image: '/placeholder.svg?height=500&width=500',
    colors: []
  },
  {
    name: 'Luxe 2 series',
    price: 23000,
    image: '/placeholder.svg?height=500&width=500',
    colors: ['#00BCD4', '#1E1E1E']
  },
  {
    name: 'Luxe 2 series',
    price: 23000,
    image: '/placeholder.svg?height=500&width=500',
    colors: ['#FF69B4', '#1E1E1E']
  },
  {
    name: 'Luxe 2 series',
    price: 23000,
    image: '/placeholder.svg?height=500&width=500',
    colors: []
  },
  {
    name: 'Luxe 2 series',
    price: 23000,
    image: '/placeholder.svg?height=500&width=500',
    colors: []
  }
]

export function ProductGrid() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/">Home</Link>
        <span>-</span>
        <Link href="/men">Men</Link>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Watches</h1>
          <p className="mt-1 text-sm text-muted-foreground">09 products</p>
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

