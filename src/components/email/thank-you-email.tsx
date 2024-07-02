import type { z } from 'zod';

import type { contactSchema } from '@/lib/schemas';

type ContactFormValues = z.infer<typeof contactSchema>;
export const ThankYouEmail = (props: ContactFormValues & { date: string }) => {
  return (
    <div
      style={{
        margin: 'auto',
        maxWidth: '32rem',
        borderRadius: '0.5rem',
        backgroundColor: 'white',
        padding: '1.5rem',
        color: '#4a5568',
        fontSize: '1rem',
      }}
    >
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        I have received your message
      </h2>
      <p style={{ marginBottom: '1rem' }}>Dear {props.name},</p>
      <p style={{ marginBottom: '1rem' }}>
        Thank you for contacting me. I have received your message and will get back to you asap.
      </p>
      <p>
        If you have any additional information or questions, please do not hesitate to reply to this
        email.
      </p>
      <div style={{ marginTop: '1.5rem' }}>
        <p style={{ margin: 0, padding: 0 }}>Best regards,</p>
        <p style={{ margin: 0, padding: 0 }}>Harry Chen</p>
        <p style={{ margin: 0, padding: 0 }}>tel: 0929882333</p>
        <a
          href='https://www.linkedin.com/in/harry-chen-21/'
          style={{ color: '#3182ce', margin: 0, padding: 0 }}
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};
