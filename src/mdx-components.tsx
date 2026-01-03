import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { MDXComponents } from "mdx/types";
import { Annotation } from "@/app/components/mdx/annotation";
import { InlineNote, Note } from "@/app/components/mdx/note";
import { CodeBlock } from "@/app/components/mdx/code-block";
import { OrderedList } from "@/app/components/OrderedList";
import {
  ScrollGroup,
  ScrollFigure,
  ScrollGroupSection,
} from "@/app/components/mdx/scroll-group";
import { FullWidth } from "@/app/components/mdx/full-width";
import { Columns, ColumnRight } from "@/app/components/mdx/columns";
import { Heading } from "@/app/components/mdx/heading";
import { SkipLink } from "@/app/components/mdx/skip-link";
import { Wide } from "@/app/components/mdx/Wide";
import { Aside } from "@/app/components/mdx/aside";
import { Callout } from "@/app/components/mdx/callout";
import { cn } from "@/lib/utils";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => (
      <Heading level="h1" className="text-3xl font-medium my-4" {...props} />
    ),

    h2: (props) => (
      <Heading level="h2" className="text-2xl font-medium my-3" {...props} />
    ),
    h3: (props) => (
      <Heading level="h3" className="text-xl font-medium my-2" {...props} />
    ),
    p: (props) => (
      <p
        className="text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans text-base"
        {...props}
      />
    ),
    strong: (props) => <strong className="font-medium" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 my-4 italic text-zinc-700 dark:text-zinc-300"
        {...props}
      />
    ),
    code: (props) => <code className="inline-code" {...props} />,
    pre: CodeBlock,
    ul: (props) => (
      <ul
        className="list-disc list-outside ml-6 space-y-2 text-zinc-700 dark:text-zinc-300 font-sans text-base my-4"
        {...props}
      />
    ),
    ol: OrderedList,
    img: (props) => (
      <div className="flex flex-col items-center justify-center my-2">
        <img {...props} className=" select-none" />
        <span className="text-xs text-gray-500 pt-1  font-normal dark:text-gray-300">
          {props.alt}
        </span>
      </div>
    ),
    hr: () => (
      <hr className="opacity-30 dark:border-zinc-800/80 border-dashed md:-mx-10 my-2 col-span-3! !w-max-[calc(100%+80px)]" />
    ),
    a: ({ href, ...props }) => {
      const isExternal = href?.startsWith("http");
      if (isExternal) {
        return (
          <a
            className="hover:underline text-blue-500 inline-flex underline-offset-4 decoration-wavy decoration-blue-500"
            href={href}
            target="_blank"
            rel="noreferrer"
            {...props}
          />
        );
      }
      return (
        <Link
          href={href}
          className="underline text-blue-300 hover:text-blue-400"
          {...props}
        />
      );
    },
    InlineNote,
    Note,
    Annotation,
    Callout,
    ProblemStatement: (props) => {
      return (
        <div className="rounded-t-lg my-4">
          <header>
            <h4 className="w-max dark:text-white dark:bg-neutral-700 bg-black  font-medium text-gray-100 text-sm px-4 py-1 rounded-t-lg dark:border-gray-700 border border-gray-700 border-b-0 -mx-px -mb-1.5 pb-2.5">
              Problem
            </h4>
          </header>
          <div className="z-10 ring-1 dark:ring-neutral-800 dark:bg-neutral-900 bg-white shadow ring-neutral-950/15 rounded-lg px-4 py-3 relative">
            {props.children}
          </div>
        </div>
      );
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
  };
}
