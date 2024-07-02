import type { z } from 'zod';

import type { contactSchema } from '@/lib/schemas';

type ContactFormValues = z.infer<typeof contactSchema>;

export const ResponseNoticeEmail = (props: ContactFormValues & { date: string }) => {
  return (
    <div
      style={{
        maxWidth: '32rem',
        margin: 'auto',
        padding: '1.5rem',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        color: '#4a5568',
      }}
    >
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        New Contact Form Submission
      </h2>
      <div style={{ marginBottom: '1rem' }}>
        <strong style={{ display: 'block' }}>Name:</strong>
        <p>{props.name}</p>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <strong style={{ display: 'block' }}>Date:</strong>
        <p>{props.date}</p>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <strong style={{ display: 'block' }}>Message:</strong>
        <p>{props.message}</p>
      </div>
    </div>
  );
};
