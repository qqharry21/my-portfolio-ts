import Link from 'next/link';

import { useTranslations } from 'next-intl';

export const HomeAboutSection = () => {
  const t = useTranslations('about');

  return (
    <div className='relative pt-32 lg:pt-60'>
      <div
        className='container max-w-3xl lg:max-w-4xl xl:max-w-6xl'
        id='about'
      >
        <h2 className='hidden'>About Me</h2>
        <div className='flex w-full items-start gap-16 max-lg:flex-col lg:justify-between lg:gap-x-24'>
          <div className='select-none whitespace-nowrap tracking-widest'>
            <div className='text-2xl opacity-60'>Love to </div>
            <div className='text-4xl first-letter:text-5xl first-letter:font-medium'>Code</div>
            <div className='text-4xl first-letter:text-5xl first-letter:font-medium'>Learn</div>
            <div className='text-4xl first-letter:text-5xl first-letter:font-medium'>Share</div>
            <div className='text-4xl first-letter:text-5xl first-letter:font-medium'>
              Build things
            </div>
          </div>
          <div className='flex-1 whitespace-pre-wrap text-balance text-left text-lg'>
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
