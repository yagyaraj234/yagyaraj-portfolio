"use client"
import { ReactNode, useState } from "react"
import CodePreview from "./code-preview"

type ComponentPreviewProps = {
  preview: ReactNode
  code: string
}

export default function ComponentPreview({
  preview,
  code,
}: ComponentPreviewProps) {
  const [isPreviewVisible, setIsPreviewVisible] = useState(false)

  function togglePreview() {
    setIsPreviewVisible(!isPreviewVisible)
  }
  return (
    <div className="m-4 w-full rounded-lg border border-zinc-300 p-2 dark:border-zinc-600">
      <header className="flex w-full items-center justify-between">
        <button onClick={togglePreview} className="text-lg font-bold">
          Preview
        </button>

        <button className="text-lg font-bold" onClick={togglePreview}>
          Show Code
        </button>
      </header>

      <div>
        {isPreviewVisible ? (
          preview
        ) : (
          <CodePreview code={code} language="tsx" />
        )}
      </div>
    </div>
  )
}
