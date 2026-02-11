import { motion } from 'framer-motion'
import { Download, FolderKanban, Code, Rocket, Sparkles } from 'lucide-react'
import Typewriter from '../ui/Typewriter'
import GlassCard from '../ui/GlassCard'
import CodeTerminal from '../visual/CodeTerminal'
import ScrollIndicator from '../ui/ScrollIndicator'

const Hero = () => {
  const roles = [
    'MERN Stack Developer',
    'React Specialist',
    'Node.js Engineer',
    'AWS Certified Developer',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const floatingCardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  }

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-gradient font-display">
                Full Stack JavaScript
              </span>
              <br />
              <span className="text-text-primary">Developer</span>
            </motion.h1>

            {/* Typewriter Roles */}
            <motion.div
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold text-text-secondary h-10"
            >
              <Typewriter words={roles} speed={100} deleteSpeed={50} delay={2000} />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed"
            >
              Building modern, scalable web applications with cutting-edge technologies.
              Passionate about clean code, performance optimization, and creating
              exceptional user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-button flex items-center gap-2 bg-primary/20 hover:bg-primary/30 border-primary/30"
              >
                <FolderKanban className="w-5 h-5" />
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-button flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Floating Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative h-[600px] lg:h-[700px]"
          >
            {/* Floating Glass Cards */}
            <motion.div
              variants={floatingCardVariants}
              animate={floatingAnimation}
              className="absolute top-0 right-0 w-64"
            >
              <GlassCard hover>
                <Code className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-text-primary">Clean Code</h3>
                <p className="text-text-secondary text-sm">
                  Writing maintainable and scalable code following best practices
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              variants={floatingCardVariants}
              animate={{
                ...floatingAnimation,
                transition: {
                  ...floatingAnimation.transition,
                  delay: 1,
                },
              }}
              className="absolute top-1/3 left-0 w-64"
            >
              <GlassCard hover>
                <Rocket className="w-10 h-10 mb-4 text-secondary" />
                <h3 className="text-xl font-semibold mb-2 text-text-primary">Performance</h3>
                <p className="text-text-secondary text-sm">
                  Optimized applications for speed and exceptional user experience
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              variants={floatingCardVariants}
              animate={{
                ...floatingAnimation,
                transition: {
                  ...floatingAnimation.transition,
                  delay: 2,
                },
              }}
              className="absolute bottom-0 right-1/4 w-64"
            >
              <GlassCard hover>
                <Sparkles className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-text-primary">Innovation</h3>
                <p className="text-text-secondary text-sm">
                  Exploring new technologies and creative solutions
                </p>
              </GlassCard>
            </motion.div>

            {/* Code Terminal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-20 left-0 w-full max-w-md"
            >
              <CodeTerminal />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator targetId="about" />
    </section>
  )
}

export default Hero
