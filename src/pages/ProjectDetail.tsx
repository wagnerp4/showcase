import { useParams, Link, Navigate } from "react-router-dom"
import { GlassCard } from "../components"
import { projects, getCategoryColor } from "../data/projects"

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const categoryClass = getCategoryColor(project.categoryColor)

  return (
    <div className="px-6">
      <section className="max-w-6xl mx-auto py-12">
        <Link
          to="/projects"
          className="font-mono text-sm text-mist hover:text-ice transition-colors inline-flex items-center gap-2 mb-8"
        >
          ← All projects
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className={`font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded ${categoryClass}`}>
                {project.category}
              </span>
              <span className="font-mono text-xs text-mist">{project.version}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold text-ice mb-4">
              {project.title}
            </h1>

            <p className="text-lg text-mist mb-8">
              {project.description}
            </p>

            <ul className="space-y-3 mb-8">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-lumen mt-2 flex-shrink-0" />
                  <span className="text-mist">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                href={`https://github.com/wagnerp4/${project.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View source →
              </a>
              <Link to="/trainer" className="btn-ghost">
                Open trainer
              </Link>
            </div>
          </div>

          <div>
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="micro-label">Live preview</span>
              </div>

              <div className="aspect-video bg-obsidian rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                <div
                  className="absolute w-32 h-32 rounded-full opacity-30"
                  style={{
                    background: `radial-gradient(circle, var(--color-${project.categoryColor === "lumen" ? "lumen" : project.categoryColor === "plasma" ? "plasma" : "ember"}) 0%, transparent 70%)`,
                    filter: "blur(20px)",
                  }}
                />
                <span className="font-mono text-xs text-mist uppercase tracking-widest relative z-10">
                  Interactive demo coming soon
                </span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="micro-label">Status</span>
                <span className="font-mono text-xs text-plasma">prototype</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  )
}
