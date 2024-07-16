import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';

import { useRouter } from '@/lib/navigation';

export const JournalEmpty = () => {
  const router = useRouter();
  const t = useTranslations();

  return (
    <div className='grid h-80 place-items-center p-4'>
      <div className='space-y-6 text-center'>
        <div className='text-3xl font-semibold'>{t('journal.empty.title')}</div>
        <div className='text-balance text-lg text-muted-foreground'>
          {t('journal.empty.description')}
        </div>
        <Button
          onClick={() => {
            router.push('/journals');
          }}
        >
          {t('journal.empty.button_text')}
        </Button>
      </div>
    </div>
  );
};
