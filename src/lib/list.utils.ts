import fs from "node:fs"
import path from "node:path"
import type { ListItemMetadata } from "@/types/list.types"

const LIST_CONTENT_DIR = path.join(process.cwd(), "src", "list-content")
const LIST_METADATA_PATTERN = /<!--\s*list:metadata\s*({[\s\S]*?})\s*-->/m

export function getAllListIds(): string[] {
  if (!fs.existsSync(LIST_CONTENT_DIR)) {
    return []
  }

  return fs
    .readdirSync(LIST_CONTENT_DIR)
    .filter((fileName: string) => fileName.endsWith(".md"))
    .map((fileName: string) => fileName.replace(/\.md$/, ""))
}

export function getListItemReadTime(id: string): string {
  const filePath = path.join(LIST_CONTENT_DIR, `${id}.md`)

  if (!fs.existsSync(filePath)) {
    return ""
  }

  const content = fs.readFileSync(filePath, "utf8")
  const contentWithoutMetadata = content.replace(LIST_METADATA_PATTERN, "")
  const words = contentWithoutMetadata
    .trim()
    .split(/\s+/)
    .filter(Boolean).length

  if (words === 0) {
    return ""
  }

  return `${Math.ceil(words / 200)} min read`
}

export function getListItemMetadata(id: string): ListItemMetadata | null {
  const filePath = path.join(LIST_CONTENT_DIR, `${id}.md`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const content = fs.readFileSync(filePath, "utf8")
  const metadataMatch = content.match(LIST_METADATA_PATTERN)

  if (!metadataMatch) {
    return null
  }

  try {
    const parsedMetadata: unknown = JSON.parse(metadataMatch[1])

    if (!isListItemMetadata(parsedMetadata)) {
      return null
    }

    return parsedMetadata
  } catch {
    return null
  }
}

export function formatListDate(date?: string): string {
  if (!date) {
    return ""
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date))
}

function isListItemMetadata(value: unknown): value is ListItemMetadata {
  if (!value || typeof value !== "object") {
    return false
  }

  const metadata = value as Record<string, unknown>
  const hasRequiredFields =
    typeof metadata.title === "string" &&
    typeof metadata.description === "string"

  const hasValidOptionalFields =
    (metadata.date === undefined || typeof metadata.date === "string") &&
    (metadata.lastUpdated === undefined ||
      typeof metadata.lastUpdated === "string") &&
    (metadata.linkedinUrl === undefined ||
      typeof metadata.linkedinUrl === "string") &&
    (metadata.videoUrl === undefined ||
      typeof metadata.videoUrl === "string") &&
    (metadata.tags === undefined || isStringArray(metadata.tags))

  return hasRequiredFields && hasValidOptionalFields
}

function isStringArray(value: unknown): value is string[] {
  return (
    Array.isArray(value) &&
    value.every((item: unknown) => typeof item === "string")
  )
}
