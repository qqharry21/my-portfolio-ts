import { notFound } from 'next/navigation';

import { getRequestConfig } from 'next-intl/server';

import type { Locale } from './locales';
import { locales } from './locales';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: {
      ...(await import(`../../messages/${locale}.json`)).default,
      ...(await import(`../../messages/zod/${locale}.json`)).default,
      ...(await import(`../../messages/side_projects/${locale}.json`)).default,
      ...(await import(`../../messages/work_experience/${locale}.json`)).default,
    },
    formats: {
      dateTime: {
        short: {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        },
      },
    },
  };
});
