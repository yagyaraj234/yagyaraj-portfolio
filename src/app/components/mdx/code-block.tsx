import { codeToTokens, type TokensResult, type BundledLanguage } from "shiki"
import type { ReactElement } from "react"
import { cn } from "@/lib/utils"
import { CopyButton } from "./copy-button"
import { format } from "prettier/standalone"
import parserBabel from "prettier/plugins/babel"
import parserEstree from "prettier/plugins/estree"
import parserHtml from "prettier/plugins/html"
import parserCss from "prettier/plugins/postcss"
import parserTypescript from "prettier/plugins/typescript"
import parserYaml from "prettier/plugins/yaml"

export type Token = TokensResult["tokens"][number][number]

// github-light-default comments (#6E7781) read 4.4:1 on the #fafafa block; darken to 6:1.
const COLOR_OVERRIDES: Record<string, string> = { "#6E7781": "#57606A" }

export async function getTokens(
  code: string,
  lang: BundledLanguage,
  theme: string
): Promise<Token[][]> {
  const result = await codeToTokens(code, {
    lang,
    theme,
  })
  return result.tokens.map((line) =>
    line.map((token) => {
      const color = token.color && COLOR_OVERRIDES[token.color]
      return color ? { ...token, color } : token
    })
  )
}

type Diff = {
  additions?: number[]
  deletions?: number[]
}

async function formatCode(code: string, lang: string) {
  try {
    const parserMap: Record<string, string> = {
      javascript: "babel",
      js: "babel",
      jsx: "babel",
      typescript: "typescript",
      ts: "typescript",
      tsx: "typescript",
      css: "css",
      scss: "css",
      less: "css",
      html: "html",
      json: "json",
      yaml: "yaml",
      yml: "yaml",
      markdown: "markdown",
      md: "markdown",
      mdx: "markdown",
    }

    const parser = parserMap[lang.toLowerCase()]
    if (!parser) return code

    return await format(code, {
      parser,
      plugins: [
        parserBabel,
        parserEstree,
        parserHtml,
        parserCss,
        parserTypescript,
        parserYaml,
      ],
      semi: true,
      singleQuote: false,
    })
  } catch {
    // Fallback to original code if formatting fails
    return code
  }
}

export async function CodeBlockRaw({
  children,
  lang,
  theme = "github-light",
  diff,
  highlight,
}: {
  children: string
  lang: BundledLanguage
  theme?: string
  diff?: Diff
  highlight?: number[]
}) {
  const tokens = await getTokens(children.trim(), lang, theme)
  return (
    <>
      {tokens.map((line, index) => {
        const isHighlighted = highlight?.includes(index) ?? false
        const isAddition = diff?.additions?.includes(index) ?? false
        const isDeletion = diff?.deletions?.includes(index) ?? false
        return (
          <div
            className={cn(
              "relative -mx-4 min-h-[21px] px-4",
              (isAddition || isHighlighted) && "bg-blue-500/10",
              isDeletion && "bg-red-500/10"
            )}
            key={index}
          >
            {(isAddition || isDeletion) && (
              <span
                aria-hidden
                className={cn(
                  "absolute -left-[20px] block w-[20px] border-r pl-[6px] select-none",
                  isAddition &&
                    "border-blue-500/20 bg-blue-500/10 text-blue-400",
                  isDeletion && "border-red-500/20 bg-red-500/10 text-red-400"
                )}
              >
                {isAddition ? "+" : "-"}
              </span>
            )}
            {line.map((token, i) => {
              return (
                <span
                  key={i}
                  style={{
                    color: token.color,
                  }}
                >
                  {token.content}
                </span>
              )
            })}
          </div>
        )
      })}
    </>
  )
}

export function CodeBlockMain({
  diff,
  children,
  lang,
  highlight,
}: {
  diff?: Diff
  children: string
  lang: BundledLanguage
  highlight?: number[]
}) {
  return (
    <div
      className={cn(
        "reveal my-6 overflow-hidden rounded-xl bg-[#fafafa] dark:bg-[#171717]",
        diff && "-ml-4 pl-4"
      )}
    >
      <div className="flex items-center justify-between bg-(--color-bg-secondary) px-4 py-2.5 dark:bg-[#1F1F1F]">
        <div className="flex items-center gap-4">
          <div className="flex space-x-1.5">
            <div className="h-3 w-3 rounded-full border border-red-500/50 bg-red-500/80" />
            <div className="h-3 w-3 rounded-full border border-yellow-500/50 bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full border border-green-500/50 bg-green-500/80" />
          </div>
          {lang && (
            <span className="text-[13px] text-(--color-text-tertiary)">
              {lang}
            </span>
          )}
        </div>
        <CopyButton content={children} />
      </div>
      <pre
        className={cn(
          "relative overflow-x-auto p-4 text-[13px] leading-6",
          "font-['ui-monospace','SFMono-Regular','Menlo','Monaco','Consolas','Liberation_Mono','Courier_New','monospace']",
          diff && "border-gray-70 border-l"
        )}
      >
        <div className="dark:hidden">
          <CodeBlockRaw
            diff={diff}
            highlight={highlight}
            lang={lang}
            theme="github-light-default"
          >
            {children}
          </CodeBlockRaw>
        </div>
        <div className="hidden dark:block">
          <CodeBlockRaw
            diff={diff}
            highlight={highlight}
            lang={lang}
            theme="andromeeda"
          >
            {children}
          </CodeBlockRaw>
        </div>
      </pre>
    </div>
  )
}

interface CodeElementProps {
  children: string
  className?: string
}

export async function CodeBlock(props: {
  children: ReactElement<CodeElementProps>
  diff?: Diff
  highlight?: number[]
}) {
  const code = props.children.props.children
  const lang = props.children.props.className?.replaceAll(
    "language-",
    ""
  ) as BundledLanguage
  const formattedCode = await formatCode(code, lang || "")
  return (
    <CodeBlockMain lang={lang} diff={props.diff} highlight={props.highlight}>
      {formattedCode}
    </CodeBlockMain>
  )
}
