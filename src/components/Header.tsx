import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { ThemeSwitcher } from './ThemeSwitcher';
import { 
  FileText, 
  Mail, 
  Menu, 
  X, 
  Code2
} from 'lucide-react';

interface HeaderProps {
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { config, fontConfig } = useTheme();

  const navItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'playground', label: 'Live Demos' },
    { id: 'skills-dsa', label: 'DSA & Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#080c14]/85 border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Identity */}
          <div className="flex items-center space-x-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className={`w-10 h-10 rounded-xl ${config.accentBgSubtle} border ${config.accentBorder} flex items-center justify-center ${config.accentText} font-extrabold ${fontConfig.cssClass} text-lg shadow-sm group-hover:scale-105 transition-all`}>
                AP
              </div>
              <div className="flex flex-col">
                <span className={`${fontConfig.cssClass} text-lg font-extrabold text-slate-100 group-hover:${config.accentText} transition-colors tracking-tight leading-snug`}>
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[11px] text-slate-400 flex items-center gap-1.5 font-mono">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>AI/ML Engineer &bull; Software Developer</span>
                </span>
              </div>
            </a>
          </div>

          {/* Quick Specialization Pill */}
          <div className="hidden lg:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800/90 text-xs text-slate-300 shadow-xs">
            <Code2 className={`w-3.5 h-3.5 ${config.accentText}`} />
            <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wider">Focus:</span>
            <span className={`${config.accentTextMuted} font-bold font-mono text-[11px]`}>GenAI, RAG & Multi-Agents</span>
            <span className="text-slate-600">•</span>
            <span className="text-emerald-400 font-bold font-mono text-[11px]">500+ LeetCode</span>
          </div>

          {/* Desktop Navigation Links & Action */}
          <div className="hidden md:flex items-center space-x-5">
            <nav className="flex items-center space-x-6 text-[11px] tracking-widest uppercase font-mono font-semibold">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-slate-400 hover:text-white transition-colors relative py-1 hover:underline underline-offset-8 decoration-slate-600"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-3 border-l border-slate-800 pl-4">
              {/* Palette Switcher */}
              <ThemeSwitcher />

              <button
                id="header-resume-btn"
                onClick={onOpenResume}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors cursor-pointer"
              >
                <FileText className={`w-3.5 h-3.5 ${config.accentText}`} />
                <span>Resume</span>
              </button>

              <a
                href="#contact"
                className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all shadow-sm ${config.buttonPrimary}`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeSwitcher compact />
            <button
              id="mobile-resume-trigger"
              onClick={onOpenResume}
              className="p-2 text-slate-300 hover:text-slate-100 bg-slate-900 border border-slate-800 rounded-lg"
              title="Resume"
            >
              <FileText className={`w-4 h-4 ${config.accentText}`} />
            </button>
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-slate-100 bg-slate-900 border border-slate-800 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800 bg-[#080c14] space-y-4">
            <div className="flex flex-col space-y-2.5 pt-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-900 hover:text-slate-100 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-800/80 flex gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex-1 py-2.5 text-xs font-semibold text-center text-slate-200 bg-slate-900 border border-slate-700 rounded-lg"
                >
                  View Full Resume
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex-1 py-2.5 text-xs font-semibold text-center rounded-lg ${config.buttonPrimary}`}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
