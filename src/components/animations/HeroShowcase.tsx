'use client';

import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { FiArrowRight, FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import FallingBubbles from '@/components/animations/FallingBubbles';

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
        {/* Left: statement */}
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#06c167]" />
            Open to full-time roles
          </div>

          {/* grid-stacking both phases in the same cell means the wrapper's
              height auto-sizes to the taller of the two, instead of phase1's
              height clipping/overlapping phase2's content underneath it */}
          <div className="grid">
            <div ref={phase1Ref} className="[grid-area:1/1]">
              <h1 className="text-6xl font-extrabold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
                Niyaz Nabi
              </h1>
              <p className="mt-6 max-w-xl text-2xl font-medium leading-snug text-white/80 md:text-3xl">
                Full-Stack Engineer shipping production AI systems used at enterprise scale.
              </p>
            </div>

            <div ref={phase2Ref} className="opacity-0 [grid-area:1/1]">
              <h1 className="text-6xl font-extrabold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
                Not just code.
                <br />
                Systems that hold up.
              </h1>
              <p className="mt-6 max-w-xl text-2xl font-medium leading-snug text-white/80 md:text-3xl">
                RAG pipelines, enterprise data platforms, and APIs running in production — processing 15M+ records at scale.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-black transition hover:bg-white/90"
            >
              View my work
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/images/resume.pdf"
              download
              className="flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-base font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              Download resume
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-white/70">
            <a href="https://github.com/nabi06" target="_blank" rel="noopener noreferrer" className="transition hover:text-white" aria-label="GitHub">
              <FiGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/niyaz-nabi-81329b228/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white" aria-label="LinkedIn">
              <FiLinkedin size={22} />
            </a>
            <a href="mailto:niyaznabi6@gmail.com" className="transition hover:text-white" aria-label="Email">
              <FiMail size={22} />
            </a>
          </div>
        </div>

        {/* Right: photo panel */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
          <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/15">
            <Image
              src="/images/avatar.jpg"
              alt="Niyaz Nabi"
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
              <p className="text-sm font-bold">Full Stack &amp; AI Systems</p>
            </div>
          </div>

          <div ref={statsPhase2Ref} className="pointer-events-none absolute inset-0 opacity-0">
            <div className="absolute -right-4 top-6 rounded-2xl border border-black/10 bg-white px-5 py-4 text-black shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-wide text-black/50">Reporting latency</p>
              <p className="text-sm font-bold">2.8s → 1.5s</p>
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
