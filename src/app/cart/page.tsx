'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { FAQSection } from '@/components/blog/faq-section'
import { LocationsSection } from '@/components/about/locations-section'

interface Product {
  id: string
  name: string
  image: string
  price: number
  details: {
    height: string
    color: string
    composition: string
  }
}

const products: Product[] = [
  {
    id: 'RF293-1',
    name: 'North wolf bag',
    image: '/placeholder.svg?height=200&width=200',
    price: 9000,
    details: {
      height: '10 inches',
      color: 'Black',
      composition: '100% calf leather'
    }
  },
  {
    id: 'RF293-2',
    name: 'LW sneakers',
    image: '/placeholder.svg?height=200&width=200',
    price: 9000,
    details: {
      height: '10 inches',
      color: 'Black',
      composition: '100% calf leather'
    }
  },
  {
    id: 'RF293-3',
    name: 'Luxe card holder',
    image: '/placeholder.svg?height=200&width=200',
    price: 9000,
    details: {
      height: '10 inches',
      color: 'Black',
      composition: '100% calf leather'
    }
  }
]

export default function CartPage() {
  const subtotal = products.reduce((sum, product) => sum + product.price, 0)
  const shipping = 30
  const tax = 39
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="mb-8">
          <Link href="/products" className="flex items-center text-sm text-muted-foreground hover:text-primary">
            <ChevronLeft className="h-4 w-4" />
            Back
          </Link>
          <h1 className="mt-2 text-3xl font-bold">Shopping Cart</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {products.map((product) => (
              <div key={product.id} className="mb-6 grid gap-6 border-b pb-6 last:border-0 sm:grid-cols-[200px,1fr]">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-pink-400 to-purple-600">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{product.id}</p>
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                      </div>
                      <Select defaultValue="01">
                        <SelectTrigger className="w-[80px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[...Array(10)].map((_, i) => (
                            <SelectItem key={i + 1} value={String(i + 1).padStart(2, '0')}>
                              {String(i + 1).padStart(2, '0')}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="mt-2 space-y-1 text-sm">
                      <p>Height: {product.details.height}</p>
                      <p>Color: {product.details.color}</p>
                      <p>Composition: {product.details.composition}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="space-x-4">
                      <button className="text-sm hover:underline">Add to favorites</button>
                      <button className="text-sm text-red-500 hover:underline">Remove</button>
                    </div>
                    <p className="text-lg font-semibold">${product.price.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-8 lg:h-fit">
            <div className="rounded-lg border p-6">
              <h2 className="text-xl font-semibold">Summary</h2>
              <div className="mt-4 space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${total.toLocaleString()}</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pink-400 to-purple-600 hover:from-pink-500 hover:to-purple-700">
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
        <FAQSection />
        <LocationsSection />
      </div>
    </div>
  )
}
