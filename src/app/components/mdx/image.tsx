"use client"

import { useEffect, useState } from "react"
import type { ImgHTMLAttributes } from "react"
import { AnimatePresence, motion } from "motion/react"
import { X } from "lucide-react"

type MdxImageProps = ImgHTMLAttributes<HTMLImageElement>

const DEFAULT_WIDTH = 1200
const DEFAULT_HEIGHT = 675

function toNumber(value: string | number | undefined): number | undefined {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : undefined
  }

  if (typeof value === "string") {
    const parsed = Number.parseInt(value, 10)
    return Number.isFinite(parsed) ? parsed : undefined
  }

  return undefined
}

export function MdxImage({ alt, className, ...props }: MdxImageProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const src = typeof props.src === "string" ? props.src : ""
  const width = toNumber(props.width) ?? DEFAULT_WIDTH
  const height = toNumber(props.height) ?? DEFAULT_HEIGHT
  const imageClassName = ["rounded-lg select-none", className ?? ""]
    .filter(Boolean)
    .join(" ")

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  return (
    <>
      <button
        type="button"
        className="group block w-full cursor-zoom-in outline-none"
        onClick={() => setIsOpen(true)}
        aria-label={
          alt ? `Open image fullscreen: ${alt}` : "Open image fullscreen"
        }
      >
        <img
          {...props}
          src={src}
          alt={alt ?? ""}
          width={width}
          height={height}
          loading={props.loading ?? "lazy"}
          decoding={props.decoding ?? "async"}
          className={`${imageClassName} h-auto w-full transition-transform duration-200`}
          style={{ width: "100%", height: "auto", ...props.style }}
        />
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.button
              type="button"
              className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
              aria-label="Close fullscreen image"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </motion.button>

            <motion.div
              className="flex max-h-[90vh] w-[90vw] items-center justify-center md:w-[80vw]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              onClick={(event) => event.stopPropagation()}
            >
              <img
                {...props}
                src={src}
                alt={alt ?? ""}
                width={width}
                height={height}
                loading="eager"
                decoding="async"
                className="h-auto w-full rounded-lg object-contain shadow-2xl"
                style={{ width: "100%", height: "auto", ...props.style }}
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
