import { ReactNode } from "react"

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <div className="w-full">{children}</div>
}
