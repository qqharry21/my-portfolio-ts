'use client';

import { ArrowRightIcon, XCircleIcon } from 'lucide-react';
import { useState } from 'react';

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

import { useRouteChangeWithParams } from '@/hooks/use-route-change-with-params';

import type { Option } from '@/lib/types';

export const JournalTagFilter = ({ title, options }: { title: string; options: Option[] }) => {
  const { targetParam, handleRouteChange, handleRouteReset } = useRouteChangeWithParams('tags');

  const [selectedValues, setSelectedValues] = useState<string[]>(
    targetParam ? targetParam.split(',') : []
  );

  const onCheckboxChange = (value: string) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
    setSelectedValues(newSelectedValues);
  };

  const onReset = () => {
    setSelectedValues([]);
    if (targetParam) {
      handleRouteReset();
    }
  };

  const onSubmit = () => {
    if (selectedValues.length === 0) {
      handleRouteReset();
    } else {
      handleRouteChange(selectedValues.join(','));
    }
  };

  return (
    <AccordionItem value='tag'>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>
        <div className='flex flex-wrap items-center gap-4'>
          {options.map((option) => (
            <Label
              className='flex items-center gap-2 font-normal'
              key={option.value}
            >
              <Checkbox
                id={option.value}
                value={option.value}
                checked={selectedValues.includes(option.value)}
                onCheckedChange={() => onCheckboxChange(option.value)}
              />
              {option.label}
            </Label>
          ))}
        </div>
        {selectedValues.length > 0 && (
          <div className='mt-4 flex items-center justify-end gap-2'>
            <Button
              size='sm'
              variant='destructive'
              onClick={onReset}
            >
              <XCircleIcon
                size={16}
                className='mr-2'
              />
              Reset
            </Button>
            <Button
              size='sm'
              onClick={onSubmit}
            >
              Submit
              <ArrowRightIcon
                size={16}
                className='ml-2'
              />
            </Button>
          </div>
        )}
      </AccordionContent>
    </AccordionItem>
  );
};
