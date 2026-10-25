export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  category: 'AI & Data' | 'Web Development' | 'System & Utilities';
  status: 'Completed' | 'In Development' | 'Concept & Prototype';
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  completionDate: string;
  verificationUrl: string;
  credentialId?: string;
  skillsCovered: string[];
}

export interface SkillItem {
  name: string;
  category: 'Programming Languages' | 'Web & Database' | 'AI & Cloud' | 'Tools & Version Control';
  learningStage: 'Active Practice' | 'Foundational' | 'Currently Exploring';
  notes: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Aditya Kumar',
    heroHeadline: "Hi, I'm Aditya Kumar",
    heroRole: 'BCA Student & Aspiring Developer',
    title: 'BCA Student | Aspiring Software Developer',
    subtitle: 'Learning, building, and growing in the world of technology.',
    shortIntro:
      "I'm a BCA student passionate about technology, programming, artificial intelligence, and cloud computing. I enjoy learning new skills and building projects to improve my development experience.",
    college: 'Christ Academy Institute for Advanced Studies',
    location: 'Bengaluru, India',
    email: 'kumaraditya69592@gmail.com',
    github: 'https://github.com/adityakumar23-code',
    linkedin: 'https://www.linkedin.com/in/aditya-kumar-992a93381',
  },
  about: {
    mainText:
      'I am currently pursuing a Bachelor of Computer Applications (BCA) at Christ Academy Institute for Advanced Studies in Bengaluru, India. My journey in technology centers on understanding computer science fundamentals, writing clean code, and applying theoretical concepts to practical software solutions.',
    secondaryText:
      'I spend my time exploring programming languages like Python, C, and Java, working with SQL databases, and understanding modern domains such as Artificial Intelligence and Cloud Computing. I believe that building projects, participating in hands-on experiments, and continuous learning are the most effective ways to develop genuine engineering skills.',
    education: {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Christ Academy Institute for Advanced Studies',
      location: 'Bengaluru, Karnataka, India',
      status: 'Undergraduate Student',
    },
    values: [
      {
        title: 'Strong Fundamentals',
        description: 'Focusing on core programming logic, structured problem solving, and computer science concepts.',
      },
      {
        title: 'Hands-on Learning',
        description: 'Translating academic coursework into functional software utilities and web applications.',
      },
      {
        title: 'Emerging Technologies',
        description: 'Actively learning prompt engineering, AI frameworks, and modern cloud deployment workflows.',
      },
    ],
  },
  skills: [
    {
      name: 'Python',
      category: 'Programming Languages',
      learningStage: 'Active Practice',
      notes: 'Scripting, problem solving, logic building, and AI explorations',
    },
    {
      name: 'C Programming',
      category: 'Programming Languages',
      learningStage: 'Foundational',
      notes: 'Pointers, memory concepts, structures, and low-level algorithmic thinking',
    },
    {
      name: 'Java',
      category: 'Programming Languages',
      learningStage: 'Active Practice',
      notes: 'Object-Oriented Programming (OOP), modular architecture, and console apps',
    },
    {
      name: 'SQL',
      category: 'Web & Database',
      learningStage: 'Active Practice',
      notes: 'Relational schema design, queries, joins, and data manipulation',
    },
    {
      name: 'HTML and CSS',
      category: 'Web & Database',
      learningStage: 'Active Practice',
      notes: 'Semantic page structure, responsive layouts, and clean interfaces',
    },
    {
      name: 'Git and GitHub',
      category: 'Tools & Version Control',
      learningStage: 'Active Practice',
      notes: 'Version control, repository management, commits, and collaborative workflows',
    },
    {
      name: 'Artificial Intelligence',
      category: 'AI & Cloud',
      learningStage: 'Currently Exploring',
      notes: 'Core AI concepts, generative tools, and intelligent application design',
    },
    {
      name: 'Prompt Engineering',
      category: 'AI & Cloud',
      learningStage: 'Active Practice',
      notes: 'Structured prompting techniques, iterative refining, and model alignment',
    },
    {
      name: 'Cloud Computing',
      category: 'AI & Cloud',
      learningStage: 'Currently Exploring',
      notes: 'Cloud service models (IaaS/PaaS/SaaS), deployment pipelines, and hosting basics',
    },
  ] as SkillItem[],
  projects: [
    {
      id: 'ai-odyssey',
      title: 'AI Odyssey',
      tagline: 'Explorations in artificial intelligence and prompt workflows',
      description:
        'A dedicated exploratory project focusing on practical implementations of artificial intelligence, structured prompt engineering workflows, and integrating generative capabilities into real-world student tasks.',
      technologies: ['Python', 'Artificial Intelligence', 'Prompt Engineering'],
      githubUrl: 'https://github.com/adityakumar23-code',
      category: 'AI & Data',
      status: 'In Development',
    },
    {
      id: 'carbontrack',
      title: 'CarbonTrack',
      tagline: 'Sustainability analysis & environmental impact dashboard',
      description:
        'A clean web application concept designed to calculate, analyze, and visualize personal and institutional carbon footprint metrics, providing actionable insights for environmental sustainability.',
      technologies: ['HTML and CSS', 'JavaScript', 'SQL'],
      githubUrl: 'https://github.com/adityakumar23-code',
      category: 'Web Development',
      status: 'Concept & Prototype',
    },
    {
      id: 'gameforge',
      title: 'GameForge',
      tagline: 'Interactive gaming platform concept and score tracker',
      description:
        'A modular web gaming platform concept for lightweight browser-based games, featuring structured player profile tracking, score management, and game logic implementation.',
      technologies: ['Java', 'HTML and CSS', 'SQL', 'Git and GitHub'],
      githubUrl: 'https://github.com/adityakumar23-code',
      category: 'Web Development',
      status: 'Concept & Prototype',
    },
    {
      id: 'password-manager',
      title: 'Password Manager',
      tagline: 'Lightweight utility for safe credential storage',
      description:
        'A secure credential management utility designed with a focus on data privacy, safe master key authentication, entropy-based password generation, and fundamental storage security.',
      technologies: ['Python', 'C Programming'],
      githubUrl: 'https://github.com/adityakumar23-code',
      category: 'System & Utilities',
      status: 'In Development',
    },
    {
      id: 'college-canteen-ordering',
      title: 'College Canteen Ordering System',
      tagline: 'Queue coordination & pre-ordering for campus cafeterias',
      description:
        'A streamlined digital ordering and queue management system designed specifically for Christ Academy campus dining, aimed at reducing break-time congestion and organizing kitchen order tickets.',
      technologies: ['Java', 'SQL', 'HTML and CSS'],
      githubUrl: 'https://github.com/adityakumar23-code',
      category: 'Web Development',
      status: 'In Development',
    },
  ] as ProjectItem[],
  certificates: [
    {
      id: 'ibm-prompt-engineering',
      title: 'Prompt Engineering for Everyone',
      issuer: 'IBM Developer Skills Network / Cognitive Class',
      completionDate: 'October 19, 2026',
      verificationUrl:
        'https://courses.cognitiveclass.ai/certificates/3d8685bc9f114c459d7c230f900716b9',
      credentialId: '3d8685bc9f114c459d7c230f900716b9',
      skillsCovered: [
        'Prompt Design Techniques',
        'Generative AI Principles',
        'Iterative Model Steering',
        'Cognitive Class / IBM Verification',
      ],
    },
    {
      id: 'claude-ai-fluency',
      title: 'AI Fluency Framework Foundations',
      issuer: 'Claude Academy',
      completionDate: 'October 2026',
      verificationUrl:
        'https://academy.claude.com/verify/26db7e57d2c78233af8d7bcb0001becf',
      credentialId: '26db7e57d2c78233af8d7bcb0001becf',
      skillsCovered: [
        'AI Literacy & Reasoning',
        'Framework Foundations',
        'Practical AI Application',
        'Claude Academy Verification',
      ],
    },
  ] as CertificateItem[],
};
