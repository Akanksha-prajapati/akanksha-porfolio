import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme, THEMES } from '../context/ThemeContext';
import { 
  Terminal, 
  MapPin, 
  Mail, 
  Github, 
  Linkedin, 
  Code2, 
  Award,
  Play,
  FileText,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Zap
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { theme, setTheme, config, fontConfig } = useTheme();

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-slate-800/80 bg-radial-mesh">
      {/* Dynamic Background Glows matching active color combination */}
      <div 
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none transition-all duration-700 opacity-60" 
        style={{ background: `radial-gradient(circle, ${config.glowColor} 0%, transparent 70%)` }}
      />
      <div 
        className="absolute top-1/3 right-10 w-[450px] h-[450px] rounded-full blur-3xl pointer-events-none transition-all duration-700 opacity-40" 
        style={{ background: `radial-gradient(circle, ${config.glowColor} 0%, transparent 70%)` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Availability, Location & Palette Quick-Pill Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-200 shadow-sm tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300">Open to Roles</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300 font-normal">AI/ML Engineering & Software</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/70 text-xs text-slate-400">
              <MapPin className={`w-3.5 h-3.5 ${config.accentText}`} />
              <span className="font-mono text-[11px]">{PERSONAL_INFO.location}</span>
            </div>

            <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${config.accentBgSubtle} border ${config.accentBorder} text-xs ${config.accentTextMuted} font-semibold font-mono`}>
              <Award className={`w-3.5 h-3.5 ${config.accentText}`} />
              <span>LeetCode 500-Day Streak</span>
            </div>
          </div>

          {/* Quick Palette Swatches directly on front */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-400">
            <Sparkles className={`w-3 h-3 ${config.accentText}`} />
            <span className="text-[11px] font-mono tracking-wider uppercase hidden sm:inline">Theme:</span>
            <div className="flex items-center gap-1.5">
              {Object.values(THEMES).map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={`w-4 h-4 rounded-full transition-transform cursor-pointer ${
                    t.id === theme ? 'scale-125 ring-2 ring-white/90 shadow-sm' : 'opacity-50 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: t.previewColor }}
                  title={`Switch to ${t.name}`}
                  aria-label={`Switch to ${t.name}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Headline & Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-7">
            
            {/* Eyebrow badge */}
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-md ${config.accentBgSubtle} border ${config.accentBorder} text-[11px] font-mono font-bold uppercase tracking-widest ${config.accentText}`}>
                &gt; AI_SYSTEMS_ENGINEER
              </span>
              <span className="text-slate-600 font-mono text-xs">// 2026_COHORT</span>
            </div>

            <h1 className={`${fontConfig.cssClass} text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight leading-[1.08]`}>
              <span className="bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent block">
                Engineering intelligent systems.
              </span>
              <span className={`bg-gradient-to-r ${config.gradientText} bg-clip-text text-transparent block mt-1`}>
                Building autonomous pipelines.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              I am <span className="font-bold text-white underline decoration-slate-700 decoration-1 underline-offset-4">{PERSONAL_INFO.name}</span>, a Computer Science engineer with industry experience architecting production-grade{' '}
              <span className="font-semibold text-slate-100">agentic workflows</span>,{' '}
              <span className="font-semibold text-slate-100">local LLM pipelines</span>,{' '}
              <span className="font-semibold text-slate-100">hybrid RAG engines</span>, and high-throughput{' '}
              <span className="font-semibold text-slate-100">REST APIs</span> — fortified by{' '}
              <span className={`font-mono font-bold ${config.accentText} bg-slate-900/80 px-1.5 py-0.5 rounded border border-slate-800`}>500+ consecutive days</span> of algorithmic mastery in C++.
            </p>

            {/* Core Tech Stack Badges */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold">
                  // Core Technologies
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { name: 'LangGraph & LangChain', highlight: true },
                  { name: 'Ollama (Llama 3.2)', highlight: true },
                  { name: 'ChromaDB & RAG', highlight: true },
                  { name: 'FastAPI & Flask', highlight: false },
                  { name: 'Python & C++', highlight: false },
                  { name: 'Scikit-Learn & ML', highlight: false },
                  { name: 'PostgreSQL', highlight: false }
                ].map((tech) => (
                  <span 
                    key={tech.name}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      tech.highlight
                        ? `${config.accentBgSubtle} ${config.accentText} border ${config.accentBorder} font-semibold shadow-xs`
                        : `bg-slate-900/90 border border-slate-800 text-slate-300 hover:${config.accentBorder}`
                    }`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md active:scale-95 ${config.buttonPrimary}`}
              >
                <Terminal className="w-4 h-4" />
                <span>Explore AI Projects</span>
              </a>

              <a
                href="#playground"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm transition-all active:scale-95 shadow-xs"
              >
                <Play className={`w-3.5 h-3.5 fill-current ${config.accentText}`} />
                <span>Test Live Demos</span>
              </a>

              <button
                onClick={onOpenResume}
                className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl ${config.accentBgSubtle} hover:bg-slate-800/80 ${config.accentText} border ${config.accentBorder} text-xs sm:text-sm font-semibold transition-all cursor-pointer`}
              >
                <FileText className={`w-4 h-4 ${config.accentText}`} />
                <span>View Full Resume</span>
              </button>
            </div>

            {/* Social and Coding Profile Badges */}
            <div className="flex items-center space-x-3 pt-3 border-t border-slate-800/80">
              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.links.leetcode}
                target="_blank"
                rel="noreferrer noopener"
                className={`px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 ${config.accentTextHover} border border-slate-800 transition-colors flex items-center gap-2 text-xs font-mono font-medium`}
                title="LeetCode Profile (500+ Days Streak)"
              >
                <Code2 className={`w-4 h-4 ${config.accentText}`} />
                <span className="font-semibold text-slate-200">LeetCode</span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] ${config.accentBgSubtle} ${config.accentText} font-bold`}>500d</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={PERSONAL_INFO.links.kaggle}
                target="_blank"
                rel="noreferrer noopener"
                className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-sky-400 border border-slate-800 transition-colors text-xs font-mono flex items-center gap-1.5"
                title="Kaggle Profile"
              >
                <span className="font-bold text-sky-400">K</span>
                <span>Kaggle</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive AI Architecture & Systems Card */}
          <div className="lg:col-span-5">
            <div className={`relative rounded-2xl bg-slate-900/90 border ${config.cardHighlightBorder} p-6 shadow-2xl space-y-5 backdrop-blur-xl transition-all`}>
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-xs" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-xs" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-xs" />
                  <span className="text-[11px] font-mono text-slate-400 ml-2 font-semibold">nexus-core@pipeline: ~</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE • LOCAL LLM</span>
                </div>
              </div>

              {/* Terminal Code Simulator with rich syntax colors */}
              <div className="bg-[#050811] rounded-xl p-4 font-mono text-xs text-slate-300 border border-slate-800/80 space-y-2.5 overflow-x-auto shadow-inner">
                <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-slate-900 pb-2">
                  <span className="tracking-wide">RUNTIME: Ollama / Llama 3.2</span>
                  <span className={`${config.accentText} font-bold`}>LangGraph v0.2</span>
                </div>
                <div className="text-slate-300 font-medium">
                  <span className="text-emerald-400 font-bold">&gt;</span> <span className={config.accentText}>nexus</span>.init_agent(engine=&quot;llama-3.2:3b&quot;, privacy=&quot;100%_local&quot;)
                </div>
                <div className={`${config.accentTextMuted} font-semibold bg-slate-900/50 p-1.5 rounded border border-slate-800/50`}>
                  [ORCHESTRATOR] Initialized 3 input modalities (Text, Audio, STT)
                </div>
                <div className="text-slate-300">
                  <span className="text-emerald-400 font-bold">&gt;</span> <span className="text-indigo-400">rag_engine</span>.query_vectors(collection=&quot;docs&quot;, top_k=5)
                </div>
                <div className="text-emerald-400 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>ChromaDB cosine similarity match: 0.941 score</span>
                </div>
                <div className="text-slate-400 text-[11px] pt-1 border-t border-slate-900 font-mono">
                  <span className="text-slate-500">[METRICS]</span> Latency: <span className="text-emerald-400 font-bold">14.8ms</span> | Tool calls: <span className="text-emerald-400 font-bold">3/3</span> | Cost: <span className="text-emerald-400 font-bold">$0.00</span>
                </div>
              </div>

              {/* LeetCode Consistency Highlight */}
              <div className={`p-3.5 rounded-xl ${config.accentBgSubtle} border ${config.accentBorder} flex items-center justify-between transition-colors shadow-xs`}>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg ${config.accentBgSubtle} border ${config.accentBorder} flex items-center justify-center ${config.accentText} shadow-xs`}>
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`${fontConfig.cssClass} text-xs font-bold text-slate-100 tracking-wide`}>500+ Days LeetCode Badge</h4>
                    <p className="text-[11px] text-slate-400 font-mono">C++ &bull; Dynamic Programming &bull; Graphs</p>
                  </div>
                </div>
                <span className={`px-2.5 py-1 text-[10px] font-mono font-bold uppercase rounded-md ${config.buttonPrimary} tracking-wider`}>
                  Verified
                </span>
              </div>

              {/* Engineering Stats Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                {PERSONAL_INFO.stats.map((stat, i) => (
                  <div key={i} className={`p-3.5 rounded-xl bg-slate-950/90 border border-slate-800/80 hover:${config.accentBorder} transition-all`}>
                    <div className={`text-xl font-extrabold ${config.accentText} ${fontConfig.cssClass} tracking-tight`}>
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-slate-200 mt-0.5 tracking-wide">
                      {stat.label}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5 font-mono">
                      {stat.detail}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
