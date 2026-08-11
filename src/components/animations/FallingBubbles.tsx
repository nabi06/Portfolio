'use client';

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

type Bubble = {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  opacity: number;
};

function createBubble(id: number): Bubble {
  return {
    id,
    left: Math.random() * 100,
    size: Math.random() * 10 + 4,
    delay: Math.random() * 14,
    duration: 10 + Math.random() * 10,
    drift: Math.random() * 60 - 30,
    opacity: Math.random() * 0.35 + 0.15,
  };
}

export default function FallingBubbles({
  variant = 'onDark',
  count = 26,
}: {
  variant?: 'onDark' | 'onLight';
  count?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(800);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    setBubbles(Array.from({ length: count }, (_, i) => createBubble(i)));
  }, [count]);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => setHeight(el.offsetHeight);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const bubbleColor = variant === 'onDark' ? 'bg-white' : 'bg-black';

  const items = useMemo(
    () =>
      bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`bubble-fall absolute top-0 rounded-full ${bubbleColor}`}
          style={{
            left: `${bubble.left}%`,
            width: bubble.size,
            height: bubble.size,
            opacity: bubble.opacity,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
            // @ts-expect-error -- custom properties aren't in the CSSProperties type
            '--fall-distance': `${height + 40}px`,
            '--fall-drift': `${bubble.drift}px`,
          }}
        />
      )),
    [bubbles, bubbleColor, height],
  );

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {items}
    </div>
  );
}
