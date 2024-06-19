'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
  onAnimationComplete?: () => void;
}

export default function TypingAnimation({
  text,
  duration = 200,
  className,
  onAnimationComplete,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(index));
        setIndex(index + 1);
      } else {
        clearInterval(typingEffect);
        onAnimationComplete?.();
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, index]);

  return (
    <h1 className={cn('text-center text-4xl font-bold drop-shadow-sm', className)}>
      {displayedText}
    </h1>
  );
}
