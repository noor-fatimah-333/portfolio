import { motion } from 'framer-motion'
import { CheckCircle2, Code2, Zap, Layers, Users } from 'lucide-react'
import Section from '../ui/Section'
import GlassCard from '../ui/GlassCard'
import AnimatedCounter from '../ui/AnimatedCounter'
import useParallaxDepth from '../../hooks/useParallaxDepth'
import personalInfo from '../../config/personalInfo'

const About = () => {
  const parallaxImage = useParallaxDepth(0.4, 1)

  const highlights = personalInfo.highlights

  const achievements = [
    {
      icon: Code2,
      title: 'Clean Architecture Focus',
      description: 'Writing maintainable and scalable code following SOLID principles',
      color: 'text-primary',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed and exceptional user experience',
      color: 'text-secondary',
    },
    {
      icon: Layers,
      title: 'Scalable Systems Design',
      description: 'Building systems that grow with your business needs',
      color: 'text-primary',
    },
    {
      icon: Users,
      title: 'UX Driven Development',
      description: 'Creating intuitive interfaces that users love',
      color: 'text-secondary',
    },
  ]

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <Section id="about" title="About Me" subtitle="Get to Know Me">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
        {/* Left Side - Photo */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative glass-card p-2 group">
            {/* Professional Photo */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
              <img
                src={personalInfo.photo.url}
                alt={personalInfo.photo.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to initials if image fails to load
                  e.target.style.display = 'none'
                  const fallback = e.target.parentElement.querySelector('.photo-fallback')
                  if (fallback) fallback.style.display = 'flex'
                }}
              />
              <div className="photo-fallback absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">{personalInfo.initials}</span>
                  </div>
                  <p className="text-text-secondary text-sm">{personalInfo.name}</p>
                </div>
              </div>
            </div>
            
            {/* Soft Glow Effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
            />
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              {personalInfo.title}
            </h3>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              {personalInfo.bio.long}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-text-secondary">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Achievement Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <GlassCard className="h-full">
                <Icon className={`w-10 h-10 mb-4 ${achievement.color}`} />
                <h4 className="text-xl font-semibold text-text-primary mb-2">
                  {achievement.title}
                </h4>
                <p className="text-text-secondary text-sm">
                  {achievement.description}
                </p>
              </GlassCard>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}

export default About
