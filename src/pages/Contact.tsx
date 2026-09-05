import { useState } from "react"
import type { FormEvent } from "react"
import { GlassCard } from "../components"

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:wagner.philipp99908@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(name)} (${encodeURIComponent(email)})`
    window.location.href = mailtoLink
  }

  return (
    <div className="px-6">
      <section className="max-w-6xl mx-auto py-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-lumen" />
          <span className="eyebrow text-lumen">Contact</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-ice mb-6 leading-tight">
              Let's build something alive.
            </h1>

            <p className="text-lg text-mist">
              Open to research collabs, residencies, and the occasional impossible demo.
            </p>
          </div>

          <div className="space-y-4">
            <GlassCard className="p-4 flex items-center justify-between">
              <span className="micro-label">email</span>
              <a
                href="mailto:wagner.philipp99908@gmail.com"
                className="font-mono text-sm text-ice hover:text-lumen transition-colors"
              >
                wagner.philipp99908@gmail.com →
              </a>
            </GlassCard>

            <div className="grid grid-cols-3 gap-4">
              <GlassCard className="p-4">
                <span className="micro-label block mb-1">github</span>
                <a
                  href="https://github.com/wagnerp4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ice hover:text-lumen transition-colors"
                >
                  wagnerp4
                </a>
              </GlassCard>
              <GlassCard className="p-4">
                <span className="micro-label block mb-1">github</span>
                <a
                  href="https://github.com/heoj1N"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ice hover:text-lumen transition-colors"
                >
                  heoj1N
                </a>
              </GlassCard>
              <GlassCard className="p-4">
                <span className="micro-label block mb-1">portfolio</span>
                <span className="text-sm text-ice">previous</span>
              </GlassCard>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <div className="grid grid-cols-2 gap-4">
                <GlassCard className="p-0">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent px-4 py-3 text-ice placeholder:text-mist outline-none"
                  />
                </GlassCard>
                <GlassCard className="p-0">
                  <input
                    type="email"
                    placeholder="you@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent px-4 py-3 text-ice placeholder:text-mist outline-none"
                  />
                </GlassCard>
              </div>

              <GlassCard className="p-0">
                <textarea
                  placeholder="Tell me about your project, idea, or question..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full bg-transparent px-4 py-3 text-ice placeholder:text-mist outline-none resize-none"
                />
              </GlassCard>

              <button type="submit" className="btn-primary">
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
