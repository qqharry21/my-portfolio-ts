'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRightIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { contactSchema } from '@/lib/schemas';

import { Button } from './ui/button';
import { Form } from './ui/form';
import { InputField } from './ui/input-field';
import { TextareaField } from './ui/textarea-field';

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const result = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!result.ok) {
        throw new Error('Failed to send message');
      }
      form.reset();
    } catch (error) {}
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <InputField
            name='name'
            control={form.control}
            label='Your Name'
            className='col-span-1'
          />
          <InputField
            name='email'
            control={form.control}
            label='Email'
            className='col-span-1'
          />
          <TextareaField
            name='message'
            control={form.control}
            label='Message'
            className='md:col-span-2'
          />
        </div>
        <div className='mt-8 flex items-center justify-end'>
          <Button
            type='submit'
            variant='destructive'
            size='lg'
          >
            Send Message
            <ArrowRightIcon
              size={16}
              className='ml-4'
            />
          </Button>
        </div>
      </form>
    </Form>
  );
};
