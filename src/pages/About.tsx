import { GlassCard } from "../components"

export function About() {
  const interests = [
    {
      title: "Deep Learning",
      description: "Transformer interpretability, representation learning, and small-scale architectures that can be inspected by hand.",
    },
    {
      title: "Computational Neuroscience",
      description: "Models of cortical dynamics, synaptic plasticity, and neural population activity rendered as explorable simulations.",
    },
    {
      title: "Robotics",
      description: "Reinforcement learning for locomotion, morphology design, and embodied intelligence in physics simulators.",
    },
  ]

  return (
    <div className="px-6">
      <section className="max-w-6xl mx-auto py-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-plasma" />
          <span className="eyebrow text-plasma">Research</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold text-ice mb-12 max-w-2xl leading-tight">
          A researcher who ships the experiment, not just the paper.
        </h1>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <GlassCard className="aspect-square relative overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.3) 100%)",
                }}
              />
              <div
                className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full opacity-40"
                style={{
                  background: "radial-gradient(circle, var(--color-ice) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <span className="font-mono text-xs text-mist uppercase tracking-widest">Philipp Wagner</span>
                <span className="font-mono text-xs text-mist uppercase tracking-widest">TUM</span>
              </div>
            </GlassCard>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-lg text-mist mb-6">
              I sit at the seam of deep learning, neuroscience, and robotics. My work favors the interactive: models you can drag, fields you can perturb, and biological systems you can step through frame by frame.
            </p>

            <p className="text-lg text-mist mb-8">
              I am currently based in Munich, contributing to open-source research tools and building interfaces that make complex systems feel tangible. Most of my code lives on{" "}
              <a
                href="https://github.com/wagnerp4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ice underline hover:text-lumen transition-colors"
              >
                GitHub
              </a>
              ; my second account{" "}
              <a
                href="https://github.com/heoj1N"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ice underline hover:text-lumen transition-colors"
              >
                heoj1N
              </a>{" "}
              hosts side experiments and hardware sketches.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <GlassCard className="p-4">
                <span className="micro-label block mb-1">Focus</span>
                <span className="text-sm text-ice">learning systems</span>
              </GlassCard>
              <GlassCard className="p-4">
                <span className="micro-label block mb-1">Currently</span>
                <span className="text-sm text-ice">Cortical Flow</span>
              </GlassCard>
              <GlassCard className="p-4">
                <span className="micro-label block mb-1">Stack</span>
                <span className="text-sm text-ice">PyTorch · WebGL</span>
              </GlassCard>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-ice mb-8">Research interests</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {interests.map((interest) => (
              <GlassCard key={interest.title} className="p-6" hover>
                <h3 className="text-lg font-semibold text-ice mb-3">{interest.title}</h3>
                <p className="text-sm text-mist">{interest.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
