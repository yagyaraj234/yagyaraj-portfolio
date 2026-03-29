import Link from "next/link"
import { social_links } from "./static-content"

export default function Footer() {
  return (
    <footer className="text-muted mt-20 mb-8 flex flex-col items-center justify-center gap-4 text-sm max-sm:flex-col sm:mt-16">
      <div className="flex gap-x-4">
        {social_links.map((link, idx) => (
          <Link
            key={idx}
            href={link.url}
            target="_blank"
            aria-label={link.name}
            className="text-zinc-700 transition-colors hover:text-zinc-900 dark:text-white/90 dark:hover:text-white"
          >
            <link.icon className="size-5" aria-hidden="true" />
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <h3>Design & Developed by Yagyaraj</h3> 
        <span className="hidden sm:inline-block">|</span>
        <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  )
}
