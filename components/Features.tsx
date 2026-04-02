'use client';

import React from 'react';

interface FeatureData {
  title: string;
  description: string;
}

interface FeaturesProps {
  features?: FeatureData[];
}

const FeatureCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div
    className="p-6 md:p-8 rounded-xl reveal transition-all duration-300 hover:cursor-default"
    style={{
      background: 'var(--glass-bg)',
      border: '1.5px solid var(--glass-border)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 4px 20px rgba(0, 102, 255, 0.1)',
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0, 102, 255, 0.5)';
      (e.currentTarget as HTMLElement).style.background = 'rgba(20, 30, 80, 0.4)';
      (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 35px rgba(0, 102, 255, 0.2)';
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLElement).style.borderColor = 'var(--glass-border)';
      (e.currentTarget as HTMLElement).style.background = 'var(--glass-bg)';
      (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0, 102, 255, 0.1)';
    }}>
    <div
      className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 text-lg"
      style={{
        background: 'rgba(0, 102, 255, 0.15)',
        border: '1.5px solid rgba(0, 102, 255, 0.3)',
        color: 'var(--accent-cyan)',
      }}>
      ⚡
    </div>
    <h3
      className="font-sans font-semibold mb-2.5"
      style={{
        fontSize: '0.95rem',
        color: 'var(--text)',
      }}>
      {title}
    </h3>
    <p
      className="font-light"
      style={{
        fontSize: '0.85rem',
        lineHeight: 1.65,
        color: 'var(--text-muted)',
      }}>
      {description}
    </p>
  </div>
);

const Features: React.FC<FeaturesProps> = ({
  features = [
    {
      title: 'Sequence Autocomplete',
      description:
        'AI-powered suggestions complete known genetic motifs, reducing manual entry errors and speeding up guide RNA design.',
    },
    {
      title: 'CRISPR Edit Prediction',
      description:
        'Predict cut efficiency and off-target probability for any guide-target pair before committing to an experiment.',
    },
    {
      title: 'Assembly Cross-Reference',
      description:
        'Seamlessly reconcile coordinates between hg19 and hg38. No more manual liftover scripts or versioning headaches.',
    },
    {
      title: 'Mismatch Detection',
      description:
        'Automatically surface sequence mismatches that could compromise edit fidelity, with suggested corrections inline.',
    },
    {
      title: 'GC Content & Repeat Analysis',
      description:
        'Get instant readouts on GC percentage and repeat element density — critical factors for successful transfection.',
    },
    {
      title: 'Blacklisted Region Flags',
      description:
        'GenPilot automatically identifies ENCODE-defined blacklisted chromatin regions and warns before you proceed.',
    },
  ],
}) => {
  return (
    <section id="features" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 border-t relative z-10" style={{ borderColor: 'var(--glass-border)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-14 reveal">
          <p
            className="font-mono text-xs uppercase tracking-widest mb-4"
            style={{
              color: 'var(--primary-blue)',
              letterSpacing: '0.18em',
            }}>
            // Core features
          </p>
          <h2
            className="font-sans font-bold"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--text)',
            }}>
            Everything your
            <br />
            lab workflow <em style={{ color: 'var(--accent-yellow)', fontStyle: 'normal' }}>needs.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
