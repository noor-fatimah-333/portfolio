// Depth Shadow System
export const depthShadows = {
  none: 'none',
  sm: '0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(59, 130, 246, 0.1)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.15), 0 0 20px rgba(59, 130, 246, 0.1)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.2), 0 0 40px rgba(59, 130, 246, 0.15)',
  '2xl': '0 25px 50px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.25), 0 0 60px rgba(59, 130, 246, 0.2)',
}

export const getElevationShadow = (elevation) => {
  const shadows = {
    0: depthShadows.none,
    1: depthShadows.sm,
    2: depthShadows.md,
    3: depthShadows.lg,
    4: depthShadows.xl,
    5: depthShadows['2xl'],
  }
  return shadows[Math.max(0, Math.min(5, elevation))] || depthShadows.md
}

export const getHoverShadow = (baseElevation = 2) => {
  const hoverElevation = Math.min(5, baseElevation + 2)
  return getElevationShadow(hoverElevation)
}

export const shadowTransition = 'box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
