'use client';

import React from 'react';
import { useAppStore } from '@/lib/store';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function DocsPage() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <>
      <Navigation />
      <div 
        className="relative min-h-full pt-24 pb-16 px-6 transition-colors duration-500"
        style={{
          background: isDark
            ? 'linear-gradient(to bottom, #000000, #0a0e27, #000000)'
            : 'linear-gradient(to bottom, #f4f7fb, #e8f0ff, #f4f7fb)',
        }}>
        <style>{`
          .docs-container {
            position: relative;
            z-index: 2;
            min-height: 100vh;
          }

          .docs-content {
            max-width: 1000px;
            margin: 0 auto;
          }

          .docs-header h1 {
            font-family: 'Sora', sans-serif;
            font-size: clamp(2rem, 4vw, 3.5rem);
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: -0.03em;
            color: var(--text);
            margin-bottom: 16px;
            transition: color 0.5s ease;
          }

          .docs-header p {
            font-size: 1.1rem;
            color: var(--text-muted);
            line-height: 1.6;
            transition: color 0.5s ease;
          }

          .tech-section {
            margin-bottom: 56px;
            padding: 32px;
            border-radius: 12px;
            backdrop-filter: blur(20px);
            transition: all 0.5s ease;
          }

          .tech-section h2 {
            font-size: 1.5rem;
            margin-bottom: 16px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 12px;
            color: var(--accent-cyan);
            transition: color 0.5s ease;
          }

          .tech-section p {
            color: var(--text-muted);
            line-height: 1.7;
            margin-bottom: 16px;
            transition: color 0.5s ease;
          }

          .code-block {
            border-left: 3px solid var(--primary-blue);
            padding: 16px;
            border-radius: 4px;
            margin: 16px 0;
            font-family: 'Space Mono', monospace;
            font-size: 0.85rem;
            overflow-x: auto;
            line-height: 1.5;
          }

          .tech-stack {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            margin: 16px 0;
          }

          .stack-item {
            padding: 12px 16px;
            border-radius: 6px;
            font-family: 'Space Mono', monospace;
            font-size: 0.9rem;
            transition: all 0.5s ease;
          }

          .stack-item strong {
            color: var(--accent-yellow);
            transition: color 0.5s ease;
          }

          .feature-list {
            list-style: none;
            margin: 16px 0;
          }

          .feature-list li {
            padding: 8px 0;
            padding-left: 28px;
            position: relative;
            color: var(--text-muted);
            line-height: 1.6;
            transition: color 0.5s ease;
          }

          .feature-list li:before {
            content: '';
            position: absolute;
            left: 0;
            color: var(--accent-cyan);
            font-weight: bold;
            transition: color 0.5s ease;
          }

          .data-flow {
            margin: 24px 0;
            padding: 16px;
            border: 1px dashed var(--glass-border);
            border-radius: 6px;
            font-family: 'Space Mono', monospace;
            font-size: 0.85rem;
            line-height: 1.8;
            white-space: pre-wrap;
            overflow-x: auto;
            color: var(--accent-cyan);
            transition: all 0.5s ease;
          }

          @media (max-width: 768px) {
            .docs-container {
              padding: 100px 24px 48px;
            }

            .tech-stack {
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        <div className="docs-container">
          <div className="docs-content">
            <div className="docs-header mb-12">
              <h1>GenPilot Technical Architecture</h1>
              <p>Complete technical documentation of the GenPilot system, including frontend, backend, bioinformatics pipeline, and reference data infrastructure.</p>
            </div>

            <div className="tech-section">
              <h2>Frontend Layer (React / Next.js)</h2>
              <p>The frontend provides an interactive IDE-like interface for CRISPR guide sequence analysis and validation. Built with modern web technologies for real-time feedback and seamless user experience.</p>
              
              <p><strong>Key Features:</strong></p>
              <ul className="feature-list">
                <li>Real-time sequence input and validation</li>
                <li>Interactive genome coordinate visualization</li>
                <li>Live AI-powered suggestions and confidence scoring</li>
                <li>Result export in multiple formats (JSON, CSV, PDF)</li>
                <li>Dark mode with biomedical glass morphism design</li>
              </ul>

              <p><strong>Tech Stack:</strong></p>
              <div className="tech-stack">
                <div className="stack-item"><strong>Framework:</strong> Next.js 14+</div>
                <div className="stack-item"><strong>UI Library:</strong> React 18+</div>
                <div className="stack-item"><strong>Styling:</strong> Tailwind CSS + Custom CSS</div>
                <div className="stack-item"><strong>State:</strong> React Query / Zustand</div>
                <div className="stack-item"><strong>API Client:</strong> Axios / Fetch API</div>
                <div className="stack-item"><strong>Build Tool:</strong> Webpack / Turbopack</div>
              </div>

              <p><strong>Sample Request:</strong></p>
              <div className="code-block">{`const response = await fetch('/api/analyze', {
  method: 'POST',
  body: JSON.stringify({
    sequence: 'GAGUCCGAGCAGAAGAAGA',
    organism: 'human',
    genome_build: 'hg38'
  })
});`}</div>
            </div>

            <div className="tech-section">
              <h2>Backend API (FastAPI / Node.js)</h2>
              <p>RESTful API layer that orchestrates the bioinformatics pipeline, handles sequence validation, coordinates cross-referencing, and returns structured analysis results. Optimized for high-throughput processing with caching and async operations.</p>
              
              <p><strong>Core Endpoints:</strong></p>
              <div style={{marginTop: '16px'}}>
                <div style={{background: 'rgba(255, 215, 0, 0.05)', borderLeft: '3px solid #ffd700', padding: '16px', borderRadius: '4px', marginBottom: '12px', fontFamily: "'Space Mono', monospace", fontSize: '0.9rem'}}>
                  <span style={{display: 'inline-block', padding: '4px 8px', background: '#0066ff', color: '#000', borderRadius: '3px', fontWeight: '600', marginRight: '8px'}}>POST</span>/api/analyze
                  <div style={{marginTop: '8px', color: '#b0b8c8', fontSize: '0.85rem'}}>
                    Analyze a gRNA sequence with full CRISPR validation
                  </div>
                </div>

                <div style={{background: 'rgba(255, 215, 0, 0.05)', borderLeft: '3px solid #ffd700', padding: '16px', borderRadius: '4px', marginBottom: '12px', fontFamily: "'Space Mono', monospace", fontSize: '0.9rem'}}>
                  <span style={{display: 'inline-block', padding: '4px 8px', background: '#0066ff', color: '#000', borderRadius: '3px', fontWeight: '600', marginRight: '8px'}}>POST</span>/api/validate
                  <div style={{marginTop: '8px', color: '#b0b8c8', fontSize: '0.85rem'}}>
                    Quick sequence format and complementarity validation
                  </div>
                </div>

                <div style={{background: 'rgba(255, 215, 0, 0.05)', borderLeft: '3px solid #ffd700', padding: '16px', borderRadius: '4px', fontFamily: "'Space Mono', monospace", fontSize: '0.9rem'}}>
                  <span style={{display: 'inline-block', padding: '4px 8px', background: '#0066ff', color: '#000', borderRadius: '3px', fontWeight: '600', marginRight: '8px'}}>GET</span>/api/results/{'{job_id}'}
                  <div style={{marginTop: '8px', color: '#b0b8c8', fontSize: '0.85rem'}}>
                    Retrieve async analysis results by job ID
                  </div>
                </div>
              </div>

              <p style={{marginTop: '24px'}}><strong>Tech Stack:</strong></p>
              <div className="tech-stack">
                <div className="stack-item"><strong>Framework:</strong> FastAPI / Express.js</div>
                <div className="stack-item"><strong>Language:</strong> Python / TypeScript</div>
                <div className="stack-item"><strong>Database:</strong> PostgreSQL + Redis</div>
                <div className="stack-item"><strong>Queue:</strong> Celery / Bull</div>
                <div className="stack-item"><strong>Auth:</strong> JWT / OAuth 2.0</div>
                <div className="stack-item"><strong>Deployment:</strong> Docker / Kubernetes</div>
              </div>

              <p><strong>Request Schema:</strong></p>
              <div className="code-block">{`{
  "sequence": "GAGUCCGAGCAGAAGAAGA",
  "organism": "human",
  "genome_build": "hg38",
  "protein": "SpCas9",
  "include_warnings": true
}`}</div>
            </div>

            <div className="tech-section">
              <h2>Bioinformatics Engine (Python)</h2>
              <p>Specialized bioinformatics pipeline that performs sequence alignment, coordinate conversion, PAM detection, and off-target risk estimation. Uses industry-standard alignment tools and custom ML models.</p>
              
              <p><strong>Processing Pipeline:</strong></p>
              <div className="data-flow">{`1. Sequence Normalization & Validation
↓
2. Reverse Complement Check
↓
3. BWA-MEM / Bowtie2 Alignment
↓
4. Coordinate Conversion (hg19 ↔ hg38)
↓
5. PAM/Strand/Exon Analysis
↓
6. Off-Target Risk Scoring
↓
7. AI Confidence Ranking`}</div>

              <p style={{marginTop: '24px'}}><strong>Key Libraries:</strong></p>
              <div className="tech-stack">
                <div className="stack-item"><strong>Alignment:</strong> BWA-MEM, Bowtie2</div>
                <div className="stack-item"><strong>Parsing:</strong> BioPython, Pysam</div>
                <div className="stack-item"><strong>Liftover:</strong> Pyliftover</div>
                <div className="stack-item"><strong>ML Models:</strong> PyTorch, TensorFlow</div>
                <div className="stack-item"><strong>Data Processing:</strong> NumPy, Pandas</div>
                <div className="stack-item"><strong>Async:</strong> asyncio, aiohttp</div>
              </div>

              <p><strong>Sample Analysis Response:</strong></p>
              <div className="code-block">{`{
  "matches": [
    {
      "genomic_coordinate": {
        "hg38": "chr7:55129301",
        "hg19": "chr7:55123890"
      },
      "strand": "reverse",
      "pam": true,
      "gene": "TP53",
      "exon": 3,
      "off_target_risk": 0.12,
      "confidence_score": 0.94,
      "warnings": [
        "Genome build mismatch detected",
        "Off-target probability > 10%"
      ]
    }
  ]
}`}</div>
            </div>

            <div className="tech-section">
              <h2>Reference Data (hg19 / hg38 on SSD)</h2>
              <p>High-performance reference genome storage optimized for fast random access during alignment queries. Indexed reference genomes stored on NVMe SSD for sub-millisecond genomic lookups.</p>
              
              <p><strong>Data Infrastructure:</strong></p>
              <ul className="feature-list">
                <li><strong>hg19:</strong> Full human reference genome (3.2B bp) with BWA index</li>
                <li><strong>hg38:</strong> Latest human reference with GRCh38 annotations</li>
                <li><strong>Gene Annotations:</strong> RefSeq, NCBI, Ensembl databases</li>
                <li><strong>Blacklist Regions:</strong> ENCODE blacklisted chromatin regions</li>
                <li><strong>PAM Database:</strong> Pre-computed CRISPR PAM sites (all orientations)</li>
                <li><strong>Off-Target Database:</strong> Known off-target sensitivity profiles</li>
              </ul>

              <p><strong>Storage Specs:</strong></p>
              <div className="tech-stack">
                <div className="stack-item"><strong>Storage Type:</strong> NVMe SSD (3.8 TB)</div>
                <div className="stack-item"><strong>Format:</strong> FASTA + BWA Index</div>
                <div className="stack-item"><strong>Indexing:</strong> SQLite + Redis Cache</div>
                <div className="stack-item"><strong>Access Pattern:</strong> Mmap for O(1) lookups</div>
                <div className="stack-item"><strong>Update Cycle:</strong> Quarterly</div>
                <div className="stack-item"><strong>Redundancy:</strong> RAID-1 + Offsite Backup</div>
              </div>

              <p><strong>Coordinate Conversion Example:</strong></p>
              <div className="code-block">{`// Input: hg19 coordinate
chr7:55123890 (TP53, exon 3, reverse strand)

// Liftover process via pyliftover
coordinates_hg38 = liftover('hg19', 'hg38', 
  'chr7', 55123890, reverse=True)

// Output: hg38 coordinate
→ chr7:55129301 (same gene, same exon)`}</div>
            </div>

            <div className="tech-section">
              <h2>Complete Data Flow</h2>
              <p>End-to-end workflow showing how user input flows through the system:</p>

              <div className="data-flow">{`[Frontend] User Input
sequence + organism + genome_build
↓
[API Gateway] Request Validation & Auth
↓
[Queue Worker] Async Processing
↓
[Bioinformatics] Multi-stage Analysis
• Normalize sequence
• Check reverse complement
• Align to references (BWA-MEM)
• Convert coordinates (hg19 ↔ hg38)
• Detect PAM sites
• Score off-target risk
• Rank AI confidence
↓
[Cache] Store Results (Redis)
↓
[Frontend] Display Structured Report
coordinates + PAM + off-targets + confidence`}</div>
            </div>

            <div style={{marginTop: '56px', paddingTop: '48px', borderTop: '1.5px solid rgba(255, 255, 255, 0.15)'}}>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="/" className="px-6 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-mono text-xs tracking-widest uppercase hover:bg-cyan-400 hover:bg-opacity-5 transition-all rounded">
                  Back to Home
                </a>
                <a href="/contact" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-black font-mono text-xs tracking-widest uppercase rounded hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
