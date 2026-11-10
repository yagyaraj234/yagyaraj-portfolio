"use client"

import { useEffect, useRef } from "react"
import { useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  className?: string
  title: string
  description: string
  src: string
}

export default function AnimatedCard({
  className,
  title,
  description,
  src,
}: AnimatedCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const reduceMotion = useReducedMotion()
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (reduceMotion) video.pause()
    else
      video.play().catch(() => {
        /* Browser may block autoplay; native play control stays available. */
      })
  }, [reduceMotion])
  return (
    <div
      className={cn(
        "w-max max-w-65 flex-col rounded-2xl bg-black p-[5px] text-white shadow-lg ring ring-zinc-100 drop-shadow-md",
        className
      )}
    >
      <div className="flex w-full justify-center">
        <div className="max-h-60 min-h-60 overflow-hidden rounded-xl drop-shadow-xl">
          <video
            ref={videoRef}
            controls
            playsInline
            preload="metadata"
            loop
            muted
            className="h-full w-full rounded-xl object-cover"
          >
            <source src={src} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="flex flex-col p-4">
        <h3 className="font-inter text-base font-semibold tracking-tighter text-shadow-[2px_2px_4px_rgba(0,0,0,0.1)]">
          {title}
        </h3>
        <p className="mt-2 text-xs leading-normal tracking-tight opacity-75">
          {description}
        </p>
      </div>
    </div>
  )
}
