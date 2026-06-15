export default function Footer() {
  return (
    <footer className="text-muted mt-12 border-t border-(--color-border) pt-8 pb-8 text-sm">
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
