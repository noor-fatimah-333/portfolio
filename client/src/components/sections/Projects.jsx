import { useState, useEffect, useRef } from 'react'
import Section from '../ui/Section'
import ProjectCard from '../ui/ProjectCard'
import FeaturedProject from '../ui/FeaturedProject'

const allProjects = [
  {
    id: 'bvc',
    logo: '/projects/bvc/bvc-logo.svg',
    title: 'Barrett Values Centre',
    tagline: 'Organizational Culture Assessment SaaS Platform',
    description:
      'Barrett Values Centre is a global pioneer in values-based leadership and cultural transformation, trusted by 6,000+ organizations worldwide. Their platform uses the Seven Levels of Consciousness® model to assess organizational culture, individual values, and leadership development. I served as a core developer on this enterprise SaaS platform.',
    role:
      'Full Stack Developer — Built features end-to-end across the consultant dashboard, assessment tools, reporting, and integrations. Collaborated with product and QA teams in an agile environment.',
    metrics: [
      { icon: 'users', value: '2500+', label: 'Consultants' },
      { icon: 'globe', value: '80+', label: 'Countries' },
      { icon: 'orgs', value: '6000+', label: 'Organizations' },
    ],
    achievements: [
      'Developed 20+ React components with Ant Design — dashboards, data tables, advanced filtering',
      'Optimized PostgreSQL queries using CTEs and indexing for complex reporting',
      'Built Node.js/Express microservices — QuickBooks, DocuSign, Keycloak SSO integrations',
      'Implemented role-based access control and multi-tenant architecture',
      'Collaborated with stakeholders across time zones in a distributed team',
    ],
    technologies: [
      'React',
      'Ant Design',
      'Node.js',
      'Express',
      'PostgreSQL',
      'AWS',
      'Keycloak',
      'QuickBooks',
      'DocuSign',
    ],
    screenshots: [
      '/projects/bvc/bvc-feature-photo.png',
      '/projects/bvc/bvc-dashboard.png',
      '/projects/bvc/bvc-assessments.png',
      '/projects/bvc/bvc-values-management.png',
      '/projects/bvc/bvc-filter-responses.png',
      '/projects/bvc/bvc-demographics-setup.png',
      '/projects/bvc/bvc-responses.png',
      '/projects/bvc/bvc-leaders-profile-report.png',
    ],
  },
  {
    id: 'gamehub',
    title: 'GameHub',
    description:
      'A comprehensive gaming platform featuring game discovery, reviews, and user interactions. Built with modern web technologies for optimal performance and user experience. Includes genre filtering, platform filters, search, light/dark mode, and Metacritic-style ratings.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'REST API'],
    githubUrl: 'https://github.com/noor-fatimah-333/game-hub',
    liveUrl: 'https://game-pps95gnlf-noor-fatimahs-projects.vercel.app/',
    screenshots: [
      '/projects/gamehub/gamehub-light-home.png',
      '/projects/gamehub/gamehub-dark-games.png',
      '/projects/gamehub/gamehub-casual.png',
      '/projects/gamehub/gamehub-sort-filter.png',
      '/projects/gamehub/gamehub-shooter.png',
    ],
    image: '/projects/gamehub/gamehub-light-home.png',
  },
  {
    id: 'connectxpert',
    title: 'ConnectXpert',
    description:
      'Online video conferencing platform tailored for educational institutions. Ensures lecture compliance against curriculum using NLP, compiles related Q&A into unified queries with AI, and tracks student attendance and engagement.',
    image: '/projects/connectxpert/connect-xpert.png',
    technologies: ['WebRTC', 'mediasoup', 'Node.js', 'MySQL'],
    githubUrl: 'https://github.com/noor-fatimah-333/https---github.com-khaaj-Polymathic',
    liveUrl: null,
  },
]

const Projects = () => {
  const [featuredId, setFeaturedId] = useState('bvc')
  const isInitialMount = useRef(true)

  const featuredProject = allProjects.find((p) => p.id === featuredId)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }
    const el = document.getElementById('projects')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [featuredId])
  const cardProjects = allProjects.filter((p) => p.id !== featuredId)

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Featured Work"
      className="bg-surface-dark/20"
      staggerDelay={0.1}
    >
      {/* Featured project - swap when a card is clicked */}
      <FeaturedProject {...featuredProject} />

      {/* Other projects as cards - click to view as featured */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {cardProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image || project.screenshots?.[0]}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            index={index}
            onClick={() => setFeaturedId(project.id)}
          />
        ))}
      </div>
    </Section>
  )
}

export default Projects
