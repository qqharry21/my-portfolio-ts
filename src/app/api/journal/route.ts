import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { queryJournalTags, queryJournalWithFilters } from '@/lib/notion';
import type { JournalProperties, JournalRows } from '@/lib/types';

const database_id = process.env.NOTION_DATABASE_ID;

type DateRange =
  | 'this_week'
  | 'this_month'
  | 'before_3_months'
  | 'before_6_months'
  | 'before_last_year';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const date = searchParams.get('date') as DateRange;
    const tags = searchParams.get('tags') as string;
    const filterTags = tags ? decodeURIComponent(tags).split(',') : [];

    const [list_res, tag_res] = await Promise.all([
      queryJournalWithFilters(database_id, date, filterTags),
      queryJournalTags(database_id),
    ]);

    // @ts-ignore
    const journalTags = parseJournalTags(tag_res.properties as JournalProperties);

    // @ts-ignore
    const rows = list_res.results.map((row) => parseJournalData(row.properties as JournalRows));

    return NextResponse.json({ data: rows, tags: journalTags }, { status: 200 });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return new NextResponse(error.message, { status: 500 });
    }
    return new NextResponse('Failed to fetch journal list', { status: 500 });
  }
}

const parseJournalData = (data: JournalRows) => {
  return {
    title: data.title.title.map((item) => item.plain_text).join(' '),
    summary: data.summary.rich_text,
    date: data.date.date?.start ?? null,
    tags: data.tags.multi_select.map((tag) => tag.name),
  };
};

const parseJournalTags = (data: JournalProperties) => {
  return data.tags.multi_select.options.map((tag) => ({
    value: tag.name,
    label: tag.name,
  }));
};
