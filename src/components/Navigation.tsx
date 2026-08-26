'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { RESUME_PDF_PATH } from '@/app/resources/resumeData';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 72;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 bg-black transition-shadow duration-300 ${
          scrolled ? 'border-b border-white/10 shadow-lg' : 'border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex h-[72px] items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className="text-lg font-extrabold tracking-tight text-white"
            >
              Niyaz Nabi
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-semibold transition-colors ${
                    activeSection === item.id ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-[1px] h-[2px] bg-white"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Resume CTA (desktop) */}
            <a
              href={RESUME_PDF_PATH}
              download="Niyaz-Nabi-Resume.pdf"
              className="hidden md:inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-bold text-black transition hover:bg-white/90"
            >
              Resume
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-40 w-64 bg-black border-l border-white/10 md:hidden"
          >
            <div className="flex flex-col h-full pt-24 px-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`py-4 text-left text-lg font-semibold transition-colors border-b border-white/10 ${
                    activeSection === item.id ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <a
                href={RESUME_PDF_PATH}
                download="Niyaz-Nabi-Resume.pdf"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-black"
              >
                Download resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
