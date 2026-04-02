# GenPilot Next.js Project

A modern Next.js 14+ application for AI-powered CRISPR genetic engineering IDE.

> 📋 **For Team Development**: See [DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md) for the complete development roadmap and execution phases.

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
- **Bioinformatics**: BWA-MEM, Bowtie2, Pyliftover
- **ML**: PyTorch / TensorFlow

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

- Responsive glass morphism UI with blue/cyan/yellow color scheme
- Real-time API mock showcase for CRISPR analysis
- Comprehensive technical documentation
- Early access request form
- Contact integration with SolveArn
- Animated DNA loading sequences
- Dark theme optimized for developers

## Styling

- **Primary Blue**: #0066ff
- **Accent Cyan**: #00d9ff
- **Accent Yellow**: #ffd700
- **Glass Morphism**: 30px blur with semi-transparent backgrounds
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
