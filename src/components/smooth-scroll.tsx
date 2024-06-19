'use client';

import ReactLenis from '@studio-freight/react-lenis';

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
