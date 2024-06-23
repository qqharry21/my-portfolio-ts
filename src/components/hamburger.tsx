import { m } from 'framer-motion';
import { useState } from 'react';

import { useScrollAnimate } from '@/hooks/use-scroll-animate';

import { Magnetic } from './magnetic';

export const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const [targetEl, animate] = useScrollAnimate<HTMLDivElement>({
    onAnimateEnter: () => {
      console.log('hamburger enter');
      animate('button', { scale: 1 }, { duration: 0.3 });
    },
    onAnimateExit: () => {
      console.log('hamburger exit');
      if (open) setOpen(false);
      animate('button', { scale: 0 }, { duration: 0.4 });
    },
  });

  return (
    <Magnetic ref={targetEl}>
      <m.div
        ref={targetEl}
        className='fixed right-5 top-5 z-10 md:right-10 md:top-10'
      >
        <m.button
          className='group flex size-16 items-center justify-center rounded-full bg-primary md:size-20'
          initial={{ scale: 0 }}
          data-active={open}
          onClick={() => setOpen(!open)}
        >
          <div className='relative w-full before:relative before:top-[5px] before:m-auto before:block before:h-px before:w-2/5 before:bg-primary-foreground before:transition-transform before:duration-200 before:content-none after:relative after:top-[-5px] after:m-auto after:block after:h-px after:w-2/5 after:bg-primary-foreground after:transition-transform after:duration-200 after:contain-none group-data-[active=true]:before:top-0 group-data-[active=true]:before:-rotate-45 group-data-[active=true]:after:-top-px group-data-[active=true]:after:rotate-45' />
        </m.button>
      </m.div>
    </Magnetic>
  );
};
