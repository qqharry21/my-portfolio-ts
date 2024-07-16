import { Skeleton } from '@/components/ui/skeleton';

export const JournalSkeleton = () => {
  return (
    <div className='auto-grid gap-10 [--min-col-size:20rem]'>
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton
          className='h-[265px] w-full opacity-50'
          key={`journal-item-${index}`}
        />
      ))}
    </div>
  );
};
