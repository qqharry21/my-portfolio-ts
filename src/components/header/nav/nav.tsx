import { m } from 'framer-motion';

import Link from 'next/link';

import { Magnetic } from '@/components/magnetic';

import { useMediaQuery } from '@/hooks/use-media-query';

import { routes } from '@/lib/routes';

const MotionLink = m(Link);

export const Nav = () => {
  const isTablet = useMediaQuery('(max-width: 768px)');

  if (isTablet) return null;

  return (
    <div className='inline-flex items-center justify-center'>
      {routes.slice(-3).map((route) => (
        <Magnetic key={route.name}>
          <MotionLink
            href={route.href}
            className='relative px-4 py-2 text-primary transition-colors after:absolute after:left-half after:top-0 after:size-1 after:-translate-x-half after:scale-0 after:rounded-full after:bg-primary after:transition-transform after:duration-200 after:content-none hover:text-primary/80 hover:after:scale-100'
          >
            {route.name}
          </MotionLink>
        </Magnetic>
      ))}
    </div>
  );
};
