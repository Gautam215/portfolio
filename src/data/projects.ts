export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  techStack: string[]
  image?: string
  githubUrl?: string
  liveUrl?: string
  features: string[]
  date: string
}

export const projects: Project[] = [
  {
    slug: 'job-portal',
    title: 'Job Portal',
    description:
      'A full-stack MERN job portal enabling users to post jobs, browse listings, and apply for roles.',
    longDescription:
      'Developed a comprehensive job portal application using the MERN stack. The platform supports three user roles — job seekers, recruiters, and admins — with full CRUD operations for job listings, applications, and user management.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'JWT', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Gautam215/job-portal',
    features: [
      'Role-based access control (job seekers, recruiters, admin)',
      'JWT-based authentication and authorization',
      'Job posting, browsing, and application management',
      'RESTful API with Express and Mongoose schemas',
      'Global state management with Redux Toolkit',
      'Responsive React UI with form validation and error handling',
    ],
    date: '2025-10',
  },
  {
    slug: 'edusity-college-website',
    title: 'Edusity - Modern College Website',
    description:
      'A fully responsive college website interface built with React featuring dynamic UI sections.',
    longDescription:
      'Engineered a modern, responsive college website interface using React, JSX, and modular CSS. The site features dynamic sections including hero modules, course grids, testimonial sliders, and interactive media components.',
    techStack: ['React', 'JSX', 'Modular CSS', 'Vercel'],
    githubUrl: 'https://github.com/Gautam215/edusity',
    features: [
      'Responsive design optimized for all devices',
      'Dynamic hero modules and course grids',
      'Testimonial sliders with smooth transitions',
      'Video modal controls and scroll-based interactions',
      'State management with React hooks (useState, useRef, useEffect)',
      'Deployed on Vercel for high performance',
    ],
    date: '2024-07',
  },
  {
    slug: 'gemini-clone',
    title: 'Gemini 2.0 Clone',
    description:
      'A fully functional clone of Google\'s Gemini 2.0 AI interface built with React.',
    longDescription:
      'Developed a fully functional clone of Google\'s Gemini 2.0 AI interface using React and modular CSS. The application features a clean chat interface with dynamic message handling and responsive design.',
    techStack: ['React', 'Modular CSS', 'Gemini API'],
    githubUrl: 'https://github.com/Gautam215/gemini-clone',
    features: [
      'Chat interface with dynamic message flow',
      'Reusable components for chat bubbles and input fields',
      'Responsive layout for desktop and mobile',
      'Clean code architecture with component reusability',
    ],
    date: '2023-03',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
