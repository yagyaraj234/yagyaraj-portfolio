export default function Footer() {
  return (
    <footer className="text-muted mt-8 mb-8 flex flex-col gap-4 text-sm max-sm:flex-col">
      <div className="mt-12 flex items-center justify-center gap-2">
        <h3>Design & Developed by Yagyaraj</h3>
        <span className="hidden sm:inline-block">|</span>
        <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  )
}
