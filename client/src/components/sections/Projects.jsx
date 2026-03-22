import Section from '../ui/Section'
import ProjectCard from '../ui/ProjectCard'
import FeaturedProject from '../ui/FeaturedProject'

const bvcProject = {
  logo: '/projects/bvc-logo.svg',
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
    '/projects/bvc-dashboard.png',
    '/projects/bvc-assessments.png',
    '/projects/bvc-values-management.png',
    '/projects/bvc-filter-responses.png',
    '/projects/bvc-demographics-setup.png',
    '/projects/bvc-responses.png',
    '/projects/bvc-leaders-profile-report.png',
  ],
}

const Projects = () => {
  const projects = [
    {
      title: 'GameHub',
      description: 'A comprehensive gaming platform featuring game discovery, reviews, and user interactions. Built with modern web technologies for optimal performance and user experience.',
      image: '/projects/gamehub-screenshots.jpg', // Placeholder - replace with actual screenshots
      technologies: [
        'React',
        'Node.js',
        'MongoDB',
        'Express',
        'REST API',
      ],
      githubUrl: 'https://github.com/noor-fatimah-333', // Update with actual GitHub URL
      liveUrl: null, // Update if deployed
      featured: true,
    },
    {
      title: 'ConnectXpert',
      description: 'A networking and connection platform designed to help professionals connect and collaborate. Features include user profiles, messaging, and event management.',
      image: '/projects/connectxpert-poster.jpg', // Placeholder - replace with actual poster
      technologies: [
        'React',
        'Node.js',
        'MongoDB',
        'Express',
        'JWT',
      ],
      githubUrl: 'https://github.com/noor-fatimah-333', // Update with actual GitHub URL
      liveUrl: null, // Update if deployed
      featured: true,
    },
  ]

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Featured Work"
      className="bg-surface-dark/20"
      staggerDelay={0.1}
    >
      {/* Featured: Barrett Values Centre */}
      <FeaturedProject {...bvcProject} />

      {/* Other Projects */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </Section>
  )
}

export default Projects
