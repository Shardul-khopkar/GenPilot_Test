'use client';

import React from 'react';
import { useAppStore } from '@/lib/store';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ToolsPage() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';

  const tools = [
    {
      id: 'tindr',
      title: 'Tindr',
      description: 'Base pair location finding for CRISPR research',
      href: '/tools/tindr',
      status: 'In Development',
    },
    {
      id: 'hgtranslate',
      title: 'HGtranslate',
      description: 'Genome build conversion between hg19 and hg38',
      href: '/tools/hgtranslate',
      status: 'In Development',
    },
    {
      id: 'success-predictor',
      title: 'Success Predictor',
      description: 'Analyze and predict CRISPR editing success rates',
      href: '/tools/success-predictor',
      status: 'In Development',
    },
  ];

  return (
    <>
      <Navigation />
      <div
        className="relative min-h-screen pt-24 pb-16 px-6 transition-colors duration-500"
        style={{
          background: 'var(--bg-gradient)',
        }}>
        <style dangerouslySetInnerHTML={{ __html: `
          .tools-header {
            text-align: center;
            margin-bottom: 64px;
          }

          .tools-badge {
            font-family: "Space Mono", monospace;
            font-size: 0.75rem;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            display: inline-block;
            padding: 8px 16px;
            border-radius: 4px;
            margin-bottom: 24px;
          }

          .tools-badge-light {
            background: var(--accent-light-blue);
            color: var(--primary-db);
          }

          .tools-badge-dark {
            background: rgba(0, 217, 255, 0.15);
            color: var(--accent-cyan);
          }

          .tools-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 700;
            line-height: 1.1;
            letter-spacing: -0.03em;
            margin-bottom: 16px;
          }

          .tools-subtitle {
            font-size: 1.1rem;
            font-weight: 300;
            line-height: 1.7;
            max-width: 700px;
            margin: 0 auto;
            opacity: 0.85;
          }

          .tools-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
            max-width: 1200px;
            margin: 0 auto;
          }

          .tool-card {
            border-radius: 12px;
            padding: 32px 28px;
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            cursor: pointer;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            text-decoration: none;
            color: inherit;
          }

          .tool-card-light {
            background: var(--glass-bg);
            border: 1.5px solid var(--glass-border);
            box-shadow: 0 4px 20px rgba(0, 102, 255, 0.08);
          }

          .tool-card-dark {
            background: rgba(20, 30, 80, 0.25);
            border: 1.5px solid rgba(255, 255, 255, 0.15);
            box-shadow: 0 4px 20px rgba(0, 102, 255, 0.15);
          }

          .tool-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 40px rgba(0, 217, 255, 0.2);
          }

          .tool-card-title {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 12px;
            letter-spacing: -0.01em;
          }

          .tool-card-description {
            font-size: 0.95rem;
            font-weight: 300;
            line-height: 1.6;
            opacity: 0.85;
            flex-grow: 1;
            margin-bottom: 16px;
          }

          .tool-status {
            font-family: "Space Mono", monospace;
            font-size: 0.65rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            display: inline-block;
            padding: 6px 12px;
            border-radius: 4px;
            margin-bottom: 12px;
            background: rgba(0, 217, 255, 0.15);
            color: var(--accent-cyan);
          }

          .tool-card-link {
            font-family: "Space Mono", monospace;
            font-size: 0.7rem;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--accent-cyan);
            transition: gap 0.3s ease;
          }

          .tool-card:hover .tool-card-link {
            gap: 12px;
          }

          .tool-card-link::after {
            content: '→';
            transition: transform 0.3s ease;
          }

          .tool-card:hover .tool-card-link::after {
            transform: translateX(4px);
          }

          @media (max-width: 768px) {
            .tools-grid {
              grid-template-columns: 1fr;
            }

            .tools-title {
              font-size: 2rem;
            }
          }
        ` }} />

        <div className="max-w-6xl mx-auto">
          <div className="tools-header">
            <div 
              className={`tools-badge ${isDark ? 'tools-badge-dark' : 'tools-badge-light'}`}
              style={{
                background: isDark ? 'rgba(0, 217, 255, 0.15)' : 'var(--accent-light-blue)',
                color: isDark ? 'var(--accent-cyan)' : 'var(--primary-db)',
              }}>
              Advanced Tools
            </div>
            <h1 className="tools-title">
              CRISPR Research Tools
            </h1>
            <p className="tools-subtitle">
              Three powerful tools for CRISPR researchers: Tindr for base pair location finding, 
              HGtranslate for genome build conversion, and Success Predictor for editing analysis.
            </p>
          </div>

          <div className="tools-grid">
            {tools.map((tool) => (
              <Link
                key={tool.id}
                href={tool.href}
                className={`tool-card ${isDark ? 'tool-card-dark' : 'tool-card-light'}`}
                style={{
                  background: isDark ? 'rgba(20, 30, 80, 0.25)' : 'var(--glass-bg)',
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.15)' : 'var(--glass-border)',
                }}>
                <h3 className="tool-card-title">{tool.title}</h3>
                <p className="tool-card-description">{tool.description}</p>
                <div className="tool-status">{tool.status}</div>
                <span className="tool-card-link">Try Tool</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
