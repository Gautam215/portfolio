export interface Experience {
  title: string
  organization: string
  location: string
  period: string
  description: string[]
  type: 'education' | 'work'
}

export const experiences: Experience[] = [
  {
    title: 'Bachelor of Technology in Computer Science',
    organization: 'Galgotias University',
    location: 'Greater Noida, Uttar Pradesh',
    period: '2022 - 2026',
    description: [
      'Pursuing B.Tech with a GPA of 78%',
      'Building strong foundations in computer science, data structures, algorithms, and software engineering',
      'Actively working on full-stack projects and honing development skills',
    ],
    type: 'education',
  },
  {
    title: 'Senior Secondary (PCM)',
    organization: 'Shri Chaitanya Techno School',
    location: 'Visakhapatnam, Andhra Pradesh',
    period: '2020 - 2022',
    description: [
      'Completed Senior Secondary education with a focus on Physics, Chemistry, and Mathematics',
    ],
    type: 'education',
  },
  {
    title: 'Postman API Fundamentals',
    organization: 'Postman',
    location: 'Online',
    period: '2025-02',
    description: [
      'Certified in API fundamentals and Postman workflows',
    ],
    type: 'work',
  },
  {
    title: 'Oracle Database Programming with SQL',
    organization: 'Oracle',
    location: 'Online',
    period: '2024-01',
    description: [
      'Certified in Oracle SQL programming and database management',
    ],
    type: 'work',
  },
  {
    title: 'Oracle Java Fundamentals',
    organization: 'Oracle',
    location: 'Online',
    period: '2024-12',
    description: [
      'Certified in Java programming fundamentals and object-oriented concepts',
    ],
    type: 'work',
  },
]
