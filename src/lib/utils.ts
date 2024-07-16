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

/**
 * Creates a URLSearchParams object from a given searchParams object.
 *
 * @param searchParams - The searchParams object containing key-value pairs.
 * @returns A URLSearchParams object.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createURLSearchParams(searchParams: Record<string, any>): URLSearchParams {
  const params = new URLSearchParams();
  Object.entries(searchParams).forEach(([key, value]) => {
    if (value) {
      params.append(key, String(value));
    }
  });
  return params;
}

export function safeParseJson(input: string) {
  try {
    return JSON.parse(input);
  } catch (error) {
    console.error(error);
    try {
      return JSON.parse(`"${input}"`);
    } catch (innerError) {
      console.error(innerError);
      return input;
    }
  }
}
