'use client';

import React from 'react';
import { useAppStore } from '@/lib/store';

interface ProblemCardData {
  title: string;
  description: string;
}

interface ProblemProps {
  cards?: ProblemCardData[];
}

const ProblemCard: React.FC<{ title: string; description: string; isDark: boolean }> = ({ title, description, isDark }) => {
  const hoverBg = isDark ? 'rgba(20, 30, 80, 0.4)' : 'rgba(255, 255, 255, 0.75)';
  const hoverBorder = isDark ? 'rgba(0, 102, 255, 0.5)' : 'rgba(0, 82, 204, 0.35)';
  const hoverShadow = isDark ? '0 8px 30px rgba(0, 102, 255, 0.2)' : '0 8px 30px rgba(0, 82, 204, 0.15)';
  const normalShadow = isDark ? '0 4px 20px rgba(0, 102, 255, 0.1)' : '0 4px 20px rgba(0, 82, 204, 0.08)';
  
  return (
    <div
      className="px-5 md:px-7 py-4 md:py-6 rounded-xl transition-all duration-300 hover:translate-x-1 reveal"
      style={{
        background: 'var(--glass-bg)',
        border: '1.5px solid var(--glass-border)',
        backdropFilter: 'blur(20px)',
        boxShadow: normalShadow,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = hoverBorder;
        (e.currentTarget as HTMLElement).style.background = hoverBg;
        (e.currentTarget as HTMLElement).style.boxShadow = hoverShadow;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--glass-border)';
        (e.currentTarget as HTMLElement).style.background = 'var(--glass-bg)';
        (e.currentTarget as HTMLElement).style.boxShadow = normalShadow;
      }}>
      <h4
        className="font-mono text-xs uppercase tracking-widest mb-2.5"
        style={{
          color: 'var(--accent-yellow)',
          letterSpacing: '0.12em',
        }}>
        {title}
      </h4>
      <p
        className="text-sm font-light"
        style={{
          color: 'var(--text-muted)',
          lineHeight: 1.6,
        }}>
        {description}
      </p>
    </div>
  );
};

const Problem: React.FC<ProblemProps> = ({
  cards = [
    {
      title: 'Sequence Complexity',
      description: 'CRISPR gRNA design requires simultaneous consideration of genome coordinates, PAM sites, reverse complements, and off-target binding across two genome builds.',
    },
    {
      title: 'Manual Analysis Gap',
      description: 'Researchers manually cross-reference sequences between hg19 and hg38, increasing error rates and analysis time.',
    },
    {
      title: 'Off-Target Risk',
      description: 'Predicting and scoring off-target binding sites requires bioinformatics expertise and computational resources most labs lack.',
    },
  ],
}) => {
  const { theme } = useAppStore();
  
  const isDark = theme === 'dark';

  return (
    <section
      id="problem"
      className="py-16 md:py-24 px-4 md:px-8 lg:px-12 relative z-10 transition-all duration-500"
      style={{
        background: isDark
          ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(10, 14, 39, 0.6) 50%, rgba(0, 0, 0, 0.8) 100%)'
          : 'linear-gradient(135deg, rgba(244, 247, 251, 0.5) 0%, rgba(240, 246, 255, 0.5) 50%, rgba(245, 247, 251, 0.5) 100%)',
      }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 max-w-6xl mx-auto items-start">
        <div className="reveal">
          <p
            className="font-mono text-xs uppercase tracking-widest mb-4"
            style={{
              color: 'var(--primary-blue)',
              letterSpacing: '0.18em',
            }}>
            // The problem
          </p>
          <h2
            className="font-sans font-bold mb-5"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--text)',
            }}>
            CRISPR workflows
            <br />
            trapped in <em style={{ color: 'var(--accent-yellow)', fontStyle: 'normal' }}>tool fragmentation.</em>
          </h2>
          <p
            className="font-light"
            style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'var(--text-muted)',
              maxWidth: '540px',
            }}>
            Researchers juggle genome browsers, alignment tools, and manual scripts. GenPilot unifies the entire pipeline—from sequence validation through off-target prediction to coordinate conversion—in one integrated system.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          {cards.map((card, index) => (
            <ProblemCard key={index} title={card.title} description={card.description} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
