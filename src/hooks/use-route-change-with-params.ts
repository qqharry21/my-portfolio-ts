import { useCallback } from 'react';

import { useSearchParams } from 'next/navigation';

import { useRouter } from '@/lib/navigation';

interface RouteChangeParamsOptions {
  multiple?: boolean;
}

interface SingleValueReturn {
  targetParam: string | null;
  handleRouteChange: (value: string) => void;
  handleRouteReset: () => void;
}

interface MultipleValueReturn {
  targetParams: string[];
  handleRouteChange: (value: string) => void;
  handleRouteReset: () => void;
}

type UseRouteChangeWithParamsReturn<T extends RouteChangeParamsOptions> = T['multiple'] extends true
  ? MultipleValueReturn
  : SingleValueReturn;

export const useRouteChangeWithParams = <T extends RouteChangeParamsOptions>(
  key: string,
  options?: T
): UseRouteChangeWithParamsReturn<T> => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const targetParam = searchParams.get(key);
  const targetParams = searchParams.getAll(key);

  const handleRouteChange = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);

      if (options?.multiple) {
        const currentValues = params.getAll(key);
        const newValues = currentValues.includes(value)
          ? currentValues.filter((v) => v !== value)
          : [...currentValues, value];

        params.delete(key);

        if (newValues.length > 0) {
          newValues.forEach((v) => params.append(key, v));
        }
      } else {
        params.set(key, value);
      }

      router.replace('?' + params.toString());
    },
    [searchParams, key, options]
  );

  const handleRouteReset = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.delete(key);
    router.replace('?' + params.toString());
  }, [searchParams, key, options]);

  if (options?.multiple) {
    return {
      targetParams,
      handleRouteChange,
      handleRouteReset,
    } as UseRouteChangeWithParamsReturn<T>;
  }

  return { targetParam, handleRouteChange, handleRouteReset } as UseRouteChangeWithParamsReturn<T>;
};
