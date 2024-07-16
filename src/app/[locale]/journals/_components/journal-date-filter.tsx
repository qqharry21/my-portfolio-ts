'use client';

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { useRouteChangeWithParams } from '@/hooks/use-route-change-with-params';

import type { Option } from '@/lib/types';

export const JournalDateFilter = ({ title, options }: { title: string; options: Option[] }) => {
  const { targetParam, handleRouteChange, handleRouteReset } = useRouteChangeWithParams('date');

  return (
    <AccordionItem value='date'>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>
        <RadioGroup
          defaultValue={targetParam ?? 'all'}
          onValueChange={(value) => {
            if (value === 'all') {
              handleRouteReset();
            } else {
              handleRouteChange(value);
            }
          }}
        >
          {options.map((option) => (
            <div
              className='flex items-center space-x-2'
              key={option.value}
            >
              <RadioGroupItem
                value={option.value}
                id={option.value}
              />
              <Label
                htmlFor={option.value}
                className='cursor-pointer'
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </AccordionContent>
    </AccordionItem>
  );
};
