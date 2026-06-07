import { Injectable } from '@angular/core';
import { PersonalData, Project, Service, Skill } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private personalData: PersonalData = {
    name: "Siva Prakash Challa",
    title: "Full Stack Developer & Software Engineer",
    subtitle: "Building secure, intelligent, and scalable systems.",
    email: "challasivaprakash0@gmail.com",
    github: "https://github.com/ChallaSivaPrakash",
    linkedin: "https://www.linkedin.com/in/challa-sivaprakash/",
    about: "I am an early-career Software Engineer who bridges the gap between high-level AI-driven architecture and rigorous security engineering. With a strong engineering foundation in Cybersecurity, Cisco Networking, and enterprise Salesforce data optimization, I build robust, production-ready applications. Driven by a rigorous 'learn-by-building' mindset, I actively ship new projects, configure secure virtualization environments, and explore scalable AI infrastructure. Currently, I am expanding my system design expertise through a specialized Java Full Stack Development track while continuously mastering Data Structures and Algorithms (DSA) across Java and Python.",
    stats: [
      { label: "Projects Shipped", value: "6+" },
      { label: "Tech Stacks Deployments", value: "5+" },
      { label: "Cloud Certifications", value: "2" },
      { label: "DSA Foundations", value: "Java & Python" }
    ]
  };

  private skills: Skill[] = [
    { category: "Languages", items: ["Java", "Python", "JavaScript", "SQL"] },
    { category: "Full Stack & Frameworks", items: ["Node.js", "Express.js", "React", "Angular", "Java Spring Boot", "Flask", "MongoDB"] },
    { category: "AI & Automation", items: ["AI Agent Orchestration", "n8n Workflows", "RAG Pipelines", "Third-Party AI APIs"] },
    { category: "Enterprise & Data", items: ["Salesforce (Apex, SOQL)", "Flow Builder", "Mongoose Data Modeling"] },
    { category: "Security & Infrastructure", items: ["Kali Linux", "Cisco Networking", "Penetration Testing Concepts", "VirtualBox VM Config"] }
  ];

  private projects: Project[] = [
    {
      title: "AI E-Commerce Platform & Pentesting Lab",
      tagline: "Production-grade commerce engine architected for advanced AI integration and intentional security analysis.",
      stack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Bcrypt"],
      highlights: ["JWT authentication", "complex MongoDB schemas", "engineered IDOR flaws", "planned FastAPI + LangChain integration"],
      github: "https://github.com/ChallaSivaPrakash",
      accent: "#00ff9d",
      icon: "🛒",
      category: "Full Stack"
    },
    {
      title: "CareFlow HMS",
      tagline: "AI-augmented hospital management system built at an enterprise scale.",
      stack: ["Java", "Spring Boot", "Angular", "AI Agents", "REST APIs"],
      highlights: ["AI agents for clinical data", "type-safe Angular + Spring Boot APIs", "RBAC", "zero-leak state management"],
      github: "https://github.com/ChallaSivaPrakash/CareFlow-HMS.git",
      accent: "#00c8ff",
      icon: "🏥",
      category: "Full Stack + AI"
    },
    {
      title: "Hire-Hub-Tracker",
      tagline: "Full-stack recruitment application optimized for real-time lifecycle tracking.",
      stack: ["React", "Node.js", "Express.js", "MongoDB"],
      highlights: ["Responsive UI with dynamic sorting", "real-time tracking", "optimized queries"],
      github: "https://github.com/ChallaSivaPrakash/Hire-Hub-Tracker.git",
      accent: "#a855f7",
      icon: "📋",
      category: "Full Stack"
    },
    {
      title: "AI-Mock-Interview Platform",
      tagline: "Real-time technical interview simulator engineered through multi-model orchestration.",
      stack: ["Node.js", "Third-Party AI APIs", "WebSockets", "REST"],
      highlights: ["Multi-model calling", "resilient API error-handling", "automated evaluation", "session tracking"],
      github: "https://github.com/ChallaSivaPrakash/AI-Mock-Interview.git",
      accent: "#f59e0b",
      icon: "🤖",
      category: "AI / Automation"
    },
    {
      title: "AI-Job-Discovery-Bot",
      tagline: "Automated aggregation bot deploying version-controlled workflow filters.",
      stack: ["n8n", "Workflow Automation", "API Integration", "JSON Mapping"],
      highlights: ["Multi-channel ingestion", "Git versioning", "programmatic parsing", "reduced discovery time"],
      github: "https://github.com/ChallaSivaPrakash/AI-Job-Discovery-Bot.git",
      accent: "#10b981",
      icon: "🔍",
      category: "AI / Automation"
    },
    {
      title: "Healthcare Operations Optimization",
      tagline: "Enterprise cloud integration solution specializing in globalization standards.",
      stack: ["Salesforce", "Apex", "SOQL", "Flow Builder", "Flask"],
      highlights: ["Salesforce Globalization Certificate", "Agentforce Specialist", "custom Apex triggers", "Flask bridge tool"],
      github: "https://github.com/ChallaSivaPrakash/Healthcare-Optimization-Solution.git",
      accent: "#ec4899",
      icon: "⚕️",
      category: "Enterprise / Salesforce"
    }
  ];

  private services: Service[] = [
    { icon: "💻", title: "Website Development", description: "Custom-built websites tailored to your vision." },
    { icon: "🔎", title: "SEO Optimized", description: "Engineered for better visibility and higher rankings." },
    { icon: "🎨", title: "Modern Design", description: "Clean, contemporary UI that reflects your brand." },
    { icon: "📱", title: "Responsive", description: "Perfect experience across all devices and screen sizes." },
    { icon: "⚡", title: "Landing Pages", description: "High-converting pages built for impact and speed." }
  ];

  getPersonalData() { return this.personalData; }
  getSkills() { return this.skills; }
  getProjects() { return this.projects; }
  getServices() { return this.services; }
}
