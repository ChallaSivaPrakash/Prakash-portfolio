export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  tagline: string;
  stack: string[];
  highlights: string[];
  marketDifferentiator: string; 
  github: string;
  accent: string;
  icon: string;
  category: string;
  image?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  credentialUrl: string;
  icon: string;
  category: 'GenAI & Cloud' | 'Cybersecurity' | 'Networking' | 'Enterprise Full-Stack';
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface PersonalData {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  github: string;
  linkedin: string;
  about: string;
  stats: {
    label: string;
    value: string;
  }[];
}
