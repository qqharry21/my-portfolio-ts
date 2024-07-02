'use client';

import type { Variants } from 'framer-motion';
import { m } from 'framer-motion';
import type { ComponentPropsWithoutRef } from 'react';

import Link from 'next/link';

import { cn } from '@/lib/utils';

const linkVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: { opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
};

const MotionLink = m(Link);

interface ContactLinkProps extends ComponentPropsWithoutRef<typeof MotionLink> {
  theme?: 'light' | 'dark';
}

export const ContactLink = ({ href, children, theme = 'dark', ...props }: ContactLinkProps) => (
  <MotionLink
    href={href}
    className={cn(
      'relative before:absolute before:-top-4 before:left-half before:size-1 before:-translate-x-half before:scale-0 before:rounded-full before:transition-all before:duration-500 before:ease-in-out before:content-none hover:before:scale-100 focus-visible:before:scale-100',
      theme === 'dark'
        ? 'before:bg-primary hover:text-primary/80'
        : 'before:bg-primary-foreground hover:text-primary-foreground/80'
    )}
    variants={linkVariants}
    {...props}
  >
    {children}
  </MotionLink>
);
