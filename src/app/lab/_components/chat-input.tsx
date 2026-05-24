"use client"

import { useState, useRef } from "react"
import {
  Plus,
  Globe,
  Lightbulb,
  MoreHorizontal,
  X,
  FileText,
  Image,
  Film,
  ScrollText,
  Languages,
  SquarePen,
  MessageCircleQuestion,
  ArrowUp,
  PauseCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"

type AttachedFile = {
  name: string
  type: "image" | "doc" | "video" | "other"
  size: string
}

function fileIcon(type: AttachedFile["type"]) {
  if (type === "image") return <Image className="size-3.5 text-blue-400" />
  if (type === "video") return <Film className="size-3.5 text-purple-400" />
  return <FileText className="size-3.5 text-zinc-400" />
}

function classifyFile(file: File): AttachedFile["type"] {
  if (file.type.startsWith("image/")) return "image"
  if (file.type.startsWith("video/")) return "video"
  if (
    file.type.includes("pdf") ||
    file.type.includes("doc") ||
    file.type.includes("text")
  )
    return "doc"
  return "other"
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

const MORE_OPTIONS = [
  {
    label: "Summarize",
    icon: ScrollText,
  },
  {
    label: "Translate",
    icon: Languages,
  },
  {
    label: "Rewrite",
    icon: SquarePen,
  },
  {
    label: "Explain",
    icon: MessageCircleQuestion,
  },
]

interface ChatSubmit {
  value: string
  deepResearch: boolean
  think: boolean
  files: AttachedFile[]
}
interface ChatInput {
  className?: string
  onSubmit?: (value: ChatSubmit) => void
  loading?: boolean
}

export default function ChatBox(props: ChatInput) {
  const { className, onSubmit, loading } = props
  const [value, setValue] = useState("")
  const [deepResearch, setDeepResearch] = useState(false)
  const [think, setThink] = useState(false)
  const [files, setFiles] = useState<AttachedFile[]>([])
  const [moreOpen, setMoreOpen] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleInput = () => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = "auto"
    el.style.height = `${el.scrollHeight}px`
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const picked = Array.from(e.target.files ?? [])
    const mapped: AttachedFile[] = picked.map((f) => ({
      name: f.name,
      type: classifyFile(f),
      size: formatSize(f.size),
    }))
    setFiles((prev) => [...prev, ...mapped])
    // reset so same file can be re-picked
    e.target.value = ""
  }

  const removeFile = (idx: number) =>
    setFiles((prev) => prev.filter((_, i) => i !== idx))

  const handleSubmit = () => {
    if (loading) return
    onSubmit?.({
      value,
      deepResearch,
      think,
      files,
    })
    if (!value.trim() && files.length === 0) return
    // replace with real submit logic
    alert(
      `Sending:\n"${value}"\nModes: ${[deepResearch && "Deep research", think && "Think"].filter(Boolean).join(", ") || "none"}\nFiles: ${files.map((f) => f.name).join(", ") || "none"}`
    )
    setValue("")
    setFiles([])
    if (textareaRef.current) textareaRef.current.style.height = "auto"
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="p-4">
      <div
        className={cn(
          "my-8 w-full rounded-[22px] p-2 shadow-[0_8px_40px_rgba(0,0,0,0.28)]",
          className,
          {
            "opacity-95": loading,
          }
        )}
        style={{
          background:
            "linear-gradient(135deg, #e91e8c 0%, #f44336 15%, #ff5722 25%, #ff9800 38%, #ffc107 50%, #4caf50 62%, #00bcd4 74%, #2196f3 85%, #9c27b0 100%)",
        }}
      >
        <div className="rounded-[14px] bg-white px-4 pt-4 pb-3 drop-shadow-2xl">
          {files.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {files.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 rounded-lg bg-[#F1F0EC] px-2.5 py-1.5 ring-[0.5px] ring-black/8"
                >
                  {fileIcon(f.type)}
                  <span className="max-w-[120px] truncate text-[12px] font-medium text-zinc-700">
                    {f.name}
                  </span>
                  <span className="text-[11px] text-zinc-400">{f.size}</span>
                  <button
                    onClick={() => removeFile(i)}
                    className="ml-0.5 rounded-full p-0.5 text-zinc-400 transition-colors hover:bg-zinc-200 hover:text-zinc-600"
                  >
                    <X className="size-3" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <textarea
            ref={textareaRef}
            rows={2}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            disabled={loading}
            placeholder="Ask anything"
            className="max-h-[200px] min-h-[52px] w-full resize-none overflow-y-auto bg-transparent text-[1rem] leading-relaxed font-normal text-zinc-800 caret-zinc-500 outline-none placeholder:text-zinc-400"
          />

          {/* Toolbar */}
          <div className="mt-2 flex items-center gap-1.5">
            <input
              ref={fileInputRef}
              type="file"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />

            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F1F0EC] ring-[0.5px] ring-black/8 transition-all duration-150 ease-out hover:bg-[#E4E3DE] hover:shadow-sm active:scale-95"
              title="Attach file"
            >
              <Plus className="size-[18px] text-zinc-500" strokeWidth={1.8} />
            </button>

            <button
              onClick={() => setDeepResearch((v) => !v)}
              className={cn(
                "flex h-9 items-center gap-2 rounded-full px-3.5 text-[13px] font-medium tracking-[-0.01em] ring-[0.5px] transition-all duration-150 ease-out",
                {
                  "bg-zinc-800 text-white shadow-sm ring-zinc-700":
                    deepResearch,
                  "bg-[#F1F0EC] text-zinc-600 ring-black/8 hover:bg-[#E4E3DE] hover:shadow-sm active:scale-95":
                    !deepResearch,
                }
              )}
            >
              <Globe
                className={`size-[15px] ${deepResearch ? "text-white" : "text-zinc-500"}`}
                strokeWidth={1.6}
              />
              <span>Deep research</span>
            </button>

            <button
              onClick={() => setThink((v) => !v)}
              className={cn(
                "flex h-9 items-center gap-2 rounded-full px-3.5 text-[13px] font-medium tracking-[-0.01em] ring-[0.5px] transition-all duration-150 ease-out",
                {
                  "bg-zinc-800 text-white shadow-sm ring-zinc-700": think,
                  "bg-[#F1F0EC] text-zinc-600 ring-black/8 hover:bg-[#E4E3DE] hover:shadow-sm active:scale-95":
                    !think,
                }
              )}
            >
              <Lightbulb
                className={`size-[15px] ${think ? "text-white" : "text-zinc-500"}`}
                strokeWidth={1.6}
              />
              <span>Think</span>
            </button>

            <div className="relative">
              <button
                onClick={() => setMoreOpen((v) => !v)}
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F1F0EC] ring-[0.5px] ring-black/8 transition-all duration-150 ease-out hover:bg-[#E4E3DE] hover:shadow-sm active:scale-95 ${moreOpen ? "bg-[#E4E3DE]" : ""}`}
                title="More options"
              >
                <MoreHorizontal
                  className="size-[18px] text-zinc-500"
                  strokeWidth={1.8}
                />
              </button>
              {moreOpen && (
                <div className="absolute bottom-11 left-0 z-10 min-w-[160px] rounded-xl bg-white py-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.12)] ring-[0.5px] ring-black/8">
                  {MORE_OPTIONS.map(({ label, icon: Icon }) => (
                    <div className="flex gap-2 px-3.5 py-2 text-left text-[13px] text-zinc-600 transition-colors hover:bg-[#F1F0EC]">
                      <Icon
                        className="size-[18px] text-zinc-500"
                        strokeWidth={1.8}
                      />
                      <button
                        key={label}
                        onClick={() => {
                          setValue((v) => (v ? `${label}: ${v}` : `${label}: `))
                          setMoreOpen(false)
                          textareaRef.current?.focus()
                        }}
                        className="flex w-full items-center"
                      >
                        {label}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {(value.trim() || files.length > 0) && (
              <button
                onClick={handleSubmit}
                className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-zinc-800 text-white shadow-sm transition-all duration-150 hover:bg-zinc-700 active:scale-95"
                title="Send (Enter)"
              >
                {loading ? (
                  <PauseCircle
                    className={cn("size-[18px] text-white", {
                      "opacity-75": !value.trim() || loading,
                    })}
                    strokeWidth={2}
                  />
                ) : (
                  <ArrowUp
                    className={cn("size-[18px] text-white", {
                      "opacity-75": !value.trim() || loading,
                    })}
                    strokeWidth={2}
                  />
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      <p className="mt-2 text-center text-[11px] text-zinc-400">
        Press{" "}
        <kbd className="rounded bg-zinc-200 px-1 py-0.5 font-mono text-[10px] text-zinc-500">
          Enter
        </kbd>{" "}
        to send ·{" "}
        <kbd className="rounded bg-zinc-200 px-1 py-0.5 font-mono text-[10px] text-zinc-500">
          Shift+Enter
        </kbd>{" "}
        for new line
      </p>
    </div>
  )
}
