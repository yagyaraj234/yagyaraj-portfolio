import { NextRequest } from "next/server"
import { convertHtmlToMarkdown } from "@/lib/markdown-negotiation"

const HTML_ACCEPT_TYPE = "text/html"
const MARKDOWN_CONTENT_TYPE = "text/markdown; charset=utf-8"

function getPageUrl(request: NextRequest): URL | null {
  const path = request.headers.get("x-markdown-page-path")

  if (!path || !path.startsWith("/")) {
    return null
  }

  const pageUrl = new URL(path, request.nextUrl.origin)

  if (pageUrl.origin !== request.nextUrl.origin) {
    return null
  }

  return pageUrl
}

export async function GET(request: NextRequest): Promise<Response> {
  const pageUrl = getPageUrl(request)

  if (!pageUrl) {
    return new Response("Missing or invalid page path.", { status: 400 })
  }

  const htmlResponse = await fetch(pageUrl, {
    headers: {
      Accept: HTML_ACCEPT_TYPE,
    },
  })
  const html = await htmlResponse.text()
  const { markdown, tokenCount } = convertHtmlToMarkdown(html)

  return new Response(markdown, {
    status: htmlResponse.status,
    headers: {
      "Content-Type": MARKDOWN_CONTENT_TYPE,
      Vary: "Accept",
      "x-markdown-tokens": tokenCount.toString(),
    },
  })
}
