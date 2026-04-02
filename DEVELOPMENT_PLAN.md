# GenPilot Development Plan

## Setup & Infrastructure

### Step 1: Email & Firebase Setup
**Priority: CRITICAL** - Foundation for all future features

Deliverables:
1. Set up Firebase project
   - Create Firebase console account
   - Initialize Firestore database
   - Configure authentication (email/password, Google OAuth)
   - Set up Cloud Storage for file uploads
2. Configure email service
   - Set up SendGrid or Firebase Cloud Functions for email notifications
   - Create email templates for:
     - Welcome emails
     - Analysis completion notifications
     - Error alerts
3. Environment configuration
   - Store Firebase credentials in .env.local
   - Configure CORS for Firebase access
   - Test authentication flow end-to-end

Tech Stack: Firebase Console, SendGrid API, Node.js Cloud Functions

---

### Step 2: Updates Management Dashboard
**Priority: HIGH** - Enables dynamic content management

Deliverables:
1. Create simple HTML dashboard for Updates section
   - Single-page app (no framework required)
   - Form to add/edit/delete update entries
   - Real-time data binding to Firebase
   - Fields per update:
     - Date
     - Title
     - Description
     - Badge type (new/improve/fix)
2. Firebase integration
   - Connect to Firestore collection "updates"
   - Implement CRUD operations
   - Add authentication (admin login required)
3. Features
   - Add new update entry
   - Edit existing updates
   - Delete updates
   - Preview updates in real-time
   - Sync with live website automatically

Location: Create at `/admin/updates-dashboard.html`
Tech Stack: HTML, CSS, JavaScript, Firebase SDK

---

## Backend Development

### Phase 1: Backend Foundation
**Priority: CRITICAL** - Blocks frontend integration

Deliverables:
1. Set up FastAPI or Express.js API server
2. Create PostgreSQL database schema
   - Users table
   - Analysis results table
   - Job queue table
3. Implement JWT authentication
4. Create core API endpoints:
   - POST /api/analyze - main analysis endpoint
   - POST /api/validate - sequence validation
   - GET /api/results/{job_id} - fetch results
5. Set up Redis for caching & async job queue
6. Deploy BWA-MEM alignment tool container
7. Pre-download reference genomes (hg19, hg38) to NVMe storage

Tech Stack: FastAPI (Python) or Express.js (Node.js), PostgreSQL, Redis, Docker

---

### Phase 2: Bioinformatics Pipeline
**Priority: HIGH** - Core logic for analysis

Deliverables:
1. Sequence Validation Module
   - Format checking (FASTA, DNA alphabet)
   - Length validation (20bp for SpCas9)
   - GC content analysis (40-60% target)

2. Genomic Alignment
   - Integrate BWA-MEM for fast matching
   - Support hg19 & hg38 builds
   - Return top matches with mismatch counts

3. Coordinate Conversion
   - Implement Pyliftover (hg19 ↔ hg38)
   - Flag assembly gaps/problematic regions

4. Feature Analysis
   - PAM site detection (SpCas9: NGG)
   - Strand orientation determination
   - Exon boundary checking
   - Off-target risk estimation

5. ML Confidence Scoring
   - Train/deploy PyTorch/TensorFlow model
   - Target: 97%+ prediction accuracy
   - Score: 0-1 (1 = high confidence)

Tech Stack: Python, PyTorch/TensorFlow, BWA-MEM, Pyliftover

---

## Frontend Development

### Phase 3: Frontend-Backend Integration
**Priority: HIGH** - Connects user actions to analysis

Deliverables:
1. Create API client layer
   - Submit analysis requests
   - Handle long-running jobs
   - Poll for results
2. Build form inputs
   - Sequence textarea
   - Organism selector
   - Genome build dropdown
3. Results display page
   - Show coordinates (hg19/hg38)
   - Display confidence scores
   - PAM site visualization
   - Off-target warnings
4. Export functionality
   - JSON export
   - CSV export
   - PDF report generation
5. User authentication
   - Login/signup flow
   - User dashboard
   - Analysis history

---

## Deployment & DevOps

### Phase 4: Deployment & Polish
**Priority: HIGH** - Prepares for production

Deliverables:
1. Docker containerization
   - Backend service Dockerfile
   - Database Dockerfile (if needed)
   - Docker Compose for local development
2. Kubernetes setup (optional for scaling)
   - Service definitions
   - Deployment manifests
   - Health checks
3. CI/CD Pipeline
   - GitHub Actions workflow
   - Automated testing
   - Build and deploy on merge
4. Monitoring & Logging
   - Error tracking (Sentry)
   - Performance monitoring
   - Log aggregation
5. Security hardening
   - SSL/HTTPS configuration
   - Rate limiting
   - Input validation
   - SQL injection prevention

---

## Execution Strategy

Start Setup & Infrastructure first, then proceed with Backend and Frontend in parallel.

Backend and AI teams can work simultaneously during Phase 1 & 2.

Frontend integration (Phase 3) begins after backend API is ready.

Deployment (Phase 4) happens after main features are complete.

---

## Key Dependencies

Backend API must be ready before frontend integration starts.
Bioinformatics models must be trained before endpoint implementation.
Firebase must be configured for updates dashboard and future features.
Email setup required for user notifications and authentication flows.

---

## Team Responsibilities

Email & Firebase Setup: DevOps/Backend Lead 
Updates Dashboard: Frontend Lead 
Backend Foundation: Backend Team 
Bioinformatics Pipeline: AI/ML Team 
Frontend Integration: Frontend Team 
Deployment & Polish: DevOps + All Teams 

---

## Success Metrics

Step 1: Firebase project live with authentication working
Step 2: Updates dashboard accessible and syncing with live site
Phase 1: API endpoints responding correctly with proper error handling
Phase 2: ML model achieving 97%+ accuracy on test dataset
Phase 3: Full end-to-end analysis workflow functional
Phase 4: Production environment stable with <99% uptime
