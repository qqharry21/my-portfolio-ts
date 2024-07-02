import { ContactForm } from '@/components/contact-form';

export const HomeContactSection = () => {
  return (
    <div className='relative bg-primary py-24 text-primary-foreground md:py-48'>
      <div className='container max-w-xl'>
        <h3 className='select-none text-6xl'>Get in Touch</h3>
        <p className='mt-2 text-balance text-base'>
          My inbox is always open. so feel free to send a message to me and I will get back to you
          as soon as possible.
        </p>
        <div className='mt-8 w-full md:mt-16'>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
