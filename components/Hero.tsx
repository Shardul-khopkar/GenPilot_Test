'use client';

import React, { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { useDelayedAction } from '@/lib/useDelayedAction';
import { animationVariants, springs } from '@/lib/animations';
import { AuroraBackground } from './ui/aurora-background';
import DnaSVG from './DnaSVG';

const Hero: React.FC = () => {
  const router = useRouter();
  const { theme } = useAppStore();
  const [isPrimaryPending, startPrimaryTransition] = useTransition();
  const [isGhostPending, startGhostTransition] = useTransition();
  const { isDelayed: isPrimaryDelayed, executeDelayed: executeDelayedPrimary } = useDelayedAction(2000);
  const { isDelayed: isGhostDelayed, executeDelayed: executeDelayedGhost } = useDelayedAction(2000);

  const handlePrimaryClick = () => {
    executeDelayedPrimary(() => {
      startPrimaryTransition(() => router.push('/request-access'));
    });
  };

  const handleGhostClick = () => {
    executeDelayedGhost(() => {
      startGhostTransition(() => router.push('/how-it-works'));
    });
  };

  const isDark = theme === 'dark';

  // Framer Motion variants for staggered animations
  const containerVariants = animationVariants.containerStagger;

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative pt-20 overflow-hidden transition-all duration-500"
      style={{ paddingTop: '80px' }}>
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-500"
        style={{
          zIndex: 1,
          background: isDark
            ? `radial-gradient(ellipse 100% 100% at 15% 50%, rgba(0, 102, 255, 0.8) 0%, transparent 60%),
               radial-gradient(ellipse 80% 100% at 85% 25%, rgba(0, 217, 255, 0.6) 0%, transparent 60%),
               radial-gradient(ellipse 70% 70% at 50% 85%, rgba(107, 91, 250, 0.5) 0%, transparent 60%),
               radial-gradient(ellipse 60% 60% at 80% 60%, rgba(0, 217, 255, 0.4) 0%, transparent 65%)`
            : `radial-gradient(ellipse 100% 100% at 15% 50%, rgba(0, 82, 204, 0.65) 0%, transparent 60%),
               radial-gradient(ellipse 80% 100% at 85% 25%, rgba(0, 153, 187, 0.55) 0%, transparent 60%),
               radial-gradient(ellipse 70% 70% at 50% 85%, rgba(100, 76, 230, 0.45) 0%, transparent 60%),
               radial-gradient(ellipse 60% 60% at 80% 60%, rgba(0, 153, 187, 0.35) 0%, transparent 65%)`,
        }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
        <DnaSVG />
      </div>

      <div
        className="flex flex-col justify-center px-4 md:px-6 lg:px-12 py-12 md:py-20 relative z-10"
        style={{ paddingLeft: 'clamp(1rem, 5vw, 72px)', paddingRight: 'clamp(1rem, 5vw, 24px)' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col">
          <motion.p
            variants={itemVariants}
            className="font-mono text-xs uppercase tracking-widest mb-7"
            style={{ color: 'var(--primary-blue)' }}>
            Genetic Engineering Tools Suite
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-sans font-bold mb-7"
            style={{
              fontSize: 'clamp(3.2rem, 6vw, 5.5rem)',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              color: 'var(--text)',
            }}>
            Gen<br />
            <span
              style={{
                color: 'var(--primary-db)',
                opacity: 1,
              }}>
              ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ Pilot
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-light mb-12 max-w-sm"
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.65,
              color: 'var(--text-muted)',
            }}>
            Three powerful tools for CRISPR researchers: Tindr for base pair location finding, HGtranslate for genome build conversion (hg19/hg38), and Success Predictor for editing success analysis—all unified in one platform.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 items-center">
            <motion.button
              onClick={handlePrimaryClick}
              disabled={isPrimaryPending || isPrimaryDelayed}
              className="btn btn-primary"
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '14px 28px',
                fontSize: '0.75rem',
                fontFamily: "'Space Mono', monospace",
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 600,
                background: isDark
                  ? 'linear-gradient(135deg, #0066ff 0%, #00d9ff 100%)'
                  : 'linear-gradient(135deg, #0052cc 0%, #0099bb 100%)',
                color: isDark ? '#000' : '#fff',
                opacity: isPrimaryPending || isPrimaryDelayed ? 0.7 : 1,
                cursor: isPrimaryPending || isPrimaryDelayed ? 'not-allowed' : 'pointer',
                border: 'none',
                borderRadius: '0.5rem',
              }}>
              {isPrimaryPending || isPrimaryDelayed ? 'Loading...' : 'Request Early Access'}
            </motion.button>
            <motion.button
              onClick={handleGhostClick}
              disabled={isGhostPending || isGhostDelayed}
              className="btn btn-ghost"
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '14px 28px',
                fontSize: '0.75rem',
                fontFamily: "'Space Mono', monospace",
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 600,
                background: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 82, 204, 0.1)',
                color: isDark ? '#fff' : '#0052cc',
                border: isDark ? '1.5px solid rgba(255, 255, 255, 0.25)' : '1.5px solid rgba(0, 82, 204, 0.25)',
                opacity: isGhostPending || isGhostDelayed ? 0.7 : 1,
                cursor: isGhostPending || isGhostDelayed ? 'not-allowed' : 'pointer',
                borderRadius: '0.5rem',
              }}>
              {isGhostPending ? 'Loading...' : 'See How It Works'}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <div
        className="hidden md:flex items-center justify-center py-12 md:py-20 relative z-10 opacity-0 transition-all duration-500"
        style={{
          paddingRight: 'clamp(1rem, 5vw, 72px)',
          paddingLeft: 'clamp(1rem, 5vw, 24px)',
          animation: 'fadeIn 1s 0.8s forwards',
        }}>
        <div
          className="w-full max-w-xs md:max-w-md rounded-2xl overflow-hidden transition-all duration-500"
          style={{
            background: 'var(--glass-bg)',
            border: '1.5px solid var(--glass-border)',
            backdropFilter: 'blur(30px)',
            boxShadow: isDark
              ? '0 8px 40px rgba(0, 102, 255, 0.2), inset 1px 1px 1px rgba(255, 255, 255, 0.1)'
              : '0 8px 40px rgba(0, 82, 204, 0.15), inset 1px 1px 1px rgba(255, 255, 255, 0.3)',
          }}>
          <div
            className="flex items-center gap-2 p-4 transition-all duration-500"
            style={{
              background: isDark ? 'rgba(0, 102, 255, 0.1)' : 'rgba(0, 82, 204, 0.08)',
              borderBottom: '1px solid var(--glass-border)',
            }}>
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--accent-yellow)' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--accent-cyan)' }} />
            <span
              className="font-mono text-xs ml-2"
              style={{
                color: 'var(--text-muted)',
                letterSpacing: '0.06em',
              }}>
              genpilot — sequence_editor.py
            </span>
          </div>

          <div className="p-5">
            <div className="font-mono text-xs" style={{ color: '#3d6b4f' }}>
              POST /api/analyze
            </div>
            <div className="font-mono text-xs" style={{ color: '#7dd3fc' }}>
              {'{'}
            </div>
            <LineCode label="sequence" value="GAGUCCGAGCAGAAGAAGA" />
            <LineCode label="organism" value="human" />
            <LineCode label="build" value="hg38" />
            <div className="font-mono text-xs" style={{ color: '#7dd3fc' }}>
              {'}'}
            </div>
            <div className="font-mono text-xs mt-1" style={{ color: '#3d6b4f' }}>
              // Response
            </div>
            <div className="font-mono text-xs" style={{ color: '#7dd3fc' }}>
              {'{'}
            </div>
            <LineCode label="coordinate" value="chr7:55129301" />
            <LineCode label="hg19" value="chr7:55123890" />
            <LineCode label="strand" value="reverse" />
            <LineCode label="pam" value="true" isNum={false} />
            <LineCode label="gene" value="TP53" />
            <LineCode label="confidence" value="0.94" isNum={true} />
            <div className="font-mono text-xs" style={{ color: '#7dd3fc' }}>
              {'}'}
            </div>
          </div>

          <div
            className="flex items-center gap-2 p-2.5"
            style={{
              borderTop: '1px solid var(--glass-border)',
              background: 'rgba(0, 102, 255, 0.04)',
            }}>
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: 'var(--accent-cyan)',
                boxShadow: '0 0 8px var(--accent-cyan)',
                animation: 'pulse 2s infinite',
              }}
            />
            <span
              className="font-mono text-xs"
              style={{
                color: 'var(--accent-cyan)',
                letterSpacing: '0.1em',
              }}>
              Sequence Analysis · hg19/hg38 · Result Ranking
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const LineCode: React.FC<{ label: string; value: string; isNum?: boolean }> = ({
  label,
  value,
  isNum = false,
}) => (
  <div className="font-mono text-xs space-x-0">
    <span style={{ color: '#7dd3fc' }}>{`  ${label}`}</span>
    <span style={{ color: '#7dd3fc' }}>:</span>
    <span style={{ color: isNum ? '#f9a8d4' : 'var(--accent-cyan)' }}> {`"${value}"`}</span>
    <span style={{ color: 'var(--text-muted)' }}>,</span>
  </div>
);

export default Hero;
