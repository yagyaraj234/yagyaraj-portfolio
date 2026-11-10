export default function Footer() {
  return (
    <footer className="text-muted mt-24 pb-10 text-sm">
      <a
        href="#top"
        className="hover:text-foreground mx-auto mb-5 flex w-fit items-center gap-2 rounded-md px-3 py-2 text-[13px]"
      >
        Back to top <span aria-hidden="true">↑</span>
      </a>
      <div className="flex items-center justify-center gap-2 max-sm:flex-col">
        <h3>Designed &amp; developed by Yagyaraj</h3>
        <span className="hidden text-(--color-text-tertiary) sm:inline-block">
          |
        </span>
        <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  )
}
