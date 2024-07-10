import type { Metadata } from 'next';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { PreLoader } from '@/components/pre-loader';

import type { Locale } from '@/lib/locales';

import { notoSans, spaceGrotesk } from '../../styles/fonts';

import { Providers } from './providers';

import '../../styles/globals.css';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();
  return {
    title: {
      default: `${t('personal_info.name')} - ${t('personal_info.job_title')}`,
      template: `%s - ${t('personal_info.job_title')}`,
    },
    description: 'A personal portfolio website built with Next.js and Tailwind CSS.',
    icons: {
      icon: './assets/logo.webp',
    },
  };
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: PropsWithChildren & {
  params: { locale: Locale };
}) {
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
    >
      <body className={`${notoSans.variable} ${spaceGrotesk.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <PreLoader />
            <Header />
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
