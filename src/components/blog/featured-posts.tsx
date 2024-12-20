import Image from 'next/image'
import Link from 'next/link'

const featuredPosts = [
  {
    title: 'The Future of Wearable Tech',
    excerpt: 'Explore the latest trends and innovations in wearable technology, from smartwatches to AR glasses.',
    author: 'Jane Doe',
    date: 'May 20, 2023',
    image: '/placeholder.svg?height=400&width=600',
    category: 'Technology',
    readTime: '5 min read',
  },
  {
    title: 'Fitness Tracking: Beyond Step Counting',
    excerpt: 'Discover how advanced fitness trackers are revolutionizing personal health monitoring and workout optimization.',
    author: 'John Smith',
    date: 'May 18, 2023',
    image: '/placeholder.svg?height=400&width=600',
    category: 'Health & Fitness',
    readTime: '4 min read',
  },
]

export function FeaturedPosts() {
  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-blue-600">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <Link href="#" className="hover:underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt={post.author}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium">{post.author}</p>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Read more
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

