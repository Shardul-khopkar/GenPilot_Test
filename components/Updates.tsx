'use client';

import React from 'react';

type BadgeType = 'new' | 'improve' | 'fix';

interface UpdateItem {
  date: string;
  title: string;
  description: string;
  badge: BadgeType;
}

interface UpdatesProps {
  items?: UpdateItem[];
}

const BadgeComponent: React.FC<{ type: BadgeType }> = ({ type }) => {
  const getBadgeStyles = (type: BadgeType) => {
    switch (type) {
      case 'new':
        return {
          background: 'rgba(0, 217, 255, 0.1)',
          color: 'var(--accent-cyan)',
          border: '1.5px solid rgba(0, 217, 255, 0.3)',
        };
      case 'improve':
        return {
          background: 'rgba(120,180,255,0.1)',
          color: '#7bb8ff',
          border: '1px solid rgba(120,180,255,0.25)',
        };
      case 'fix':
        return {
          background: 'rgba(255,180,100,0.1)',
          color: '#ffa850',
          border: '1px solid rgba(255,180,100,0.2)',
        };
    }
  };

  const label = type === 'new' ? 'In Progress' : type === 'improve' ? 'Improved' : 'Fixed';
  const styles = getBadgeStyles(type);

  return (
    <span
      className="font-mono text-xs uppercase tracking-widest px-2.5 py-1 rounded whitespace-nowrap"
      style={{
        ...styles,
        letterSpacing: '0.1em',
      }}>
      {label}
    </span>
  );
};

const Updates: React.FC<UpdatesProps> = ({
  items = [
    {
      date: 'Now',
      title: 'Bioinformatics Team Working On It',
      description:
        'Building specialized sequence analysis and off-target prediction models optimized for CRISPR systems across multiple protein variants.',
      badge: 'new',
    },
    {
      date: 'Now',
      title: 'Backend Team Building Model',
      description:
        'FastAPI and Node.js backend in development. Features include real-time alignment via BWA-MEM, automatic coordinate conversion (hg19/hg38), and AI-powered ranking.',
      badge: 'new',
    },
  ],
}) => {
  return (
    <section
      id="updates"
      className="py-16 md:py-24 px-4 md:px-8 lg:px-12 border-t relative z-10"
      style={{
        borderColor: '1.5px solid var(--glass-border)',
      }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-12 reveal">
          <p
            className="font-mono text-xs uppercase tracking-widest mb-4"
            style={{
              color: 'var(--primary-blue)',
              letterSpacing: '0.18em',
            }}>
            // Changelog
          </p>
          <h2
            className="font-sans font-bold"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--text)',
            }}>
            What's new in
            <br />
            <em style={{ color: 'var(--accent-yellow)', fontStyle: 'normal' }}>GenPilot.</em>
          </h2>
        </div>

        {/* Updates List */}
        <div className="flex flex-col reveal">
          {items.map((item, index) => (
            <div
              key={index}
              className="grid gap-4 md:gap-8 items-start py-6 md:py-7 px-0"
              style={{
                gridTemplateColumns: 'auto 1fr auto',
                borderBottom: index === items.length - 1 ? 'none' : '1px solid rgba(0, 255, 140, 0.08)',
              }}>
              {/* Left Column: Date */}
              <div
                className="font-mono text-xs uppercase tracking-widest pt-0.5"
                style={{
                  color: 'var(--text-muted)',
                  letterSpacing: '0.1em',
                }}>
                {item.date}
              </div>

              {/* Info */}
              <div>
                <h4
                  className="font-sans font-semibold mb-1.5"
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text)',
                  }}>
                  {item.title}
                </h4>
                <p
                  className="font-light"
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    fontWeight: 300,
                    lineHeight: 1.5,
                  }}>
                  {item.description}
                </p>
              </div>

              {/* Badge */}
              <BadgeComponent type={item.badge} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Updates;
