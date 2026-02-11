import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const ScrollIndicator = ({ targetId = 'about' }) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
    }
  }

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background rounded-lg p-2"
      onClick={scrollToSection}
      aria-label="Scroll to next section"
    >
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="flex flex-col items-center gap-2 text-text-secondary hover:text-primary transition-colors"
      >
        <span className="text-xs font-medium">Scroll</span>
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </motion.button>
  )
}

export default ScrollIndicator
