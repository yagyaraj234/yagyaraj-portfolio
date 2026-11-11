import Link from "next/link"
import { Children, isValidElement, type ComponentProps } from "react"
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
import { FAQ } from "@/app/components/mdx/faq"
import { MdxImage } from "@/app/components/mdx/image"
import { cn } from "@/lib/utils"

function MdxFigure(props: ComponentProps<"img">) {
  return (
    <figure className="reveal my-4 flex flex-col items-center justify-center">
      <MdxImage {...props} className="select-none" />
      {props.alt ? (
        <figcaption className="text-[13px] font-normal text-(--color-text-tertiary)">
          {props.alt}
        </figcaption>
      ) : null}
    </figure>
  )
}

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
    p: ({ children, ...props }) => {
      // MDX wraps standalone images in paragraphs; figures need a flow container.
      const hasImage = Children.toArray(children).some(
        (child) =>
          isValidElement(child) &&
          (child.type === MdxFigure || child.type === "img")
      )
      const Tag = hasImage ? "div" : "p"
      return (
        <Tag
          className="text-muted font-sans text-base leading-relaxed"
          {...props}
        >
          {children}
        </Tag>
      )
    },
    strong: (props) => <strong className="font-medium" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="text-muted my-4 border-l-2 border-zinc-300 pl-4 italic dark:border-zinc-700"
        {...props}
      />
    ),
    code: (props) => <code className="inline-code" {...props} />,
    pre: CodeBlock,
    ul: (props) => (
      <ul
        className="text-muted my-4 ml-6 list-outside list-disc space-y-2 font-sans text-base"
        {...props}
      />
    ),
    ol: OrderedList,
    img: MdxFigure,
    hr: () => <hr className="my-8 border-0" />,
    a: ({ href, ...props }) => {
      const isExternal = href?.startsWith("http")
      if (isExternal) {
        return (
          <a
            className="[overflow-wrap:anywhere] text-blue-500 decoration-blue-500 decoration-wavy underline-offset-4 hover:underline"
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
    FAQ,
    ProblemStatement: (props) => {
      return (
        <div className="my-4 rounded-t-lg">
          <header>
            <h4 className="-mb-1.5 w-max rounded-t-lg bg-zinc-900 px-4 py-1 pb-2.5 text-sm font-medium text-white dark:bg-neutral-700">
              Problem
            </h4>
          </header>
          <div className="relative z-10 rounded-lg bg-(--color-bg-secondary) px-4 py-3">
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
