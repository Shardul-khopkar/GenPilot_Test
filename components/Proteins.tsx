'use client';

import React from 'react';

interface ProteinTag {
  name: string;
}

interface ProteinStat {
  number: string;
  label: string;
}

interface ProteinsProps {
  tags?: ProteinTag[];
  stats?: ProteinStat[];
}

const Proteins: React.FC<ProteinsProps> = ({
  tags = [
    { name: 'SpCas9' },
    { name: 'SaCas9' },
    { name: 'Cas12a (Cpf1)' },
    { name: 'Cas12b' },
    { name: 'PE2 Prime' },
    { name: 'PE3 Prime' },
    { name: 'Base Editors' },
  ],
  stats = [
    { number: '7', label: 'Editing proteins supported' },
    { number: '2', label: 'Genome assemblies (hg19 & hg38)' },
    { number: '<1s', label: 'Avg. prediction latency' },
    { number: '97%', label: 'Prediction accuracy benchmark' },
  ],
}) => {
  return (
    <section
      id="proteins"
      className="py-16 md:py-20 px-4 md:px-8 lg:px-12 border-t relative z-10"
      style={{
        borderColor: 'var(--glass-border)',
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(10, 14, 39, 0.4) 50%, rgba(0, 0, 0, 0.8) 100%)',
      }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 max-w-6xl mx-auto items-center">
        <div className="reveal">
          <p
            className="font-mono text-xs uppercase tracking-widest mb-4"
            style={{
              color: 'var(--primary-blue)',
              letterSpacing: '0.18em',
            }}>
            // Supported proteins
          </p>
          <h2
            className="font-sans font-bold mb-5"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--text)',
            }}>
            Every major
            <br />
            editing <em style={{ color: 'var(--accent-yellow)', fontStyle: 'normal' }}>protein.</em>
          </h2>
          <p
            className="font-light mb-8"
            style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'var(--text-muted)',
              maxWidth: '540px',
            }}>
            GenPilot is pre-trained on the most widely used CRISPR editing proteins, with optimised prediction models for each system's unique behaviour.
          </p>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="font-mono text-xs uppercase tracking-widest px-3 md:px-4 py-2 rounded\"
                style={{
                  color: 'var(--accent-cyan)',
                  background: 'rgba(0, 217, 255, 0.1)',
                  border: '1.5px solid rgba(0, 217, 255, 0.3)',
                  letterSpacing: '0.1em',
                }}>
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column - Stats Grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 reveal">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 md:p-6 rounded-xl text-center"
              style={{
                background: 'var(--glass-bg)',
                border: '1.5px solid var(--glass-border)',
              }}>
              <div
                className="font-sans font-bold mb-1.5"
                style={{
                  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                  color: 'var(--accent-cyan)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                }}>
                {stat.number}
              </div>
              <div
                className="font-mono text-xs uppercase tracking-widest"
                style={{
                  color: 'var(--text-muted)',
                  letterSpacing: '0.1em',
                  lineHeight: 1.4,
                }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proteins;
