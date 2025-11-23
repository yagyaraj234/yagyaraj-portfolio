import { codeToTokens, type TokensResult, type BundledLanguage } from "shiki";
import { cn } from "@/lib/utils";
import { CopyButton } from "./copy-button";
import { format } from "prettier/standalone";
import parserBabel from "prettier/plugins/babel";
import parserEstree from "prettier/plugins/estree";
import parserHtml from "prettier/plugins/html";
import parserCss from "prettier/plugins/postcss";
import parserTypescript from "prettier/plugins/typescript";
import parserYaml from "prettier/plugins/yaml";

export type Token = TokensResult["tokens"][number][number];

export async function getTokens(
  code: string,
  lang: BundledLanguage,
  theme: string,
): Promise<Token[][]> {
  const result = await codeToTokens(code, {
    lang,
    theme,
  });
  return result.tokens;
}

type Diff = {
  additions?: number[];
  deletions?: number[];
};

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
    };

    const parser = parserMap[lang.toLowerCase()];
    if (!parser) return code;

    return await format(code, {
      parser,
      plugins: [
        parserBabel,
        parserEstree,
        parserHtml,
        parserCss,
        parserTypescript,
        parserYaml,
      ] as any[],
      semi: true,
      singleQuote: false,
    });
  } catch (e) {
    // Fallback to original code if formatting fails
    return code;
  }
}

export async function CodeBlockRaw({
  children,
  lang,
  theme = "github-light",
  diff,
  highlight,
}: {
  children: string;
  lang: BundledLanguage;
  theme?: string;
  diff?: Diff;
  highlight?: number[];
}) {
  const tokens = await getTokens(children.trim(), lang, theme);
  return (
    <>
      {tokens.map((line, index) => {
        const isHighlighted = highlight?.includes(index) ?? false;
        const isAddition = diff?.additions?.includes(index) ?? false;
        const isDeletion = diff?.deletions?.includes(index) ?? false;
        return (
          <div
            className={cn(
              "min-h-[21px] -mx-4 px-4 relative",
              (isAddition || isHighlighted) && "bg-blue-500/10",
              isDeletion && "bg-red-500/10",
            )}
            key={index}
          >
            {(isAddition || isDeletion) && (
              <span
                aria-hidden
                className={cn(
                  "absolute -left-[20px] pl-[6px] w-[20px] block border-r select-none",
                  isAddition && "bg-blue-500/10 text-blue-400 border-blue-500/20",
                  isDeletion && "bg-red-500/10 text-red-400 border-red-500/20",
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
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export function CodeBlockMain({
  diff,
  children,
  lang,
  highlight,
}: {
  diff?: Diff;
  children: string;
  lang: BundledLanguage;
  highlight?: number[];
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-black/5 dark:border-white/10 shadow-sm overflow-hidden bg-white dark:bg-[#171717] my-6",
        diff && "-ml-4 pl-4",
      )}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-black/5 dark:border-white/5 bg-zinc-50/50 dark:bg-[#1F1F1F] backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-500/50" />
          </div>
          {lang && (
            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider opacity-70">
              {lang}
            </span>
          )}
        </div>
        <CopyButton content={children} />
      </div>
      <pre
        className={cn(
          "relative p-4 text-[13px] leading-6 overflow-x-auto",
          "font-['ui-monospace','SFMono-Regular','Menlo','Monaco','Consolas','Liberation_Mono','Courier_New','monospace']",
          diff && "border-l border-gray-70",
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
  );
}

export async function CodeBlock(props: {
  children: any;
  diff?: Diff;
  highlight?: number[];
}) {
  const code = props.children.props.children;
  const lang = props.children.props.className?.replaceAll("language-", "");
  const formattedCode = await formatCode(code, lang || "");
  return (
    <CodeBlockMain
      lang={lang}
      diff={props.diff}
      highlight={props.highlight}
    >
      {formattedCode}
    </CodeBlockMain>
  );
}
