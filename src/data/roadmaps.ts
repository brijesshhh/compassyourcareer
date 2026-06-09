export interface RoadmapStep {
  title: string;
  topics: string[];
  resources: { label: string; url: string }[];
}

export interface Roadmap {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  steps: RoadmapStep[];
}

export const roadmaps: Roadmap[] = [
  {
    id: "frontend",
    title: "Frontend Developer",
    tagline: "Build beautiful, performant interfaces for the web.",
    icon: "🎨",
    duration: "6–9 months",
    difficulty: "Beginner",
    steps: [
      {
        title: "Web Fundamentals",
        topics: ["HTML5", "CSS3", "Semantic markup", "Responsive design"],
        resources: [
          { label: "MDN Web Docs", url: "https://developer.mozilla.org" },
          { label: "web.dev", url: "https://web.dev" },
        ],
      },
      {
        title: "JavaScript Deep Dive",
        topics: ["ES6+", "Async/Await", "DOM", "Modules", "TypeScript basics"],
        resources: [
          { label: "javascript.info", url: "https://javascript.info" },
          { label: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/" },
        ],
      },
      {
        title: "React Ecosystem",
        topics: ["React", "Hooks", "State management", "React Router", "TanStack Query"],
        resources: [
          { label: "React Docs", url: "https://react.dev" },
          { label: "TanStack", url: "https://tanstack.com" },
        ],
      },
      {
        title: "Tooling & Performance",
        topics: ["Vite", "Testing", "Lighthouse", "Accessibility", "Deployment"],
        resources: [{ label: "Vite", url: "https://vitejs.dev" }],
      },
    ],
  },
  {
    id: "backend",
    title: "Backend Developer",
    tagline: "Design APIs, databases and the systems that power the web.",
    icon: "⚙️",
    duration: "8–12 months",
    difficulty: "Intermediate",
    steps: [
      {
        title: "Programming & CS Basics",
        topics: ["Python/Node/Go", "Data Structures", "Algorithms", "OOP"],
        resources: [{ label: "Roadmap.sh Backend", url: "https://roadmap.sh/backend" }],
      },
      {
        title: "Databases",
        topics: ["SQL", "PostgreSQL", "Indexing", "Redis", "ORMs"],
        resources: [{ label: "PostgreSQL Docs", url: "https://www.postgresql.org/docs/" }],
      },
      {
        title: "APIs & Architecture",
        topics: ["REST", "GraphQL", "Auth", "Caching", "Microservices"],
        resources: [],
      },
      {
        title: "DevOps Essentials",
        topics: ["Docker", "CI/CD", "Linux", "Monitoring", "Cloud basics"],
        resources: [],
      },
    ],
  },
  {
    id: "data-science",
    title: "Data Science",
    tagline: "From statistics to production ML.",
    icon: "📊",
    duration: "10–14 months",
    difficulty: "Advanced",
    steps: [
      {
        title: "Math & Stats",
        topics: ["Linear algebra", "Probability", "Statistics", "Calculus basics"],
        resources: [{ label: "Khan Academy", url: "https://khanacademy.org" }],
      },
      {
        title: "Python for Data",
        topics: ["NumPy", "Pandas", "Matplotlib", "Jupyter"],
        resources: [],
      },
      {
        title: "Machine Learning",
        topics: ["Scikit-learn", "Regression", "Classification", "Model evaluation"],
        resources: [{ label: "fast.ai", url: "https://fast.ai" }],
      },
      {
        title: "Deep Learning & MLOps",
        topics: ["PyTorch", "Transformers", "Deployment", "Monitoring"],
        resources: [],
      },
    ],
  },
  {
    id: "devops",
    title: "DevOps Engineer",
    tagline: "Automate, deploy and scale modern infrastructure.",
    icon: "🛠️",
    duration: "8–12 months",
    difficulty: "Intermediate",
    steps: [
      {
        title: "Linux & Networking",
        topics: ["Shell", "Networking", "DNS", "HTTP"],
        resources: [],
      },
      {
        title: "Containers & Orchestration",
        topics: ["Docker", "Kubernetes", "Helm"],
        resources: [{ label: "Kubernetes Docs", url: "https://kubernetes.io/docs/" }],
      },
      {
        title: "Infrastructure as Code",
        topics: ["Terraform", "Ansible", "GitOps"],
        resources: [],
      },
      {
        title: "Observability",
        topics: ["Prometheus", "Grafana", "Logging", "Tracing"],
        resources: [],
      },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Developer",
    tagline: "Ship iOS and Android apps people love.",
    icon: "📱",
    duration: "6–9 months",
    difficulty: "Beginner",
    steps: [
      {
        title: "Choose Your Stack",
        topics: ["React Native", "Flutter", "Swift", "Kotlin"],
        resources: [],
      },
      {
        title: "App Fundamentals",
        topics: ["Navigation", "State", "Storage", "Networking"],
        resources: [],
      },
      {
        title: "Native Features",
        topics: ["Camera", "Geolocation", "Push notifications", "Offline"],
        resources: [],
      },
      {
        title: "Distribution",
        topics: ["App Store", "Play Store", "Crash reporting", "Analytics"],
        resources: [],
      },
    ],
  },
];
