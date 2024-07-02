'use client';

import { Slot } from '@radix-ui/react-slot';
import { useScroll } from 'framer-motion';
import { createContext, useContext, useMemo, useRef } from 'react';

type UseScrollResult = ReturnType<typeof useScroll>;

const ScrollListenerContainerContext = createContext<UseScrollResult>({} as UseScrollResult);

export const useScrollListenerContainer = () => {
  const context = useContext(ScrollListenerContainerContext);
  if (!context) {
    throw new Error(
      'useScrollListenerContainer must be used within a ScrollListenerContainerProvider'
    );
  }
  return context;
};

interface ScrollListenerContainerProviderProps extends PropsWithChildren {
  options?: Omit<Parameters<typeof useScroll>[0], 'target'>;
}

export const ScrollListenerContainerProvider = ({
  options,
  children,
}: ScrollListenerContainerProviderProps) => {
  const containerRef = useRef(null);
  const value = useScroll({
    ...options,
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const contextValue: UseScrollResult = useMemo(() => value, [value]);

  return (
    <ScrollListenerContainerContext.Provider value={contextValue}>
      <Slot ref={containerRef}>{children}</Slot>
    </ScrollListenerContainerContext.Provider>
  );
};
