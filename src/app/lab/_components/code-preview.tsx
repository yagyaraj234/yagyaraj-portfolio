import { CodeBlock } from "@/app/components/mdx/code-block"

export default function CodePreview({
  code,
  language,
}: {
  code: string
  language: string
}) {
  return (
    <CodeBlock>
      <div className={`language-${language}`}>{code}</div>
    </CodeBlock>
  )
}
