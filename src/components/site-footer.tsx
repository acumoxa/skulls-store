import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Facebook, ArrowRight } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif">We Dig Skulls</h2>
            <p className="text-sm text-muted-foreground">Copyright 2024 We Dig Skulls</p>
            <p className="text-sm text-muted-foreground">All rights reserved</p>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/wedigskulls/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="font-medium">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-sm text-muted-foreground hover:text-foreground">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h3 className="font-medium">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal" className="text-sm text-muted-foreground hover:text-foreground">
                  Legal policy
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-sm text-muted-foreground hover:text-foreground">
                  Status policy
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="font-medium">Get updates</h3>
            <div className="flex items-center gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-[300px]"
              />
              <Button variant="outline" size="icon">
                <ArrowRight className="h-4 w-4" />
                <span className="sr-only">Subscribe to newsletter</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
