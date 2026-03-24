import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Section from '../ui/Section'
import TimelineItem from '../ui/TimelineItem'

const Experience = () => {
  const timelineRef = useRef(null)
  const isInView = useInView(timelineRef, { once: true, margin: '-100px' })

  const experiences = [
    {
      role: 'Software Engineer',
      company: 'Code District',
      location: 'Lahore, Pakistan',
      startDate: 'June 2024',
      endDate: 'Present',
      metrics: [
        '2500+ Consultants',
        '80+ Countries',
        '6000+ Organizations',
      ],
      technologies: [
        'React',
        'Ant Design',
        'Node.js',
        'Express',
        'PostgreSQL',
        'AWS',
        'Keycloak',
      ],
      responsibilities: [
        'Core developer on Barrett Values Centre SaaS platform serving 2500+ consultants across 80+ countries and 6000+ organizations',
        'Built 20+ React.js + Ant Design components with advanced filtering system supporting 15+ criteria',
        'Optimized PostgreSQL queries using CTEs, reducing query time by 60%',
        'Developed Node.js/Express microservices with QuickBooks, DocuSign, and Keycloak integrations',
        'Implemented admin impersonation feature with comprehensive audit logs for security compliance',
        'Created automated cron jobs for data synchronization and reporting',
        'Conducted code reviews and maintained technical documentation',
      ],
    },
    {
      role: 'Software Engineer Intern',
      company: 'Techloyce',
      location: 'Lahore, Pakistan',
      startDate: 'June 2023',
      endDate: 'May 2024',
      metrics: [],
      technologies: [
        'Node.js',
        'Express',
        'JWT',
        'REST APIs',
        'QuickBooks API',
      ],
      responsibilities: [
        'Developed QuickBooks + Monday.com integration system using Node.js and Express',
        'Implemented JWT authentication with role-based access control (RBAC)',
        'Built REST API integrations with third-party services',
        'Performed performance debugging and optimization fixes',
        'Collaborated with team on feature development and bug fixes',
      ],
    },
  ]

  return (
    <Section 
      id="experience" 
      title="Experience" 
      subtitle="Professional Journey"
      className="bg-surface-dark/20"
    >
      <div className="relative max-w-5xl mx-auto">
        {/* Timeline Line */}
        <motion.div
          ref={timelineRef}
          className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform -translate-x-1/2 origin-top"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={{
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(167, 139, 250, 0.3)',
          }}
        />

        {/* Timeline Items */}
        <div className="space-y-12 lg:space-y-20">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              {...experience}
              isLeft={index % 2 === 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Experience
