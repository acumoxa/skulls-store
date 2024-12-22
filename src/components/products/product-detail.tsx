'use client'

import { Star } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// This is a template component showing the structure and styling for product details
export function ProductDetail() {
  const colorOptions = [
    { id: 'orange', color: 'bg-orange-500 dark:bg-orange-600' },
    { id: 'lime', color: 'bg-lime-400 dark:bg-lime-500' },
    { id: 'cyan', color: 'bg-cyan-400 dark:bg-cyan-500' },
    { id: 'purple', color: 'bg-purple-600 dark:bg-purple-700' }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-muted">
            <Image
              src="/placeholder.svg"
              alt="Product main image"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex gap-4 overflow-auto pb-2">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="relative aspect-square w-32 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-muted"
              >
                <Image
                  src="/placeholder.svg"
                  alt={`Product view ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="text-sm text-muted-foreground">SKU: DEMO-123</div>
            <h1 className="text-3xl font-bold text-foreground">Product Name</h1>
          </div>

          <div className="text-2xl font-bold text-foreground">$199.99</div>

          <div className="flex items-center gap-4">
            <div className="flex">
              {[1, 2, 3, 4].map((i) => (
                <Star 
                  key={i} 
                  className={cn(
                    "h-5 w-5",
                    "text-yellow-400 dark:text-yellow-500",
                    "fill-current"
                  )} 
                />
              ))}
              <Star 
                className={cn(
                  "h-5 w-5",
                  "text-yellow-400 dark:text-yellow-500",
                  "fill-none stroke-current"
                )} 
              />
            </div>
            <span className="text-sm text-foreground">4.5/5</span>
            <button className="text-sm text-muted-foreground hover:text-foreground hover:underline">
              See all 18 reviews
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-lg font-medium text-foreground">Color</label>
              <div className="mt-2 flex gap-2">
                {colorOptions.map((option) => (
                  <button
                    key={option.id}
                    className={cn(
                      "h-8 w-8 rounded-lg ring-offset-background",
                      "hover:ring-2 hover:ring-primary hover:ring-offset-2",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                      option.color
                    )}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="text-lg font-medium text-foreground">Size</label>
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-lg border border-border bg-card text-card-foreground hover:border-primary/50 hover:bg-accent">
                  <div className="p-4">
                    <div className="font-medium">Small</div>
                    <div className="text-sm text-muted-foreground">120 by 18 inches</div>
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-card text-card-foreground hover:border-primary/50 hover:bg-accent">
                  <div className="p-4">
                    <div className="font-medium">Medium</div>
                    <div className="text-sm text-muted-foreground">150 by 18 inches</div>
                  </div>
                </div>
              </div>
              <button className="mt-2 text-sm text-muted-foreground hover:text-foreground hover:underline">
                Size Guide
              </button>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Add to Bag
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-border hover:bg-accent"
            >
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
