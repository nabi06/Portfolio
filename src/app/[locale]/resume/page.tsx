'use client';

import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { profile, RESUME_PDF_PATH } from '@/app/resources/resumeData';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 text-black md:py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-black/50">Resume</p>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              {profile.name}
            </h1>
            <p className="mt-1 text-black/60">
              {profile.title} · {profile.location}
            </p>
          </div>
          <a
            href={RESUME_PDF_PATH}
            download="Niyaz-Nabi-Resume.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-black/85"
          >
            <FiDownload size={16} />
            Download PDF
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-black/10 bg-black/[0.02] shadow-sm">
          <iframe
            src={`${RESUME_PDF_PATH}#toolbar=1&navpanes=0`}
            className="h-[75vh] w-full min-h-[560px] md:h-[85vh]"
            title={`${profile.name} Resume`}
          />
        </div>

        <p className="text-center text-sm text-black/45">
          If the preview doesn&apos;t load,{' '}
          <a href={RESUME_PDF_PATH} download="Niyaz-Nabi-Resume.pdf" className="font-semibold text-black underline underline-offset-2">
            download the PDF
          </a>{' '}
          directly.
        </p>
      </div>
    </div>
  );
}
