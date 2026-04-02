# Developer Quick Reference

## Available Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)
npm run build           # Build for production
npm start               # Start production server
npm run lint            # Run ESLint

# TypeScript
tsc --noEmit           # Check for TypeScript errors
```

## Key Files to Know

### Pages
- `app/page.tsx` - Homepage, main landing page
- `app/(pages)/how-it-works/page.tsx` - Workflow explanation
- `app/(pages)/docs/page.tsx` - Technical documentation
- `app/(pages)/request-access/page.tsx` - Early access signup
- `app/(pages)/contact/page.tsx` - Contact page

### Components
- `components/Navigation.tsx` - Top navbar on all pages
- `components/Footer.tsx` - Footer content

### Libraries & Utilities
- `lib/api.ts` - Axios client + API types (AnalyzeRequest, AnalyzeResponse)
- `lib/store.ts` - Zustand store (useAppStore)
- `lib/hooks.ts` - React Query hooks (useAnalyzeSequence)
- `lib/constants.ts` - Shared constants and enums

### Styling
- `styles/globals.css` - All global styles, animations, glass morphism
- `tailwind.config.js` - Tailwind color + font customization
- `next.config.js` - Next.js build configuration

## Common Tasks

### Add a New Page

Create a file at `app/(pages)/[name]/page.tsx`:

```typescript
'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function NewPage() {
  return (
    <>
      <Navigation />
      <main className="relative z-10">
        {/* Your content here */}
      </main>
      <Footer />
    </>
  );
}
```

Route: `/[name]`

### Make an API Call

```typescript
import { useAnalyzeSequence } from '@/lib/hooks';

export default function MyComponent() {
  const { data, isLoading, error } = useAnalyzeSequence(
    { sequence: '...', organism: 'human', build: 'hg38' },
    true  // enable query
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <div>{data?.gene}</div>;
}
```

### Styles & Animations

```typescript
// Glass morphism card
<div className="glass rounded-lg p-8">
  Content with glass effect
</div>

// Button styles
<button className="btn btn-primary">Primary CTA</button>
<button className="btn btn-ghost">Secondary CTA</button>

// Animations
<div className="reveal">Fades in on mount</div>
<div className="float">Floats up and down</div>
<div className="pulse">Pulses opacity</div>
```

### Add an Environment Variable

1. Add to `.env.example`:
```
NEXT_PUBLIC_VARIABLE_NAME=default_value
```

2. Use in code:
```typescript
const value = process.env.NEXT_PUBLIC_VARIABLE_NAME;
```

## Color Reference

- **Primary Blue**: `text-primary-blue` or `#0066ff`
- **Accent Cyan**: `text-accent-cyan` or `#00d9ff`
- **Accent Yellow**: `text-accent-yellow` or `#ffd700`
- **Dark BG**: `bg-black` or `#000000`
- **Muted Text**: `text-text-muted` or `#b0b8c8`

## Typography

```html
<!-- Heading -->
<h1 className="font-sans text-5xl font-bold">Title</h1>

<!-- Mono (code) -->
<p className="font-mono text-xs">Code text</p>

<!-- Small caps label -->
<div className="font-mono text-xs uppercase tracking-widest">LABEL</div>
```

## Responsive Breakpoints

Tailwind defaults (mobile-first):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

```typescript
<div className="block md:hidden">Mobile only</div>
<div className="hidden md:block">Desktop only</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid
</div>
```

## Debugging

### Check API Connection
```typescript
// In lib/api.ts or any component
import api from '@/lib/api';
console.log('API Base URL:', api.defaults.baseURL);
```

### TypeScript Errors
```bash
npx tsc --noEmit
```

### Build Issues
```bash
npm run build -- --debug
```

## Project Structure Simplified

```
genpilot-next/
├── app/              # Pages (Next.js routing)
├── components/       # React components
├── lib/              # Utilities, hooks, API client
├── styles/           # Global CSS
└── public/           # Static assets (when added)
```

## Important Notes

- **All components are client-side** (`'use client'`)
- **Font family switch**: Sora for body text, Space Mono for code
- **Data fetching**: Use React Query hooks from `lib/hooks.ts`
- **State management**: Use Zustand store from `lib/store.ts`
- **API calls**: Use typed client from `lib/api.ts`
- **Styling**: Combine Tailwind classes + `styles/globals.css` for custom effects

## Testing Locally

```bash
npm run dev
# Open http://localhost:3000

# Test pages:
# - Home: http://localhost:3000
# - How It Works: http://localhost:3000/how-it-works
# - Docs: http://localhost:3000/docs
# - Contact: http://localhost:3000/contact
# - Request Access: http://localhost:3000/request-access
```

## Useful Extensions

Install for VS Code:
- **ES7+ React/Redux/React-Native snippets** (dsznajder)
- **Tailwind CSS IntelliSense** (bradlc)
- **TypeScript Vue Plugin** (Vue)

## Git Workflow

```bash
git add .
git commit -m "feat: Add new feature"
git push origin main
```

## Need Help?

- Check `README.md` for installation
- Review `ARCHITECTURE_GUIDE.md` for technical overview
- Look at existing page implementations for patterns
- Check `.env.example` for available configuration
