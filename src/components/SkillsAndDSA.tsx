import React, { useState } from 'react';
import { 
  SKILL_CATEGORIES, 
  CERTIFICATIONS, 
  EDUCATION 
} from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { 
  Award, 
  Code2, 
  CheckCircle2, 
  GraduationCap, 
  BookOpen, 
  Flame 
} from 'lucide-react';

export const SkillsAndDSA: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { config, fontConfig } = useTheme();

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.category)];

  const displayedSkillCategories = activeCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.category === activeCategory);

  return (
    <section id="skills-dsa" className="py-20 border-b border-slate-800/80 bg-[#080c14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-md ${config.accentBgSubtle} ${config.accentTextMuted} border ${config.accentBorder} text-[11px] font-mono font-bold uppercase tracking-widest`}>
              // 03. ALGORITHMIC_RIGOR
            </span>
            <span className="text-slate-600 font-mono text-xs hidden sm:inline">500_DAY_STREAK</span>
          </div>
          <h2 className={`${fontConfig.cssClass} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 tracking-tight leading-tight`}>
            Skills, Algorithmic Rigor & Academics
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Backed by 500+ consecutive days of LeetCode algorithmic practice in C++, specialized GenAI training, and foundational computer science coursework.
          </p>
        </div>

        {/* LeetCode 500-Days Badge Feature Card */}
        <div className={`mb-16 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border ${config.cardHighlightBorder} p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md`}>
          
          {/* Subtle accent glow */}
          <div 
            className="absolute -right-10 -top-10 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-40"
            style={{ background: config.glowColor }} 
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`px-3 py-1 rounded-full ${config.buttonPrimary} text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm font-mono`}>
                  <Flame className="w-3.5 h-3.5 fill-current" />
                  <span>LeetCode 500 Days Badge (2025)</span>
                </span>
                <span className="text-xs font-mono text-slate-400">Awarded 03/2026</span>
              </div>

              <h3 className={`${fontConfig.cssClass} text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight leading-snug`}>
                500+ Consecutive Days of Daily Algorithmic Problem Solving
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Consistency is the foundation of high-performance engineering. Solved algorithmic problems every single day for over 500+ days, building deep intuition across Data Structures and Algorithms, C++ memory optimization, time complexity reduction, and graph theory.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className={`p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:${config.accentBorder} transition-colors`}>
                  <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-bold">STREAK</div>
                  <div className={`text-xl font-bold ${config.accentText} ${fontConfig.cssClass} mt-0.5`}>500+ Days</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">Unbroken discipline</div>
                </div>

                <div className={`p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:${config.accentBorder} transition-colors`}>
                  <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-bold">PRIMARY LANG</div>
                  <div className={`text-xl font-bold text-slate-200 ${fontConfig.cssClass} mt-0.5`}>C++ / STL</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">Low-level efficiency</div>
                </div>

                <div className={`p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:${config.accentBorder} transition-colors`}>
                  <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-bold">CORE DOMAINS</div>
                  <div className={`text-xl font-bold text-slate-200 ${fontConfig.cssClass} mt-0.5`}>DP & Graphs</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">Trees, Heaps, Matrix</div>
                </div>

                <div className={`p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:${config.accentBorder} transition-colors`}>
                  <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-bold">OPTIMIZATION</div>
                  <div className={`text-xl font-bold text-slate-200 ${fontConfig.cssClass} mt-0.5`}>O(N) & O(log N)</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">Space-time trade-offs</div>
                </div>
              </div>
            </div>

            {/* Visual Badge Graphic */}
            <div className={`lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950/90 border ${config.cardHighlightBorder} text-center`}>
              <div className={`w-24 h-24 rounded-2xl ${config.accentBgSubtle} border-2 ${config.accentBorder} flex items-center justify-center ${config.accentText} mb-4 shadow-lg`}>
                <Flame className="w-12 h-12 fill-current animate-pulse" />
              </div>
              <div className={`${fontConfig.cssClass} text-xl font-bold text-slate-100`}>
                Consistency Badge
              </div>
              <p className={`text-xs font-mono ${config.accentTextMuted} mt-1`}>
                LeetCode Annual Honor
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800 w-full flex justify-around text-xs font-mono text-slate-400">
                <span>Easy: 100%</span>
                <span>Med: 85%</span>
                <span>Hard: Proficient</span>
              </div>
            </div>

          </div>
        </div>

        {/* Technical Skills Matrix */}
        <div className="space-y-6 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className={`${fontConfig.cssClass} text-xl font-bold text-slate-100 flex items-center gap-2 tracking-tight`}>
              <Code2 className={`w-5 h-5 ${config.accentText}`} />
              <span>Comprehensive Technical Skills</span>
            </h3>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 shadow-xs font-mono text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? `${config.accentBgSubtle} ${config.accentText} border ${config.accentBorder}`
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedSkillCategories.map((group, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:${config.accentBorder} transition-all space-y-4`}
              >
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <h4 className={`text-xs font-bold uppercase tracking-wider ${config.accentTextMuted} font-mono`}>
                    {group.category}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-500">
                    {group.skills.length} skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-2 text-xs text-slate-200 group hover:border-slate-700 transition-colors"
                    >
                      <span className="font-medium">{skill.name}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                        skill.level === 'Advanced' ? `${config.accentText} ${config.accentBgSubtle}` :
                        skill.level === 'Proficient' ? 'text-slate-300 bg-slate-800' :
                        'text-slate-400 bg-slate-900'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Education in Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Certifications */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className={`${fontConfig.cssClass} text-xl font-bold text-slate-100 flex items-center gap-2 tracking-tight`}>
              <Award className={`w-5 h-5 ${config.accentText}`} />
              <span>Professional Certifications</span>
            </h3>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className={`${fontConfig.cssClass} text-base font-bold text-slate-100`}>
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        {cert.issuer} &bull; {cert.date}
                      </p>
                    </div>
                    {cert.badge && (
                      <span className={`px-2.5 py-1 rounded-md ${config.accentBgSubtle} ${config.accentTextMuted} border ${config.accentBorder} text-[11px] font-mono whitespace-nowrap`}>
                        {cert.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-950 text-slate-400 border border-slate-800"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Coursework */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className={`${fontConfig.cssClass} text-xl font-bold text-slate-100 flex items-center gap-2 tracking-tight`}>
              <GraduationCap className={`w-5 h-5 ${config.accentText}`} />
              <span>Education & Coursework</span>
            </h3>

            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className={`${fontConfig.cssClass} text-base font-bold text-slate-100`}>
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-slate-300 font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                        {edu.location} &bull; {edu.period}
                      </p>
                    </div>
                    {edu.score && (
                      <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold whitespace-nowrap">
                        {edu.score}
                      </span>
                    )}
                  </div>

                  {edu.highlights && (
                    <ul className="space-y-1.5 pt-1">
                      {edu.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="text-xs text-slate-400 flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${config.accentText} shrink-0 mt-0.5`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Core Academic Foundations */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-mono uppercase text-slate-400 flex items-center gap-1.5">
                  <BookOpen className={`w-3.5 h-3.5 ${config.accentText}`} />
                  <span>Foundational Coursework</span>
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Machine Learning &bull; Data Structures & Algorithms &bull; Object-Oriented Programming &bull; Computer Networks &bull; Database Management Systems (DBMS) &bull; Operating Systems
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
