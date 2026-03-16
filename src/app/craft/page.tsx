import ComponentPreview from "./_components/component-preview"
import CodePreview from "./_components/code-preview"
import VirtualizedListExample from "./_components/virtualised-list-example"
export default function CraftPage() {
  return (
    <main role="main">
      <div className="mt-8 space-y-8">
        <div className="px-4">
          <h1 className="mb-2 text-3xl font-bold tracking-tight">My Craft</h1>
          <p className="text-gray-500 dark:text-gray-400">
            A collection of things I've built, or designed.
          </p>
        </div>
      </div>

      <ComponentPreview
        title="Virtualized List"
        link="/craft/virtual-list"
        code={
          <CodePreview
            language="tsx"
            code={`"use client"

          import { ThemeProvider as NextThemesProvider } from "next-themes"
          import { type ThemeProviderProps } from "next-themes"

          export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
            return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}`}
          />
        }
        preview={<VirtualizedListExample />}
      />
    </main>
  )
}
