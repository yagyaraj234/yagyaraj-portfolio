import { Users2Icon } from "lucide-react"

export default function BentoGrid() {
  return (
    <section className="my-24 select-none">
      <div className="mx-auto w-max rounded-lg bg-white px-2 py-1 text-center text-sm font-medium ring ring-zinc-200 drop-shadow-2xl">
        Features
      </div>
      <h3 className="mt-8 text-center text-4xl font-semibold text-zinc-900">
        Here's what Ticketapp Help can do:
      </h3>
      <div className="text-center text-sm text-zinc-600">
        So you focus on what matters most.
      </div>
      <div className="mt-16 grid grid-cols-2 gap-6">
        <div className="rounded-3xl p-2 ring ring-zinc-100 drop-shadow-lg">
          <div className="grid min-h-50 grid-cols-6 gap-2 rounded-t-2xl bg-linear-to-br from-indigo-50 via-indigo-300/30 to-indigo-400/20 p-4 text-white ring-taupe-50">
            <div className="col-span-2">
              <div className="m-4 w-max -rotate-30 rounded-xl bg-white p-1 shadow-2xs ring ring-zinc-200">
                <Users2Icon
                  fill="white"
                  size={40}
                  className="rounded-lg bg-indigo-300 p-1 shadow-sm ring ring-zinc-50"
                />
              </div>
            </div>

            <div className="col-span-4"></div>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-shadow-2xs text-shadow-zinc-100">
              Package Selling
            </h3>
            <p className="mt-2 text-sm tracking-tight text-zinc-700">
              Guest Pick their arrival time and date. We show only what fit.
              Full control over the package - easy for them to manage.
            </p>
          </div>
        </div>
        <div className="rounded-3xl p-2 ring ring-zinc-100 drop-shadow-lg">
          <div className="grid min-h-50 grid-cols-6 gap-2 rounded-t-2xl bg-linear-to-br from-orange-50 via-orange-300/30 to-orange-400/20 p-4 text-white ring-taupe-50">
            <div className="col-span-2">
              <div className="m-4 w-max -rotate-30 rounded-xl bg-white p-1 shadow-2xs ring ring-zinc-200">
                <Users2Icon
                  fill="white"
                  size={40}
                  className="rounded-lg bg-indigo-300 p-1 shadow-sm ring ring-zinc-50"
                />
              </div>
            </div>

            <div className="col-span-4"></div>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-shadow-2xs text-shadow-zinc-100">
              Package Selling
            </h3>
            <p className="mt-2 text-sm tracking-tight text-zinc-700">
              Guest Pick their arrival time and date. We show only what fit.
              Full control over the package - easy for them to manage.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
