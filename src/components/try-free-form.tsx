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
          Call to action that invites visitor to try the product for free
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
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
              className="h-12 bg-gradient-to-r from-purple-200 to-blue-200 text-purple-900 hover:from-purple-300 hover:to-blue-300"
            >
              Try it for free
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

