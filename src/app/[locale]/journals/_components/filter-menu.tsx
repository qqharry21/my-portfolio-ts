import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export const FilterMenu = () => {
  return (
    <Accordion
      type='single'
      collapsible
      className='w-full text-primary lg:sticky lg:top-24'
    >
      <AccordionItem value='date'>
        <AccordionTrigger>Date</AccordionTrigger>
        <AccordionContent>
          <div className='grid gap-2'>
            <Label className='flex items-center gap-2 font-normal'>
              <Checkbox id='date-last-week' /> Last Week
            </Label>
            <Label className='flex items-center gap-2 font-normal'>
              <Checkbox id='date-last-month' /> Last Month
            </Label>
            <Label className='flex items-center gap-2 font-normal'>
              <Checkbox id='date-last-3-month' /> Last 3 Months
            </Label>
            <Label className='flex items-center gap-2 font-normal'>
              <Checkbox id='date-last-6-month' /> Last 6 Months
            </Label>
            <Label className='flex items-center gap-2 font-normal'>
              <Checkbox id='date-last-year' /> Last Year
            </Label>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='tag'>
        <AccordionTrigger>Tag</AccordionTrigger>
        <AccordionContent>
          <div className='grid gap-2'>
            <Label className='flex items-center gap-2 font-normal'>
              <Checkbox id='date-last-week' /> Last Week
            </Label>
            <Label className='flex items-center gap-2 font-normal'>
              <Checkbox id='date-last-month' /> Last Month
            </Label>
            <Label className='flex items-center gap-2 font-normal'>
              <Checkbox id='date-last-year' /> Last Year
            </Label>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
