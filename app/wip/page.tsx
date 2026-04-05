'use client';

import React from 'react';
import { useAppStore } from '@/lib/store';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function WipPage() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <>
      <Navigation />
      <div 
        className="relative min-h-screen pt-24 pb-16 px-6 transition-colors duration-500"
        style={{
          background: 'var(--bg-gradient)',
        }}>
        <style dangerouslySetInnerHTML={{ __html: `
          .wip-badge {
            font-family: "Space Mono", monospace;
            font-size: 0.75rem;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            display: inline-block;
            padding: 8px 16px;
            border-radius: 4px;
            margin-bottom: 28px;
            transition: all 0.5s ease;
          }

          .wip-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 700;
            line-height: 1.1;
            letter-spacing: -0.03em;
            margin-bottom: 24px;
            color: var(--text);
            transition: color 0.5s ease;
          }

          .wip-subtitle {
            font-size: 1.1rem;
            font-weight: 300;
            line-height: 1.7;
            color: var(--text-muted);
            margin-bottom: 48px;
            max-width: 600px;
            transition: color 0.5s ease;
          }

          .wip-icon {
            font-size: 72px;
            margin-bottom: 32px;
            opacity: 0.7;
            animation: float 3s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }

          .status-box {
            border-radius: 12px;
            padding: 36px 32px;
            margin-bottom: 48px;
            backdrop-filter: blur(20px);
            transition: all 0.5s ease;
          }

          .status-label {
            font-family: "Space Mono", monospace;
            font-size: 0.68rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            margin-bottom: 12px;
            transition: color 0.5s ease;
          }

          .status-message {
            font-size: 1rem;
            line-height: 1.6;
            color: var(--text);
            transition: color 0.5s ease;
          }

          .timeline {
            display: flex;
            flex-direction: column;
            gap: 24px;
            margin-top: 32px;
            text-align: left;
          }

          .timeline-item {
            display: flex;
            gap: 16px;
            align-items: flex-start;
          }

          .timeline-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin-top: 6px;
            flex-shrink: 0;
            transition: all 0.5s ease;
          }

          .timeline-content {
            flex: 1;
            padding-bottom: 24px;
            padding-left: 24px;
            margin-left: -14px;
            border-left: 2px solid var(--glass-border);
            transition: all 0.5s ease;
          }

          .timeline-content:last-child {
            border-left: none;
          }

          .timeline-title {
            font-family: "Space Mono", monospace;
            font-size: 0.85rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--accent-cyan);
            margin-bottom: 8px;
            transition: color 0.5s ease;
          }

          .timeline-desc {
            font-size: 0.95rem;
            color: var(--text-muted);
            line-height: 1.5;
            transition: color 0.5s ease;
          }
        ` }} />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div 
            className="wip-badge transition-colors duration-500"
            style={{
              color: isDark ? '#00d9ff' : '#0099bb',
              background: isDark ? 'rgba(0, 217, 255, 0.1)' : 'rgba(0, 153, 187, 0.08)',
              border: isDark ? '1.5px solid rgba(0, 217, 255, 0.3)' : '1.5px solid rgba(0, 153, 187, 0.25)',
            }}>
            Work In Progress
          </div>
          <h1 className="wip-title">Feature Under Development</h1>
          <p className="wip-subtitle">We're actively working on this feature to bring you the best experience. Check back soon!</p>

          <div 
            className="status-box transition-all duration-500"
            style={{
              background: isDark ? 'rgba(20, 30, 80, 0.25)' : 'rgba(0, 82, 204, 0.06)',
              border: `1.5px solid ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 82, 204, 0.2)'}`,
              boxShadow: isDark ? '0 4px 20px rgba(0, 102, 255, 0.1)' : '0 4px 20px rgba(0, 82, 204, 0.05)',
            }}>
            <div 
              className="status-label transition-colors duration-500"
              style={{
                color: isDark ? '#0066ff' : '#0052cc',
              }}>
              What's Happening
            </div>
            <div className="status-message">Our team is building something great. This feature will be available in an upcoming release.</div>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div 
                className="timeline-dot transition-all duration-500"
                style={{
                  background: isDark
                    ? 'linear-gradient(135deg, #0066ff 0%, #00d9ff 100%)'
                    : 'linear-gradient(135deg, #0052cc 0%, #0099bb 100%)',
                }}>
              </div>
              <div className="timeline-content">
                <div className="timeline-title">Design Phase</div>
                <div className="timeline-desc">Creating the optimal user experience</div>
              </div>
            </div>
            <div className="timeline-item">
              <div 
                className="timeline-dot transition-all duration-500"
                style={{
                  background: isDark
                    ? 'linear-gradient(135deg, #0066ff 0%, #00d9ff 100%)'
                    : 'linear-gradient(135deg, #0052cc 0%, #0099bb 100%)',
                }}>
              </div>
              <div className="timeline-content">
                <div className="timeline-title">Development</div>
                <div className="timeline-desc">Building robust and scalable solutions</div>
              </div>
            </div>
            <div className="timeline-item">
              <div 
                className="timeline-dot transition-all duration-500"
                style={{
                  background: isDark
                    ? 'linear-gradient(135deg, #0066ff 0%, #00d9ff 100%)'
                    : 'linear-gradient(135deg, #0052cc 0%, #0099bb 100%)',
                }}>
              </div>
              <div className="timeline-content">
                <div className="timeline-title">Testing & Launch</div>
                <div className="timeline-desc">Ensuring quality before public release</div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <p 
              className="text-sm mb-6 transition-colors duration-500"
              style={{ color: 'var(--text-muted)' }}>
              Stay tuned for updates
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a 
                href="/" 
                className="px-6 py-3 font-mono text-xs tracking-widest uppercase transition-all rounded duration-500"
                style={{
                  color: isDark ? '#00d9ff' : '#0099bb',
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  borderColor: isDark ? '#00d9ff' : '#0099bb',
                  backgroundColor: isDark ? 'rgba(0, 217, 255, 0.05)' : 'rgba(0, 153, 187, 0.05)',
                }}>
                Back to Home
              </a>
              <a 
                href="/#how" 
                className="px-6 py-3 font-mono text-xs tracking-widest uppercase rounded transition-all duration-500"
                style={{
                  background: isDark
                    ? 'linear-gradient(to right, #0066ff, #00d9ff)'
                    : 'linear-gradient(to right, #0052cc, #0099bb)',
                  color: '#ffffff',
                }}>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
