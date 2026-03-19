import Link from "next/link"
import type { MDXComponents } from "mdx/types"
import { Annotation } from "@/app/components/mdx/annotation"
import { InlineNote, Note } from "@/app/components/mdx/note"
import { CodeBlock } from "@/app/components/mdx/code-block"
import { OrderedList } from "@/app/components/OrderedList"
import {
  ScrollGroup,
  ScrollFigure,
  ScrollGroupSection,
} from "@/app/components/mdx/scroll-group"
import { FullWidth } from "@/app/components/mdx/full-width"
import { Columns, ColumnRight } from "@/app/components/mdx/columns"
import { Heading } from "@/app/components/mdx/heading"
import { SkipLink } from "@/app/components/mdx/skip-link"
import { Wide } from "@/app/components/mdx/Wide"
import { Aside } from "@/app/components/mdx/aside"
import { Callout } from "@/app/components/mdx/callout"
import { cn } from "@/lib/utils"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => (
      <Heading level="h1" className="my-4 text-3xl font-medium" {...props} />
    ),

    h2: (props) => (
      <Heading level="h2" className="my-3 text-2xl font-medium" {...props} />
    ),
    h3: (props) => (
      <Heading level="h3" className="my-2 text-xl font-medium" {...props} />
    ),
    p: (props) => (
      <p
        className="font-sans text-base leading-relaxed text-zinc-700 dark:text-zinc-300"
        {...props}
      />
    ),
    strong: (props) => <strong className="font-medium" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="my-4 border-l-2 border-zinc-300 pl-4 text-zinc-700 italic dark:border-zinc-700 dark:text-zinc-300"
        {...props}
      />
    ),
    code: (props) => <code className="inline-code" {...props} />,
    pre: CodeBlock,
    ul: (props) => (
      <ul
        className="my-4 ml-6 list-outside list-disc space-y-2 font-sans text-base text-zinc-700 dark:text-zinc-300"
        {...props}
      />
    ),
    ol: OrderedList,
    img: (props) => (
      <figure className="my-4 flex flex-col items-center justify-center">
        <img {...props} className="select-none" alt={props.alt} />
        <figcaption className="text-xs font-normal text-gray-500 dark:text-gray-300">
          {props.alt}
        </figcaption>
      </figure>
    ),
    hr: () => (
      <hr className="!w-max-[calc(100%+80px)] col-span-3! my-2 border-dashed opacity-30 md:-mx-10 dark:border-zinc-800/80" />
    ),
    a: ({ href, ...props }) => {
      const isExternal = href?.startsWith("http")
      if (isExternal) {
        return (
          <a
            className="inline-flex text-blue-500 decoration-blue-500 decoration-wavy underline-offset-4 hover:underline"
            href={href}
            target="_blank"
            rel="noreferrer"
            {...props}
          />
        )
      }
      return (
        <Link
          href={href}
          className="text-blue-300 underline hover:text-blue-400"
          {...props}
        />
      )
    },
    InlineNote,
    Note,
    Annotation,
    Callout,
    ProblemStatement: (props) => {
      return (
        <div className="my-4 rounded-t-lg">
          <header>
            <h4 className="-mx-px -mb-1.5 w-max rounded-t-lg border border-b-0 border-gray-700 bg-black px-4 py-1 pb-2.5 text-sm font-medium text-gray-100 dark:border-gray-700 dark:bg-neutral-700 dark:text-white">
              Problem
            </h4>
          </header>
          <div className="relative z-10 rounded-lg bg-white px-4 py-3 shadow ring-1 ring-neutral-950/15 dark:bg-neutral-900 dark:ring-neutral-800">
            {props.children}
          </div>
        </div>
      )
    },
    Aside,
    SmallOnly: ({ className, ...props }) => (
      <div className={cn("lg:hidden", className)} {...props} />
    ),
    FullWidth,
    ScrollGroup,
    ScrollGroupSection,
    ScrollFigure,
    Columns,
    ColumnRight,
    SkipLink,
    Wide,
  }
}
