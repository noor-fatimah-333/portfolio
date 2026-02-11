import { motion } from 'framer-motion'

const GlassCard = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      className={`glass-card ${className}`}
      whileHover={hover ? { scale: 1.05, y: -5 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default GlassCard
