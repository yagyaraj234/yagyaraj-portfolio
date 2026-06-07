import type { MDXComponents } from "mdx/types"
import type { ComponentType } from "react"

export interface ListItemMetadata {
  title: string
  description: string
  date?: string
  lastUpdated?: string
  linkedinUrl?: string
  videoUrl?: string
  tags?: string[]
}

export interface ListMarkdownModule {
  default: ComponentType<{ components?: MDXComponents }>
}
