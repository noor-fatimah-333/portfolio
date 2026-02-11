import { useState, useEffect } from 'react'

const useScrollSpy = (sectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i])
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionIds[i])
            return
          }
        }
      }

      // If at top, set first section
      if (window.scrollY < 100) {
        setActiveSection(sectionIds[0] || '')
      }
    }

    // Throttle scroll events
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds, offset])

  return activeSection
}

export default useScrollSpy
