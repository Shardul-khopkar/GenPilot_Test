'use client';

import React, { useEffect, useRef, useState } from 'react';

interface DnaSVGProps {
  className?: string;
}

const DnaSVG: React.FC<DnaSVGProps> = ({ className = '' }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set up Intersection Observer to pause animation when off-screen
    const container = containerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const ns = 'http://www.w3.org/2000/svg';
    const CY = 370, AMP = 50, FREQ = (Math.PI * 2) / 600;
    const RUNGS = 16, STEP = 1200 / RUNGS;
    const POINTS = 120;

    const rungColors = ['#00ff8c', '#00e5ff'];

    const strand1Y = (x: number, t: number) => CY - AMP * Math.sin(FREQ * x + t);
    const strand2Y = (x: number, t: number) => CY + AMP * Math.sin(FREQ * x + t);

    const buildPath = (fn: (x: number, t: number) => number, t: number) => {
      let d = '';
      for (let i = 0; i <= POINTS; i++) {
        const x = (i / POINTS) * 1200;
        const y = fn(x, t);
        d += i === 0 ? `M${x},${y}` : ` L${x},${y}`;
      }
      return d;
    };

    // Create elements
    const g = document.createElementNS(ns, 'g');
    svg.appendChild(g);

    const makePath = (stroke: string) => {
      const p = document.createElementNS(ns, 'path');
      p.setAttribute('stroke', stroke);
      p.setAttribute('stroke-width', '2.5');
      p.setAttribute('fill', 'none');
      p.setAttribute('opacity', '0.9');
      g.appendChild(p);
      return p;
    };

    const path1 = makePath('#006600');
    const path2 = makePath('#004d00');

    const rungLines: SVGLineElement[] = [];
    const dots1: SVGCircleElement[] = [];
    const dots2: SVGCircleElement[] = [];

    for (let i = 0; i <= RUNGS; i++) {
      const line = document.createElementNS(ns, 'line');
      line.setAttribute('stroke-width', '1.5');
      line.setAttribute('opacity', '0.85');
      line.setAttribute('stroke', rungColors[i % 2]);
      g.appendChild(line);
      rungLines.push(line);

      [dots1, dots2].forEach((arr) => {
        const c = document.createElementNS(ns, 'circle');
        c.setAttribute('r', '3.5');
        c.setAttribute('fill', '#00ff8c');
        c.setAttribute('opacity', '0.6');
        g.appendChild(c);
        arr.push(c);
      });
    }

    let lastTs = 0;

    const animate = (ts: number) => {
      // Only animate if visible, skip frames when paused
      if (!isVisible) {
        lastTs = ts;
        animRef.current = requestAnimationFrame(animate);
        return;
      }

      const t = ts * 0.001;
      path1.setAttribute('d', buildPath(strand1Y, t));
      path2.setAttribute('d', buildPath(strand2Y, t));

      for (let i = 0; i <= RUNGS; i++) {
        const x = i * STEP + STEP / 2;
        const y1 = strand1Y(x, t);
        const y2 = strand2Y(x, t);

        rungLines[i].setAttribute('x1', String(x));
        rungLines[i].setAttribute('y1', String(y1));
        rungLines[i].setAttribute('x2', String(x));
        rungLines[i].setAttribute('y2', String(y2));

        dots1[i].setAttribute('cx', String(x));
        dots1[i].setAttribute('cy', String(y1));
        dots2[i].setAttribute('cx', String(x));
        dots2[i].setAttribute('cy', String(y2));
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      svg.removeChild(g);
    };
  }, [isVisible]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      <svg
        ref={svgRef}
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: '100%', height: '100%', opacity: 0.25 }}
      />
    </div>
  );
};

export default DnaSVG;
