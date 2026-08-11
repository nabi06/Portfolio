'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMapPin, FiCalendar } from 'react-icons/fi';

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  experience: {
    company: string;
    role: string;
    duration: string;
    location: string;
    description: string;
    achievements: string[];
    technologies: string[];
  } | null;
}

export default function ExperienceModal({ isOpen, onClose, experience }: ExperienceModalProps) {
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

  if (!experience) return null;

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
              className="bg-white border border-black/10 rounded-2xl max-w-[700px] w-full max-h-[85vh] overflow-y-auto p-7 pointer-events-auto relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-black/40 hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <FiX size={24} />
              </button>

              {/* Company & Role */}
              <h2 className="text-3xl font-extrabold text-black mb-2 pr-8">
                {experience.company}
              </h2>
              <p className="text-xl font-medium text-black/60 mb-4">
                {experience.role}
              </p>

              {/* Duration & Location */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-black/50">
                  <FiCalendar size={16} />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-black/50">
                  <FiMapPin size={16} />
                  <span>{experience.location}</span>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {experience.technologies.map((tech) => (
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

              {/* Description */}
              <div className="mb-6">
                <p className="text-black/70 leading-relaxed whitespace-pre-line">
                  {experience.description}
                </p>
              </div>

              {/* Key Achievements */}
              <div>
                <h3 className="text-lg font-bold text-black mb-3">Key Achievements</h3>
                <div className="space-y-3">
                  {experience.achievements.map((achievement, index) => (
                    <div key={index} className="flex gap-3">
                      <span className="text-[#06c167] mt-1.5 flex-shrink-0">—</span>
                      <p className="text-black/70 leading-relaxed">{achievement}</p>
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
