import type { ImageProps } from 'next/image';
import Image from 'next/image';

import { cn } from '@/lib/utils';

type ThemeImageProps = Omit<ImageProps, 'src' | 'loading'> & {
  srcLight: string;
  srcDark: string;
};

export const ThemeImage = (props: ThemeImageProps) => {
  const { srcLight, srcDark, alt, ...rest } = props;

  return (
    <>
      <Image
        {...rest}
        src={srcLight}
        alt={alt}
        className={cn(rest.className, 'dark:hidden')}
      />
      <Image
        {...rest}
        src={srcDark}
        alt={alt}
        className={cn(rest.className, 'light:hidden')}
      />
    </>
  );
};
