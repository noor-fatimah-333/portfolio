import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/sections/Hero'
import FloatingStats from '../components/visual/FloatingStats'

// Lazy load heavy sections
const About = lazy(() => import('../components/sections/About'))
const TechStack = lazy(() => import('../components/sections/TechStack'))
const Experience = lazy(() => import('../components/sections/Experience'))
const Projects = lazy(() => import('../components/sections/Projects'))
const Services = lazy(() => import('../components/sections/Services'))
const Contact = lazy(() => import('../components/sections/Contact'))

const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
)

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Floating Stats */}
      <FloatingStats />

      {/* About Section */}
      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>

      {/* Tech Stack Section */}
      <Suspense fallback={<LoadingFallback />}>
        <TechStack />
      </Suspense>

      {/* Experience Section */}
      <Suspense fallback={<LoadingFallback />}>
        <Experience />
      </Suspense>

      {/* Projects Section */}
      <Suspense fallback={<LoadingFallback />}>
        <Projects />
      </Suspense>

      {/* Services Section */}
      <Suspense fallback={<LoadingFallback />}>
        <Services />
      </Suspense>

      {/* Contact Section */}
      <Suspense fallback={<LoadingFallback />}>
        <Contact />
      </Suspense>
    </div>
  )
}

export default Home
