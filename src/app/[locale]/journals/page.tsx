import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { getTranslations } from 'next-intl/server';

import { IntlClientProvider } from '@/components/intl-client-provider';
import { ThemeChanger } from '@/components/theme-changer';
import { Accordion } from '@/components/ui/accordion';

import { getQueryClient } from '@/lib/react-query';

import { JournalDateFilter } from './_components/journal-date-filter';
import { JournalList } from './_components/journal-list';
import { JournalTagFilter } from './_components/journal-tag-filter';
import { getJournalList } from './_lib';

interface PageProps {
  searchParams: {
    date: string;
    tags: string;
  };
}

export default async function Page({ searchParams: { date = 'all', tags = '' } }: PageProps) {
  const t = await getTranslations();

  const queryClient = getQueryClient();
  const { tags: tagOptions } = await queryClient.fetchQuery({
    queryKey: ['journal', date, tags],
    queryFn: () => getJournalList({ date, tags }),
  });

  const dateFilterOptions = [
    { value: 'all', label: t('journal.date_filter.option.all') },
    { value: 'this_week', label: t('journal.date_filter.option.this_week') },
    { value: 'this_month', label: t('journal.date_filter.option.this_month') },
    { value: 'before_3_months', label: t('journal.date_filter.option.before_3_months') },
    { value: 'before_6_months', label: t('journal.date_filter.option.before_6_months') },
    { value: 'before_last_year', label: t('journal.date_filter.option.before_last_year') },
  ];

  return (
    <ThemeChanger theme='light'>
      <div className='container'>
        <div className='pb-8 pt-30 md:pb-20'>
          <h2 className='text-balance text-center text-6xl tracking-wide'>{t('journal.title')}</h2>
        </div>
        <div className='grid items-start gap-10 pb-30 md:grid-cols-[240px_1fr] md:gap-16'>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Accordion
              type='single'
              collapsible
              className='w-full text-primary lg:sticky lg:top-24'
            >
              <JournalDateFilter
                title={t('journal.date_filter.title')}
                options={dateFilterOptions}
              />
              <JournalTagFilter
                title={t('journal.tag_filter.title')}
                options={tagOptions}
              />
            </Accordion>
            <IntlClientProvider target={['journal.error', 'journal.empty']}>
              <JournalList />
            </IntlClientProvider>
          </HydrationBoundary>
        </div>
      </div>
    </ThemeChanger>
  );
}
