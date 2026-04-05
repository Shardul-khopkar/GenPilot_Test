'use client';

import React, { useEffect, useState } from 'react';

const Loader: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <style>{`
        /* DNA LOADING ANIMATION */
        #loader {
          position: fixed;
          inset: 0;
          background: radial-gradient(ellipse at 20% 50%, rgba(0,40,80,0.9) 0%, rgba(5,10,20,0.95) 40%, #000000 100%);
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), visibility 0.8s ease-out;
          opacity: 1;
          visibility: visible;
        }

        html.dark #loader {
          background: radial-gradient(ellipse at 20% 50%, rgba(0,40,80,0.9) 0%, rgba(5,10,20,0.95) 40%, #000000 100%);
        }

        html:not(.dark) #loader {
          background: radial-gradient(ellipse at 20% 50%, rgba(244,247,251,0.95) 0%, rgba(240,246,255,0.9) 40%, #f4f7fb 100%);
        }

        #loader.loaded {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .dna-loader-container {
          display: flex;
          flex-direction: column;
          gap: 14px;
          animation: fadeIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .base-pair {
          position: relative;
          width: 80px;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.3), transparent);
        }

        .loader-dot {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          animation: move-dna 2s cubic-bezier(0.42, 0, 0.58, 1) infinite;
          box-shadow: 0 0 12px currentColor, 0 0 24px currentColor;
          filter: drop-shadow(0 0 8px currentColor);
        }

        .loader-dot.dot--1 { 
          background-color: #00ff8c;
          color: #00ff8c;
          animation-delay: calc(var(--i) * -0.15s); 
        }

        html.dark .loader-dot.dot--1 {
          background-color: #00ff8c;
          color: #00ff8c;
        }

        html:not(.dark) .loader-dot.dot--1 {
          background-color: #00a86b;
          color: #00a86b;
        }

        .loader-dot.dot--2 { 
          background-color: #00d9ff;
          color: #00d9ff;
          animation-delay: calc(var(--i) * -0.15s - 1s); 
        }

        html.dark .loader-dot.dot--2 {
          background-color: #00d9ff;
          color: #00d9ff;
        }

        html:not(.dark) .loader-dot.dot--2 {
          background-color: #0099bb;
          color: #0099bb;
        }

        html.dark .loader-text {
          color: #00ff8c;
        }

        html:not(.dark) .loader-text {
          color: #00a86b;
        }

        @keyframes move-dna {
          0% { left: 0%; transform: translate(-50%, -50%) scale(0.6); opacity: 0.4; z-index: 0; }
          25% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; z-index: 10; }
          50% { left: 100%; transform: translate(-50%, -50%) scale(0.6); opacity: 0.4; z-index: 0; }
          75% { transform: translate(-50%, -50%) scale(0.4); opacity: 0.2; z-index: -10; }
          100% { left: 0%; transform: translate(-50%, -50%) scale(0.6); opacity: 0.4; z-index: 0; }
        }

        .loader-text {
          color: #00ff8c;
          font-family: 'Space Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.3em;
          margin-top: 30px;
          animation: pulse-text-smooth 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse-text-smooth {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        /* Smooth page transition out */
        #loader.loaded .loader-text {
          animation: fadeOut 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
      `}</style>

      <div id="loader" className={isLoaded ? 'loaded' : ''}>
        <div className="dna-loader-container">
          <div className="base-pair" style={{ "--i": 0 } as React.CSSProperties}>
            <div className="loader-dot dot--1"></div>
            <div className="loader-dot dot--2"></div>
          </div>
          <div className="base-pair" style={{ "--i": 1 } as React.CSSProperties}>
            <div className="loader-dot dot--1"></div>
            <div className="loader-dot dot--2"></div>
          </div>
          <div className="base-pair" style={{ "--i": 2 } as React.CSSProperties}>
            <div className="loader-dot dot--1"></div>
            <div className="loader-dot dot--2"></div>
          </div>
          <div className="base-pair" style={{ "--i": 3 } as React.CSSProperties}>
            <div className="loader-dot dot--1"></div>
            <div className="loader-dot dot--2"></div>
          </div>
          <div className="base-pair" style={{ "--i": 4 } as React.CSSProperties}>
            <div className="loader-dot dot--1"></div>
            <div className="loader-dot dot--2"></div>
          </div>
          <div className="base-pair" style={{ "--i": 5 } as React.CSSProperties}>
            <div className="loader-dot dot--1"></div>
            <div className="loader-dot dot--2"></div>
          </div>
          <div className="base-pair" style={{ "--i": 6 } as React.CSSProperties}>
            <div className="loader-dot dot--1"></div>
            <div className="loader-dot dot--2"></div>
          </div>
          <div className="base-pair" style={{ "--i": 7 } as React.CSSProperties}>
            <div className="loader-dot dot--1"></div>
            <div className="loader-dot dot--2"></div>
          </div>
        </div>
        <div className="loader-text">INITIALIZING GenPilot</div>
      </div>
    </>
  );
};

export default Loader;
