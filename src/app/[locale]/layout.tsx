import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';

import type { Locale } from '@/lib/locales';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();
  return {
    title: {
      default: `${t('name')} - ${t('job_title')}`,
      template: `%s - ${t('job_title')}`,
    },
    description: 'A personal portfolio website built with Next.js and Tailwind CSS.',
    icons: {
      icon: './assets/logo.png',
    },
  };
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
