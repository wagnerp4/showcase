import { Link } from "react-router-dom"
import { GlassCard } from "../components"
import { projects, getCategoryColor, getAccentDots } from "../data/projects"

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const categoryClass = getCategoryColor(project.categoryColor)
  const dots = getAccentDots(project.categoryColor)

  return (
    <Link to={`/projects/${project.slug}`}>
      <GlassCard className="p-5 h-full" hover>
        <div className="flex items-center justify-between mb-3">
          <span className={`font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded ${categoryClass}`}>
            {project.category}
          </span>
          <span className="font-mono text-xs text-mist">{project.version}</span>
        </div>
        <h3 className="text-lg font-semibold text-ice mb-2">{project.title}</h3>
        <p className="text-sm text-mist mb-4">{project.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex gap-1">
            {dots.map((dot, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${dot}`} />
            ))}
          </div>
          <span className="font-mono text-xs text-mist hover:text-ice transition-colors">open →</span>
        </div>
      </GlassCard>
    </Link>
  )
}

export function Projects() {
  return (
    <div className="px-6">
      <section className="max-w-6xl mx-auto py-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-lumen" />
          <span className="eyebrow text-lumen">Index</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold text-ice mb-4">
          All experiments
        </h1>

        <p className="text-lg text-mist max-w-2xl mb-12">
          A growing collection of interactive demos, research prototypes and visual explanations across deep learning, computational neuroscience and robotics.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}
