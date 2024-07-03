'use client';

import { AnimatePresence, m } from 'framer-motion';
import { ArrowRightIcon, CheckIcon, LoaderIcon, XIcon } from 'lucide-react';
import React from 'react';

import type { SubmitStatus } from '@/lib/types';
import { cn } from '@/lib/utils';

import { Button } from './button';

const MotionButton = m(Button);

interface SubmitButtonProps extends React.ComponentPropsWithoutRef<typeof MotionButton> {
  status: SubmitStatus;
  texts?: Partial<Record<SubmitStatus, string>>;
  icons?: Partial<Record<SubmitStatus, React.ReactNode>>;
}

export const SubmitButton = React.forwardRef<HTMLButtonElement, SubmitButtonProps>(
  ({ status, texts, icons, className, ...props }, ref) => {
    const statusTexts = {
      pending: 'Submit',
      loading: 'Submitting',
      success: 'Submit Successful',
      error: 'Submit Failed',
      ...texts,
    };

    const statusIcons = {
      pending: <ArrowRightIcon size={16} />,
      loading: (
        <LoaderIcon
          size={16}
          className='animate-spin'
        />
      ),
      success: <CheckIcon size={16} />,
      error: <XIcon size={16} />,
      ...icons,
    };

    return (
      <MotionButton
        ref={ref}
        type='submit'
        className={cn(
          {
            'cursor-progress': status === 'loading',
            'bg-success text-success-foreground !opacity-100': status === 'success',
            'bg-error text-error-foreground !opacity-100': status === 'error',
          },
          className
        )}
        {...props}
      >
        <AnimatePresence
          mode='wait'
          initial={false}
        >
          <m.span
            key={status}
            initial={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 10 }}
            transition={{ duration: 0.3 }}
          >
            {statusTexts[status]}
          </m.span>
        </AnimatePresence>
        <AnimatePresence
          mode='wait'
          initial={false}
        >
          <m.span
            className='ml-2'
            key={status}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {statusIcons[status]}
          </m.span>
        </AnimatePresence>
      </MotionButton>
    );
  }
);
