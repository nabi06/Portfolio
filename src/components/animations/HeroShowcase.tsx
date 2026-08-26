'use client';

import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { FiArrowRight, FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import FallingBubbles from '@/components/animations/FallingBubbles';
import { profile, RESUME_PDF_PATH, summary } from '@/app/resources/resumeData';

export default function HeroShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const phase1Ref = useRef<HTMLDivElement>(null);
  const phase2Ref = useRef<HTMLDivElement>(null);
  const overlayImgRef = useRef<HTMLDivElement>(null);
  const statsPhase1Ref = useRef<HTMLDivElement>(null);
  const statsPhase2Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) {
      gsap.set(introRef.current, { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        introRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
      );

      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        gsap.set(phase2Ref.current, { opacity: 0, y: 24 });
        gsap.set(statsPhase2Ref.current, { opacity: 0, y: 16 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=100%',
            scrub: 1,
            pin: true,
          },
        });

        tl.to(phase1Ref.current, { opacity: 0, y: -24 }, 0.3)
          .to(overlayImgRef.current, { opacity: 0 }, 0.3)
          .to(statsPhase1Ref.current, { opacity: 0, y: -16 }, 0.3)
          .to(phase2Ref.current, { opacity: 1, y: 0 }, 0.45)
          .to(statsPhase2Ref.current, { opacity: 1, y: 0 }, 0.5);

        return () => tl.scrollTrigger?.kill();
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-black text-white">
      <FallingBubbles variant="onDark" count={30} />
      <div ref={introRef} className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-28 opacity-0 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#06c167]" />
            Open to full-time roles · {profile.location}
          </div>

          <div className="grid">
            <div ref={phase1Ref} className="[grid-area:1/1]">
              <h1 className="text-6xl font-extrabold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
                {profile.name}
              </h1>
              <p className="mt-6 max-w-xl text-2xl font-medium leading-snug text-white/80 md:text-3xl">
                {profile.title} building full-stack apps, AI products, and distributed systems.
              </p>
            </div>

            <div ref={phase2Ref} className="opacity-0 [grid-area:1/1]">
              <h1 className="text-6xl font-extrabold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
                Not just code.
                <br />
                Systems that hold up.
              </h1>
              <p className="mt-6 max-w-xl text-2xl font-medium leading-snug text-white/80 md:text-3xl">
                RAG pipelines, Kafka microservices, and cloud-native APIs — 92% AI accuracy, 72% faster p95 latency.
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/50 md:text-base">
            {summary}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-black transition hover:bg-white/90"
            >
              View my work
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={RESUME_PDF_PATH}
              download
              className="flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-base font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              Download resume
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-white/70">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-white" aria-label="GitHub">
              <FiGithub size={22} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-white" aria-label="LinkedIn">
              <FiLinkedin size={22} />
            </a>
            <a href={profile.mailto} className="transition hover:text-white" aria-label="Email">
              <FiMail size={22} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
          <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/15">
            <Image
              src="/images/avatar.jpg"
              alt={profile.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 420px"
            />
            <div ref={overlayImgRef} className="absolute inset-0">
              <Image
                src="/images/niyaz%20passport.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>

          <div ref={statsPhase1Ref} className="pointer-events-none absolute inset-0">
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-black/10 bg-white px-5 py-4 text-black shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-wide text-black/50">Experience</p>
              <p className="text-2xl font-extrabold">3+ years</p>
            </div>
            <div className="absolute -right-4 top-6 rounded-2xl border border-black/10 bg-white px-5 py-4 text-black shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-wide text-black/50">Focus</p>
              <p className="text-sm font-bold">Distributed Systems &amp; AI</p>
            </div>
          </div>

          <div ref={statsPhase2Ref} className="pointer-events-none absolute inset-0 opacity-0">
            <div className="absolute -right-4 top-6 rounded-2xl border border-black/10 bg-white px-5 py-4 text-black shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-wide text-black/50">AI accuracy</p>
              <p className="text-sm font-bold">71% → 92%</p>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-black/10 bg-white px-5 py-4 text-black shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-wide text-black/50">p95 latency</p>
              <p className="text-sm font-bold">3.6s → 850ms</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/60 transition hover:text-white"
      >
        <FiArrowDown size={22} />
      </a>
    </section>
  );
}
