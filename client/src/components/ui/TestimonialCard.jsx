import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import GlassCard from './GlassCard'

const TestimonialCard = ({ name, role, company, testimonial, rating = 5, avatar, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
      whileHover={{ rotateY: 5, rotateX: -5 }}
      style={{ perspective: 1000 }}
    >
      <GlassCard
        className="relative h-full overflow-hidden"
        hover={false}
      >
        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        />

        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? 'fill-primary text-primary'
                  : 'fill-surface-light text-surface-light'
              }`}
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-text-secondary text-sm leading-relaxed mb-6 italic">
          "{testimonial}"
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-3 pt-4 border-t border-glass-border">
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-lg">
              {avatar || name.charAt(0).toUpperCase()}
            </span>
          </div>

          {/* Name & Role */}
          <div className="flex-1 min-w-0">
            <h4 className="text-text-primary font-semibold text-sm truncate">{name}</h4>
            <p className="text-text-secondary text-xs truncate">{role}</p>
            <p className="text-primary text-xs font-medium truncate">{company}</p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}

export default TestimonialCard
