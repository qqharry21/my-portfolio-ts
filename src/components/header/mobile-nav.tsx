'use client';

import type { Variants } from 'framer-motion';
import { AnimatePresence, m } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { LinkedinIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { useState } from 'react';

import { useSelectedLayoutSegment } from 'next/navigation';

import type { IRoute } from '@/lib/types';

import { Hamburger } from '../hamburger';
import LocaleSwitcher from '../locale-switcher';
import { NavigationLink } from '../navigation-link';

import { ContactLink } from './contact-link';

const MotionLink = m(NavigationLink);

const navVariants: Variants = {
  hidden: {
    clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  show: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      staggerChildren: 0.05,
    },
  },
  exit: {
    clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
    transition: { staggerDirection: -1, duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

const routeVariants: Variants = {
  hidden: { x: 80, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: { x: 80, opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
};

export const MobileNav = ({ routes }: { routes: IRoute[] }) => {
  const [open, setOpen] = useState(false);
  const segment = useSelectedLayoutSegment();
  const lenis = useLenis();

  const onClick = (href: string) => {
    lenis?.scrollTo(href);
    setOpen(false);
  };

  return (
    <>
      <Hamburger
        isOpen={open}
        setOpen={setOpen}
      />
      <AnimatePresence>
        {open && (
          <m.div
            className='fixed right-0 top-0 z-5 h-screen bg-muted px-14 py-24 max-2xs:w-full md:p-24'
            initial='hidden'
            animate='show'
            exit='exit'
            variants={navVariants}
          >
            <div className='flex h-full flex-col justify-between'>
              <div className='mt-32 flex flex-col gap-y-6'>
                {routes.map((route) => (
                  <MotionLink
                    key={route.name}
                    href={route.href}
                    data-active={route.href === `/${segment}`}
                    className='relative text-left text-4xl before:absolute before:-left-6 before:top-half before:size-2 before:-translate-y-half before:scale-0 before:rounded-full before:bg-primary before:transition-all before:duration-500 before:ease-in-out before:content-none hover:text-primary/80 hover:before:scale-100 focus-visible:before:scale-100 data-[active=true]:before:scale-100'
                    variants={routeVariants}
                    onClick={() => onClick(route.href)}
                  >
                    {route.name}
                  </MotionLink>
                ))}
              </div>
              <div className='space-y-8'>
                <LocaleSwitcher />
                <div className='flex items-center gap-x-8'>
                  <ContactLink href='mailto:qqharry21@gmail.com'>
                    <MailIcon />
                  </ContactLink>
                  <ContactLink href='tel:+886929882333'>
                    <PhoneIcon />
                  </ContactLink>
                  <ContactLink
                    href='https://www.linkedin.com/in/harry-chen-21/'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <LinkedinIcon />
                  </ContactLink>
                  <ContactLink
                    href='https://github.com/qqharry21'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <svg
                      className='size-6 fill-current'
                      role='img'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <title>GitHub</title>
                      <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
                    </svg>
                  </ContactLink>
                </div>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};
