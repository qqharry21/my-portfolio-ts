import { z } from 'zod';

import { useTranslations } from 'next-intl';

import { makeZodI18nMap } from '@/lib/zod-error-map';

export const useI18nZodErrors = () => {
  const t = useTranslations();
  z.setErrorMap(makeZodI18nMap({ t }));
};
