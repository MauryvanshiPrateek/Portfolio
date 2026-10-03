export interface Project {
  slug: string;
  title: string;
  category: string;
  type: string;
  status: string;
  year: string;
  summary: string;
  oneLiner: string;
  tags: string[];
  problem?: string;
  solution?: string;
  features?: string[];
  stack?: string[];
  contribution?: string;
  results?: string[];
  limitations?: string[];
  futureScope?: string[];
  learned?: string[];
  demoUrl?: string;
  githubUrl?: string;
  levels?: {
    hr: string;
    developer: string;
    interviewer: string;
  };
}

export const projects: Project[] = [
  {
    slug: "jalrakshak",
    title: "JalRakshak",
    category: "HYDRODYNAMIC MODELLING",
    type: "SIH PROJECT / WORKING PROTOTYPE",
    status: "WORKING PROTOTYPE",
    year: "2024",
    oneLiner: "Dam-break inundation modelling using hydrodynamic simulation and GIS.",
    summary:
      "A simulation and spatial risk analysis system designed to calculate and visualize downstream inundation following simulated dam failure events, enabling proactive disaster planning.",
    tags: ["ANUGA", "GIS", "HYDRODYNAMICS", "PYTHON"],
    problem:
      "Dam-break events release catastrophic flood waves downstream in minutes. Disaster mitigation authorities often rely on static elevation estimates rather than dynamic hydrodynamic flood propagation models, creating severe blindspots in evacuation planning.",
    solution:
      "JalRakshak simulates realistic flood wave propagation across digital elevation models using ANUGA's shallow-water hydrodynamic solver, projecting inundation extent, depth, and arrival times mapped onto GIS layers.",
    contribution:
      "Team: domain research and spatial data collection. My role: built the simulation workflow from scratch, integrated elevation datasets into the hydrodynamic solver, and implemented the core system.",
    limitations: [
      "Currently requires pre-processed digital elevation models and calibrated dam cross-sections.",
      "High-resolution simulations are computationally intensive on standard workstations.",
    ],
    learned: [
      "Translating partial differential equations of shallow-water flow into mesh simulations.",
      "Handling geospatial data structures, coordinate reference systems (CRS), and raster elevation data.",
      "Balancing grid resolution with numerical solver stability and computational speed.",
    ],
    futureScope: [
      "Automated mesh generation directly from satellite elevation APIs.",
      "Real-time sensor telemetry integration for predictive water level triggering.",
    ],
    levels: {
      hr: "Simulates dam failure events to predict where water flows and help emergency teams evacuate people in time.",
      developer:
        "Runs Python-based ANUGA 2D hydrodynamic finite-volume solver over irregular triangular meshes to model non-linear shallow water equations.",
      interviewer:
        "Built to address non-linear boundary shocks in steep terrain. Evaluated trade-offs between 1D hydraulic routing and 2D triangular mesh discretization for shock-capturing inundation fronts.",
    },
    githubUrl: "https://github.com/MauryvanshiPrateek",
  },
  {
    slug: "stockpilot-ai",
    title: "StockPilot AI",
    category: "AI / PRODUCT / SOLO PROJECT",
    type: "AI / PRODUCT / SOLO PROJECT",
    status: "WORKING PROTOTYPE",
    year: "2024",
    oneLiner: "Conversational inventory management and low-stock alerting through WhatsApp.",
    summary:
      "An inventory tracking system that removes the friction of complex POS dashboards for small retailers by enabling conversational stock queries, updates, and automated alerts directly inside WhatsApp.",
    tags: ["WHATSAPP API", "PYTHON", "AI ASSISTANT", "INVENTORY LOGIC"],
    problem:
      "Small retailers and wholesalers frequently avoid structured inventory software because desktop interfaces and multi-screen ERPs disrupt daily store counter operations. As a result, critical stockouts happen unnoticed.",
    solution:
      "StockPilot AI meets the merchant where they already spend their day: WhatsApp. The assistant parses plain conversational messages to log incoming stock, record sales, answer availability questions, and trigger minimum-stock warnings.",
    contribution:
      "Solo project: designed and developed the entire conversational state handler, inventory logic, database schemas, and WhatsApp webhook integration.",
    limitations: [
      "The current prototype operates around a single-device workflow and is not yet designed for multi-user deployment at scale.",
      "Conversational parsing relies on structured prompt templates rather than a fine-tuned domain parser.",
    ],
    learned: [
      "Designing conversational state machines that withstand incomplete or ambiguous human inputs.",
      "Webhook architecture, message queueing, and asynchronous response handling.",
      "Structuring transactional data tables for instantaneous query response over conversational channels.",
    ],
    futureScope: [
      "Multi-tenant tenancy support with role-based permissions for cashier vs owner.",
      "Automated vendor reorder drafts triggered directly upon reaching safety stock thresholds.",
    ],
    levels: {
      hr: "Allows shopkeepers to manage their stock and receive low-inventory alerts using simple WhatsApp messages.",
      developer:
        "Built with Python webhook handlers interfacing with messaging APIs, SQLite/PostgreSQL transactional storage, and conversational rule matching.",
      interviewer:
        "Prioritized accessibility over complex UI. The primary engineering challenge was handling asynchronous out-of-order WhatsApp webhook deliveries while maintaining atomic stock quantity decrements.",
    },
    githubUrl: "https://github.com/MauryvanshiPrateek",
  },
  {
    slug: "crop-intelligence",
    title: "Crop Intelligence",
    category: "AGRI-TECH / DATA",
    type: "AGRI-TECH / DATA",
    status: "WORKING PROTOTYPE",
    year: "2024",
    oneLiner: "Crop and intercrop recommendations based on soil, weather and location telemetry.",
    summary:
      "An agricultural decision support platform that combines live weather conditions, soil profile parameters, and intercropping agronomy rules to suggest resilient crop pairings for smallholder farmers.",
    tags: ["PYTHON", "AGRI-DATA", "SOIL API", "RECOMMENDER"],
    problem:
      "Monoculture farming and ill-timed planting without soil compatibility insights lead to reduced yields and depleted soil nutrients. Most small farmers lack accessible localized agronomic guidance.",
    solution:
      "Aggregates geographic coordinate data, API-driven soil properties, and seasonal weather telemetry to recommend primary crops alongside complementary intercrops that naturally restore soil nitrogen and maximize land yield.",
    contribution:
      "Developed the parameter integration pipeline, integrated soil API telemetry, and authored the intercropping heuristic decision rules.",
    limitations: [
      "Currently relies on third-party soil API resolutions which can be coarse in remote rural regions.",
      "Intercropping recommendations are currently heuristic-driven based on regional crop matrices.",
    ],
    learned: [
      "Integrating heterogeneous environmental telemetry into unified feature vectors.",
      "Understanding agricultural constraint optimization (seasonality, water availability, companion planting).",
    ],
    futureScope: [
      "Training specialized ML models on localized regional harvest datasets.",
      "Offline-first mobile application with vernacular voice interface.",
    ],
    levels: {
      hr: "Suggests the best crops and companion plants for farmers based on their location, soil type, and weather.",
      developer:
        "Telemetry ingestion pipeline built in Python pulling geo-coordinates, querying soil and climate APIs, and matching against agronomic matrix constraints.",
      interviewer:
        "Designed to test multi-variable decision heuristics with incomplete environmental telemetry. Balanced strict agronomic safety constraints against local crop economic feasibility.",
    },
    githubUrl: "https://github.com/MauryvanshiPrateek",
  },
  {
    slug: "predictor",
    title: "Predictor",
    category: "NLP / EXPERIMENT",
    type: "EXPERIMENT / NLP",
    status: "EXPERIMENT",
    year: "2023",
    oneLiner: "A next-word prediction experiment built for learning and experimentation with NLP.",
    summary:
      "A sequence prediction model trained on benchmark text datasets, implemented with an interactive Streamlit testing interface to explore sequence tokenization and probability distributions.",
    tags: ["PYTHON", "NLP", "SEQUENCE PREDICTION", "STREAMLIT"],
    problem:
      "Understanding how tokenization, n-gram contexts, and recurrent neural representations influence sequence likelihood in language modeling.",
    solution:
      "Engineered text preprocessing, token embedding, and sequence prediction pipeline with an interactive demo allowing real-time next-token probability inspection.",
    contribution:
      "Solo learning experiment: dataset preprocessing, tokenization, model training experiments, and Streamlit demo interface.",
    limitations: [
      "Built as a learning experiment on a limited corpus; vocabulary is constrained.",
      "Architecture reports ~87–88% training accuracy on the benchmark sequence dataset, but does not generalize to open-domain generative context.",
    ],
    learned: [
      "Tokenization strategies, vocabulary pruning, and padding trade-offs.",
      "Categorical cross-entropy loss behavior over large vocabulary projection layers.",
      "Evaluating sequence models using perplexity and top-k categorical accuracy.",
    ],
    futureScope: [
      "Experimentation with transformer self-attention mechanisms and modern tokenizers.",
    ],
    levels: {
      hr: "A machine learning project that predicts the next word in a sentence as you type.",
      developer:
        "Trained sequence prediction model evaluated against Kaggle corpus, wrapped in Streamlit with temperature controls.",
      interviewer:
        "Structured as an exploration into sequence modeling fundamentals: analyzed how context window length impacts categorical cross-entropy during sequential token generation.",
    },
    githubUrl: "https://github.com/MauryvanshiPrateek",
  },
  {
    slug: "cyberwar",
    title: "CyberWar",
    category: "CYBERSECURITY / CONCEPT",
    type: "CONCEPT / IN DEVELOPMENT",
    status: "CONCEPT / IN DEVELOPMENT",
    year: "2024",
    oneLiner: "A red-team vs blue-team virtual cybersecurity simulation environment.",
    summary:
      "An architectural design for a virtual testbed where simulated offensive security maneuvers meet defensive intrusion detection and log analysis.",
    tags: ["CYBERSECURITY", "NETWORK SECURITY", "SIMULATION", "CONCEPT"],
    problem:
      "Practical defensive training requires safe sandboxes where attack vectors and detection telemetry can be observed in real time without endangering production networks.",
    solution:
      "Designed a dual-agent environment architecture: a Red Team attack dispatch module and a Blue Team monitor capturing event logs, packet traces, and rule-based anomaly detection.",
    contribution:
      "System concept design, network topology diagramming, and threat simulation workflow architecture.",
    limitations: [
      "Currently in conceptual architecture and specification phase; not yet deployed as an automated emulation lab.",
    ],
    learned: [
      "Network packet inspection principles and MITRE ATT&CK matrix mapping.",
      "Structuring isolated virtualization topologies for adversarial testing.",
    ],
    futureScope: [
      "Dockerized container orchestrator for automated scenario provisioning.",
      "AI-driven Blue Team anomaly scoring pipeline.",
    ],
    levels: {
      hr: "A conceptual training environment comparing cybersecurity attacks with automated defenses.",
      developer:
        "Architectural blueprint pairing attack scenarios against defensive log monitoring and SIEM event streams.",
      interviewer:
        "Exploration into defensive telemetry collection: modeling adversarial MITRE ATT&CK tactics in isolated environments to evaluate detection latency.",
    },
    githubUrl: "https://github.com/MauryvanshiPrateek",
  },
];
