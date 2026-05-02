<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
>
  <xsl:output method="html" encoding="UTF-8" />

  <xsl:template match="/">
    <html lang="en">
      <head>
        <title><xsl:value-of select="/rss/channel/title" /></title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          :root {
            color-scheme: light dark;
            --bg: #f8fafc;
            --text: #18181b;
            --muted: #71717a;
            --line: #e4e4e7;
            --card: #ffffff;
            --accent: #1d6fa4;
            --accent-soft: #e0f2fe;
            --tag: #f4f4f5;
          }

          @media (prefers-color-scheme: dark) {
            :root {
              --bg: #111010;
              --text: #fafafa;
              --muted: #a1a1aa;
              --line: #27272a;
              --card: #18181b;
              --accent: #38bdf8;
              --accent-soft: #082f49;
              --tag: #27272a;
            }
          }

          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            background: var(--bg);
            color: var(--text);
            font-family:
              ui-sans-serif,
              system-ui,
              -apple-system,
              BlinkMacSystemFont,
              "Segoe UI",
              sans-serif;
            line-height: 1.6;
          }

          main {
            width: min(860px, calc(100% - 32px));
            margin: 0 auto;
            padding: 56px 0;
          }

          header {
            border-bottom: 1px solid var(--line);
            margin-bottom: 28px;
            padding-bottom: 28px;
          }

          h1 {
            font-size: clamp(2.25rem, 7vw, 5rem);
            line-height: 0.95;
            margin: 0 0 16px;
            letter-spacing: 0;
          }

          .description {
            max-width: 620px;
            color: var(--muted);
            font-size: 1.05rem;
            margin: 0 0 20px;
          }

          .feed-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--accent);
            font-weight: 700;
            text-decoration: none;
          }

          .feed-link:hover {
            text-decoration: underline;
            text-underline-offset: 4px;
          }

          .note {
            display: inline-block;
            margin-top: 18px;
            border: 1px solid var(--line);
            border-radius: 8px;
            background: var(--accent-soft);
            color: var(--text);
            padding: 10px 12px;
            font-size: 0.92rem;
          }

          article {
            border: 1px solid var(--line);
            border-radius: 8px;
            background: var(--card);
            padding: 22px;
          }

          article + article {
            margin-top: 16px;
          }

          h2 {
            font-size: clamp(1.25rem, 3vw, 1.65rem);
            line-height: 1.2;
            margin: 0 0 10px;
            letter-spacing: 0;
          }

          h2 a {
            color: var(--text);
            text-decoration: none;
          }

          h2 a:hover {
            color: var(--accent);
          }

          time,
          .author {
            color: var(--muted);
            font-size: 0.9rem;
          }

          article p {
            color: var(--muted);
            margin: 14px 0 0;
          }

          .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 16px;
          }

          .tag {
            border-radius: 999px;
            background: var(--tag);
            color: var(--muted);
            padding: 4px 10px;
            font-size: 0.78rem;
            font-weight: 700;
          }
        </style>
      </head>
      <body>
        <main>
          <header>
            <h1><xsl:value-of select="/rss/channel/title" /></h1>
            <p class="description">
              <xsl:value-of select="/rss/channel/description" />
            </p>
            <a class="feed-link">
              <xsl:attribute name="href">
                <xsl:value-of select="/rss/channel/link" />
              </xsl:attribute>
              Visit the blog
            </a>
            <div class="note">
              This is an RSS feed. Paste this URL into your feed reader to subscribe.
            </div>
          </header>

          <xsl:for-each select="/rss/channel/item">
            <article>
              <h2>
                <a>
                  <xsl:attribute name="href">
                    <xsl:value-of select="link" />
                  </xsl:attribute>
                  <xsl:value-of select="title" />
                </a>
              </h2>
              <time><xsl:value-of select="pubDate" /></time>
              <xsl:if test="dc:creator">
                <span class="author"> by <xsl:value-of select="dc:creator" /></span>
              </xsl:if>
              <p><xsl:value-of select="description" /></p>

              <xsl:if test="category">
                <div class="tags">
                  <xsl:for-each select="category">
                    <span class="tag"><xsl:value-of select="." /></span>
                  </xsl:for-each>
                </div>
              </xsl:if>
            </article>
          </xsl:for-each>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
