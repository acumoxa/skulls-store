import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BlogGrid } from '@/components/blog/blog-grid'
import { FeaturedPosts } from '@/components/blog/featured-posts'
import { FAQSection } from '@/components/blog/faq-section'

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12">
          <div className="mx-auto max-w-[800px] text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Blog Posts
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper lorem. Nullam sodales lorem libero.
            </p>
          </div>
          <BlogGrid />
        </section>
        <FeaturedPosts />
        <FAQSection />
      </main>
      <SiteFooter />
    </div>
  )
}

