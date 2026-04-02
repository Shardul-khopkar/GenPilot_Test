'use client';

import React from 'react';
import { useAppStore } from '@/lib/store';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  return (
    <>
      <Navigation />
      <div 
        className="relative min-h-screen pt-24 pb-16 px-6 transition-colors duration-500"
        style={{
          background: isDark
            ? 'linear-gradient(to bottom, #000000, #0a0e27, #000000)'
            : 'linear-gradient(to bottom, #f4f7fb, #e8f0ff, #f4f7fb)',
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
            padding: 28px;
            margin-top: 32px;
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
            font-size: 0.95rem;
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
            Get In Touch
          </h1>
          <p 
            className="wip-subtitle transition-colors duration-500"
            style={{ color: 'var(--text-muted)' }}>
            We'd love to hear from you. Reach out with questions, feedback, or partnership inquiries.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <a 
              href="https://www.solvearn.net/app/company/11268-genpilot/home" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 font-mono text-xs tracking-widest uppercase rounded transition-all duration-500"
              style={{
                background: isDark
                  ? 'linear-gradient(to right, #0066ff, #00d9ff)'
                  : 'linear-gradient(to right, #0052cc, #0099bb)',
                color: '#ffffff',
              }}>
              Visit Our Profile
            </a>
          </div>

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
              Status
            </div>
            <div 
              className="status-message transition-colors duration-500"
              style={{ color: 'var(--text)' }}>
              Our team is working on a comprehensive contact form and support portal. Check back soon!
            </div>
          </div>

          <div className="mt-12">
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
