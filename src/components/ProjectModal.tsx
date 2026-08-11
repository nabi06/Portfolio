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
            className="fixed inset-0 bg-black/60 z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-black/10 rounded-2xl max-w-[600px] w-full max-h-[85vh] overflow-y-auto p-7 pointer-events-auto relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-black/40 hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <FiX size={24} />
              </button>

              {/* Project Title */}
              <h2 className="text-3xl font-extrabold text-black mb-4 pr-8">
                {project.title}
              </h2>

              {/* Live Link Badge */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-sm font-semibold hover:bg-black/85 transition-all mb-4"
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
                    className="px-3 py-1.5 text-sm rounded-full border border-black/15 text-black/70 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-black/10 mb-6" />

              {/* Story */}
              <div className="mb-6">
                <p className="text-black/70 leading-relaxed">
                  {project.story}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-lg font-bold text-black mb-3">Key Highlights</h3>
                <div className="space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="flex gap-3">
                      <span className="text-[#06c167] mt-1.5 flex-shrink-0">—</span>
                      <p className="text-black/70 leading-relaxed">{highlight}</p>
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
