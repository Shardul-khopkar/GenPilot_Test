'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function HowItWorksPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const steps = [
    {
      number: '01',
      title: 'Input & Validation',
      description: 'Supply a gRNA or candidate guide sequence plus optional metadata such as target gene, organism, and preferred genome build. The system normalizes the sequence, validates correct length and format, and checks complementarity to your intended DNA target—essential since CRISPR binding only works when the guide matches the target strand in reverse complement form.',
      tag: 'Sequence Normalization & Validation'
    },
    {
      number: '02',
      title: 'Genomic Alignment & Analysis',
      description: 'The sequence is searched against reference genomes using alignment engines such as BWA-MEM and Bowtie2 to find the best genomic matches. The system then checks PAM compatibility, strand orientation, exon overlap, and basic off-target risk while ranking candidate matches and estimating confidence scores.',
      tag: 'BWA-MEM, Bowtie2 & AI Ranking'
    },
    {
      number: '03',
      title: 'Build Mapping & Cross-Reference',
      description: 'Perform coordinate conversion between hg19 and hg38 so the same biological target can be mapped across reference versions. This is essential when researchers switch genome builds or compare results across tools, ensuring consistency and portability across platforms.',
      tag: 'hg19 & hg38 Coordinate Conversion'
    },
    {
      number: '04',
      title: 'Structured Report & Export',
      description: 'Receive a comprehensive analysis report showing the best matching genomic coordinates, genome build mapping, reverse complement status, PAM presence, target exon annotation, off-target warnings, and confidence scores. This gives researchers fast computational validation before ordering, cloning, or running experiments.',
      tag: 'Multi-Format Export & Confidence Scoring'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="relative min-h-screen bg-gradient-to-b from-black via-blue-950 to-black pt-24 pb-16 px-6">
        <style>{`
          .wip-badge {
            font-family: 'Space Mono', monospace;
            font-size: 0.75rem;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: #00d9ff;
            display: inline-block;
            padding: 8px 16px;
            background: rgba(0, 217, 255, 0.1);
            border: 1.5px solid rgba(0, 217, 255, 0.3);
            border-radius: 4px;
            margin-bottom: 28px;
          }

          .wip-title {
            font-size: clamp(2.5rem, 5vw, 3.5rem);
            font-weight: 700;
            line-height: 1.1;
            letter-spacing: -0.03em;
            color: #ffffff;
            margin-bottom: 24px;
          }

          .wip-subtitle {
            font-size: 1.1rem;
            font-weight: 300;
            line-height: 1.7;
            color: #b0b8c8;
            margin-bottom: 56px;
            max-width: 700px;
          }

          .timeline-item {
            display: grid;
            grid-template-columns: 100px 1fr;
            gap: 40px;
            margin-bottom: 48px;
            align-items: start;
          }

          .timeline-number {
            font-family: 'Space Mono', monospace;
            font-size: 2.5rem;
            font-weight: 700;
            color: rgba(0, 102, 255, 0.2);
            line-height: 1;
          }

          .timeline-content {
            background: rgba(20, 30, 80, 0.25);
            border: 1.5px solid rgba(255, 255, 255, 0.15);
            border-radius: 12px;
            padding: 32px;
            backdrop-filter: blur(20px);
            box-shadow: 0 4px 20px rgba(0, 102, 255, 0.1);
          }

          .timeline-content h3 {
            font-size: 1.3rem;
            color: #ffffff;
            margin-bottom: 12px;
          }

          .timeline-content p {
            color: #b0b8c8;
            line-height: 1.6;
            margin-bottom: 16px;
          }

          .timeline-tag {
            display: inline-block;
            font-family: 'Space Mono', monospace;
            font-size: 0.65rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #00d9ff;
            background: rgba(0, 217, 255, 0.1);
            padding: 4px 12px;
            border-radius: 3px;
          }
        `}</style>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="wip-badge">Work In Progress</div>
          <h1 className="wip-title">How GenPilot Works</h1>
          <p className="wip-subtitle">Discover the AI-powered workflow that transforms genetic research from weeks to days.</p>

          <div className="timeline">
            {steps.map((step, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-number">{step.number}</div>
                <div className="timeline-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <span className="timeline-tag">{step.tag}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 justify-start flex-wrap mt-14">
            <Link href="/" className="px-6 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-mono text-xs tracking-widest uppercase hover:bg-cyan-400 hover:bg-opacity-5 transition-all rounded">
              Back to Home
            </Link>
            <Link href="/request-access" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-black font-mono text-xs tracking-widest uppercase rounded hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              Request Early Access
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
