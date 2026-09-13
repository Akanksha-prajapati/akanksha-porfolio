import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  Code2, 
  FileText
} from 'lucide-react';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const { config, fontConfig } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'AI/ML Engineering Opportunity',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger mailto intent with pre-filled subject and body
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.inquiryType} from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Akanksha,\n\nName: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}\n\nSent from your portfolio website.`
    );
    window.open(`mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`, '_blank');
    
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 border-b border-slate-800/80 bg-[#080c14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-md ${config.accentBgSubtle} ${config.accentTextMuted} border ${config.accentBorder} text-[11px] font-mono font-bold uppercase tracking-widest`}>
              // 05. REACH_OUT
            </span>
            <span className="text-slate-600 font-mono text-xs hidden sm:inline">GET_IN_TOUCH</span>
          </div>
          <h2 className={`${fontConfig.cssClass} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 tracking-tight leading-tight`}>
            Let’s Build Scalable Intelligent Systems
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Open for software engineering roles, machine learning internships, RAG architectures, or full-stack backend development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Contact Details & Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className={`p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800/90 space-y-6 shadow-xl backdrop-blur-md`}>
              <h3 className={`${fontConfig.cssClass} text-xl font-bold text-slate-100 tracking-tight`}>
                Direct Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className={`flex items-center gap-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:${config.accentBorder} transition-colors group`}
                >
                  <div className={`w-10 h-10 rounded-lg ${config.accentBgSubtle} border ${config.accentBorder} flex items-center justify-center ${config.accentText} group-hover:${config.accentBg} group-hover:text-slate-950 transition-all`}>
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Email Address</div>
                    <div className={`text-xs font-medium text-slate-200 group-hover:${config.accentText} transition-colors truncate`}>
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className={`flex items-center gap-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:${config.accentBorder} transition-colors group`}
                >
                  <div className={`w-10 h-10 rounded-lg ${config.accentBgSubtle} border ${config.accentBorder} flex items-center justify-center ${config.accentText} group-hover:${config.accentBg} group-hover:text-slate-950 transition-all`}>
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Phone / WhatsApp</div>
                    <div className={`text-xs font-medium text-slate-200 group-hover:${config.accentText} transition-colors`}>
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className={`w-10 h-10 rounded-lg ${config.accentBgSubtle} border ${config.accentBorder} flex items-center justify-center ${config.accentText}`}>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Location</div>
                    <div className="text-xs font-medium text-slate-200">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Resume Button */}
              <div className="pt-2 border-t border-slate-800">
                <button
                  onClick={onOpenResume}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors cursor-pointer hover:${config.accentBorder}`}
                >
                  <FileText className={`w-4 h-4 ${config.accentText}`} />
                  <span>View & Download Curriculum Vitae</span>
                </button>
              </div>

              {/* Social Profiles Grid */}
              <div className="pt-2">
                <div className="text-[11px] font-mono uppercase text-slate-500 mb-3">Professional Profiles</div>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={PERSONAL_INFO.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.links.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-2 p-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs ${config.accentText} transition-colors`}
                  >
                    <Code2 className="w-4 h-4" />
                    <span>LeetCode (500d)</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.links.kaggle}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs text-sky-400 transition-colors"
                  >
                    <span className="font-bold">K</span>
                    <span>Kaggle</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800/90 shadow-xl backdrop-blur-md`}>
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif-display text-2xl font-bold text-slate-100">
                    Message Dispatched!
                  </h3>
                  <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                    Your email client has been opened with your pre-formatted inquiry to <strong className="text-slate-200">{PERSONAL_INFO.email}</strong>. Akanksha will respond promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className={`text-xs font-semibold ${config.accentText} hover:underline pt-2 cursor-pointer`}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className={`${fontConfig.cssClass} text-xl font-bold text-slate-100 tracking-tight`}>
                      Send a Direct Message
                    </h3>
                    <p className="text-xs text-slate-400">
                      Fill in the details below to generate a pre-formatted email directly to Akanksha.
                    </p>
                  </div>

                  {/* Inquiry Type Radio Pills */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-slate-400">
                      What are you reaching out regarding?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        'AI/ML Engineering Opportunity',
                        'Software Developer Role',
                        'Full-Stack / Backend Engineering',
                        'RAG and multi agent building',
                      ].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, inquiryType: type })}
                          className={`p-2.5 rounded-xl text-xs font-medium text-left border transition-all cursor-pointer ${
                            formData.inquiryType === type
                              ? `${config.accentBgSubtle} ${config.accentText} ${config.accentBorder} shadow-sm font-semibold`
                              : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Priya Sharma"
                        className={`w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:${config.accentBorder} focus:ring-1`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className={`w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:${config.accentBorder} focus:ring-1`}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Message / Project Scope
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about the role, project goals, timeline, or technical requirements..."
                      className={`w-full rounded-xl bg-slate-950 border border-slate-800 p-4 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:${config.accentBorder} focus:ring-1 resize-none font-sans`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-xs transition-all shadow-md active:scale-95 cursor-pointer ${config.buttonPrimary}`}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message to Akanksha</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
