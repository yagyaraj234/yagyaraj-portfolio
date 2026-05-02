import { USER } from "@/data/user.data"
import { getAllPostsMetadata, type PostMetadata } from "@/lib/mdx-utils"

export const dynamic = "force-static"

const RSS_CONTENT_TYPE = "application/rss+xml; charset=utf-8"

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

function formatRssDate(date?: string): string {
  const parsedDate = date ? new Date(date) : new Date()

  if (Number.isNaN(parsedDate.getTime())) {
    return new Date().toUTCString()
  }

  return parsedDate.toUTCString()
}

function getPostUrl(post: PostMetadata): string {
  return new URL(`/blog/${post.slug}`, USER.website).toString()
}

function renderRssItem(post: PostMetadata): string {
  const postUrl = getPostUrl(post)
  const title = escapeXml(post.title)
  const description = escapeXml(post.summary ?? "")
  const categories = post.tags
    ?.filter((tag) => tag.trim().length > 0)
    ?.map((tag) => `<category>${escapeXml(tag)}</category>`)
    .join("")

  return `
    <item>
      <title>${title}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description>${description}</description>
      <pubDate>${formatRssDate(post.date)}</pubDate>
      ${post.author ? `<dc:creator>${escapeXml(post.author)}</dc:creator>` : ""}
      ${categories ?? ""}
    </item>`
}

function renderRssFeed(posts: PostMetadata[]): string {
  const siteTitle = `${USER.displayName} Blog`
  const siteDescription =
    "Thoughts on software engineering, web development, and building products."
  const feedUrl = new URL("/rss.xml", USER.website).toString()
  const blogUrl = new URL("/blog", USER.website).toString()
  const lastBuildDate = formatRssDate(posts[0]?.lastUpdated ?? posts[0]?.date)

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/rss.xsl"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(siteTitle)}</title>
    <link>${blogUrl}</link>
    <description>${escapeXml(siteDescription)}</description>
    <language>en-IN</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    ${posts.map(renderRssItem).join("")}
  </channel>
</rss>`
}

export function GET(): Response {
  const posts = getAllPostsMetadata()
  const rssFeed = renderRssFeed(posts)

  return new Response(rssFeed, {
    headers: {
      "Content-Type": RSS_CONTENT_TYPE,
    },
  })
}
