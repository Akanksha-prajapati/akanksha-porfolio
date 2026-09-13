import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Play, 
  ShieldAlert, 
  ShieldCheck, 
  Mic, 
  Volume2, 
  Search, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  RefreshCw, 
  Clock, 
  Database, 
  Zap 
} from 'lucide-react';

interface InteractivePlaygroundProps {
  initialTab?: string;
}

export const InteractivePlayground: React.FC<InteractivePlaygroundProps> = ({ initialTab = 'spam' }) => {
  const { config, fontConfig } = useTheme();
  const [activeTab, setActiveTab] = useState<'spam' | 'nexus' | 'rag'>(
    initialTab === 'nexus-voice-agent' ? 'nexus' : initialTab === 'youtube-rag' ? 'rag' : 'spam'
  );

  // --- SPAM CLASSIFIER STATE & LOGIC ---
  const [spamInput, setSpamInput] = useState<string>(
    'URGENT! You have won a $1,000 cash prize reward. Click here immediately to claim your free voucher before it expires!'
  );
  const [spamResult, setSpamResult] = useState<{
    isSpam: boolean;
    confidence: number;
    latencyMs: number;
    flaggedTokens: string[];
  }>({
    isSpam: true,
    confidence: 97.4,
    latencyMs: 7.8,
    flaggedTokens: ['urgent', 'won', '$1,000', 'cash', 'prize', 'reward', 'click', 'claim', 'free', 'expires'],
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const spamPresets = [
    {
      label: 'Spam / Phishing Alert',
      text: 'URGENT! Your account security has been compromised. Verify your login credentials within 24 hours to prevent permanent deactivation.',
    },
    {
      label: 'Prize Promotion (Spam)',
      text: 'Congratulations! You have been selected to receive a free $500 Amazon Gift Card. Call now or click http://gift-rewards.net to claim!',
    },
    {
      label: 'Professional Work Sync (Ham)',
      text: 'Hi Akanksha, following up on the vector store chunking PR. The integration tests for Ollama Llama 3.2 passed cleanly. Let’s merge after review.',
    },
    {
      label: 'Algorithm Discussion (Ham)',
      text: 'Can we optimize the dynamic programming memoization table for the LeetCode daily problem? Space complexity can be brought down to O(1).',
    }
  ];

  const handleAnalyzeSpam = (text: string) => {
    if (!text.trim()) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      const lower = text.toLowerCase();
      const spamKeywords = [
        'urgent', 'won', 'winner', 'cash', 'prize', 'reward', 'click', 'claim', 'free',
        'expires', 'congratulations', 'gift card', '$', 'voucher', 'compromised', 'verify',
        'deactivation', 'call now', 'selected', 'guaranteed', 'risk-free', 'unlimited'
      ];
      const matched = spamKeywords.filter(kw => lower.includes(kw));
      
      // Calculate realistic score
      let score = 5; // base probability
      if (matched.length > 0) {
        score = Math.min(99.4, 45 + matched.length * 15);
      } else {
        score = Math.max(1.2, 10 - (text.length > 40 ? 5 : 0));
      }

      setSpamResult({
        isSpam: score > 50,
        confidence: Number(score.toFixed(1)),
        latencyMs: Number((4 + Math.random() * 6).toFixed(1)),
        flaggedTokens: matched,
      });
      setIsAnalyzing(false);
    }, 280);
  };

  // --- NEXUS VOICE AGENT STATE & SIMULATION ---
  const [agentInputMode, setAgentInputMode] = useState<'voice' | 'audio' | 'text'>('voice');
  const [agentStep, setAgentStep] = useState<number>(0);
  const [agentRunning, setAgentRunning] = useState<boolean>(false);
  const [agentVoiceCommand] = useState(
    'Schedule a technical debrief with the AI team for Friday at 4 PM, save it to the SQLite orders database, and notify via email.'
  );

  const triggerAgentWorkflow = () => {
    setAgentRunning(true);
    setAgentStep(1); // Audio STT / Ingestion

    setTimeout(() => {
      setAgentStep(2); // LangGraph Intent Router
    }, 600);

    setTimeout(() => {
      setAgentStep(3); // Local Llama 3.2 (Ollama)
    }, 1300);

    setTimeout(() => {
      setAgentStep(4); // Database / API Tool execution
    }, 2000);

    setTimeout(() => {
      setAgentStep(5); // Synthesis & TTS
      setAgentRunning(false);
    }, 2700);
  };

  // --- YOUTUBE RAG SIMULATOR ---
  const [ragQuery, setRagQuery] = useState('How does ChromaDB vector retrieval match semantic queries?');
  const [ragProcessing, setRagProcessing] = useState(false);
  const [ragResult, setRagResult] = useState({
    videoTitle: 'End-to-End AI Engineering: From RAG Pipelines to Agentic Workflows',
    videoId: 'dQw4w9WgXcQ',
    chunksRetrieved: 3,
    topMatchScore: 0.942,
    extractedTranscriptSnippet: '...when you feed video subtitles into yt-dlp, the text splitter creates 1000-character chunks with 150-token overlap. Chroma vector-store computes cosine similarity with your query embedding to pull the most contextually relevant moments...',
    geminiSummary: 'The speaker explains that YouTube transcripts are extracted with yt-dlp, partitioned into overlapping chunks, and indexed in ChromaDB. Semantic cosine distance identifies the most relevant segment, which Gemini 3.6 Flash then synthesizes into structured notes with PDF export.',
  });

  const handleRunRag = () => {
    if (!ragQuery.trim()) return;
    setRagProcessing(true);
    setTimeout(() => {
      setRagResult({
        videoTitle: 'End-to-End AI Engineering: From RAG Pipelines to Agentic Workflows',
        videoId: 'dQw4w9WgXcQ',
        chunksRetrieved: 4,
        topMatchScore: Number((0.92 + Math.random() * 0.06).toFixed(3)),
        extractedTranscriptSnippet: `...query: "${ragQuery}". Matched semantic vectors from Chroma collection "youtube_rag_v2" using cosine distance metric. Relevant transcript partition retrieved with 150 token overlap...`,
        geminiSummary: `Synthesized answer for "${ragQuery}": The indexing architecture partitions text with LangChain RecursiveCharacterTextSplitter and stores high-dimensional embeddings in local ChromaDB. Gemini Flash resolves queries in under 320ms without hallucination by grounding responses in extracted video chunks.`,
      });
      setRagProcessing(false);
    }, 650);
  };

  return (
    <section id="playground" className="py-20 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-md ${config.accentBgSubtle} ${config.accentTextMuted} border ${config.accentBorder} text-[11px] font-mono font-bold uppercase tracking-widest`}>
              // 02. LIVE_TESTBENCH
            </span>
            <span className="text-slate-600 font-mono text-xs hidden sm:inline">SANDBOX_V2</span>
          </div>
          <h2 className={`${fontConfig.cssClass} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 tracking-tight leading-tight`}>
            Test My Code & Systems Live
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Interact with simulated live environments reflecting the architectures of my key AI/ML projects.
          </p>

          {/* Sandbox Selector Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 font-mono text-xs">
            <button
              onClick={() => setActiveTab('spam')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'spam'
                  ? `${config.buttonPrimary}`
                  : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Spam Classifier (ML + TF-IDF)</span>
            </button>

            <button
              onClick={() => setActiveTab('nexus')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'nexus'
                  ? `${config.buttonPrimary}`
                  : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              <Mic className="w-4 h-4" />
              <span>Nexus Voice Agent (LangGraph + Ollama)</span>
            </button>

            <button
              onClick={() => setActiveTab('rag')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'rag'
                  ? `${config.buttonPrimary}`
                  : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>YouTube RAG (ChromaDB + Gemini)</span>
            </button>
          </div>
        </div>

        {/* --- TAB 1: SPAM CLASSIFIER NLP TESTER --- */}
        {activeTab === 'spam' && (
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start rounded-2xl bg-slate-900/60 border ${config.cardHighlightBorder} p-6 sm:p-8 shadow-xl backdrop-blur-md`}>
            
            {/* Input Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                    <ShieldAlert className={`w-4 h-4 ${config.accentText}`} />
                    <span>Real-Time Spam Detection Pipeline</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Trained on 5,000+ messages using Scikit-Learn TF-IDF vectorization & Multinomial Naive Bayes.
                  </p>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                  Flask REST API Mock
                </span>
              </div>

              {/* Text Area */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                  Test Message / SMS / Email Text:
                </label>
                <textarea
                  rows={4}
                  value={spamInput}
                  onChange={(e) => {
                    setSpamInput(e.target.value);
                    handleAnalyzeSpam(e.target.value);
                  }}
                  placeholder="Type or paste any message to test..."
                  className={`w-full rounded-xl bg-slate-950 border border-slate-800 p-4 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:${config.accentBorder} focus:ring-1 transition-all resize-none font-sans`}
                />
              </div>

              {/* Sample Presets */}
              <div className="space-y-2">
                <span className="text-xs text-slate-500 font-medium">Or choose a quick preset:</span>
                <div className="flex flex-wrap gap-2">
                  {spamPresets.map((preset, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSpamInput(preset.text);
                        handleAnalyzeSpam(preset.text);
                      }}
                      className="px-2.5 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Run button */}
              <button
                onClick={() => handleAnalyzeSpam(spamInput)}
                disabled={isAnalyzing || !spamInput.trim()}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer disabled:opacity-50 ${config.buttonPrimary}`}
              >
                {isAnalyzing ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Zap className="w-3.5 h-3.5" />
                )}
                <span>Run NLP Classification</span>
              </button>
            </div>

            {/* Inference Results Output Column */}
            <div className="lg:col-span-5 rounded-xl bg-slate-950 border border-slate-800 p-6 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono uppercase text-slate-400">Inference Diagnostics</span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{spamResult.latencyMs}ms Latency</span>
                </span>
              </div>

              {/* Primary Verdict Banner */}
              <div
                className={`p-4 rounded-xl border flex items-center gap-3.5 transition-colors ${
                  spamResult.isSpam
                    ? 'bg-rose-950/30 border-rose-800/60 text-rose-200'
                    : 'bg-emerald-950/30 border-emerald-800/60 text-emerald-200'
                }`}
              >
                {spamResult.isSpam ? (
                  <ShieldAlert className="w-8 h-8 text-rose-400 shrink-0" />
                ) : (
                  <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
                )}
                <div>
                  <div className="text-sm font-bold uppercase tracking-wide">
                    Classification: {spamResult.isSpam ? 'SPAM / SUSPICIOUS' : 'LEGITIMATE (HAM)'}
                  </div>
                  <div className="text-xs opacity-80 mt-0.5">
                    Confidence: <span className="font-mono font-bold">{spamResult.confidence}%</span> certainty
                  </div>
                </div>
              </div>

              {/* Confidence Progress Meter */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-emerald-400">Ham (Safe)</span>
                  <span className="text-rose-400">Spam (Threat)</span>
                </div>
                <div className="h-3 rounded-full bg-slate-900 border border-slate-800 overflow-hidden relative">
                  <div
                    className={`h-full transition-all duration-500 rounded-full ${
                      spamResult.isSpam ? 'bg-rose-500' : 'bg-emerald-500'
                    }`}
                    style={{ width: `${spamResult.confidence}%` }}
                  />
                </div>
              </div>

              {/* Flagged TF-IDF N-Gram Tokens */}
              <div className="space-y-2">
                <span className="text-xs text-slate-400 font-medium">Weighted Signal Tokens Detected:</span>
                <div className="flex flex-wrap gap-1.5 min-h-[32px]">
                  {spamResult.flaggedTokens.length > 0 ? (
                    spamResult.flaggedTokens.map((token, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-rose-500/10 border border-rose-500/30 text-rose-300"
                      >
                        {token}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-slate-500 italic">No aggressive spam n-grams detected.</span>
                  )}
                </div>
              </div>

              {/* Model Specs note */}
              <div className="text-[11px] text-slate-500 font-mono border-t border-slate-900 pt-3">
                &gt; Serialized joblib payload: vectorizer.pkl + nb_model.pkl
              </div>
            </div>

          </div>
        )}

        {/* --- TAB 2: NEXUS AI VOICE AGENT WORKFLOW INSPECTOR --- */}
        {activeTab === 'nexus' && (
          <div className={`rounded-2xl bg-slate-900/60 border ${config.cardHighlightBorder} p-6 sm:p-8 shadow-xl space-y-8 backdrop-blur-md`}>
            
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  <Mic className={`w-5 h-5 ${config.accentText}`} />
                  <span>Nexus AI Autonomous Agent Architecture</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  100% Privacy via Local Llama 3.2 (Ollama) &bull; LangChain / LangGraph Multi-Tool Orchestration
                </p>
              </div>

              {/* Input Mode Selector */}
              <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
                {(['voice', 'audio', 'text'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setAgentInputMode(mode)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all cursor-pointer ${
                      agentInputMode === mode
                        ? `${config.accentBgSubtle} ${config.accentText} font-semibold border ${config.accentBorder}`
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {mode === 'voice' ? 'Live Voice' : mode === 'audio' ? 'Audio Stream' : 'Text Input'}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Command Trigger */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${config.accentBgSubtle} border ${config.accentBorder} flex items-center justify-center ${config.accentText} shrink-0`}>
                  <Volume2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase">Input Payload:</span>
                  <p className="text-xs text-slate-200 font-medium line-clamp-2">
                    &ldquo;{agentVoiceCommand}&rdquo;
                  </p>
                </div>
              </div>

              <button
                onClick={triggerAgentWorkflow}
                disabled={agentRunning}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs transition-all shrink-0 cursor-pointer disabled:opacity-50 ${config.buttonPrimary}`}
              >
                {agentRunning ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Play className="w-3.5 h-3.5 fill-current" />
                )}
                <span>Simulate Agent Pipeline</span>
              </button>
            </div>

            {/* Multi-step Visual Pipeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              
              {/* Step 1 */}
              <div className={`p-4 rounded-xl border transition-all ${
                agentStep >= 1 ? `bg-slate-950 ${config.cardHighlightBorder} shadow-sm` : 'bg-slate-950/40 border-slate-800 opacity-60'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono font-bold ${config.accentText}`}>STAGE 01</span>
                  {agentStep > 1 ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : agentStep === 1 ? (
                    <RefreshCw className={`w-3.5 h-3.5 animate-spin ${config.accentText}`} />
                  ) : null}
                </div>
                <h4 className="text-xs font-semibold text-slate-100">Multi-modal Ingestion</h4>
                <p className="text-[11px] text-slate-400 mt-1">
                  React Audio Worklet stream to FastAPI WebSocket STT parser.
                </p>
              </div>

              {/* Step 2 */}
              <div className={`p-4 rounded-xl border transition-all ${
                agentStep >= 2 ? `bg-slate-950 ${config.cardHighlightBorder} shadow-sm` : 'bg-slate-950/40 border-slate-800 opacity-60'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono font-bold ${config.accentText}`}>STAGE 02</span>
                  {agentStep > 2 ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : agentStep === 2 ? (
                    <RefreshCw className={`w-3.5 h-3.5 animate-spin ${config.accentText}`} />
                  ) : null}
                </div>
                <h4 className="text-xs font-semibold text-slate-100">LangGraph Router</h4>
                <p className="text-[11px] text-slate-400 mt-1">
                  Evaluates conditional intent edges & agent state transitions.
                </p>
              </div>

              {/* Step 3 */}
              <div className={`p-4 rounded-xl border transition-all ${
                agentStep >= 3 ? `bg-slate-950 ${config.cardHighlightBorder} shadow-sm` : 'bg-slate-950/40 border-slate-800 opacity-60'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono font-bold ${config.accentText}`}>STAGE 03</span>
                  {agentStep > 3 ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : agentStep === 3 ? (
                    <RefreshCw className={`w-3.5 h-3.5 animate-spin ${config.accentText}`} />
                  ) : null}
                </div>
                <h4 className="text-xs font-semibold text-slate-100">Llama 3.2 on Ollama</h4>
                <p className="text-[11px] text-slate-400 mt-1">
                  Local quantized reasoning. 0% external cloud data egress.
                </p>
              </div>

              {/* Step 4 */}
              <div className={`p-4 rounded-xl border transition-all ${
                agentStep >= 4 ? `bg-slate-950 ${config.cardHighlightBorder} shadow-sm` : 'bg-slate-950/40 border-slate-800 opacity-60'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono font-bold ${config.accentText}`}>STAGE 04</span>
                  {agentStep > 4 ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : agentStep === 4 ? (
                    <RefreshCw className={`w-3.5 h-3.5 animate-spin ${config.accentText}`} />
                  ) : null}
                </div>
                <h4 className="text-xs font-semibold text-slate-100">Tools: SQLite & Mailer</h4>
                <p className="text-[11px] text-slate-400 mt-1">
                  Executes DB commit and asynchronous notification triggers.
                </p>
              </div>

              {/* Step 5 */}
              <div className={`p-4 rounded-xl border transition-all ${
                agentStep >= 5 ? 'bg-slate-950 border-emerald-400/70 shadow-sm' : 'bg-slate-950/40 border-slate-800 opacity-60'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-emerald-400">STAGE 05</span>
                  {agentStep === 5 && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                </div>
                <h4 className="text-xs font-semibold text-slate-100">Voice Synthesis</h4>
                <p className="text-[11px] text-slate-400 mt-1">
                  Low-latency audio chunk streamed back to speaker.
                </p>
              </div>

            </div>

            {/* Output Transcript Box */}
            {agentStep >= 4 && (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 animate-in fade-in">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>AGENT RESPONSE STREAM</span>
                  <span className="text-emerald-400">COMPLETED IN 2.1s</span>
                </div>
                <div className="text-xs text-slate-200 leading-relaxed font-sans bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  &ldquo;I have scheduled the technical debrief for Friday at 4:00 PM. Record ID #8492 committed into local SQLite orders table. The notification dispatch has been routed to the AI engineering group.&rdquo;
                </div>
              </div>
            )}

          </div>
        )}

        {/* --- TAB 3: YOUTUBE RAG RETRIEVER --- */}
        {activeTab === 'rag' && (
          <div className={`rounded-2xl bg-slate-900/60 border ${config.cardHighlightBorder} p-6 sm:p-8 shadow-xl space-y-6 backdrop-blur-md`}>
            
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <FileText className={`w-5 h-5 ${config.accentText}`} />
                <span>YouTube RAG & Semantic Vector Search</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                yt-dlp Video Transcripts &bull; ChromaDB Vector Embeddings &bull; Google Gemini (gemini-3.6-flash) Synthesis
              </p>
            </div>

            {/* Search Input bar */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={ragQuery}
                  onChange={(e) => setRagQuery(e.target.value)}
                  placeholder="Ask any question about the video lecture..."
                  className={`w-full rounded-xl bg-slate-950 border border-slate-800 pl-10 pr-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:${config.accentBorder} focus:ring-1`}
                />
              </div>

              <button
                onClick={handleRunRag}
                disabled={ragProcessing}
                className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs transition-all cursor-pointer disabled:opacity-50 ${config.buttonPrimary}`}
              >
                {ragProcessing ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Database className="w-3.5 h-3.5" />
                )}
                <span>Retrieve & Summarize</span>
              </button>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              {/* Chroma Vector Matches */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Database className={`w-3.5 h-3.5 ${config.accentText}`} />
                    <span>ChromaDB Similarity Match</span>
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">
                    Score: {ragResult.topMatchScore} (Cosine)
                  </span>
                </div>
                <div className="text-xs text-slate-300 bg-slate-900/80 p-3 rounded-lg border border-slate-800/80 font-mono leading-relaxed">
                  {ragResult.extractedTranscriptSnippet}
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  Chunk ID: #yt_chunk_381 (Timestamp 14:22 - 15:40)
                </div>
              </div>

              {/* Gemini Synthesis & Export */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Sparkles className={`w-3.5 h-3.5 ${config.accentText}`} />
                    <span>Gemini 3.6 Flash Synthesis</span>
                  </span>
                  <span className={`text-[11px] font-mono ${config.accentText}`}>
                    PDF & Markdown Ready
                  </span>
                </div>
                <div className="text-xs text-slate-200 bg-slate-900/80 p-3 rounded-lg border border-slate-800/80 leading-relaxed font-sans">
                  {ragResult.geminiSummary}
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => {
                      const blob = new Blob([ragResult.geminiSummary], { type: 'text/plain' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = 'gemini-video-summary.txt';
                      a.click();
                      URL.revokeObjectURL(url);
                    }}
                    className="text-[11px] font-semibold text-slate-300 hover:text-white px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 cursor-pointer"
                  >
                    Download Summary (.txt)
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard?.writeText(ragResult.geminiSummary);
                    }}
                    className="text-[11px] font-semibold text-slate-300 hover:text-white px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 cursor-pointer"
                  >
                    Copy to Clipboard
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
