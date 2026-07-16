import Link from 'next/link'
import { ArrowLeft, Github, Calendar, CheckCircle2 } from 'lucide-react'
import { projects, getProjectBySlug } from '@/data/projects'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="mb-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-slate-100">
              {project.title}
            </h1>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                View Source
              </a>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
            <Calendar className="w-4 h-4" />
            {new Date(project.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
            })}
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            {project.longDescription}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-display font-semibold mb-4 text-slate-900 dark:text-slate-100">
            Key Features
          </h2>
          <div className="space-y-3">
            {project.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600 dark:text-slate-400">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
