'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { useTranslations } from 'next-intl';

import { useI18nZodErrors } from '@/hooks/use-i18n-zod-errors';

import { contactSchema } from '@/lib/schemas';
import type { SubmitStatus } from '@/lib/types';

import { Form } from './ui/form';
import { InputField } from './ui/input-field';
import { SubmitButton } from './ui/submit-button';
import { TextareaField } from './ui/textarea-field';

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  useI18nZodErrors();
  const t = useTranslations();

  const [status, setStatus] = useState<SubmitStatus>('pending');
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
      setStatus('loading');
      await new Promise((resolve) => setTimeout(resolve, 3000));
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
      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('pending'), 3000);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <InputField
            name='name'
            control={form.control}
            label={t('form.name.label')}
            className='col-span-1'
          />
          <InputField
            name='email'
            control={form.control}
            label={t('form.email.label')}
            className='col-span-1'
          />
          <TextareaField
            name='message'
            control={form.control}
            label={t('form.message.label')}
            className='md:col-span-2'
          />
        </div>
        <div className='mt-8 flex w-full items-center justify-center sm:justify-end'>
          <SubmitButton
            variant='destructive'
            className='min-w-72 max-sm:w-full'
            status={status}
            disabled={status !== 'pending'}
            size='lg'
            texts={{
              pending: t('contact.submit.pending'),
              loading: t('contact.submit.loading'),
              success: t('contact.submit.success'),
              error: t('contact.submit.error'),
            }}
          />
        </div>
      </form>
    </Form>
  );
};
