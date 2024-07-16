import type { Journal, Option } from '@/lib/types';
import { createURLSearchParams } from '@/lib/utils';

export const getJournalList = async (searchParams: { date: string; tags: string }) => {
  const params = createURLSearchParams(searchParams);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/journal?${params.toString()}`, {
    cache: 'no-store',
  });
  return (await res.json()) as { data: Journal[]; tags: Option[] };
};
