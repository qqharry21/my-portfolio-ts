import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import TypingAnimation from '../typing-animation';

const slideUp: Variants = {
  initial: {
    top: 0,
  },
  exit: {
    top: '-100vh',
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.5 },
  },
};

export default function PreLoaderContent({
  onAnimationComplete,
}: {
  onAnimationComplete: () => void;
}) {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve: Variants = {
    initial: {
      d: initialPath,
      transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial='initial'
      exit='exit'
      className='fixed z-99 flex min-h-dvh w-full items-center justify-center bg-muted text-6xl font-bold'
    >
      {dimension.width > 0 && (
        <>
          <div className='container relative z-99'>
            <TypingAnimation
              text={`Hey there!\n I'm Harry. Welcome to my portfolio~`}
              className='z-1 whitespace-pre-wrap'
              duration={80}
              onAnimationComplete={onAnimationComplete}
            />
          </div>
          <svg className='absolute top-0 h-[calc(100%+300px)] w-full'>
            <motion.path
              variants={curve}
              initial='initial'
              exit='exit'
              className='fill-muted'
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}
