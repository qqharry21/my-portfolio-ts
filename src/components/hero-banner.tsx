import Image from 'next/image';
import Link from 'next/link';

import Me from '@/public/assets/me.webp';

import { Button } from './ui/button';

export const HeroBanner = () => {
  return (
    <div className='w-full bg-primary py-32 md:py-48'>
      <div className='container flex items-center justify-center gap-8 max-md:flex-col-reverse md:gap-16'>
        <div className='text-center md:text-left'>
          <span className='text-lg text-primary-foreground/60'>Hi, It&apos;s me</span>
          <h1 className='text-6xl tracking-wider text-primary-foreground md:text-7xl'>
            Harry Chen
          </h1>
          <div className='text-base text-primary-foreground/80 md:text-xl'>Frontend Developer</div>
          <p className='mt-4 max-w-md whitespace-pre-wrap text-pretty text-base text-muted'>
            I&apos;m a frontend developer who loves to build web applications and websites.
          </p>
          <Link
            href='/resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            passHref
          >
            <Button
              variant='outline'
              size='lg'
              className='mt-6'
            >
              My Resume
            </Button>
          </Link>
        </div>
        <div className='relative size-60 shrink-0 overflow-hidden rounded-full ring-4 ring-secondary ring-offset-2 md:size-100'>
          <Image
            src={Me}
            alt='Me - Harry Chen'
            className='h-full object-cover object-top brightness-90'
          />
        </div>
      </div>
    </div>
  );
};
