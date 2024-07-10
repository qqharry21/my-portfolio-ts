import { useLenis } from 'lenis/react';
import { useEffect } from 'react';

export const useScrollLock = (shouldLock?: boolean) => {
  const lenis = useLenis();

  const lock = () => {
    document.body.style.overflow = 'hidden';
    lenis?.stop();
  };

  const unlock = () => {
    document.body.style.overflow = 'auto';
    lenis?.start();
  };

  useEffect(() => {
    if (shouldLock) {
      lock();
    } else {
      unlock();
    }

    return () => {
      unlock();
    };
  }, [shouldLock]);

  return { lock, unlock };
};
