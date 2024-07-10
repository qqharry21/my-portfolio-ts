'use client';

import { useEffect } from 'react';

import { useTheme } from 'next-themes';

export const ThemeChanger = ({
  theme,
  children,
}: PropsWithChildren & {
  theme: 'light' | 'dark';
}) => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(theme);
  }, []);

  return <>{children}</>;
};
