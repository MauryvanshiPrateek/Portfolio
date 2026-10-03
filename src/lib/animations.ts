export const duration = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.6,
  story: 1.0,
};

export const ease = {
  standard: [0.22, 1, 0.36, 1] as const,
  emphasized: [0.22, 1, 0.36, 1] as const,
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: duration.normal, ease: ease.standard } },
  exit: { opacity: 0, transition: { duration: duration.fast } },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: duration.slow, ease: ease.standard } },
  exit: { opacity: 0, y: -12, transition: { duration: duration.normal } },
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
