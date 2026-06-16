import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiRedux,
  SiPrisma,
  SiFirebase,
  SiMongodb,
  SiDocker,
  SiCplusplus,
  SiPython,
  SiFastapi,
  SiGo,
  SiHono,
  SiPostgresql,
  SiRedis,
  SiGooglecloud,
  SiGithub,
  SiStripe,
  SiGit,
  SiVite,
  SiJavascript,
} from "@icons-pack/react-simple-icons"
import type { ComponentType } from "react"
import { cn } from "@/lib/utils"

type IconProps = { className?: string; color?: string; title?: string }
type IconEntry = { Icon: ComponentType<IconProps>; brand?: boolean }

// Monochrome/dark brands stay on currentColor so they adapt to the theme.
const ICONS: Record<string, IconEntry> = {
  react: { Icon: SiReact, brand: true },
  nextjs: { Icon: SiNextdotjs },
  tailwindcss: { Icon: SiTailwindcss, brand: true },
  typescript: { Icon: SiTypescript, brand: true },
  nodejs: { Icon: SiNodedotjs, brand: true },
  redux: { Icon: SiRedux, brand: true },
  prisma: { Icon: SiPrisma },
  prismaorm: { Icon: SiPrisma },
  firebase: { Icon: SiFirebase, brand: true },
  mongodb: { Icon: SiMongodb, brand: true },
  docker: { Icon: SiDocker, brand: true },
  c: { Icon: SiCplusplus, brand: true },
  python: { Icon: SiPython, brand: true },
  fastapi: { Icon: SiFastapi, brand: true },
  go: { Icon: SiGo, brand: true },
  golang: { Icon: SiGo, brand: true },
  honojs: { Icon: SiHono, brand: true },
  hono: { Icon: SiHono, brand: true },
  postgrespgvector: { Icon: SiPostgresql, brand: true },
  postgresql: { Icon: SiPostgresql, brand: true },
  bullmqredis: { Icon: SiRedis, brand: true },
  redis: { Icon: SiRedis, brand: true },
  googlecloudplatform: { Icon: SiGooglecloud, brand: true },
  googlecloud: { Icon: SiGooglecloud, brand: true },
  gcp: { Icon: SiGooglecloud, brand: true },
  githubapp: { Icon: SiGithub },
  github: { Icon: SiGithub },
  stripe: { Icon: SiStripe, brand: true },
  git: { Icon: SiGit, brand: true },
  vite: { Icon: SiVite, brand: true },
  vitejs: { Icon: SiVite, brand: true },
  jsproxy: { Icon: SiJavascript, brand: true },
}

const normalize = (label: string) =>
  label.toLowerCase().replace(/[^a-z0-9]/g, "")

type TechTagProps = {
  label: string
  size?: "sm" | "md"
  className?: string
}

export function TechTag({ label, size = "md", className }: TechTagProps) {
  const entry = ICONS[normalize(label)]
  const Icon = entry?.Icon
  const iconSize = size === "sm" ? "size-3" : "size-3.5"

  return (
    <span
      className={cn(
        "font-dm-mono f inline-flex items-center gap-1.5 rounded-md border border-dashed border-(--color-border-hover) leading-none text-(--color-text-secondary) transition-colors duration-200 hover:text-(--color-text-primary)",
        size === "sm" ? "px-2 py-1 text-[10px]" : "px-2.5 py-1.5 text-[11px]",
        className
      )}
    >
      {Icon && (
        <Icon
          aria-hidden="true"
          className={cn(iconSize, "shrink-0")}
          color={entry.brand ? "default" : "currentColor"}
        />
      )}
      {label}
    </span>
  )
}
