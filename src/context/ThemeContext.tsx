import React, { createContext, useContext, useState, useEffect } from 'react';

export type ColorTheme = 'cyan' | 'violet' | 'amber' | 'emerald';
export type FontStyle = 'tech' | 'syne' | 'editorial';

export interface FontOption {
  id: FontStyle;
  name: string;
  cssClass: string;
  preview: string;
  description: string;
}

export const FONT_OPTIONS: Record<FontStyle, FontOption> = {
  tech: {
    id: 'tech',
    name: 'Outfit Geometric',
    cssClass: 'font-display',
    preview: 'Ag',
    description: 'Modern, crisp tech display with tight optical kerning',
  },
  syne: {
    id: 'syne',
    name: 'Syne Avant-Garde',
    cssClass: 'font-syne',
    preview: 'Ag',
    description: 'Bold, futuristic high-impact headline styling',
  },
  editorial: {
    id: 'editorial',
    name: 'Playfair Editorial',
    cssClass: 'font-editorial',
    preview: 'Ag',
    description: 'Classical, literary high-contrast serif typography',
  },
};

export interface ThemeConfig {
  id: ColorTheme;
  name: string;
  subtitle: string;
  previewColor: string;
  accentText: string;
  accentTextHover: string;
  accentTextMuted: string;
  accentBg: string;
  accentBgSubtle: string;
  accentBorder: string;
  accentBorderHover: string;
  buttonPrimary: string;
  cardHighlightBorder: string;
  glowColor: string;
  glowClass: string;
  gradientText: string;
}

export const THEMES: Record<ColorTheme, ThemeConfig> = {
  cyan: {
    id: 'cyan',
    name: 'Electric Cyan & Mint',
    subtitle: 'Cybernetic AI & Vector Intelligence',
    previewColor: '#06b6d4',
    accentText: 'text-cyan-400',
    accentTextHover: 'hover:text-cyan-300',
    accentTextMuted: 'text-cyan-300',
    accentBg: 'bg-cyan-400',
    accentBgSubtle: 'bg-cyan-500/10',
    accentBorder: 'border-cyan-500/30',
    accentBorderHover: 'hover:border-cyan-400/60',
    buttonPrimary: 'bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-950 font-bold hover:brightness-110 shadow-lg shadow-cyan-500/20',
    cardHighlightBorder: 'border-cyan-500/40',
    glowColor: 'rgba(6, 182, 212, 0.12)',
    glowClass: 'text-glow',
    gradientText: 'from-cyan-300 via-teal-200 to-emerald-300',
  },
  violet: {
    id: 'violet',
    name: 'Neon Violet & Indigo',
    subtitle: 'Neural Networks & Agentic Cognition',
    previewColor: '#a855f7',
    accentText: 'text-violet-400',
    accentTextHover: 'hover:text-violet-300',
    accentTextMuted: 'text-violet-300',
    accentBg: 'bg-violet-400',
    accentBgSubtle: 'bg-violet-500/10',
    accentBorder: 'border-violet-500/30',
    accentBorderHover: 'hover:border-violet-400/60',
    buttonPrimary: 'bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 text-slate-950 font-bold hover:brightness-110 shadow-lg shadow-violet-500/20',
    cardHighlightBorder: 'border-violet-500/40',
    glowColor: 'rgba(168, 85, 247, 0.12)',
    glowClass: 'text-glow-violet',
    gradientText: 'from-violet-300 via-purple-200 to-fuchsia-300',
  },
  emerald: {
    id: 'emerald',
    name: 'Emerald Matrix & Sage',
    subtitle: 'High-Performance Algorithms & Scalability',
    previewColor: '#10b981',
    accentText: 'text-emerald-400',
    accentTextHover: 'hover:text-emerald-300',
    accentTextMuted: 'text-emerald-300',
    accentBg: 'bg-emerald-400',
    accentBgSubtle: 'bg-emerald-500/10',
    accentBorder: 'border-emerald-500/30',
    accentBorderHover: 'hover:border-emerald-400/60',
    buttonPrimary: 'bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-slate-950 font-bold hover:brightness-110 shadow-lg shadow-emerald-500/20',
    cardHighlightBorder: 'border-emerald-500/40',
    glowColor: 'rgba(16, 185, 129, 0.12)',
    glowClass: 'text-glow-emerald',
    gradientText: 'from-emerald-300 via-teal-200 to-green-300',
  },
  amber: {
    id: 'amber',
    name: 'Solar Amber & Bronze',
    subtitle: 'Warm Editorial & Classic Contrast',
    previewColor: '#f59e0b',
    accentText: 'text-amber-400',
    accentTextHover: 'hover:text-amber-300',
    accentTextMuted: 'text-amber-300',
    accentBg: 'bg-amber-400',
    accentBgSubtle: 'bg-amber-500/10',
    accentBorder: 'border-amber-500/30',
    accentBorderHover: 'hover:border-amber-400/60',
    buttonPrimary: 'bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 text-slate-950 font-bold hover:brightness-110 shadow-lg shadow-amber-500/20',
    cardHighlightBorder: 'border-amber-500/40',
    glowColor: 'rgba(245, 158, 11, 0.12)',
    glowClass: 'text-glow-amber',
    gradientText: 'from-amber-300 via-orange-200 to-yellow-300',
  },
};

interface ThemeContextType {
  theme: ColorTheme;
  setTheme: (theme: ColorTheme) => void;
  config: ThemeConfig;
  fontStyle: FontStyle;
  setFontStyle: (font: FontStyle) => void;
  fontConfig: FontOption;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ColorTheme>('cyan');
  const [fontStyle, setFontStyle] = useState<FontStyle>('tech');

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('portfolio-color-theme') as ColorTheme;
      if (savedTheme && THEMES[savedTheme]) {
        setTheme(savedTheme);
      }
      const savedFont = localStorage.getItem('portfolio-font-style') as FontStyle;
      if (savedFont && FONT_OPTIONS[savedFont]) {
        setFontStyle(savedFont);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSetTheme = (newTheme: ColorTheme) => {
    setTheme(newTheme);
    try {
      localStorage.setItem('portfolio-color-theme', newTheme);
    } catch {
      // ignore
    }
  };

  const handleSetFontStyle = (newFont: FontStyle) => {
    setFontStyle(newFont);
    try {
      localStorage.setItem('portfolio-font-style', newFont);
    } catch {
      // ignore
    }
  };

  return (
    <ThemeContext.Provider 
      value={{ 
        theme, 
        setTheme: handleSetTheme, 
        config: THEMES[theme],
        fontStyle,
        setFontStyle: handleSetFontStyle,
        fontConfig: FONT_OPTIONS[fontStyle],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
