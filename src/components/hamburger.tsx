import { m } from 'framer-motion';
import { useEffect } from 'react';

import { useMediaQuery } from '@/hooks/use-media-query';
import { useScrollAnimate } from '@/hooks/use-scroll-animate';
import { useScrollLock } from '@/hooks/use-scroll-lock';

import { Magnetic } from './magnetic';

export const Hamburger = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const [targetEl, animate] = useScrollAnimate<HTMLDivElement>({
    onAnimateEnter: () => {
      animate(targetEl.current, { scale: 1 }, { duration: 0.3 });
    },
    onAnimateExit: () => {
      if (isTablet) return;
      if (isOpen) setOpen(false);
      animate(targetEl.current, { scale: 0 }, { duration: 0.4 });
    },
  });

  const isTablet = useMediaQuery('(max-width: 768px)');

  useScrollLock(isOpen);

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
        className='fixed right-4 top-4 z-[15] md:right-8 md:top-8'
        initial={{ scale: 0 }}
      >
        <button
          className='group flex size-16 items-center justify-center rounded-full bg-secondary shadow-md hover:shadow-lg focus-visible:shadow-lg focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-secondary md:size-20'
          data-active={isOpen}
          onClick={() => setOpen(!isOpen)}
        >
          <div className='transform-style-3d absolute inset-x-0 mx-auto block h-0.5 w-2/5 -translate-y-1 bg-primary-foreground transition-[background-color,transform] duration-500 ease-in-out group-data-[active=true]:translate-y-0 group-data-[active=true]:rotate-45' />
          <div className='transform-style-3d absolute inset-x-0 mx-auto block h-0.5 w-2/5 translate-y-1 bg-primary-foreground transition-[background-color,transform] duration-500 ease-in-out group-data-[active=true]:translate-y-0 group-data-[active=true]:-rotate-45' />
        </button>
      </m.div>
    </Magnetic>
  );
};
