import { ReactNode } from "react"
import { Navbar } from "../components/navbar"

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="sm:mx-auto sm:max-w-3xl sm:min-w-3xl">
      <Navbar />
      {children}
    </div>
  )
}
