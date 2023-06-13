export const baseShowAnimation = {
  hidden: {
    y: -4,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.6,
    },
  },
};

export const mediumShowAnimation = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.6,
    },
  },
};

export const mediumSecondShowAnimation = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.7,
    },
  },
};

export const supportToastAnimation = {
  show: { right: 0, opacity: 1 },
  hide: { right: -400, opacity: 0 },
};

export const toastTransition = {
  ease: 'linear',
  duration: 0.5,
};

export const arrowRotateAnimation = {
  up: { rotate: 180 },
  down: { rotate: 360 },
};
export const arrowTransition = {
  ease: 'easeInOut',
  duration: 0.7,
};

export const incomeAnimation = {
  show: { scale: 1 },
  hide: { scale: 0, height: 0, top: 0, left: -70 },
};
export const incomeTransition = {
  ease: 'anticipate',
  type: 'spring',
  duration: 0.5,
};
