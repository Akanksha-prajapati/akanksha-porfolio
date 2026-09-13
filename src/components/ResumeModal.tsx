import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Code2, 
  Award,
  Check
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl my-6 flex flex-col max-h-[92vh] overflow-hidden text-neutral-200">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/70">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Curriculum Vitae &bull; Akanksha Prajapati
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-neutral-100 bg-neutral-800/80 rounded-lg hover:bg-neutral-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Container */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-white text-neutral-900 font-sans print:p-0">
          
          {/* Resume Header */}
          <div className="text-center border-b border-neutral-300 pb-5 mb-6">
            <h1 className="font-serif-display text-3xl font-bold tracking-tight text-neutral-950">
              Akanksha Prajapati
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-neutral-700 mt-2 font-mono">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-neutral-900" />
                +91 9335280523
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-neutral-900" />
                akankshaprajapati277@gmail.com
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-neutral-900" />
                Noida, Uttar Pradesh
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-neutral-700 mt-1 font-mono">
              <a href={PERSONAL_INFO.links.github} target="_blank" rel="noreferrer" className="text-amber-800 hover:underline">
                GitHub
              </a>
              <span>&bull;</span>
              <a href={PERSONAL_INFO.links.linkedin} target="_blank" rel="noreferrer" className="text-amber-800 hover:underline">
                LinkedIn
              </a>
              <span>&bull;</span>
              <a href={PERSONAL_INFO.links.leetcode} target="_blank" rel="noreferrer" className="text-amber-800 hover:underline">
                LeetCode (500+ Days)
              </a>
              <span>&bull;</span>
              <a href={PERSONAL_INFO.links.kaggle} target="_blank" rel="noreferrer" className="text-amber-800 hover:underline">
                Kaggle
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-400 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-neutral-900 text-sm">
                    Dr. Ambedkar Institute of Technology for Divyangjan, U.P
                  </div>
                  <div className="text-neutral-700">
                    B.Tech in Computer Science | CGPA: 7.7
                  </div>
                </div>
                <div className="text-right text-neutral-600 font-mono">
                  <div>Kanpur</div>
                  <div>2022 – 2026</div>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-neutral-900">
                    Class 12th CBSE BOARD
                  </div>
                  <div className="text-neutral-700">
                    Adarsh Vidya Mandir Geeta Puram, Unnao
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-400 pb-1 mb-3">
              Experience
            </h2>
            <div className="text-xs">
              <div className="flex justify-between items-baseline mb-1">
                <div className="font-bold text-neutral-900 text-sm">
                  GNCIPL - AI/ML Intern
                </div>
                <div className="font-mono text-neutral-600">
                  July 2025 – Aug 2025
                </div>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-neutral-700">
                <li>Completed a 6-week AI-ML internship, focusing on model building and API integration with FastAPI/Flask.</li>
                <li>Processed 5K+ records using data cleaning and feature engineering to improve model accuracy.</li>
                <li>Worked in a team of 5, contributing to REST APIs, debugging, and PostgreSQL workflows.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-400 pb-1 mb-3">
              Projects
            </h2>
            <div className="space-y-4 text-xs">
              
              {/* Spam Classifier */}
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <div className="font-bold text-neutral-900">
                    Spam-Classifier | <span className="font-normal font-mono">Python, NLTK, Scikit-learn, Flask</span>
                  </div>
                  <div className="font-mono text-neutral-600">03/2025</div>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-0.5 text-neutral-700">
                  <li>Developed a spam classifier using ML + NLP (TF-IDF, Naive Bayes) on 5,000+ messages.</li>
                  <li>Built and deployed a Flask REST API for real-time spam detection with serialized model and vectorizer.</li>
                  <li>Designed a simple web interface enabling users to input text and get instant classification results.</li>
                </ul>
              </div>

              {/* YouTube RAG */}
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <div className="font-bold text-neutral-900">
                    YouTube RAG | <span className="font-normal font-mono">Python, Streamlit, LangChain, Google Gemini, yt-dlp, reportlab</span>
                  </div>
                  <div className="font-mono text-neutral-600">09/2026</div>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-0.5 text-neutral-700">
                  <li>Built a Streamlit UI for single-video and CSV-batch processing with live progress feedback.</li>
                  <li>Integrated Google Gemini (gemini-3.6-flash) via LangChain to auto-generate summaries and notes.</li>
                  <li>Implemented a RAG pipeline using Chroma vector-store to embed transcript chunks for fast semantic retrieval.</li>
                  <li>Added export of PDF (reportlab) and Markdown for single and batch results.</li>
                </ul>
              </div>

              {/* Nexus AI Voice Agent */}
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <div className="font-bold text-neutral-900">
                    Nexus AI Voice Agent | <span className="font-normal font-mono">Python, FastAPI, React, LangChain, Ollama</span>
                  </div>
                  <div className="font-mono text-neutral-600">03/2026</div>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-0.5 text-neutral-700">
                  <li>Engineered a fully autonomous AI agent supporting 3 input modes (text, audio, live voice) with real-time interaction.</li>
                  <li>Deployed Llama 3.2 locally via Ollama, ensuring 100% data privacy and eliminating external API costs.</li>
                  <li>Designed a decision-making engine using LangChain/LangGraph to execute 3+ automated workflows.</li>
                  <li>Built modular backend services enabling database operations (SQLite), API integration, and email automation.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Key Skills */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-400 pb-1 mb-3">
              Key Skills
            </h2>
            <div className="space-y-1.5 text-xs text-neutral-700">
              <div><strong className="text-neutral-900">Languages:</strong> Python, C++, SQL, Java (basic)</div>
              <div><strong className="text-neutral-900">Backend:</strong> FastAPI, Flask, RESTful APIs</div>
              <div><strong className="text-neutral-900">Frontend:</strong> React.js, JavaScript, HTML, CSS</div>
              <div><strong className="text-neutral-900">Databases:</strong> PostgreSQL, MongoDB, MySQL, Vector Databases, FAISS, ChromaDB</div>
              <div><strong className="text-neutral-900">Tools & Deployment:</strong> Git, GitHub, Postman, AWS, Docker, Google Colab, Antigravity, Google AI Studio, LangSmith</div>
              <div><strong className="text-neutral-900">Libraries/Frameworks:</strong> Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, TensorFlow, PyTorch, RAG, LLM, GenAI, Agentic AI, LangChain, LangGraph</div>
              <div><strong className="text-neutral-900">Soft Skills:</strong> Teamwork, Problem-Solving, Leadership, Communication, Time Management</div>
              <div><strong className="text-neutral-900">Coursework:</strong> Machine Learning, Data Structures & Algorithms, Object-Oriented Programming, Computer Networks, DBMS, Operating Systems</div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-400 pb-1 mb-3">
              Certifications & Badges
            </h2>
            <div className="space-y-2.5 text-xs">
              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-neutral-900">
                    Earned LeetCode 500 Days Badge (2025)
                  </div>
                  <div className="font-mono text-neutral-600">03/2026</div>
                </div>
                <div className="text-neutral-700 pl-4">
                  &bull; Awarded for solving coding problems 500+ days a year, demonstrating consistency in DSA practice.
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-neutral-900">
                    Certified in Data Science with Generative AI
                  </div>
                  <div className="font-mono text-neutral-600">01/2025</div>
                </div>
                <div className="text-neutral-700 pl-4">
                  &bull; Covered comprehensive concepts including statistics, machine learning, deep learning, data visualization, and generative AI models.
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-neutral-900">
                    Certified in Data Structures and Algorithms using C++
                  </div>
                  <div className="font-mono text-neutral-600">01/2024</div>
                </div>
                <div className="text-neutral-700 pl-4">
                  &bull; Strengthened core programming concepts and problem-solving skills through hands-on coding.
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-neutral-800 bg-neutral-950/70 flex justify-between items-center text-xs text-neutral-400">
          <span>Akanksha Prajapati &bull; Noida, India</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
