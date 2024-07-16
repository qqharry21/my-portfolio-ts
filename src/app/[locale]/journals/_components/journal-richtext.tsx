import type { RichText } from '@/lib/types';
import { cn } from '@/lib/utils';

export const JournalRichText = ({ richText }: { richText: RichText }) => {
  return (
    <p className='my-4 line-clamp-3 text-ellipsis text-balance text-sm'>
      {richText.map((item, i) => (
        <span
          key={i}
          className={cn(
            item.annotations.bold && 'font-semibold',
            item.annotations.italic && 'italic',
            item.annotations.underline && 'underline',
            item.annotations.strikethrough && 'line-through',
            item.annotations.code && 'rounded-md bg-muted px-1 text-primary'
          )}
        >
          {item.plain_text}
        </span>
      ))}
    </p>
  );
};
