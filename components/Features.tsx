'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { animationVariants, viewportConfig } from '@/lib/animations';

interface FeatureData {
  title: string;
  description: string;
}

interface FeaturesProps {
  features?: FeatureData[];
}

const FeatureCard: React.FC<{ title: string; description: string; isDark: boolean; index: number }> = ({ 
  title, 
  description, 
  isDark,
  index 
}) => {
  const hoverBg = isDark ? 'rgba(20, 30, 80, 0.4)' : 'rgba(255, 255, 255, 0.75)';
  const hoverBorder = isDark ? 'rgba(0, 82, 204, 0.35)' : 'rgba(0, 82, 204, 0.35)';
  const hoverShadow = isDark ? '0 8px 35px rgba(0, 82, 204, 0.15)' : '0 8px 35px rgba(0, 82, 204, 0.15)';
  const normalShadow = isDark ? '0 4px 20px rgba(0, 82, 204, 0.08)' : '0 4px 20px rgba(0, 82, 204, 0.08)';

  return (
    <motion.div
      variants={animationVariants.fadeInUp}
      initial="hidden"
      whileInView="visible"
      whileHover={animationVariants.cardHover}
      viewport={viewportConfig}
      className="p-6 md:p-8 rounded-xl reveal transition-all duration-300 hover:cursor-default"
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
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 text-lg transition-all duration-300"
        style={{
          background: isDark ? 'rgba(0, 82, 204, 0.15)' : 'rgba(0, 82, 204, 0.12)',
          border: isDark ? '1.5px solid rgba(0, 82, 204, 0.3)' : '1.5px solid rgba(0, 82, 204, 0.25)',
          color: 'var(--accent-cyan)',
        }}>
        ⚡
      </div>
      <h3
        className="font-sans font-semibold mb-2.5 transition-all duration-300"
        style={{
          fontSize: '0.95rem',
          color: 'var(--text)',
        }}>
        {title}
      </h3>
      <p
        className="font-light transition-all duration-300"
        style={{
          fontSize: '0.85rem',
          lineHeight: 1.65,
          color: 'var(--text-muted)',
        }}>
        {description}
      </p>
    </motion.div>
  );
};

const Features: React.FC<FeaturesProps> = ({
  features = [
    {
      title: 'Tindr - Base Pair Location',
      description:
        'Find exact genomic coordinates for your DNA sequences. Search the reference genome and get precise location data for both hg19 and hg38 builds.',
    },
    {
      title: 'HGtranslate - Build Converter',
      description:
        'Convert genomic coordinates seamlessly between hg19 and hg38. No more manual liftover scripts or version inconsistencies.',
    },
    {
      title: 'Success Predictor - CRISPR Analysis',
      description:
        'Predict CRISPR editing success and understand failure factors. Get rule-based explanations of why your targets will succeed or face challenges.',
    },
  ],
}) => {
  const { theme } = useAppStore();

  const isDark = theme === 'dark';

  return (
    <section
      id="features"
      className="py-16 md:py-24 px-4 md:px-8 lg:px-12 border-t relative z-10 transition-all duration-500"
      style={{ borderColor: 'var(--glass-border)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-14 reveal">
          <p
            className="font-mono text-xs uppercase tracking-widest mb-4"
            style={{
              color: 'var(--primary-blue)',
              letterSpacing: '0.18em',
            }}>
            // Superpowers
          </p>

          <h2
            className="font-sans font-bold"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--text)',
              marginBottom: '24px',
            }}>
            Everything you need for
            <br />
            every step of your CRISPR
            <br />
            lab workflow <em style={{ color: 'var(--accent-yellow)', fontStyle: 'normal' }}>needs.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              title={feature.title} 
              description={feature.description} 
              isDark={isDark}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
