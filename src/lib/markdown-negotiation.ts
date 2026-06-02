export interface MarkdownConversionResult {
  markdown: string
  tokenCount: number
}

interface PageMetadata {
  title?: string
  description?: string
  image?: string
}

interface MetaTag {
  content?: string
  name?: string
  property?: string
}

const BLOCK_TAGS = [
  "article",
  "aside",
  "blockquote",
  "br",
  "dd",
  "div",
  "dl",
  "dt",
  "figcaption",
  "figure",
  "footer",
  "form",
  "header",
  "hr",
  "li",
  "main",
  "nav",
  "ol",
  "p",
  "pre",
  "section",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "tr",
  "ul",
]

function decodeHtml(value: string): string {
  const namedEntities: Record<string, string> = {
    amp: "&",
    apos: "'",
    copy: "(c)",
    gt: ">",
    ldquo: '"',
    lsquo: "'",
    lt: "<",
    nbsp: " ",
    ndash: "-",
    quot: '"',
    rdquo: '"',
    rsquo: "'",
  }

  return value.replace(
    /&(#x?[0-9a-f]+|[a-z]+);/gi,
    (entity: string, name: string): string => {
      if (name.startsWith("#x")) {
        return String.fromCodePoint(Number.parseInt(name.slice(2), 16))
      }

      if (name.startsWith("#")) {
        return String.fromCodePoint(Number.parseInt(name.slice(1), 10))
      }

      return namedEntities[name.toLowerCase()] ?? entity
    }
  )
}

function getAttribute(tag: string, attributeName: string): string | undefined {
  const pattern = new RegExp(`${attributeName}\\s*=\\s*["']([^"']+)["']`, "i")
  return tag.match(pattern)?.[1]
}

function extractMetaTags(html: string): MetaTag[] {
  return Array.from(html.matchAll(/<meta\b([^>]*)>/gi)).map((match) => {
    const attributes = match[1] ?? ""

    return {
      content: getAttribute(attributes, "content"),
      name: getAttribute(attributes, "name")?.toLowerCase(),
      property: getAttribute(attributes, "property")?.toLowerCase(),
    }
  })
}

function findMetaContent(
  metaTags: MetaTag[],
  key: "name" | "property",
  value: string
): string | undefined {
  const content = metaTags.find((metaTag) => metaTag[key] === value)?.content

  return content ? decodeHtml(content.trim()) : undefined
}

function extractMetadata(html: string): PageMetadata {
  const titleTag = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]
  const metaTags = extractMetaTags(html)

  return {
    title:
      findMetaContent(metaTags, "name", "title") ??
      findMetaContent(metaTags, "property", "og:title") ??
      (titleTag ? decodeHtml(stripTags(titleTag).trim()) : undefined),
    description:
      findMetaContent(metaTags, "name", "description") ??
      findMetaContent(metaTags, "property", "og:description"),
    image: findMetaContent(metaTags, "property", "og:image"),
  }
}

function extractJsonLd(html: string): string[] {
  const scripts = html.matchAll(
    /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  )

  return Array.from(scripts)
    .map((match) => match[1]?.trim())
    .filter((script): script is string => Boolean(script))
}

function extractBody(html: string): string {
  return html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html
}

function stripTags(value: string): string {
  return value.replace(/<[^>]+>/g, "")
}

function convertLinks(html: string): string {
  return html.replace(
    /<a\b([^>]*)>([\s\S]*?)<\/a>/gi,
    (match: string, attributes: string, content: string): string => {
      const label = normalizeText(stripTags(content))
      const href = getAttribute(attributes, "href")

      if (!label) {
        return ""
      }

      return href ? `[${label}](${decodeHtml(href)})` : label
    }
  )
}

function convertImages(html: string): string {
  return html.replace(
    /<img\b([^>]*)>/gi,
    (_match: string, attributes: string): string => {
      const src = getAttribute(attributes, "src")
      const alt = getAttribute(attributes, "alt") ?? ""

      return src ? `![${decodeHtml(alt)}](${decodeHtml(src)})` : ""
    }
  )
}

function convertHeadings(html: string): string {
  return html.replace(
    /<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi,
    (_match: string, level: string, content: string): string => {
      const text = normalizeText(stripTags(content))
      return text ? `\n\n${"#".repeat(Number(level))} ${text}\n\n` : "\n\n"
    }
  )
}

function convertInlineFormatting(html: string): string {
  return html
    .replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/gi, "**$2**")
    .replace(/<(em|i)\b[^>]*>([\s\S]*?)<\/\1>/gi, "_$2_")
    .replace(/<code\b[^>]*>([\s\S]*?)<\/code>/gi, "`$1`")
}

function convertCodeBlocks(html: string): string {
  return html.replace(
    /<pre\b[^>]*>([\s\S]*?)<\/pre>/gi,
    (_match: string, content: string): string => {
      const code = decodeHtml(stripTags(content)).trim()
      return code ? `\n\n\`\`\`\n${code}\n\`\`\`\n\n` : "\n\n"
    }
  )
}

function normalizeText(value: string): string {
  return decodeHtml(value)
    .replace(/\s+/g, " ")
    .replace(/\s+([.,;:!?])/g, "$1")
    .trim()
}

function normalizeMarkdown(value: string): string {
  return value
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

function htmlToMarkdownBody(html: string): string {
  let markdown = extractBody(html)

  markdown = markdown
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<svg[\s\S]*?<\/svg>/gi, "")

  markdown = convertCodeBlocks(markdown)
  markdown = convertImages(markdown)
  markdown = convertLinks(markdown)
  markdown = convertHeadings(markdown)
  markdown = convertInlineFormatting(markdown)

  for (const tag of BLOCK_TAGS) {
    const openingTag = new RegExp(`<${tag}\\b[^>]*>`, "gi")
    const closingTag = new RegExp(`</${tag}>`, "gi")
    markdown = markdown.replace(openingTag, "\n\n").replace(closingTag, "\n\n")
  }

  markdown = stripTags(markdown)
  markdown = decodeHtml(markdown)

  return normalizeMarkdown(markdown)
}

function frontmatter(metadata: PageMetadata): string {
  const rows = [
    metadata.title ? `title: ${metadata.title}` : undefined,
    metadata.description ? `description: ${metadata.description}` : undefined,
    metadata.image ? `image: ${metadata.image}` : undefined,
  ].filter((row): row is string => Boolean(row))

  return rows.length ? `---\n${rows.join("\n")}\n---` : ""
}

function estimateTokenCount(markdown: string): number {
  return Math.max(
    1,
    Math.ceil(markdown.trim().split(/\s+/).filter(Boolean).length * 1.3)
  )
}

export function convertHtmlToMarkdown(html: string): MarkdownConversionResult {
  const metadata = extractMetadata(html)
  const metadataBlock = frontmatter(metadata)
  const body = htmlToMarkdownBody(html)
  const jsonLd = extractJsonLd(html)
  const structuredData =
    jsonLd.length > 0 ? `\n\n\`\`\`json\n${jsonLd.join("\n")}\n\`\`\`` : ""
  const markdown = normalizeMarkdown(
    [metadataBlock, body].filter(Boolean).join("\n\n") + structuredData
  )

  return {
    markdown,
    tokenCount: estimateTokenCount(markdown),
  }
}
