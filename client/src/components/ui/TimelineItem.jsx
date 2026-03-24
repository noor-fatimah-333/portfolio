import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronDown, MapPin, Calendar, Building2 } from 'lucide-react'
import GlassCard from './GlassCard'

const TimelineItem = ({ 
  role, 
  company, 
  location, 
  startDate, 
  endDate, 
  responsibilities, 
  technologies, 
  metrics,
  isLeft = false,
  index 
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const itemVariants = {
    hidden: { opacity: 0, x: isLeft ? -50 : 50, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="relative flex items-start lg:items-center gap-4 lg:gap-0"
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 lg:left-1/2 top-6 lg:top-1/2 transform -translate-x-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 shadow-lg shadow-primary/50 flex-shrink-0" />

      {/* Content Card — text always LTR / left-aligned inside the card */}
      <div
        className={`w-full lg:w-[45%] text-left ${isLeft ? 'lg:mr-auto' : 'lg:ml-auto'} pl-8 lg:pl-0`}
      >
        <GlassCard
          className="cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
          hover
        >
          {/* Header: role/company left, dates right (same on every card) */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-text-primary mb-1">{role}</h3>
              <div className="flex items-center gap-2 text-text-secondary text-sm flex-wrap">
                <Building2 className="w-4 h-4 shrink-0" />
                <span>{company}</span>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{location}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-text-secondary text-sm shrink-0 sm:pt-0.5">
              <Calendar className="w-4 h-4 shrink-0" />
              <span>{startDate} – {endDate}</span>
            </div>
          </div>

          {/* Metrics */}
          {metrics && metrics.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {metrics.map((metric, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full border border-primary/30"
                >
                  {metric}
                </span>
              ))}
            </div>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-surface-light text-text-secondary text-xs rounded border border-glass-border"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Expandable Responsibilities */}
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {isExpanded && (
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="space-y-2 mt-4 pt-4 border-t border-glass-border text-left"
              >
                {responsibilities.map((responsibility, idx) => (
                  <li
                    key={idx}
                    className="text-text-secondary text-sm flex items-start gap-2 text-left"
                  >
                    <span className="text-primary mt-1 shrink-0" aria-hidden>
                      •
                    </span>
                    <span className="min-w-0 flex-1">{responsibility}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </motion.div>

          {/* Expand/Collapse Button */}
          <div className="flex items-center gap-2 mt-4 text-primary text-sm font-medium">
            <span>{isExpanded ? 'Show Less' : 'Show Details'}</span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </motion.div>
  )
}

export default TimelineItem
