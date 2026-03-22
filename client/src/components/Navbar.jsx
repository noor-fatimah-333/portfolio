import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import useScrollSpy from '../hooks/useScrollSpy'
import personalInfo from '../config/personalInfo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const { scrollY } = useScroll()

  const sectionIds = ['hero', 'about', 'tech-stack', 'experience', 'projects', 'services', 'contact']
  const activeSection = useScrollSpy(sectionIds, 150)

  // Detect scroll position
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const navItems = [
    { name: 'Home', path: '/', id: 'hero' },
    { name: 'About', path: '/#about', id: 'about' },
    { name: 'Tech Stack', path: '/#tech-stack', id: 'tech-stack' },
    { name: 'Experience', path: '/#experience', id: 'experience' },
    { name: 'Projects', path: '/#projects', id: 'projects' },
    { name: 'Services', path: '/#services', id: 'services' },
    { name: 'Contact', path: '/#contact', id: 'contact' },
  ]

  const handleSmoothScroll = (e, path) => {
    e.preventDefault()
    if (path.includes('#')) {
      const hash = path.split('#')[1]
      const element = document.getElementById(hash)
      if (element) {
        const offset = 100
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    } else {
      window.location.href = path
    }
  }

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          backdropFilter: isScrolled ? 'blur(20px)' : 'blur(10px)',
          backgroundColor: isScrolled 
            ? 'rgba(15, 23, 42, 0.8)' 
            : 'rgba(255, 255, 255, 0.05)',
        }}
        transition={{ duration: 0.5 }}
        className={`glass-nav w-full max-w-5xl pointer-events-auto transition-all duration-300 ${
          isScrolled ? 'shadow-2xl shadow-primary/10' : ''
        }`}
      >
      <div className="flex items-center justify-between px-6 py-3">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            to="/" 
            className="text-xl font-bold text-gradient font-display"
          >
            {personalInfo.name}
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
          {navItems.map((item, index) => {
            const isActive = location.pathname === '/' && activeSection === item.id
            return (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.path}
                  onClick={(e) => handleSmoothScroll(e, item.path)}
                  className={`relative text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1 ${
                    isActive
                      ? 'text-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </a>
              </motion.div>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-glass-border mt-3 pt-3 overflow-hidden"
            aria-label="Mobile navigation"
          >
            {navItems.map((item, index) => {
              const isActive = location.pathname === '/' && activeSection === item.id
              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.path}
                    onClick={(e) => {
                      handleSmoothScroll(e, item.path)
                      setIsOpen(false)
                    }}
                    className={`block px-6 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg ${
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                </motion.div>
              )
            })}
          </motion.nav>
        )}
      </AnimatePresence>
      </motion.nav>
    </div>
  )
}

export default Navbar
