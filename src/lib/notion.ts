import { Client } from '@notionhq/client';
import { formatISO, startOfMonth, startOfWeek, subMonths, subYears } from 'date-fns';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

type DateRange =
  | 'this_week'
  | 'this_month'
  | 'before_3_months'
  | 'before_6_months'
  | 'before_last_year';
export const queryJournalWithFilters = async (
  database_id: string,
  dateRange: DateRange,
  multiSelectValues: string[]
) => {
  try {
    const dateRangeFilter = getFilterForDateRange('date', dateRange);
    const multiSelectFilter = getFilterForMultiSelect('tags', multiSelectValues);
    const filter = {
      and: [dateRangeFilter, multiSelectFilter],
    };
    const res = notion.databases.query({
      database_id,
      filter,
    });

    return res;
  } catch (error) {
    throw new Error('Failed to fetch journal list');
  }
};

export const queryJournalTags = async (database_id: string) => {
  try {
    const res = notion.databases.retrieve({ database_id });
    return res;
  } catch (error) {
    throw new Error('Failed to fetch journal tags');
  }
};

const getFilterForDateRange = (property: string, range: DateRange) => {
  const today = new Date();
  let startDate: string = formatISO(new Date(1970, 0, 1));
  let endDate: string;

  switch (range) {
    case 'this_week':
      startDate = formatISO(startOfWeek(today));
      endDate = formatISO(today);
      break;
    case 'this_month':
      startDate = formatISO(startOfMonth(today));
      endDate = formatISO(today);
      break;
    case 'before_3_months':
      endDate = formatISO(subMonths(today, 3));
      break;
    case 'before_6_months':
      endDate = formatISO(subMonths(today, 6));
      break;
    case 'before_last_year':
      endDate = formatISO(subYears(today, 1));
      break;
    default:
      return {
        and: [],
      };
  }

  return {
    and: [
      {
        property,
        date: {
          on_or_after: startDate,
        },
      },
      {
        property,
        date: {
          on_or_before: endDate,
        },
      },
    ],
  };
};

const getFilterForMultiSelect = (property: string, selectValues: string[]) => {
  return {
    or: selectValues.map((value) => ({
      property,
      multi_select: {
        contains: value,
      },
    })),
  };
};
