'use client';

import { useLayoutEffect, useRef, type ReactNode } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

export default function ScrollParallax({
  speed = 0.5,
  className,
  children,
}: {
  speed?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;

    const offset = 60 * speed;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: offset },
        {
          y: -offset,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
