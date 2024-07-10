'use client';

import { GlobeIcon } from 'lucide-react';
import { useTransition } from 'react';

import { usePathname, useRouter } from '@/lib/navigation';

interface LocaleSwitcherToggleProps extends PropsWithChildren, WithClassName {
  currentLocale: string;
}

export const LocaleSwitcherToggle = ({ currentLocale, children }: LocaleSwitcherToggleProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  const onClick = () => {
    startTransition(() => {
      const nextLocale = currentLocale === 'en' ? 'zh-TW' : 'en';
      router.replace(pathname, {
        locale: nextLocale,
      });
    });
  };

  return (
    <button
      className='group inline-flex items-center justify-center gap-x-2 text-center text-primary hover:text-primary/80 dark:text-primary-foreground dark:hover:text-primary-foreground/80'
      disabled={isPending}
      onClick={onClick}
    >
      <GlobeIcon size={16} />
      {children}
    </button>
  );
};
