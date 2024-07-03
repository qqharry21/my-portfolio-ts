import Link from 'next/link';

import { useTranslations } from 'next-intl';

import Me from '@/public/assets/me.webp';

import { BlurImage } from '@/components/blur-image';
import { Button } from '@/components/ui/button';

export const HeroBanner = () => {
  const t = useTranslations();
  return (
    <div className='w-full bg-primary py-32 md:py-60'>
      <div className='container flex max-w-6xl flex-wrap-reverse items-center justify-center gap-8 md:gap-16'>
        <div className='text-center md:text-left'>
          <span className='text-lg text-primary-foreground/60'>{t('banner.greeting')}</span>
          <h1 className='text-6xl tracking-wider text-primary-foreground md:-mt-4 md:text-7xl'>
            {t('personal_info.name')}
          </h1>
          <div className='text-2xl text-primary-foreground/80'>{t('personal_info.job_title')}</div>
          <p className='mt-8 max-w-md whitespace-pre-wrap text-lg text-muted max-md:text-balance md:mt-4'>
            {t.rich('banner.introduction', {
              company: () => (
                <Link
                  href={t('personal_info.current_company')}
                  className='underline underline-offset-2'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  {t('personal_info.current_company')}
                </Link>
              ),
            })}
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
                {t('banner.resume_button')}
              </Button>
            </Link>
          </div>
        </div>
        <div className='relative'>
          <div className='relative size-60 shrink-0 overflow-hidden rounded-full ring-4 ring-white ring-offset-4 ring-offset-secondary sm:size-80 md:size-100'>
            <BlurImage
              src={Me}
              alt={`Me - ${t('personal_info.name')}`}
              className='h-auto w-full object-cover object-top brightness-90'
              fill
              priority
              sizes='(min-width: 780px) 400px, (min-width: 640px) 320px, 240px'
              overrideSrc='/harry-chen.webp'
            />
          </div>
          <div className='absolute -right-4 bottom-4 md:right-0'>
            <div className='relative z-1 w-fit rounded-full bg-white px-4 py-1 text-base text-primary'>
              {t('banner.slogan')}
              <span className='absolute -top-1 left-4 -z-1 size-4 rotate-45 bg-white' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
