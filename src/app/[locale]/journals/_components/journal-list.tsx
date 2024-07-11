import type { Journal } from '@/lib/types';

import { JournalItem } from './journal-item';

export const JournalList = ({ list }: { list: Journal[] }) => {
  return (
    <div className='auto-grid gap-10 [--min-col-size:18rem]'>
      {list.map((journal, i) => (
        <JournalItem
          key={i}
          journal={journal}
        />
      ))}
    </div>
  );
};
