"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { titleCase } from "title-case"
import Balancer from "react-wrap-balancer"
import { cn } from "@/lib/utils"

export interface IPost {
  slug: string
  title: string
  description: string
  editedAt: string
}

export type PostProps = {
  post: IPost
  children?: React.ReactNode
  direction?: "left" | "right"
}

export function Post({ post, children, direction = "left" }: PostProps) {
  const isExternal = post?.slug?.startsWith("http") || false

  return (
    <PostWrapper direction={direction}>
      <PostContent>
        <PostUpdatedText>
          {new Intl.DateTimeFormat("en-US", {
            month: "long",
            year: "numeric",
            day: "numeric",
          }).format(new Date(post.editedAt))}
        </PostUpdatedText>
        <PostTitle whileHover="hover">
          <TitleAnchor
            as={isExternal ? undefined : Link}
            href={post.slug}
            direction={direction}
          >
            <Balancer ratio={0.8}>{titleCase(post.title)}</Balancer>
          </TitleAnchor>
        </PostTitle>
        <PostDescription>{post.description}</PostDescription>
        <TitleAnchor
          as={isExternal ? undefined : Link}
          href={post.slug}
          direction={direction}
          small
        >
          Read now
          <ArrowRight width={12} height={12} />
        </TitleAnchor>
      </PostContent>
      <Figure>{children}</Figure>
    </PostWrapper>
  )
}

// Figure
function Figure({ children }: { children?: React.ReactNode }) {
  return <div className="flex-1">{children}</div>
}

// TitleAnchor
function TitleAnchor({
  children,
  href,
  direction,
  small,
  as: Component,
}: {
  children: React.ReactNode
  href: string
  direction?: "left" | "right"
  small?: boolean
  as?: any
}) {
  const Comp = Component ?? motion.a

  return (
    <Comp
      href={href}
      className={cn(
        "flex w-full cursor-pointer items-center gap-4 text-inherit no-underline transition-colors hover:text-blue-600",
        small && "gap-2 font-bold text-neutral-500",
        direction === "left" && "md:justify-end"
      )}
    >
      {children}
    </Comp>
  )
}

// PostWrapper
function PostWrapper({
  children,
  direction,
}: {
  children: React.ReactNode
  direction?: "left" | "right"
}) {
  return (
    <motion.li
      className={cn(
        "flex max-w-[400px] list-none flex-col-reverse gap-16 p-0",
        "not-last:border-b not-last:border-dashed not-last:border-neutral-300 not-last:pb-[var(--gap)]",
        "md:max-w-[60rem] md:flex-row md:items-center md:gap-0",
        "md:[&>:first-child]:border-r md:[&>:first-child]:border-dashed md:[&>:first-child]:border-neutral-300 md:[&>:first-child]:pr-10 md:[&>:first-child]:text-right",
        "md:[&>:last-child]:pl-10",
        "lg:[&>:first-child]:pr-16 lg:[&>:last-child]:pl-16",
        direction === "right" && [
          "md:flex-row-reverse",
          "md:[&>:first-child]:border-r-0 md:[&>:first-child]:border-l md:[&>:first-child]:border-dashed md:[&>:first-child]:border-neutral-300 md:[&>:first-child]:pr-0 md:[&>:first-child]:pl-10 md:[&>:first-child]:text-left",
          "md:[&>:last-child]:pr-10 md:[&>:last-child]:pl-0",
          "lg:[&>:first-child]:pl-16 lg:[&>:last-child]:pr-16",
        ]
      )}
    >
      {children}
    </motion.li>
  )
}

// PostTitle
export function PostTitle({
  children,
  className,
  ...motionProps
}: {
  children: React.ReactNode
  className?: string
} & React.ComponentProps<typeof motion.h1>) {
  return (
    <motion.h1
      className={cn(
        "flex font-serif text-[3.5rem] leading-[1.1] font-medium",
        className
      )}
      {...motionProps}
    >
      {children}
    </motion.h1>
  )
}

// PostDescription
export function PostDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="leading-relaxed text-neutral-700 dark:text-neutral-300">
      {children}
    </p>
  )
}

// PostUpdatedText
export function PostUpdatedText({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-sm text-neutral-500">{children}</p>
}

// PostContent
export function PostContent({ children }: { children: React.ReactNode }) {
  return <div className="flex-1 [&>:not(:last-child)]:mb-10">{children}</div>
}
