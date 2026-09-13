import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [noidaTime, setNoidaTime] = useState<string>('');
  const { config, fontConfig } = useTheme();

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
        setNoidaTime(timeStr);
      } catch (err) {
        setNoidaTime('IST');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 py-12 text-slate-400 text-xs font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className={`${fontConfig.cssClass} text-lg font-extrabold text-slate-100 tracking-tight`}>
                {PERSONAL_INFO.name}
              </span>
              <span className="text-slate-600">&bull;</span>
              <span className={`text-xs font-mono font-semibold ${config.accentText}`}>AI/ML Portfolio</span>
            </div>
            <p className="text-xs text-slate-400">
              AI/ML Engineer &bull; Full-Stack Builder &bull; Algorithmic Problem Solver
            </p>
          </div>

          {/* Time & Location in Noida */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Noida, IN: {noidaTime}</span>
            </div>

            <button
              onClick={scrollToTop}
              className={`p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:${config.accentBorder} transition-colors cursor-pointer`}
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <span>Crafted with React, TypeScript & Tailwind</span>
            <span>&bull;</span>
            <span className={`font-mono ${config.accentText}`}>500+ Days LeetCode Discipline</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
