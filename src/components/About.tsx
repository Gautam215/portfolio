'use client'

import { motion } from 'framer-motion'
import { Code2, GraduationCap, MapPin } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { personalData } from '@/data/personal'

const highlights = [
  {
    icon: Code2,
    label: 'Full Stack Developer',
    value: 'MERN Stack',
  },
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'B.Tech CSE',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personalData.location,
  },
]

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="A brief introduction about who I am and what I do"
        />

        <div className="grid md:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 space-y-4"
          >
            {personalData.about.map((paragraph, i) => (
              <p
                key={i}
                className="text-slate-600 dark:text-slate-400 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-4"
          >
            {highlights.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
                >
                  <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>
                    <p className="font-medium text-slate-900 dark:text-slate-100">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
