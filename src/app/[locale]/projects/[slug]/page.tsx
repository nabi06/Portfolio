'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft, FiExternalLink, FiGithub, FiCheck } from 'react-icons/fi';
import { projectsData, ProjectSlug } from '../projectsData';

export default function ProjectDetailPage({ params }: { params: { slug: string; locale: string } }) {
  const project = projectsData[params.slug as ProjectSlug];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#020810] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link
            href={`/${params.locale}`}
            className="text-[#1e90ff] hover:text-[#5db0e8] flex items-center gap-2 mx-auto"
          >
            <FiArrowLeft /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-[#020810] text-[#e0eaf8]">
      {/* Header with Back Button */}
      <div className="sticky top-0 z-50 bg-[#030b1a]/80 backdrop-blur-md border-b border-[#0f2040]">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link
            href={`/${params.locale}`}
            className="flex items-center gap-2 text-[#8bacc8] hover:text-[#1e90ff] transition-colors group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {/* Title */}
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#5db0e8] to-[#1e90ff]"
          >
            {project.title}
          </motion.h1>

          {/* Tech Stack Tags */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-8">
            {project.stack.map(tech => (
              <span
                key={tech}
                className="px-4 py-2 bg-[#0a2a5c] text-[#5db0e8] rounded-lg border border-[#1e3a5f] text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Links */}
          <motion.div variants={fadeInUp} className="flex gap-4 mb-12">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#1e90ff] hover:bg-[#1e90ff]/80 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <FiExternalLink />
                View Live Site
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#060e1f] hover:bg-[#0a1a30] backdrop-blur-sm border border-[#0f2040] hover:border-[#1e3a5f] text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <FiGithub />
                View Code
              </a>
            )}
          </motion.div>

          {/* Description */}
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-xl text-[#e0eaf8] leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div 
              variants={fadeInUp}
              className="p-6 rounded-2xl bg-[#060e1f] backdrop-blur-sm border border-[#0f2040]"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#e83535]">The Problem</h2>
              <p className="text-[#e0eaf8] leading-relaxed">{project.problem}</p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="p-6 rounded-2xl bg-[#060e1f] backdrop-blur-sm border border-[#0f2040]"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#4ade80]">The Solution</h2>
              <p className="text-[#e0eaf8] leading-relaxed">{project.solution}</p>
            </motion.div>
          </div>

          {/* Key Highlights */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Key Highlights</h2>
            <div className="space-y-4">
              {project.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex gap-4 p-4 rounded-lg bg-[#060e1f] border border-[#0f2040] hover:border-[#1e3a5f] transition-colors"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1e90ff]/20 flex items-center justify-center mt-0.5">
                    <FiCheck className="text-[#1e90ff] text-sm" />
                  </div>
                  <p className="text-[#e0eaf8] leading-relaxed">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-[#060e1f] border border-[#0f2040]"
                >
                  <div className="w-2 h-2 rounded-full bg-[#1e90ff]" />
                  <span className="text-[#e0eaf8]">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Back Button */}
          <motion.div variants={fadeInUp} className="pt-8 border-t border-[#0f2040]">
            <Link
              href={`/${params.locale}`}
              className="flex items-center gap-2 text-[#1e90ff] hover:text-[#5db0e8] transition-colors group text-lg"
            >
              <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              Back to All Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
