import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { config, fontConfig } = useTheme();

  return (
    <section id="experience" className="py-20 border-b border-slate-800/80 bg-slate-900/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-md ${config.accentBgSubtle} ${config.accentTextMuted} border ${config.accentBorder} text-[11px] font-mono font-bold uppercase tracking-widest`}>
                // 04. EXPERIENCE_CHRONICLE
              </span>
              <span className="text-slate-600 font-mono text-xs hidden sm:inline">NOIDA_NCR</span>
            </div>
            <h2 className={`${fontConfig.cssClass} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 tracking-tight leading-tight`}>
              Work & Internship History
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
              Applying machine learning models and engineering RESTful backends in collaborative production environments.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800">
            Active in Production Pipelines
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className={`rounded-2xl bg-slate-900/70 border border-slate-800/90 p-6 sm:p-8 hover:${config.accentBorder} transition-all shadow-xl backdrop-blur-md`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 border-b border-slate-800/80 pb-6 mb-6">
                
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className={`${fontConfig.cssClass} text-2xl font-bold text-slate-100 tracking-tight`}>
                      {exp.role}
                    </span>
                    <span className={`${config.accentText} font-bold text-xl`}>&bull;</span>
                    <span className="text-xl font-semibold text-slate-200">
                      {exp.company}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold ${config.accentBgSubtle} ${config.accentTextMuted} border ${config.accentBorder}`}>
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono pt-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className={`w-3.5 h-3.5 ${config.accentText}`} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className={`w-3.5 h-3.5 ${config.accentText}`} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Key Quick Badges */}
                <div className="flex items-center gap-2">
                  <div className={`p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center hover:${config.accentBorder} transition-colors`}>
                    <div className={`text-xs font-bold ${config.accentText} font-mono`}>5,000+ Records</div>
                    <div className="text-[10px] text-slate-500 font-mono">Data Engineering</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <div className="text-xs font-bold text-slate-200 font-mono">Team of 5</div>
                    <div className="text-[10px] text-slate-500 font-mono">Agile Workflow</div>
                  </div>
                </div>

              </div>

              {/* Responsibilities list */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-bold font-mono text-slate-400">
                  Key Accomplishments & Impact:
                </h4>
                <ul className="space-y-2.5">
                  {exp.description.map((item, dIdx) => (
                    <li key={dIdx} className="text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies strip */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 font-semibold mr-1">
                  Stack:
                </span>
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
