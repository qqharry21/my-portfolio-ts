'use client';

import { ReactLenis } from 'lenis/react';

export const SmoothScroll = ({ children }: PropsWithChildren) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        syncTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};
