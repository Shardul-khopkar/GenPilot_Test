# Developer Quick Reference - Frontend/UI Only

**SCOPE**: Frontend UI development only. 3 Tools: Tindr, HGtranslate, Success Predictor

---

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

### Tool Pages
- `app/(pages)/tools/tindr/page.tsx` - Base pair location finder
- `app/(pages)/tools/hgtranslate/page.tsx` - Genome build converter
- `app/(pages)/tools/predictor/page.tsx` - Success predictor analysis

### Shared Components
- `components/Navigation.tsx` - Top navbar
- `components/FloatingThemeToggle.tsx` - Theme toggle (always visible)
- `components/Footer.tsx` - Footer
- `components/ui/SequenceInput.tsx` - Reusable sequence input
- `components/ui/ParameterSelector.tsx` - Build/organism selectors
- `components/ui/ResultsExporter.tsx` - Export functionality

### Tool-Specific Components
- `components/tools/tindr/` - Tindr tool components
- `components/tools/hgtranslate/` - HGtranslate components
- `components/tools/predictor/` - Success Predictor components

### Libraries & Utilities
- `lib/api.ts` - API client for tool endpoints
- `lib/store.ts` - Zustand theme store + localStorage persistence
- `lib/hooks.ts` - React Query hooks for API calls
- `lib/constants.ts` - Colors, text, configuration

### Theme System
- **Store (lib/store.ts)**: `useAppStore()` hook with `theme` state and `toggleTheme()` action
- **CSS Variables**: `:root` (light) and `html.dark` (dark) in `styles/globals.css`
- **Component Usage**:
  ```typescript
  import { useAppStore } from '@/lib/store';
  
  export default function Component() {
    const { theme, toggleTheme } = useAppStore();
    return <button onClick={toggleTheme}>{theme}</button>;
  }
  ```

### Styling
- `styles/globals.css` - Global styles, animations, glass morphism
- `tailwind.config.js` - Tailwind customization
- `next.config.js` - Next.js configuration

---

## Common Tasks

### Add a New Tool Page

Create `app/(pages)/tools/[toolname]/page.tsx`:

```typescript
'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ToolInput from '@/components/tools/[toolname]/ToolInput';
import ToolResults from '@/components/tools/[toolname]/ToolResults';
import { useState } from 'react';

export default function ToolPage() {
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Navigation />
      <main className="relative z-10 min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1>Tool Name</h1>
          <ToolInput onSubmit={(input) => { /* call API */ }} />
          {results && <ToolResults data={results} />}
        </div>
      </main>
      <Footer />
    </>
  );
}
```

Route: `/tools/[toolname]`

### Make an API Call for Tool

```typescript
import { useQuery } from 'react-query';
import axios from 'axios';

export function useToolAnalysis(input: ToolInput) {
  return useQuery(
    ['tool-analysis', input],
    async () => {
      const { data } = await axios.post('/api/tool/analyze', input);
      return data;
    },
    { enabled: !!input }
  );
}
```

Usage in component:
```typescript
const { data, isLoading, error } = useToolAnalysis(inputData);

if (isLoading) return <div>Analyzing...</div>;
if (error) return <div>Error: {error.message}</div>;
return <ResultsDisplay results={data} />;
```

### Create Reusable Input Component

Create `components/ui/MyInput.tsx`:

```typescript
'use client';

interface MyInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading?: boolean;
}

export default function MyInput({ 
  value, onChange, onSubmit, isLoading 
}: MyInputProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">
          DNA Sequence
        </label>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter DNA sequence..."
          className="w-full h-32 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
        />
      </div>
      <button
        onClick={onSubmit}
        disabled={isLoading}
        className="btn-primary"
      >
        {isLoading ? 'Processing...' : 'Submit'}
      </button>
    </div>
  );
}
```

### Export Results to CSV/JSON

```typescript
export function exportResults(data: any, format: 'csv' | 'json') {
  const timestamp = new Date().toISOString();
  
  if (format === 'json') {
    const json = JSON.stringify(data, null, 2);
    downloadFile(json, `results-${timestamp}.json`, 'application/json');
  } else {
    const csv = convertToCSV(data);
    downloadFile(csv, `results-${timestamp}.csv`, 'text/csv');
  }
}

function downloadFile(content: string, filename: string, type: string) {
  const blob = new Blob([content], { type });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}
```

### Enable Theme Switching in Component

All components automatically support theme via CSS variables:

```typescript
export default function MyComponent() {
  return (
    <div className="text-[var(--text)] bg-[var(--bg)]">
      {/* Uses CSS variables that change with theme */}
    </div>
  );
}
```

Or use Tailwind dark: prefix:
```typescript
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
```

### Add Validation to Forms

```typescript
interface ValidationErrors {
  sequence?: string;
  build?: string;
}

function validateToolInput(input: any): ValidationErrors {
  const errors: ValidationErrors = {};
  
  if (!input.sequence) {
    errors.sequence = 'Sequence is required';
  }
  if (input.sequence && !/^[ATCGN]+$/i.test(input.sequence)) {
    errors.sequence = 'Invalid DNA sequence';
  }
  if (!input.build) {
    errors.build = 'Build selection required';
  }
  
  return errors;
}
```

---

## API Endpoints (Backend Provides)

### Tindr - Base Pair Location
```
POST /api/tindr/locate
Body: { sequence, organism, build }
Returns: { locations: [...], statusCode }
```

### HGtranslate - Coordinate Conversion
```
POST /api/hgtranslate/convert
Body: { chromosome, start, end, sourceBuild, targetBuild }
Returns: { converted: {...}, statusCode }
```

### Success Predictor - Analysis
```
POST /api/predictor/analyze
Body: { sequence, organism, build, options: {...} }
Returns: { successScore, factors, ruleExplanations, statusCode }
```

---

## Component Structure Template

```typescript
'use client';  // Mark as client component if interactive

import { useState } from 'react';
import { useQuery } from 'react-query';

interface Props {
  onComplete?: (result: any) => void;
}

export default function ComponentName({ onComplete }: Props) {
  const [input, setInput] = useState('');
  const { data, isLoading, error } = useQuery(/* ... */);

  const handleSubmit = async () => {
    // Logic here
  };

  return (
    <div className="space-y-4">
      {/* JSX here */}
    </div>
  );
}
```

---

## Styling Patterns

### Use Glass Morphism
```css
.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(30px);
  border: 1.5px solid var(--glass-border);
}
```

### Use Theme Colors
```css
color: var(--text);           /* Primary text */
background: var(--bg);        /* Primary background */
color: var(--accent-cyan);    /* Accent color */
```

### Responsive Grid
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Grid items */}
</div>
```

### Button Styles
```typescript
{/* Primary Button */}
<button className="btn btn-primary">Submit</button>

{/* Ghost Button */}
<button className="btn btn-ghost">Cancel</button>
```

---

## Debugging Tips

### Check Theme State
```typescript
import { useAppStore } from '@/lib/store';

export function ThemeDebug() {
  const { theme } = useAppStore();
  return <div>Current theme: {theme}</div>;
}
```

### Console Logging API Calls
Add in `lib/api.ts`:
```typescript
interceptor.response.use(
  (response) => {
    console.log('API Response:', response);
    return response;
  }
);
```

### Chrome DevTools Theme Testing
Open Chrome DevTools:
1. `Ctrl+Shift+I`
2. `Escape` (open console drawer)
3. Run: `document.documentElement.classList.toggle('dark')`

---

## File Checklist for New Tool

- [ ] `app/(pages)/tools/[toolname]/page.tsx` - Main page
- [ ] `components/tools/[toolname]/ToolInput.tsx` - Input form
- [ ] `components/tools/[toolname]/ToolResults.tsx` - Results display
- [ ] `lib/api.ts` - Add tool endpoint types
- [ ] `components/Navigation.tsx` - Add link to tool
- [ ] Tested on mobile + desktop
- [ ] Theme works (light/dark)
- [ ] Forms have validation
- [ ] Export functionality added
- [ ] Responsive images/assets
- [ ] Accessibility check (ARIA labels)
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
<div className="reveal">Fades in on mount with scroll reveal</div>
<div className="float">Floats up and down</div>
<div className="pulse">Pulses opacity</div>

// Theme Toggle (FloatingThemeToggle already in layout)
// For manual toggle:
const { theme, toggleTheme } = useAppStore();
<button onClick={toggleTheme}>{theme === 'light' ? '🌙' : '☀️'}</button>
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

### Light Theme
- **Text**: `#0d1117` (black) or `#1a1a1a` (muted)
- **Background**: `#f4f7fb` with light blue gradient
- **Primary Blue**: `#0052cc`
- **Accent Cyan**: `#0099bb`
- **Yellow**: `#ffd700`

### Dark Theme (Default)
- **Primary Blue**: `#0066ff` or use `text-primary-blue`
- **Accent Cyan**: `#00d9ff` or use `text-accent-cyan`
- **Accent Yellow**: `#ffd700` or use `text-accent-yellow`
- **Dark BG**: `#000000` or use `bg-black`
- **Muted Text**: `#b0b8c8` or use `text-text-muted`

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
