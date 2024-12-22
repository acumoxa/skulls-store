import { BlogCard } from './blog-card'
import { getAllPosts } from '@/lib/mdx'

export function BlogGrid() {
  const posts = getAllPosts()

  return (
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          category="BLOG"
          title={post.title}
          date={post.date}
          author={post.author}
          image={post.image}
          href={`/blog/${post.slug}`}
        />
      ))}
    </div>
  )
}
