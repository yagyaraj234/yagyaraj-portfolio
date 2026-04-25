import Link from "next/link"
import { social_links } from "./static-content"

export default function Footer() {
  return (
    <footer className="text-muted mt-8 mb-8 flex flex-col gap-4 text-sm max-sm:flex-col">
      <div className="flex">
        {social_links.map((link, idx) => (
          <Link
            key={idx}
            className="text-blue-500 decoration-blue-500 decoration-wavy underline-offset-4 after:mx-2 after:inline-block after:text-black after:no-underline after:content-['|'] last:after:hidden hover:underline"
            href={link.url}
            target="_blank"
            rel="noreferrer"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="mt-12 flex items-center justify-center gap-2">
        <h3>Design & Developed by Yagyaraj</h3>
        <span className="hidden sm:inline-block">|</span>
        <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  )
}
