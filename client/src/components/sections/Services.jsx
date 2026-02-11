import { Code, Cloud, Zap, Layers, Shield, Server } from 'lucide-react'
import Section from '../ui/Section'
import ServiceCard from '../ui/ServiceCard'

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'End-to-end web application development using modern JavaScript frameworks and technologies.',
      skills: [
        'React & Next.js Frontend',
        'Node.js & Express Backend',
        'MongoDB & PostgreSQL',
        'RESTful & GraphQL APIs',
      ],
      color: 'primary',
    },
    {
      icon: Cloud,
      title: 'SaaS Architecture',
      description: 'Design and build scalable Software-as-a-Service platforms that grow with your business.',
      skills: [
        'Multi-tenant Architecture',
        'Microservices Design',
        'Cloud Infrastructure',
        'Scalable Systems',
      ],
      color: 'secondary',
    },
    {
      icon: Zap,
      title: 'API & Integrations',
      description: 'Seamless third-party integrations and custom API development for enhanced functionality.',
      skills: [
        'REST API Development',
        'Third-party Integrations',
        'QuickBooks & DocuSign',
        'Webhook Implementation',
      ],
      color: 'primary',
    },
    {
      icon: Server,
      title: 'Performance Optimization',
      description: 'Optimize applications for speed, efficiency, and exceptional user experience.',
      skills: [
        'Query Optimization',
        'Database Tuning',
        'Code Optimization',
        'Caching Strategies',
      ],
      color: 'secondary',
    },
    {
      icon: Layers,
      title: 'Enterprise Systems',
      description: 'Build robust enterprise-grade applications with advanced features and security.',
      skills: [
        'Admin Impersonation',
        'Audit Logging',
        'Role-Based Access Control',
        'Automated Workflows',
      ],
      color: 'primary',
    },
    {
      icon: Shield,
      title: 'Secure Authentication Systems',
      description: 'Implement secure authentication and authorization systems for your applications.',
      skills: [
        'JWT Authentication',
        'Keycloak Integration',
        'OAuth & SSO',
        'Security Best Practices',
      ],
      color: 'secondary',
    },
  ]

  return (
    <Section
      id="services"
      title="Services"
      subtitle="What I Offer"
      staggerDelay={0.1}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
            index={index}
          />
        ))}
      </div>
    </Section>
  )
}

export default Services
