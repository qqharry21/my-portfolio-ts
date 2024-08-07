'use client';

import { m, useSpring, useTransform } from 'framer-motion';

import { cn } from '@/lib/utils';

import { useScrollListenerContainer } from './scroll-listener-container';

interface BottomCircleProps extends WithClassName {}

export const BottomCircle = ({ className }: BottomCircleProps) => {
  const { scrollYProgress } = useScrollListenerContainer();
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  const springHeight = useSpring(height, { damping: 20, stiffness: 100 });

  return (
    <m.div
      style={{ height: springHeight }}
      className={cn('relative', className)}
    >
      <div className='absolute left-[-10%] z-1 h-[1500%] w-[120%] rounded-b-half bg-inherit shadow-[0_4rem_3rem_#000]'></div>
    </m.div>
  );
};
