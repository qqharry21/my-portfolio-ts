import pick from 'lodash/pick';

import type { NamespaceKeys, NestedKeyOf } from 'next-intl';
import { NextIntlClientProvider, useMessages } from 'next-intl';

export const IntlClientProvider = <
  NestedKey extends NamespaceKeys<IntlMessages, NestedKeyOf<IntlMessages>> = never,
>({
  target,
  children,
}: PropsWithChildren & { target: NestedKey | NestedKey[] }) => {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={pick(messages, target)}>{children}</NextIntlClientProvider>
  );
};
