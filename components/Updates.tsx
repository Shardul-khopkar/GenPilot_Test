'use client';

import React from 'react';
import { useAppStore } from '@/lib/store';

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

const BadgeComponent: React.FC<{ type: BadgeType; isDark: boolean }> = ({ type, isDark }) => {
  const getBadgeStyles = (type: BadgeType, isDark: boolean) => {
    switch (type) {
      case 'new':
        return isDark
          ? {
              background: 'rgba(0, 217, 255, 0.1)',
              color: 'var(--accent-cyan)',
              border: '1.5px solid rgba(0, 217, 255, 0.3)',
            }
          : {
              background: 'rgba(0, 153, 187, 0.08)',
              color: 'var(--accent-cyan)',
              border: '1.5px solid rgba(0, 153, 187, 0.25)',
            };
      case 'improve':
        return isDark
          ? {
              background: 'rgba(120,180,255,0.1)',
              color: '#7bb8ff',
              border: '1px solid rgba(120,180,255,0.25)',
            }
          : {
              background: 'rgba(0, 82, 204, 0.1)',
              color: '#0052cc',
              border: '1px solid rgba(0, 82, 204, 0.25)',
            };
      case 'fix':
        return isDark
          ? {
              background: 'rgba(255,180,100,0.1)',
              color: '#ffa850',
              border: '1px solid rgba(255,180,100,0.2)',
            }
          : {
              background: 'rgba(184, 134, 11, 0.1)',
              color: '#b8860b',
              border: '1px solid rgba(184, 134, 11, 0.25)',
            };
    }
  };

  const label = type === 'new' ? 'In Progress' : type === 'improve' ? 'Improved' : 'Fixed';
  const styles = getBadgeStyles(type, isDark);

  return (
    <span
      className="font-mono text-xs uppercase tracking-widest px-2.5 py-1 rounded whitespace-nowrap transition-all duration-300"
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
  const { theme } = useAppStore();

  const isDark = theme === 'dark';

  return (
    <section
      id="updates"
      className="py-16 md:py-24 px-4 md:px-8 lg:px-12 border-t relative z-10 transition-all duration-500"
      style={{
        borderColor: 'var(--glass-border)',
      }}>
      <div className="max-w-6xl mx-auto">
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
            Real-time research
            <br />
            at the <em style={{ color: 'var(--accent-yellow)', fontStyle: 'normal' }}>frontier.</em>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-xl reveal transition-all duration-300"
              style={{
                background: 'var(--glass-bg)',
                border: '1.5px solid var(--glass-border)',
                backdropFilter: 'blur(15px)',
              }}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                <div>
                  <div className="inline-block font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
                    {item.date}
                  </div>
                  <h3
                    className="font-sans font-semibold"
                    style={{
                      fontSize: '1.1rem',
                      color: 'var(--text)',
                    }}>
                    {item.title}
                  </h3>
                </div>
                <BadgeComponent type={item.badge} isDark={isDark} />
              </div>
              <p
                className="font-light"
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: 'var(--text-muted)',
                }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Updates;
