import { type Variants } from 'framer-motion';

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};

export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

export const easeInExpo = [0.18, 0.22, 0.36, 1];

export const easeIn = [0.55, 0.055, 0.675, 0.19];

export const easeOut = [0.22, 1, 0.36, 1];

export const easeInOut = [1, 0, 0, 1];
