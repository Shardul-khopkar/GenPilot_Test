'use client';

import React from 'react';
import { useAppStore } from '@/lib/store';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function HowItWorksPage() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

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
      <div 
        className="relative min-h-screen pt-24 pb-16 px-6 transition-colors duration-500"
        style={{
          background: isDark
            ? 'linear-gradient(to bottom, #000000, #0a0e27, #000000)'
            : 'linear-gradient(to bottom, #f4f7fb, #e8f0ff, #f4f7fb)',
        }}>
        <style>{`
          .wip-badge {
            font-family: 'Space Mono', monospace;
            font-size: 0.75rem;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            display: inline-block;
            padding: 8px 16px;
            border-radius: 4px;
            margin-bottom: 28px;
            transition: all 0.5s ease;
          }

          .page-title {
            font-family: 'Sora', sans-serif;
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 700;
            line-height: 1.1;
            letter-spacing: -0.03em;
            margin-bottom: 24px;
            transition: color 0.5s ease;
          }

          .page-subtitle {
            font-size: 1.1rem;
            font-weight: 300;
            line-height: 1.7;
            margin-bottom: 48px;
            max-width: 600px;
            transition: color 0.5s ease;
          }

          .steps-container {
            max-width: 900px;
            margin: 0 auto;
          }

          .step-card {
            margin-bottom: 32px;
            padding: 24px;
            border-radius: 12px;
            backdrop-filter: blur(20px);
            transition: all 0.5s ease;
          }

          .step-number {
            font-family: 'Space Mono', monospace;
            font-size: clamp(2rem, 5vw, 3.5rem);
            font-weight: 700;
            margin-bottom: 16px;
            opacity: 0.7;
            transition: all 0.5s ease;
          }

          .step-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 12px;
            transition: color 0.5s ease;
          }

          .step-description {
            font-size: 1rem;
            line-height: 1.7;
            margin-bottom: 16px;
            transition: color 0.5s ease;
          }

          .step-tag {
            font-family: 'Space Mono', monospace;
            font-size: 0.75rem;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            display: inline-block;
            padding: 6px 12px;
            border-radius: 4px;
            transition: all 0.5s ease;
          }
            border-radius: 4px;
            margin-bottom: 28px;
          }

          .wip-title {
            font-size: clamp(2.5rem, 5vw, 3.5rem);
            font-weight: 700;
            line-height: 1.1;
            letter-spacing: -0.03em;
            margin-bottom: 24px;
            color: var(--text);
            transition: color 0.5s ease;
          }

          .wip-subtitle {
            font-size: 1.1rem;
            font-weight: 300;
            line-height: 1.7;
            margin-bottom: 56px;
            max-width: 700px;
            color: var(--text-muted);
            transition: color 0.5s ease;
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
            line-height: 1;
            color: var(--primary-blue);
            opacity: 0.2;
            transition: all 0.5s ease;
          }

          .timeline-content {
            border-radius: 12px;
            padding: 32px;
            backdrop-filter: blur(20px);
            transition: all 0.5s ease;
          }

          .timeline-content h3 {
            font-size: 1.3rem;
            margin-bottom: 12px;
            color: var(--text);
            transition: color 0.5s ease;
          }

          .timeline-content p {
            line-height: 1.6;
            margin-bottom: 16px;
            color: var(--text-muted);
            transition: color 0.5s ease;
          }

          .timeline-tag {
            display: inline-block;
            font-family: 'Space Mono', monospace;
            font-size: 0.65rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            padding: 4px 12px;
            border-radius: 3px;
            transition: all 0.5s ease;
          }
        `}</style>

        <div className="max-w-4xl mx-auto relative z-10">
          <div 
            className="wip-badge transition-colors duration-500"
            style={{
              color: isDark ? '#00d9ff' : '#0099bb',
              background: isDark ? 'rgba(0, 217, 255, 0.1)' : 'rgba(0, 153, 187, 0.08)',
              border: isDark ? '1.5px solid rgba(0, 217, 255, 0.3)' : '1.5px solid rgba(0, 153, 187, 0.25)',
            }}>
            Work In Progress
          </div>
          <h1 className="wip-title">How GenPilot Works</h1>
          <p className="wip-subtitle">Discover the AI-powered workflow that transforms genetic research from weeks to days.</p>

          <div className="timeline">
            {steps.map((step, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-number">{step.number}</div>
                <div 
                  className="timeline-content transition-all duration-500"
                  style={{
                    background: isDark ? 'rgba(20, 30, 80, 0.25)' : 'rgba(0, 82, 204, 0.06)',
                    border: `1.5px solid ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 82, 204, 0.2)'}`,
                    boxShadow: isDark ? '0 4px 20px rgba(0, 102, 255, 0.1)' : '0 4px 20px rgba(0, 82, 204, 0.05)',
                  }}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <span 
                    className="timeline-tag transition-all duration-500"
                    style={{
                      color: isDark ? '#00d9ff' : '#0099bb',
                      background: isDark ? 'rgba(0, 217, 255, 0.1)' : 'rgba(0, 153, 187, 0.08)',
                    }}>
                    {step.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 justify-start flex-wrap mt-14">
            <a 
              href="/" 
              className="px-6 py-3 font-mono text-xs tracking-widest uppercase transition-all rounded duration-500"
              style={{
                color: isDark ? '#00d9ff' : '#0099bb',
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: isDark ? '#00d9ff' : '#0099bb',
                backgroundColor: isDark ? 'rgba(0, 217, 255, 0.05)' : 'rgba(0, 153, 187, 0.05)',
              }}>
              Back to Home
            </a>
            <a 
              href="/request-access" 
              className="px-6 py-3 font-mono text-xs tracking-widest uppercase rounded transition-all duration-500"
              style={{
                background: isDark
                  ? 'linear-gradient(to right, #0066ff, #00d9ff)'
                  : 'linear-gradient(to right, #0052cc, #0099bb)',
                color: '#ffffff',
              }}>
              Request Early Access
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
