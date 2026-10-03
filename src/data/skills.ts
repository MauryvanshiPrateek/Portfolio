export interface Skill {
  name: string;
  category: "AI / ML" | "Data" | "Development" | "Systems / Tools";
  usedIn: string;
  focus?: string;
}

export const skillCategories = [
  "AI / ML",
  "Data",
  "Development",
  "Systems / Tools",
] as const;

export const skillsData: Skill[] = [
  // AI / ML
  {
    name: "Machine Learning",
    category: "AI / ML",
    usedIn: "JalRakshak, Crop Intelligence, Predictor",
    focus: "Supervised algorithms, evaluation metrics, pipeline design",
  },
  {
    name: "Deep Learning",
    category: "AI / ML",
    usedIn: "Predictor, academic coursework & models",
    focus: "Neural networks, optimization, loss functions",
  },
  {
    name: "Natural Language Processing",
    category: "AI / ML",
    usedIn: "Predictor, text preprocessing pipelines",
    focus: "Tokenization, sequence modeling, vocabulary handling",
  },
  {
    name: "Generative AI & LLM Systems",
    category: "AI / ML",
    usedIn: "StockPilot AI conversational workflows",
    focus: "Prompt orchestration, conversational state, assistant UX",
  },

  // Data
  {
    name: "Python",
    category: "Data",
    usedIn: "Core language across all projects & TPC automation",
    focus: "Data manipulation, backend logic, computational scripting",
  },
  {
    name: "Pandas & NumPy",
    category: "Data",
    usedIn: "Crop Intelligence, TPC records, research data",
    focus: "Tabular data cleaning, vector operations, telemetry processing",
  },
  {
    name: "Data Analysis",
    category: "Data",
    usedIn: "TPC placement analytics, agricultural metrics",
    focus: "Statistical summarization, structured reports, discrepancy audit",
  },
  {
    name: "SQL",
    category: "Data",
    usedIn: "Student placement records, relational schema design",
    focus: "Relational queries, aggregations, data integrity constraints",
  },

  // Development
  {
    name: "Streamlit",
    category: "Development",
    usedIn: "Predictor interactive demo, rapid prototyping",
    focus: "Interactive ML dashboards, parameter controls, rapid deployment",
  },
  {
    name: "APIs & Webhooks",
    category: "Development",
    usedIn: "StockPilot AI (WhatsApp), Crop Intelligence (Soil/Weather)",
    focus: "REST endpoints, async webhook payloads, integration resilience",
  },
  {
    name: "JavaScript & TypeScript",
    category: "Development",
    usedIn: "Portfolio system, interactive web tools",
    focus: "Component architecture, strict typing, responsive interactions",
  },
  {
    name: "HTML & CSS",
    category: "Development",
    usedIn: "Modern web interfaces, portfolio styling",
    focus: "Semantic markup, custom design token architectures, layout",
  },
  {
    name: "Git & GitHub",
    category: "Development",
    usedIn: "Version control across all software repositories",
    focus: "Branch management, clean commit logs, open source practices",
  },

  // Systems / Tools
  {
    name: "GIS & Spatial Data",
    category: "Systems / Tools",
    usedIn: "JalRakshak flood extent mapping",
    focus: "Coordinate reference systems, raster elevation models, spatial overlays",
  },
  {
    name: "Hydrodynamic Modelling",
    category: "Systems / Tools",
    usedIn: "JalRakshak (ANUGA 2D solver)",
    focus: "Shallow-water equations, triangular mesh resolution, shock fronts",
  },
  {
    name: "Data Processing Pipelines",
    category: "Systems / Tools",
    usedIn: "TPC student records & agro-telemetry ingestion",
    focus: "ETL pipelines, normalization, verification workflows",
  },
  {
    name: "Deployment & Systems",
    category: "Systems / Tools",
    usedIn: "Web prototypes, portfolio deployment",
    focus: "Vercel, container concepts, production builds",
  },
];
