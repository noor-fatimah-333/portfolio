import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Globe, Award, Code } from 'lucide-react'

const FloatingStats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { icon: Users, value: 2500, suffix: '+', label: 'Users', color: 'text-primary' },
    { icon: Globe, value: 80, suffix: '+', label: 'Countries', color: 'text-secondary' },
    { icon: Award, value: 3, suffix: '+', label: 'Years Experience', color: 'text-primary' },
    { icon: Code, value: 100, suffix: '+', label: 'Projects', color: 'text-secondary' },
  ]

  const Counter = ({ end, suffix, duration = 2 }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isInView) return

      let startTime = null
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }, [isInView, end, duration])

    return (
      <span>
        {count}
        {suffix}
      </span>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="glass-card text-center"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <Icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
            <div className="text-3xl font-bold text-gradient-primary mb-1">
              <Counter end={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-sm text-text-secondary">{stat.label}</div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default FloatingStats
