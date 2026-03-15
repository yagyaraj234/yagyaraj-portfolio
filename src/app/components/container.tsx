import { ReactNode } from "react"

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[calc(100vh-120px)] max-w-3xl sm:mx-auto sm:min-w-3xl">
      {children}
    </div>
  )
}
