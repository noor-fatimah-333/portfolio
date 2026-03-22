import Section from '../ui/Section'
import ProjectCard from '../ui/ProjectCard'

const Projects = () => {
  const projects = [
    {
      title: 'Barrett Values Centre (BVC)',
      description: 'Core developer on a SaaS platform serving 2500+ consultants across 80+ countries and 6000+ organizations. Built 20+ React.js components with advanced filtering, optimized PostgreSQL queries using CTEs, and developed Node.js/Express microservices with QuickBooks, DocuSign, and Keycloak integrations.',
      image: '/projects/bvc-screenshots.jpg', // Placeholder - replace with actual screenshots
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
      githubUrl: null, // Private repository
      liveUrl: null, // Private/Enterprise platform
      featured: true,
    },
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            index={index}
          />
        ))}
      </div>
    </Section>
  )
}

export default Projects
