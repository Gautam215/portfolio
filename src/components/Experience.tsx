'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { experiences } from '@/data/experience'

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-32 bg-slate-50/50 dark:bg-dark-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience & Education"
          subtitle="My academic journey and professional certifications"
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const Icon = exp.type === 'education' ? GraduationCap : Award

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-4 top-1">
                    <div className="p-2 rounded-full bg-white dark:bg-dark-800 border-2 border-slate-200 dark:border-slate-700">
                      <Icon className="w-4 h-4 text-primary-500" />
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-slate-100">
                        {exp.title}
                      </h3>
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                      {exp.organization} &middot; {exp.location}
                    </p>
                    <ul className="space-y-1">
                      {exp.description.map((desc, j) => (
                        <li
                          key={j}
                          className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
                        >
                          <span className="mt-1.5 block w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
