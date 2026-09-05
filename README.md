# wagnerp4 - neuro, robotics & deep learning

**Live Site:** [https://wagnerp4.github.io/showcase/](https://wagnerp4.github.io/showcase/)

A personal portfolio site showcasing experiments in deep learning, computational neuroscience, and soft robotics. Built with a dark molten-glass aesthetic featuring animated background blobs, glass-morphism cards, and a cyan/violet/coral accent palette.

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
| `/` | Home page with hero, stats, featured projects, trainer teaser |
| `/projects` | All experiments index |
| `/projects/:slug` | Individual project detail pages |
| `/about` | Research / About page |
| `/trainer` | Trainer (under construction) |
| `/contact` | Contact form |

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
