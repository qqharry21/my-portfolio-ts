import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';

export const JournalError = ({ onRefetch }: { onRefetch: () => void }) => {
  const t = useTranslations();
  return (
    <div className='grid h-80 place-items-center p-4'>
      <div className='text-center'>
        <h2 className='mb-6 text-balance text-3xl font-semibold'>{t('journal.error.title')}</h2>
        <Button onClick={onRefetch}>{t('journal.error.button_text')}</Button>
      </div>
    </div>
  );
};
