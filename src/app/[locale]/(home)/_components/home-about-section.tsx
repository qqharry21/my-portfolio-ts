import Link from 'next/link';

import { useTranslations } from 'next-intl';

export const HomeAboutSection = () => {
  const t = useTranslations('about');

  return (
    <div className='relative pt-32 md:pt-60'>
      <div className='container flex max-w-lg flex-col items-center justify-center gap-8 md:max-w-4xl md:gap-16 xl:max-w-7xl'>
        <h2 className='hidden'>About Me</h2>
        <div className='flex w-full flex-wrap items-start gap-16 md:justify-between md:gap-x-24'>
          <div className='select-none whitespace-nowrap tracking-widest'>
            <div className='text-2xl opacity-60'>Love to </div>
            <div className='text-4xl first-letter:text-5xl first-letter:font-medium'>Code</div>
            <div className='text-4xl first-letter:text-5xl first-letter:font-medium'>Learn</div>
            <div className='text-4xl first-letter:text-5xl first-letter:font-medium'>Share</div>
            <div className='text-4xl first-letter:text-5xl first-letter:font-medium'>
              Build things
            </div>
          </div>
          <div className='flex-1 whitespace-pre-wrap text-left text-lg max-md:text-balance md:max-w-xl xl:max-w-2xl'>
            {t.rich('content', {
              school: (chuck) => (
                <Link
                  href={t('school_href')}
                  className='underline underline-offset-2'
                  prefetch={false}
                  target='_blank'
                  rel='noreferrer noopener '
                >
                  {chuck}
                </Link>
              ),
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
