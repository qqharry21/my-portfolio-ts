import { GlobeIcon } from 'lucide-react';

import { useTranslations } from 'next-intl';

import type { Project } from '@/lib/types';

import { BlurImage } from '../blur-image';
import { GithubIcon } from '../icons/github-icon';
import { Badge } from '../ui/badge';

export const ProjectItem = ({ project }: { project: Project }) => {
  const t = useTranslations('common');
  return (
    <div className='w-full overflow-hidden rounded-md border border-solid border-primary shadow-sm'>
      <div className='relative h-48 w-full overflow-hidden md:h-72'>
        <BlurImage
          src={project.imageUrl}
          alt={project.name}
          fill
          className='h-auto w-full object-cover object-center hover:scale-105'
          loading='lazy'
        />
      </div>
      <div className='p-4'>
        <h3 className='text-xl font-medium'>{project.name}</h3>
        <div className='mt-2 flex items-center gap-2'>
          <span className='text-xs text-primary'>
            {project.startDate} - {project.endDate}
          </span>
        </div>
        <p className='mt-2 text-sm'>{project.description}</p>
        <div className='mt-4 flex flex-wrap gap-2'>
          {project.skills.map((skill) => (
            <Badge
              key={skill}
              variant='destructive'
            >
              {skill}
            </Badge>
          ))}
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {project.github && (
            <a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center gap-x-2 rounded-full bg-primary px-2 py-1 text-xs text-white'
            >
              <GithubIcon className='size-4 fill-current' />
              Github
            </a>
          )}

          {project.website && (
            <a
              href={project.website}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center gap-x-2 rounded-full bg-primary px-2 py-1 text-xs text-white'
            >
              <GlobeIcon size={16} />
              {t('website')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
