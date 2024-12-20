import { BlogCard } from './blog-card'

export function BlogGrid() {
  const posts = [
    {
      category: 'VEHICLE',
      title: "One of Saturn's largest rings may be newer than anyone",
      date: 'May 13, 2019',
      author: 'Silene Cox',
      image: '/placeholder.svg?height=400&width=600',
      href: '/blog/saturn-rings'
    },
    {
      category: 'WORK',
      title: "One of Saturn's largest rings may be newer than anyone",
      date: 'May 13, 2019',
      author: 'Silene Cox',
      image: '/placeholder.svg?height=400&width=600',
      href: '/blog/work-efficiency'
    },
    {
      category: 'PRODUCTIVITY',
      title: "One of Saturn's largest rings may be newer than anyone",
      date: 'May 13, 2019',
      author: 'Silene Cox',
      image: '/placeholder.svg?height=400&width=600',
      href: '/blog/productivity-tips'
    },
    {
      category: 'VEHICLE',
      title: "One of Saturn's largest rings may be newer than anyone",
      date: 'May 13, 2019',
      author: 'Silene Cox',
      image: '/placeholder.svg?height=400&width=600',
      href: '/blog/vehicle-tech'
    },
    {
      category: 'WORK',
      title: "One of Saturn's largest rings may be newer than anyone",
      date: 'May 13, 2019',
      author: 'Silene Cox',
      image: '/placeholder.svg?height=400&width=600',
      href: '/blog/work-culture'
    },
    {
      category: 'PRODUCTIVITY',
      title: "One of Saturn's largest rings may be newer than anyone",
      date: 'May 13, 2019',
      author: 'Silene Cox',
      image: '/placeholder.svg?height=400&width=600',
      href: '/blog/productivity-apps'
    }
  ] as const

  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
    </div>
  )
}

