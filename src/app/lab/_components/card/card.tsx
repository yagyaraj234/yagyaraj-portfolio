import { ReactNode } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const Card = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode
  className?: string
  onClick?: () => void
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group grid gap-4 max-sm:grid-rows-2 sm:grid-cols-2 sm:gap-6",
        className
      )}
    >
      {children}
    </div>
  )
}

const CardDescription = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <p className={cn("text-zinc-800 dark:text-zinc-400", className)}>
      {children}
    </p>
  )
}

const CardImage = ({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn(
        "rounded-lg ring-1 ring-zinc-100 drop-shadow-xs transition-all duration-300 ease-in-out group-hover:scale-[102%] group-hover:-rotate-1 dark:ring-zinc-700",
        className
      )}
    />
  )
}

const CardList = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <ul
      className={cn(
        "text-lg text-zinc-800 sm:text-xl dark:text-zinc-200",
        className
      )}
    >
      {children}
    </ul>
  )
}

const CardListItem = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return <li className={cn("flex flex-col gap-4", className)}>{children}</li>
}

const CardContent = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return <div className={cn("grid gap-4", className)}>{children}</div>
}

export { Card, CardDescription, CardImage, CardList, CardListItem, CardContent }
