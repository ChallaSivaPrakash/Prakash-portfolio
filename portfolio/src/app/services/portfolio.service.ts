import { Injectable } from '@angular/core';
import { Certification, PersonalData, Project, Service, Skill } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private personalData: PersonalData = {
    name: "Siva Prakash Challa",
    title: "Full-Stack & GenAI Engineer",
    subtitle: "Architecting secure, intelligent, and enterprise-scale multi-agent systems.",
    email: "challasivaprakash0@gmail.com",
    github: "https://github.com/ChallaSivaPrakash",
    linkedin: "https://www.linkedin.com/in/challa-sivaprakash/",
    about: "I am a Full-Stack & GenAI Engineer specializing in Agentic AI systems, RAG pipelines, and multi-agent orchestration across Python/FastAPI, Java/Spring Boot, and Angular/React stacks. I build production-grade AI platforms integrating LangGraph state machines, pgvector semantic search, and privacy-first local LLM deployments on Docker and AWS. Backed by a strong engineering foundation in Cybersecurity, JWT/RBAC microservices, and enterprise infrastructure, I design intelligent systems engineered for resilience, data compliance, and true scalability.",
    stats: [
      { label: "AI & Full-Stack Projects", value: "6+" },
      { label: "Vector & Relational DBs", value: "4" },
      { label: "Specialized Certifications", value: "9" },
      { label: "Core Frameworks", value: "Spring / FastAPI / Angular" }
    ]
  };

  private skills: Skill[] = [
    { category: "Languages", items: ["Java (OOP, Streams)", "Python (OOP, Scripting)", "JavaScript (ES6+)", "TypeScript", "SQL"] },
    { category: "Backend & Architecture", items: ["Spring Boot", "Spring Security (JWT/RBAC)", "JPA/Hibernate", "FastAPI", "Node.js", "Express.js", "RESTful APIs", "Async Workers"] },
    { category: "Frontend & UI", items: ["Angular 18", "React.js", "Next.js", "Three.js", "RxJS", "Reactive Forms", "Web UI/UX Optimization"] },
    { category: "Databases & Vectors", items: ["PostgreSQL (NeonDB)", "pgvector (Vector DB)", "MongoDB Atlas", "MySQL", "Redis"] },
    { category: "AI / ML Ecosystem", items: ["LangChain", "LangGraph", "Multi-Agent Orchestration", "RAG Pipelines", "Prompt Engineering", "TensorFlow", "OpenCV", "Embeddings"] },
    { category: "Tools & Infrastructure", items: ["Docker", "AWS (ECS/EC2)", "Maven", "Git/GitHub", "Postman", "CI/CD Pipelines", "Agile/Scrum"] }
  ];

  private projects: Project[] = [
    {
      title: "DermaVerse AI",
      tagline: "Stateful multi-agent skincare diagnostic platform running an end-to-end asynchronous processing pipeline.",
      stack: ["Angular 18", "FastAPI", "PostgreSQL", "pgvector", "LangGraph", "Llama 3", "Docker", "AWS ECS", "OpenCV", "TensorFlow"],
      highlights: [
        "Architected a stateful multi-agent workflow using LangGraph state machines and Llama 3 to autonomously parse dermatological OCR prescriptions.",
        "Implemented an advanced RAG pipeline using pgvector mapping 384-dimensional chemical embeddings for sub-second ingredient conflict detection.",
        "Built a strict-typed Angular 18 'Visual Consultation Engine' enforcing photo lighting protocols via CNN pre-processing (OpenCV/TensorFlow).",
        "Engineered an asynchronous backend with strict Pydantic payload validation and SQLAlchemy 2.0 ORM."
      ],
      marketDifferentiator: "Privacy-first local LLM deployment (Llama 3 via Docker/AWS ECS) completely eliminates third-party API dependencies—making DermaVerse HIPAA-aligned and production-safe for sensitive medical records.",
      github: "https://github.com/ChallaSivaPrakash/dermaverse-ai-platform.git",
      accent: "#00ff9d",
      icon: "🧪",
      category: "Generative AI + Full Stack"
    },
    {
      title: "CareFlow-HMS Patient Portal",
      tagline: "AI-driven enterprise portal with real-time multi-role scheduling and conversational health record integration.",
      stack: ["Java", "Spring Boot", "Angular 18", "Python", "LangChain", "MySQL", "Redis", "Docker", "AWS"],
      highlights: [
        "Engineered an agentic AI virtual receptionist utilizing stateful conversation memory and state machines to auto-book appointments via REST APIs.",
        "Architected JWT/RBAC-secured microservices coordinating a Spring Boot backend (20+ endpoints) and a Python FastAPI AI engine.",
        "Orchestrated the entire ecosystem via Docker Compose with integrated Redis caching layers and vector lookups.",
        "Configured robust CI/CD pipelines for automated unit testing and staged AWS deployment cloud infastructure."
      ],
      marketDifferentiator: "Stateful conversational triage with live EHR integration replacing traditional static form booking—completely eliminating manual scheduling bottlenecks and page reloads.",
      github: "https://github.com/ChallaSivaPrakash/CareFlow-HMS.git",
      accent: "#00c8ff",
      icon: "🏥",
      category: "Enterprise Full Stack"
    },
    {
      title: "Hire-Hub-Tracker",
      tagline: "Intelligent recruitment platform utilizing reactive 3D workflow canvas pipelines for interactive applicant mapping.",
      stack: ["React", "Next.js", "Node.js", "Express.js", "MongoDB Atlas", "Three.js", "Cloudinary"],
      highlights: [
        "Built fast RESTful pipeline APIs with MongoDB aggregation pipelines delivering instant recruiter velocity metrics and stage conversion rates.",
        "Deployed Three.js to construct interactive 3D candidate workflow visualizations, eliminating flat-table ATS system architectures.",
        "Integrated Cloudinary asset transformations for parsed candidate resumes and media assets, shifting compute away from the client."
      ],
      marketDifferentiator: "Replaces flat spreadsheet rows with an immersive 3D pipeline graph interface—a high-end visualization capability absent from standard tier software like Workable or Greenhouse.",
      github: "https://github.com/ChallaSivaPrakash/Hire-Hub-Tracker.git",
      accent: "#a855f7",
      icon: "📋",
      category: "Full Stack + Graphics"
    },
    
    {
      title: "AI-Mock-Interview Platform",
      tagline: "Real-time technical interview simulator engineered through multi-model orchestration.",
      stack: ["Node.js", "Third-Party AI APIs", "WebSockets", "REST"],
      highlights: [
        "Architected multi-model calling structures assessing candidate verbal responses dynamically.",
        "Built resilient connection error-handling structures preventing session dropped packages over WebSockets links."
      ],
      marketDifferentiator: "Provides adaptive questioning metrics that scale difficulty in real-time based on syntax execution accuracy indexes.",
      github: "https://github.com/ChallaSivaPrakash/AI-Mock-Interview.git",
      accent: "#10b981",
      icon: "🤖",
      category: "AI / Automation"
    },
    {
      title: "AI-Job-Discovery-Bot",
      tagline: "Automated aggregation bot deploying version-controlled workflow filters.",
      stack: ["n8n", "Workflow Automation", "API Integration", "JSON Mapping"],
      highlights: [
        "Configured complex conditional automation paths inside native n8n workflows for filtered career tracking data loops.",
        "Maintained structured version parameter tracking files natively mapping live endpoint scripts changes."
      ],
      marketDifferentiator: "Slashes manual tracking time constraints entirely by organizing targeted ingestion hooks down to dedicated delivery signals.",
      github: "https://github.com/ChallaSivaPrakash/AI-Job-Discovery-Bot.git",
      accent: "#ec4899",
      icon: "🔍",
      category: "AI / Automation"
    }
  ];

  private services: Service[] = [
    { icon: "🤖", title: "Agentic AI Development", description: "Designing multi-agent state machines, conversational memory, and LangGraph workflows." },
    { icon: "💻", title: "Full-Stack Engineering", description: "Building secure Spring Boot, FastAPI, and Angular enterprise microservices." },
    { icon: "🔍", title: "Vector Search & RAG", description: "Implementing semantic indexing pipelines via pgvector and dense embeddings." },
    { icon: "🔐", title: "Security Hardening", description: "Developing JWT/RBAC identity access parameters and running vulnerability tests." }
  ];

  private certifications: Certification[] = [
    {
      title: "Oracle Fusion AI Agent Studio Certified Foundations Associate",
      issuer: "Oracle University",
      credentialUrl: "https://drive.google.com/file/d/1vyghcEBhVCYTxhbObyqyuJzEaAj0c1f9/view",
      icon: "☁️",
      category: "GenAI & Cloud"
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Google Cloud",
      credentialUrl: "",
      icon: "☁️",
      category: "GenAI & Cloud"
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft & LinkedIn",
      credentialUrl: "",
      icon: "🧠",
      category: "GenAI & Cloud"
    },
    {
      title: "Java Full-Stack Developer Global Certificate (FSD73)",
      issuer: "TalentSprint",
      credentialUrl: "",
      icon: "☕",
      category: "Enterprise Full-Stack"
    },
    {
      title: "AI/ML Internship - Generative AI / LLM Practitioner",
      issuer: "AICTE & India Edu Program",
      credentialUrl: "https://drive.google.com/file/d/1NXwMAGg99ofOHVLW8dygt6FFxsYMlbbi/view?usp=drivesdk",
      icon: "🤖",
      category: "GenAI & Cloud"
    },
    {
      title: "Salesforce Certified Agentforce Specialist",
      issuer: "Sales Force",
      credentialUrl: "https://drive.google.com/file/d/1fUA0nMSHBvPfnauTn5erK4i-pLF-XO4f/view?usp=drivesdk",
      icon: "☁️",
      category: "GenAI & Cloud"
    },

    {
      title: "Cisco Cybersecurity ",
      issuer: "Cisco Networking Academy",
      credentialUrl: "https://drive.google.com/file/d/1BKweowRniYeTzuyAVLzUxHRbt7FqYkoK/view?usp=drivesdk",
      icon: "🛡️",
      category: "Cybersecurity"
    },
    {
      title: "Cisco Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      credentialUrl: "https://drive.google.com/file/d/134cnQHzlE8WBme8yF_PyQggXAPf2p4TW/view?usp=drivesdk",
      icon: "🛡️",
      category: "Cybersecurity"
    },
    {
      title: "Cisco Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      credentialUrl: "https://drive.google.com/file/d/1ce-i4g46MwKYXK6QcXwb5QZbsyYzVGcm/view?usp=drivesdk",
      icon: "🔐",
      category: "Cybersecurity"
    },
    {
      title: "Cisco Networking Essentials",
      issuer: "Cisco Networking Academy",
      credentialUrl: "https://drive.google.com/file/d/1H8ydgcj3mAruboeKY7RCikE2jVWmyk0n/view?usp=drivesdk",
      icon: "🌐",
      category: "Networking"
    },
    {
      title: "Cisco Introduction to Packet Tracer",
      issuer: "Cisco Networking Academy",
      credentialUrl: "https://drive.google.com/file/d/140Wn9w7pC2_AZciIJTGv1kYlQLayuJF3/view?usp=drivesdk",
      icon: "🗺️",
      category: "Networking"
    },
    {
      title: "JavaScript Essentials Certificate",
      issuer: "Cisco / JavaScript Institute",
      credentialUrl: "https://drive.google.com/file/d/17SsE7m9wWv_vjN9eXDtY3tArLz2hQBlc/view?usp=drivesdk",
      icon: "🟨",
      category: "Enterprise Full-Stack"
    },
    {
      title: "Network Security & NSE Framework Evaluation",
      issuer: "Fortinet",
      credentialUrl: "https://drive.google.com/file/d/1FfXIzQ81y3mbfcvQrj7yRbyL71b0u-1O/view?usp=drivesdk",
      icon: "🧱",
      category: "Cybersecurity"
    }
  ];

  getPersonalData() { return this.personalData; }
  getSkills() { return this.skills; }
  getProjects() { return this.projects; }
  getServices() { return this.services; }
  getCertifications() { return this.certifications; }
}