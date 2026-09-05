import { Link } from "react-router-dom"
import { GlassCard } from "../components"
import { projects, getCategoryColor, getAccentDots } from "../data/projects"

function LossChart() {
  const bars = [
    { height: 85, color: "bg-lumen" },
    { height: 70, color: "bg-lumen" },
    { height: 90, color: "bg-lumen" },
    { height: 65, color: "bg-lumen" },
    { height: 55, color: "bg-plasma" },
    { height: 75, color: "bg-plasma" },
    { height: 50, color: "bg-plasma" },
    { height: 60, color: "bg-plasma" },
    { height: 45, color: "bg-ember" },
    { height: 70, color: "bg-ember" },
    { height: 40, color: "bg-ember" },
    { height: 55, color: "bg-ember" },
  ]

  return (
    <GlassCard className="p-5 w-full max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="micro-label">Loss · transformer-9</span>
        <div className="w-2 h-2 rounded-full bg-lumen" />
      </div>
      
      <div className="flex items-end gap-1.5 h-24 mb-4">
        {bars.map((bar, i) => (
          <div
            key={i}
            className={`flex-1 rounded-sm ${bar.color}`}
            style={{ height: `${bar.height}%` }}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="micro-label mb-1">Epoch</div>
          <div className="text-2xl font-semibold text-ice">142 <span className="text-mist text-lg">/ 200</span></div>
        </div>
        <div>
          <div className="micro-label mb-1">Throughput</div>
          <div className="text-2xl font-semibold text-ice">18.4k <span className="text-mist text-lg">/s</span></div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-border">
        <span className="font-mono text-xs text-mist">η = 3e-4 · wd 0.01</span>
        <span className="font-mono text-xs text-lumen">converging</span>
      </div>
    </GlassCard>
  )
}

function NetworkGraph() {
  const nodes = [
    { label: "in", color: "bg-lumen/60", size: "w-3 h-3" },
    { label: "fc-1", color: "bg-lumen", size: "w-4 h-4" },
    { label: "attn", color: "bg-plasma/60", size: "w-3 h-3" },
    { label: "fc-2", color: "bg-ember/60", size: "w-4 h-4" },
    { label: "out", color: "bg-lumen", size: "w-4 h-4" },
  ]

  return (
    <GlassCard className="p-5">
      <div className="flex items-center justify-between mb-6">
        <span className="micro-label">Network Graph</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-lumen" />
          <div className="w-2 h-2 rounded-full bg-plasma" />
          <div className="w-2 h-2 rounded-full bg-ember" />
        </div>
      </div>

      <div className="flex items-center justify-between px-2 mb-6">
        {nodes.map((node, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className={`${node.size} ${node.color} rounded-full`} />
            <span className="font-mono text-[10px] text-mist">{node.label}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-border">
        <span className="font-mono text-xs text-mist">Loss 0.041 · ↓ 12%</span>
        <span className="font-mono text-xs text-lumen">training</span>
      </div>
    </GlassCard>
  )
}

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
        <p className="text-sm text-mist mb-4 line-clamp-2">{project.description}</p>
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

export function Home() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <div className="px-6">
      <section className="max-w-6xl mx-auto py-12 md:py-20">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-lumen animate-pulse" />
              <span className="eyebrow text-lumen">Live</span>
              <span className="eyebrow text-mist">· Training loop active</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[78px] font-semibold leading-[1.05] tracking-tight mb-6">
              <span className="text-ice">Shaping</span>
              <br />
              <span className="gradient-text">synthetic minds</span>
              <br />
              <span className="text-mist">one neuron at a time.</span>
            </h1>

            <p className="text-lg text-mist max-w-lg mb-8">
              A personal lab for deep learning, computational neuroscience and soft robotics - rendered as living, molten-glass interfaces you can reach in and poke.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="btn-primary">
                View projects →
              </Link>
              <Link to="/trainer" className="btn-ghost">
                Start a trainer
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <LossChart />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-12 border-t border-border">
        <div className="grid grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="text-3xl md:text-4xl font-semibold text-ice mb-1">24</div>
            <div className="micro-label">Experiments</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-semibold text-ice mb-1">3.1<span className="text-plasma">M</span></div>
            <div className="micro-label">Neurons trained</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-semibold text-ice mb-1">0.98</div>
            <div className="micro-label">Top val acc</div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="eyebrow text-lumen block mb-2">Selected work</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-ice">Projects in the chamber</h2>
          </div>
          <Link to="/projects" className="font-mono text-sm text-mist hover:text-ice transition-colors hidden sm:block">
            All 24 →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <Link to="/projects" className="font-mono text-sm text-mist hover:text-ice transition-colors block text-center mt-6 sm:hidden">
          All 24 →
        </Link>
      </section>

      <section className="max-w-6xl mx-auto py-12">
        <GlassCard className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="eyebrow text-ember block mb-2">Now building</span>
              <h2 className="text-3xl font-semibold text-ice mb-4">The Trainer</h2>
              <p className="text-mist mb-6">
                A drag-in playground for prototyping networks - wire layers, set a loss, and watch the gradient field ripple through obsidian glass.
              </p>
              <div className="flex flex-wrap gap-2">
                {["PyTorch", "CUDA", "MuJoCo", "JAX"].map((chip) => (
                  <span key={chip} className="font-mono text-xs px-3 py-1.5 rounded-full border border-border text-mist">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <NetworkGraph />
              <Link to="/trainer" className="btn-primary w-full justify-center">
                Launch →
              </Link>
            </div>
          </div>
        </GlassCard>
      </section>
    </div>
  )
}
