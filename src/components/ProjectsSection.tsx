import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { useTheme } from '../context/ThemeContext';
import { 
  Terminal, 
  Github, 
  Play, 
  ArrowRight,
  ShieldCheck,
  Bot,
  Video,
  FileCode2
} from 'lucide-react';

interface ProjectsSectionProps {
  onOpenPlayground: (projectId: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenPlayground }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const { config, fontConfig } = useTheme();

  const categories = ['All', 'Agentic AI', 'RAG & GenAI', 'Machine Learning'];

  const filteredProjects = selectedCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === selectedCategory);

  const getProjectIcon = (category: string) => {
    switch (category) {
      case 'Agentic AI':
        return <Bot className={`w-5 h-5 ${config.accentText}`} />;
      case 'RAG & GenAI':
        return <Video className={`w-5 h-5 ${config.accentText}`} />;
      case 'Machine Learning':
        return <ShieldCheck className={`w-5 h-5 ${config.accentText}`} />;
      default:
        return <Terminal className={`w-5 h-5 ${config.accentText}`} />;
    }
  };

  return (
    <section id="projects" className="py-20 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-md ${config.accentBgSubtle} ${config.accentTextMuted} border ${config.accentBorder} text-[11px] font-mono font-bold uppercase tracking-widest`}>
                // 01. FLAGSHIP_SYSTEMS
              </span>
              <span className="text-slate-600 font-mono text-xs hidden sm:inline">PROD_READY</span>
            </div>
            <h2 className={`${fontConfig.cssClass} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 tracking-tight leading-tight`}>
              Featured Flagship Projects
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Production-ready applications spanning autonomous agentic workflows, multi-modal voice processing, vector retrieval pipelines, and NLP classification APIs.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto shadow-xs font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? `${config.accentBgSubtle} ${config.accentText} shadow-sm border ${config.accentBorder}`
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`flex flex-col justify-between rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:${config.accentBorder} p-6 sm:p-7 transition-all duration-300 group hover:-translate-y-1 shadow-lg backdrop-blur-md`}
            >
              <div className="space-y-4">
                
                {/* Top Badge & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2 rounded-xl bg-slate-950 border border-slate-800 group-hover:${config.accentBorder} transition-colors`}>
                      {getProjectIcon(project.category)}
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${config.accentText} font-mono`}>
                      {project.category}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">
                    {project.date}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className={`${fontConfig.cssClass} text-xl font-bold text-slate-100 group-hover:${config.accentText} transition-colors tracking-tight leading-snug`}>
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {/* Resume bullet points */}
                <ul className="space-y-2 text-xs text-slate-300 pt-1">
                  {project.bulletPoints.slice(0, 3).map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className={`w-1.5 h-1.5 rounded-full ${config.accentBg} mt-1.5 shrink-0 opacity-80`} />
                      <span className="text-slate-300">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Key Metrics row */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.metrics.slice(0, 3).map((metric, i) => (
                    <span
                      key={i}
                      className={`px-2 py-0.5 text-[10px] font-mono font-semibold rounded-md bg-slate-950 text-slate-300 border border-slate-800`}
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-slate-800/80 text-slate-400 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => onOpenPlayground(project.id)}
                  className={`inline-flex items-center gap-1.5 text-xs font-bold font-mono ${config.accentText} ${config.accentTextHover} transition-colors group/btn cursor-pointer`}
                >
                  <Play className={`w-3.5 h-3.5 fill-current ${config.accentText}`} />
                  <span>Test in Sandbox</span>
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="p-2 text-slate-400 hover:text-white bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-lg text-xs cursor-pointer transition-colors"
                    title="View Architecture Details"
                  >
                    <FileCode2 className="w-4 h-4" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="p-2 text-slate-400 hover:text-white bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Deep Dive Modal */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          onOpenPlayground={onOpenPlayground}
        />

      </div>
    </section>
  );
};
