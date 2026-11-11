export type PostMeta = {
  title: string
  author?: string
  date?: string // ISO date
  lastUpdated?: string // ISO date
  tags?: string[]
  summary?: string
  ogImage?: string
}

export type PostIndexItem = {
  slug: string
  metadata: PostMeta
  readingTime: string
  // Local path of the post's cover image, when the file exists in /public
  cover: string | undefined
}
