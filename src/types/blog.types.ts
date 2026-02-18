export type PostMeta = {
  title: string;
  author?: string;
  date?: string; // ISO date
  lastUpdated?: string; // ISO date
  tags?: string[];
  summary?: string;
};

export type PostIndexItem = {
  slug: string;
  metadata: PostMeta;
  readingTime: string;
};
