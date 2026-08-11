'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import HeroShowcase from '@/components/animations/HeroShowcase';
import StatCounter from '@/components/animations/StatCounter';
import ParallaxOrbs from '@/components/animations/ParallaxOrbs';
import FallingBubbles from '@/components/animations/FallingBubbles';
import ScrollParallax from '@/components/animations/ScrollParallax';
import Navigation from '@/components/Navigation';
import ProjectModal from '@/components/ProjectModal';
import ExperienceModal from '@/components/ExperienceModal';

export default function Home({ params }: { params: { locale: string } }) {
  // Modal state
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);

  // Project data for modals
  const projectData: Record<string, any> = {
    'one-chat': {
      title: 'OneChat — Multi-Model AI Chat Platform',
      liveUrl: 'https://1chat.tech',
      stack: ['Next.js', 'TypeScript', 'tRPC', 'PostgreSQL', 'Redis', 'Drizzle ORM', 'Vercel AI SDK', 'Better Auth'],
      story: 'OneChat is a team-based AI chat platform built to end the "five browser tabs" problem of juggling different AI providers. It supports 100+ models across OpenAI, Anthropic, Google, and xAI behind one interface, with role-based access, shared API keys, and BYOK support so teams can collaborate around a single, centralized model access layer instead of scattered individual accounts.',
      highlights: [
        'Engineered parallel multi-model chat streaming — up to 5 AI responses at once across independent conversation threads — for real-time side-by-side model comparison',
        'Implemented global real-time streaming with resumable streams and Redis-powered message replication, achieving sub-100ms latency for response delivery',
        'Built live conversation sharing with synchronized updates across all connected devices',
        'Built on Next.js, tRPC, PostgreSQL (Drizzle ORM), and Redis with Better Auth for role-based team access'
      ]
    },
    cue: {
      title: 'Cue — AI-Powered Task Management System',
      liveUrl: 'https://cuedot.tech',
      stack: ['Next.js', 'TypeScript', 'Vercel AI SDK', 'Groq', 'IndexedDB', 'Clerk Auth'],
      story: 'Cue turns natural language into structured task management, letting an LLM handle the parsing that used to take five manual steps. A multi-model AI architecture routes bulk task processing and date parsing across Claude, Llama, Grok, and Qwen via the Vercel AI SDK, giving the system contextual understanding of time and priority from a single typed command.',
      highlights: [
        'Built intelligent task orchestration that converts natural language into structured operations with contextual time and priority understanding',
        'Integrated a multi-model AI architecture (Claude, Llama, Grok, Qwen) via the Vercel AI SDK for bulk task processing and date parsing',
        'Architected a privacy-first, offline-capable PWA using IndexedDB, eliminating server dependencies while keeping data 100% private',
        'Enabled cross-device sync via JSON export/import with no backend required'
      ]
    }
  };

  // Experience data for modals
  const experienceData: Record<string, any> = {
    presidio: {
      company: 'Presidio USA',
      role: 'Full-Stack Software Engineer',
      duration: 'Dec 2025 – Present',
      location: 'USA',
      description: `At Presidio, I architect and develop full-stack applications end-to-end using Python, FastAPI, React, Next.js, and TypeScript — designing RESTful APIs, reusable UI components and microservices, and PostgreSQL data models for data ingestion, validation, and transformation across enterprise manufacturing environments processing 15M+ records.

A significant part of my role is optimizing PostgreSQL-backed services through schema design, indexing, execution-plan analysis, and query optimization — work that cut reporting latency from 2.8s to 1.5s for business-critical applications.

I engineer scalable data-processing and backend workflows using Databricks, Apache Spark, Apache Airflow, and Delta Lake — integrating ERP systems, REST APIs, and semi-structured data while exposing processed capabilities through FastAPI services consumed by React/Next.js applications.

I also build enterprise AI-powered features using OpenAI APIs, LangChain, LangGraph, MCP, vector databases, and semantic search, integrating RAG capabilities into FastAPI services and Next.js applications to enable intelligent search and knowledge discovery across internal documentation. I support production reliability and scalability through AWS CloudWatch, Prometheus, Grafana, and Kubernetes monitoring across full-stack services supporting 250K+ daily transactions.`,
      achievements: [
        'Architected full-stack apps (Python, FastAPI, React, Next.js, TypeScript) processing 15M+ records across enterprise manufacturing environments',
        'Reduced reporting latency from 2.8s to 1.5s through PostgreSQL schema design, indexing, and query optimization',
        'Engineered Databricks, Apache Spark, Airflow, and Delta Lake workflows integrating ERP systems and REST APIs into FastAPI services',
        'Built enterprise RAG features with OpenAI APIs, LangChain, LangGraph, MCP, and vector databases for internal knowledge discovery',
        'Improved production reliability across services supporting 250K+ daily transactions using CloudWatch, Prometheus, Grafana, and Kubernetes'
      ],
      technologies: ['Python', 'FastAPI', 'React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Databricks', 'Apache Spark', 'Apache Airflow', 'LangChain', 'LangGraph']
    },
    vertocity: {
      company: 'Vertocity',
      role: 'Software Developer – Full Stack',
      duration: 'Jun 2022 – Aug 2024',
      location: 'India',
      description: `Over two years at Vertocity, I shipped two production applications end-to-end — an AI-powered ATS and an AI student companion app — using React, Next.js, Tailwind CSS, tRPC, and Prisma, owning each one from design through deployment.

I integrated a conversational assistant using LangChain and the Vercel AI SDK with streaming responses, enabling natural-language querying of recruitment data, report generation, and contextual insights for recruiting teams.

I engineered a document-processing pipeline using Upstash Workflow, S3, and Azure AI Document Intelligence for multi-language OCR, paired with a Cohere/Qdrant retrieval system for content generation and document chat.

I refined application performance through React techniques including code splitting, lazy loading, tree shaking, and render optimization, cutting initial load time to under 800ms. I also built and maintained RESTful backend services with Node.js/Express and PostgreSQL, writing unit/integration test suites (Jest) and CI/CD pipelines (GitHub Actions, Docker) within Agile/Scrum sprints to ensure reliable, high-quality releases.`,
      achievements: [
        'Shipped two production applications end-to-end (AI-powered ATS + AI student companion app) using React, Next.js, tRPC, and Prisma',
        'Integrated a LangChain + Vercel AI SDK conversational assistant with streaming responses for natural-language querying and report generation',
        'Engineered a multi-language OCR document pipeline (Upstash Workflow, S3, Azure AI Document Intelligence) with Cohere/Qdrant retrieval',
        'Reduced initial load time to under 800ms through code splitting, lazy loading, tree shaking, and render optimization',
        'Built RESTful services (Node.js/Express, PostgreSQL) with Jest test suites and GitHub Actions/Docker CI/CD pipelines'
      ],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'tRPC', 'Prisma', 'LangChain', 'Node.js', 'Express.js', 'PostgreSQL', 'Docker']
    }
  };

  const experienceList = [
    { id: 'presidio', company: 'Presidio USA', role: 'Full-Stack Software Engineer', duration: 'Dec 2025 – Present', location: 'USA', current: true, summary: 'I architect full-stack applications end-to-end — Python, FastAPI, React, Next.js, TypeScript — for enterprise manufacturing environments processing 15M+ records. I cut reporting latency from 2.8s to 1.5s through PostgreSQL query and schema optimization, and built enterprise RAG features (LangChain, LangGraph, MCP) that power intelligent search across internal documentation.', tags: ['FastAPI', 'React', 'Next.js', 'PostgreSQL', 'LangChain', 'Databricks'] },
    { id: 'vertocity', company: 'Vertocity', role: 'Software Developer – Full Stack', duration: 'Jun 2022 – Aug 2024', location: 'India', current: false, summary: 'I shipped two production applications end-to-end — an AI-powered ATS and an AI student companion app — using React, Next.js, tRPC, and Prisma. I built a LangChain-powered conversational assistant with streaming responses for natural-language querying of recruitment data, and cut initial load time to under 800ms through React performance work.', tags: ['React', 'Next.js', 'tRPC', 'LangChain', 'Node.js'] },
  ];

  const skillGroups = [
    { title: 'Languages', skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'HTML5', 'CSS3'] },
    { title: 'Backend & APIs', skills: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'JWT/OAuth2', 'WebSockets', 'Async Programming'] },
    { title: 'Frontend', skills: ['React', 'Next.js', 'Redux', 'Tailwind CSS'] },
    { title: 'Databases', skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
    { title: 'Applied AI & Data', skills: ['LangChain', 'LangGraph', 'MCP', 'RAG', 'Vector Databases', 'LLM APIs (OpenAI, Anthropic)'] },
    { title: 'Data Engineering', skills: ['Databricks', 'Apache Spark', 'Apache Airflow', 'Delta Lake', 'ETL/ELT'] },
    { title: 'Cloud & DevOps', skills: ['AWS (EC2, RDS, S3, Lambda)', 'Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD'] },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6 },
  };

  return (
    <>
      <Navigation />

      {/* Project Modal */}
      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject ? projectData[selectedProject] : null}
      />

      {/* Experience Modal */}
      <ExperienceModal
        isOpen={selectedExperience !== null}
        onClose={() => setSelectedExperience(null)}
        experience={selectedExperience ? experienceData[selectedExperience] : null}
      />

      <main className="min-h-screen bg-white text-black">
        <div id="hero">
          <HeroShowcase />
        </div>

        {/* ABOUT SECTION — white */}
        <section id="about" className="relative overflow-hidden border-t border-black/5 px-6 py-28">
          <ParallaxOrbs />
          <FallingBubbles variant="onLight" />
          <div className="relative mx-auto max-w-6xl">
            <motion.div {...fadeUp}>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-black/50">About</p>
              <div className="max-w-3xl">
                <h2 className="mb-8 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                  Full stack engineer with 3+ years shipping production AI systems.
                </h2>
                <div className="space-y-5 text-lg leading-relaxed text-black/70">
                  <p>
                    I&apos;m a full-stack engineer who likes owning problems end-to-end — from a Postgres schema to the API that serves it to the UI someone actually clicks on. Over the past 3+ years at Presidio USA and Vertocity, I&apos;ve built production systems on Python/FastAPI and React/Next.js/TypeScript, and spent the last year going deep on applied AI — RAG pipelines, LangChain, and LLM integrations that actually ship, not just demo well.
                  </p>
                  <p>
                    Some numbers that back that up: I&apos;ve shipped 30+ production API endpoints, cut reporting latency from 2.8s to 1.5s on a system processing 15M+ records, and kept full-stack services supporting 250K+ daily transactions running through CI/CD and production monitoring I built myself. I&apos;m currently finishing a Master&apos;s in Advanced Data Analytics at the University of North Texas.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EXPERIENCE SECTION — black */}
        <section id="experience" className="relative overflow-hidden bg-black px-6 py-28 text-white">
          <FallingBubbles variant="onDark" />
          <div className="relative mx-auto max-w-6xl">
            <motion.div {...fadeUp}>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-white/50">Experience</p>
              <h2 className="mb-16 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Where the work happened.
              </h2>
            </motion.div>

            <div className="space-y-5">
              {experienceList.map((exp, i) => (
                <motion.button
                  key={exp.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  onClick={() => setSelectedExperience(exp.id)}
                  className="group block w-full rounded-2xl border border-white/15 p-7 text-left transition-all hover:border-white hover:bg-white/[0.04] md:p-9"
                >
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-bold">{exp.company}</h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#06c167]/40 bg-[#06c167]/10 px-3 py-1 text-xs font-semibold text-[#06c167]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#06c167]" />
                            Current
                          </span>
                        )}
                      </div>
                      <p className="mb-1 text-base font-medium text-white/70">{exp.role}</p>
                      <p className="text-sm text-white/40">{exp.duration} · {exp.location}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-white md:pt-1">
                      Read more
                      <FiArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
                    </div>
                  </div>

                  <p className="mt-5 max-w-3xl leading-relaxed text-white/65">{exp.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <StatCounter />

        {/* PROJECTS SECTION — white */}
        <section id="projects" className="relative overflow-hidden px-6 py-28">
          <FallingBubbles variant="onLight" />
          <div className="relative mx-auto max-w-6xl">
            <motion.div {...fadeUp}>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-black/50">Projects</p>
              <h2 className="mb-16 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Things built end to end.
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* OneChat */}
              <ScrollParallax speed={0.35} className="h-full">
                <motion.button
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setSelectedProject('one-chat')}
                  className="group h-full w-full rounded-2xl border border-black/10 p-8 text-left transition-all hover:-translate-y-1 hover:border-black hover:shadow-xl"
                >
                  <h3 className="mb-3 text-2xl font-bold">OneChat (Multi-Model AI Chat Platform)</h3>
                  <p className="mb-6 text-black/65">
                    Built a team-based AI chat platform supporting 100+ models (OpenAI, Anthropic, Google, xAI), with role-based access, shared API keys, and BYOK. Engineered parallel streaming of up to 5 model responses simultaneously, hitting sub-100ms latency via Redis-powered replication.
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {['Next.js', 'TypeScript', 'tRPC', 'PostgreSQL', 'Redis'].map((tech) => (
                      <span key={tech} className="rounded-full border border-black/15 px-3 py-1 text-xs font-medium text-black/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 font-semibold">
                    View details
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
                  </div>
                </motion.button>
              </ScrollParallax>

              {/* Cue */}
              <ScrollParallax speed={0.6} className="h-full">
                <motion.button
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  onClick={() => setSelectedProject('cue')}
                  className="group h-full w-full rounded-2xl border border-black/10 p-8 text-left transition-all hover:-translate-y-1 hover:border-black hover:shadow-xl"
                >
                  <h3 className="mb-3 text-2xl font-bold">Cue (AI-Powered Task Management)</h3>
                  <p className="mb-6 text-black/65">
                    Built an LLM-driven task orchestration system that turns natural language into structured operations, using a multi-model architecture (Claude, Llama, Grok, Qwen). Architected it as a privacy-first, offline-capable PWA with zero server dependencies.
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {['Next.js', 'TypeScript', 'Vercel AI SDK', 'IndexedDB'].map((tech) => (
                      <span key={tech} className="rounded-full border border-black/15 px-3 py-1 text-xs font-medium text-black/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 font-semibold">
                    View details
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
                  </div>
                </motion.button>
              </ScrollParallax>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION — black */}
        <section id="skills" className="relative overflow-hidden bg-black px-6 py-28 text-white">
          <FallingBubbles variant="onDark" />
          <div className="relative mx-auto max-w-6xl">
            <motion.div {...fadeUp}>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-white/50">Skills</p>
              <h2 className="mb-16 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Tools of the trade.
              </h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group, i) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="rounded-2xl border border-white/15 p-6"
                >
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white/50">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/20 px-3 py-1.5 text-sm font-medium text-white/85 transition-colors hover:border-white hover:bg-white hover:text-black"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION — white */}
        <section id="contact" className="relative overflow-hidden px-6 py-32">
          <FallingBubbles variant="onLight" />
          <div className="relative mx-auto max-w-4xl text-center">
            <motion.div {...fadeUp}>
              <h2 className="mb-6 text-5xl font-extrabold tracking-tight md:text-6xl">Let&apos;s connect.</h2>
              <p className="mb-12 text-xl text-black/60">
                Open to full-time opportunities and interesting collaborations
              </p>

              <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="mailto:niyaznabi6@gmail.com"
                  className="flex items-center justify-center gap-2 rounded-full bg-black px-8 py-4 font-bold text-white transition hover:bg-black/85"
                >
                  <FiMail size={20} />
                  Email me
                </a>
                <a
                  href="https://www.linkedin.com/in/niyaz-nabi-81329b228/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-black/20 px-8 py-4 font-bold text-black transition hover:border-black hover:bg-black/5"
                >
                  <FiLinkedin size={20} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/nabi06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-black/20 px-8 py-4 font-bold text-black transition hover:border-black hover:bg-black/5"
                >
                  <FiGithub size={20} />
                  GitHub
                </a>
              </div>

              <div className="border-t border-black/10 pt-8 text-sm text-black/40">
                © {new Date().getFullYear()} Niyaz Nabi
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
