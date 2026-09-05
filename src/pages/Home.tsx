import { Link } from "react-router-dom"
import { GlassCard } from "../components"
import { projects, getCategoryColor, getAccentDots } from "../data/projects"

function FeaturedHighlight() {
  return (
    <GlassCard className="p-5 w-full max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="micro-label">Featured · EUSIPCO 2024</span>
        <div className="w-2 h-2 rounded-full bg-lumen" />
      </div>

      <h3 className="text-lg font-semibold text-ice mb-2">Audio-Based Speed Estimation</h3>
      <p className="text-sm text-mist mb-4">
        Step-count estimation for running using windowing and neural network baselines.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="micro-label mb-1">Venue</div>
          <div className="text-sm font-semibold text-ice">EUSIPCO</div>
        </div>
        <div>
          <div className="micro-label mb-1">Year</div>
          <div className="text-sm font-semibold text-ice">2024</div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-border">
        <span className="font-mono text-xs text-mist">Wagner et al.</span>
        <span className="font-mono text-xs text-lumen">published</span>
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

      <div className="relative flex items-center justify-between px-4 mb-6">
        <div className="absolute top-1/2 left-8 right-8 h-px border-t border-dashed border-border-light -translate-y-3" />
        {nodes.map((node, i) => (
          <div key={i} className="relative z-10 flex flex-col items-center gap-2">
            <div className={`${node.size} ${node.color} rounded-full`} />
            <span className="font-mono text-[10px] text-mist">{node.label}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-border">
        <span className="font-mono text-xs text-mist">M3SGG · Scene Graph</span>
        <Link to="/projects/m3sgg" className="font-mono text-xs text-lumen hover:text-lumen/80 transition-colors">
          View →
        </Link>
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
              <span className="eyebrow text-lumen">Research</span>
              <span className="eyebrow text-mist">· ML & Robotics</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[78px] font-semibold leading-[1.05] tracking-tight mb-6">
              <span className="text-ice">Building</span>
              <br />
              <span className="gradient-text">intelligent systems</span>
              <br />
              <span className="text-mist">that see, hear, and move.</span>
            </h1>

            <p className="text-lg text-mist max-w-lg mb-8">
              A personal lab for deep learning, audio and multimodal research, and robotics — from Transformer OCR to BCI-controlled robotic arms.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="btn-primary">
                View projects →
              </Link>
              <Link to="/about" className="btn-ghost">
                About me
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <FeaturedHighlight />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16">
        <div className="grid grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="text-3xl md:text-4xl font-semibold text-ice mb-1">3</div>
            <div className="micro-label">Publications</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-semibold text-ice mb-1">{projects.length}</div>
            <div className="micro-label">Featured projects</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-semibold text-ice mb-1">ML</div>
            <div className="micro-label">& Robotics</div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto pt-8 pb-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="eyebrow text-lumen block mb-2">Selected work</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-ice">Projects in the lab</h2>
          </div>
          <Link to="/projects" className="font-mono text-sm text-mist hover:text-ice transition-colors hidden sm:block self-end">
            All {projects.length} →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <Link to="/projects" className="font-mono text-sm text-mist hover:text-ice transition-colors block text-center mt-6 sm:hidden">
          All {projects.length} →
        </Link>
      </section>

      <section className="max-w-6xl mx-auto py-12">
        <GlassCard className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="eyebrow text-ember block mb-2">Current focus</span>
              <h2 className="text-3xl font-semibold text-ice mb-4">M3SGG Framework</h2>
              <p className="text-mist mb-6">
                A modular multi-modal framework for video scene graph generation — combining visual and temporal reasoning for structured video understanding.
              </p>
              <div className="flex flex-wrap gap-2">
                {["PyTorch", "Transformers", "Video", "Scene Graphs"].map((chip) => (
                  <span key={chip} className="font-mono text-xs px-3 py-1.5 rounded-full border border-border text-mist">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <NetworkGraph />
            </div>
          </div>
        </GlassCard>
      </section>
    </div>
  )
}
