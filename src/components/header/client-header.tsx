'use client';

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/public/assets/dark_logo.svg';

import { Hamburger } from '../hamburger';

import { MobileNav } from './mobile-nav';
import { Nav } from './nav';

export const ClientHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className='absolute z-5 w-full bg-transparent'>
      <div className='container flex items-center justify-between py-4'>
        <Link
          href='/'
          className='relative size-16'
          passHref
        >
          <Image
            src={Logo}
            alt='logo'
            className='object-contain object-center'
            priority
          />
        </Link>

        <Nav />
      </div>
      <Hamburger
        isOpen={open}
        setOpen={setOpen}
      />
      <AnimatePresence>{open && <MobileNav onClose={() => setOpen(false)} />}</AnimatePresence>
    </header>
  );
};
