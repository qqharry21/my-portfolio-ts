import Image from 'next/image';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

import Logo from '@/public/assets/dark_logo.svg';

import LocaleSwitcher from '../locale-switcher';

import { MobileNav } from './mobile-nav';
import { Nav } from './nav';

export const Header = () => {
  const t = useTranslations();

  const routes = [
    {
      name: t('nav.about'),
      href: '#about',
    },
    {
      name: t('nav.experience'),
      href: '#experience',
    },
    {
      name: t('nav.side_projects'),
      href: '#side-projects',
    },
    {
      name: t('nav.contact'),
      href: '#contact',
    },
  ];

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

        <div className='hidden items-center justify-center text-primary-foreground md:inline-flex'>
          <Nav routes={routes} />
          <div className='px-6'>
            <LocaleSwitcher />
          </div>
        </div>
      </div>

      <MobileNav routes={routes} />
    </header>
  );
};
