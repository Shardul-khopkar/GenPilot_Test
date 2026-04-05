'use client';

import React from 'react';
import { useAppStore } from '@/lib/store';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function RequestAccessPage() {
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
          }

          .wip-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 700;
            line-height: 1.1;
            letter-spacing: -0.03em;
            margin-bottom: 24px;
          }

          .wip-subtitle {
            font-size: 1.1rem;
            font-weight: 300;
            line-height: 1.7;
            margin-bottom: 48px;
            max-width: 600px;
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
          }

          .status-label {
            font-family: "Space Mono", monospace;
            font-size: 0.68rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            margin-bottom: 12px;
          }

          .status-message {
            font-size: 1rem;
            line-height: 1.6;
          }

          .features-list {
            text-align: left;
            display: inline-block;
            margin-top: 32px;
          }

          .feature-item {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 16px;
            font-size: 0.95rem;
          }

          .feature-item:before {
            content: "✓";
            font-weight: bold;
            font-size: 1.2rem;
            flex-shrink: 0;
            color: inherit;
          }

          .btn-access {
            padding: 12px 32px;
            border-radius: 8px;
            font-family: "Space Mono", monospace;
            font-size: 0.75rem;
            font-weight: 600;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            position: relative;
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .btn-access:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(0, 217, 255, 0.2);
          }

          .btn-access:active {
            transform: translateY(0);
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
          <h1 
            className="wip-title transition-colors duration-500"
            style={{ color: 'var(--text)' }}>
            Early Access Program
          </h1>
          <p 
            className="wip-subtitle transition-colors duration-500"
            style={{ color: 'var(--text-muted)' }}>
            We're building the future of genetic engineering IDEs. Join our early access program to be among the first to experience GenPilot.
          </p>

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
              Current Status
            </div>
            <div 
              className="status-message transition-colors duration-500"
              style={{ color: 'var(--text)' }}>
              Developing comprehensive sequence analysis and CRISPR prediction tools
            </div>
          </div>

          <div 
            className="features-list transition-colors duration-500"
            style={{ color: 'var(--text-muted)' }}>
            <div 
              className="feature-item transition-colors duration-500"
              style={{ color: 'var(--text-muted)' }}>
              <span style={{ color: isDark ? '#00d9ff' : '#0099bb' }}>Access to beta features before public release</span>
            </div>
            <div 
              className="feature-item transition-colors duration-500"
              style={{ color: 'var(--text-muted)' }}>
              <span style={{ color: isDark ? '#00d9ff' : '#0099bb' }}>Direct feedback channel with our development team</span>
            </div>
            <div 
              className="feature-item transition-colors duration-500"
              style={{ color: 'var(--text-muted)' }}>
              <span style={{ color: isDark ? '#00d9ff' : '#0099bb' }}>Special pricing for early adopters</span>
            </div>
            <div 
              className="feature-item transition-colors duration-500"
              style={{ color: 'var(--text-muted)' }}>
              <span style={{ color: isDark ? '#00d9ff' : '#0099bb' }}>Priority support and onboarding</span>
            </div>
          </div>

          <div className="mt-12">
            <p 
              className="text-sm mb-6 transition-colors duration-500"
              style={{ color: 'var(--text-muted)' }}>
              Coming soon: Early access sign-up form
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a 
                href="/" 
                className="btn-access transition-all duration-300"
                style={{
                  color: isDark ? '#00d9ff' : '#0099bb',
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  borderColor: isDark ? '#00d9ff' : '#0099bb',
                  backgroundColor: isDark ? 'rgba(0, 217, 255, 0.05)' : 'rgba(0, 153, 187, 0.05)',
                }}>
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
