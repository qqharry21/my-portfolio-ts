import { ContactLink } from './contact-link';
import { GithubIcon, LinkedinIcon } from './icons';

export const Footer = () => {
  return (
    <footer className='bg-primary py-8 text-primary-foreground md:py-12'>
      <div className='container flex flex-col items-center justify-center gap-4'>
        <ul className='flex flex-wrap items-center justify-center gap-4'>
          <li>
            <ContactLink
              theme='light'
              href='https://github.com/qqharry21'
              target='_blank'
              rel='noreferrer noopener'
            >
              <GithubIcon className='size-6 fill-current' />
            </ContactLink>
          </li>
          <li>
            <ContactLink
              theme='light'
              href='https://www.linkedin.com/in/harry-chen-21/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <LinkedinIcon className='size-6 fill-current' />
            </ContactLink>
          </li>
        </ul>
        <p className='text-balance text-center text-sm'>© 2024 Harry Chen. All rights reserved.</p>
      </div>
    </footer>
  );
};
