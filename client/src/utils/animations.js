// Global Animation Timing System
export const animationTimings = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
}

export const animationEasings = {
  ease: [0.4, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  anticipate: [0.36, 0, 0.66, -0.56],
  backIn: [0.36, 0, 0.66, -0.56],
  backOut: [0.34, 1.56, 0.64, 1],
}

export const staggerConfig = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: animationTimings.normal,
        ease: animationEasings.easeOut,
      },
    },
  },
}

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: {
    duration: animationTimings.normal,
    ease: animationEasings.easeOut,
  },
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    duration: animationTimings.normal,
    ease: animationEasings.easeOut,
  },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: {
    duration: animationTimings.normal,
    ease: animationEasings.easeOut,
  },
}
