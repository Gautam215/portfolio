export interface SkillCategory {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend Development',
    skills: ['SQL', 'Node.js', 'API Development', 'Express.js', 'MongoDB', 'Postman'],
  },
  {
    title: 'Web Technologies',
    skills: ['React', 'HTML', 'CSS', 'Git', 'Tailwind CSS', 'JavaScript'],
  },
  {
    title: 'Programming Languages',
    skills: ['C', 'C++', 'Java', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Core Competencies',
    skills: [
      'Data Structures',
      'Web Security',
      'Analytical Problem Solving',
      'Project Management',
      'Team Collaboration',
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      'Determination',
      'Punctuality',
      'Agility',
      'Creativity',
      'Enthusiasm',
      'Teamwork',
    ],
  },
]
