'use client';

import { useLayoutEffect, useRef } from 'react';
import SparkleField from '@/components/animations/SparkleField';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

type Stat = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

const STATS: Stat[] = [
  { value: 3, suffix: '+', label: 'Years of production experience' },
  { value: 30, suffix: '+', label: 'Production API endpoints shipped' },
  { value: 15, suffix: 'M+', label: 'Records processed in production' },
  { value: 46, suffix: '%', label: 'Reporting latency cut at Presidio' },
];

function formatValue(value: number, decimals: number) {
  return decimals > 0
    ? value.toFixed(decimals)
    : Math.round(value).toLocaleString();
}

export default function StatCounter() {
  const sectionRef = useRef<HTMLElement>(null);
  const valueRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) {
      valueRefs.current.forEach((el, i) => {
        if (el) el.textContent = formatValue(STATS[i].value, STATS[i].decimals ?? 0);
      });
      return;
    }

    const ctx = gsap.context(() => {
      valueRefs.current.forEach((el, i) => {
        if (!el) return;
        const stat = STATS[i];
        const proxy = { val: 0 };

        gsap.to(proxy, {
          val: stat.value,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            el.textContent = formatValue(proxy.val, stat.decimals ?? 0);
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-black px-6 py-24 text-white">
      <SparkleField count={30} />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
        {STATS.map((stat, i) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl font-extrabold tracking-tight md:text-5xl">
              {stat.prefix}
              <span
                ref={(el) => {
                  valueRefs.current[i] = el;
                }}
              >
                0
              </span>
              {stat.suffix}
            </p>
            <p className="mt-3 text-sm text-white/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
