# GenPilot Next.js Application Architecture Guide

## Executive Summary

GenPilot is a modern web application for CRISPR guide RNA sequence analysis and validation. This document explains how the current application works, its architecture, and provides planning guidance for future development on both frontend and backend.

## Part 1: Application Overview

### Purpose
GenPilot provides an IDE-like interface for genetic engineers to analyze CRISPR guide sequences. Users input target DNA sequences and receive comprehensive analysis including:
- Genomic coordinate validation (hg19/hg38)
- PAM site detection
- Off-target risk scoring
- Confidence scoring via machine learning
- Multi-format export (JSON, CSV, PDF)

### Current Technology Stack

**Frontend:**
- Next.js 14.2 (React framework with App Router)
- React 18 (UI library)
- TypeScript 5 (type safety)
- Tailwind CSS 3 (utility-first styling)
- Custom CSS for animations and glass morphism effects

**Backend (Future Implementation):**
- FastAPI or Express.js for REST API
- PostgreSQL for persistent storage
- Redis for caching and async job queues
- Python for bioinformatics processing

## Part 2: Frontend Architecture

### Project Structure

```
genpilot-next/
├── app/                          # Next.js 13+ App Router
│   ├── layout.tsx                # Root layout with global styles
│   ├── page.tsx                  # Homepage (groups all sections)
│   └── (pages)/                  # Route group for subpages
│       ├── request-access/       # Early access signup
│       ├── contact/              # Company contact information
│       ├── how-it-works/         # 4-step processing pipeline
│       └── docs/                 # Technical documentation
├── components/                   # Reusable React components
│   ├── Navigation.tsx            # Fixed top nav with mobile menu
│   ├── Hero.tsx                  # Landing section with editor mockup
│   ├── StatsStrip.tsx            # Three key metrics
│   ├── Problem.tsx               # Problem statement section
│   ├── HowItWorks.tsx            # Features and capabilities
│   ├── Features.tsx              # Six main features grid
│   ├── Proteins.tsx              # About section with stats
│   ├── Updates.tsx               # Changelog/timeline
│   ├── CTA.tsx                   # Call-to-action section
│   ├── DnaSVG.tsx                # Animated DNA background
│   ├── Loader.tsx                # DNA strand loading animation
│   └── Footer.tsx                # Footer with links
├── lib/                          # Utility functions
│   ├── api.ts                    # Future API client setup
│   ├── constants.ts              # Colors, text, configuration
│   ├── hooks.ts                  # React hooks (scroll, resize, etc)
│   └── store.ts                  # Zustand state management
├── styles/                       # Global CSS
│   └── globals.css               # Animation keyframes, variables
└── tsconfig.json                 # TypeScript configuration
```

### Design System

**Color Palette:**
- Primary Blue: #0066ff (main action color)
- Primary Blue Dark: #004db3 (hover states)
- Accent Cyan: #00d9ff (highlights, secondary actions)
- Accent Green: #00ff8c (success, loader animation)
- Accent Yellow: #ffd700 (tertiary actions, tags)
- Background: #000000 to #0a0e27 (gradient)
- Text: #ffffff (primary), #b0b8c8 (secondary/muted)

**Typography:**
- Display: Sora (sans-serif) 300-700 weights - headlines and content
- Monospace: Space Mono 400/700 - labels, codes, badges

**Responsive Breakpoints:**
- Mobile: 0-767px (default)
- Tablet: 768px-1023px (md: in Tailwind)
- Desktop: 1024px+ (lg: in Tailwind)

### Component Breakdown

#### Navigation Component (components/Navigation.tsx)
- Fixed header with logo and navigation links
- Mobile hamburger menu with state management
- Uses Next.js `useRouter` hook for client-side navigation
- Buttons navigate to internal routes (/request-access, /contact, /how-it-works, /docs)
- Responsive: hamburger menu on mobile, full nav on md breakpoint

**Key Props/State:**
- `isOpen`: boolean state for mobile menu toggle
- Uses `useState` for menu state management

#### Loader Component (components/Loader.tsx)
- Full-page overlay that shows during initial load
- Exact CSS animation reproduction from HTML version
- Features DNA base-pair dots moving in wave pattern
- Two colored dots per base pair (green #00ff8c, cyan #00d9ff)
- Text pulse animation with "INITIALIZING GenPilot"
- Automatically hides after 2.5 seconds

**Hydration Fix (v2.0):**
- Uses `isMounted` state to prevent server-rendering
- Component returns `null` on server, only renders on client after hydration
- Eliminates React hydration mismatch errors with inline styles
- Pattern: `useEffect` sets `isMounted=true`, wraps component JSX in `if (!isMounted) return null`

**Animation Details:**
- `move-dna` keyframe: 2-second animation with scale/opacity changes
- `pulse-text` keyframe: 1.5-second opacity pulse
- 8 base pairs total with staggered animation delays
- Z-index: 9999 ensures overlay stays on top

#### Hero Section (components/Hero.tsx)
- Split layout: text on left, mockup on right
- Headline: "Genetic Engineering, Reimagined by AI"
- Subtitle: explaining CRISPR analysis capabilities
- Left side: typography and call-to-action buttons
- Right side: editor card showing sequence input mockup
- Responsive: stacks vertically on mobile

#### StatsStrip Component (components/StatsStrip.tsx)
- Three key metrics in a grid
- Responsive: 1 column mobile, 3 columns on md
- Content: genome coverage, processing speed, confidence accuracy
- Uses glass morphism styling

#### Problem Section (components/Problem.tsx)
- Headline: "Why Genetic Engineering Takes Weeks"
- 2x2 grid of problem cards on desktop
- Responsive: 1 column on mobile, 2 columns on md
- Each card highlights a challenge (time, cost, accuracy, complexity)

#### HowItWorks Component (components/HowItWorks.tsx)
- 4-step pipeline visualization
- Responsive grid: 1 col mobile, 2 cols md, 4 cols lg
- Steps: Input, Alignment, Liftover, Export
- Each step card includes icon and description

#### Features Section (components/Features.tsx)
- 6 main feature cards in responsive grid
- Grid layout: 1 col mobile, 2 cols md, 3 cols lg
- Features include: Real-time validation, Coordinate mapping, Confidence scoring, etc.
- Each card has description and status badge

#### Proteins Section (components/Proteins.tsx)
- Left: headline and description with capability tags
- Right: statistics grid (3x2 on desktop, responsive on mobile)
- Shows: Success rate, Processing time, Accuracy, etc.

#### Updates Section (components/Updates.tsx)
- Timeline-style changelog display
- Cards show version numbers, dates, and feature descriptions
- Responsive grid layout

#### CTA Section (components/CTA.tsx)
- Central call-to-action with gradient background
- Headline and subheading
- Buttons routing to /request-access and /contact

#### Footer Component (components/Footer.tsx)
- Logo, navigation links, copyright
- Responsive: flex-col on mobile, flex-row on md
- Company information and external links

### Global Styling

**globals.css contains:**
- CSS Variables for colors and spacing
- Keyframe animations: fadeUp, fadeIn, pulse-text, move-dna
- Glass morphism utilities (.glass, .glass-sm)
- Button styles (.btn-primary, .btn-ghost)
- Reveal animation system for scroll-triggered effects
- Noise overlay effect using SVG data URL

### Responsive Design Implementation

All components use Tailwind CSS responsive prefixes:
- Base styles apply to mobile (320px+)
- `md:` prefix for 768px+ (tablets)
- `lg:` prefix for 1024px+ (desktops)

Typography uses `clamp()` function for fluid scaling:
```
font-size: clamp(1.5rem, 3vw, 3rem)
```
This scales font size smoothly between min (1.5rem), preferred (3vw), and max (3rem).

## Part 3: Routing and Pages

### Page Structure

**Homepage (app/page.tsx):**
- Imports all major sections in sequence
- Single scrollable page with multiple sections
- No per-section routes
- All navigation links point to individual pages or external URLs

**Subpages (app/(pages)/*/page.tsx):**
1. **Request Access (/request-access):**
   - Early access program information
   - Feature list with beta access highlights
   - Status box showing development progress
   - Call-to-action button to company profile

2. **Contact (/contact):**
   - Company contact information
   - Link to SolveArn company profile
   - Status box for contact form development
   - Floating icon animation

3. **How It Works (/how-it-works):**
   - 4-step CRISPR analysis pipeline
   - Detailed descriptions of each step
   - Technology tags (BWA-MEM, Liftover, etc.)
   - Responsive timeline layout

4. **Documentation (/docs):**
   - Complete technical architecture
   - Frontend, Backend, Bioinformatics, Reference Data sections
   - API endpoint specifications
   - Code examples and data flow diagrams

### Navigation Flow

Users navigate via:
1. Navigation bar links (all pages)
2. CTA buttons (Request Access, Contact)
3. Internal links on subpages (Back to Home)

All navigation uses Next.js `useRouter` for client-side routing (no page reloads).

## Part 4: Backend Architecture (Planning)

### API Design

**Core Endpoints:**

1. `POST /api/analyze` - Full CRISPR analysis
   - Input: sequence, organism, genome_build, protein, metadata
   - Output: Array of matching guides with coordinates, risk scores, confidence

2. `POST /api/validate` - Quick format validation
   - Input: sequence, format_type
   - Output: Boolean validation result with error messages

3. `GET /api/results/{job_id}` - Retrieve async results
   - Input: job_id from previous async request
   - Output: Completed analysis results or status update

4. Future endpoints:
   - `POST /api/export` - Generate PDF/CSV reports
   - `DELETE /api/results/{job_id}` - Clean up cached results
   - `GET /api/health` - System health check

### Bioinformatics Pipeline

**Processing Stages:**

1. **Input Validation**
   - Sequence format checking (FASTA, DNA alphabet)
   - Length validation (typically 20bp for SpCas9)
   - GC content analysis (target: 40-60%)

2. **Alignement**
   - BWA-MEM for rapid reference matching
   - Supports multiple reference genomes (hg19, hg38)
   - Returns all candidate sites with mismatch counts

3. **Coordinate Conversion**
   - Pyliftover for hg19 -> hg38 mapping
   - Ensures results work across genome builds
   - Flags assembly gaps or problematic regions

4. **Feature Analysis**
   - PAM detection (specific to Cas protein)
   - Strand orientation determination
   - Exon boundary checking
   - Off-target risk estimation

5. **Confidence Scoring**
   - Machine learning model (PyTorch/TensorFlow)
   - Trained on experimental CRISPR success data
   - Score: 0-1 (1 = high confidence)

### Reference Data Infrastructure

**Storage Requirements:**
- hg19 reference genome (3.2B bp) ~1TB when indexed
- hg38 reference genome (3.1B bp) ~1TB when indexed
- Gene annotation databases (RefSeq, Ensembl)
- ENCODE blacklist regions for off-target detection
- PAM site pre-computed database

**Performance Optimization:**
- NVMe SSD storage for <1ms lookup latency
- Memory-mapped file access for O(1) coordinate retrieval
- Redis caching for frequently queried regions
- Quarterly updates from NCBI/Ensembl

### Deployment Architecture

**Recommended Stack:**
- Docker containers for reproducibility
- Kubernetes for orchestration
- Load balancer for API gateway
- Async job queue (Celery/Bull) for long-running analyses
- PostgreSQL read replicas for scaling
- S3/Cloud storage for result archival

**Scaling Considerations:**
- Queue workers process analyses asynchronously
- Cache layer reduces repeated computations
- Database indexing on genomic coordinates
- API rate limiting to prevent abuse

## Part 5: Future Development Roadmap

### Phase 1: Backend Implementation (Weeks 1-4)
- Set up FastAPI or Express.js backend
- Implement API gateway and authentication (JWT)
- Create PostgreSQL database schema
- Integrate BWA-MEM alignment tool
- Deploy reference genomes to SSD storage

### Phase 2: Bioinformatics Integration (Weeks 5-8)
- Implement sequence validation pipeline
- Add coordinate conversion (Pyliftover)
- Build off-target detection system
- Create ML model inference pipeline
- Optimize query performance and caching

### Phase 3: Frontend Integration (Weeks 9-12)
- Connect frontend to backend API
- Add form submission and result display
- Implement file upload for batch processing
- Add result export functionality (JSON, CSV, PDF)
- Build user authentication flow

### Phase 4: Enhancement & Polish (Weeks 13-16)
- Add advanced search and filtering
- Implement result bookmarking/favorites
- Create research notes/annotation system
- Build comparative analysis tools
- Optimize for mobile devices

### Phase 5: Production & Monitoring (Weeks 17+)
- Set up error tracking (Sentry)
- Implement analytics (Mixpanel, Amplitude)
- Create admin dashboard
- Set up automated testing (Jest, Cypress)
- Establish CI/CD pipeline (GitHub Actions)
- Deploy to production (AWS/GCP/Azure)

### Additional Features to Consider

1. **User Management**
   - Registration and login system
   - User profile and preferences
   - Research team collaboration
   - API key management

2. **Advanced Analysis**
   - Batch sequence processing
   - Custom reference genome support
   - Protein variant support (SpCas9, AsCas12a, etc.)
   - Off-target database customization

3. **Integration Capabilities**
   - Webhook support for external tools
   - GraphQL API option
   - Python/R client libraries
   - Command-line tool

4. **Reporting**
   - Publication-ready PDF reports
   - Visualization of off-target sites
   - Coordinate mapping visualizations
   - Confidence score explanations

## Part 6: Development Guidelines

### Code Organization Best Practices

**Component Structure:**
- Keep components focused on single responsibility
- Separate logic from presentation using custom hooks
- Use TypeScript interfaces for props and state
- Implement proper error boundaries

**Styling Approach:**
- Use Tailwind for responsive layouts
- CSS files for complex animations
- CSS Variables for theming/dark mode
- Avoid inline styles except for dynamic values

### Performance Optimization

**Frontend:**
- Code splitting with dynamic imports
- Image optimization (Next.js Image component)
- Lazy loading for below-fold content
- Memoization for expensive computations

**Backend:**
- Database query optimization (indexes, pagination)
- Connection pooling for database access
- Redis caching layer
- Async processing for long-running tasks

### Testing Strategy

**Frontend:**
- Unit tests with Jest for utilities
- Component tests with React Testing Library
- E2E tests with Cypress for user flows
- Visual regression testing for UI consistency

**Backend:**
- Unit tests for bioinformatics functions
- Integration tests for API endpoints
- Load testing for concurrent users
- Fixture data for reproducibility

### Security Considerations

- Input sanitization for sequence data
- Rate limiting to prevent abuse
- HTTPS only communication
- SQL injection prevention (ORM/parameterized queries)
- CORS configuration for cross-origin requests
- User authentication and authorization
- Data encryption for sensitive information
- Regular security audits and penetration testing

## Part 7: Environment Setup

### Development Environment

**Prerequisites:**
- Node.js 18+
- npm or yarn
- Python 3.9+ (for bioinformatics tools)
- Git

**Frontend Setup:**
```bash
cd genpilot-next
npm install
npm run dev  # Start dev server on http://localhost:3000
npm run build  # Production build
npm run start  # Start production server
```

**Backend Setup (Future):**
```bash
python -m venv venv
source venv/bin/activate  # or: venv\Scripts\activate
pip install -r requirements.txt
python -m uvicorn main:app --reload  # FastAPI example
```

## Part 8: Deployment Checklist

### Pre-Deployment

- Run full test suite
- Verify responsive design across devices
- Performance testing and optimization
- Security audit and penetration testing
- Database migration testing
- Backup and disaster recovery planning

### Deployment Steps

1. Set up infrastructure (servers, databases, storage)
2. Configure environment variables
3. Deploy backend services
4. Deploy frontend to CDN
5. Configure DNS and SSL certificates
6. Set up monitoring and alerting
7. Run smoke tests on production
8. Gradual rollout with canary testing

### Post-Deployment Monitoring

- Application error tracking (Sentry)
- Performance monitoring (New Relic, DataDog)
- User analytics and behavior tracking
- Database performance monitoring
- API response time tracking
- Uptime and availability monitoring

## Part 9: Troubleshooting & Known Issues

### React Hydration Errors

**Issue:** "Text content does not match server-rendered HTML"

**Cause:** Server and client render different content, typically from inline styles or component state.

**Solution - Hydration Pattern:**
Components with inline `<style>` tags or dynamic content should use the `isMounted` pattern:

```typescript
const MyComponent: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) return null; // Prevents server rendering
  
  return (
    <>
      <style>{`/* CSS here */`}</style>
      {/* Component JSX */}
    </>
  );
};
```

**Applied To:**
- `Loader.tsx` - DNA loading animation with inline CSS (v2.0)
- `app/(pages)/docs/page.tsx` - Documentation page with styled sections
- `app/(pages)/contact/page.tsx` - Contact page with WIP styling
- `app/(pages)/how-it-works/page.tsx` - Process pipeline page
- `app/(pages)/request-access/page.tsx` - Early access page with styling
- `app/wip/page.tsx` - Work-in-progress placeholder page

### Code Quality Improvements (v3.0)

**Unnecessary Section Comments Removed:**
All components have been cleaned up to remove inline HTML comments for cleaner, more human-written code:
- Removed `{/* Logo */}`, `{/* Header */}`, `{/* Editor Card */}` style comments
- Focused on letting code structure speak for itself
- Improves readability and reduces visual clutter

**Affected Files:**
- All components in `components/` directory
- All page files in `app/(pages)` and `app/wip`

### Navigation Structure

**Change in v3.0:** Navigation and Loader moved to root layout for consistency across all pages:
- **File:** `app/layout.tsx` - Now imports Navigation and Loader
- **Result:** All pages (homepage, docs, contact, how-it-works, request-access, wip) have consistent navigation
- **Benefit:** Unified navbar with smooth transitions between pages

## Conclusion

GenPilot's current implementation provides a solid frontend foundation for CRISPR analysis. The Next.js architecture enables rapid iteration and deployment, while the planned backend infrastructure will enable complex bioinformatics processing. By following this architecture guide and roadmap, the team can build a scalable, performant, and user-friendly platform for genetic research.

Key success factors:
1. Maintain clean separation between frontend and backend
2. Prioritize performance and user experience
3. Establish comprehensive testing practices
4. Plan for scalability from the beginning
5. Document all major decisions and APIs
6. Regular security audits and updates
7. Community feedback incorporation

For questions or clarifications, refer to the inline code comments and TypeScript type definitions throughout the codebase.
