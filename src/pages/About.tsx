import { GlassCard } from "../components"

export function About() {
  const interests = [
    {
      title: "Deep Learning",
      description: "Transformer architectures, scene graph generation, OCR finetuning, and multimodal models for structured understanding.",
    },
    {
      title: "Audio & Multimodal",
      description: "Sound event detection, audio-based motion analysis, and cross-modal learning for speech and signal processing.",
    },
    {
      title: "Robotics & BCI",
      description: "Brain-computer interfaces, robotic arm control, exosuit development, and reinforcement learning for locomotion.",
    },
  ]

  const experience = [
    {
      company: "Dassault Systèmes",
      role: "AI/ML Quality Engineer",
      period: "Jun 2026 – Present",
      description: "MCP server integration for automated 3D modelling with Squish tests.",
    },
    {
      company: "Institute for Cognitive Systems, TUM",
      role: "Research Assistant",
      period: "2024 – 2026",
      description: "Digital phenotyping Android app (Kotlin); robotics and 3D modelling for supernumerary limbs and exosuits.",
    },
    {
      company: "Klinikum Rechts der Isar / TUM Health Informatics",
      role: "Research Assistant",
      period: "Apr 2024 – Oct 2025",
      description: "RAG for cultural-heritage scriptures (EU Horizon SHIFT), Transformer OCR finetuning, audio pattern recognition.",
    },
    {
      company: "Tiba Management GmbH",
      role: "Research Intern",
      period: "2023",
      description: "Springer chapter on AI in Project Management; LLM assistants for PM workflows.",
    },
  ]

  const publications = [
    {
      title: "Audio-Based Step-Count Estimation for Running — Windowing and Neural Network Baselines",
      authors: "Wagner, P., Triantafyllopoulos, A., Gebhard, A., Schuller, B.",
      venue: "EUSIPCO 2024",
      url: "https://ieeexplore.ieee.org/xpl/conhome/1000800/all-proceedings",
    },
    {
      title: "The Evolution of Technology in Artificial Intelligence and Its Impact on Project Management",
      authors: "Wagner, P. & Wagner, R.",
      venue: "ICAIAME 2023 (Springer LNCS), pp. 268–293",
      url: "https://link.springer.com/",
    },
    {
      title: "The Impact of Blockchain Technologies on Project Management and the Complementary Role of AI",
      authors: "Wagner, P., Wagner, T., & Wagner, R.",
      venue: "12th IPMA Research Conference, Oct 2024 (accepted)",
      url: "https://www.ipma.world/research/",
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
                <span className="font-mono text-xs text-mist uppercase tracking-widest">Philipp A. Wagner</span>
                <span className="font-mono text-xs text-mist uppercase tracking-widest">Munich</span>
              </div>
            </GlassCard>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-lg text-mist mb-6">
              I am a M.Sc. student in Robotics, Cognition, Intelligence at TUM (Technical University of Munich), majoring in Machine Learning and Robotics. Previously, I completed my B.Sc. in Computer Science with a focus on Deep Learning at the University of Augsburg, graduating with a thesis grade of 1.0.
            </p>

            <p className="text-lg text-mist mb-8">
              My work spans audio and multimodal learning, Transformer OCR, BCI-controlled robotics, and scene graph generation. Most of my code lives on{" "}
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
              hosts interactive experiments and side projects.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <GlassCard className="p-4">
                <span className="micro-label block mb-1">Focus</span>
                <span className="text-sm text-ice">ML & Robotics</span>
              </GlassCard>
              <GlassCard className="p-4">
                <span className="micro-label block mb-1">Currently</span>
                <span className="text-sm text-ice">AI/ML @ Dassault</span>
              </GlassCard>
              <GlassCard className="p-4">
                <span className="micro-label block mb-1">Stack</span>
                <span className="text-sm text-ice">PyTorch · HF</span>
              </GlassCard>
            </div>
          </div>
        </div>

        <div className="mb-16">
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

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-ice mb-8">Experience</h2>

          <div className="space-y-4">
            {experience.map((exp) => (
              <GlassCard key={exp.company} className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-ice">{exp.company}</h3>
                    <span className="text-sm text-lumen">{exp.role}</span>
                  </div>
                  <span className="font-mono text-xs text-mist">{exp.period}</span>
                </div>
                <p className="text-sm text-mist">{exp.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-ice mb-8">Publications</h2>

          <div className="space-y-4">
            {publications.map((pub) => (
              <GlassCard key={pub.title} className="p-6">
                <h3 className="text-lg font-semibold text-ice mb-2">{pub.title}</h3>
                <p className="text-sm text-mist mb-2">{pub.authors}</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-plasma">{pub.venue}</span>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-mist hover:text-ice transition-colors"
                  >
                    venue →
                  </a>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
