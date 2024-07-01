import { useFormatter, useTranslations } from 'next-intl';

import { ProjectList } from '@/components/side-project/project-list';
import { Badge } from '@/components/ui/badge';

const projectMap = {
  '1': {
    startDate: '2024-06-14',
    endDate: '2024-07-07',
    imageUrl: '/assets/projects/1.webp',
    skills: ['next.js', 'typescript', 'tailwindCSS', 'shadcn UI', 'resend', 'vercel'],
    github: 'https://github.com/qqharry21/my-portfolio-ts',
    website: '',
  },
  '2': {
    startDate: '2024-06-03',
    endDate: '2024-06-30',
    imageUrl: '/assets/projects/2.webp',
    skills: ['next.js', 'typescript', 'tailwindCSS', 'shadcn UI', 'resend', 'mongoDB', 'vercel'],
    website: 'https://haomo-omdia.vercel.app/',
  },
};

export const HomeSideProjects = () => {
  const t = useTranslations('side_projects');
  const format = useFormatter();

  const projectKeys = ['1', '2'] as const;
  const projects = projectKeys.map((key) => {
    const project = projectMap[key];
    return {
      ...project,
      id: key,
      name: t(`projects.${key}.name`),
      description: t(`projects.${key}.description`),
      startDate: format.dateTime(new Date(project.startDate), 'short'),
      endDate: project.endDate && format.dateTime(new Date(project.endDate), 'short'),
    };
  });

  return (
    <div className='relative pt-32 md:pt-60'>
      <div className='container flex flex-col items-center gap-16 md:gap-24'>
        <div className='flex flex-col items-center justify-center'>
          <div>
            <Badge className='text-sm'>{t('subtitle')}</Badge>
          </div>
          <h2
            className='mt-4 text-balance text-center text-6xl leading-snug tracking-wide'
            id='side-projects'
          >
            {t('title')}
          </h2>
          <p className='mt-2 max-w-5xl text-center text-base max-md:text-balance'>
            {t('description')}
          </p>
        </div>
        <div className='w-full max-w-6xl'>
          <ProjectList projects={projects} />
        </div>
      </div>
    </div>
  );
};
