export type SubmitStatus = 'pending' | 'loading' | 'success' | 'error';

export interface Experience {
  id: string;
  companyName: string;
  href: string;
  imageUrl: string;
  alt: string;
  jobTitle: string;
  description: string;
  startDate: string;
  endDate: string | null;
  externalLink: string | null;
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
