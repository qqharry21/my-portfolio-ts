import { m } from 'framer-motion';

import { useSelectedLayoutSegment } from 'next/navigation';

import { Magnetic } from '@/components/magnetic';

import { Link } from '@/lib/navigation';
import { routes } from '@/lib/routes';

const MotionLink = m(Link);

export const Nav = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <div className='hidden items-center justify-center md:inline-flex'>
      {routes.map((route) => (
        <Magnetic key={route.name}>
          <MotionLink
            href={route.href}
            data-active={route.href === `/${segment}`}
            className='relative px-8 py-2 text-primary transition-colors after:absolute after:bottom-0 after:left-half after:size-1 after:-translate-x-half after:scale-0 after:rounded-full after:bg-primary after:transition-transform after:duration-500 after:ease-in-out after:content-none hover:text-primary/80 hover:after:scale-100 data-[active=true]:after:scale-100'
          >
            {route.name}
          </MotionLink>
        </Magnetic>
      ))}
    </div>
  );
};
