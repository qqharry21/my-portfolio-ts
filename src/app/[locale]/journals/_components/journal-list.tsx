'use client';

import { useQuery } from '@tanstack/react-query';

import { useSearchParams } from 'next/navigation';

import { dynamicImport } from '@/lib/dynamic-import';

import { getJournalList } from '../_lib';

import { JournalItem } from './journal-item';
import { JournalSkeleton } from './journal-skeleton';

const { JournalEmpty } = dynamicImport(
  () => import(/* webpackChunkName: "journalEmpty" */ './journal-empty'),
  'JournalEmpty'
);

const { JournalError } = dynamicImport(
  () => import(/* webpackChunkName: "journalError" */ './journal-error'),
  'JournalError'
);

export const JournalList = () => {
  const searchParams = useSearchParams();
  const date = searchParams.get('date') || 'all';
  const tags = searchParams.get('tags') || '';

  const { data, isError, isLoading, isRefetching, refetch } = useQuery({
    queryKey: ['journal', date, tags],
    queryFn: () => getJournalList({ date, tags }),
  });

  if (isLoading || isRefetching) return <JournalSkeleton />;

  if (isError || !data) return <JournalError onRefetch={() => refetch()} />;

  if (data.data.length === 0) return <JournalEmpty />;

  return (
    <div className='auto-grid gap-10 [--min-col-size:20rem]'>
      {data.data.map((journal, i) => (
        <JournalItem
          key={i}
          journal={journal}
        />
      ))}
    </div>
  );
};
