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
          transition: opacity 0.6s ease-out, visibility 0.6s ease-out;
          opacity: 1;
          visibility: visible;
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
          animation: fadeIn 0.5s ease-out;
        }

        .base-pair {
          position: relative;
          width: 80px;
          height: 2px;
        }

        .loader-dot {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          animation: move-dna 2s ease-in-out infinite;
          box-shadow: 0 0 12px currentColor;
        }

        .loader-dot.dot--1 { 
          background-color: #00ff8c; 
          color: #00ff8c; 
          animation-delay: calc(var(--i) * -0.15s); 
        }
        .loader-dot.dot--2 { 
          background-color: #00d9ff; 
          color: #00d9ff; 
          animation-delay: calc(var(--i) * -0.15s - 1s); 
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
          animation: pulse-text 1.5s ease-in-out infinite;
        }

        @keyframes pulse-text {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
