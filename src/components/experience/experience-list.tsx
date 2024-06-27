import { useTranslations } from 'next-intl';

import type { Experience } from '@/lib/types';

import { ExperienceItem } from './experience-item';

interface ExperienceListProps {
  experiences: Experience[];
}

export const ExperienceList = ({ experiences }: ExperienceListProps) => {
  const t = useTranslations('common');
  return (
    <ul className='space-y-8'>
      {experiences.map((experience) => (
        <ExperienceItem
          key={experience.id}
          experience={experience}
          present={t('present')}
          more={t('read_more')}
        />
      ))}
    </ul>
  );
};
