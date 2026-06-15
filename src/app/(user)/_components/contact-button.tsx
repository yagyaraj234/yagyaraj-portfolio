import Image from "next/image"

export default function ContactButton() {
  return (
    <button className="group mt-4 inline-flex cursor-pointer items-center gap-2.5 rounded-lg bg-[#0f0f0f] px-2 py-1.5 whitespace-nowrap ring ring-zinc-200 transition-[border-color,box-shadow] duration-500 ease-in-out hover:shadow-[0_0_0_3px_rgba(255,255,255,0.04)] active:scale-[0.98]">
      {/* User avatar  always visible */}
      <div className="flex h-6 w-6 shrink-0 scale-20 items-center justify-center rounded-full bg-white transition-transform duration-300 ease-in-out group-hover:scale-100">
        <span className="hidden h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[11px] font-bold text-black group-hover:visible group-hover:flex">
          A
        </span>
      </div>

      {/* + and A  slide in on hover */}
      <div className="-ml-1 flex max-w-0 -translate-x-1.5 items-center gap-1 overflow-hidden opacity-0 transition-[max-width,opacity,transform] duration-380 ease-[cubic-bezier(0.34,1.26,0.64,1)] group-hover:max-w-20 group-hover:translate-x-0 group-hover:opacity-100">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full duration-300 ease-[cubic-bezier(0.34,1.26,0.64,1)] group-hover:scale-110 group-hover:rotate-90 group-hover:text-white">
          +
        </span>
        <Image
          src="/user.webp"
          height={24}
          width={24}
          alt="user-pic"
          className="rounded-full"
        />
      </div>

      {/* Label  always visible */}
      <span className="text-sm font-medium text-white">Let’s Talk</span>
    </button>
  )
}
