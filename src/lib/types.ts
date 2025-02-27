export type SubmitStatus = 'pending' | 'loading' | 'success' | 'error';

type ExternalLink = {
  name: string;
  href: string;
};
export interface Experience {
  id: string;
  companyName: string;
  href: string;
  image: string;
  alt: string;
  jobTitle: string;
  description: string;
  startDate: string;
  endDate: string | null;
  externalLink: ExternalLink[];
}

export interface IRoute {
  name: string;
  href: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  skills: string[];
  startDate: string;
  endDate: string | null;
  github?: string;
  website?: string;
}

export interface Option {
  value: string;
  label: string;
}

type Annotation = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
};

type TitleItem = {
  annotations: Annotation;
  plain_text: string;
  href: string | null;
};

type Title = Array<TitleItem>;

type RichTextItem = {
  annotations: Annotation;
  plain_text: string;
  href: string | null;
};

export type RichText = Array<RichTextItem>;

type NotionRow<T> = T & {
  id: string;
};

export interface Journal {
  title: string;
  summary: RichText;
  date: string;
  tags: string[];
}

export interface JournalRows {
  title: NotionRow<{ title: Title }>;
  summary: NotionRow<{ rich_text: RichText }>;
  date: NotionRow<{ date: { start: string } }>;
  tags: NotionRow<{ multi_select: Array<{ name: string }> }>;
}

export interface JournalProperties {
  title: NotionRow<{ title: Title }>;
  summary: NotionRow<{ rich_text: RichText }>;
  date: NotionRow<{ date: { start: string } }>;
  tags: NotionRow<{ multi_select: { options: Array<{ name: string }> } }>;
}
