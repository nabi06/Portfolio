'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink } from 'react-icons/fi';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    liveUrl?: string;
    stack: string[];
    story: string;
    highlights: string[];
  } | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  const getTechBadgeColors = (tech: string) => {
    const lowerTech = tech.toLowerCase();
    
    // Backend/Node/Python
    if (lowerTech.includes('node') || lowerTech.includes('python') || 
        lowerTech.includes('express') || lowerTech.includes('fastapi') ||
        lowerTech.includes('flask') || lowerTech.includes('bullmq') ||
        lowerTech.includes('redis') || lowerTech.includes('jwt')) {
      return 'bg-[#0a2a5c] text-[#5db0e8] border-[#1e3a5f]';
    }
    
    // Frontend
    if (lowerTech.includes('react') || lowerTech.includes('next') || 
        lowerTech.includes('typescript') || lowerTech.includes('javascript')) {
      return 'bg-[#0d1a30] text-[#a0cff5] border-[#1e3a5f]';
    }
    
    // DevOps/Cloud
    if (lowerTech.includes('aws') || lowerTech.includes('docker') || 
        lowerTech.includes('kubernetes')) {
      return 'bg-[#0c2010] text-[#4ade80] border-[#1a3a20]';
    }
    
    // AI/ML
    if (lowerTech.includes('llm') || lowerTech.includes('openai') || 
        lowerTech.includes('anthropic')) {
      return 'bg-[#4a0a0a] text-[#f47070] border-[#6d1010]';
    }
    
    // Databases
    if (lowerTech.includes('postgres') || lowerTech.includes('mongo') || 
        lowerTech.includes('sql')) {
      return 'bg-[#1a0f30] text-[#a78bfa] border-[#2d1f50]';
    }
    
    // WebSockets
    if (lowerTech.includes('websocket') || lowerTech.includes('oauth')) {
      return 'bg-[#0a2a5c] text-[#5db0e8] border-[#1e3a5f]';
    }
    
    // Default to backend colors
    return 'bg-[#0a2a5c] text-[#5db0e8] border-[#1e3a5f]';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#060e1f] border border-[#1e90ff]/30 rounded-2xl max-w-[600px] w-full max-h-[85vh] overflow-y-auto p-7 pointer-events-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-[#8bacc8] hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <FiX size={24} />
              </button>

              {/* Project Title */}
              <h2 className="text-3xl font-bold text-white mb-4 pr-8">
                {project.title}
              </h2>

              {/* Live Link Badge */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e90ff]/10 text-[#1e90ff] rounded-lg border border-[#1e90ff]/30 hover:bg-[#1e90ff]/20 transition-all mb-4"
                >
                  {project.liveUrl.replace('https://', '').replace('http://', '')}
                  <FiExternalLink size={16} />
                </a>
              )}

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1.5 text-sm rounded-lg border ${getTechBadgeColors(tech)}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-[#0f2040] mb-6" />

              {/* Story */}
              <div className="mb-6">
                <p className="text-[#e0eaf8] leading-relaxed">
                  {project.story}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Key Highlights</h3>
                <div className="space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="flex gap-3">
                      <span className="text-[#1e90ff] mt-1.5 flex-shrink-0">—</span>
                      <p className="text-[#e0eaf8] leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
