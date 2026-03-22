import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart3, Users, Globe, CheckCircle2, Monitor, X } from 'lucide-react'
import GlassCard from './GlassCard'

const FeaturedProject = ({
  logo,
  title,
  tagline,
  description,
  role,
  metrics,
  achievements,
  technologies,
  screenshots = [],
}) => {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const metricIcons = {
    users: Users,
    globe: Globe,
    orgs: BarChart3,
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxIndex])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <GlassCard hover={false} className="overflow-hidden">
        <div className="p-6 md:p-8 lg:p-10">
          {/* Header: Logo centered above title */}
          <div className="text-center mb-8">
            {logo && (
              <div className="flex justify-center mb-4">
                <img
                  src={logo}
                  alt={`${title} logo`}
                  className="h-16 md:h-20 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity"
                />
              </div>
            )}
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-1">
              {title}
            </h3>
            {tagline && (
              <p className="text-text-secondary text-lg">{tagline}</p>
            )}
          </div>

          {/* Description */}
          <p className="text-text-secondary leading-relaxed mb-8 max-w-3xl">
            {description}
          </p>

          {/* Impact Metrics */}
          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {metrics.map((metric, index) => {
                const Icon = metricIcons[metric.icon] || BarChart3
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-surface-light/20 border border-glass-border"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-text-primary">{metric.value}</p>
                      <p className="text-xs text-text-muted">{metric.label}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          )}

          {/* Role & Achievements - Two columns on larger screens */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {role && (
              <div>
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                  My Role
                </h4>
                <p className="text-text-secondary">{role}</p>
              </div>
            )}
            {achievements && achievements.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                  Key Contributions
                </h4>
                <ul className="space-y-2">
                  {achievements.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-text-secondary"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Screenshot Gallery */}
          {screenshots.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Monitor className="w-5 h-5 text-primary" />
                <h4 className="text-lg font-semibold text-text-primary">
                  Platform in action
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {screenshots.map((shot, index) =>
                  typeof shot === 'string' ? (
                    <motion.button
                      key={index}
                      type="button"
                      onClick={() => setLightboxIndex(index)}
                      className="relative aspect-video rounded-lg overflow-hidden bg-surface-light/20 border border-glass-border cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-primary/50"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <img
                        src={shot}
                        alt={`${title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ) : (
                    <div
                      key={index}
                      className="relative aspect-video rounded-lg overflow-hidden bg-surface-light/20 border border-glass-border"
                    >
                      <div className="w-full h-full flex items-center justify-center text-text-muted text-sm border border-dashed border-glass-border rounded-lg">
                        {shot?.placeholder || `Screenshot ${index + 1}`}
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Fullscreen Lightbox - rendered via portal to avoid parent overflow clipping */}
              {createPortal(
                <AnimatePresence>
                  {lightboxIndex !== null && typeof screenshots[lightboxIndex] === 'string' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setLightboxIndex(null)}
                      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/98 p-6 cursor-zoom-out"
                    >
                      <button
                        onClick={() => setLightboxIndex(null)}
                        className="absolute top-6 right-6 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors z-10"
                        aria-label="Close"
                      >
                        <X className="w-8 h-8 text-white" />
                      </button>
                      <motion.img
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        src={screenshots[lightboxIndex]}
                        alt={`${title} screenshot ${lightboxIndex + 1}`}
                        onClick={(e) => e.stopPropagation()}
                        className="max-w-[min(95vw,1400px)] max-h-[85vh] w-auto h-auto object-contain shadow-2xl cursor-default"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>,
                document.body
              )}
            </div>
          )}

          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </GlassCard>
    </motion.div>
  )
}

export default FeaturedProject
