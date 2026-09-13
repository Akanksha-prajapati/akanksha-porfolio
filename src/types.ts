export interface Project {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  category: 'Agentic AI' | 'RAG & GenAI' | 'Machine Learning' | 'Web & Systems';
  techStack: string[];
  description: string;
  bulletPoints: string[];
  githubUrl?: string;
  demoUrl?: string;
  metrics: string[];
  featured: boolean;
  architectureNotes?: string;
  mockImage?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  score?: string;
  highlights?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  badge?: string;
  description: string;
  skills: string[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Familiar';
    iconName?: string;
  }[];
}
