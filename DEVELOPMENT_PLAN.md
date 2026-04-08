# GenPilot Frontend Development Plan - UI Only

**Scope**: This plan covers **frontend UI development only** for 3 core tools. Backend implementation, bioinformatics pipelines, and infrastructure are handled separately by other teams.

---

## UI/Frontend Tools Roadmap

### Tool 1: Tindr - Base Pair Location Finder
**Priority: HIGH** - Location discovery for genomic sequences

#### UI Components to Build:
1. **Input Section**
   - DNA sequence textarea with syntax highlighting
   - Sequence validation feedback (real-time)
   - File upload button for FASTA import
   - Organism selector (Human, Mouse, etc.)
   - Genome build selector (hg19, hg38)

2. **Results Display**
   - Genomic coordinates visualization
   - Location results table (coordinates, strand, quality)
   - Export functionality (JSON, CSV)
   - Copy-to-clipboard for coordinates

3. **Error Handling**
   - Invalid sequence detection UI
   - No results feedback
   - Helpful error messages

---

### Tool 2: HGtranslate - Genome Build Converter
**Priority: HIGH** - hg19 ↔ hg38 coordinate conversion

#### UI Components to Build:
1. **Input Section**
   - Chromosome selector
   - Coordinate input fields (start, end position)
   - Source build dropdown (hg19 → hg38 or hg38 → hg19)
   - Batch conversion textarea

2. **Results Display**
   - Converted coordinates table
   - Side-by-side comparison (source vs. target)
   - Conversion success/failure status per row
   - Export converted coordinates (JSON, CSV)

3. **Features**
   - Single coordinate conversion
   - Batch upload support
   - Conversion history/recent conversions
   - Quick toggle between hg19 ↔ hg38

---

### Tool 3: Success Predictor AI - CRISPR Success/Failure Analysis
**Priority: HIGH** - Editing success prediction with explanations

#### UI Components to Build:
1. **Input Section**
   - Sequence textarea
   - Organism and build selectors
   - Advanced options (PAM preference, strand choice)
   - Parameter toggles for prediction features

2. **Results Display**
   - Success probability score (0-100 with visual gauge)
   - Success/failure indicators
   - Detailed explanation cards explaining:
     - Why this target will succeed
     - Why it might fail
     - Key factors contributing to score
   - Visual breakdown of scoring rules
   - Off-target risk indicators

3. **Features**
   - Interactive rule explanation
   - Print/export report (PDF, JSON)
   - Detailed analysis comparison
   - Formula/methodology documentation in UI

---

## Frontend Development Phases

### Phase 1: UI Framework & Base Structure
**Deliverables:**
- Create tool page layout templates
- Build reusable input components
- Design results display components
- Set up form validation utilities
- Create error boundary components

**Location**: `components/tools/`

---

### Phase 2: Tool 1 - Tindr UI
**Deliverables:**
- Input form for sequence and parameters
- Results table component
- Location visualization
- Export functionality
- Integration with backend API client

**Components to Create:**
- `TindrInput.tsx`
- `TindrResults.tsx`
- `LocationVisualization.tsx`
- `CoordinateTable.tsx`

---

### Phase 3: Tool 2 - HGtranslate UI
**Deliverables:**
- Coordinate input forms
- Build selector interface
- Batch conversion interface
- Side-by-side comparison view
- Export converter utilities

**Components to Create:**
- `HGtranslateInput.tsx`
- `CoordinateConverter.tsx`
- `BatchControls.tsx`
- `ConversionResults.tsx`

---

### Phase 4: Tool 3 - Success Predictor AI UI
**Deliverables:**
- Sequence input with advanced options
- Success probability gauge/score display
- Rule explanation cards
- Detailed analysis breakdown
- Report generation UI

**Components to Create:**
- `PredictorInput.tsx`
- `SuccessScore.tsx`
- `FailureAnalysis.tsx`
- `RuleExplanation.tsx`
- `ReportGenerator.tsx`

---

## UI Development Guidelines

### Theme Consistency
- All tools use the existing light/dark theme system
- Maintain glass morphism design across all tool UIs
- Use established color palette from `styles/globals.css`

### Responsive Design
- Desktop-first approach
- Mobile-friendly inputs and results
- Touch-friendly buttons and interactions

### Accessibility
- Proper ARIA labels on forms
- Semantic HTML structure
- Keyboard navigation support
- Color contrast compliance

### Code Organization
- Reusable components in `components/ui/`
- Tool-specific components in `components/tools/`
- Shared utilities in `lib/`
- Styling in `styles/` with Tailwind classes

---

## Styling & Assets

All UI uses:
- **CSS Framework**: Tailwind CSS + globals.css
- **Animations**: Keyframes defined in `styles/globals.css`
- **Theme Variables**: CSS custom properties (--primary-blue, etc.)
- **Typography**: Sora font (sans-serif)
- **Icons**: SVG components (no external icon library initially)

---

## File Structure for Tools

```
components/
├── tools/
│   ├── tindr/
│   │   ├── TindrInput.tsx
│   │   ├── TindrResults.tsx
│   │   └── LocationVisualization.tsx
│   ├── hgtranslate/
│   │   ├── HGtranslateInput.tsx
│   │   ├── CoordinateConverter.tsx
│   │   └── ConversionResults.tsx
│   ├── predictor/
│   │   ├── PredictorInput.tsx
│   │   ├── SuccessScore.tsx
│   │   ├── FailureAnalysis.tsx
│   │   └── ReportGenerator.tsx
│   └── shared/
│       ├── SequenceInput.tsx
│       ├── ResultsExporter.tsx
│       └── ParameterSelector.tsx
```

---

## API Client Integration

**Note**: Backend API endpoints are implemented separately. Frontend assumes these endpoints available:
- `POST /api/tindr/locate` - Tindr tool endpoint
- `POST /api/hgtranslate/convert` - HGtranslate tool endpoint
- `POST /api/predictor/analyze` - Success Predictor endpoint

Frontend API client utilities in `lib/api.ts` will handle these requests.

---

## Success Metrics (UI/Frontend)

- All tool UIs fully functional and responsive
- Tools integrate seamlessly with backend APIs
- Clean, intuitive user experience
- All forms have validation and error handling
- Export functionality working for all tools
- Theme switching works across all tool pages
- Mobile and desktop views optimized
- <3 second page load time for tool pages

