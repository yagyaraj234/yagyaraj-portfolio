import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const MARKDOWN_ACCEPT_TYPE = "text/markdown"

function acceptsMarkdown(request: NextRequest): boolean {
  return (
    request.headers
      .get("accept")
      ?.toLowerCase()
      .split(",")
      .some((entry) => entry.trim().startsWith(MARKDOWN_ACCEPT_TYPE)) ?? false
  )
}

function isPageRequest(pathname: string): boolean {
  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/_vercel/") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml") ||
    pathname.startsWith("/rss.xml")
  ) {
    return false
  }

  return !/\.[a-z0-9]+$/i.test(pathname)
}

export function proxy(request: NextRequest): NextResponse {
  const { pathname, search } = request.nextUrl

  if (!acceptsMarkdown(request) || !isPageRequest(pathname)) {
    return NextResponse.next()
  }

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-markdown-page-path", `${pathname}${search}`)

  const markdownUrl = request.nextUrl.clone()
  markdownUrl.pathname = "/api/markdown"
  markdownUrl.search = ""

  return NextResponse.rewrite(markdownUrl, {
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
