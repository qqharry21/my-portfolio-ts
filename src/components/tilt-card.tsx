'use client';

import type { HTMLMotionProps } from 'framer-motion';
import { m, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

import { cn } from '@/lib/utils';

const ROTATION_RANGE = 30;
const HALF_ROTATION_RANGE = 30 / 2;

interface TiltCardProps extends Omit<HTMLMotionProps<'div'>, 'onMouseMove' | 'onMouseLeave'> {
  children: React.ReactNode;
}

export const TiltCard = ({ children, className, ...props }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <m.div
      {...props}
      ref={ref}
      className={cn('border border-solid border-primary shadow-sm transform-style-3d', className)}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform,
      }}
    >
      {children}
    </m.div>
  );
};
