'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function WipPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Navigation />
      <div className="relative min-h-screen bg-gradient-to-b from-black via-blue-950 to-black pt-24 pb-16 px-6">
        <style dangerouslySetInnerHTML={{ __html: `
          .wip-badge {
            font-family: "Space Mono", monospace;
            font-size: 0.75rem;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: #00d9ff;
            display: inline-block;
            padding: 8px 16px;
            background: rgba(0, 217, 255, 0.1);
            border: 1.5px solid rgba(0, 217, 255, 0.3);
            border-radius: 4px;
            margin-bottom: 28px;
          }

          .wip-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 700;
            line-height: 1.1;
            letter-spacing: -0.03em;
            color: #ffffff;
            margin-bottom: 24px;
          }

          .wip-subtitle {
            font-size: 1.1rem;
            font-weight: 300;
            line-height: 1.7;
            color: #b0b8c8;
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
            background: rgba(20, 30, 80, 0.25);
            border: 1.5px solid rgba(255, 255, 255, 0.15);
            border-radius: 12px;
            padding: 36px 32px;
            margin-bottom: 48px;
            backdrop-filter: blur(20px);
            box-shadow: 0 4px 20px rgba(0, 102, 255, 0.1);
          }

          .status-label {
            font-family: "Space Mono", monospace;
            font-size: 0.68rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #0066ff;
            margin-bottom: 12px;
          }

          .status-message {
            font-size: 1rem;
            color: #ffffff;
            line-height: 1.6;
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
            background: linear-gradient(135deg, #0066ff 0%, #00d9ff 100%);
            border-radius: 50%;
            margin-top: 6px;
            flex-shrink: 0;
          }

          .timeline-content {
            flex: 1;
            padding-bottom: 24px;
            border-left: 2px solid rgba(0, 217, 255, 0.3);
            padding-left: 24px;
            margin-left: -14px;
          }

          .timeline-content:last-child {
            border-left: none;
          }

          .timeline-title {
            font-family: "Space Mono", monospace;
            font-size: 0.85rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #00d9ff;
            margin-bottom: 8px;
          }

          .timeline-desc {
            font-size: 0.95rem;
            color: #b0b8c8;
            line-height: 1.5;
          }
        ` }} />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="wip-badge">Work In Progress</div>
          <h1 className="wip-title">Feature Under Development</h1>
          <p className="wip-subtitle">We're actively working on this feature to bring you the best experience. Check back soon!</p>

          <div className="status-box">
            <div className="status-label">What's Happening</div>
            <div className="status-message">Our team is building something great. This feature will be available in an upcoming release.</div>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-title">Design Phase</div>
                <div className="timeline-desc">Creating the optimal user experience</div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-title">Development</div>
                <div className="timeline-desc">Building robust and scalable solutions</div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-title">Testing & Launch</div>
                <div className="timeline-desc">Ensuring quality before public release</div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-gray-400 text-sm mb-6">Stay tuned for updates</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/" className="px-6 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-mono text-xs tracking-widest uppercase hover:bg-cyan-400 hover:bg-opacity-5 transition-all rounded">
                Back to Home
              </Link>
              <Link href="/#how" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-black font-mono text-xs tracking-widest uppercase rounded hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
