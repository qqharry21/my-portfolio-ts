import { ChevronRightIcon, ExternalLinkIcon } from 'lucide-react';

import Link from 'next/link';

import type { Experience } from '@/lib/types';

import { BlurImage } from '../blur-image';

export const ExperienceItem = ({
  experience,
  present,
  more,
}: {
  experience: Experience;
  present: string;
  more: string;
}) => {
  return (
    <li
      key={experience.id}
      className='group/item'
    >
      <div className='relative'>
        <span
          className='absolute left-6 top-5 h-full w-0.5 bg-secondary/50 group-last/item:top-0 md:left-7'
          aria-hidden='true'
        />
        <div className='relative flex items-start gap-x-4 md:gap-x-6'>
          <div className='relative shrink-0 select-none overflow-hidden rounded-full border-2 border-secondary bg-background p-1 ring-8 ring-background ring-offset-2 ring-offset-white'>
            <BlurImage
              className='aspect-square size-10 object-contain md:size-12'
              src={experience.imageUrl}
              alt={experience.alt}
              width={48}
              height={48}
              loading='lazy'
            />
          </div>
          <div className='min-w-0 flex-1 space-y-2'>
            <div className='flex items-start justify-between gap-2 max-md:flex-col md:items-center'>
              <div className='w-fit'>
                <div className='group/title flex items-center gap-x-2 text-base'>
                  <Link
                    href={experience.href}
                    className='font-medium text-primary underline-offset-4 group-hover/title:underline'
                    prefetch={false}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    {experience.companyName}
                  </Link>
                  <ChevronRightIcon className='size-4 -translate-x-2 opacity-0 transition-all duration-200 ease-in-out group-hover/title:-translate-x-0 group-hover/title:opacity-100' />
                </div>
                <p className='mt-0.5 text-sm text-secondary'>{experience.jobTitle}</p>
              </div>
              <div className='text-sm text-secondary'>
                <span>
                  {experience.startDate}
                  &nbsp;-&nbsp;
                  {experience.endDate ?? present}
                </span>
              </div>
            </div>
            <div className='text-left text-sm text-primary/90'>
              <p className='max-md:text-balance'>{experience.description}</p>
            </div>
            {experience.externalLink && (
              <div className='inline-flex items-center gap-x-2'>
                <Link
                  href={experience.externalLink}
                  className='text-primary underline underline-offset-4'
                  prefetch={false}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  {more}
                </Link>
                <ExternalLinkIcon size={16} />
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
