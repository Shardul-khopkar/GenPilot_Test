'use client';

import React from 'react';
import { useAppStore } from '@/lib/store';

interface StatItem {
  number: string;
  label: string;
}

interface StatsStripProps {
  stats?: StatItem[];
}

const StatsStrip: React.FC<StatsStripProps> = ({
  stats = [
    { number: '97%', label: 'Edit success prediction accuracy' },
    { number: '4×', label: 'Faster sequence analysis vs manual' },
    { number: '3B+', label: 'Base pairs indexed across hg19 & hg38' },
  ],
}) => {
  const { theme } = useAppStore();

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 relative z-10 transition-all duration-500"
      style={{
        borderTop: '1px solid var(--glass-border)',
        borderBottom: '1px solid var(--glass-border)',
      }}>
      {stats.map((stat, index) => (
        <div
          key={index}
          className="px-4 md:px-8 lg:px-12 py-8 md:py-10 opacity-0 transition-all duration-300"
          style={{
            borderRight: index < 2 ? '1px solid var(--glass-border)' : 'none',
            borderBottom: index < 2 ? '1px solid var(--glass-border)' : 'none',
            animation: `fadeUp 0.6s forwards`,
            animationDelay: `${0.1 + index * 0.1}s`,
          }}>
          <div
            className="font-sans text-2xl md:text-3xl font-bold leading-tight mb-2 transition-all duration-300"
            style={{
              color: 'var(--accent-cyan)',
              letterSpacing: '-0.04em',
              fontSize: 'clamp(1.5rem, 5vw, 2.8rem)',
            }}>
            {stat.number}
          </div>
          <div
            className="font-mono text-xs uppercase tracking-widest transition-all duration-300"
            style={{
              color: 'var(--text-muted)',
              letterSpacing: '0.12em',
            }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsStrip;
