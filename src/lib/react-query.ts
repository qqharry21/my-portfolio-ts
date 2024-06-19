import type { DefaultOptions } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import { cache } from 'react';

export const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
  },
};

export const DEFAULT_STALE_TIME = 5 * 60 * 1000; // 5 minutes

export const DEFAULT_CACHE_TIME = 10 * 60 * 1000; // 10 minutes

export const getQueryClient = cache(() => new QueryClient({ defaultOptions: queryConfig }));
