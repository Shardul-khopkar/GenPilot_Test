'use client';

import React from 'react';
import { useAppStore } from '@/lib/store';

interface StepData {
  number: string;
  title: string;
  description: string;
}

interface HowItWorksProps {
  steps?: StepData[];
}

const StepCard: React.FC<{ number: string; title: string; description: string; isDark: boolean }> = ({
  number,
  title,
  description,
  isDark,
}) => {
  const hoverBg = isDark ? 'rgba(20, 30, 80, 0.4)' : 'rgba(255, 255, 255, 0.75)';
  const hoverBorder = isDark ? 'rgba(0, 102, 255, 0.4)' : 'rgba(0, 82, 204, 0.35)';
  const hoverShadow = isDark ? '0 8px 30px rgba(0, 102, 255, 0.2)' : '0 8px 30px rgba(0, 82, 204, 0.15)';
  const normalShadow = isDark ? '0 4px 20px rgba(0, 102, 255, 0.1)' : '0 4px 20px rgba(0, 82, 204, 0.08)';
  
  return (
    <div
      className="p-6 md:p-8 lg:p-10 relative reveal transition-all duration-300 hover:cursor-default"
      style={{
        background: 'var(--glass-bg)',
        border: '1.5px solid var(--glass-border)',
        backdropFilter: 'blur(15px)',
        boxShadow: normalShadow,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = hoverBg;
        (e.currentTarget as HTMLElement).style.borderColor = hoverBorder;
        (e.currentTarget as HTMLElement).style.boxShadow = hoverShadow;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = 'var(--glass-bg)';
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--glass-border)';
        (e.currentTarget as HTMLElement).style.boxShadow = normalShadow;
      }}>
      <div
        className="font-mono font-bold mb-5"
        style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          color: isDark ? 'rgba(0, 102, 255, 0.15)' : 'rgba(0, 82, 204, 0.12)',
          lineHeight: 1,
          letterSpacing: '-0.04em',
        }}>
        {number}
      </div>
      <h3
        className="font-sans font-semibold mb-3"
        style={{
          fontSize: '1.05rem',
          color: 'var(--accent-cyan)',
        }}>
        {title}
      </h3>
      <p
        className="font-light"
        style={{
          fontSize: '0.88rem',
          lineHeight: 1.65,
          color: 'var(--text-muted)',
        }}>
        {description}
      </p>
    </div>
  );
};

const HowItWorks: React.FC<HowItWorksProps> = ({
  steps = [
    {
      number: '01',
      title: 'Input & Validation',
      description:
        'Supply your gRNA or candidate guide sequence with optional metadata like target gene and organism. GenPilot normalizes the sequence, validates format and length, and checks reverse complement to your target—essential since CRISPR only works when the guide matches the target strand perfectly.',
    },
    {
      number: '02',
      title: 'Genomic Alignment & Analysis',
      description:
        'The system searches against reference genomes using BWA-MEM and Bowtie2 to find the best matches, then analyzes PAM compatibility, strand orientation, exon overlap, and off-target risk. AI ranking provides confidence estimates and flags inconsistencies.',
    },
    {
      number: '03',
      title: 'Build Mapping & Cross-Reference',
      description:
        'Coordinates automatically convert between hg19 and hg38 so your target maps consistently across genome builds. Essential when switching references or comparing results across tools—no more manual liftover frustration.',
    },
    {
      number: '04',
      title: 'Structured Report & Export',
      description:
        'Export a complete analysis showing matching genomic coordinates, build mapping, reverse complement status, PAM presence, exon annotation, off-target warnings, and confidence scores. Validate your edit computationally before ordering, cloning, or running the experiment.',
    },
  ],
}) => {
  const { theme } = useAppStore();

  const isDark = theme === 'dark';

  return (
    <section
      id="how"
      className="py-16 md:py-24 px-4 md:px-8 lg:px-12 border-t relative z-10 transition-all duration-500"
      style={{
        borderColor: 'var(--glass-border)',
        background: isDark
          ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(10, 14, 39, 0.4) 50%, rgba(0, 0, 0, 0.8) 100%)'
          : 'linear-gradient(135deg, rgba(244, 247, 251, 0.5) 0%, rgba(240, 246, 255, 0.5) 50%, rgba(245, 247, 251, 0.5) 100%)',
      }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 lg:mb-18 reveal">
          <p
            className="font-mono text-xs uppercase tracking-widest mb-4 mx-auto"
            style={{
              color: 'var(--primary-blue)',
              letterSpacing: '0.18em',
            }}>
            // How it works
          </p>
          <h2
            className="font-sans font-bold mb-5"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--text)',
            }}>
            From sequence to
            <br />
            confident edit in <em style={{ color: 'var(--accent-yellow)', fontStyle: 'normal' }}>minutes.</em>
          </h2>
          <p
            className="font-light mx-auto"
            style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'var(--text-muted)',
              maxWidth: '540px',
            }}>
            GenPilot's AI pipeline takes your target sequence from raw input to a fully validated edit plan — with zero context switching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
