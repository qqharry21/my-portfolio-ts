import { useTranslations } from 'next-intl';

import { ThemeChanger } from '@/components/theme-changer';

import type { Journal } from '@/lib/types';

import { FilterMenu } from './_components/filter-menu';
import { JournalList } from './_components/journal-list';

const JOURNAL_LIST: Journal[] = [
  {
    title: 'Fix CI/CD build error',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: ['#bug', '#CI/CD'],
    createAt: '2023-01-02',
  },
  {
    title: 'Learn How to setup CI/CD',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: ['#CI/CD', '#learning'],
    createAt: '2023-01-02',
  },
  {
    title: 'Integrate with Github Actions',
    description:
      'Nulla laboris sunt nulla laborum nostrud dolore elit non consequat exercitation duis culpa exercitation.Elit consectetur nisi in laborum qui in est adipisicing.Nostrud laboris consequat est incididunt eiusmod.Proident minim mollit velit nulla est ipsum in occaecat nulla esse sunt dolore.',
    tags: ['#CI/CD', '#github-actions'],
    createAt: '2023-01-02',
  },
  {
    title: 'Fix CI/CD build error',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: ['#bug', '#CI/CD'],
    createAt: '2023-01-02',
  },
  {
    title: 'Learn How to setup CI/CD',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: ['#CI/CD', '#learning'],
    createAt: '2023-01-02',
  },
  {
    title: 'Integrate with Github Actions',
    description:
      'Nulla laboris sunt nulla laborum nostrud dolore elit non consequat exercitation duis culpa exercitation.Elit consectetur nisi in laborum qui in est adipisicing.Nostrud laboris consequat est incididunt eiusmod.Proident minim mollit velit nulla est ipsum in occaecat nulla esse sunt dolore.',
    tags: ['#CI/CD', '#github-actions'],
    createAt: '2023-01-02',
  },
  {
    title: 'Fix CI/CD build error',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: ['#bug', '#CI/CD'],
    createAt: '2023-01-02',
  },
  {
    title: 'Learn How to setup CI/CD',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: ['#CI/CD', '#learning'],
    createAt: '2023-01-02',
  },
  {
    title: 'Integrate with Github Actions',
    description:
      'Nulla laboris sunt nulla laborum nostrud dolore elit non consequat exercitation duis culpa exercitation.Elit consectetur nisi in laborum qui in est adipisicing.Nostrud laboris consequat est incididunt eiusmod.Proident minim mollit velit nulla est ipsum in occaecat nulla esse sunt dolore.',
    tags: ['#CI/CD', '#github-actions'],
    createAt: '2023-01-02',
  },
];

export default function Page() {
  const t = useTranslations();
  return (
    <ThemeChanger theme='light'>
      <div className='container'>
        <div className='pb-8 pt-30 md:pb-20'>
          <h2 className='text-balance text-center text-6xl tracking-wide'>Work Journal</h2>
        </div>
        <div className='grid items-start gap-10 md:grid-cols-[240px_1fr] md:gap-16'>
          <FilterMenu />
          <JournalList list={JOURNAL_LIST} />
        </div>
      </div>
    </ThemeChanger>
  );
}
