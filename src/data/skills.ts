export type SkillCategory = 
  | "LANGUAGES"
  | "AI / ML"
  | "ROBOTICS & CV"
  | "WEB, CLOUD & DATA";

export interface SkillItem {
  name: string;
  category: SkillCategory;
  x: number; // Percentage X
  y: number; // Percentage Y
  sizeWeight: number; // relative font size multiplier: 0.8 to 1.7
  usedIn: string;
  focus: string;
}

export const CATEGORY_COLORS: Record<SkillCategory, { text: string; glow: string; dot: string; bg: string }> = {
  "LANGUAGES": {
    text: "#93C5FD", // sky blue
    glow: "rgba(147, 197, 253, 0.6)",
    dot: "#60A5FA",
    bg: "rgba(96, 165, 250, 0.15)",
  },
  "AI / ML": {
    text: "#D8B4FE", // purple / lavender
    glow: "rgba(216, 180, 254, 0.6)",
    dot: "#C084FC",
    bg: "rgba(192, 132, 252, 0.15)",
  },
  "ROBOTICS & CV": {
    text: "#5EEAD4", // turquoise / teal aqua
    glow: "rgba(94, 234, 212, 0.6)",
    dot: "#2DD4BF",
    bg: "rgba(45, 212, 191, 0.15)",
  },
  "WEB, CLOUD & DATA": {
    text: "#FDBA74", // warm peach / amber
    glow: "rgba(253, 186, 116, 0.6)",
    dot: "#FB923C",
    bg: "rgba(251, 146, 60, 0.15)",
  },
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  "LANGUAGES",
  "AI / ML",
  "ROBOTICS & CV",
  "WEB, CLOUD & DATA",
];

// All skills positioned in an expansive celestial orbit around Goku
export const ALL_SKILLS: SkillItem[] = [
  // ── Top Arch (above Goku) ──
  {
    name: "OpenAI API",
    category: "AI / ML",
    x: 48,
    y: 12,
    sizeWeight: 1.25,
    usedIn: "StockPilot AI conversational commerce engine",
    focus: "Tool calling, embeddings, function orchestration & context memory",
  },
  {
    name: "AI agent design",
    category: "AI / ML",
    x: 56,
    y: 15,
    sizeWeight: 1.6,
    usedIn: "StockPilot AI, multi-step autonomous workflows",
    focus: "ReAct patterns, planning loops, error recovery & state graphs",
  },
  {
    name: "Computer vision",
    category: "ROBOTICS & CV",
    x: 40,
    y: 18,
    sizeWeight: 0.95,
    usedIn: "Crop Intelligence, real-time spatial analysis",
    focus: "Feature extraction, edge detection, camera calibration",
  },
  {
    name: "HTML/CSS",
    category: "LANGUAGES",
    x: 64,
    y: 18,
    sizeWeight: 0.9,
    usedIn: "Interactive portfolio, responsive web architectures",
    focus: "Modern CSS tokens, animations, semantic accessibility",
  },
  {
    name: "C++",
    category: "LANGUAGES",
    x: 72,
    y: 20,
    sizeWeight: 1.15,
    usedIn: "High-performance computational algorithms & solvers",
    focus: "Memory management, algorithmic optimization, data structures",
  },

  // ── Left Flank (wide left of Goku) ──
  {
    name: "Intel RealSense (RGB-D fusion)",
    category: "ROBOTICS & CV",
    x: 23,
    y: 27,
    sizeWeight: 1.25,
    usedIn: "Robotics vision & 3D point-cloud spatial mapping",
    focus: "Depth stream alignment, point cloud filtering, spatial telemetry",
  },
  {
    name: "MediaPipe (hand/pose tracking)",
    category: "ROBOTICS & CV",
    x: 28,
    y: 33,
    sizeWeight: 1.1,
    usedIn: "Interactive vision gesture control prototypes",
    focus: "Landmark regression, 33-keypoint body kinematic tracking",
  },
  {
    name: "PyObjC (macOS integration)",
    category: "ROBOTICS & CV",
    x: 20,
    y: 39,
    sizeWeight: 1.7,
    usedIn: "Native macOS hardware automation & window controllers",
    focus: "Cocoa APIs, Objective-C runtime bridge, accessibility hooks",
  },
  {
    name: "NumPy",
    category: "WEB, CLOUD & DATA",
    x: 26,
    y: 45,
    sizeWeight: 1.05,
    usedIn: "JalRakshak, telemetry matrices & scientific computing",
    focus: "Vectorized operations, broadcasting, numerical array math",
  },
  {
    name: "Pandas",
    category: "WEB, CLOUD & DATA",
    x: 18,
    y: 51,
    sizeWeight: 1.55,
    usedIn: "TPC student records analysis & agricultural metrics",
    focus: "Dataframe transformations, aggregation pipelines, ETL cleaning",
  },
  {
    name: "Streamlit",
    category: "WEB, CLOUD & DATA",
    x: 27,
    y: 57,
    sizeWeight: 0.9,
    usedIn: "Predictor ML demo application & internal dashboards",
    focus: "Rapid ML prototyping, interactive parameter widgets, data apps",
  },
  {
    name: "Jupyter",
    category: "WEB, CLOUD & DATA",
    x: 19,
    y: 64,
    sizeWeight: 0.95,
    usedIn: "Model exploratory data analysis & research notebooks",
    focus: "Interactive visualization, experiment validation, exploratory EDA",
  },
  {
    name: "FastAPI",
    category: "WEB, CLOUD & DATA",
    x: 22,
    y: 72,
    sizeWeight: 1.55,
    usedIn: "StockPilot AI backend & inference endpoints",
    focus: "Asynchronous routes, Pydantic schemas, high-throughput microservices",
  },
  {
    name: "OpenCV",
    category: "ROBOTICS & CV",
    x: 30,
    y: 68,
    sizeWeight: 1.0,
    usedIn: "Crop leaf disease detection, camera preprocessing",
    focus: "Color space masking, contour detection, morphological transforms",
  },

  // ── Right Flank (wide right of Goku) ──
  {
    name: "Prompt engineering",
    category: "AI / ML",
    x: 74,
    y: 28,
    sizeWeight: 0.95,
    usedIn: "Production LLM system prompts & few-shot chains",
    focus: "CoT reasoning, structured output schemas, jailbreak safeguards",
  },
  {
    name: "JavaScript",
    category: "LANGUAGES",
    x: 82,
    y: 33,
    sizeWeight: 0.9,
    usedIn: "Interactive web applications & frontend state",
    focus: "ESNext standards, asynchronous I/O, event dispatching",
  },
  {
    name: "Python",
    category: "LANGUAGES",
    x: 76,
    y: 39,
    sizeWeight: 1.4,
    usedIn: "Core language across ML, hydrodynamic modeling & backend",
    focus: "Object-oriented design, async concurrency, scientific tooling",
  },
  {
    name: "Kotlin",
    category: "LANGUAGES",
    x: 84,
    y: 43,
    sizeWeight: 1.2,
    usedIn: "Modern Android client engineering & mobile tooling",
    focus: "Coroutines, Jetpack Compose, clean domain architecture",
  },
  {
    name: "Object detection",
    category: "AI / ML",
    x: 75,
    y: 49,
    sizeWeight: 1.7,
    usedIn: "Crop leaf anomaly segmentation & vision pipelines",
    focus: "YOLO architectures, bounding box regression, mAP optimization",
  },
  {
    name: "LLM integration",
    category: "AI / ML",
    x: 83,
    y: 55,
    sizeWeight: 0.95,
    usedIn: "StockPilot AI conversational WhatsApp integration",
    focus: "Streaming responses, function dispatch, conversational memory",
  },
  {
    name: "Java",
    category: "LANGUAGES",
    x: 76,
    y: 61,
    sizeWeight: 0.9,
    usedIn: "Enterprise backend foundations & Android SDK",
    focus: "OOP paradigms, JVM memory lifecycle, design patterns",
  },
  {
    name: "MATLAB",
    category: "LANGUAGES",
    x: 84,
    y: 67,
    sizeWeight: 0.9,
    usedIn: "Simulink dynamic simulations & matrix engineering",
    focus: "Control systems, signals, mathematical modeling",
  },
  {
    name: "C#",
    category: "LANGUAGES",
    x: 75,
    y: 71,
    sizeWeight: 0.9,
    usedIn: "Cross-platform .NET tooling & Unity simulations",
    focus: "LINQ expressions, type safety, async tasks",
  },
  {
    name: "SQL",
    category: "LANGUAGES",
    x: 83,
    y: 74,
    sizeWeight: 1.1,
    usedIn: "TPC student relational database & placement data",
    focus: "Complex aggregations, indexing, relational constraints",
  },
  {
    name: "scikit-learn",
    category: "AI / ML",
    x: 76,
    y: 79,
    sizeWeight: 1.6,
    usedIn: "Predictor ML classification pipelines & regression models",
    focus: "Feature scaling, random forests, cross-validation, confusion metrics",
  },

  // ── Lower Area (below Goku controls) ──
  {
    name: "OCR (Tesseract)",
    category: "ROBOTICS & CV",
    x: 32,
    y: 79,
    sizeWeight: 1.5,
    usedIn: "Document digitization & student record extraction",
    focus: "Text bounding detection, image thresholding, multi-lingual OCR",
  },
  {
    name: "Vision language models (VLMs)",
    category: "AI / ML",
    x: 41,
    y: 84,
    sizeWeight: 0.85,
    usedIn: "Multimodal visual reasoning & screenshot comprehension",
    focus: "Cross-attention vision encoders, visual question answering",
  },
  {
    name: "AWS",
    category: "WEB, CLOUD & DATA",
    x: 48,
    y: 84,
    sizeWeight: 0.85,
    usedIn: "Cloud deployment, serverless triggers & object storage",
    focus: "EC2, S3 bucket management, IAM security boundaries",
  },
  {
    name: "Flask",
    category: "WEB, CLOUD & DATA",
    x: 55,
    y: 84,
    sizeWeight: 0.85,
    usedIn: "Lightweight ML prototype serving & microservices",
    focus: "REST endpoints, CORS headers, rapid backend dispatch",
  },
  {
    name: "Neural networks",
    category: "AI / ML",
    x: 62,
    y: 84,
    sizeWeight: 0.9,
    usedIn: "Deep learning models, CNNs for vision classification",
    focus: "Backpropagation, activation functions, loss surface convergence",
  },
  {
    name: "Docker",
    category: "WEB, CLOUD & DATA",
    x: 30,
    y: 89,
    sizeWeight: 0.9,
    usedIn: "Reproducible container deployments for solvers & apps",
    focus: "Dockerfile multi-stage builds, container isolation, networking",
  },
  {
    name: "Git/GitHub",
    category: "WEB, CLOUD & DATA",
    x: 40,
    y: 91,
    sizeWeight: 1.05,
    usedIn: "Version control across all production repositories",
    focus: "Git workflows, branch rebase, CI/CD GitHub Actions",
  },
  {
    name: "Supabase (Postgres)",
    category: "WEB, CLOUD & DATA",
    x: 50,
    y: 91,
    sizeWeight: 1.15,
    usedIn: "StockPilot AI real-time inventory & chat state storage",
    focus: "Row-level security, realtime subscriptions, relational indexing",
  },
  {
    name: "Model evaluation & testing",
    category: "AI / ML",
    x: 65,
    y: 89,
    sizeWeight: 1.25,
    usedIn: "Validation protocols across JalRakshak & Crop AI",
    focus: "Precision/Recall tradeoff, ROC-AUC, out-of-distribution audits",
  },
  {
    name: "React",
    category: "WEB, CLOUD & DATA",
    x: 45,
    y: 96,
    sizeWeight: 1.7,
    usedIn: "Component architecture for production web interfaces",
    focus: "Hooks lifecycle, virtual DOM reconciliation, state machines",
  },
  {
    name: "TypeScript",
    category: "LANGUAGES",
    x: 55,
    y: 96,
    sizeWeight: 1.4,
    usedIn: "Full typed safety across frontends & backend contracts",
    focus: "Generics, Discriminated Unions, strict type inference",
  },
];

// Compatibility exports
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

export const skillsData: Skill[] = ALL_SKILLS.map((s) => ({
  name: s.name,
  category:
    s.category === "AI / ML"
      ? "AI / ML"
      : s.category === "WEB, CLOUD & DATA"
      ? "Data"
      : s.category === "LANGUAGES"
      ? "Development"
      : "Systems / Tools",
  usedIn: s.usedIn,
  focus: s.focus,
}));
