import type { Control, FieldPath, FieldValues } from 'react-hook-form';

import { cn } from '@/lib/utils';

import { FormControl, FormField, FormItem, FormLabel } from './form';
import { Textarea } from './textarea';

interface InputFieldProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>
  extends WithClassName {
  name: TName;
  control: Control<TFieldValues>;
  label: string;
}

export const TextareaField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  control,
  label,
  className,
}: InputFieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className={cn('relative z-0 text-current', className)}>
          <FormControl>
            <Textarea
              className='peer relative block min-h-0 w-full appearance-none rounded-none border-0 border-b-2 border-primary-foreground/80 bg-transparent px-0 py-2.5 text-sm transition-colors duration-300 focus:border-primary-foreground focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0'
              placeholder=' '
              {...field}
            />
          </FormControl>
          <FormLabel className='absolute top-0 -z-10 origin-[0] text-sm transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75'>
            {label}
          </FormLabel>
        </FormItem>
      )}
    />
  );
};
