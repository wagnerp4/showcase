# wagnerp4 - ML, Robotics & Deep Learning

**Live Site:** [https://wagnerp4.github.io/showcase/](https://wagnerp4.github.io/showcase/)

A personal portfolio site showcasing Philipp Wagner's research and projects in deep learning, audio and multimodal processing, and robotics. Built with a dark molten-glass aesthetic featuring animated background blobs, glass-morphism cards, and a cyan/violet/coral accent palette.

**Note:** All content reflects Philipp Wagner's public work from his CV, GitHub repositories ([wagnerp4](https://github.com/wagnerp4), [heoj1N](https://github.com/heoj1N)), and published research.

Hosted on GitHub Pages with automated deployments via GitHub Actions.

## Tech Stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS v4** with custom design tokens
- **React Router** for client-side routing
- **Google Fonts**: Space Grotesk (display/body) + JetBrains Mono (nav/labels/stats)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Home page with hero, stats, featured projects |
| `/projects` | All projects index |
| `/projects/:slug` | Individual project detail pages |
| `/about` | Research / About page with experience and publications |
| `/trainer` | Trainer (under construction) |
| `/contact` | Contact form |

## Featured Projects

- **M3SGG** - Modular multi-modal framework for video scene graph generation
- **Speed Estimation** - Audio-based speed/step-count estimation (EUSIPCO 2024)
- **TrOCR / OOCR** - Transformer OCR training framework
- **Autrainer SED** - Sound event detection extension
- **neuroTUM BCI Arm** - BCI-controlled robotic arm (NEURA Robotics Challenge)
- **Rustic Knights** - Chess in Babylon.js + TypeScript + Rust
- **RL Algos** - Reinforcement learning algorithms collection
- **yogAI** - Yoga pose-detection webapp

## Design Tokens

### Colors

- `void` #04050a - page background
- `obsidian` #0a0c14 - dark surfaces
- `slate` #141826 - card backgrounds
- `ice` #eef1f8 - primary text
- `mist` #9aa3bd - secondary text
- `lumen` #86d3ff - cyan accent (primary)
- `plasma` #b58cff - violet accent
- `ember` #ff9a6b - coral accent

### Visual Features

- Animated background blobs with slow vertical drift
- 54px faint white grid overlay with radial mask
- Glass cards with translucent gradients and inset highlights
- Gradient text effects (lumen → plasma → ember)
- Mobile-responsive layout with collapsible navigation

## Project Structure

```
src/
├── components/     # Shared UI components
│   ├── BlobBackground.tsx
│   ├── Footer.tsx
│   ├── GlassCard.tsx
│   ├── Header.tsx
│   └── Layout.tsx
├── data/           # Static data
│   └── projects.ts
├── pages/          # Route pages
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Home.tsx
│   ├── ProjectDetail.tsx
│   ├── Projects.tsx
│   └── Trainer.tsx
├── App.tsx
├── index.css
└── main.tsx
```

## License

MIT
