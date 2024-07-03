import pick from 'lodash/pick';

import { NextIntlClientProvider, useMessages, useTranslations } from 'next-intl';

import { ContactForm } from '@/components/contact-form';

export const HomeContactSection = () => {
  const messages = useMessages();
  const t = useTranslations();
  return (
    <div className='relative bg-primary py-24 text-primary-foreground md:py-48'>
      <div className='container max-w-5xl'>
        <h3 className='select-none text-6xl'>{t('contact.title')}</h3>
        <p className='mt-2 text-balance text-base'>{t('contact.description')}</p>
        <div className='mt-8 w-full md:mt-16'>
          <NextIntlClientProvider messages={pick(messages, ['form', 'contact'])}>
            <ContactForm />
          </NextIntlClientProvider>
        </div>
      </div>
    </div>
  );
};
