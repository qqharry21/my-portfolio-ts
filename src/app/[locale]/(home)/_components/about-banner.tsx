import Link from 'next/link';

export const AboutBanner = () => {
  return (
    <div className='relative py-24 md:py-32'>
      <div className='container flex max-w-md flex-col items-center justify-center gap-8 md:max-w-4xl md:gap-16 xl:max-w-7xl'>
        <h2 className='hidden'>About Me</h2>
        <div className='flex w-full flex-wrap items-start gap-16 md:justify-between md:gap-x-24'>
          <div className='select-none whitespace-nowrap tracking-widest'>
            <div className='text-2xl opacity-60'>Love to </div>
            <div className='text-4xl first-letter:text-5xl first-letter:font-medium'>Code</div>
            <div className='text-4xl first-letter:text-5xl first-letter:font-medium'>Learn</div>
            <div className='text-4xl first-letter:text-5xl first-letter:font-medium'>Share</div>
            <div className='text-4xl first-letter:text-5xl first-letter:font-medium'>
              Build things
            </div>
          </div>
          <div className='flex-1 whitespace-pre-wrap text-left text-lg max-md:text-balance md:max-w-xl xl:max-w-2xl'>
            I&apos;m graduated from the{' '}
            <Link
              href='http://www.csie.tku.edu.tw'
              className='underline'
              prefetch={false}
            >
              Tamkang University
            </Link>{' '}
            with a bachelor&apos;s degree in Computer Science and Information Engineering. <br />
            <br />I am not only proficient in frontend technologies but also have experience in
            backend development. I can quickly understand and solve problems encountered in
            projects. <br />
            <br />
            And also have strong interest in new technologies and tools, which allows me to rapidly
            iterate and apply them to company projects. I remain calm and efficient even in
            high-pressure environments.
          </div>
        </div>
      </div>
    </div>
  );
};
