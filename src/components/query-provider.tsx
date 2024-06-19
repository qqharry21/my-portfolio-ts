'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useMemo } from 'react';

import { queryConfig } from '@/lib/react-query';

export const QueryProvider = ({ children }: PropsWithChildren) => {
  const client = useMemo(() => new QueryClient({ defaultOptions: queryConfig }), []);

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
