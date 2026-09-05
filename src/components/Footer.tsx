export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-mist">
          © 2026 wagnerp4 — obsidian studio
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/wagnerp4"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-mist hover:text-ice transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://github.com/heoj1N"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-mist hover:text-ice transition-colors"
          >
            GitHub2
          </a>
          <a
            href="mailto:wagner.philipp99908@gmail.com"
            className="font-mono text-xs uppercase tracking-widest text-mist hover:text-ice transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
