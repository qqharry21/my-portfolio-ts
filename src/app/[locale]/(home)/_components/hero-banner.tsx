import { useMemo } from 'react';

import Link from 'next/link';

import type { NamespaceKeys } from 'next-intl';
import { useTranslations } from 'next-intl';

import Me from '@/public/assets/me.webp';

import { BlurImage } from '@/components/blur-image';
import { Button } from '@/components/ui/button';

export const HeroBanner = () => {
  return (
    <div className='w-full bg-primary py-32 lg:py-60'>
      <div className='container flex max-w-6xl items-center justify-center gap-8 max-lg:flex-col-reverse lg:gap-16'>
        <PersonalInfo />
        <PersonalAvatar />
      </div>
    </div>
  );
};

const PersonalInfo = () => {
  const t = useTranslations();
  return (
    <div className='text-center lg:text-left'>
      <span className='text-lg text-primary-foreground/60'>{t('banner.greeting')}</span>
      <h1 className='text-6xl tracking-wider text-primary-foreground lg:-mt-4 lg:text-7xl'>
        {t('personal_info.name')}
      </h1>
      <div className='text-2xl text-primary-foreground/80'>{t('personal_info.job_title')}</div>
      <p className='mt-8 whitespace-pre-wrap text-lg text-muted max-lg:text-balance lg:mt-4 lg:max-w-md'>
        {t.rich('banner.introduction', {
          company: () => (
            <CompanyLink
              href={t('personal_info.current_company')}
              title={t('personal_info.current_company')}
            />
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
  );
};

const PersonalAvatar = () => {
  const t = useTranslations();
  const workStatus = useMemo(() => {
    const statusConfig = process.env.NEXT_PUBLIC_WORK_STATUS ?? 'open_to_work';
    return t(`work_status.${statusConfig}` as NamespaceKeys<IntlMessages, string>);
  }, []);

  return (
    <div className='relative'>
      <div className='relative size-60 shrink-0 overflow-hidden rounded-full ring-4 ring-white ring-offset-4 ring-offset-secondary sm:size-80 lg:size-100'>
        <BlurImage
          src={Me}
          alt={`${t('personal_info.name')} - Me`}
          className='h-auto w-full object-cover object-top brightness-90'
          fill
          priority
          sizes='(min-width: 780px) 400px, (min-width: 640px) 320px, 240px'
          overrideSrc='/harry-chen.webp'
        />
      </div>
      <div className='absolute -right-4 bottom-0 flex w-60 items-center justify-center lg:bottom-4 lg:right-0'>
        <div className='relative z-1 w-fit text-balance rounded-full bg-white px-4 py-1.5 text-center text-sm text-primary lg:text-base'>
          {workStatus}
          <span className='absolute -top-1 left-8 -z-1 size-4 rotate-45 bg-white' />
        </div>
      </div>
    </div>
  );
};

const CompanyLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link
      href={href}
      className='underline underline-offset-2'
      target='_blank'
      rel='noreferrer noopener'
    >
      {title}
    </Link>
  );
};
