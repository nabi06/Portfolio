'use client';

import { useEffect, useMemo, useState } from 'react';

type Sparkle = {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  type: 'dot' | 'star';
};

function createSparkle(id: number): Sparkle {
  return {
    id,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() < 0.3 ? Math.random() * 6 + 4 : Math.random() * 4 + 2,
    delay: Math.random() * 3,
    duration: 2.5 + Math.random() * 2,
    type: Math.random() < 0.35 ? 'star' : 'dot',
  };
}

export default function SparkleField({ count = 24 }: { count?: number }) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    setSparkles(Array.from({ length: count }, (_, i) => createSparkle(i)));
  }, [count]);

  const stars = useMemo(
    () =>
      sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle pointer-events-none"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            width: sparkle.size,
            height: sparkle.size,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
          }}
        >
          {sparkle.type === 'star' ? (
            <svg viewBox="0 0 24 24" className="h-full w-full text-white/90" fill="currentColor">
              <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.7-6.3 4.7 2.3-7-6-4.6h7.6z" />
            </svg>
          ) : (
            <div className="h-full w-full rounded-full bg-white" />
          )}
        </div>
      )),
    [sparkles],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {stars}
    </div>
  );
}
