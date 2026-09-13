import React from 'react';
import { Project } from '../types';
import { useTheme } from '../context/ThemeContext';
import { X, Github, Cpu, CheckCircle, Terminal } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenPlayground: (projectId: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenPlayground,
}) => {
  const { config, fontConfig } = useTheme();

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050811]/80 backdrop-blur-md overflow-y-auto">
      <div className={`relative w-full max-w-3xl bg-slate-900 border ${config.cardHighlightBorder} rounded-2xl p-6 sm:p-8 shadow-2xl my-8 text-slate-200`}>
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-100 bg-slate-800/80 hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header info */}
        <div className="space-y-2 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${config.accentBgSubtle} ${config.accentTextMuted} border ${config.accentBorder}`}>
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              {project.date}
            </span>
          </div>

          <h2 className={`${fontConfig.cssClass} text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight leading-snug`}>
            {project.title}
          </h2>
          <p className="text-sm text-slate-300">
            {project.subtitle}
          </p>
        </div>

        {/* Tech stack badge list */}
        <div className="flex flex-wrap gap-1.5 pt-4 pb-2">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-950 text-slate-300 border border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Key Metrics Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-4">
          {project.metrics.map((metric, i) => (
            <div key={i} className={`p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-center`}>
              <span className={`text-xs font-medium ${config.accentText}`}>{metric}</span>
            </div>
          ))}
        </div>

        {/* Architecture Diagram / Flow */}
        {project.architectureNotes && (
          <div className="my-5 p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-2">
              <Cpu className={`w-4 h-4 ${config.accentText}`} />
              <span>System Data Flow & Architecture</span>
            </div>
            <p className="text-xs font-mono text-slate-400 leading-relaxed bg-slate-900/80 p-3 rounded-lg border border-slate-800/80 overflow-x-auto">
              {project.architectureNotes}
            </p>
          </div>
        )}

        {/* Engineering Highlights */}
        <div className="space-y-3 my-5">
          <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Key Engineering Implementations</span>
          </h4>
          <ul className="space-y-2.5">
            {project.bulletPoints.map((bullet, idx) => (
              <li key={idx} className="text-sm text-slate-300 flex items-start gap-2.5">
                <span className={`w-1.5 h-1.5 rounded-full ${config.accentBg} mt-2 shrink-0`} />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenPlayground(project.id);
            }}
            className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl cursor-pointer ${config.buttonPrimary}`}
          >
            <Terminal className="w-4 h-4" />
            <span>Launch Live Interactive Tester</span>
          </button>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-slate-200 px-3 py-2 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
