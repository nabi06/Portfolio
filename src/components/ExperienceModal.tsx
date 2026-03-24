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

  const getTechBadgeColors = (tech: string) => {
    const lowerTech = tech.toLowerCase();
    
    // Backend/Node/Python
    if (lowerTech.includes('node') || lowerTech.includes('python') || 
        lowerTech.includes('express') || lowerTech.includes('fastapi') ||
        lowerTech.includes('flask') || lowerTech.includes('etl')) {
      return 'bg-[#0a2a5c] text-[#5db0e8] border-[#1e3a5f]';
    }
    
    // Frontend
    if (lowerTech.includes('react') || lowerTech.includes('next') || 
        lowerTech.includes('typescript') || lowerTech.includes('javascript')) {
      return 'bg-[#0d1a30] text-[#a0cff5] border-[#1e3a5f]';
    }
    
    // DevOps/Cloud
    if (lowerTech.includes('aws') || lowerTech.includes('docker') || 
        lowerTech.includes('kubernetes') || lowerTech.includes('snowflake')) {
      return 'bg-[#0c2010] text-[#4ade80] border-[#1a3a20]';
    }
    
    // AI/ML
    if (lowerTech.includes('huggingface') || lowerTech.includes('qdrant') || 
        lowerTech.includes('unreal')) {
      return 'bg-[#4a0a0a] text-[#f47070] border-[#6d1010]';
    }
    
    // Databases
    if (lowerTech.includes('postgres') || lowerTech.includes('mongo') || 
        lowerTech.includes('sql')) {
      return 'bg-[#1a0f30] text-[#a78bfa] border-[#2d1f50]';
    }
    
    // Message Queues
    if (lowerTech.includes('rabbitmq') || lowerTech.includes('redis')) {
      return 'bg-[#2a1a06] text-[#fbbf24] border-[#4a2a06]';
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
              className="bg-[#060e1f] border border-[#1e90ff]/30 rounded-2xl max-w-[700px] w-full max-h-[85vh] overflow-y-auto p-7 pointer-events-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-[#8bacc8] hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <FiX size={24} />
              </button>

              {/* Company & Role */}
              <h2 className="text-3xl font-bold text-white mb-2 pr-8">
                {experience.company}
              </h2>
              <p className="text-xl text-[#1e90ff] mb-4">
                {experience.role}
              </p>

              {/* Duration & Location */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-[#8bacc8]">
                  <FiCalendar size={16} />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-[#8bacc8]">
                  <FiMapPin size={16} />
                  <span>{experience.location}</span>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {experience.technologies.map((tech) => (
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

              {/* Description */}
              <div className="mb-6">
                <p className="text-[#e0eaf8] leading-relaxed whitespace-pre-line">
                  {experience.description}
                </p>
              </div>

              {/* Key Achievements */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Key Achievements</h3>
                <div className="space-y-3">
                  {experience.achievements.map((achievement, index) => (
                    <div key={index} className="flex gap-3">
                      <span className="text-[#1e90ff] mt-1.5 flex-shrink-0">—</span>
                      <p className="text-[#e0eaf8] leading-relaxed">{achievement}</p>
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
