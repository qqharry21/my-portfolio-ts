'use client';

import { domAnimation, LazyMotion, MotionConfig } from 'framer-motion';

export const MotionProvider = ({ children }: PropsWithChildren) => {
  return (
    <MotionConfig reducedMotion='user'>
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </MotionConfig>
  );
};
