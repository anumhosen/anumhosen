export const projectsData = [
  {
    id: "dataswitch",
    title: "DataSwitch",
    category: "Database & Desktop",
    status: "In Progress",
    logoIcon: "FaDatabase",
    shortDesc: "Universal cross-database manager, schema inspector, and multi-engine migration pipeline.",
    fullDesc: "Universal cross-database manager and data migrator featuring automated schema inspection, live data transfer pipelines, and visual query verification across heterogeneous engines.",
    problemSolved: "Developers working across different databases (SQLite, MongoDB, PostgreSQL, MySQL) face fragmented tooling and tedious data conversion. DataSwitch provides a unified native GUI to migrate, sync, and inspect heterogeneous databases without third-party cloud intermediaries.",
    features: [
      "Zero-latency local synchronization between SQLite, MongoDB, PostgreSQL, and MySQL",
      "Automated schema mapping and type inference across relational and document structures",
      "Live migration progress monitor with batching and transaction rollback safety",
      "Low-memory desktop execution powered by Tauri and Rust native bindings"
    ],
    architecture: "Desktop UI (React/Tailwind) communicates via asynchronous IPC commands to a Rust backend core running native SQL/NoSQL connection pools with streaming batch transformers.",
    technologies: ["Tauri", "Rust", "React", "SQLite", "MongoDB", "PostgreSQL"],
    githubUrl: "https://github.com/anumhosen/dataswitch",
    demoUrl: "https://github.com/anumhosen/dataswitch",
    featured: true,
    accent: "from-sky-400 to-cyan-600",
    badge: "Multi-Database"
  },
  {
    id: "llama-server",
    title: "Llama Server",
    category: "AI & Tools",
    status: "In Progress",
    logoIcon: "FaBrain",
    shortDesc: "High-performance local AI model serving platform with custom streaming HTTP APIs.",
    fullDesc: "Platform for running, managing, and querying local Large Language Models with zero cloud dependency and custom API endpoints.",
    problemSolved: "Cloud LLM APIs incur ongoing costs, high latency, and privacy compliance risks. Llama Server delivers local GGUF model execution with hardware acceleration and OpenAI-compatible endpoints directly on consumer GPUs/CPUs.",
    features: [
      "OpenAI-compatible /v1/chat/completions endpoint for drop-in client tool integration",
      "Hardware-accelerated C++ inference engine with quantized model support (GGUF)",
      "Interactive local dashboard for prompt tuning, temperature control, and memory monitoring",
      "Zero telemetry ensuring proprietary data never leaves the host machine"
    ],
    architecture: "C++ inference runtime wrapped with Python/Tauri IPC service exposing an asynchronous event loop for concurrent token streaming.",
    technologies: ["Python", "C++", "Tauri", "React", "REST API"],
    githubUrl: "https://github.com/anumhosen/llama-server",
    demoUrl: "https://github.com/anumhosen/llama-server",
    featured: true,
    accent: "from-cyan-500 to-blue-600",
    badge: "Local AI Engine"
  },
  {
    id: "sonic-browser",
    title: "Sonic Browser",
    category: "Desktop",
    status: "In Progress",
    logoIcon: "FaGlobe",
    shortDesc: "Custom web browser engineered for productivity, ad filtering, and automated scraping.",
    fullDesc: "Specialized desktop web browser built with Electron and modern web technologies, packed with built-in productivity workflows, ad filtering, and automated scraping utilities.",
    problemSolved: "Standard commercial browsers consume massive RAM and lack built-in developer scraping and tab workflows. Sonic Browser unites efficient browsing with built-in data extraction and privacy shields.",
    features: [
      "Native DOM scraper and data table exporter (JSON/CSV) without external plugins",
      "Integrated ad and tracking blocker reducing payload and network latency",
      "Split-view productivity tabs with persistent workspace state recovery",
      "Configurable proxy tunneling and user-agent emulation for testing"
    ],
    architecture: "Electron multi-process model: secure Main Process orchestrating Chromium WebContents, sandboxed preload IPC bridges, and a custom React control UI.",
    technologies: ["Electron", "JavaScript", "Node.js", "Tailwind", "Chromium"],
    githubUrl: "https://github.com/anumhosen/sonic-browser",
    demoUrl: "https://github.com/anumhosen/sonic-browser",
    featured: true,
    accent: "from-blue-500 to-indigo-600",
    badge: "Browser Architecture"
  },
  {
    id: "gromacs-gui",
    title: "GROMACS GUI",
    category: "Scientific & Desktop",
    status: "Research",
    logoIcon: "FaMicroscope",
    shortDesc: "Graphical desktop wrapper for molecular dynamics simulations and trajectory monitoring.",
    fullDesc: "Intuitive graphical interface for running complex GROMACS commands, parameter tuning, energy minimization, and trajectory monitoring without manual CLI friction.",
    problemSolved: "Running GROMACS requires memorizing dozens of CLI parameters and shell scripts. GROMACS GUI eliminates configuration errors by providing an intuitive visual setup for simulation stages.",
    features: [
      "Visual parameter builder for energy minimization, NVT, and NPT MDP configuration files",
      "Real-time terminal execution output streaming with error diagnostic detection",
      "Integrated simulation status tracker displaying elapsed steps and GPU utilization",
      "One-click pipeline execution on Linux workstations"
    ],
    architecture: "Desktop UI generates validated GROMACS MDP scripts and spawns supervised background subprocesses with realtime stdout/stderr streaming.",
    technologies: ["Python", "Electron", "GROMACS", "Linux", "Data Viz"],
    githubUrl: "https://github.com/anumhosen/gromacs-gui",
    demoUrl: "https://github.com/anumhosen/gromacs-gui",
    featured: true,
    accent: "from-teal-400 to-blue-500",
    badge: "Computational Physics"
  },
  {
    id: "al-quran-app",
    title: "Al Quran App",
    category: "Desktop",
    status: "Completed",
    logoIcon: "FaBookOpen",
    shortDesc: "Offline-first cross-platform desktop application with search indexing and audio playback.",
    fullDesc: "Offline-first desktop Quran application with Ayah bookmarking, translations, search indexing, and audio recitation playback with a clean distraction-free UI.",
    problemSolved: "Many religious desktop tools require constant internet connectivity. This application provides a fully offline, high-speed indexed reader with multi-language search.",
    features: [
      "100% offline database storage using embedded SQLite",
      "Fast full-text search across Surahs, Ayahs, and translated commentaries",
      "Audio recitation playback with bookmarking and progress recovery",
      "Clean distraction-free dark UI engineered with Tailwind and Tauri"
    ],
    architecture: "Tauri Rust core serving local SQLite queries to a responsive React front-end with native offline audio streaming.",
    technologies: ["Tauri", "React", "SQLite", "Tailwind", "Audio Engine"],
    githubUrl: "https://github.com/anumhosen/al-quran-app",
    demoUrl: "https://github.com/anumhosen/al-quran-app",
    featured: false,
    accent: "from-emerald-500 to-cyan-600",
    badge: "Cross-Platform"
  },
  {
    id: "al-hadith-app",
    title: "Al Hadith App",
    category: "Desktop",
    status: "Completed",
    logoIcon: "FaBook",
    shortDesc: "Fast indexed desktop reference for authentic Hadith collections with multi-language search.",
    fullDesc: "Fast, indexed desktop reference for authentic Hadith collections featuring instant search, chapter filtering, multi-language translation, and favorites management.",
    problemSolved: "Navigating large multi-volume Hadith collections is often slow. This application delivers instantaneous sub-millisecond local SQLite queries across thousands of records.",
    features: [
      "Instantaneous indexed search across narrator chains, Arabic text, and translations",
      "Categorized chapter navigation and bookmarked collections",
      "Lightweight resource consumption (<40MB RAM under Tauri)",
      "Cross-platform compilation for Linux and Windows"
    ],
    architecture: "Embedded SQLite index paired with Tauri Rust IPC bindings rendering clean, accessible typography.",
    technologies: ["Tauri", "React", "SQLite", "Tailwind"],
    githubUrl: "https://github.com/anumhosen/al-hadith-app",
    demoUrl: "https://github.com/anumhosen/al-hadith-app",
    featured: false,
    accent: "from-cyan-400 to-teal-500",
    badge: "Offline SQLite"
  },
  {
    id: "alapon-chat",
    title: "Alapon Chat App",
    category: "Web & Full Stack",
    status: "Completed",
    logoIcon: "FaComments",
    shortDesc: "Real-time MERN messaging platform with room management and WebSockets.",
    fullDesc: "Real-time messaging platform with room management, instant message delivery via WebSockets, online status indicators, and encrypted user authentication.",
    problemSolved: "Demonstrating full-stack duplex communication, session management, and persistent room architectures across distributed clients.",
    features: [
      "Instant duplex messaging via Socket.io with typing indicators and read receipts",
      "JWT-authenticated user sessions with secure cookie handling",
      "MongoDB aggregation pipelines for message history and room member caching",
      "Responsive mobile-first UI with real-time online presence tracking"
    ],
    architecture: "React SPA communicating with Node.js Express server via REST for auth and persistent WebSockets for live message relay.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/anumhosen/alapon-chat",
    demoUrl: "https://github.com/anumhosen/alapon-chat",
    featured: false,
    accent: "from-blue-500 to-cyan-500",
    badge: "MERN Stack"
  }
];

export const projectCategories = [
  "All",
  "Desktop",
  "AI & Tools",
  "Database & Desktop",
  "Scientific & Desktop",
  "Web & Full Stack"
];
