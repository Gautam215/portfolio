import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import { blogPosts } from '@/data/blog'
import { formatDate } from '@/lib/utils'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const lines = post.content.split('\n')
  const elements: React.ReactNode[] = []
  let inCodeBlock = false
  let codeLines: string[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (line.startsWith('```')) {
      if (inCodeBlock) {
        elements.push(
          <pre key={i} className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto my-4 text-sm">
            <code className="text-slate-800 dark:text-slate-200">{codeLines.join('\n')}</code>
          </pre>
        )
        codeLines = []
        inCodeBlock = false
      } else {
        inCodeBlock = true
      }
      continue
    }

    if (inCodeBlock) {
      codeLines.push(line)
      continue
    }

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl font-display font-semibold mt-8 mb-4 text-slate-900 dark:text-slate-100">
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-xl font-display font-semibold mt-6 mb-3 text-slate-900 dark:text-slate-100">
          {line.slice(4)}
        </h3>
      )
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={i} className="text-slate-600 dark:text-slate-400 ml-4">{line.slice(2)}</li>
      )
    } else if (line.trim() === '') {
      elements.push(<div key={i} className="h-4" />)
    } else {
      elements.push(
        <p key={i} className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{line}</p>
      )
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-slate-900 dark:text-slate-100">
              {post.title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {post.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-sm rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="max-w-none">{elements}</div>
        </article>
      </div>
    </div>
  )
}
