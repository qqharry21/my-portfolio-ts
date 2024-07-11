import Link from 'next/link';

import { useTranslations } from 'next-intl';

import LogoDark from '@/public/assets/dark_logo.svg';
import LogoLight from '@/public/assets/light_logo.svg';

import LocaleSwitcher from '../locale-switcher';
import { ThemeImage } from '../theme-image';

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
      name: 'Journals',
      href: '/journals',
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
          <ThemeImage
            srcDark={LogoDark}
            srcLight={LogoLight}
            alt='logo'
            className='h-auto w-full object-contain object-center'
            priority
            fill
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
