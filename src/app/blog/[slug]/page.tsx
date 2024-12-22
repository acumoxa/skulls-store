import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug } from '@/lib/mdx'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <article className="container flex-1">
        <div className="mx-auto max-w-3xl py-12">
          <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
          <div className="mb-8 text-muted-foreground">
            <span>{post.date}</span> • <span>{post.author}</span>
          </div>
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="mb-8 aspect-video w-full rounded-lg object-cover"
              width={800}
              height={400}
            />
          )}
          <div className="prose prose-lg dark:prose-invert">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </article>
      <SiteFooter />
    </div>
  )
}
