import Container from "../components/container"
import { Navbar } from "../components/navbar"
import ComponentPreview from "./_components/component-preview"
import VirtualizedList from "./_components/virtualised-list"

export default function CraftPage() {
  return (
    <Container>
      <Navbar />
      <div className="mt-8 space-y-8">
        <div className="px-4">
          <h1 className="mb-2 text-3xl font-bold tracking-tight">My Craft</h1>
          <p className="text-gray-500 dark:text-gray-400">
            A collection of things I've built, or designed.
          </p>
        </div>
      </div>

      <ComponentPreview
        code={`"use client"

          import { ThemeProvider as NextThemesProvider } from "next-themes"
          import { type ThemeProviderProps } from "next-themes"

          export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
            return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}`}
        preview={
          <VirtualizedList
            data={["1", "2"]}
            renderItem={(item) => <div>{item}</div>}
            minHeight={500}
          />
        }
      />
    </Container>
  )
}
