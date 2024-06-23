import { useAnimate, useMotionValueEvent, useScroll } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimateProps {
  disabled?: boolean;
  axis?: 'x' | 'y';
  offset?: number;
  threshold?: number;
  onAnimate?: (val: number) => void;
  onAnimateEnter?: () => void;
  onAnimateExit?: () => void;
}

export const useScrollAnimate = <T extends HTMLElement = HTMLElement>(
  props?: ScrollAnimateProps
) => {
  const {
    disabled = false,
    axis = 'y',
    offset = 30,
    threshold = 300,
    onAnimate,
    onAnimateEnter,
    onAnimateExit,
  } = props || {};
  const { scrollY, scrollX } = useScroll();
  const [targetEl, animate] = useAnimate<T>();

  const delta = useRef<number>(0);
  const lastScrollY = useRef<number>(0);

  useMotionValueEvent(axis === 'y' ? scrollY : scrollX, 'change', (val) => {
    if (disabled || !targetEl.current) return;

    onAnimate?.(val);

    const diff = Math.abs(val - lastScrollY.current);
    const isScrollingDown = val >= lastScrollY.current;

    delta.current += isScrollingDown ? diff : -diff;
    delta.current = Math.max(-offset, Math.min(offset, delta.current));

    const shouldAnimateEnter = delta.current >= offset && val > threshold;
    const shouldAnimateExit = delta.current <= -offset || val < threshold;

    if (shouldAnimateEnter) {
      onAnimateEnter?.();
    } else if (shouldAnimateExit) {
      onAnimateExit?.();
    }
  });

  return [targetEl, animate] as const;
};
