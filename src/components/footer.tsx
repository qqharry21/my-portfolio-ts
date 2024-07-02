import { ContactLink } from './header/contact-link';
import { GithubIcon } from './icons/github-icon';
import { LinkedinIcon } from './icons/linkedin-icon';

export const Footer = () => {
  return (
    <footer className='container py-8 md:py-12'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <ul className='flex flex-wrap items-center justify-center gap-4'>
          <li>
            <ContactLink
              href='https://github.com/qqharry21'
              target='_blank'
              rel='noreferrer noopener'
            >
              <GithubIcon className='size-6 fill-current' />
            </ContactLink>
          </li>
          <li>
            <ContactLink
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
