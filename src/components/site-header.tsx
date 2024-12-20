'use client'

import Link from 'next/link'
import { Bell, Heart, ShoppingBag, ChevronDown, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ThemeToggle } from '@/components/theme-toggle'

export function SiteHeader() {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="w-full bg-gradient-to-r from-pink-200 to-purple-200 py-2">
        <div className="container flex justify-end gap-4 text-sm">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/partner" className="hover:underline">
            Partner
          </Link>
          <Link href="/promo" className="hover:underline">
            Promo
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-2xl font-bold">
              hoop!
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  Men's <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Clothing</DropdownMenuItem>
                <DropdownMenuItem>Shoes</DropdownMenuItem>
                <DropdownMenuItem>Accessories</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex w-full max-w-sm items-center px-4">
            <div className="relative w-full">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full pl-8"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button asChild variant="ghost">
                <Link href="/sign-in">Sign in</Link>
              </Button>
              <Button className="bg-primary/10 text-primary hover:bg-primary/20" asChild>
                <Link href="/register">Register</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="border-b">
        <div className="container flex h-12 items-center justify-between">
          <nav className="flex gap-6">
            <Link href="/products/holographic-neon-jacket" className="text-sm hover:text-purple-600">
              Holographic Neon Jacket
            </Link>
            <Link href="/products/casual-streetwear" className="text-sm hover:text-purple-600">
              Casual Streetwear
            </Link>
            <Link href="/products/80s-outfit" className="text-sm hover:text-purple-600">
              80's Outfit
            </Link>
          </nav>
          <div className="flex items-center gap-2 text-sm">
            <span>Ship to</span>
            <Button variant="ghost" className="h-auto p-0 text-sm font-normal">
              Address <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
