import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

export function Header() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "Research" },
    { path: "/trainer", label: "Trainer" },
    { path: "/contact", label: "Contact" },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="relative z-50 px-6 py-7">
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-slate flex items-center justify-center border border-border-light">
            <span className="font-mono text-sm font-medium text-ice">wp</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-medium text-ice leading-tight">wagnerp4 · neuro & robotics</div>
            <div className="text-[10px] text-mist font-mono uppercase" style={{ letterSpacing: "0.32em" }}>obsidian studio</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-mono text-xs uppercase tracking-widest transition-colors ${
                isActive(link.path) ? "text-ice" : "text-mist hover:text-ice"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/wagnerp4"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full bg-ice text-void hover:bg-ice/90 transition-colors"
          >
            GitHub →
          </a>

          <button
            className="md:hidden p-2 text-ice"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden mt-4 px-4 py-4 glass-card">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-mono text-xs uppercase tracking-widest transition-colors ${
                  isActive(link.path) ? "text-ice" : "text-mist hover:text-ice"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
