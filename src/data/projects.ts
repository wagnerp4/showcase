export interface Project {
  slug: string
  title: string
  category: string
  categoryColor: "lumen" | "plasma" | "ember"
  version: string
  description: string
  features: string[]
  repoUrl?: string
  liveUrl?: string
  status: "published" | "prototype" | "wip"
}

export const projects: Project[] = [
  {
    slug: "m3sgg",
    title: "M3SGG",
    category: "Deep Learning",
    categoryColor: "lumen",
    version: "v1.0",
    description: "Modular multi-modal framework for video scene graph generation.",
    features: [
      "Modular multi-modal SGG pipeline architecture.",
      "Video scene graph generation with temporal reasoning.",
      "Documentation site with usage examples and API reference.",
    ],
    repoUrl: "https://github.com/wagnerp4/m3sgg",
    liveUrl: "https://wagnerp4.github.io/m3sgg/",
    status: "published",
  },
  {
    slug: "speed-estimation",
    title: "Speed Estimation",
    category: "Audio / Deep Learning",
    categoryColor: "plasma",
    version: "v1.0",
    description: "Audio-based speed and step-count estimation for running. Published at EUSIPCO 2024.",
    features: [
      "DNN baselines for audio-based speed estimation.",
      "Windowing strategies for running audio analysis.",
      "Published at EUSIPCO 2024 conference.",
    ],
    repoUrl: "https://github.com/wagnerp4/speed-estimation",
    status: "published",
  },
  {
    slug: "trocr",
    title: "TrOCR / OOCR",
    category: "Deep Learning",
    categoryColor: "ember",
    version: "v1.0",
    description: "Transformer OCR training framework for heritage-script finetuning.",
    features: [
      "Transformer OCR training and finetuning pipeline.",
      "Open-source OCR toolkit (OOCR) with documentation.",
      "Heritage-script OCR finetuning from Health Informatics / SHIFT project.",
    ],
    repoUrl: "https://github.com/wagnerp4/TrOCR",
    liveUrl: "https://heoj1n.github.io/oocr/",
    status: "published",
  },
  {
    slug: "autrainer-sed",
    title: "Autrainer SED",
    category: "Audio",
    categoryColor: "lumen",
    version: "v0.9",
    description: "Fork/extension of Autrainer for sound event detection and audio recognition.",
    features: [
      "Sound event detection extension for Autrainer.",
      "Co-development of audio recognition tooling.",
      "Integration with upstream Autrainer framework.",
    ],
    repoUrl: "https://github.com/wagnerp4/autrainer_sed",
    liveUrl: "https://autrainer.github.io/autrainer/",
    status: "prototype",
  },
  {
    slug: "neurotum-bci",
    title: "neuroTUM BCI Arm",
    category: "Robotics / BCI",
    categoryColor: "plasma",
    version: "v1.0",
    description: "BCI-controlled MAiRA robotic arm pipeline with neuroTUM. Top-six Europe, NEURA Robotics Challenge.",
    features: [
      "Brain-computer interface for robotic arm control.",
      "MAiRA robotic arm integration pipeline.",
      "Top-six placement in Europe, NEURA Robotics Challenge ($10k team award).",
    ],
    status: "published",
  },
  {
    slug: "rustic-knights",
    title: "Rustic Knights",
    category: "Interactive / Graphics",
    categoryColor: "ember",
    version: "v0.5",
    description: "Chess game built with Babylon.js, TypeScript, and Rust backend.",
    features: [
      "3D chess visualization with Babylon.js.",
      "TypeScript frontend with Rust-based engine.",
      "Interactive piece movement and game logic.",
    ],
    repoUrl: "https://github.com/heoj1N/rustic-knights",
    status: "prototype",
  },
  {
    slug: "rl-algos",
    title: "RL Algos",
    category: "Robotics / RL",
    categoryColor: "lumen",
    version: "v0.8",
    description: "Collection of reinforcement learning algorithms and training scenarios.",
    features: [
      "Implementation of standard RL algorithms.",
      "Training scenarios for robotics applications.",
      "Modular codebase for experimentation.",
    ],
    repoUrl: "https://github.com/heoj1N/rl-algos",
    status: "prototype",
  },
  {
    slug: "yogai",
    title: "yogAI",
    category: "Computer Vision",
    categoryColor: "plasma",
    version: "v1.0",
    description: "Yoga pose-detection webapp using Flask and BlazePose.",
    features: [
      "Real-time pose detection with BlazePose.",
      "Flask-based web application.",
      "Pose feedback and guidance system.",
    ],
    repoUrl: "https://github.com/wagnerp4/yogAI",
    status: "published",
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
