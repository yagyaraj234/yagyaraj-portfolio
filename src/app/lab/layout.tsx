import { ReactNode } from "react"
import Container from "../components/container"
import { Navbar } from "../components/navbar"

export default function CraftLayout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <Navbar className="mb-8" />
      {children}
    </Container>
  )
}
