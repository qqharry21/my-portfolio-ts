import { TiltCard } from '@/components/tilt-card';
import { Badge } from '@/components/ui/badge';

import { Link } from '@/lib/navigation';
import type { Journal } from '@/lib/types';

import { JournalRichText } from './journal-richtext';

export const JournalItem = ({ journal }: { journal: Journal }) => {
  return (
    <TiltCard className='h-[265px] w-full rounded-lg bg-gradient-to-br from-background to-muted/50 p-4 shadow-xl'>
      <Link
        href='/'
        className='block h-full rounded-md bg-transparent p-4 shadow-xl transform-style-3d'
        style={{ transform: 'translateZ(60px)' }}
      >
        <div className='flex flex-col gap-2'>
          <div className='line-clamp-1 text-lg font-semibold'>{journal.title}</div>
          <div className='flex flex-wrap items-center gap-2 capitalize'>
            {journal.tags.slice(0, 2).map((tag, i) => (
              <Badge key={i}>{tag}</Badge>
            ))}
            {journal.tags.length > 2 && <Badge variant='destructive'>More</Badge>}
          </div>
          <JournalRichText richText={journal.summary} />
          <div className='mt-auto text-sm text-muted-foreground'>
            {/* <time dateTime='2023-01-02'>{journal.createAt}</time> */}
          </div>
        </div>
      </Link>
    </TiltCard>
  );
};
