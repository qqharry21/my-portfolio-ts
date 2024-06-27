import { useFormatter, useTranslations } from 'next-intl';

import { ExperienceList } from '@/components/experience/experience-list';

const experienceMap = {
  '1': {
    imageUrl: 'https://www.wits.com/static/images/logo.ba5957ba89b0.svg',
    startDate: '2022-12-05',
    endDate: null,
    externalLink: 'https://www.overwolf.com/app/acer_inc.-planet9_proclip',
  },
  '2': {
    imageUrl: 'https://www.mitac.com.tw/wp-content/uploads/2021/12/mitac-logo.png',
    startDate: '2020-07-01',
    endDate: '2022-12-04',
    externalLink: null,
  },
};

export const HomeExperiences = () => {
  const format = useFormatter();
  const t = useTranslations('work_experience');

  const experienceKeys = ['1', '2'] as const;

  const experiences = experienceKeys.map((key) => {
    const experience = experienceMap[key];
    return {
      ...experience,
      id: key,
      companyName: t(`${key}.company.name`),
      href: t(`${key}.company.href`),
      alt: t(`${key}.company.name`) + ' logo',
      jobTitle: t(`${key}.job_title`),
      description: t(`${key}.description`),
      startDate: format.dateTime(new Date(experience.startDate), 'short'),
      endDate: experience.endDate && format.dateTime(new Date(experience.endDate), 'short'),
    };
  });

  return (
    <div className='relative pt-32 md:pt-60'>
      <div className='container flex max-w-4xl flex-col items-center justify-center gap-8 md:gap-16 xl:max-w-6xl'>
        <h2
          className='text-6xl'
          id='experience'
        >
          Work Experience
        </h2>
        <div className='flow-root'>
          <ExperienceList experiences={experiences} />
        </div>
      </div>
    </div>
  );
};
