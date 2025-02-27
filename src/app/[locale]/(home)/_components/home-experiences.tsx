import { getFormatter, getTranslations } from 'next-intl/server';

import type { Experience } from '@/lib/types';

import { ExperienceList } from '@/app/[locale]/(home)/_components/experience-list';

const fetchWorkExperience = async () => {
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/work-experience.json`);
  const data = await result.json();
  return data as Pick<Experience, 'image' | 'startDate' | 'endDate' | 'externalLink'>[];
};

export const HomeExperiences = async () => {
  const format = await getFormatter();
  const t = await getTranslations('work_experience');

  const data = await fetchWorkExperience();

  const experienceKeys = ['1', '2', '3'] as const;

  const experiences = experienceKeys.map((key) => {
    const experience = data[key];
    return {
      ...experience,
      id: key,
      companyName: t(`companies.${key}.company.name`),
      href: t(`companies.${key}.company.href`),
      alt: t(`companies.${key}.company.name`) + ' logo',
      jobTitle: t(`companies.${key}.job_title`),
      description: t(`companies.${key}.description`),
      startDate: format.dateTime(new Date(experience.startDate), 'short'),
      endDate: experience.endDate && format.dateTime(new Date(experience.endDate), 'short'),
    };
  });

  return (
    <div className='relative pt-32 lg:pt-60'>
      <div
        className='container flex max-w-4xl flex-col items-center justify-center gap-16 lg:gap-24 xl:max-w-6xl'
        id='experience'
      >
        <div className='space-y-2'>
          <h2 className='text-balance text-center text-6xl tracking-wide'>{t('title')}</h2>
          <p className='text-balance text-center text-lg'>{t('description')}</p>
        </div>
        <div className='flow-root'>
          <ExperienceList experiences={experiences} />
        </div>
      </div>
    </div>
  );
};
