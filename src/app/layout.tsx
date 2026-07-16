import type { Metadata } from 'next'
import { Inter, Calistoga } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const calistoga = Calistoga({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-cal',
})

export const metadata: Metadata = {
  title: {
    default: 'Abhishek Gautam | Full Stack Developer',
    template: '%s | Abhishek Gautam',
  },
  description:
    'Full Stack Developer specializing in MERN stack. Building modern web applications with React, Node.js, and MongoDB.',
  keywords: [
    'Full Stack Developer',
    'MERN Stack',
    'React',
    'Node.js',
    'TypeScript',
    'Web Development',
  ],
  authors: [{ name: 'Abhishek Gautam' }],
  openGraph: {
    title: 'Abhishek Gautam | Full Stack Developer',
    description:
      'Full Stack Developer specializing in MERN stack. Building modern web applications with React, Node.js, and MongoDB.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${calistoga.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative min-h-screen bg-grid">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
