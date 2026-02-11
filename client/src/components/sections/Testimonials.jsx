import Section from '../ui/Section'
import TestimonialCard from '../ui/TestimonialCard'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Global Product Manager',
      company: 'Barrett Values Centre',
      testimonial: 'Exceptional developer who delivered high-quality features on time. The advanced filtering system and performance optimizations significantly improved our platform\'s user experience.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Engineering Lead',
      company: 'Code District',
      testimonial: 'Outstanding technical skills and attention to detail. The PostgreSQL optimizations reduced query times by 60%, and the microservices architecture scales beautifully.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Enterprise Client',
      company: 'Tech Solutions Inc.',
      testimonial: 'Professional, reliable, and technically excellent. The QuickBooks and DocuSign integrations were implemented flawlessly, and the security features exceed our expectations.',
      rating: 5,
    },
  ]

  return (
    <Section
      id="testimonials"
      title="Testimonials"
      subtitle="What Clients Say"
      className="bg-surface-dark/20"
      staggerDelay={0.15}
    >
      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
            index={index}
          />
        ))}
      </div>

      {/* Mobile Horizontal Scroll */}
      <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
        <div className="flex gap-4" style={{ width: 'max-content' }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-[85vw] flex-shrink-0">
              <TestimonialCard
                {...testimonial}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Testimonials
