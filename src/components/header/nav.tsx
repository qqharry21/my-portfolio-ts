import { m } from 'framer-motion';

import { Magnetic } from '@/components/magnetic';

import { routes } from '@/lib/routes';

import { NavigationLink } from '../navigation-link';

const MotionLink = m(NavigationLink);

export const Nav = () => {
  return (
    <div className='hidden items-center justify-center md:inline-flex'>
      {routes.map((route) => (
        <Magnetic key={route.name}>
          <MotionLink
            href={route.href}
            className='relative px-6 py-2 text-primary-foreground transition-colors after:absolute after:bottom-0 after:left-half after:size-1 after:-translate-x-half after:scale-0 after:rounded-full after:bg-primary-foreground after:transition-transform after:duration-500 after:ease-in-out after:content-none hover:text-primary-foreground/80 hover:after:scale-100 aria-[current=page]:after:scale-100'
          >
            {route.name}
          </MotionLink>
        </Magnetic>
      ))}
    </div>
  );
};
