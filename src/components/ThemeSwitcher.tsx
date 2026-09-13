import React, { useState, useRef, useEffect } from 'react';
import { useTheme, THEMES, FONT_OPTIONS } from '../context/ThemeContext';
import { Palette, Check, Sparkles, Type } from 'lucide-react';

export const ThemeSwitcher: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { theme, setTheme, config, fontStyle, setFontStyle } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'colors' | 'fonts'>('colors');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themesList = Object.values(THEMES);
  const fontList = Object.values(FONT_OPTIONS);

  if (compact) {
    return (
      <div className="flex items-center gap-1.5 p-1 rounded-full bg-slate-900/90 border border-slate-800">
        {themesList.map((t) => {
          const isSelected = t.id === theme;
          return (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={`w-5 h-5 rounded-full transition-all flex items-center justify-center cursor-pointer ${
                isSelected ? 'scale-110 ring-2 ring-white/80' : 'opacity-60 hover:opacity-100'
              }`}
              style={{ backgroundColor: t.previewColor }}
              title={t.name}
              aria-label={`Switch to ${t.name}`}
            >
              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-black/80" />}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/60 text-xs font-medium text-slate-200 transition-all cursor-pointer shadow-sm ${
          isOpen ? config.accentBorder : ''
        }`}
        title="Customize Color Palette & Typography"
        aria-label="Theme and typography picker"
      >
        <div 
          className="w-3.5 h-3.5 rounded-full shadow-xs ring-1 ring-white/20 shrink-0" 
          style={{ backgroundColor: config.previewColor }}
        />
        <span className="hidden sm:inline text-slate-300 font-medium">{config.name.split(' ')[0]}</span>
        <Palette className={`w-3.5 h-3.5 ${config.accentText}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 p-3 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          
          {/* Tabs: Theme Colors vs Typography Fonts */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 mb-3">
            <button
              onClick={() => setActiveTab('colors')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'colors'
                  ? `${config.accentBgSubtle} ${config.accentText} font-semibold border ${config.accentBorder}`
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>Color Themes</span>
            </button>
            <button
              onClick={() => setActiveTab('fonts')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'fonts'
                  ? `${config.accentBgSubtle} ${config.accentText} font-semibold border ${config.accentBorder}`
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Type className="w-3 h-3" />
              <span>Typography</span>
            </button>
          </div>

          {activeTab === 'colors' ? (
            <div className="space-y-1">
              <div className="px-2 pb-1 text-[10px] font-mono uppercase text-slate-500 flex justify-between">
                <span>Select Palette</span>
                <span className="text-emerald-400">Instant Preview</span>
              </div>
              {themesList.map((t) => {
                const isSelected = t.id === theme;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id);
                    }}
                    className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all cursor-pointer ${
                      isSelected 
                        ? `${t.accentBgSubtle} ${t.accentBorder} border text-slate-100` 
                        : 'hover:bg-slate-800/70 text-slate-300 hover:text-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span 
                        className="w-4 h-4 rounded-full ring-2 ring-white/10 shrink-0 shadow-xs"
                        style={{ backgroundColor: t.previewColor }}
                      />
                      <div>
                        <div className="text-xs font-medium leading-tight">{t.name}</div>
                        <div className="text-[10px] text-slate-400 font-light">{t.subtitle}</div>
                      </div>
                    </div>
                    {isSelected && <Check className={`w-4 h-4 ${t.accentText} shrink-0`} />}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="space-y-1.5">
              <div className="px-2 pb-1 text-[10px] font-mono uppercase text-slate-500 flex justify-between">
                <span>Display Font Family</span>
                <span className={config.accentText}>Live Styling</span>
              </div>
              {fontList.map((f) => {
                const isSelected = f.id === fontStyle;
                return (
                  <button
                    key={f.id}
                    onClick={() => {
                      setFontStyle(f.id);
                    }}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all cursor-pointer ${
                      isSelected 
                        ? `${config.accentBgSubtle} ${config.accentBorder} border text-slate-100` 
                        : 'hover:bg-slate-800/70 text-slate-300 hover:text-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center font-bold text-sm ${config.accentText} ${f.cssClass}`}>
                        {f.preview}
                      </span>
                      <div>
                        <div className={`text-xs font-bold leading-tight ${f.cssClass}`}>{f.name}</div>
                        <div className="text-[10px] text-slate-400 font-light line-clamp-1">{f.description}</div>
                      </div>
                    </div>
                    {isSelected && <Check className={`w-4 h-4 ${config.accentText} shrink-0`} />}
                  </button>
                );
              })}
            </div>
          )}

        </div>
      )}
    </div>
  );
};
