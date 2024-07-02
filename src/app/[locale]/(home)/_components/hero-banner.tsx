import Image from 'next/image';
import Link from 'next/link';

import Me from '@/public/assets/me.webp';

import { Button } from '@/components/ui/button';

export const HeroBanner = () => {
  return (
    <div className='w-full bg-primary py-32 md:py-60'>
      <div className='container flex max-w-6xl flex-wrap-reverse items-center justify-center gap-8 md:gap-16'>
        <div className='text-center md:text-left'>
          <span className='text-lg text-primary-foreground/60'>Hi, It&apos;s me</span>
          <h1 className='text-6xl tracking-wider text-primary-foreground md:-mt-4 md:text-7xl'>
            Harry Chen
          </h1>
          <div className='text-2xl text-primary-foreground/80'>Frontend Developer</div>
          <p className='mt-8 max-w-md whitespace-pre-wrap text-lg text-muted max-md:text-balance md:mt-4'>
            I love to build things and learn new stuff, and I&apos;m passionate about web
            development. Currently working at{' '}
            <Link
              href='https://www.wits.com/tw'
              className='underline underline-offset-2'
              target='_blank'
              rel='noreferrer noopener'
            >
              Wits
            </Link>
            .
          </p>
          <div className='mt-8'>
            <Link
              href='/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              passHref
            >
              <Button
                variant='outline'
                size='lg'
              >
                My Resume
              </Button>
            </Link>
          </div>
        </div>
        <div className='relative'>
          <div className='relative size-60 shrink-0 overflow-hidden rounded-full ring-4 ring-white ring-offset-4 ring-offset-secondary sm:size-80 md:size-100'>
            <Image
              src={Me}
              alt='Me - Harry Chen'
              className='h-full object-cover object-top brightness-90'
              priority
            />
          </div>
          <div className='absolute -right-4 bottom-4 md:right-0'>
            <div className='relative z-1 w-fit rounded-full bg-white px-4 py-1 text-base text-primary'>
              Open to work !!!
              <span className='absolute -top-1 left-4 -z-1 size-4 rotate-45 bg-white' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
