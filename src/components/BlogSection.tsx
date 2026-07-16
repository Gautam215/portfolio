'use client'

import { SectionHeading } from './SectionHeading'
import { BlogCard } from './BlogCard'
import { blogPosts } from '@/data/blog'

export function BlogSection() {
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <section id="blog" className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Latest Blog Posts"
          subtitle="Thoughts, tutorials, and insights on web development"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {recentPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
