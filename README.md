# GenPilot Next.js Project - UI Layer

A modern Next.js 14+ frontend application for CRISPR genetic engineering tools (UI/Frontend Development Only).

> 📋 **For Team Development**: See [DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md) for the complete development roadmap and execution phases.
> ⚠️ **Scope**: This repository contains **UI and frontend development only**. Backend, bioinformatics pipelines, and tool implementations are managed separately.

## Tech Stack

### Frontend
- **Framework**: Next.js 14+
- **UI**: React 18+
- **Styling**: Tailwind CSS + Custom CSS
- **State**: React Query / Zustand
- **API Client**: Axios / Fetch API
- **Build**: Webpack / Turbopack

### Backend (Separate Service)
- **API**: FastAPI / Node.js
- **Database**: PostgreSQL + Redis
- **Queue**: Celery / Bull
- **Bioinformatics**: Reference genome alignment, coordinate conversion
- **Analysis**: Scoring models and prediction engines

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
genpilot-next/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── (pages)/
│   │   ├── how-it-works/   # How it works page
│   │   ├── docs/           # Documentation page
│   │   ├── contact/        # Contact page
│   │   └── request-access/ # Early access request page
├── components/
│   ├── Navigation.tsx      # Top navigation bar
│   └── Footer.tsx          # Footer component
├── styles/
│   └── globals.css         # Global styles and animations
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Features

- **Theme Support**: Complete light/dark theme system with persistent localStorage preference
- **Floating Theme Toggle**: Always-visible emoji toggle (🌙/☀️) at bottom-right of screen
- Responsive glass morphism UI with theme-aware colors
- Real-time API mock showcase for CRISPR analysis
- Comprehensive technical documentation
- Early access request form
- Contact integration with SolveArn
- Animated DNA loading sequences
- Smooth 0.5s theme transitions across all components

## Styling

### Theme System
- **Light Theme**: Black text (#0d1117), white backgrounds (#f4f7fb) with light blue gradient
- **Dark Theme**: White text (#ffffff), black background (#000000) with dark blue gradient
- **Theme Toggle**: Click the floating emoji button at bottom-right to switch themes
- **Persistence**: Theme preference saved to localStorage and survives page reloads

### Colors
- **Light Primary Blue**: #0052cc
- **Dark Primary Blue**: #0066ff
- **Accent Cyan**: Light (#0099bb) / Dark (#00d9ff)
- **Accent Yellow**: #ffd700
- **Glass Morphism**: 30px blur with semi-transparent backgrounds (theme-aware)
- **Typography**: Sora (sans-serif), Space Mono (monospace)

## API Integration

The frontend connects to a backend API documented in the `/docs` page. Example endpoints:

```
POST /api/analyze
- Input: { sequence, organism, build }
- Output: { hg38, hg19, strand, pam, gene, confidence }
```

## Deployment

Ready to deploy to Vercel, Netlify, or any Node.js hosting platform.

```bash
# Vercel
npm i -g vercel
vercel
```

## License

Proprietary - SolveArn
