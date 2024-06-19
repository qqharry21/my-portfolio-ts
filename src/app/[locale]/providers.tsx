'use client';

import { MotionProvider } from '@/components/motion-provider';
import { QueryProvider } from '@/components/query-provider';
import { SmoothScroll } from '@/components/smooth-scroll';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryProvider>
      <MotionProvider>
        <SmoothScroll>{children}</SmoothScroll>
      </MotionProvider>
    </QueryProvider>
  );
};
