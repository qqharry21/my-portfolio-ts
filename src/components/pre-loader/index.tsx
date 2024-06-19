'use client';

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import PreLoaderContent from './pre-loader-content';

export const PreLoader = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <AnimatePresence mode='wait'>
      {!loaded && <PreLoaderContent onAnimationComplete={() => setLoaded(true)} />}
    </AnimatePresence>
  );
};
