/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { InteractivePlayground } from './components/InteractivePlayground';
import { SkillsAndDSA } from './components/SkillsAndDSA';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

function MainLayout() {
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [playgroundTarget, setPlaygroundTarget] = useState<string>('spam');
  const { config } = useTheme();

  const handleOpenPlaygroundWithProject = (projectId: string) => {
    setPlaygroundTarget(projectId);
    const playgroundEl = document.getElementById('playground');
    if (playgroundEl) {
      playgroundEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:${config.accentBgSubtle} selection:${config.accentTextMuted}`}>
      
      {/* Sticky Header */}
      <Header
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Flagship AI & ML Engineering Projects */}
        <ProjectsSection onOpenPlayground={handleOpenPlaygroundWithProject} />

        {/* Interactive Systems Playground */}
        <InteractivePlayground initialTab={playgroundTarget} />

        {/* Technical Skills Matrix, LeetCode 500-Days Badge & Education */}
        <SkillsAndDSA />

        {/* Experience & Industry Internships */}
        <ExperienceSection />

        {/* Contact & Professional Inquiries */}
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Viewer / Printable Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}
