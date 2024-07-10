'use client';

import { m } from 'framer-motion';
import { useLenis } from 'lenis/react';

import { Magnetic } from '@/components/magnetic';

import type { IRoute } from '@/lib/types';

import { NavigationLink } from '../navigation-link';

const MotionLink = m(NavigationLink);

export const Nav = ({ routes }: { routes: IRoute[] }) => {
  const lenis = useLenis();

  const onClick = (href: string) => {
    lenis?.scrollTo(href);
  };

  return (
    <>
      {routes.map((route) => (
        <Magnetic key={route.name}>
          <MotionLink
            href={route.href}
            className='relative px-6 py-2 font-medium text-primary transition-colors after:absolute after:bottom-0 after:left-half after:size-1 after:-translate-x-half after:scale-0 after:rounded-full after:bg-primary-foreground after:transition-transform after:duration-500 after:ease-in-out after:content-none hover:text-primary/80 hover:after:scale-100 aria-[current=page]:after:scale-100 dark:text-primary-foreground dark:hover:text-primary-foreground/80'
            // onClick={() => onClick(route.href)}
          >
            {route.name}
          </MotionLink>
        </Magnetic>
      ))}
    </>
  );
};
