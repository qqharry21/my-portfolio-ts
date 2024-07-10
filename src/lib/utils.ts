import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import type { FormatOptions } from 'date-fns/format';
import { format } from 'date-fns/format';
import { zhTW } from 'date-fns/locale/zh-TW';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (
  date: Date | number | string,
  formatString = 'PPPP',
  options: FormatOptions = { locale: zhTW, weekStartsOn: 1, useAdditionalWeekYearTokens: true }
) => {
  return format(date, formatString, {
    ...options,
  });
};

export const throttle = <T extends (...args: any[]) => void>(fn: T, delay = 500) => {
  let timer: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timer) return;
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  };
};
