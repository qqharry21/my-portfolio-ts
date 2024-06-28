import type { Variants } from 'framer-motion';
import { m } from 'framer-motion';
import type { ComponentPropsWithoutRef } from 'react';

import Link from 'next/link';

const linkVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: { opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
};

const MotionLink = m(Link);

export const ContactLink = ({
  href,
  children,
  ...props
}: PropsWithChildren & ComponentPropsWithoutRef<typeof MotionLink>) => (
  <MotionLink
    href={href}
    className='relative before:absolute before:-top-2 before:left-half before:size-1 before:-translate-x-half before:scale-0 before:rounded-full before:bg-primary before:transition-all before:duration-500 before:ease-in-out before:content-none hover:text-primary/80 hover:before:scale-100 focus-visible:before:scale-100'
    variants={linkVariants}
    {...props}
  >
    {children}
  </MotionLink>
);
