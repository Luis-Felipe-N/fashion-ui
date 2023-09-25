export const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
}

export const item = {
  hidden: {
    y: '100%',
  },
  show: {
    y: '0%',
    transition: {
      duration: 0.5,
    },
  },
}

export const itemInView = {
  hidden: {
    y: '100%',
  },
  visible: {
    y: '0%',
    transition: {
      duration: 0.5,
    },
  },
}
