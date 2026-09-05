import { Link } from "react-router-dom"
import { GlassCard } from "../components"

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

export function Trainer() {
  return (
    <div className="px-6">
      <section className="max-w-6xl mx-auto py-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-ember" />
          <span className="eyebrow text-ember">Now building</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold text-ice mb-6">
          The Trainer
        </h1>

        <p className="text-lg text-mist max-w-2xl mb-12">
          A drag-in playground for prototyping networks - wire layers, set a loss, and watch the gradient field ripple through obsidian glass. This section is under construction; the first interactive prototype will be a tiny fully-connected network trainer in the browser.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <NetworkGraph />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-ice mb-4">Coming soon</h2>
            <p className="text-mist mb-8">
              The trainer will let you build a network by dragging nodes, pick a toy dataset, and watch loss contours evolve as you tweak weights and hyperparameters.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["PyTorch", "CUDA", "MuJoCo", "JAX"].map((chip) => (
                <span key={chip} className="font-mono text-xs px-3 py-1.5 rounded-full border border-border text-mist">
                  {chip}
                </span>
              ))}
            </div>

            <Link to="/projects" className="btn-ghost">
              Browse existing projects →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
