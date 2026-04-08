'use client';

import React, { useTransition, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { useDelayedAction } from '@/lib/useDelayedAction';

const CTA: React.FC = () => {
  const router = useRouter();
  const [isPendingAccess, startAccessTransition] = useTransition();
  const [isPendingContact, startContactTransition] = useTransition();
  const { isDelayed: isAccessDelayed, executeDelayed: executeAccessDelayed } = useDelayedAction(2000);
  const { isDelayed: isContactDelayed, executeDelayed: executeContactDelayed } = useDelayedAction(2000);
  const { theme } = useAppStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  const handleRequestAccess = () => {
    executeAccessDelayed(() => {
      startAccessTransition(() => router.push('/request-access'));
    });
  };

  const handleContact = () => {
    executeContactDelayed(() => {
      startContactTransition(() => router.push('/contact'));
    });
  };

  return (
    <section
      className="py-16 md:py-24 lg:py-30 px-4 md:px-8 lg:px-12 border-t text-center relative overflow-hidden transition-colors duration-500"
      style={{
        borderColor: 'var(--glass-border)',
      }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark 
            ? 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(0, 102, 255, 0.08) 0%, transparent 70%)'
            : 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(0, 82, 204, 0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <p
          className="font-mono text-xs uppercase tracking-widest mb-4 md:mb-6"
          style={{
            color: 'var(--primary-blue)',
            letterSpacing: '0.18em',
          }}>
          // Early access
        </p>

        <h2
          className="font-sans font-bold mb-4 md:mb-6"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            color: 'var(--text)',
            maxWidth: '700px',
            margin: '0 auto 24px',
          }}>
          Ready to accelerate
          <br />
          your CRISPR <em style={{ color: 'var(--accent-yellow)', fontStyle: 'normal' }}>research?</em>
        </h2>

        <p
          className="font-light mb-8 md:mb-12"
          style={{
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'var(--text-muted)',
            maxWidth: '700px',
            margin: '0 auto 48px',
          }}>
          GenPilot provides three integrated tools for CRISPR research: Find genomic coordinates with Tindr, convert between genome builds with HGtranslate, and predict editing success factors with Success Predictor. Complete, coordinated, and accessible.
        </p>

        <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center">
          <button
            onClick={handleRequestAccess}
            disabled={isPendingAccess || isAccessDelayed}
            className="btn btn-primary w-full md:w-auto transition-all duration-500"
            style={{
              padding: '14px 24px',
              fontSize: '0.75rem',
              fontFamily: "'Space Mono', monospace",
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 600,
              opacity: isPendingAccess || isAccessDelayed ? 0.7 : 1,
              cursor: isPendingAccess || isAccessDelayed ? 'not-allowed' : 'pointer',
              background: isDark
                ? 'linear-gradient(135deg, #0066ff 0%, #00d9ff 100%)'
                : 'linear-gradient(135deg, #0052cc 0%, #0099bb 100%)',
              color: '#ffffff',
              border: 'none',
            }}>
            {isPendingAccess || isAccessDelayed ? 'Loading...' : 'Request Early Access'}
          </button>
          <button
            onClick={handleContact}
            disabled={isPendingContact || isContactDelayed}
            className="btn btn-ghost transition-all duration-500"
            style={{
              padding: '14px 28px',
              fontSize: '0.75rem',
              fontFamily: "'Space Mono', monospace",
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 600,
              opacity: isPendingContact || isContactDelayed ? 0.7 : 1,
              cursor: isPendingContact || isContactDelayed ? 'not-allowed' : 'pointer',
              color: 'var(--text)',
              border: `1.5px solid ${isDark ? 'rgba(0, 217, 255, 0.3)' : 'rgba(0, 82, 204, 0.3)'}`,
              backgroundColor: isDark ? 'rgba(0, 102, 255, 0.08)' : 'rgba(0, 82, 204, 0.06)',
            }}>
            {isPendingContact || isContactDelayed ? 'Loading...' : 'Contact the Team'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
