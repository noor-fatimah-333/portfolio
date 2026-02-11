import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const Section = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '',
  containerClassName = '',
  titleClassName = '',
  staggerDelay = 0.1 
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  return (
    <section id={id} className={`py-20 lg:py-32 ${className}`} ref={ref}>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            {subtitle && (
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gradient font-display ${titleClassName}`}>
                {title}
              </h2>
            )}
          </motion.div>
        )}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

export default Section
