import { m } from 'framer-motion';
import { useEffect, useState } from 'react';

import { useMediaQuery } from '@/hooks/use-media-query';
import { useScrollAnimate } from '@/hooks/use-scroll-animate';

import { Magnetic } from './magnetic';

export const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const [targetEl, animate] = useScrollAnimate<HTMLDivElement>({
    onAnimateEnter: () => {
      animate(targetEl.current, { scale: 1 }, { duration: 0.3 });
    },
    onAnimateExit: () => {
      if (isTablet) return;
      if (open) setOpen(false);
      animate(targetEl.current, { scale: 0 }, { duration: 0.4 });
    },
  });

  const isTablet = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (isTablet) {
      animate(targetEl.current, { scale: 1 }, { duration: 0.3 });
    } else {
      animate(targetEl.current, { scale: 0 }, { duration: 0.4 });
    }
  }, [isTablet]);

  return (
    <Magnetic ref={targetEl}>
      <m.div
        ref={targetEl}
        className='fixed right-4 top-4 z-[5] md:right-8 md:top-8'
        initial={{ scale: 0 }}
      >
        <m.button
          className='group flex size-16 items-center justify-center rounded-full bg-primary shadow-lg md:size-20'
          data-active={open}
          onClick={() => setOpen(!open)}
        >
          <div className='relative w-full before:relative before:top-[5px] before:m-auto before:block before:h-px before:w-2/5 before:bg-primary-foreground before:transition-transform before:duration-200 before:content-none after:relative after:top-[-5px] after:m-auto after:block after:h-px after:w-2/5 after:bg-primary-foreground after:transition-transform after:duration-200 after:contain-none group-data-[active=true]:before:top-0 group-data-[active=true]:before:-rotate-45 group-data-[active=true]:after:-top-px group-data-[active=true]:after:rotate-45' />
        </m.button>
      </m.div>
    </Magnetic>
  );
};
