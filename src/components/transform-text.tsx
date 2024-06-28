'use client';

import { cn } from '@/lib/utils';

interface TransformTextProps extends WithClassName {
  first: string;
  last: string;
}

export const TransformText = ({ first, last, className }: TransformTextProps) => {
  return (
    <span className={cn('block h-6 overflow-hidden text-sm font-normal', className)}>
      <span className='block'>
        {Array.from(first).map((char, index) => (
          <span
            key={`transform-front-${index}`}
            className='relative inline-block -translate-y-0 whitespace-break-spaces transition-transform duration-500 ease-in-out group-hocus-visible:-translate-y-full'
            style={{ transitionDelay: `${index * 10}ms` }}
          >
            {char}
          </span>
        ))}
      </span>
      <span className='block'>
        {Array.from(last).map((char, index) => (
          <span
            key={`transform-back-${index}`}
            className='relative inline-block -translate-y-0 whitespace-break-spaces transition-transform duration-500 ease-in-out group-hocus-visible:-translate-y-full'
            style={{ transitionDelay: `${index * 10}ms` }}
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  );
};

// Usage
// Need to add 'group' class to the parent element

// Example
// <button className='group'>
//   <TransformText front='EN' back='中文' />
// </button>
