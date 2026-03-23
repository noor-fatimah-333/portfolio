import { motion } from 'framer-motion'
import { CheckCircle2, Code2, Zap, Layers, Users } from 'lucide-react'
import Section from '../ui/Section'
import GlassCard from '../ui/GlassCard'
import personalInfo from '../../config/personalInfo'

const About = () => {
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
      <div className="w-full mb-16">
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
