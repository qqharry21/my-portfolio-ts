import pick from 'lodash/pick';

import { NextIntlClientProvider, useMessages } from 'next-intl';

import { ClientHeader } from './client-header';

export const Header = () => {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={pick(messages, 'nav')}>
      <ClientHeader />
    </NextIntlClientProvider>
  );
};
