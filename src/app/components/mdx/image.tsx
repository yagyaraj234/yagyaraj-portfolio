"use client"

import { useRef } from "react"
import type { ImgHTMLAttributes } from "react"
import { X, ZoomIn } from "lucide-react"
import { cn } from "@/lib/utils"

type MdxImageProps = ImgHTMLAttributes<HTMLImageElement>

function toNumber(value: string | number | undefined): number | undefined {
  const parsed = typeof value === "string" ? Number.parseInt(value, 10) : value
  return parsed !== undefined && Number.isFinite(parsed) ? parsed : undefined
}

export function MdxImage({ alt, className, ...props }: MdxImageProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const width = toNumber(props.width) ?? 1200
  const height = toNumber(props.height) ?? 675

  return (
    <>
      <button
        type="button"
        className="group relative block w-full cursor-zoom-in rounded-lg"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={
          alt ? `Open image fullscreen: ${alt}` : "Open image fullscreen"
        }
      >
        <img
          {...props}
          alt={alt ?? ""}
          width={width}
          height={height}
          loading={props.loading ?? "lazy"}
          decoding={props.decoding ?? "async"}
          className={cn("h-auto w-full rounded-lg select-none", className)}
        />
        <span
          aria-hidden="true"
          className="absolute right-3 bottom-3 rounded-full bg-black/70 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <ZoomIn className="size-4" />
        </span>
      </button>
      <dialog
        ref={dialogRef}
        aria-label={alt || "Fullscreen image"}
        className="m-auto max-h-[95dvh] max-w-[95vw] overflow-auto border-0 bg-transparent p-0 backdrop:bg-black/85"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close()
        }}
      >
        <div className="relative p-3 pt-14">
          <button
            type="button"
            autoFocus
            aria-label="Close fullscreen image"
            onClick={() => dialogRef.current?.close()}
            className="absolute top-1 right-3 grid size-10 place-items-center rounded-full bg-black/70 text-white hover:bg-black"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
          <img
            {...props}
            alt={alt ?? ""}
            width={width}
            height={height}
            loading="lazy"
            className="max-h-[80dvh] w-auto max-w-full rounded-lg object-contain"
          />
        </div>
      </dialog>
    </>
  )
}
