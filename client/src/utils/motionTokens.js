// Global Motion Token System
export const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const springConfigs = {
  gentle: { type: 'spring', stiffness: 120, damping: 20, mass: 1 },
  smooth: { type: 'spring', stiffness: 200, damping: 25, mass: 1 },
  bouncy: { type: 'spring', stiffness: 300, damping: 20, mass: 0.8 },
  snappy: { type: 'spring', stiffness: 400, damping: 30, mass: 0.7 },
  magnetic: { type: 'spring', stiffness: 150, damping: 15, mass: 1 },
}

export const easingPresets = {
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  anticipate: [0.36, 0, 0.66, -0.56],
  backIn: [0.36, 0, 0.66, -0.56],
  backOut: [0.34, 1.56, 0.64, 1],
  cinematic: [0.25, 0.46, 0.45, 0.94],
  smooth: [0.43, 0.13, 0.23, 0.96],
}

export const durationScale = {
  instant: prefersReducedMotion ? 0 : 0.1,
  fast: prefersReducedMotion ? 0 : 0.2,
  normal: prefersReducedMotion ? 0 : 0.3,
  slow: prefersReducedMotion ? 0 : 0.5,
  slower: prefersReducedMotion ? 0 : 0.8,
  slowest: prefersReducedMotion ? 0 : 1.2,
}

export const staggerSystem = {
  tight: 0.05,
  normal: 0.1,
  relaxed: 0.15,
  loose: 0.2,
}

export const getStaggerConfig = (delay = staggerSystem.normal) => ({
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : delay,
        delayChildren: prefersReducedMotion ? 0 : delay * 0.5,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: durationScale.normal,
        ease: easingPresets.easeOut,
      },
    },
  },
})

export const reducedMotionFallback = {
  transition: prefersReducedMotion
    ? { duration: 0 }
    : { duration: durationScale.normal, ease: easingPresets.easeOut },
}
