'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

const ORBS = [
  { size: 320, left: '8%', top: '12%', color: 'rgba(6,193,103,0.14)' },
  { size: 240, left: '72%', top: '18%', color: 'rgba(0,0,0,0.06)' },
  { size: 180, left: '55%', top: '68%', color: 'rgba(6,193,103,0.10)' },
  { size: 140, left: '18%', top: '72%', color: 'rgba(0,0,0,0.05)' },
];

export default function ParallaxOrbs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const container = containerRef.current;
    const trigger = container?.parentElement;
    if (!container || !trigger) return;

    const ctx = gsap.context(() => {
      orbRefs.current.forEach((orb, i) => {
        if (!orb) return;
        gsap.to(orb, {
          yPercent: (i + 1) * -10,
          ease: 'none',
          scrollTrigger: {
            trigger,
            scrub: 0.6,
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {ORBS.map((orb, index) => (
        <div
          key={index}
          ref={(el) => {
            orbRefs.current[index] = el;
          }}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.left,
            top: orb.top,
            background: orb.color,
          }}
        />
      ))}
    </div>
  );
}
