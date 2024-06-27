import type { Variants } from 'framer-motion';
import { m } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { MailIcon, PhoneIcon } from 'lucide-react';

import { useSelectedLayoutSegment } from 'next/navigation';

import { useTranslations } from 'next-intl';

import { routes } from '@/lib/routes';

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

export const MobileNav = ({ onClose }: { onClose: () => void }) => {
  const segment = useSelectedLayoutSegment();
  const t = useTranslations();
  const lenis = useLenis();

  const onClick = (href: string) => {
    lenis?.scrollTo(href);
    onClose();
  };
  return (
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
              {t(route.name)}
            </MotionLink>
          ))}
        </div>
        <div className='flex items-center gap-x-8'>
          <ContactLink href='mailto:qqharry21@gmail.com'>
            <MailIcon />
          </ContactLink>
          <ContactLink href='tel:+886929882333'>
            <PhoneIcon />
          </ContactLink>
        </div>
      </div>
    </m.div>
  );
};

const linkVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: { opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
};

const ContactLink = ({ href, children }: PropsWithChildren & { href: string }) => (
  <MotionLink
    href={href}
    className='relative before:absolute before:-top-2 before:left-half before:size-1 before:-translate-x-half before:scale-0 before:rounded-full before:bg-primary before:transition-all before:duration-500 before:ease-in-out before:content-none hover:text-primary/80 hover:before:scale-100 focus-visible:before:scale-100'
    variants={linkVariants}
  >
    {children}
  </MotionLink>
);
