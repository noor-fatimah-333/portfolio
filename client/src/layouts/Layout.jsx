import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import Navbar from '../components/Navbar'
import { Moon, Sun } from 'lucide-react'

const Layout = ({ children }) => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      {/* Theme Toggle Button */}
      <motion.button
        onClick={toggleTheme}
        className="fixed bottom-8 right-8 glass-button z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </motion.button>
    </div>
  )
}

export default Layout
