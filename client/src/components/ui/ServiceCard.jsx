import { motion } from 'framer-motion'
import GlassCard from './GlassCard'

const ServiceCard = ({ icon: Icon, title, description, skills, color = 'primary', index }) => {
  const colorClasses = {
    primary: {
      icon: 'text-primary',
      glow: 'from-primary/20 to-primary/5',
      border: 'border-primary/20',
    },
    secondary: {
      icon: 'text-secondary',
      glow: 'from-secondary/20 to-secondary/5',
      border: 'border-secondary/20',
    },
  }

  const colors = colorClasses[color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <GlassCard
        className="relative h-full overflow-hidden"
        hover
      >
        {/* Gradient Glow Effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${colors.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
        />

        {/* Icon */}
        <div className="mb-4">
          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${colors.glow} border ${colors.border}`}>
            <Icon className={`w-6 h-6 ${colors.icon}`} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-text-primary mb-3">{title}</h3>

        {/* Description */}
        <p className="text-text-secondary text-sm mb-4 leading-relaxed">{description}</p>

        {/* Skills */}
        <ul className="space-y-2">
          {skills.map((skill, idx) => (
            <li key={idx} className="flex items-start gap-2 text-text-secondary text-sm">
              <span className={`${colors.icon} mt-1`}>•</span>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </GlassCard>
    </motion.div>
  )
}

export default ServiceCard
