export interface Project {
  slug: string
  title: string
  category: string
  categoryColor: "lumen" | "plasma" | "ember"
  version: string
  description: string
  features: string[]
}

export const projects: Project[] = [
  {
    slug: "neurovis",
    title: "NeuroVis",
    category: "Deep Learning",
    categoryColor: "lumen",
    version: "v2.1",
    description: "Real-time 3D attention map explorer for transformer checkpoints.",
    features: [
      "Visualizes attention heads as interactive 3D fields.",
      "Loads Hugging Face checkpoints directly in the browser.",
      "Supports layer-wise comparison and head pruning previews.",
    ],
  },
  {
    slug: "synapse-field",
    title: "Synapse Field",
    category: "Neuroscience",
    categoryColor: "plasma",
    version: "v0.9",
    description: "Interactive cortical connectivity graph rendered from fMRI data.",
    features: [
      "Renders connectivity graphs from resting-state fMRI.",
      "Brushing and linking across 3D brain views and matrices.",
      "Exportable subgraphs for downstream analysis.",
    ],
  },
  {
    slug: "gaitsim",
    title: "GaitSim",
    category: "Robotics",
    categoryColor: "ember",
    version: "v1.4",
    description: "RL locomotion rig training quadruped gaits in a physics sandbox.",
    features: [
      "MuJoCo-based quadruped with configurable morphology.",
      "PPO + SAC baselines with live reward decomposition.",
      "Interactive gait policy inspection in the browser.",
    ],
  },
  {
    slug: "cortical-flow",
    title: "Cortical Flow",
    category: "Neuroscience",
    categoryColor: "plasma",
    version: "v1.0",
    description: "A live model of signal cascade through layered cortical columns.",
    features: [
      "Simulates layered cortical columns as dynamical systems.",
      "Exposes coupling and decay parameters in real time.",
      "Exports activation traces for further analysis.",
    ],
  },
  {
    slug: "latent-cartography",
    title: "Latent Cartography",
    category: "Deep Learning",
    categoryColor: "lumen",
    version: "v1.2",
    description: "Projecting a 4096-dim embedding into a navigable 2D field.",
    features: [
      "Dimensionality reduction with UMAP and t-SNE.",
      "Semantic zoom and neighborhood inspection.",
      "Anchored projections for reproducible layouts.",
    ],
  },
  {
    slug: "weight-studio",
    title: "Weight Studio",
    category: "Deep Learning",
    categoryColor: "lumen",
    version: "v0.3",
    description: "An in-browser trainer for tiny networks - drag the weights, watch the loss fall.",
    features: [
      "Build tiny fully-connected networks by dragging nodes.",
      "Visualize forward and backward passes live.",
      "Compare optimizers side by side.",
    ],
  },
]

export const getCategoryColor = (color: "lumen" | "plasma" | "ember") => {
  switch (color) {
    case "lumen":
      return "bg-lumen/20 text-lumen"
    case "plasma":
      return "bg-plasma/20 text-plasma"
    case "ember":
      return "bg-ember/20 text-ember"
  }
}

export const getAccentDots = (color: "lumen" | "plasma" | "ember") => {
  switch (color) {
    case "lumen":
      return ["bg-lumen", "bg-plasma", "bg-mist"]
    case "plasma":
      return ["bg-plasma", "bg-ember", "bg-mist"]
    case "ember":
      return ["bg-ember", "bg-lumen", "bg-mist"]
  }
}
