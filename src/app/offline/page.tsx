import Link from "next/link"

export const metadata = {
  title: "Offline | Yagyaraj",
  description: "You are offline right now. Reconnect to load the latest data.",
}

export default function OfflinePage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center py-16">
      <section className="w-full max-w-2xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mb-6 inline-flex rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-amber-800 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
          Offline mode
        </div>

        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">
          You&apos;re offline.
        </h1>

        <p className="mt-4 max-w-xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
          The app is installed and the shell is still available, but this page
          needs a network connection to fetch fresh content. Once you reconnect,
          reload and everything will keep working normally.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Go home
          </Link>
          <Link
            href="/blog"
            className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            Open blog
          </Link>
        </div>
      </section>
    </main>
  )
}
