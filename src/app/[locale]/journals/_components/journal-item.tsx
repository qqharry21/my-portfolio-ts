import { TiltCard } from '@/components/tilt-card';
import { Badge } from '@/components/ui/badge';

import { Link } from '@/lib/navigation';
import type { Journal } from '@/lib/types';

export const JournalItem = ({ journal }: { journal: Journal }) => {
  return (
    <TiltCard className='rounded-lg bg-gradient-to-br from-background to-muted/50 p-4 shadow-xl'>
      <Link
        href='/'
        className='block rounded-md bg-transparent p-4 shadow-xl transform-style-3d'
        style={{ transform: 'translateZ(60px)' }}
      >
        <div className='flex h-full flex-col gap-2'>
          <h3 className='truncate text-lg font-semibold'>{journal.title}</h3>
          <div className='flex items-center gap-2 capitalize'>
            {journal.tags.slice(0, 3).map((tag, i) => (
              <Badge key={i}>{tag}</Badge>
            ))}
            {journal.tags.length > 3 && <Badge variant='destructive'>More</Badge>}
          </div>
          <p className='my-4 line-clamp-3 text-sm'>{journal.description}</p>
          <div className='mt-auto text-sm text-muted-foreground'>
            <time dateTime='2023-01-02'>{journal.createAt}</time>
          </div>
        </div>
      </Link>
    </TiltCard>
  );
};
