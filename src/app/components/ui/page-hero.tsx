import type { ReactNode } from "react"

interface PageHeroProps {
  title: string
  subtitle: string
  children?: ReactNode
}

export function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <header className="not-prose my-9">
      <h1 className="hero-name">{title}</h1>
      <p className="mt-1 text-lg text-(--color-text-secondary)">{subtitle}</p>
      {children}
    </header>
  )
}
