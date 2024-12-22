'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export function TryFreeForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Submitted email:', email)
  }

  return (
    <section className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Join Our Skull Society Newsletter
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Be the first to know about new skull designs, exclusive offers, and join a community that celebrates unique fashion choices. Get 10% off your first order when you sign up!
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12"
            />
            <Button 
              type="submit"
              className="h-12 bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800"
            >
              Join Now
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            By clicking Sign Up you&apos;re confirming that you agree with our{' '}
            <Link href="/terms" className="underline hover:text-foreground">
              Terms and Conditions
            </Link>
            .
          </p>
        </form>
      </div>
    </section>
  )
}
