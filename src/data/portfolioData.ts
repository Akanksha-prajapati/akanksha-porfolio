import {
  Project,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  SkillCategory
} from '../types';

export const PERSONAL_INFO = {
  name: 'Akanksha Prajapati',
  headline: 'AI/ML Engineer & Software Developer',
  subheading: 'Building autonomous agentic pipelines, RAG architectures, and scalable ML backends with robust algorithmic foundations.',
  location: 'Noida, Uttar Pradesh, India',
  email: 'akankshaprajapati277@gmail.com',
  phone: '+91 9335280523',
  links: {
    github: 'https://github.com/akankshaprajapati',
    linkedin: 'https://linkedin.com/in/akankshaprajapati',
    leetcode: 'https://leetcode.com/akankshaprajapati',
    kaggle: 'https://kaggle.com/akankshaprajapati',
  },
  summary: 'Computer Science engineer graduating in 2026 with hands-on AI/ML industry internship experience and 500+ consecutive days of rigorous LeetCode problem-solving. Specialized in end-to-end GenAI systems (LangChain, LangGraph, Ollama, Gemini), vector search (ChromaDB, FAISS), and resilient API backends (FastAPI, Flask, PostgreSQL).',
  stats: [
    { label: 'LeetCode Streak', value: '500+ Days', detail: 'Consistent DSA mastery' },
    { label: 'AI/ML Systems', value: '3+ Flagship', detail: 'Agents, RAG & ML APIs' },
    { label: 'Records Processed', value: '5,000+', detail: 'In ML production pipelines' },
    { label: 'Inference Latency', value: '<15ms', detail: 'REST API model execution' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'nexus-voice-agent',
    title: 'Nexus AI Voice Agent',
    subtitle: 'Autonomous multi-modal voice & agentic workflow engine',
    date: '03/2026',
    category: 'Agentic AI',
    techStack: ['Python', 'FastAPI', 'React', 'LangChain', 'LangGraph', 'Ollama', 'Llama 3.2', 'SQLite'],
    description: 'An autonomous multi-modal AI agent supporting text, audio, and live voice interactions with 100% data privacy via local Llama 3.2 deployment.',
    bulletPoints: [
      'Engineered a fully autonomous AI agent supporting 3 input modes (text, audio, live voice) with real-time interaction and low latency.',
      'Deployed Llama 3.2 locally via Ollama, ensuring 100% data privacy and completely eliminating external API costs.',
      'Designed a multi-step decision-making engine using LangChain and LangGraph to orchestrate 3+ automated tool workflows.',
      'Built modular backend services in FastAPI enabling database transactions (SQLite), external API integrations, and email automation.',
    ],
    metrics: ['3 Input Modes', '100% Local Privacy', 'Sub-second Voice Response', '3+ Autonomous Tools'],
    featured: true,
    githubUrl: 'https://github.com/akankshaprajapati/nexus-ai-voice-agent',
    demoUrl: '#interactive-demo',
    architectureNotes: 'React Audio Worklet -> FastAPI WebSocket -> Whisper Local STT -> LangGraph Intent Router -> Llama 3.2 (Ollama) -> SQLite / Email Tool Execution -> Coqui TTS -> Audio Stream back to Client.',
    mockImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'youtube-rag',
    title: 'YouTube RAG - Video Intelligence',
    subtitle: 'Batch video processing, vector semantic search & AI synthesis',
    date: '09/2026',
    category: 'RAG & GenAI',
    techStack: ['Python', 'Streamlit', 'LangChain', 'Google Gemini', 'yt-dlp', 'ChromaDB', 'ReportLab'],
    description: 'A high-throughput video summarization and retrieval-augmented generation engine supporting single-video and batch CSV ingestion.',
    bulletPoints: [
      'Built an intuitive Streamlit UI supporting single-video queries and automated CSV-batch processing with live progress feedback.',
      'Integrated Google Gemini (gemini-3.6-flash) via LangChain to auto-generate structured summaries, timestamped notes, and Q&A.',
      'Implemented a RAG pipeline utilizing Chroma vector-store to embed transcript chunks for fast semantic retrieval.',
      'Added automated export of comprehensive PDF dossiers (using ReportLab) and Markdown reports for single and batch outputs.',
    ],
    metrics: ['ChromaDB Vector Store', 'Gemini 3.6 Flash', 'CSV Batch Pipeline', 'Automated PDF Export'],
    featured: true,
    githubUrl: 'https://github.com/akankshaprajapati/youtube-rag-intelligence',
    demoUrl: '#interactive-demo',
    architectureNotes: 'yt-dlp Audio/Subtitles -> RecursiveCharacterTextSplitter (chunk size 1000, overlap 150) -> ChromaDB Embeddings -> Semantic Similarity Search (top-k 4) -> Gemini 3.6 Flash Synthesis -> Streamlit + ReportLab PDF.',
    mockImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'spam-classifier',
    title: 'Spam-Classifier & Threat Detector',
    subtitle: 'Machine learning NLP classifier with serialized model & REST API',
    date: '03/2025',
    category: 'Machine Learning',
    techStack: ['Python', 'NLTK', 'Scikit-learn', 'Flask', 'TF-IDF', 'Naive Bayes'],
    description: 'Production-ready NLP spam detection system trained on 5,000+ real-world messages, serving real-time predictions via Flask REST API.',
    bulletPoints: [
      'Developed a high-precision spam classifier using ML + NLP (TF-IDF vectorizer, Multinomial Naive Bayes) on 5,000+ labeled messages.',
      'Built and deployed a Flask REST API for real-time spam detection with serialized joblib models and pre-computed vocabulary.',
      'Designed an accessible web interface enabling users to input text and receive instant classification probability and key signal analysis.',
      'Conducted extensive preprocessing including lemmatization, stop-word filtering, and punctuation weighting.',
    ],
    metrics: ['5,000+ Messages Dataset', 'Sub-15ms Latency', 'TF-IDF + Naive Bayes', 'Serialized Model Deployment'],
    featured: true,
    githubUrl: 'https://github.com/akankshaprajapati/spam-classifier-ml',
    demoUrl: '#interactive-demo',
    architectureNotes: 'Raw Text Input -> NLTK Tokenizer & Stemmer -> Scikit-learn TF-IDF Vectorizer -> Multinomial Naive Bayes Classifier -> Confidence Probabilities (Spam vs. Ham) -> Flask JSON Response.',
    mockImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'GNCIPL',
    role: 'AI / ML Intern',
    period: 'July 2025 – August 2025',
    location: 'Noida / Hybrid, India',
    type: 'Industry Internship (6 Weeks)',
    description: [
      'Completed an intensive 6-week AI-ML internship focusing on production model building and API integration with FastAPI and Flask.',
      'Processed and transformed 5K+ records using automated data cleaning and feature engineering pipelines to improve predictive model accuracy.',
      'Collaborated within an agile engineering team of 5, delivering robust REST endpoints, system debugging, and relational PostgreSQL workflows.',
      'Implemented serialization and health-check monitoring for deployed machine learning inference endpoints.',
    ],
    technologies: ['FastAPI', 'Flask', 'Python', 'PostgreSQL', 'Scikit-learn', 'REST APIs', 'Pandas', 'Git'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Dr. Ambedkar Institute of Technology for Divyangjan, U.P',
    degree: 'B.Tech in Computer Science and Engineering',
    period: '2022 – 2026',
    location: 'Kanpur, Uttar Pradesh',
    score: 'CGPA: 7.7',
    highlights: [
      'Core Coursework: Machine Learning, Data Structures & Algorithms, Object-Oriented Programming, Computer Networks, DBMS, Operating Systems',
      'Active contributor to departmental coding clubs and technical symposiums',
    ],
  },
  {
    institution: 'Adarsh Vidya Mandir Geeta Puram',
    degree: 'Class 12th CBSE Board Examination',
    period: 'Completed',
    location: 'Unnao, Uttar Pradesh',
    score: 'CBSE Science Stream (PCM)',
    highlights: [
      'Strong mathematical foundation and analytical science training',
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Earned LeetCode 500 Days Badge (2025)',
    issuer: 'LeetCode',
    date: '03/2026',
    badge: '500-Day Streak',
    description: 'Awarded for consistently solving algorithmic coding problems 500+ days a year, demonstrating steadfast discipline in data structures, dynamic programming, graphs, and system design.',
    skills: ['Data Structures & Algorithms', 'C++', 'Dynamic Programming', 'Graph Theory', 'Time/Space Optimization'],
  },
  {
    title: 'Certified in Data Science with Generative AI',
    issuer: 'Authorized Professional Certification',
    date: '01/2025',
    badge: 'GenAI Certified',
    description: 'Comprehensive curriculum covering probability, inferential statistics, machine learning, deep neural networks, computer vision, data visualization, and modern generative AI architectures.',
    skills: ['Generative AI', 'Deep Learning', 'PyTorch', 'Transformers', 'Data Visualization', 'Scikit-learn'],
  },
  {
    title: 'Certified in Data Structures and Algorithms using C++',
    issuer: 'Advanced Engineering Program',
    date: '01/2024',
    badge: 'C++ DSA',
    description: 'Strengthened core systems programming concepts, memory pointers, time-complexity analysis, and problem-solving through extensive hands-on C++ coding.',
    skills: ['C++', 'Pointers & Memory', 'Recursion', 'Trees & Heaps', 'Object-Oriented Design'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'AI, GenAI & NLP',
    skills: [
      { name: 'LangChain & LangGraph', level: 'Advanced' },
      { name: 'RAG Architectures', level: 'Advanced' },
      { name: 'Ollama & Local LLMs', level: 'Advanced' },
      { name: 'Google Gemini API', level: 'Advanced' },
      { name: 'Vector DBs (ChromaDB, FAISS)', level: 'Advanced' },
      { name: 'Scikit-learn & NLTK', level: 'Advanced' },
      { name: 'PyTorch & TensorFlow', level: 'Proficient' },
    ],
  },
  {
    category: 'Languages & Core CS',
    skills: [
      { name: 'Python (Primary)', level: 'Advanced' },
      { name: 'C++ (DSA 500+ Days)', level: 'Advanced' },
      { name: 'SQL', level: 'Advanced' },
      { name: 'TypeScript / JavaScript', level: 'Proficient' },
      { name: 'Java (Core)', level: 'Familiar' },
    ],
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'FastAPI', level: 'Advanced' },
      { name: 'Flask', level: 'Advanced' },
      { name: 'RESTful API Design', level: 'Advanced' },
      { name: 'PostgreSQL', level: 'Proficient' },
      { name: 'MongoDB & MySQL', level: 'Proficient' },
      { name: 'SQLite', level: 'Advanced' },
    ],
  },
  {
    category: 'Frontend & UI',
    skills: [
      { name: 'React.js', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'Motion Animations', level: 'Proficient' },
      { name: 'Streamlit', level: 'Advanced' },
      { name: 'HTML5 & Modern CSS', level: 'Advanced' },
    ],
  },
  {
    category: 'Tools, DevOps & Cloud',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced' },
      { name: 'Docker', level: 'Proficient' },
      { name: 'AWS Cloud', level: 'Proficient' },
      { name: 'Postman', level: 'Advanced' },
      { name: 'LangSmith', level: 'Proficient' },
      { name: 'Google Colab', level: 'Advanced' },
    ],
  },
  {
    category: 'Software Engineering & Practices',
    skills: [
      { name: 'System Design & Debugging', level: 'Advanced' },
      { name: 'Object-Oriented Programming (OOP)', level: 'Advanced' },
      { name: 'Data Structures & Algorithms', level: 'Advanced' },
      { name: 'Agile & Sprint Collaboration', level: 'Advanced' },
      { name: 'REST API Architecture', level: 'Advanced' },
      { name: 'Performance & Profiling', level: 'Advanced' },
    ],
  },
];
