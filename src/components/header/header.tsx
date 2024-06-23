'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/public/assets/light_logo.svg';

import { Hamburger } from '../hamburger';

import { Nav } from './nav';

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className='container relative bg-transparent'>
      <div className='z-10 flex items-center justify-between py-4'>
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
      <Hamburger />
    </header>
  );
};
