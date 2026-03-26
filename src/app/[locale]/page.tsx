'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import Navigation from '@/components/Navigation';
import ProjectModal from '@/components/ProjectModal';
import ExperienceModal from '@/components/ExperienceModal';

export default function Home({ params }: { params: { locale: string } }) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  // Modal state
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Project data for modals
  const projectData: Record<string, any> = {
    cue: {
      title: 'Cue (AI Task Manager)',
      liveUrl: 'https://cuedot.tech',
      stack: ['TypeScript', 'Node.js', 'Next.js', 'Docker', 'JWT', 'PostgreSQL', 'BullMQ', 'Redis'],
      story: 'Cue started with a simple frustration: creating a task shouldn\'t take five steps. An LLM-powered NLP pipeline was built on top of a concurrent BullMQ worker architecture in TypeScript and Node.js — the idea being that one natural language command is typed and the system figures out the rest. Getting that pipeline right required careful async queue design so multiple tasks could be parsed simultaneously without bottlenecking each other, which ultimately cut the task creation flow from five manual steps down to a single input and pushed daily active task completion up by 45%.',
      highlights: [
        'JWT + RBAC auth layer sustaining under 100ms response times across 500+ concurrent sessions with zero auth breaches',
        'Full-stack PWA with offline support via IndexedDB and service workers — zero-downtime deploys on every release',
        'Concurrent BullMQ worker architecture parsing natural language into structured task entities'
      ]
    },
    'one-chat': {
      title: 'One-Chat (Multi-Model AI Platform)',
      liveUrl: 'https://1chat.tech',
      stack: ['TypeScript', 'Node.js', 'Express.js', 'AWS', 'WebSockets', 'OAuth 2.0'],
      story: 'One-Chat came from watching people juggle five different AI browser tabs. The core idea was a unified gateway where API keys are brought by users and the backend handles everything else. The routing layer was built in Express.js and Node.js with request validation middleware that dynamically dispatches to OpenAI, Anthropic, and other providers through one secured backend — so from the user\'s perspective it\'s one clean interface.',
      highlights: [
        'Per-user API key isolation with RBAC and OAuth 2.0 — zero cross-user data exposure across 1,000+ active sessions',
        'WebSocket streaming cut perceived response latency from 3s+ to under 1.8s — a 45% reduction in wait time',
        'Bring-Your-Own-Key architecture dynamically routing across OpenAI, Anthropic, and other LLM providers'
      ]
    },
    pharmetrade: {
      title: 'PharMeTrade',
      liveUrl: undefined,
      stack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker'],
      story: '[Add your own description here — placeholder for now. Describe what PharMeTrade does, who it\'s for, and the technical challenge you solved.]',
      highlights: [
        '[Add real highlight 1]',
        '[Add real highlight 2]',
        '[Add real highlight 3]'
      ]
    }
  };

  // Experience data for modals
  const experienceData: Record<string, any> = {
    unt: {
      company: 'University of North Texas',
      role: 'Research Assistant – Software Engineer (AI Systems)',
      duration: 'May 2025 – Present',
      location: 'Denton, TX',
      description: `As the lead software engineer on a cutting-edge AI research project, a virtual-human math tutor system was architected and developed to bridge the gap between conversational AI and interactive 3D environments. This wasn't just about connecting APIs—it required a robust, production-grade inference pipeline to be designed that could handle real-time student interactions while maintaining educational accuracy and pedagogical effectiveness.

The system architecture spans multiple technical domains: a FastAPI-based backend serving as the AI inference engine, a sophisticated RAG (Retrieval-Augmented Generation) pipeline powered by HuggingFace models and Qdrant vector database for semantic search, and seamless integration with an Unreal Engine frontend for immersive 3D interactions. Every architectural decision was driven by the dual goals of response accuracy and latency optimization.

The most technically challenging aspect was fine-tuning the semantic retrieval pipeline to balance relevance with real-time performance. Through systematic prompt engineering, embedding model optimization, and vector database query tuning, the system's response relevance was pushed from under 60% to 84%—a critical improvement that directly impacts student learning outcomes. Simultaneously, hallucination rates were reduced by nearly 50% through careful prompt design and retrieval context management.

Beyond the core AI pipeline, the entire stack was containerized with Docker to ensure reproducible deployments across research environments and comprehensive logging and monitoring were integrated to track system performance and identify edge cases in student interactions.`,
      achievements: [
        'Designed full-stack architecture connecting FastAPI inference layer, RAG pipeline, and Unreal Engine 3D client',
        'Improved AI response relevance from <60% to 84% through semantic retrieval optimization with HuggingFace + Qdrant',
        'Reduced hallucination rates by 50% via prompt engineering and retrieval context management',
        'Containerized deployment pipeline with Docker for reproducible research environment setup',
        'Built real-time monitoring system tracking response quality, latency, and student interaction patterns'
      ],
      technologies: ['FastAPI', 'Python', 'Qdrant', 'Docker', 'HuggingFace', 'Unreal Engine', 'RAG', 'Vector DB']
    },
    solutionsnow: {
      company: 'Solutions Now',
      role: 'Data Analyst Intern',
      duration: 'Jan 2025 – May 2025',
      location: 'Dallas, TX',
      description: `At Solutions Now, ownership was taken of a mission-critical ETL infrastructure processing over a million business records daily across AWS and Snowflake. What started as a monolithic nightly batch job plagued by inter-service failures and 6-hour runtime bottlenecks evolved into a robust, decoupled pipeline architecture that became the backbone of the company's data operations.

The key architectural breakthrough came from introducing RabbitMQ as a message queue layer between pipeline stages. This decoupling transformed a fragile synchronous workflow into a resilient, asynchronous system where each stage could scale independently and recover gracefully from failures. The impact was immediate and measurable: inter-service failures dropped 70%, pipeline error rates fell from 12% to under 2%, and nightly batch processing time was cut in half—from 6 hours to under 3.

Beyond the infrastructure work, comprehensive data quality checks were implemented, monitoring dashboards were built to track pipeline health in real-time, and alerting systems were established that caught data anomalies before they propagated downstream. The pipeline's newfound reliability meant business stakeholders could confidently make decisions on fresh data every morning.

This role underscored that great data engineering isn't just about moving data fast—it's about building systems that are observable, debuggable, and resilient to the inevitable failures that occur at scale. Every architectural decision was informed by production incidents, monitoring data, and the business impact of data freshness and accuracy.`,
      achievements: [
        'Reduced nightly ETL batch time from 6 hours to under 3 hours, doubling data freshness for business reporting',
        'Architected RabbitMQ-based message queue layer that reduced inter-service failures by 70%',
        'Improved pipeline reliability from 88% to 98%+ success rate, cutting error rate from 12% to <2%',
        'Built real-time monitoring and alerting system tracking pipeline health across AWS and Snowflake',
        'Processed 1M+ business records daily with automated data quality validation and anomaly detection'
      ],
      technologies: ['AWS', 'Snowflake', 'RabbitMQ', 'Python', 'ETL', 'Data Pipelines', 'CloudWatch']
    },
    vertocity: {
      company: 'Vertocity',
      role: 'Software Development Engineer – Full Stack',
      duration: 'Jul 2022 – Aug 2024',
      location: 'India',
      description: `Over two years at Vertocity, growth from a junior engineer into a trusted full-stack contributor shipping production features for a SaaS hiring platform serving 100+ enterprise clients was achieved. This wasn't just feature development—it was about building reliable, performant systems that recruiting teams depended on daily to find and hire top talent.

The complete lifecycle of multiple product features was handled: gathering requirements from product stakeholders, architecting scalable solutions, implementing both backend APIs and frontend interfaces, writing comprehensive tests, and shepherding features through staging into production. Every release maintained our 99.9% uptime SLA with zero post-release incidents—a track record worth highlighting.

The technical work spanned a modern JavaScript stack: Node.js and Express for RESTful backend services, React and Next.js for responsive web interfaces, PostgreSQL for relational data persistence, and AWS infrastructure for hosting and scaling. Particular skill in performance optimization was developed—one project that stands out was a systematic query optimization pass on our candidate search APIs.

The candidate search feature was experiencing significant performance degradation as the database scaled to millions of records. Through careful profiling with PostgreSQL's query analyzer, missing indexes and inefficient join patterns were identified. After re-indexing key tables and rewriting critical queries, API response times improved by 35%—turning a sluggish user experience back into the snappy, responsive interface our clients expected.

This role reinforced the discipline of production engineering: the importance of comprehensive testing, the value of observability and monitoring, and how small performance optimizations compound into meaningfully better user experiences.`,
      achievements: [
        'Maintained 99.9% uptime across 100+ enterprise client deployments with zero post-release incidents over 2 years',
        'Shipped 15+ production features across full stack (Node.js, React, Next.js) serving thousands of daily users',
        'Recovered 35% API performance through PostgreSQL query optimization and strategic re-indexing',
        'Built and maintained RESTful APIs handling 50K+ daily requests for candidate search and applicant tracking',
        'Implemented comprehensive test coverage (unit, integration, E2E) reducing production bugs by 60%'
      ],
      technologies: ['Node.js', 'TypeScript', 'React', 'Next.js', 'PostgreSQL', 'AWS', 'Express.js', 'REST APIs']
    }
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

      <main className="bg-[#020810] text-[#e0eaf8] min-h-screen">
        {/* HERO SECTION */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#020810] via-[#030b15] to-[#020810]" />
            <motion.div 
              className="absolute inset-0"
              style={{ opacity }}
            >
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#1e90ff]/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1 
                variants={fadeInUp}
                className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#5db0e8] to-[#1e90ff]"
              >
                Niyaz Nabi
              </motion.h1>
              
              <motion.h2 
                variants={fadeInUp}
                className="text-2xl md:text-4xl font-light mb-4 text-white"
              >
                Full Stack Software Engineer
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-[#8bacc8] mb-12 max-w-3xl mx-auto italic"
              >
                "Building scalable systems, AI-powered products, and things that last."
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <a
                  href="#projects"
                  className="group px-8 py-4 bg-[#1e90ff] hover:bg-[#e83535] text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  View Work
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/images/resume.pdf"
                  download
                  className="px-8 py-4 bg-[#060e1f] hover:bg-[#0a1a30] backdrop-blur-sm border border-[#0f2040] hover:border-[#1e3a5f] text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Download Resume
                </a>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="flex gap-6 justify-center"
              >
                <a href="https://github.com/nabi06" target="_blank" rel="noopener noreferrer" className="text-[#8bacc8] hover:text-[#1e90ff] transition-colors">
                  <FiGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/niyaz-nabi-81329b228/" target="_blank" rel="noopener noreferrer" className="text-[#8bacc8] hover:text-[#1e90ff] transition-colors">
                  <FiLinkedin size={24} />
                </a>
                <a href="mailto:niyaznabi6@gmail.com" className="text-[#8bacc8] hover:text-[#1e90ff] transition-colors">
                  <FiMail size={24} />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-[#3a5060] rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-[#3a5060] rounded-full" />
            </div>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">About Me</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-lg text-[#e0eaf8] leading-relaxed">
                  <p>
                    A Full Stack Software Engineer with 3+ years of experience building production-grade systems. A Master's in Advanced Data Analytics at UNT is being pursued, with specialization in Python, TypeScript, Node.js, and AI/ML systems.
                  </p>
                  <p>
                    Features have been shipped across SaaS platforms, research labs, and side projects — always with a focus on clean architecture and measurable impact.
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative w-64 h-64 rounded-2xl overflow-hidden border-2 border-[#1e90ff]/30 shadow-2xl shadow-[#1e90ff]/20">
                    <Image
                      src="/images/avatar.jpg"
                      alt="Niyaz Nabi"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EXPERIENCE SECTION - REDESIGNED */}
        <section id="experience" className="py-24 px-6 bg-[#060e1f]/30">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-20 text-center text-white"
            >
              Experience
            </motion.h2>

            <div className="relative">
              {/* Center timeline line - visible on desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1e90ff] via-[#1e90ff]/50 to-transparent -translate-x-1/2" />

              <div className="space-y-16">
                {/* Experience 1 - UNT (Left side - animate from left) */}
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  {/* Content on left */}
                  <div className="md:text-right">
                    <button
                      onClick={() => setSelectedExperience('unt')}
                      className="w-full text-left md:text-right group"
                    >
                      <div className="p-6 rounded-xl bg-[#060e1f] border border-[#0f2040] hover:border-[#1e90ff]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#1e90ff]/10 cursor-pointer">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#1e90ff] transition-colors">University of North Texas</h3>
                          <p className="text-lg text-[#1e90ff] mb-2">Research Assistant – Software Engineer (AI Systems)</p>
                          <div className="text-[#8bacc8] text-sm">
                            <p>May 2025 – Present</p>
                            <p>Denton, TX</p>
                          </div>
                        </div>
                        
                        <p className="text-[#e0eaf8] leading-relaxed mb-4">
                          The full system architecture for a virtual-human AI math tutor was designed — everything from the FastAPI inference layer and RAG pipeline to the Unreal Engine client data flow. Response relevance climbed from under 60% to 84% after the HuggingFace + Qdrant semantic retrieval pipeline was tuned, while hallucination rates were cut nearly in half.
                        </p>
                        
                        <div className="flex flex-wrap gap-2 md:justify-end">
                          {['FastAPI', 'Python', 'Qdrant', 'Docker', 'HuggingFace'].map(tech => (
                            <span key={tech} className="px-3 py-1.5 text-sm bg-[#0a2a5c] text-[#5db0e8] rounded-lg border border-[#1e3a5f]">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 text-[#1e90ff] mt-4 md:justify-end">
                          <span className="text-sm">View Details</span>
                          <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* Timeline dot - center */}
                  <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-[#1e90ff] rounded-full -translate-x-1/2 ring-4 ring-[#020810] z-10" />
                  
                  {/* Empty right side */}
                  <div className="hidden md:block" />
                </motion.div>

                {/* Experience 2 - Solutions Now (Right side - animate from right) */}
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  {/* Empty left side */}
                  <div className="hidden md:block" />

                  {/* Timeline dot - center */}
                  <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-[#1e90ff] rounded-full -translate-x-1/2 ring-4 ring-[#020810] z-10" />
                  
                  {/* Content on right */}
                  <div>
                    <button
                      onClick={() => setSelectedExperience('solutionsnow')}
                      className="w-full text-left group"
                    >
                      <div className="p-6 rounded-xl bg-[#060e1f] border border-[#0f2040] hover:border-[#1e90ff]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#1e90ff]/10 cursor-pointer">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#1e90ff] transition-colors">Solutions Now</h3>
                          <p className="text-lg text-[#1e90ff] mb-2">Data Analyst Intern</p>
                          <div className="text-[#8bacc8] text-sm">
                            <p>Jan 2025 – May 2025</p>
                            <p>Dallas, TX</p>
                          </div>
                        </div>
                        
                        <p className="text-[#e0eaf8] leading-relaxed mb-4">
                          A Python ETL backend on AWS and Snowflake was built to process over a million business records daily, cutting nightly batch time from 6 hours to under 3. Decoupling the pipeline stages with RabbitMQ queues was the architectural decision that made the biggest difference — inter-service failures dropped 70% and the pipeline error rate fell from 12% to under 2% within the first deployment cycle.
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {['AWS', 'Snowflake', 'RabbitMQ', 'Python', 'ETL'].map(tech => (
                            <span key={tech} className={`px-3 py-1.5 text-sm rounded-lg border ${
                              tech === 'AWS' ? 'bg-[#0c2010] text-[#4ade80] border-[#1a3a20]' :
                              'bg-[#0a2a5c] text-[#5db0e8] border-[#1e3a5f]'
                            }`}>
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 text-[#1e90ff] mt-4">
                          <span className="text-sm">View Details</span>
                          <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                        </div>
                      </div>
                    </button>
                  </div>
                </motion.div>

                {/* Experience 3 - Vertocity (Left side - animate from left) */}
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  {/* Content on left */}
                  <div className="md:text-right">
                    <button
                      onClick={() => setSelectedExperience('vertocity')}
                      className="w-full text-left md:text-right group"
                    >
                      <div className="p-6 rounded-xl bg-[#060e1f] border border-[#0f2040] hover:border-[#1e90ff]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#1e90ff]/10 cursor-pointer">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#1e90ff] transition-colors">Vertocity</h3>
                          <p className="text-lg text-[#1e90ff] mb-2">Software Development Engineer – Full Stack</p>
                          <div className="text-[#8bacc8] text-sm">
                            <p>Jul 2022 – Aug 2024</p>
                            <p>India</p>
                          </div>
                        </div>
                        
                        <p className="text-[#e0eaf8] leading-relaxed mb-4">
                          Over two years, production REST APIs and React/Next.js interfaces were shipped for a SaaS hiring platform serving 100+ enterprise clients — maintaining 99.9% uptime with zero post-release incidents across every deployment. The work most valued was the PostgreSQL query optimization pass that recovered 35% of lost API performance by profiling and re-indexing candidate search queries.
                        </p>
                        
                        <div className="flex flex-wrap gap-2 md:justify-end">
                          {['Node.js', 'TypeScript', 'React', 'PostgreSQL', 'AWS'].map(tech => (
                            <span key={tech} className={`px-3 py-1.5 text-sm rounded-lg border ${
                              tech === 'AWS' ? 'bg-[#0c2010] text-[#4ade80] border-[#1a3a20]' :
                              tech === 'PostgreSQL' ? 'bg-[#1a0f30] text-[#a78bfa] border-[#2d1f50]' :
                              tech === 'React' ? 'bg-[#0d1a30] text-[#a0cff5] border-[#1e3a5f]' :
                              'bg-[#0a2a5c] text-[#5db0e8] border-[#1e3a5f]'
                            }`}>
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 text-[#1e90ff] mt-4 md:justify-end">
                          <span className="text-sm">View Details</span>
                          <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* Timeline dot - center */}
                  <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-[#1e90ff] rounded-full -translate-x-1/2 ring-4 ring-[#020810] z-10" />
                  
                  {/* Empty right side */}
                  <div className="hidden md:block" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION - WITH MODAL TRIGGERS */}
        <section id="projects" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
            >
              Featured Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 - Cue (Blue accent) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <button 
                  onClick={() => setSelectedProject('cue')}
                  className="block group h-full w-full text-left"
                >
                  <div className="h-full p-8 rounded-2xl bg-[#060e1f] backdrop-blur-sm border border-[#0f2040] hover:border-[#1e3a5f] transition-all duration-300 hover:shadow-2xl hover:shadow-[#1e90ff]/10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#1e90ff]" />
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#1e90ff] transition-colors text-white">Cue (AI Task Manager)</h3>
                    <p className="text-[#8bacc8] mb-4">LLM-powered task manager that parses natural language commands into structured tasks. Reduced task creation from 5+ steps to a single input — boosting daily active task completion by 45%.</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['TypeScript', 'Node.js', 'Next.js', 'Docker'].map(tech => (
                        <span key={tech} className="px-3 py-1 text-xs bg-[#0a2a5c] text-[#5db0e8] rounded-full border border-[#1e3a5f]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-[#1e90ff] group-hover:gap-2 gap-1 transition-all">
                      <span>View Details</span>
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              </motion.div>

              {/* Project 2 - One-Chat (Red accent) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <button 
                  onClick={() => setSelectedProject('one-chat')}
                  className="block group h-full w-full text-left"
                >
                  <div className="h-full p-8 rounded-2xl bg-[#060e1f] backdrop-blur-sm border border-[#0f2040] hover:border-[#1e3a5f] transition-all duration-300 hover:shadow-2xl hover:shadow-[#e83535]/10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#e83535]" />
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#e83535] transition-colors text-white">One-Chat (Multi-Model AI Platform)</h3>
                    <p className="text-[#8bacc8] mb-4">Unified AI gateway supporting multiple LLM providers (OpenAI, Anthropic, etc.) with Bring-Your-Own-Key architecture and real-time streaming.</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['TypeScript', 'Node.js', 'Express.js', 'AWS'].map(tech => (
                        <span key={tech} className="px-3 py-1 text-xs bg-[#0a2a5c] text-[#5db0e8] rounded-full border border-[#1e3a5f]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-[#e83535] group-hover:gap-2 gap-1 transition-all">
                      <span>View Details</span>
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              </motion.div>

              {/* Project 3 - PharMeTrade (Green accent) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <button 
                  onClick={() => setSelectedProject('pharmetrade')}
                  className="block group h-full w-full text-left"
                >
                  <div className="h-full p-8 rounded-2xl bg-[#060e1f] backdrop-blur-sm border border-[#0f2040] hover:border-[#1e3a5f] transition-all duration-300 hover:shadow-2xl hover:shadow-[#4ade80]/10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#4ade80]" />
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#4ade80] transition-colors text-white">PharMeTrade</h3>
                    <p className="text-[#8bacc8] mb-4">Enterprise platform connecting pharmaceutical buyers and sellers with real-time inventory management and secure transaction processing.</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['Python', 'FastAPI', 'React', 'PostgreSQL'].map(tech => (
                        <span key={tech} className="px-3 py-1 text-xs bg-[#0a2a5c] text-[#5db0e8] rounded-full border border-[#1e3a5f]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-[#4ade80] group-hover:gap-2 gap-1 transition-all">
                      <span>View Details</span>
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 px-6 bg-[#060e1f]/30">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
            >
              Skills & Technologies
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Languages */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="p-6 rounded-xl bg-[#060e1f] backdrop-blur-sm border border-[#0f2040]"
              >
                <h3 className="text-xl font-bold mb-4 text-[#1e90ff]">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'TypeScript', 'JavaScript', 'SQL'].map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-[#0a2a5c] text-[#5db0e8] rounded-lg border border-[#1e3a5f] hover:border-[#1e90ff]/50 hover:bg-[#0d3470] transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Backend & APIs */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-6 rounded-xl bg-[#060e1f] backdrop-blur-sm border border-[#0f2040]"
              >
                <h3 className="text-xl font-bold mb-4 text-[#1e90ff]">Backend & APIs</h3>
                <div className="flex flex-wrap gap-2">
                  {['FastAPI', 'Node.js', 'Express.js', 'Flask', 'REST', 'GraphQL', 'WebSockets', 'RabbitMQ', 'BullMQ'].map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-[#0a2a5c] text-[#5db0e8] rounded-lg border border-[#1e3a5f] hover:border-[#1e90ff]/50 hover:bg-[#0d3470] transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Frontend */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 rounded-xl bg-[#060e1f] backdrop-blur-sm border border-[#0f2040]"
              >
                <h3 className="text-xl font-bold mb-4 text-[#1e90ff]">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Next.js', 'Tailwind CSS', 'PWA', 'IndexedDB'].map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-[#0d1a30] text-[#a0cff5] rounded-lg border border-[#1e3a5f] hover:border-[#1e90ff]/50 hover:bg-[#102040] transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Databases */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 rounded-xl bg-[#060e1f] backdrop-blur-sm border border-[#0f2040]"
              >
                <h3 className="text-xl font-bold mb-4 text-[#a78bfa]">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {['PostgreSQL', 'MongoDB', 'Snowflake', 'Qdrant'].map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-[#1a0f30] text-[#a78bfa] rounded-lg border border-[#2d1f50] hover:border-[#a78bfa]/50 hover:bg-[#241740] transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* AI/ML & GenAI */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-6 rounded-xl bg-[#060e1f] backdrop-blur-sm border border-[#0f2040]"
              >
                <h3 className="text-xl font-bold mb-4 text-[#f47070]">AI/ML & GenAI</h3>
                <div className="flex flex-wrap gap-2">
                  {['LLMs (OpenAI, Anthropic)', 'RAG Pipelines', 'HuggingFace', 'Prompt Engineering', 'NLP'].map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-[#4a0a0a] text-[#f47070] rounded-lg border border-[#6d1010] hover:border-[#f47070]/50 hover:bg-[#5a1515] transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Cloud & DevOps */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="p-6 rounded-xl bg-[#060e1f] backdrop-blur-sm border border-[#0f2040]"
              >
                <h3 className="text-xl font-bold mb-4 text-[#4ade80]">Cloud & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {['AWS (EC2, RDS, S3, Lambda)', 'Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD'].map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-[#0c2010] text-[#4ade80] rounded-lg border border-[#1a3a20] hover:border-[#4ade80]/50 hover:bg-[#102a18] transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Testing */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="p-6 rounded-xl bg-[#060e1f] backdrop-blur-sm border border-[#0f2040]"
              >
                <h3 className="text-xl font-bold mb-4 text-[#fbbf24]">Testing</h3>
                <div className="flex flex-wrap gap-2">
                  {['Pytest', 'Jest', 'TDD', 'Unit/Integration/Load Testing', '85%+ Coverage'].map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-[#2a1a06] text-[#fbbf24] rounded-lg border border-[#4a3010] hover:border-[#fbbf24]/50 hover:bg-[#3a2510] transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CONTACT / FOOTER SECTION */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Let's Connect</h2>
              <p className="text-xl text-[#8bacc8] mb-12">
                Open to full-time opportunities and interesting collaborations
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <a
                  href="mailto:niyaznabi6@gmail.com"
                  className="px-8 py-4 bg-[#1e90ff] hover:bg-[#1e90ff]/80 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FiMail size={20} />
                  Email Me
                </a>
                <a
                  href="https://www.linkedin.com/in/niyaz-nabi-81329b228/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#060e1f] hover:bg-[#0a1a30] backdrop-blur-sm border border-[#0f2040] hover:border-[#1e3a5f] text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FiLinkedin size={20} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/nabi06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#060e1f] hover:bg-[#0a1a30] backdrop-blur-sm border border-[#0f2040] hover:border-[#1e3a5f] text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FiGithub size={20} />
                  GitHub
                </a>
              </div>

              <div className="border-t border-[#0f2040] pt-8">
                
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
