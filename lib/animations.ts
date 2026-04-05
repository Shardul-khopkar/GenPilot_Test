// Animation utilities and Framer Motion configurations
// Reusable animation variants and easing functions for consistent micro-interactions

export const easings = {
  smooth: [0.34, 1.56, 0.64, 1], // Smooth spring easing
  standard: [0.2, 0, 0, 1], // Standard easing
  emphasized: [0.4, 0, 0.2, 1], // Emphasized motion
  decelerate: [0, 0, 0.2, 1], // Decelerate
};

export const animationVariants = {
  // Entrance animations
  fadeInUp: {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easings.smooth,
      },
    },
  },

  fadeInDown: {
    hidden: { opacity: 0, y: -24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easings.smooth,
      },
    },
  },

  slideInLeft: {
    hidden: { opacity: 0, x: -24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: easings.smooth,
      },
    },
  },

  slideInRight: {
    hidden: { opacity: 0, x: 24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: easings.smooth,
      },
    },
  },

  // Hover animations
  buttonHover: {
    scale: 1.05,
    transition: { duration: 0.2, ease: easings.smooth },
  },

  buttonTap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },

  cardHover: {
    y: -8,
    transition: { duration: 0.3, ease: easings.smooth },
  },

  // Container animations with stagger
  containerStagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  },

  // Loading animations
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: easings.emphasized,
    },
  },

  // Micro-interaction feedback
  success: {
    scale: [1, 1.1, 1],
    transition: { duration: 0.4, ease: easings.smooth },
  },

  error: {
    x: [-5, 5, -5, 5, 0],
    transition: { duration: 0.4, ease: easings.smooth },
  },
};

// Viewport animation configuration for performance
export const viewportConfig = {
  once: true,
  amount: 0.3,
};

// Spring physics presets for natural motion
export const springs = {
  gentle: { type: 'spring', stiffness: 100, damping: 10 },
  standard: { type: 'spring', stiffness: 300, damping: 30 },
  snappy: { type: 'spring', stiffness: 500, damping: 25 },
};
