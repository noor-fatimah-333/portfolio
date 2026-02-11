import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Typewriter = ({ words, speed = 100, deleteSpeed = 50, delay = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    let timeout

    if (!isDeleting && currentText === currentWord) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, delay)
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    } else {
      timeout = setTimeout(() => {
        setCurrentText((prev) => {
          if (isDeleting) {
            return prev.slice(0, -1)
          } else {
            return currentWord.slice(0, prev.length + 1)
          }
        })
      }, isDeleting ? deleteSpeed : speed)
    }

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words, speed, deleteSpeed, delay])

  return (
    <span className="inline-block">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-0.5 h-6 bg-primary ml-1"
      />
    </span>
  )
}

export default Typewriter
