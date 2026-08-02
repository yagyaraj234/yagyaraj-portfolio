import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  className?: string
  title: string
  description: string
  src: string
  btnClass?: string
}

export default function AnimatedCard({
  className,
  title,
  description,
  src,
  btnClass,
}: AnimatedCardProps) {
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
            autoPlay
            preload="true"
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
        <p className="mt-2 text-xs leading-normal tracking-tight text-zinc-400">
          {description}
        </p>
        <button
          className={cn(
            "mt-4 w-max cursor-pointer rounded-md bg-zinc-700 px-3 py-1.5 text-xs font-medium text-white duration-300 ease-in-out",
            btnClass
          )}
        >
          Learn More
        </button>
      </div>
    </div>
  )
}
