'use client';

import React, { useTransition } from 'react';
import { useRouter } from 'next/navigation';

const CTA: React.FC = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleRequestAccess = () => {
    startTransition(() => router.push('/request-access'));
  };

  const handleContact = () => {
    startTransition(() => router.push('/contact'));
  };

  return (
    <section
      className="py-16 md:py-24 lg:py-30 px-4 md:px-8 lg:px-12 border-t text-center relative overflow-hidden"
      style={{
        borderColor: '1.5px solid var(--glass-border)',
      }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(0, 102, 255, 0.05) 0%, transparent 70%)',
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
          GenPilot's integrated pipeline combines sequence validation, computational biology, and machine learning. Submit your gRNA and get back a fully validated edit plan with confidence scores, PAM confirmation, off-target warnings, and cross-referenced coordinates.
        </p>

        <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center">
          <button
            onClick={handleRequestAccess}
            disabled={isPending}
            className="btn btn-primary w-full md:w-auto"
            style={{
              padding: '14px 24px md:padding-28',
              fontSize: '0.75rem',
              fontFamily: "'Space Mono', monospace",
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 600,
              opacity: isPending ? 0.7 : 1,
              cursor: isPending ? 'not-allowed' : 'pointer',
            }}>
            {isPending ? 'Loading...' : 'Request Early Access'}
          </button>
          <button
            onClick={handleContact}
            disabled={isPending}
            className="btn btn-ghost"
            style={{
              padding: '14px 28px',
              fontSize: '0.75rem',
              fontFamily: "'Space Mono', monospace",
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 600,
              opacity: isPending ? 0.7 : 1,
              cursor: isPending ? 'not-allowed' : 'pointer',
            }}>
            {isPending ? 'Loading...' : 'Contact the Team'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
