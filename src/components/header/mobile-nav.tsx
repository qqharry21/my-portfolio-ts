'use client';

import type { Variants } from 'framer-motion';
import { AnimatePresence, m } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { LinkedinIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { useState } from 'react';

import { useSelectedLayoutSegment } from 'next/navigation';

import type { IRoute } from '@/lib/types';

import { ContactLink } from '../contact-link';
import { Hamburger } from '../hamburger';
import { GithubIcon } from '../icons/github-icon';
import LocaleSwitcher from '../locale-switcher';
import { NavigationLink } from '../navigation-link';

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

const opacityVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: { opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
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
          <>
            <m.div
              className='fixed right-0 top-0 z-10 h-screen bg-muted px-14 py-24 max-2xs:w-full lg:p-24'
              initial='hidden'
              animate='show'
              exit='exit'
              variants={navVariants}
            >
              <div className='flex h-full flex-col justify-between'>
                <div className='flex flex-col gap-y-6 md:mt-32'>
                  {routes.map((route) => (
                    <MotionLink
                      key={route.name}
                      href={route.href}
                      data-active={route.href === `/${segment}`}
                      className='relative select-none text-center text-4xl before:absolute before:-left-6 before:top-half before:size-2 before:-translate-y-half before:scale-0 before:rounded-full before:bg-primary before:transition-all before:duration-500 before:ease-in-out before:content-none hover:text-primary/80 hover:before:scale-100 focus-visible:before:scale-100 data-[active=true]:before:scale-100 2xs:text-left'
                      variants={routeVariants}
                      onClick={() => onClick(route.href)}
                    >
                      {route.name}
                    </MotionLink>
                  ))}
                </div>
                <div className='space-y-8 max-2xs:text-center'>
                  <m.div variants={opacityVariants}>
                    <LocaleSwitcher />
                  </m.div>
                  <div className='flex items-center gap-x-8 max-2xs:justify-center'>
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
                      <GithubIcon className='size-6 fill-current' />
                    </ContactLink>
                  </div>
                </div>
              </div>
            </m.div>
            <m.div
              className='fixed left-0 top-0 h-screen w-full bg-black/80 backdrop-blur-sm'
              initial='hidden'
              animate='show'
              exit='exit'
              variants={opacityVariants}
              onClick={() => setOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};
