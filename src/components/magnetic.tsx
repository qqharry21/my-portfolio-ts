'use client';

import { useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect, useImperativeHandle, useRef } from 'react';

interface MagneticProps {
  children: React.ReactElement;
  [key: string]: unknown;
}

export const Magnetic = React.forwardRef<HTMLElement, MagneticProps>(
  ({ children, ...props }, ref) => {
    const innerRef = useRef<HTMLElement>(null);

    useImperativeHandle(ref, () => innerRef.current!);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { duration: 1, stiffness: 300, damping: 10 });
    const springY = useSpring(y, { duration: 1, stiffness: 300, damping: 10 });

    useEffect(() => {
      const targetEl = innerRef.current;
      if (!targetEl) return;

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = targetEl.getBoundingClientRect();
        const deltaX = clientX - (left + width / 2);
        const deltaY = clientY - (top + height / 2);
        x.set(deltaX * 0.35);
        y.set(deltaY * 0.35);
      };

      const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
      };

      targetEl.addEventListener('mousemove', handleMouseMove);
      targetEl.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        targetEl.removeEventListener('mousemove', handleMouseMove);
        targetEl.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, [innerRef]);

    return React.cloneElement(children, {
      ref: innerRef,
      style: { x: springX, y: springY },
      ...props,
    });
  }
);
