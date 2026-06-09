export interface Career {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  skills: string[];
  averageSalary: string;
  growth: string;
  education: string;
  topCompanies: string[];
  dailyTasks: string[];
  pros: string[];
  cons: string[];
  icon: string;
}

export const careers: Career[] = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    category: "Technology",
    icon: "💻",
    shortDescription: "Design, build and maintain software systems used by millions.",
    description:
      "Software engineers apply engineering principles to design, develop, test and maintain software applications. They work across web, mobile, infrastructure and AI.",
    skills: ["JavaScript", "Data Structures", "System Design", "Git", "Problem Solving"],
    averageSalary: "$95,000 – $180,000",
    growth: "+22% (much faster than average)",
    education: "Bachelor's in CS or equivalent experience",
    topCompanies: ["Google", "Microsoft", "Meta", "Stripe", "Shopify"],
    dailyTasks: [
      "Writing and reviewing code",
      "Designing technical solutions",
      "Collaborating in stand-ups",
      "Fixing bugs and improving performance",
    ],
    pros: ["High salary", "Remote-friendly", "Strong demand", "Creative problem solving"],
    cons: ["Constant learning required", "Can be sedentary", "On-call rotations"],
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    category: "Data & AI",
    icon: "📊",
    shortDescription: "Turn raw data into insights and predictive models.",
    description:
      "Data scientists combine statistics, programming and domain knowledge to extract insights from data and build machine learning models that drive decisions.",
    skills: ["Python", "Statistics", "SQL", "Machine Learning", "Communication"],
    averageSalary: "$110,000 – $200,000",
    growth: "+35% (much faster than average)",
    education: "Bachelor's/Master's in CS, Stats, Math",
    topCompanies: ["Netflix", "Airbnb", "Uber", "OpenAI", "Spotify"],
    dailyTasks: [
      "Cleaning and exploring datasets",
      "Building ML models",
      "Presenting findings to stakeholders",
      "A/B test analysis",
    ],
    pros: ["High impact", "Intellectually challenging", "Great pay"],
    cons: ["80% data cleaning", "Ambiguous problems", "Heavy math"],
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    category: "Design",
    icon: "🎨",
    shortDescription: "Craft intuitive, delightful product experiences.",
    description:
      "UX designers research users, design flows, and prototype interfaces that balance business goals with human needs.",
    skills: ["Figma", "User Research", "Prototyping", "Information Architecture", "Empathy"],
    averageSalary: "$80,000 – $150,000",
    growth: "+13% (faster than average)",
    education: "Bachelor's in Design, HCI, or self-taught portfolio",
    topCompanies: ["Apple", "Figma", "Airbnb", "Linear", "Notion"],
    dailyTasks: [
      "User interviews",
      "Wireframing and prototyping",
      "Design reviews",
      "Usability testing",
    ],
    pros: ["Creative work", "Human-centered", "Cross-functional"],
    cons: ["Subjective feedback", "Slow career ladder in some orgs"],
  },
  {
    id: "product-manager",
    title: "Product Manager",
    category: "Business",
    icon: "🚀",
    shortDescription: "Define what to build, why, and for whom.",
    description:
      "Product managers sit at the intersection of business, tech and design. They own the product roadmap and translate user needs into shipped features.",
    skills: ["Strategy", "Communication", "Analytics", "Prioritization", "Leadership"],
    averageSalary: "$120,000 – $220,000",
    growth: "+19%",
    education: "Bachelor's in any field; MBA optional",
    topCompanies: ["Google", "Stripe", "Atlassian", "Notion", "Linear"],
    dailyTasks: [
      "Writing PRDs",
      "Talking to customers",
      "Prioritizing the backlog",
      "Aligning stakeholders",
    ],
    pros: ["High influence", "Strategic work", "Strong comp"],
    cons: ["Responsibility without authority", "Lots of meetings"],
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    category: "Technology",
    icon: "🛡️",
    shortDescription: "Defend systems and data from cyber threats.",
    description:
      "Cybersecurity analysts monitor, detect and respond to security incidents while hardening systems against future attacks.",
    skills: ["Networking", "Linux", "SIEM tools", "Threat Modeling", "Incident Response"],
    averageSalary: "$90,000 – $160,000",
    growth: "+32% (much faster than average)",
    education: "Bachelor's in CS/IT, certifications (Sec+, CEH, OSCP)",
    topCompanies: ["Crowdstrike", "Palo Alto", "Cloudflare", "IBM", "Google"],
    dailyTasks: [
      "Monitoring alerts",
      "Incident response",
      "Vulnerability scans",
      "Security training",
    ],
    pros: ["High demand", "Mission-driven", "Remote-friendly"],
    cons: ["On-call stress", "High stakes", "Burnout risk"],
  },
  {
    id: "cloud-engineer",
    title: "Cloud Engineer",
    category: "Technology",
    icon: "☁️",
    shortDescription: "Build scalable infrastructure on AWS, GCP, Azure.",
    description:
      "Cloud engineers design and operate distributed systems and infrastructure-as-code, ensuring reliability, security and cost-efficiency.",
    skills: ["AWS/GCP/Azure", "Terraform", "Kubernetes", "Linux", "CI/CD"],
    averageSalary: "$110,000 – $190,000",
    growth: "+25%",
    education: "Bachelor's in CS; cloud certifications",
    topCompanies: ["Amazon", "Google Cloud", "Microsoft", "Datadog", "HashiCorp"],
    dailyTasks: [
      "Designing infrastructure",
      "Writing Terraform",
      "Cost optimization",
      "Incident response",
    ],
    pros: ["Critical role", "Great pay", "Remote-friendly"],
    cons: ["On-call", "Steep learning curve"],
  },
  {
    id: "ml-engineer",
    title: "Machine Learning Engineer",
    category: "Data & AI",
    icon: "🤖",
    shortDescription: "Ship ML models into real-world production systems.",
    description:
      "ML engineers bridge data science and software engineering — taking models from notebook to scalable production services.",
    skills: ["Python", "PyTorch/TensorFlow", "MLOps", "Distributed Systems", "Math"],
    averageSalary: "$130,000 – $260,000",
    growth: "+40%",
    education: "Bachelor's/Master's in CS or ML",
    topCompanies: ["OpenAI", "Anthropic", "Google", "Meta", "Nvidia"],
    dailyTasks: [
      "Training and evaluating models",
      "Building data pipelines",
      "Deploying inference services",
      "Monitoring drift",
    ],
    pros: ["Cutting edge", "Top-tier salaries", "High impact"],
    cons: ["Highly competitive", "Heavy math", "Fast-moving field"],
  },
  {
    id: "digital-marketer",
    title: "Digital Marketer",
    category: "Business",
    icon: "📈",
    shortDescription: "Grow brands through SEO, content and paid media.",
    description:
      "Digital marketers plan and execute campaigns across search, social and email to drive measurable business growth.",
    skills: ["SEO", "Analytics", "Copywriting", "Paid Ads", "Content Strategy"],
    averageSalary: "$60,000 – $130,000",
    growth: "+10%",
    education: "Bachelor's in Marketing/Comms or self-taught",
    topCompanies: ["HubSpot", "Shopify", "Canva", "Ahrefs", "Buffer"],
    dailyTasks: [
      "Running ad campaigns",
      "Analyzing funnels",
      "Producing content",
      "A/B testing landing pages",
    ],
    pros: ["Creative", "Measurable impact", "Many remote roles"],
    cons: ["Algorithm changes", "Always-on", "Crowded field"],
  },
];

export const categories = Array.from(new Set(careers.map((c) => c.category)));
