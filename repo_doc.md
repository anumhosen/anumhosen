# Repository Context Bundle

```text
Generated: 2026-09-06 15:08:01
Project: anumhosen
Files Included: 69
Approx Tokens: 42,163
Approx Characters: 168,654
```

# 1. Project Tree

```text
.
├── .vercel/
│   ├── project.json
│   └── README.txt
├── public/
│   ├── anum.jpeg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   ├── avatar-placeholder.svg
│   │   └── hero.png
│   ├── components/
│   │   ├── about/
│   │   │   ├── BioCard.jsx
│   │   │   ├── EducationCard.jsx
│   │   │   └── StoryTimeline.jsx
│   │   ├── common/
│   │   │   ├── Badge.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── GlassCard.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ParticlesBackground.jsx
│   │   │   ├── SectionHeader.jsx
│   │   │   ├── SEOStructuredData.jsx
│   │   │   ├── TechWindow.jsx
│   │   │   └── TypingEffect.jsx
│   │   ├── contact/
│   │   │   ├── ContactDetails.jsx
│   │   │   └── ContactForm.jsx
│   │   ├── home/
│   │   │   ├── CurrentlyBuilding.jsx
│   │   │   ├── FeaturedTeaser.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   └── QuickStats.jsx
│   │   ├── opensource/
│   │   │   ├── ContributionGraph.jsx
│   │   │   ├── GitHubProfileCard.jsx
│   │   │   ├── OpenSourceStats.jsx
│   │   │   └── RepoCard.jsx
│   │   ├── projects/
│   │   │   ├── ArchitectureDiagram.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectFilter.jsx
│   │   │   └── ScreenshotsGallery.jsx
│   │   ├── research/
│   │   │   ├── ResearchHero.jsx
│   │   │   └── ResearchTimeline.jsx
│   │   └── skills/
│   │       ├── SkillCategoryCard.jsx
│   │       └── SkillItem.jsx
│   ├── data/
│   │   ├── currentlyBuildingData.js
│   │   ├── openSourceData.js
│   │   ├── personalInfo.js
│   │   ├── projectsData.js
│   │   ├── researchData.js
│   │   └── skillsData.js
│   ├── hooks/
│   │   └── useActiveNav.js
│   ├── layouts/
│   │   └── RootLayout.jsx
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── OpenSourcePage.jsx
│   │   ├── ProjectDetailPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── ResearchPage.jsx
│   │   ├── ResumePage.jsx
│   │   └── SkillsPage.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── DEPLOYMENT.md
├── eslint.config.js
├── implementation_plan.md
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

# 2. Important Configuration Files

## .gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

.vercel
```

## README.md

```markdown
<div align="center">

  <img src="./public/anum.jpeg" alt="Anum Hosen Shawon" width="160" height="160" style="border-radius: 50%; border: 3px solid #06b6d4; object-fit: cover; box-shadow: 0 0 25px rgba(6, 182, 212, 0.4);" />

  <h1>Anum Hosen Shawon</h1>

  <p><strong>Full Stack Developer | Software Engineer | Computational Physics Researcher</strong></p>

  <p>
    <em>Building Cross-Platform Applications, Developer Tools, Databases, and Open Source Software.</em>
  </p>

  <p>
    <a href="https://anumhosen.vercel.app"><img src="https://img.shields.io/badge/Portfolio-anumhosen.vercel.app-06b6d4?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio" /></a>
    <a href="https://www.linkedin.com/in/anumhosen"><img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
    <a href="mailto:anumhosen@gmail.com"><img src="https://img.shields.io/badge/Email-anumhosen%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
  </p>

</div>

---

### 👨‍💻 About Me

- 🎓 **Final-Year Physics Student** at **Jashore University of Science and Technology (JUST)**, Bangladesh.
- 🔬 **Computational Biophysics**: Conducting Molecular Dynamics simulations of *E. coli* lipid membranes using **GROMACS**, **CHARMM-GUI**, and **Python**.
- 🖥️ **Desktop & Systems Engineering**: Crafting low-latency, native desktop software with **Tauri (Rust)** and **Electron**.
- 🌐 **Full-Stack Development**: Building modular, component-driven web platforms using **React**, **Node.js**, **Tailwind CSS**, and modern REST APIs.
- 🗄️ **Multi-Engine Databases**: Designing migration and synchronization tools spanning **SQLite**, **MongoDB**, **PostgreSQL**, and **MySQL**.
- 💡 **Open Source Philosophy**: Strong advocate for transparent, local-first, and privacy-preserving developer tooling.

---

### 🛠️ Technical Arsenal

<div align="center">

| Domain | Technologies & Tools |
| :--- | :--- |
| **Programming Languages** | `JavaScript (ES6+)` `Python` `C` `C++` `SQL` `HTML5` `CSS3` |
| **Frontend Frameworks** | `React` `Tailwind CSS` `Vite` `Framer Motion` `React Router` |
| **Desktop Engineering** | `Tauri (Rust + Web)` `Electron` `Chromium Runtime` |
| **Backend & APIs** | `Node.js` `Express.js` `RESTful APIs` `WebSockets` |
| **Databases & Storage** | `SQLite` `MongoDB` `PostgreSQL` `MySQL` |
| **Scientific Computing** | `GROMACS` `CHARMM-GUI` `MDAnalysis` `NumPy` `Matplotlib` |
| **DevOps & Environment** | `Git` `GitHub` `GitHub Actions` `Linux (CLI/SysAdmin)` `Vercel` |

</div>

---

### 🚀 Featured Projects

<table>
  <tr>
    <td width="50%" valign="top">
      <h4><a href="https://github.com/anumhosen/dataswitch">🔄 DataSwitch</a></h4>
      <p>Universal cross-database manager, schema migrator, and synchronization pipeline supporting <strong>SQLite</strong>, <strong>MongoDB</strong>, <strong>PostgreSQL</strong>, and <strong>MySQL</strong>.</p>
      <p><code>Tauri</code> <code>Rust</code> <code>React</code> <code>SQLite</code> <code>MongoDB</code></p>
    </td>
    <td width="50%" valign="top">
      <h4><a href="https://github.com/anumhosen/llama-server">🦙 Llama Server</a></h4>
      <p>High-performance local AI model serving platform for hosting and querying LLMs with zero cloud dependency and custom HTTP endpoints.</p>
      <p><code>Python</code> <code>C++</code> <code>Tauri</code> <code>React</code> <code>Local AI</code></p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h4><a href="https://github.com/anumhosen/sonic-browser">⚡ Sonic Browser</a></h4>
      <p>Specialized desktop web browser built with productivity workflows, ad filtering, and automated developer scraping utilities.</p>
      <p><code>Electron</code> <code>JavaScript</code> <code>Node.js</code> <code>Chromium</code></p>
    </td>
    <td width="50%" valign="top">
      <h4><a href="https://github.com/anumhosen/gromacs-gui">🧪 GROMACS GUI</a></h4>
      <p>Graphical desktop wrapper for orchestrating molecular dynamics simulations, energy minimization, and trajectory monitoring.</p>
      <p><code>Python</code> <code>Electron</code> <code>GROMACS</code> <code>Scientific Computing</code></p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h4><a href="https://github.com/anumhosen/al-quran-app">📖 Al Quran App</a></h4>
      <p>Fast, offline-first cross-platform desktop application with Ayah bookmarking, translations, and audio recitation playback.</p>
      <p><code>Tauri</code> <code>React</code> <code>SQLite</code> <code>Tailwind</code></p>
    </td>
    <td width="50%" valign="top">
      <h4><a href="https://github.com/anumhosen/alapon-chat">💬 Alapon Chat App</a></h4>
      <p>Real-time messaging platform with room management, instant message delivery via WebSockets, and encrypted user authentication.</p>
      <p><code>React</code> <code>Node.js</code> <code>Express</code> <code>MongoDB</code> <code>Socket.io</code></p>
    </td>
  </tr>
</table>

---

### 🔬 Research & Scientific Computing

> **Molecular Dynamics Simulation of *Escherichia coli* Membrane Systems**
> 
> *Department of Physics, Jashore University of Science and Technology*

- **Objective**: Simulating heterogeneous lipid bilayers representing the *E. coli* membrane to study structural stability, bilayer thickness, and lipid-protein interactions.
- **Workflow**: System assembly (**CHARMM-GUI**), solvation & energy minimization, NVT/NPT equilibration (310 K, 1 bar), and unrestrained production MD runs (**GROMACS** on Linux HPC).
- **Analysis**: Calculating area per lipid (APL), order parameters ($S_{CD}$), and diffusion coefficients using **Python (MDAnalysis, NumPy)**.

---

### 📊 GitHub Activity & Metrics

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=anumhosen&show_icons=true&theme=tokyonight&hide_border=true&bg_color=030712&title_color=22d3ee&icon_color=38bdf8&text_color=9ca3af" alt="Anum's GitHub Stats" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=anumhosen&layout=compact&theme=tokyonight&hide_border=true&bg_color=030712&title_color=22d3ee&text_color=9ca3af" alt="Top Languages" />
</div>

---

### 📫 Connect With Me

- 🌐 **Portfolio Website**: [anumhosen.vercel.app](https://anumhosen.vercel.app)
- 💼 **LinkedIn**: [linkedin.com/in/anumhosen](https://www.linkedin.com/in/anumhosen)
- 📧 **Email**: [anumhosen@gmail.com](mailto:anumhosen@gmail.com)
- 🐙 **GitHub**: [@anumhosen](https://github.com/anumhosen)

---

<details>
<summary>🛠️ <strong>Portfolio Repository Setup & Development Guide</strong></summary>

<br />

This repository also houses the source code for the live portfolio website at **anumhosen.vercel.app**.

#### Install Dependencies
```bash
npm install
```

#### Run Local Development Server
```bash
npm run dev
```

#### Production Build
```bash
npm run build
```

#### Deploy to Vercel
```bash
npm install -g vercel
vercel login
vercel --prod
```

</details>

<div align="center">
  <sub>© Anum Hosen Shawon. Built with passion, physics, and code.</sub>
</div>
```

## package.json

```json
{
  "name": "anumhosen",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^12.4.7",
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.2.0"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/react": "^19.2.18",
    "@types/react-dom": "^19.2.4",
    "@vitejs/plugin-react": "^6.1.0",
    "autoprefixer": "^10.4.20",
    "eslint": "^10.9.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.4",
    "globals": "^17.11.0",
    "postcss": "^8.5.3",
    "tailwindcss": "^3.4.17",
    "vite": "^8.2.2"
  }
}
```

## vite.config.js

```javascript
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
```

# 3. Source Code

## DEPLOYMENT.md

```markdown
# Vercel Deployment Guide

This guide outlines how to deploy the **Anum Hosen Shawon Portfolio** (`anumhosen.vercel.app`) to Vercel with zero friction.

---

## Prerequisites

1. Node.js (v18 or higher recommended)
2. npm, yarn, or pnpm
3. A free [Vercel Account](https://vercel.com/signup)

---

## Method 1: Deploying via Vercel CLI (Recommended)

### Step 1: Install Vercel CLI Globally
```bash
npm install -g vercel
```

### Step 2: Authenticate with Vercel
```bash
vercel login
```
*Follow the on-screen browser prompt to link your Vercel account.*

### Step 3: Deploy Preview Build
Run this inside the project root directory:
```bash
vercel
```
You will be prompted with a few setup questions:
- **Set up and deploy?**: `y`
- **Which scope do you want to deploy to?**: Select your account
- **Link to existing project?**: `N`
- **What's your project's name?**: `anumhosen`
- **In which directory is your code located?**: `./`
- **Want to modify settings?**: `N`

### Step 4: Deploy to Production
To deploy directly to production (`https://anumhosen.vercel.app`):
```bash
vercel --prod
```

---

## Method 2: Deploying via Vercel Web Dashboard (Git Integration)

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete modern portfolio website"
   git push origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your `anumhosen` GitHub repository.
4. Framework Preset will automatically be detected as **Vite**.
5. Build Settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **Deploy**.

---

## SPA Routing & `vercel.json`
The project includes a pre-configured `vercel.json` file in the root:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```
This ensures that deep-linked routes (such as `/projects`, `/skills`, `/about`, `/research`, etc.) load correctly on page refresh without throwing 404 errors.
```

## eslint.config.js

```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      'no-unused-vars': ['warn', { varsIgnorePattern: '^React$' }],
    },
  },
])
```

## implementation_plan.md

```markdown
# Implementation Plan: Modern Portfolio Website for Anum Hosen Shawon

Build a modern, high-performance, dark-themed developer portfolio for **Anum Hosen Shawon** (Full Stack Developer, Software Engineer, and Researcher) using React (JavaScript only), Vite, Tailwind CSS, React Icons, React Router DOM, and Framer Motion, fully optimized and ready for Vercel deployment.

---

## User Review Required

> [!IMPORTANT]
> **No Automated Command Execution**: As explicitly requested by both user preferences and prompt guidelines, no build or installation commands will be run automatically. We will prepare all configuration, components, routes, data, and styles, and provide exact, copy-pasteable commands for dependency installation, local development, building, and Vercel deployment.

> [!IMPORTANT]
> **File Preservation & Cleanup Policy**: In accordance with the safety rules, no files will be automatically deleted. Pre-existing Vite template files (`App.css`, boilerplate SVGs) will be left intact and cataloged under `TODO: Files for Review` for manual removal by the user.

---

## Architecture & Structure Overview

### Strict Adherence to Constraints
- **JavaScript Only**: 100% `.js` and `.jsx` files. No TypeScript or `.ts`/`.tsx`.
- **Modularity & File Length Limit**: Every component and module will be kept strictly **under 200 lines of code**.
- **Color Theme**: Dark professional palette using Tailwind's `gray` scale (`gray-950`, `gray-900`, `gray-800`, `gray-700`, `gray-300`, `gray-100`) with vibrant `cyan-400`, `sky-400`, and `blue-500` accents.
- **Window Controls**: Window control decorations for code/preview mockups will use `react-icons/vsc` (`VscChromeMinimize`, `VscChromeMaximize`, `VscChromeClose`).
- **Glassmorphism & Micro-animations**: Sleek backdrop-blur cards (`bg-gray-900/60 backdrop-blur-md border border-gray-800/80 shadow-xl`), glowing gradients, tech grid patterns, and subtle Framer Motion scroll/entrance animations.

### Project Layout
```
anumhosen/
├── public/
│   ├── favicon.svg
│   ├── og-preview.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── avatar-placeholder.svg
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── TechWindow.jsx        (Uses VscChrome icons)
│   │   │   ├── Badge.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── SectionHeader.jsx
│   │   │   └── GlassCard.jsx
│   │   ├── home/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── QuickStats.jsx
│   │   │   └── FeaturedTeaser.jsx
│   │   ├── about/
│   │   │   ├── BioCard.jsx
│   │   │   ├── EducationCard.jsx
│   │   │   └── StoryTimeline.jsx
│   │   ├── skills/
│   │   │   ├── SkillCategoryCard.jsx
│   │   │   └── SkillItem.jsx
│   │   ├── projects/
│   │   │   ├── ProjectCard.jsx
│   │   │   └── ProjectFilter.jsx
│   │   ├── research/
│   │   │   ├── ResearchHero.jsx
│   │   │   ├── ResearchTimeline.jsx
│   │   │   └── SimulationWorkflow.jsx
│   │   ├── opensource/
│   │   │   ├── GitHubProfileCard.jsx
│   │   │   ├── RepoCard.jsx
│   │   │   └── OpenSourceStats.jsx
│   │   └── contact/
│   │       ├── ContactForm.jsx
│   │       └── ContactDetails.jsx
│   ├── data/
│   │   ├── personalInfo.js
│   │   ├── skillsData.js
│   │   ├── projectsData.js
│   │   ├── researchData.js
│   │   └── openSourceData.js
│   ├── hooks/
│   │   └── useActiveNav.js
│   ├── layouts/
│   │   └── RootLayout.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── SkillsPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── ResearchPage.jsx
│   │   ├── OpenSourcePage.jsx
│   │   └── ContactPage.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── package.json
├── index.html
├── DEPLOYMENT.md
└── README.md
```

---

## Proposed Changes

### 1. Configuration & Dependencies

#### [MODIFY] [package.json](file:///d:/Development/web/anumhosen/package.json)
- Add required runtime dependencies:
  - `react-router-dom`: `^7.2.0` (or compatible `^6.29.0`)
  - `framer-motion`: `^12.4.7`
  - `react-icons`: `^5.5.0`
- Add build devDependencies:
  - `tailwindcss`: `^3.4.17`
  - `postcss`: `^8.5.3`
  - `autoprefixer`: `^10.4.20`

#### [NEW] [tailwind.config.js](file:///d:/Development/web/anumhosen/tailwind.config.js)
- Configure content paths: `./index.html`, `./src/**/*.{js,jsx}`.
- Configure dark theme with gray scale (`gray-950`, `gray-900`, `gray-800`), custom cyan/sky accents (`#06b6d4`, `#0ea5e9`, `#38bdf8`), glow shadow utilities, and glassmorphic backdrop filters.

#### [NEW] [postcss.config.js](file:///d:/Development/web/anumhosen/postcss.config.js)
- Configure `tailwindcss` and `autoprefixer`.

#### [MODIFY] [index.html](file:///d:/Development/web/anumhosen/index.html)
- SEO tags: Meta title (`Anum Hosen Shawon | Full Stack Developer & Software Engineer`), description, keywords, author, robots.
- Open Graph tags (`og:title`, `og:description`, `og:type`, `og:url` -> `https://anumhosen.vercel.app`, `og:image`).
- Twitter card meta tags.
- Google Fonts preconnect (`Inter` & `JetBrains Mono` / `Outfit`).
- Theme color (`#030712`).

#### [NEW] [vercel.json](file:///d:/Development/web/anumhosen/vercel.json)
- Client-side routing rewrite rule:
  ```json
  {
    "rewrites": [
      { "source": "/(.*)", "destination": "/index.html" }
    ]
  }
  ```

---

### 2. Styling System

#### [MODIFY] [src/styles/index.css](file:///d:/Development/web/anumhosen/src/styles/index.css) & [src/index.css](file:///d:/Development/web/anumhosen/src/index.css)
- Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities;`).
- Custom utility classes for tech background mesh, glowing radial gradients, glassmorphism card surfaces, and custom scrollbar in dark gray.

---

### 3. Data Layer (`src/data/`)

Modular data definitions to keep components lean and easily updatable:
- **`personalInfo.js`**: Bio, tagline, contact information, social links (GitHub: `anumhosen`, LinkedIn, email), statistics, and resume details.
- **`skillsData.js`**: All categories (Frontend, Backend, Database, Desktop, Programming, Tools) with proficiency, level, and corresponding `react-icons`.
- **`projectsData.js`**: All 7 projects (Llama Server, Sonic Browser, DataSwitch, GROMACS GUI, Al Quran App, Al Hadith App, Alapon Chat App) with descriptions, tech badges, features, GitHub and live demo links.
- **`researchData.js`**: E. coli membrane molecular dynamics simulation, tools (GROMACS, CHARMM-GUI, Linux, Python), stages, methodologies, and key milestones.
- **`openSourceData.js`**: Profile info, featured repositories, contributions, and community impact.

---

### 4. Reusable Common Components (`src/components/common/`)

- **`Navbar.jsx`**: Responsive glassmorphic header with animated active link indicator, brand badge, mobile slide-down menu, and quick action buttons.
- **`Footer.jsx`**: Copyright notice, social links, quick navigation links, and back-to-top button.
- **`TechWindow.jsx`**: Desktop/terminal mockup frame using `VscChromeMinimize`, `VscChromeMaximize`, `VscChromeClose` as specified by the user guidelines.
- **`SectionHeader.jsx`**: Gradient title, subtitle badge, and descriptive tagline.
- **`Button.jsx`**: Reusable primary (cyan gradient), secondary (glass gray), and outline buttons with hover micro-animations.
- **`Badge.jsx`**: Technology tag pills with accent glow.
- **`GlassCard.jsx`**: Reusable glassmorphic container with border hover highlights.

---

### 5. Page Components & Sections

#### `src/pages/HomePage.jsx` + `src/components/home/`
- Hero section with animated intro:
  - Anum Hosen Shawon
  - Full Stack Developer | Software Engineer
  - Tagline: "Building Cross-Platform Applications, Developer Tools, Databases, and Open Source Software."
  - Tech pills: React • Node.js • SQLite • MongoDB • Electron • Tauri
  - Interactive profile card with glowing tech badge
  - CTA Buttons: Resume Download, GitHub, LinkedIn, Contact
  - Quick highlight statistics and featured project preview.

#### `src/pages/AboutPage.jsx` + `src/components/about/`
- Physics background at Jashore University of Science and Technology (JUST).
- Passion for software engineering, desktop development, and open-source systems.
- Journey timeline: from computational physics & molecular dynamics to high-performance desktop apps & full-stack web platforms.

#### `src/pages/SkillsPage.jsx` + `src/components/skills/`
- Interactive filterable grid for Frontend, Backend, Database, Desktop, Programming, and Tools.
- Skill cards with experience level, tech badges, and clean visual indicators.

#### `src/pages/ProjectsPage.jsx` + `src/components/projects/`
- Project showcase for all 7 required projects:
  1. **Llama Server** (Local AI model serving platform)
  2. **Sonic Browser** (Custom browser with productivity & scraping features)
  3. **DataSwitch** (Database migration & sync tool for SQLite, MongoDB, MySQL, PostgreSQL)
  4. **GROMACS GUI** (Molecular dynamics simulation wrapper)
  5. **Al Quran App** (Cross-platform desktop application)
  6. **Al Hadith App** (Cross-platform desktop application)
  7. **Alapon Chat App** (MERN stack chat application)
- Filter by category (All, Desktop & Systems, Web & Full Stack, AI & Tools).
- Technology badges, GitHub links, and Demo modal/links.

#### `src/pages/ResearchPage.jsx` + `src/components/research/`
- Title: Research & Scientific Computing
- Content: Molecular Dynamics Simulation of E. coli Membrane
- Tools: GROMACS, CHARMM-GUI, Linux, Python
- Interactive timeline cards detailing system preparation, minimization, equilibration, production MD, and trajectory analysis.

#### `src/pages/OpenSourcePage.jsx` + `src/components/opensource/`
- GitHub profile section (`anumhosen`).
- Repository showcase and contribution highlights.
- Philosophy of open developer tooling and cross-platform desktop software.

#### `src/pages/ContactPage.jsx` + `src/components/contact/`
- Clean contact form (Name, Email, Message) with client-side validation and feedback state.
- Direct contact cards (Email, GitHub, LinkedIn, Availability status).

---

### 6. Layout, Routing, and Entry Point

- **`src/layouts/RootLayout.jsx`**: Global layout wrapping Navbar, main outlet, background ambient glows, and Footer.
- **`src/routes/AppRoutes.jsx`**: React Router configuration with `createBrowserRouter` or `<BrowserRouter>` supporting all pages and 404 fallback.
- **`src/App.jsx`**: Root application component connecting router and global state.
- **`src/main.jsx`**: Standard entry point importing styles.

---

### 7. Documentation & Deployment Guides

- **`README.md`**: Complete project overview, architecture, scripts, and local development guide.
- **`DEPLOYMENT.md`**: Step-by-step Vercel deployment guide (CLI commands + Vercel Web Dashboard instructions).
- **`TODO: Files for Review`**: Catalog of pre-existing boilerplate files for user review.

---

## Verification & Execution Plan

### Safe File Creation & Modification
1. Update `package.json` with required dependencies and devDependencies.
2. Create `tailwind.config.js`, `postcss.config.js`, and `vercel.json`.
3. Update `index.html` with full SEO, meta tags, and font preconnects.
4. Create modular style sheets, data files, hooks, and reusable components.
5. Create all 7 pages and layouts.
6. Verify that **every single file is strictly under 200 lines**.
7. Verify that **no TypeScript** is used anywhere.
8. Verify that **no terminal commands are run automatically**.
9. Provide comprehensive instructions for user execution.
```

## index.html

```html
<!doctype html>
<html lang="en" class="dark scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#030712" />
    
    <!-- Primary SEO Meta Tags -->
    <title>Anum Hosen Shawon | Full Stack & Desktop Application Developer</title>
    <meta name="title" content="Anum Hosen Shawon | Full Stack & Desktop Application Developer" />
    <meta name="description" content="Portfolio of Anum Hosen Shawon - Full Stack & Desktop Application Developer, Software Engineer, and Researcher. Building Cross-Platform Software, Database Tools, AI Utilities, and Open Source Applications." />
    <meta name="keywords" content="Anum Hosen Shawon, anumhosen, Full Stack Developer, Desktop Application Developer, Software Engineer, React, Node.js, Electron, Tauri, SQLite, MongoDB, DataSwitch, Llama Server, GROMACS, JUST Physics, Open Source" />
    <meta name="author" content="Anum Hosen Shawon" />
    <meta name="robots" content="index, follow" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://anumhosen.vercel.app/" />
    <meta property="og:title" content="Anum Hosen Shawon | Full Stack & Desktop Application Developer" />
    <meta property="og:description" content="Building Cross-Platform Software, Database Tools, AI Utilities, and Open Source Applications." />
    <meta property="og:image" content="/anum.jpeg" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://anumhosen.vercel.app/" />
    <meta property="twitter:title" content="Anum Hosen Shawon | Full Stack & Desktop Application Developer" />
    <meta property="twitter:description" content="Building Cross-Platform Software, Database Tools, AI Utilities, and Open Source Applications." />
    <meta property="twitter:image" content="/anum.jpeg" />

    <!-- Google Fonts Preconnect -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
  </head>
  <body class="bg-gray-950 text-gray-100 selection:bg-brand-cyan/20 selection:text-brand-cyan min-h-screen antialiased">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## postcss.config.js

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Tailwind gray scale tailored for dark theme
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          850: '#17202e',
          900: '#0f172a',
          950: '#030712',
        },
        brand: {
          cyan: '#06b6d4',
          sky: '#38bdf8',
          blue: '#3b82f6',
          indigo: '#6366f1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.3)',
        'glow-blue': '0 0 25px -5px rgba(59, 130, 246, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
```

## vercel.json

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## .vercel\project.json

```json
{"projectId":"prj_earWf81ZTpc2URfxn7srSaect1Lm","orgId":"team_VyRMz62Pa8bMQjlk1G2agru4","projectName":"anumhosen"}
```

## .vercel\README.txt

```
> Why do I have a folder named ".vercel" in my project?
The ".vercel" folder is created when you link a directory to a Vercel project.

> What does the "project.json" file contain?
The "project.json" file contains:
- The ID of the Vercel project that you linked ("projectId")
- The ID of the user or team your Vercel project is owned by ("orgId")

> Should I commit the ".vercel" folder?
No, you should not share the ".vercel" folder with anyone.
Upon creation, it will be automatically added to your ".gitignore" file.
```

## public\robots.txt

```
User-agent: *
Allow: /

Sitemap: https://anumhosen.vercel.app/sitemap.xml
```

## public\sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://anumhosen.vercel.app/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://anumhosen.vercel.app/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://anumhosen.vercel.app/skills</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://anumhosen.vercel.app/projects</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://anumhosen.vercel.app/projects/dataswitch</loc>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://anumhosen.vercel.app/projects/llama-server</loc>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://anumhosen.vercel.app/projects/sonic-browser</loc>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://anumhosen.vercel.app/projects/gromacs-gui</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://anumhosen.vercel.app/projects/al-quran-app</loc>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://anumhosen.vercel.app/projects/al-hadith-app</loc>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://anumhosen.vercel.app/projects/alapon-chat</loc>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://anumhosen.vercel.app/research</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://anumhosen.vercel.app/opensource</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://anumhosen.vercel.app/resume</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://anumhosen.vercel.app/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

## src\App.jsx

```jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
```

## src\index.css

```css
/* TODO_REMOVE: Candidate for manual removal if desired, since src/main.jsx now directly imports src/styles/index.css */
@import './styles/index.css';
```

## src\main.jsx

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## src\data\currentlyBuildingData.js

```javascript
export const currentlyBuildingData = [
  {
    id: "dataswitch",
    title: "DataSwitch",
    tagline: "Universal Cross-Database Migration & Sync Tool",
    progress: 80,
    asciiBar: "████████░░ 80%",
    status: "Active Development",
    currentMilestone: "Optimizing multi-threaded streaming pipe for 100k+ row transfers",
    stack: ["Tauri", "Rust", "SQLite", "MongoDB", "PostgreSQL"],
    repoUrl: "https://github.com/anumhosen/dataswitch",
    detailUrl: "/projects/dataswitch"
  },
  {
    id: "llama-server",
    title: "Llama Server",
    tagline: "Local AI Inference & Model Serving Platform",
    progress: 65,
    asciiBar: "██████░░░░ 65%",
    status: "Benchmarking",
    currentMilestone: "Implementing dynamic batching and token streaming over HTTP",
    stack: ["Python", "C++", "Tauri", "React", "GGUF"],
    repoUrl: "https://github.com/anumhosen/llama-server",
    detailUrl: "/projects/llama-server"
  },
  {
    id: "sonic-browser",
    title: "Sonic Browser",
    tagline: "Developer Productivity & Web Scraping Browser",
    progress: 50,
    asciiBar: "█████░░░░░ 50%",
    status: "Prototyping",
    currentMilestone: "Building visual DOM table selector and automatic CSV export",
    stack: ["Electron", "Node.js", "Tailwind", "Chromium"],
    repoUrl: "https://github.com/anumhosen/sonic-browser",
    detailUrl: "/projects/sonic-browser"
  }
];
```

## src\data\openSourceData.js

```javascript
export const openSourceData = {
  username: "anumhosen",
  profileUrl: "https://github.com/anumhosen",
  tagline: "Dedicated to open, local-first developer tools and scientific accessibility.",
  philosophy: "I believe the best developer software is transparent, privacy-preserving, and built for local execution without mandatory vendor lock-in.",
  stats: [
    { label: "Public Repositories", value: "20+" },
    { label: "Contributions (Year)", value: "500+" },
    { label: "Core Stacks", value: "Tauri • React • Python" },
    { label: "Community", value: "Open Contributor" }
  ],
  featuredRepositories: [
    {
      name: "dataswitch",
      description: "Universal database migration, sync, and inspection tool for SQLite, MongoDB, PostgreSQL, and MySQL.",
      language: "Rust / JavaScript",
      stars: 48,
      forks: 12,
      lastUpdated: "Updated this week",
      topics: ["tauri", "database-migration", "sqlite", "mongodb", "postgresql"],
      url: "https://github.com/anumhosen/dataswitch"
    },
    {
      name: "llama-server",
      description: "Local AI model serving runtime with zero cloud latency and customizable HTTP API.",
      language: "Python / C++",
      stars: 35,
      forks: 9,
      lastUpdated: "Updated this week",
      topics: ["llm", "local-ai", "python", "tauri", "inference"],
      url: "https://github.com/anumhosen/llama-server"
    },
    {
      name: "sonic-browser",
      description: "Custom lightweight browser equipped with developer automation and data-scraping capabilities.",
      language: "JavaScript / Electron",
      stars: 26,
      forks: 6,
      lastUpdated: "Updated 2 weeks ago",
      topics: ["electron", "browser", "productivity", "automation"],
      url: "https://github.com/anumhosen/sonic-browser"
    },
    {
      name: "gromacs-gui",
      description: "Intuitive molecular dynamics simulation dashboard and parameter generator for GROMACS.",
      language: "Python / Electron",
      stars: 19,
      forks: 4,
      lastUpdated: "Updated last month",
      topics: ["gromacs", "molecular-dynamics", "scientific-computing"],
      url: "https://github.com/anumhosen/gromacs-gui"
    }
  ]
};
```

## src\data\personalInfo.js

```javascript
export const personalInfo = {
  name: "Anum Hosen Shawon",
  shortName: "Anum Hosen",
  headline: "Full Stack & Desktop Application Developer",
  tagline: "Building Cross-Platform Software, Database Tools, AI Utilities, and Open Source Applications.",
  domain: "anumhosen.vercel.app",
  photoUrl: "/anum.jpeg",
  email: "anumhosen@gmail.com",
  location: "Jashore, Bangladesh",
  institution: "Jashore University of Science and Technology",
  department: "Physics Department",
  academicStatus: "Final Year Student",
  githubUsername: "anumhosen",
  githubUrl: "https://github.com/anumhosen",
  linkedinUrl: "https://www.linkedin.com/in/anumhosen",
  resumeUrl: "/resume",
  typingRoles: [
    "Cross-Platform Desktop Apps",
    "Full-Stack Web Architectures",
    "Multi-Database Systems",
    "Local AI Utilities",
    "Computational Biophysics"
  ],
  heroStack: [
    "React",
    "Node.js",
    "SQLite",
    "MongoDB",
    "Electron",
    "Tauri",
    "Python",
    "C++"
  ],
  bioParagraphs: [
    "I am a final-year Physics student at Jashore University of Science and Technology, operating at the intersection of computational physics, native systems programming, and full-stack web engineering.",
    "My journey began with differential equations and mathematical modeling in physics, evolving into building high-throughput desktop software with Tauri (Rust) and Electron, robust backends with Node.js, and multi-engine database migrators.",
    "In scientific research, I execute and analyze all-atom Molecular Dynamics simulations of bacterial membranes using GROMACS and Python. In software development, I build privacy-first, local-first developer tools designed to run autonomously on user hardware."
  ],
  stats: [
    { label: "Major Projects", value: "7+" },
    { label: "Core Stack", value: "React + Node.js" },
    { label: "Specialization", value: "Desktop Apps" },
    { label: "Ecosystem", value: "Open Source" }
  ],
  availableFor: [
    "Internships",
    "Trainee Roles",
    "Junior Developer Positions",
    "Open Source Collaboration"
  ]
};
```

## src\data\projectsData.js

```javascript
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
```

## src\data\researchData.js

```javascript
export const researchData = {
  title: "Research & Scientific Computing",
  project: "Molecular Dynamics Simulation of E. coli Membrane",
  institution: "Jashore University of Science and Technology",
  department: "Department of Physics",
  publicationStatus: "Manuscript in Preparation / Undergraduate Thesis",
  simulationTemperatures: ["310 K (Physiological)", "323 K (Thermal Phase Transition)"],
  abstract: "Investigating the biophysical stability, lipid-bilayer dynamics, and molecular curvature of the Escherichia coli outer and inner membrane systems using all-atom Molecular Dynamics simulations.",
  highlights: [
    {
      title: "All-Atom Membrane Assembly",
      desc: "Constructed realistic asymmetrical lipid bilayer leaflets mimicking the outer membrane of Gram-negative bacteria."
    },
    {
      title: "Physiological Ensemble Equilibration",
      desc: "Stabilized multi-million atom systems using NVT and NPT thermodynamic ensembles at 310 K and 1 bar."
    },
    {
      title: "Quantitative Python Pipeline",
      desc: "Developed custom automated Python analysis scripts calculating Area Per Lipid (APL) and Deuterium Order Parameters (Scd)."
    },
    {
      title: "HPC Linux Performance",
      desc: "Accelerated execution across multi-GPU Linux HPC nodes with custom bash job orchestration scripts."
    }
  ],
  tools: [
    { name: "GROMACS", role: "High-Performance MD Engine", icon: "FaServer" },
    { name: "CHARMM-GUI", role: "Membrane System Builder", icon: "FaDna" },
    { name: "Linux", role: "HPC Computing & Shell Scripts", icon: "FaTerminal" },
    { name: "Python", role: "Trajectory & Statistical Analysis", icon: "FaPython" }
  ],
  timeline: [
    {
      phase: "Phase 1",
      title: "System Preparation & Membrane Modeling",
      description: "Assembled heterogeneous asymmetrical lipid bilayers representing the E. coli inner and outer membranes using CHARMM-GUI Membrane Builder with physiological ion concentrations.",
      toolsUsed: ["CHARMM-GUI", "PDB Tools"],
      status: "Completed"
    },
    {
      phase: "Phase 2",
      title: "Solvation & Energy Minimization",
      description: "Embedded system in explicit TIP3P water molecules, added neutralizing counter-ions (K+/Cl-), and performed steepest-descent energy minimization to eliminate steric clashes.",
      toolsUsed: ["GROMACS", "Linux Shell"],
      status: "Completed"
    },
    {
      phase: "Phase 3",
      title: "NVT & NPT Equilibration (310 K, 1 bar)",
      description: "Conducted constant volume (NVT) and constant pressure (NPT) ensembles with position restraints on heavy lipid atoms to stabilize temperature (310 K) and pressure (1 bar).",
      toolsUsed: ["GROMACS", "Parrinello-Rahman"],
      status: "Completed"
    },
    {
      phase: "Phase 4",
      title: "Unrestrained Production MD Run",
      description: "Executed hundreds of nanoseconds of unrestrained production simulation across multi-core Linux workstations to capture spontaneous membrane fluctuations and lipid diffusion.",
      toolsUsed: ["GROMACS", "CUDA HPC"],
      status: "Analysis Active"
    },
    {
      phase: "Phase 5",
      title: "Trajectory Analysis & Python Pipelines",
      description: "Calculated area per lipid (APL), bilayer thickness, deuterium order parameters (Scd), and lateral diffusion coefficients using Python (MDAnalysis/NumPy/Matplotlib).",
      toolsUsed: ["Python", "MDAnalysis", "Matplotlib"],
      status: "Active"
    }
  ],
  keyMetrics: [
    { label: "Ensemble", value: "NPT (310 K, 1 bar)" },
    { label: "Water Model", value: "TIP3P Explicit" },
    { label: "Force Field", value: "CHARMM36m" },
    { label: "Time Step", value: "2.0 fs" },
    { label: "Publication", value: "In Preparation" }
  ]
};
```

## src\data\skillsData.js

```javascript
export const skillCategories = [
  {
    id: "frontend",
    name: "Frontend Architecture",
    description: "Component-driven, responsive user interfaces with reactive state management",
    skills: [
      { name: "React", level: "Advanced", proficiency: 92, tag: "UI Core" },
      { name: "JavaScript", level: "Advanced", proficiency: 90, tag: "ES6+ / Async" },
      { name: "Tailwind", level: "Advanced", proficiency: 94, tag: "Modern Styling" },
      { name: "Vite", level: "Advanced", proficiency: 88, tag: "Tooling & Bundling" }
    ]
  },
  {
    id: "backend",
    name: "Backend & APIs",
    description: "High-throughput server runtimes, REST architectures, and WebSocket pipelines",
    skills: [
      { name: "Node.js", level: "Advanced", proficiency: 88, tag: "Async Runtime" },
      { name: "Express", level: "Advanced", proficiency: 86, tag: "REST Endpoints" }
    ]
  },
  {
    id: "database",
    name: "Databases & Storage",
    description: "Embedded SQL, distributed document stores, and relational data modeling",
    skills: [
      { name: "SQLite", level: "Advanced", proficiency: 92, tag: "Embedded Index" },
      { name: "MongoDB", level: "Advanced", proficiency: 85, tag: "Document Store" },
      { name: "PostgreSQL", level: "Learning", proficiency: 70, tag: "Relational Engine" }
    ]
  },
  {
    id: "desktop",
    name: "Desktop Applications",
    description: "Cross-platform native software with low-memory system footprints",
    skills: [
      { name: "Tauri", level: "Advanced", proficiency: 88, tag: "Rust + Web Core" },
      { name: "Electron", level: "Advanced", proficiency: 85, tag: "Chromium Native" }
    ]
  },
  {
    id: "programming",
    name: "Programming Languages",
    description: "Systems programming, mathematical modeling, and scripting automation",
    skills: [
      { name: "Python", level: "Advanced", proficiency: 90, tag: "Analysis / AI" },
      { name: "C++", level: "Proficient", proficiency: 82, tag: "Systems / MD" },
      { name: "C", level: "Proficient", proficiency: 80, tag: "Low-Level Memory" },
      { name: "JavaScript", level: "Advanced", proficiency: 92, tag: "Full-Stack" }
    ]
  },
  {
    id: "tools",
    name: "Tools & Environments",
    description: "Automated CI/CD pipelines, version control, and Unix shell environments",
    skills: [
      { name: "Linux", level: "Advanced", proficiency: 90, tag: "HPC / CLI" },
      { name: "Git", level: "Advanced", proficiency: 92, tag: "Version Control" },
      { name: "GitHub", level: "Advanced", proficiency: 90, tag: "Code Collaboration" },
      { name: "GitHub Actions", level: "Proficient", proficiency: 80, tag: "CI/CD Pipelines" }
    ]
  }
];
```

## src\hooks\useActiveNav.js

```javascript
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useActiveNav() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return {
    pathname: location.pathname,
    isScrolled,
    isActive
  };
}
```

## src\layouts\RootLayout.jsx

```jsx
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ParticlesBackground from '../components/common/ParticlesBackground';
import SEOStructuredData from '../components/common/SEOStructuredData';

export default function RootLayout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen bg-gray-950 text-gray-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Background tech mesh and particles */}
      <div className="fixed inset-0 tech-grid-pattern pointer-events-none opacity-40 z-0" />
      <ParticlesBackground />
      <SEOStructuredData />
      
      {/* Top cyan ambient glow */}
      <div className="fixed -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-br from-cyan-500/15 via-blue-600/10 to-transparent blur-3xl pointer-events-none rounded-full z-0" />

      {/* Subtle bottom-right accent glow */}
      <div className="fixed -bottom-40 right-0 w-[450px] h-[300px] bg-blue-600/10 blur-3xl pointer-events-none rounded-full z-0" />

      {/* Main Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow z-10 pt-20">
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
```

## src\pages\AboutPage.jsx

```jsx
import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import BioCard from '../components/about/BioCard';
import EducationCard from '../components/about/EducationCard';
import StoryTimeline from '../components/about/StoryTimeline';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <SectionHeader
        badge="About Me"
        title="Software Engineer with a Physics Mindset"
        subtitle="Final year Physics student at Jashore University of Science and Technology building high-performance desktop and web applications."
      />

      {/* Main Grid: Bio & Academic Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7">
          <BioCard />
        </div>
        <div className="lg:col-span-5 space-y-6">
          <EducationCard />
          <StoryTimeline />
        </div>
      </div>
    </div>
  );
}
```

## src\pages\ContactPage.jsx

```jsx
import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import ContactForm from '../components/contact/ContactForm';
import ContactDetails from '../components/contact/ContactDetails';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <SectionHeader
        badge="Get in Touch"
        title="Let's Build Something Together"
        subtitle="Whether you have an inquiry regarding desktop software, full-stack engineering, or computational research, my inbox is always open."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        {/* Contact Details & Channels */}
        <div className="lg:col-span-5">
          <ContactDetails />
        </div>
      </div>
    </div>
  );
}
```

## src\pages\HomePage.jsx

```jsx
import HeroSection from '../components/home/HeroSection';
import CurrentlyBuilding from '../components/home/CurrentlyBuilding';
import QuickStats from '../components/home/QuickStats';
import FeaturedTeaser from '../components/home/FeaturedTeaser';
import Button from '../components/common/Button';
import { FaGraduationCap, FaDna, FaArrowRight } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section with Typing & CTA Hierarchy */}
      <HeroSection />

      {/* 2. Currently Building Section */}
      <CurrentlyBuilding />

      {/* 3. Key Highlights & Metrics */}
      <QuickStats />

      {/* 4. Featured Projects Showcase */}
      <FeaturedTeaser />

      {/* 5. Quick Architecture & Research Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Research Teaser */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-cyan-950/20 border border-gray-850 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-cyan-400">
                <FaDna className="w-4 h-4" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">Research & Simulation</span>
              </div>
              <h3 className="text-xl font-bold text-white">Molecular Dynamics of E. coli Membrane</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Conducting all-atom molecular dynamics simulations on bacterial lipid bilayers using GROMACS, CHARMM-GUI, and custom automated Python analysis pipelines.
              </p>
            </div>
            <div className="pt-6">
              <Button to="/research" variant="outline" size="sm" icon={FaArrowRight}>
                Explore Research
              </Button>
            </div>
          </div>

          {/* Academic & Systems Teaser */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-blue-950/20 border border-gray-850 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-blue-400">
                <FaGraduationCap className="w-4 h-4" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">Background & Evolution</span>
              </div>
              <h3 className="text-xl font-bold text-white">From Physics to Software Engineering</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Bridging mathematical modeling and biophysics into low-latency desktop development with Tauri (Rust), Electron, and modern web architectures.
              </p>
            </div>
            <div className="pt-6">
              <Button to="/about" variant="secondary" size="sm" icon={FaArrowRight}>
                Read Biography
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
```

## src\pages\NotFoundPage.jsx

```jsx
import React from 'react';
import { FaHome } from 'react-icons/fa';
import Button from '../components/common/Button';
import GlassCard from '../components/common/GlassCard';

export default function NotFoundPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <GlassCard className="p-8 space-y-6">
        <span className="font-mono text-5xl font-extrabold text-gradient-cyan block">
          404
        </span>
        <h1 className="text-2xl font-bold text-white">
          Page Not Found
        </h1>
        <p className="text-sm text-gray-400 max-w-md mx-auto">
          The requested page could not be found. You may return to the homepage or explore one of the portfolio sections.
        </p>
        <div className="pt-2">
          <Button to="/" variant="primary" size="md" icon={FaHome}>
            Return Home
          </Button>
        </div>
      </GlassCard>
    </div>
  );
}
```

## src\pages\OpenSourcePage.jsx

```jsx
import SectionHeader from '../components/common/SectionHeader';
import GitHubProfileCard from '../components/opensource/GitHubProfileCard';
import OpenSourceStats from '../components/opensource/OpenSourceStats';
import RepoCard from '../components/opensource/RepoCard';
import ContributionGraph from '../components/opensource/ContributionGraph';
import { openSourceData } from '../data/openSourceData';

export default function OpenSourcePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <SectionHeader
        badge="Community & Code"
        title="Open Source Software & Tools"
        subtitle="Contributing to developer utilities, native desktop ecosystems, and local-first software architectures."
      />

      {/* GitHub Profile Card */}
      <GitHubProfileCard />

      {/* Contribution Activity Graph */}
      <ContributionGraph />

      {/* Repository Showcase */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white tracking-tight">
            Pinned Repositories
          </h3>
          <span className="text-xs font-mono text-cyan-400">
            Open Source Projects
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {openSourceData.featuredRepositories.map((repo) => (
            <RepoCard key={repo.name} repo={repo} />
          ))}
        </div>
      </div>

      {/* Philosophy & Principles */}
      <div className="pt-2">
        <OpenSourceStats />
      </div>
    </div>
  );
}
```

## src\pages\ProjectDetailPage.jsx

```jsx
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import GlassCard from '../components/common/GlassCard';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import ArchitectureDiagram from '../components/projects/ArchitectureDiagram';
import ScreenshotsGallery from '../components/projects/ScreenshotsGallery';
import { projectsData } from '../data/projectsData';

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <GlassCard className="p-8">
          <FaExclamationTriangle className="w-10 h-10 text-amber-400 mx-auto mb-3" />
          <h2 className="text-xl font-bold text-white">Project Not Found</h2>
          <p className="text-sm text-gray-400 mb-6">The requested case study could not be located.</p>
          <Button to="/projects" variant="primary" size="sm" icon={FaArrowLeft}>
            Back to All Projects
          </Button>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Back Button */}
      <Link 
        to="/projects" 
        className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-cyan-400 transition"
      >
        <FaArrowLeft className="w-3 h-3" /> Back to All Projects
      </Link>

      {/* Project Header Card */}
      <GlassCard className="p-6 sm:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Badge variant="cyan" size="md">{project.category}</Badge>
            <Badge variant="glow" size="md">{project.status}</Badge>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-gray-800 hover:bg-gray-750 text-white border border-gray-700 transition"
            >
              <FaGithub className="w-3.5 h-3.5" /> GitHub
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-950/40 transition"
            >
              <FaExternalLinkAlt className="w-3 h-3" /> Live Demo
            </a>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl">
          {project.shortDesc}
        </p>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-800/80">
          <span className="text-xs font-mono text-gray-500 mr-2 py-1">Technologies:</span>
          {project.technologies.map(tech => (
            <Badge key={tech} size="sm" variant="default">
              {tech}
            </Badge>
          ))}
        </div>
      </GlassCard>

      {/* Overview & Problem Solved Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard className="p-6 space-y-2">
          <h3 className="text-base font-bold text-white tracking-wide uppercase text-cyan-400 font-mono text-xs">
            System Overview
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            {project.fullDesc}
          </p>
        </GlassCard>

        <GlassCard className="p-6 space-y-2">
          <h3 className="text-base font-bold text-white tracking-wide uppercase text-blue-400 font-mono text-xs">
            Problem Solved
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            {project.problemSolved}
          </p>
        </GlassCard>
      </div>

      {/* Key Features List */}
      <GlassCard className="p-6 space-y-3">
        <h3 className="text-lg font-bold text-white tracking-tight">
          Key Capabilities & Features
        </h3>
        <div className="space-y-2.5">
          {project.features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
              <FaCheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
              <span className="leading-relaxed">{feat}</span>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Architecture Diagram */}
      <ArchitectureDiagram project={project} />

      {/* Screenshots Gallery */}
      <ScreenshotsGallery project={project} />
    </div>
  );
}
```

## src\pages\ProjectsPage.jsx

```jsx
import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import ProjectFilter from '../components/projects/ProjectFilter';
import ProjectCard from '../components/projects/ProjectCard';
import { projectsData, projectCategories } from '../data/projectsData';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <SectionHeader
        badge="Engineering Portfolio"
        title="Featured Projects & Software"
        subtitle="Explore cross-platform desktop applications, developer tools, database synchronizers, and AI model servers."
      />

      {/* Category Filter */}
      <ProjectFilter
        categories={projectCategories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
```

## src\pages\ResearchPage.jsx

```jsx
import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import ResearchHero from '../components/research/ResearchHero';
import ResearchTimeline from '../components/research/ResearchTimeline';

export default function ResearchPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <SectionHeader
        badge="Biophysics & MD"
        title="Research & Scientific Computing"
        subtitle="Bridging theoretical physics and computational simulation to model bacterial outer membrane biophysics with atomic precision."
      />

      {/* Hero & Abstract */}
      <ResearchHero />

      {/* Timeline of Simulation Phases */}
      <div className="pt-6">
        <ResearchTimeline />
      </div>
    </div>
  );
}
```

## src\pages\ResumePage.jsx

```jsx
import { FaFileDownload, FaExternalLinkAlt, FaLaptopCode, FaDesktop, FaDatabase, FaMicroscope, FaGraduationCap } from 'react-icons/fa';
import GlassCard from '../components/common/GlassCard';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import SectionHeader from '../components/common/SectionHeader';
import { personalInfo } from '../data/personalInfo';

export default function ResumePage() {
  const highlights = [
    {
      icon: FaLaptopCode,
      title: "Full Stack Development",
      stack: "React, JavaScript (ES6+), Node.js, Express, Tailwind CSS, Vite",
      bullets: [
        "Architecting responsive, component-driven web user interfaces with React and Tailwind CSS",
        "Building scalable RESTful API endpoints and real-time WebSocket messaging services with Node.js",
        "Designing state management architectures and client-side routing pipelines with zero TypeScript bloat"
      ]
    },
    {
      icon: FaDesktop,
      title: "Desktop Applications",
      stack: "Tauri (Rust + Web), Electron, Chromium, Native IPC",
      bullets: [
        "Engineering cross-platform desktop applications (Windows, Linux, macOS) under 40MB memory footprint",
        "Leveraging asynchronous IPC bridges between web frontends and native Rust/C++ backends",
        "Developing offline-first desktop tools including Quran, Hadith, and Sonic Browser"
      ]
    },
    {
      icon: FaDatabase,
      title: "Database Systems",
      stack: "SQLite, MongoDB, PostgreSQL, MySQL",
      bullets: [
        "Building DataSwitch: universal multi-engine database migrator and synchronization pipeline",
        "Writing optimized relational SQL queries, schema indexing, and document aggregation pipelines",
        "Handling heterogeneous type conversions and transactional batch integrity"
      ]
    },
    {
      icon: FaMicroscope,
      title: "Research Computing",
      stack: "GROMACS, CHARMM-GUI, Python, Linux HPC, MDAnalysis",
      bullets: [
        "Executing all-atom Molecular Dynamics simulations of E. coli lipid bilayers on Linux HPC clusters",
        "Developing automated Python data pipelines calculating Area Per Lipid (APL) and Deuterium Order Parameters (Scd)",
        "Creating GROMACS GUI wrapper to automate complex simulation parameter configurations"
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <SectionHeader
        badge="Curriculum Vitae"
        title="Professional Resume"
        subtitle="Full Stack & Desktop Software Engineer with a rigorous foundation in computational physics."
      />

      {/* Top Action Bar */}
      <GlassCard className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white">{personalInfo.name}</h2>
          <p className="text-xs sm:text-sm font-mono text-cyan-400">{personalInfo.headline}</p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button
            href={`mailto:${personalInfo.email}?subject=Resume%20Request%20-%20Anum%20Hosen%20Shawon`}
            variant="primary"
            size="md"
            icon={FaFileDownload}
            className="flex-1 sm:flex-initial"
          >
            Download Resume
          </Button>
          <Button
            href={personalInfo.linkedinUrl}
            variant="outline"
            size="md"
            icon={FaExternalLinkAlt}
            className="flex-1 sm:flex-initial"
          >
            View Online
          </Button>
        </div>
      </GlassCard>

      {/* Core Technical Highlights */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white tracking-tight border-b border-gray-800 pb-2">
          Technical Highlights
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <GlassCard key={idx} className="p-6 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">{item.title}</h4>
                      <span className="text-[11px] font-mono text-cyan-400 block">{item.stack}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-3 text-xs sm:text-sm text-gray-300">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold mt-0.5">•</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>

      {/* Education & Academic Credentials */}
      <GlassCard className="p-6 space-y-3">
        <div className="flex items-center gap-3">
          <FaGraduationCap className="text-cyan-400 w-6 h-6" />
          <div>
            <h4 className="text-base font-bold text-white">Bachelor of Science in Physics (Final Year)</h4>
            <p className="text-xs text-gray-400">{personalInfo.institution} • {personalInfo.department}</p>
          </div>
        </div>
        <p className="text-xs text-gray-400 leading-relaxed pt-1">
          Specialized in computational mechanics, differential equations, and molecular simulation. Applied mathematical problem-decomposition to native desktop systems programming and multi-database architectures.
        </p>
      </GlassCard>
    </div>
  );
}
```

## src\pages\SkillsPage.jsx

```jsx
import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import SkillCategoryCard from '../components/skills/SkillCategoryCard';
import { skillCategories } from '../data/skillsData';

export default function SkillsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <SectionHeader
        badge="Technical Arsenal"
        title="Skills & Technologies"
        subtitle="A comprehensive overview of programming languages, frameworks, databases, and desktop runtimes I use to build robust software."
      />

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <SkillCategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
```

## src\routes\AppRoutes.jsx

```jsx
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';

// Lazy loaded page components for optimal route-based code splitting
const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const SkillsPage = lazy(() => import('../pages/SkillsPage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('../pages/ProjectDetailPage'));
const ResearchPage = lazy(() => import('../pages/ResearchPage'));
const OpenSourcePage = lazy(() => import('../pages/OpenSourcePage'));
const ResumePage = lazy(() => import('../pages/ResumePage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

// Sleek minimal fallback loader
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-3">
      <div className="w-10 h-10 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-spin" />
      <span className="text-xs font-mono text-gray-500 animate-pulse">Loading experience...</span>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:projectId" element={<ProjectDetailPage />} />
          <Route path="research" element={<ResearchPage />} />
          <Route path="opensource" element={<OpenSourcePage />} />
          <Route path="open-source" element={<OpenSourcePage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
```

## src\styles\index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-gray-950 text-gray-100 font-sans;
    overflow-x: hidden;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #030712;
}

::-webkit-scrollbar-thumb {
  background: #1f2937;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #374151;
}

/* Tech mesh grid background overlay */
.tech-grid-pattern {
  background-image: radial-gradient(rgba(56, 189, 248, 0.08) 1px, transparent 1px);
  background-size: 28px 28px;
}

/* Glassmorphic card styling */
.glass-panel {
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(55, 65, 81, 0.6);
}

.glass-panel-hover {
  transition: all 0.25s ease-in-out;
}

.glass-panel-hover:hover {
  background: rgba(17, 24, 39, 0.8);
  border-color: rgba(6, 182, 212, 0.4);
  box-shadow: 0 10px 30px -10px rgba(6, 182, 212, 0.2);
}

/* Modern gradient text */
.text-gradient-cyan {
  background: linear-gradient(135deg, #ffffff 0%, #38bdf8 50%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient-blue {
  background: linear-gradient(135deg, #38bdf8 0%, #3b82f6 50%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## src\components\about\BioCard.jsx

```jsx
import React from 'react';
import { FaLaptopCode, FaAtom, FaCodeBranch, FaHeart } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';
import { personalInfo } from '../../data/personalInfo';

export default function BioCard() {
  const highlights = [
    {
      icon: FaAtom,
      title: "Physics & Analytical Foundation",
      text: "Applying scientific rigor, mathematical modeling, and problem-decomposition to complex software systems."
    },
    {
      icon: FaLaptopCode,
      title: "Desktop & Systems Engineering",
      text: "Designing native, responsive desktop applications leveraging Tauri (Rust) and Electron for cross-platform utility."
    },
    {
      icon: FaCodeBranch,
      title: "Open Source Advocate",
      text: "Committed to transparent developer tooling, privacy-first offline utilities, and accessible scientific workflows."
    },
    {
      icon: FaHeart,
      title: "Continuous Craftsmanship",
      text: "Passionate about clean architecture, low-latency execution, intuitive user interfaces, and modular codebases."
    }
  ];

  return (
    <div className="space-y-6">
      <GlassCard className="space-y-5">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-4 border-b border-gray-800">
          <div className="relative shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[2px] shadow-glow-cyan">
              <img
                src={personalInfo.photoUrl}
                alt={personalInfo.name}
                className="w-full h-full rounded-2xl object-cover bg-gray-950"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-gray-950" title="Active"></div>
          </div>
          <div className="text-center sm:text-left space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {personalInfo.name}
            </h3>
            <p className="text-xs sm:text-sm font-mono text-cyan-400">
              {personalInfo.headline}
            </p>
            <p className="text-xs text-gray-400">
              {personalInfo.institution} • {personalInfo.department}
            </p>
          </div>
        </div>

        {personalInfo.bioParagraphs.map((paragraph, idx) => (
          <p key={idx} className="text-sm sm:text-base text-gray-300 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </GlassCard>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <GlassCard key={idx} className="p-4 bg-gray-900/40">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
}
```

## src\components\about\EducationCard.jsx

```jsx
import { FaGraduationCap, FaMapMarkerAlt, FaUniversity, FaCodeBranch, FaBriefcase } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';
import { personalInfo } from '../../data/personalInfo';

export default function EducationCard() {
  return (
    <GlassCard className="space-y-6">
      {/* Education Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-gray-800">
        <div className="p-3 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-950/40">
          <FaGraduationCap className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
            Academic Background
          </span>
          <h3 className="text-lg font-bold text-white">
            B.Sc. in Physics (Final Year)
          </h3>
        </div>
      </div>

      {/* Recruiter Profile Matrix Card */}
      <div className="space-y-3.5 text-xs sm:text-sm">
        <div className="flex items-center gap-3 text-gray-300">
          <FaUniversity className="w-4 h-4 text-cyan-400 shrink-0" />
          <div>
            <span className="font-semibold text-white block">{personalInfo.institution}</span>
            <span className="text-xs text-gray-400">{personalInfo.department}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-300">
          <FaMapMarkerAlt className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Location: <strong className="text-white">{personalInfo.location}</strong></span>
        </div>

        <div className="flex items-center gap-3 text-gray-300">
          <FaCodeBranch className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Open Source: <strong className="text-cyan-300 font-medium">Active Creator & Contributor</strong></span>
        </div>

        <div className="flex items-start gap-3 text-gray-300 pt-2 border-t border-gray-850">
          <FaBriefcase className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
          <div className="space-y-1.5 w-full">
            <span className="font-semibold text-white block">Availability Status:</span>
            <div className="flex flex-wrap gap-1.5">
              {personalInfo.availableFor.map((role) => (
                <Badge key={role} size="sm" variant="cyan" className="text-[10px]">
                  {role}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
```

## src\components\about\StoryTimeline.jsx

```jsx
import GlassCard from '../common/GlassCard';

export default function StoryTimeline() {
  const narrativeStages = [
    {
      stage: "Step 1",
      title: "Physics Student",
      subtitle: "Foundational Analytics & Modeling",
      desc: "Immersed in classical mechanics, differential equations, and computational methods at JUST Department of Physics, building deep mathematical decomposition skills."
    },
    {
      stage: "Step 2",
      title: "Scientific Computing",
      subtitle: "Numerical Algorithms & Simulation",
      desc: "Harnessed C and Python for statistical simulations, modeling physical interactions and numerical approximations with algorithmic rigor."
    },
    {
      stage: "Step 3",
      title: "Research Software",
      subtitle: "Molecular Dynamics & HPC Workflows",
      desc: "Engineered automated data pipelines for GROMACS and CHARMM-GUI, accelerating biophysical lipid membrane simulations across multi-core Linux clusters."
    },
    {
      stage: "Step 4",
      title: "Full Stack Development",
      subtitle: "Component Architecture & Distributed APIs",
      desc: "Transitioned computational capabilities into production web systems, mastering React, Node.js, Express, MongoDB, and duplex WebSocket messaging."
    },
    {
      stage: "Step 5",
      title: "Desktop Application Development",
      subtitle: "High-Performance Systems & Native Bindings",
      desc: "Specialized in native desktop software using Tauri (Rust) and Electron, building privacy-first developer tools like DataSwitch, Llama Server, and Sonic Browser."
    }
  ];

  return (
    <GlassCard className="space-y-6">
      <div className="border-b border-gray-800 pb-3">
        <h3 className="text-lg font-bold text-white tracking-tight">
          Evolution: Science into Software
        </h3>
        <p className="text-xs text-gray-400 mt-0.5">
          From analytical biophysics to cross-platform systems engineering.
        </p>
      </div>

      <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 via-blue-500 to-indigo-600">
        {narrativeStages.map((item, idx) => (
          <div key={idx} className="relative group">
            <span className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full bg-gray-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-110 transition-all shadow-glow-cyan" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-cyan-400 font-bold tracking-wide uppercase">
                  {item.stage}
                </span>
                <span className="text-xs text-gray-500 font-mono">•</span>
                <span className="text-xs text-gray-400 font-medium">
                  {item.subtitle}
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mt-0.5 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
```

## src\components\common\Badge.jsx

```jsx
import React from 'react';

export default function Badge({ 
  children, 
  variant = "default", 
  className = "",
  size = "md" 
}) {
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-xs px-2.5 py-1",
    lg: "text-sm px-3 py-1.5"
  };

  const variantClasses = {
    default: "bg-gray-800/80 text-gray-300 border-gray-700/60 hover:border-gray-600",
    cyan: "bg-cyan-950/40 text-cyan-300 border-cyan-800/50 hover:border-cyan-500/60",
    blue: "bg-blue-950/40 text-blue-300 border-blue-800/50 hover:border-blue-500/60",
    glow: "bg-gradient-to-r from-cyan-950/60 to-blue-950/60 text-cyan-300 border-cyan-700/50 shadow-glow-cyan",
    outline: "bg-transparent text-gray-400 border-gray-700 hover:text-gray-200"
  };

  return (
    <span 
      className={`inline-flex items-center gap-1.5 rounded-full font-medium border transition-colors ${sizeClasses[size]} ${variantClasses[variant] || variantClasses.default} ${className}`}
    >
      {children}
    </span>
  );
}
```

## src\components\common\Button.jsx

```jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  icon: Icon,
  disabled = false,
  target,
  rel
}) {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const sizeClasses = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2.5",
    lg: "text-base px-6 py-3"
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-950/40 focus:ring-cyan-500 active:scale-[0.98]",
    secondary: "bg-gray-800/80 text-gray-200 hover:bg-gray-750 hover:text-white border border-gray-700/80 hover:border-gray-600 focus:ring-gray-600 active:scale-[0.98]",
    outline: "bg-transparent text-cyan-400 border border-cyan-500/50 hover:bg-cyan-950/30 hover:border-cyan-400 focus:ring-cyan-500 active:scale-[0.98]",
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-gray-800/50 focus:ring-gray-700"
  };

  const combined = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combined}>
        {Icon && <Icon className="w-4 h-4" />}
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        target={target || "_blank"} 
        rel={rel || "noopener noreferrer"} 
        className={combined}
      >
        {Icon && <Icon className="w-4 h-4" />}
        {children}
      </a>
    );
  }

  return (
    <button 
      type="button" 
      onClick={onClick} 
      disabled={disabled} 
      className={combined}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
}
```

## src\components\common\Footer.jsx

```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { personalInfo } from '../../data/personalInfo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gray-850 bg-gray-950/80 backdrop-blur-md mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-mono font-bold text-xs">
                AH
              </div>
              <span className="text-white font-bold text-base tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              {personalInfo.tagline}
            </p>
            <div className="flex items-center gap-3 pt-2 text-gray-400">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-900 border border-gray-800 hover:text-cyan-400 hover:border-cyan-500/40 transition"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-900 border border-gray-800 hover:text-cyan-400 hover:border-cyan-500/40 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-gray-900 border border-gray-800 hover:text-cyan-400 hover:border-cyan-500/40 transition"
                aria-label="Email"
              >
                <FaEnvelope className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-3">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-cyan-400 transition">About</Link></li>
              <li><Link to="/skills" className="hover:text-cyan-400 transition">Skills & Stacks</Link></li>
              <li><Link to="/projects" className="hover:text-cyan-400 transition">Featured Projects</Link></li>
              <li><Link to="/research" className="hover:text-cyan-400 transition">Research & MD</Link></li>
              <li><Link to="/opensource" className="hover:text-cyan-400 transition">Open Source</Link></li>
            </ul>
          </div>

          {/* Contact / Domain */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-3">
              Contact & Domain
            </h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="font-mono text-xs text-cyan-400">
                {personalInfo.domain}
              </p>
              <p className="text-xs text-gray-400">
                {personalInfo.institution}
              </p>
              <Link 
                to="/contact" 
                className="inline-block text-xs text-cyan-400 hover:underline pt-1"
              >
                Send a message →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>React • Vite • Tailwind • Vercel</span>
            <button
              onClick={scrollToTop}
              type="button"
              className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <FaArrowUp className="w-3 h-3" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

## src\components\common\GlassCard.jsx

```jsx
import React from 'react';

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glow = false,
  onClick = null
}) {
  return (
    <div
      onClick={onClick}
      className={`rounded-xl border border-gray-800/80 bg-gray-900/60 backdrop-blur-md p-5 sm:p-6 transition-all duration-300 ${
        hover ? 'hover:border-cyan-500/40 hover:bg-gray-900/80 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20' : ''
      } ${glow ? 'shadow-glow-cyan border-cyan-500/30' : ''} ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
```

## src\components\common\Navbar.jsx

```jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useActiveNav } from '../../hooks/useActiveNav';
import { personalInfo } from '../../data/personalInfo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isScrolled, isActive } = useActiveNav();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Research', path: '/research' },
    { name: 'Open Source', path: '/opensource' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-950/85 backdrop-blur-md border-b border-gray-800/80 shadow-lg shadow-black/20 py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md shadow-cyan-950/40 group-hover:scale-105 transition-transform">
            AH
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold tracking-tight text-sm sm:text-base group-hover:text-cyan-400 transition-colors">
              {personalInfo.shortName}
            </span>
            <span className="text-[10px] font-mono text-cyan-400/80 -mt-1 hidden sm:block">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-gray-900/60 border border-gray-800/80 px-3 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  active
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/60 border border-transparent'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/60 rounded-lg transition"
            aria-label="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/60 rounded-lg transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-950/30 transition-transform active:scale-95"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <HiX className="w-6 h-6" /> : <HiOutlineMenuAlt3 className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-gray-950/95 border-b border-gray-800 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                isActive(link.path)
                  ? 'bg-cyan-950/40 text-cyan-300 border border-cyan-800/50'
                  : 'text-gray-300 hover:text-white hover:bg-gray-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg"
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
```

## src\components\common\ParticlesBackground.jsx

```jsx
import { useEffect, useRef } from 'react';

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Controlled low particle count for maximum performance (30 on desktop, 15 on mobile)
    const particleCount = width < 768 ? 15 : 32;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.8
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
      aria-hidden="true"
    />
  );
}
```

## src\components\common\SectionHeader.jsx

```jsx
import React from 'react';
import Badge from './Badge';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  className = ""
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className="mb-3">
          <Badge variant="cyan" size="md">
            {badge}
          </Badge>
        </div>
      )}
      
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="max-w-2xl text-base sm:text-lg text-gray-400 font-normal leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}

      {centered && (
        <div className="mt-4 flex justify-center">
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
        </div>
      )}
    </div>
  );
}
```

## src\components\common\SEOStructuredData.jsx

```jsx
import { useEffect } from 'react';
import { personalInfo } from '../../data/personalInfo';
import { projectsData } from '../../data/projectsData';

export default function SEOStructuredData() {
  useEffect(() => {
    const existingScript = document.getElementById('seo-structured-data');
    if (existingScript) existingScript.remove();

    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": personalInfo.name,
      "alternateName": personalInfo.shortName,
      "jobTitle": personalInfo.headline,
      "description": personalInfo.tagline,
      "url": `https://${personalInfo.domain}`,
      "image": `https://${personalInfo.domain}${personalInfo.photoUrl}`,
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": personalInfo.institution
      },
      "sameAs": [
        personalInfo.githubUrl,
        personalInfo.linkedinUrl
      ],
      "knowsAbout": [
        "Full-Stack Web Development",
        "Cross-Platform Desktop Applications",
        "Tauri",
        "Electron",
        "React",
        "Node.js",
        "SQLite",
        "MongoDB",
        "Molecular Dynamics Simulation",
        "GROMACS",
        "Python"
      ]
    };

    const projectsSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": projectsData.slice(0, 4).map((project, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "item": {
          "@type": "SoftwareApplication",
          "name": project.title,
          "description": project.shortDesc,
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "Cross-platform (Windows, Linux, macOS)",
          "url": project.githubUrl
        }
      }))
    };

    const script = document.createElement('script');
    script.id = 'seo-structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify([personSchema, projectsSchema]);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('seo-structured-data');
      if (el) el.remove();
    };
  }, []);

  return null;
}
```

## src\components\common\TechWindow.jsx

```jsx
import React from 'react';
import { VscChromeMinimize, VscChromeMaximize, VscChromeClose } from 'react-icons/vsc';

export default function TechWindow({ 
  title = "anumhosen@dev:~", 
  children, 
  className = "",
  headerRight = null 
}) {
  return (
    <div className={`rounded-xl overflow-hidden border border-gray-800 bg-gray-900/90 shadow-2xl backdrop-blur-md ${className}`}>
      {/* Window Titlebar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-gray-950/80 border-b border-gray-800/80 select-none">
        <div className="flex items-center gap-2">
          {/* Terminal / System Status indicator */}
          <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan/80 animate-pulse"></span>
          <span className="font-mono text-xs text-gray-400 font-medium tracking-wide">
            {title}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {headerRight}
          {/* Window Control Buttons using VscChrome icons */}
          <div className="flex items-center gap-1 text-gray-400">
            <button 
              type="button" 
              className="p-1 hover:text-gray-200 hover:bg-gray-800 rounded transition"
              aria-label="Minimize"
            >
              <VscChromeMinimize className="w-3 h-3" />
            </button>
            <button 
              type="button" 
              className="p-1 hover:text-gray-200 hover:bg-gray-800 rounded transition"
              aria-label="Maximize"
            >
              <VscChromeMaximize className="w-3 h-3" />
            </button>
            <button 
              type="button" 
              className="p-1 hover:text-red-400 hover:bg-red-950/40 rounded transition"
              aria-label="Close"
            >
              <VscChromeClose className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Window Body */}
      <div className="p-4 sm:p-5 font-mono text-sm text-gray-300">
        {children}
      </div>
    </div>
  );
}
```

## src\components\common\TypingEffect.jsx

```jsx
import { useState, useEffect } from 'react';

export default function TypingEffect({ 
  words = [], 
  speed = 100, 
  deleteSpeed = 50, 
  pauseTime = 1800,
  className = "" 
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const fullWord = words[currentWordIndex];
    let timer;

    if (!isDeleting) {
      if (currentText.length < fullWord.length) {
        timer = setTimeout(() => {
          setCurrentText(fullWord.slice(0, currentText.length + 1));
        }, speed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullWord.slice(0, currentText.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, speed, deleteSpeed, pauseTime]);

  return (
    <span className={`inline-flex items-center font-mono ${className}`}>
      <span>{currentText}</span>
      <span className="w-0.5 h-6 ml-1 bg-cyan-400 animate-pulse inline-block" />
    </span>
  );
}
```

## src\components\contact\ContactDetails.jsx

```jsx
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';
import { personalInfo } from '../../data/personalInfo';

export default function ContactDetails() {
  const contactPoints = [
    {
      icon: FaEnvelope,
      label: "Direct Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: FaGithub,
      label: "GitHub Profile",
      value: `@${personalInfo.githubUsername}`,
      href: personalInfo.githubUrl
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn Network",
      value: "Anum Hosen Shawon",
      href: personalInfo.linkedinUrl
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: `${personalInfo.location}`,
      href: null
    }
  ];

  return (
    <div className="space-y-6">
      {/* Recruiter Availability Banner */}
      <GlassCard className="p-6 bg-gradient-to-r from-gray-900/80 to-cyan-950/40 border-cyan-800/60 shadow-glow-cyan/20 space-y-3">
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase">
          <FaBriefcase className="w-3.5 h-3.5" />
          Recruiter & Hiring Notice
        </div>
        <h4 className="text-base font-bold text-white">
          Actively Available For:
        </h4>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {personalInfo.availableFor.map((item) => (
            <Badge key={item} variant="cyan" size="md">
              {item}
            </Badge>
          ))}
        </div>
        <p className="text-xs text-gray-400 pt-1 leading-relaxed">
          Open to remote software engineering roles, hybrid positions, and sponsored open-source development.
        </p>
      </GlassCard>

      {/* Direct Contact Channels */}
      <GlassCard className="p-6">
        <h3 className="text-lg font-bold text-white mb-2">
          Direct Channels
        </h3>
        <p className="text-xs text-gray-400 mb-5 leading-relaxed">
          Reach out directly via email or connect on developer networks.
        </p>

        <div className="space-y-3.5">
          {contactPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5 p-3 rounded-lg bg-gray-950/60 border border-gray-800/80">
                <div className="p-2.5 rounded-lg bg-cyan-950/70 text-cyan-400 border border-cyan-800/50 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-gray-400 block">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('mailto') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-cyan-400 transition truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-white truncate block">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </GlassCard>
    </div>
  );
}
```

## src\components\contact\ContactForm.jsx

```jsx
import React, { useState } from 'react';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';
import Button from '../common/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    // Simulate swift submission feedback
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <GlassCard className="p-6 sm:p-8">
      <h3 className="text-xl font-bold text-white mb-2">
        Send a Message
      </h3>
      <p className="text-xs sm:text-sm text-gray-400 mb-6">
        Have a project idea, research collaboration, or question? Fill out the form below.
      </p>

      {status === 'success' ? (
        <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-center space-y-3">
          <FaCheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
          <h4 className="text-base font-bold text-white">Message Sent Successfully!</h4>
          <p className="text-xs text-gray-300">
            Thank you for reaching out. I will get back to you promptly.
          </p>
          <Button
            onClick={() => setStatus('idle')}
            variant="secondary"
            size="sm"
            className="mt-2"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs font-mono font-medium text-gray-300 mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className="w-full px-4 py-2.5 rounded-lg bg-gray-950/80 border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-mono font-medium text-gray-300 mb-1.5">
              Your Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 rounded-lg bg-gray-950/80 border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-mono font-medium text-gray-300 mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full px-4 py-2.5 rounded-lg bg-gray-950/80 border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition resize-none"
            />
          </div>

          <Button
            onClick={handleSubmit}
            variant="primary"
            size="md"
            icon={FaPaperPlane}
            disabled={status === 'submitting'}
            className="w-full"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      )}
    </GlassCard>
  );
}
```

## src\components\home\CurrentlyBuilding.jsx

```jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaArrowRight, FaHammer } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';
import { currentlyBuildingData } from '../../data/currentlyBuildingData';

export default function CurrentlyBuilding() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
        <div>
          <div className="inline-flex items-center gap-2 mb-2">
            <Badge variant="cyan" size="sm">
              <FaHammer className="w-3 h-3" />
              Active Pipelines
            </Badge>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Currently Building
          </h2>
          <p className="text-sm text-gray-400 mt-1 max-w-xl">
            Live engineering work in progress across desktop architectures, database synchronizers, and local AI engines.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {currentlyBuildingData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <GlassCard className="h-full flex flex-col justify-between p-5 sm:p-6 space-y-4">
              <div>
                {/* Header with Title and ASCII Bar */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/70 border border-cyan-800/60 px-2 py-0.5 rounded">
                    {item.progress}%
                  </span>
                </div>

                <p className="text-xs text-gray-400 mb-3">
                  {item.tagline}
                </p>

                {/* Styled Visual Progress Bar */}
                <div className="w-full bg-gray-950 rounded-full h-2.5 overflow-hidden border border-gray-800 mb-2">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-500 shadow-glow-cyan"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>

                {/* Monospace ASCII Indicator representation */}
                <div className="font-mono text-[11px] text-gray-500 mb-4 tracking-wider">
                  {item.asciiBar}
                </div>

                {/* Current Milestone */}
                <div className="p-3 rounded-lg bg-gray-950/60 border border-gray-850 text-xs text-gray-300 space-y-1 mb-4">
                  <span className="text-[10px] font-mono uppercase text-cyan-400 font-semibold block">
                    Current Milestone:
                  </span>
                  <p className="leading-relaxed text-gray-300">
                    {item.currentMilestone}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {item.stack.map((tech) => (
                    <Badge key={tech} size="sm" variant="default" className="text-[10px]">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-3 border-t border-gray-850 flex items-center justify-between text-xs">
                <a
                  href={item.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition"
                >
                  <FaGithub className="w-3.5 h-3.5" /> Source
                </a>
                <Link
                  to={item.detailUrl}
                  className="inline-flex items-center gap-1.5 font-semibold text-cyan-400 hover:text-cyan-300 transition"
                >
                  Deep Dive <FaArrowRight className="w-2.5 h-2.5" />
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
```

## src\components\home\FeaturedTeaser.jsx

```jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';
import { projectsData } from '../../data/projectsData';

export default function FeaturedTeaser() {
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3);

  const getStatusVariant = (status) => {
    switch (status) {
      case 'In Progress': return 'cyan';
      case 'Completed': return 'glow';
      case 'Research': return 'blue';
      default: return 'default';
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <Badge variant="cyan" size="sm" className="mb-2">Portfolio Showcase</Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="text-sm text-gray-400 mt-1 max-w-xl">
            Selected native desktop tools, multi-database synchronizers, and local AI utilities.
          </p>
        </div>
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition group"
        >
          View All 7 Projects 
          <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
          >
            <GlassCard className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant={getStatusVariant(project.status)} size="sm">
                    {project.status}
                  </Badge>
                  <span className="text-xs text-gray-500 font-mono">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                  {project.shortDesc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 3).map(tech => (
                    <Badge key={tech} size="sm" variant="default">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge size="sm" variant="outline">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-850 text-xs">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition"
                >
                  <FaGithub className="w-3.5 h-3.5" /> Source
                </a>
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 font-semibold text-cyan-400 hover:underline"
                >
                  Case Study <FaArrowRight className="w-2.5 h-2.5" />
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
```

## src\components\home\HeroSection.jsx

```jsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowRight } from 'react-icons/fa';
import Button from '../common/Button';
import Badge from '../common/Badge';
import TechWindow from '../common/TechWindow';
import TypingEffect from '../common/TypingEffect';
import { personalInfo } from '../../data/personalInfo';

export default function HeroSection() {
  return (
    <section className="relative pt-6 pb-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Subtle top ambient glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline, Typing, Subheading & CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 shadow-glow-cyan">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="text-xs font-mono text-cyan-300 font-medium tracking-wide">
              Open for Full Stack & Desktop Roles
            </span>
          </div>

          {/* Name & Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {personalInfo.name}
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-gradient-cyan">
              {personalInfo.headline}
            </p>
          </div>

          {/* Animated Typing Specialization */}
          <div className="text-sm sm:text-base text-gray-300 flex items-center gap-2">
            <span className="text-gray-500 font-mono text-xs uppercase tracking-wider">Focus:</span>
            <TypingEffect 
              words={personalInfo.typingRoles} 
              className="text-cyan-300 font-semibold" 
            />
          </div>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl">
            {personalInfo.tagline}
          </p>

          {/* CTA Hierarchy: Primary & Secondary */}
          <div className="space-y-3 pt-2">
            {/* Primary Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Button
                to="/resume"
                variant="primary"
                size="md"
                icon={FaFileDownload}
                className="shadow-glow-cyan font-semibold"
              >
                Download Resume
              </Button>
              <Button
                to="/projects"
                variant="secondary"
                size="md"
                icon={FaArrowRight}
                className="font-semibold"
              >
                View Projects
              </Button>
            </div>

            {/* Secondary Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <Button
                href={personalInfo.githubUrl}
                variant="ghost"
                size="sm"
                icon={FaGithub}
              >
                GitHub
              </Button>
              <Button
                href={personalInfo.linkedinUrl}
                variant="ghost"
                size="sm"
                icon={FaLinkedin}
              >
                LinkedIn
              </Button>
              <Button
                href={`mailto:${personalInfo.email}`}
                variant="ghost"
                size="sm"
                icon={FaEnvelope}
              >
                Email
              </Button>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-gray-850">
            {personalInfo.stats.map((stat) => (
              <div key={stat.label} className="p-2.5 rounded-lg bg-gray-900/50 border border-gray-800/80 text-center">
                <span className="text-sm sm:text-base font-mono font-extrabold text-cyan-400 block">
                  {stat.value}
                </span>
                <span className="text-[11px] text-gray-400 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Terminal Window with Real Portrait */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <TechWindow title="anumhosen@system:~" className="relative shadow-glow-cyan/20">
            <div className="flex items-center gap-4 pb-4 border-b border-gray-800">
              <div className="relative shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[2px] shadow-glow-cyan">
                  <img
                    src={personalInfo.photoUrl}
                    alt={personalInfo.name}
                    className="w-full h-full rounded-full object-cover bg-gray-950"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-gray-950" title="Active"></div>
              </div>
              <div>
                <h3 className="text-white font-semibold text-base font-sans">{personalInfo.name}</h3>
                <p className="text-xs text-gray-400 font-sans">{personalInfo.department}</p>
                <p className="text-xs text-cyan-400 font-mono">{personalInfo.institution}</p>
              </div>
            </div>

            <div className="pt-4 space-y-2 text-xs font-mono">
              <div className="p-3 bg-gray-950/80 rounded-lg text-gray-300 leading-relaxed border border-gray-850">
                <p><span className="text-cyan-400">const</span> engineer = &#123;</p>
                <p className="pl-3"><span className="text-blue-400">role:</span> "Full Stack & Desktop Engineer",</p>
                <p className="pl-3"><span className="text-blue-400">stack:</span> ["React", "Node.js", "Tauri", "Electron"],</p>
                <p className="pl-3"><span className="text-blue-400">research:</span> "Molecular Dynamics (GROMACS)",</p>
                <p className="pl-3"><span className="text-blue-400">status:</span> <span className="text-emerald-400">"Ready for Hire"</span></p>
                <p>&#125;;</p>
              </div>
            </div>
          </TechWindow>
        </motion.div>
      </div>
    </section>
  );
}
```

## src\components\home\QuickStats.jsx

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../common/GlassCard';
import { personalInfo } from '../../data/personalInfo';

export default function QuickStats() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {personalInfo.stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <GlassCard className="text-center py-6 border-gray-800/60 bg-gray-900/40">
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient-cyan mb-1 font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
```

## src\components\opensource\ContributionGraph.jsx

```jsx
import { FaGithub, FaFire, FaCodeCommit } from 'react-icons/fa6';
import GlassCard from '../common/GlassCard';

export default function ContributionGraph() {
  // Generate stylized representation of contribution activity grid (weeks x days)
  const weeks = 28;
  const days = 7;

  // Pattern matrix for realistic activity look
  const getActivityLevel = (w, d) => {
    const val = (Math.sin(w * 0.4 + d * 0.7) + Math.cos(w * 0.9 - d * 0.3) + 2) / 4;
    if (val > 0.8) return 'bg-cyan-400 shadow-glow-cyan';
    if (val > 0.55) return 'bg-cyan-600';
    if (val > 0.3) return 'bg-cyan-900/80';
    return 'bg-gray-900 border border-gray-850';
  };

  return (
    <GlassCard className="p-6 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-800 pb-3">
        <div className="flex items-center gap-2">
          <FaGithub className="text-cyan-400 w-5 h-5" />
          <h3 className="text-base sm:text-lg font-bold text-white">
            GitHub Contribution Activity
          </h3>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
          <span className="flex items-center gap-1.5 text-cyan-300">
            <FaFire className="text-amber-400" />
            500+ Commits this year
          </span>
          <span className="hidden sm:inline text-gray-500">•</span>
          <span className="hidden sm:inline text-emerald-400">Active Daily</span>
        </div>
      </div>

      {/* Responsive Horizontal Grid Container */}
      <div className="overflow-x-auto pb-2">
        <div className="flex gap-1.5 min-w-[580px] p-2 bg-gray-950/60 rounded-xl border border-gray-850 justify-center">
          {Array.from({ length: weeks }).map((_, w) => (
            <div key={w} className="flex flex-col gap-1.5">
              {Array.from({ length: days }).map((_, d) => (
                <div
                  key={d}
                  className={`w-3 h-3 rounded-sm transition-all duration-200 hover:scale-125 ${getActivityLevel(w, d)}`}
                  title={`Week ${w + 1}, Day ${d + 1}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Heatmap Legend */}
      <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 pt-1">
        <span>Continuous development cycle</span>
        <div className="flex items-center gap-1.5">
          <span>Less</span>
          <span className="w-2.5 h-2.5 rounded-sm bg-gray-900 border border-gray-800" />
          <span className="w-2.5 h-2.5 rounded-sm bg-cyan-900/80" />
          <span className="w-2.5 h-2.5 rounded-sm bg-cyan-600" />
          <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400" />
          <span>More</span>
        </div>
      </div>
    </GlassCard>
  );
}
```

## src\components\opensource\GitHubProfileCard.jsx

```jsx
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';
import Button from '../common/Button';
import { openSourceData } from '../../data/openSourceData';

export default function GitHubProfileCard() {
  return (
    <GlassCard className="p-6 sm:p-8 bg-gradient-to-r from-gray-900/80 to-gray-950/80 border-gray-800">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="relative shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gray-900 border-2 border-cyan-500/40 p-[2px] shadow-glow-cyan overflow-hidden">
              <img
                src="/anum.jpeg"
                alt={openSourceData.username}
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 p-1.5 rounded-md bg-gray-950 border border-cyan-500/60 text-cyan-400 shadow-md">
              <FaGithub className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                @{openSourceData.username}
              </h3>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded-full">
                GitHub Verified
              </span>
            </div>
            <p className="text-sm text-gray-300 max-w-xl">
              {openSourceData.tagline}
            </p>
          </div>
        </div>

        <Button
          href={openSourceData.profileUrl}
          variant="primary"
          size="md"
          icon={FaExternalLinkAlt}
          className="shrink-0"
        >
          View GitHub Profile
        </Button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-800">
        {openSourceData.stats.map((stat, idx) => (
          <div key={idx} className="p-3 rounded-lg bg-gray-950/50 border border-gray-800/80 text-center">
            <span className="text-lg sm:text-xl font-bold text-cyan-400 font-mono block">
              {stat.value}
            </span>
            <span className="text-xs text-gray-400">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
```

## src\components\opensource\OpenSourceStats.jsx

```jsx
import React from 'react';
import { FaCodeBranch, FaShieldAlt, FaTerminal, FaUsers } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';
import { openSourceData } from '../../data/openSourceData';

export default function OpenSourceStats() {
  const principles = [
    {
      icon: FaTerminal,
      title: "Local-First Architecture",
      desc: "Applications and tools should run locally on user hardware without compulsory cloud services or forced account lock-in."
    },
    {
      icon: FaShieldAlt,
      title: "Privacy by Design",
      desc: "Zero telemetry and transparent local data storage in standard formats like SQLite, JSON, and flat configuration files."
    },
    {
      icon: FaCodeBranch,
      title: "Accessible Tooling",
      desc: "Democratizing scientific simulations, database migrations, and AI models through cross-platform graphical interfaces."
    },
    {
      icon: FaUsers,
      title: "Community Collaboration",
      desc: "Building with modular, inspectable codebases and welcoming pull requests, issues, and peer feedback."
    }
  ];

  return (
    <div className="space-y-6">
      <GlassCard className="p-6">
        <h3 className="text-lg font-bold text-white mb-2">
          Open Source Philosophy
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed max-w-3xl">
          {openSourceData.philosophy}
        </p>
      </GlassCard>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {principles.map((item, idx) => {
          const Icon = item.icon;
          return (
            <GlassCard key={idx} className="p-4 bg-gray-900/40">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
}
```

## src\components\opensource\RepoCard.jsx

```jsx
import { FaBook, FaStar, FaCodeBranch, FaExternalLinkAlt, FaClock } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';

export default function RepoCard({ repo }) {
  return (
    <GlassCard className="flex flex-col justify-between h-full p-5 space-y-4">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <FaBook className="w-4 h-4 text-cyan-400 shrink-0" />
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-bold text-white hover:text-cyan-400 transition truncate"
            >
              {repo.name}
            </a>
          </div>
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white p-1"
            aria-label={`Visit ${repo.name}`}
          >
            <FaExternalLinkAlt className="w-3 h-3" />
          </a>
        </div>

        <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed line-clamp-3">
          {repo.description}
        </p>

        {/* Topics */}
        <div className="flex flex-wrap gap-1 mb-4">
          {repo.topics.map((topic) => (
            <Badge key={topic} size="sm" variant="default" className="text-[10px]">
              {topic}
            </Badge>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-gray-850 space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-gray-400">
          <span className="flex items-center gap-1.5 text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            {repo.language}
          </span>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 hover:text-white transition">
              <FaStar className="w-3 h-3 text-amber-400" />
              {repo.stars}
            </span>
            <span className="flex items-center gap-1 hover:text-white transition">
              <FaCodeBranch className="w-3 h-3 text-cyan-400" />
              {repo.forks}
            </span>
          </div>
        </div>

        {/* Last Updated */}
        <div className="flex items-center gap-1 text-[11px] text-gray-500 font-mono">
          <FaClock className="w-2.5 h-2.5 text-gray-600" />
          <span>{repo.lastUpdated}</span>
        </div>
      </div>
    </GlassCard>
  );
}
```

## src\components\projects\ArchitectureDiagram.jsx

```jsx
import { FaServer, FaDesktop, FaDatabase, FaExchangeAlt } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';

export default function ArchitectureDiagram({ project }) {
  return (
    <GlassCard className="p-6 space-y-4">
      <div className="flex items-center justify-between border-b border-gray-800 pb-3">
        <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
          <FaServer className="text-cyan-400 w-4 h-4" />
          System Architecture & Data Flow
        </h3>
        <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">
          Architecture Overview
        </span>
      </div>

      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
        {project.architecture}
      </p>

      {/* Visual Component Diagram Box */}
      <div className="p-4 sm:p-5 rounded-xl bg-gray-950/80 border border-gray-800 space-y-3 font-mono text-xs">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center text-center">
          {/* Frontend Client */}
          <div className="p-3 rounded-lg bg-gray-900 border border-cyan-800/40 text-cyan-300 space-y-1">
            <FaDesktop className="w-5 h-5 mx-auto text-cyan-400" />
            <div className="font-bold">Presentation UI</div>
            <div className="text-[10px] text-gray-400">React • Tailwind • State</div>
          </div>

          {/* IPC / Bridge */}
          <div className="flex flex-col items-center justify-center text-gray-500 py-1">
            <FaExchangeAlt className="w-4 h-4 text-cyan-400" />
            <span className="text-[10px] text-cyan-400 font-bold mt-1">IPC / Event Loop</span>
            <span className="text-[9px] text-gray-400">Streaming Buffers</span>
          </div>

          {/* Native Backend */}
          <div className="p-3 rounded-lg bg-gray-900 border border-blue-800/40 text-blue-300 space-y-1">
            <FaDatabase className="w-5 h-5 mx-auto text-blue-400" />
            <div className="font-bold">Core Engine</div>
            <div className="text-[10px] text-gray-400">Rust / Python / C++ Drivers</div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
```

## src\components\projects\ProjectCard.jsx

```jsx
import { Link } from 'react-router-dom';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaDatabase, 
  FaBrain, 
  FaGlobe, 
  FaMicroscope, 
  FaBookOpen, 
  FaBook, 
  FaComments,
  FaTerminal,
  FaArrowRight
} from 'react-icons/fa';
import { VscChromeMinimize, VscChromeMaximize, VscChromeClose } from 'react-icons/vsc';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';

const iconMap = {
  FaDatabase: FaDatabase,
  FaBrain: FaBrain,
  FaGlobe: FaGlobe,
  FaMicroscope: FaMicroscope,
  FaBookOpen: FaBookOpen,
  FaBook: FaBook,
  FaComments: FaComments
};

export default function ProjectCard({ project }) {
  const ProjectLogo = iconMap[project.logoIcon] || FaTerminal;

  const getStatusVariant = (status) => {
    switch (status) {
      case 'In Progress': return 'cyan';
      case 'Completed': return 'glow';
      case 'Research': return 'blue';
      default: return 'default';
    }
  };

  return (
    <GlassCard className="flex flex-col justify-between h-full p-0 overflow-hidden border-gray-800/80 group">
      {/* Mockup Canvas Screen */}
      <div className="bg-gray-950 border-b border-gray-850">
        {/* Window Chrome Header with VscChrome icons */}
        <div className="flex items-center justify-between px-3 py-2 bg-gray-900/90 border-b border-gray-800/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="text-[11px] font-mono text-gray-400 truncate max-w-[170px]">
              app://{project.id}.native
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <VscChromeMinimize className="w-2.5 h-2.5" />
            <VscChromeMaximize className="w-2.5 h-2.5" />
            <VscChromeClose className="w-2.5 h-2.5" />
          </div>
        </div>

        {/* Screenshot Canvas with Project Logo */}
        <div className="h-36 sm:h-40 relative flex items-center justify-center p-4 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
          <div className="absolute inset-0 tech-grid-pattern opacity-30" />
          <div className={`absolute w-28 h-28 rounded-full bg-gradient-to-br ${project.accent} opacity-20 blur-xl`} />

          <div className="relative z-10 text-center space-y-1.5">
            <div className="inline-flex p-3.5 rounded-2xl bg-gray-900/90 border border-gray-700/60 shadow-xl text-cyan-400 group-hover:scale-110 transition-transform">
              <ProjectLogo className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono text-gray-300 font-semibold">
              {project.badge}
            </div>
            <div className="text-[10px] font-mono text-cyan-400/80">
              {project.category}
            </div>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>
            <Badge variant={getStatusVariant(project.status)} size="sm">
              {project.status}
            </Badge>
          </div>

          <p className="text-xs sm:text-sm text-gray-300 mb-3 leading-relaxed">
            {project.shortDesc}
          </p>

          <p className="text-xs text-gray-400 mb-4 line-clamp-2 leading-relaxed">
            {project.fullDesc}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <Badge key={tech} size="sm" variant="default">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Buttons: GitHub, Demo, Deep Dive */}
        <div className="pt-4 border-t border-gray-850 space-y-2.5">
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium rounded-lg bg-gray-800 hover:bg-gray-750 text-gray-200 hover:text-white border border-gray-700 transition"
            >
              <FaGithub className="w-3.5 h-3.5" /> Source
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium rounded-lg bg-cyan-950/70 hover:bg-cyan-900/80 text-cyan-300 border border-cyan-800/60 transition"
            >
              <FaExternalLinkAlt className="w-3 h-3" /> Demo
            </a>
          </div>

          <Link
            to={`/projects/${project.id}`}
            className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-950/40 transition"
          >
            Case Study & Architecture <FaArrowRight className="w-2.5 h-2.5" />
          </Link>
        </div>
      </div>
    </GlassCard>
  );
}
```

## src\components\projects\ProjectFilter.jsx

```jsx
import React from 'react';

export default function ProjectFilter({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
              isActive
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-950/40'
                : 'bg-gray-900/80 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
```

## src\components\projects\ScreenshotsGallery.jsx

```jsx
import { FaImage, FaTerminal } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';

export default function ScreenshotsGallery({ project }) {
  const screenshots = [
    { title: "Primary Dashboard", desc: "Main control view and live workspace panel." },
    { title: "Configuration & Inspection", desc: "Parameter tuning, query inspector, and schema mapping." }
  ];

  return (
    <GlassCard className="p-6 space-y-4">
      <div className="flex items-center justify-between border-b border-gray-800 pb-3">
        <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
          <FaImage className="text-cyan-400 w-4 h-4" />
          Screenshots Gallery
        </h3>
        <span className="text-xs font-mono text-gray-500">
          UI Showcase
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {screenshots.map((shot, idx) => (
          <div 
            key={idx} 
            className="rounded-xl border border-gray-800/80 bg-gray-950 overflow-hidden group"
          >
            {/* Placeholder Canvas screen */}
            <div className="h-44 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 relative flex flex-col items-center justify-center p-4 text-center">
              <div className="p-3 rounded-xl bg-gray-900/90 border border-gray-800 text-cyan-400 mb-2 group-hover:scale-105 transition-transform">
                <FaTerminal className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-gray-300 font-semibold">{shot.title}</span>
              <span className="text-[10px] font-mono text-cyan-400/80 mt-1">app://{project.id}/screen-{idx + 1}</span>
              
              {/* TODO Note indicator */}
              <span className="absolute bottom-2 text-[9px] font-mono text-gray-600">
                TODO: Replace with actual screenshot
              </span>
            </div>

            <div className="p-3 bg-gray-900/60 border-t border-gray-850">
              <p className="text-xs text-gray-400">{shot.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
```

## src\components\research\ResearchHero.jsx

```jsx
import { FaDna, FaServer, FaTerminal, FaPython, FaCheckCircle, FaThermometerHalf, FaBookOpen } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';
import { researchData } from '../../data/researchData';

export default function ResearchHero() {
  const toolIcons = [
    { name: "GROMACS", role: "High-Performance MD Engine", icon: FaServer },
    { name: "CHARMM-GUI", role: "Membrane System Builder", icon: FaDna },
    { name: "Linux", role: "HPC Computing & Shell Scripts", icon: FaTerminal },
    { name: "Python", role: "Trajectory & Data Analysis", icon: FaPython }
  ];

  return (
    <div className="space-y-8">
      {/* Research Abstract & Meta Card */}
      <GlassCard className="p-6 sm:p-8 relative overflow-hidden space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-800 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="cyan" size="md">Physics Department, JUST</Badge>
            <Badge variant="glow" size="md">Computational Biophysics</Badge>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-full">
              <FaBookOpen className="w-3 h-3" />
              {researchData.publicationStatus}
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
            {researchData.project}
          </h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-4xl">
            {researchData.abstract}
          </p>
        </div>

        {/* Simulation Temperatures & Ensemble Metrics */}
        <div className="p-4 rounded-xl bg-gray-950/70 border border-gray-800/80 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase">
            <FaThermometerHalf className="w-3.5 h-3.5" />
            Simulation Thermodynamic Parameters & Environments
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {researchData.keyMetrics.map((metric, idx) => (
              <div key={idx} className="p-2.5 bg-gray-900/60 rounded-lg border border-gray-850">
                <span className="text-[10px] font-mono text-gray-400 block">{metric.label}</span>
                <span className="text-xs sm:text-sm font-mono font-bold text-cyan-300">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Research Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {researchData.highlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-gray-900/30 border border-gray-850">
              <FaCheckCircle className="w-3.5 h-3.5 text-cyan-400 mt-1 shrink-0" />
              <div>
                <span className="text-xs font-bold text-white block">{item.title}</span>
                <span className="text-[11px] text-gray-400 leading-relaxed">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Tools Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {toolIcons.map((tool, idx) => {
          const Icon = tool.icon;
          return (
            <GlassCard key={idx} className="p-4 flex items-center gap-3.5 bg-gray-900/50">
              <div className="p-3 rounded-xl bg-cyan-950/70 border border-cyan-800/50 text-cyan-400 shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">{tool.name}</h4>
                <p className="text-xs text-gray-400">{tool.role}</p>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
}
```

## src\components\research\ResearchTimeline.jsx

```jsx
import React from 'react';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';
import { researchData } from '../../data/researchData';

export default function ResearchTimeline() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white tracking-tight">
          Simulation Pipeline & Milestones
        </h3>
        <span className="text-xs font-mono text-cyan-400">
          5-Phase Methodology
        </span>
      </div>

      <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 via-blue-500 to-indigo-600">
        {researchData.timeline.map((step, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <span className="absolute -left-6 sm:-left-8 top-1.5 w-4 h-4 rounded-full bg-gray-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-110 transition-all shadow-glow-cyan" />

            <GlassCard className="space-y-3 p-5 sm:p-6 bg-gray-900/60">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Badge variant="cyan" size="sm">
                    {step.phase}
                  </Badge>
                  <h4 className="text-base font-bold text-white">
                    {step.title}
                  </h4>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-0.5 rounded-full w-fit">
                  {step.status}
                </span>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                {step.description}
              </p>

              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-gray-850">
                <span className="text-xs text-gray-400 mr-2 font-mono">Tools:</span>
                {step.toolsUsed.map((tool) => (
                  <Badge key={tool} size="sm" variant="default">
                    {tool}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## src\components\skills\SkillCategoryCard.jsx

```jsx
import { 
  FaLaptopCode, 
  FaServer, 
  FaDatabase, 
  FaDesktop, 
  FaTerminal, 
  FaTools 
} from 'react-icons/fa';
import GlassCard from '../common/GlassCard';
import SkillItem from './SkillItem';

const categoryIcons = {
  frontend: FaLaptopCode,
  backend: FaServer,
  database: FaDatabase,
  desktop: FaDesktop,
  programming: FaTerminal,
  tools: FaTools
};

export default function SkillCategoryCard({ category }) {
  const Icon = categoryIcons[category.id] || FaLaptopCode;

  return (
    <GlassCard className="flex flex-col justify-between h-full space-y-4">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">
              {category.name}
            </h3>
            <span className="text-[11px] font-mono text-cyan-400/80">
              {category.skills.length} Technologies
            </span>
          </div>
        </div>

        <p className="text-xs text-gray-400 mb-4 leading-relaxed">
          {category.description}
        </p>

        <div className="space-y-2.5">
          {category.skills.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
```

## src\components\skills\SkillItem.jsx

```jsx
import Badge from '../common/Badge';

export default function SkillItem({ skill }) {
  const isLearning = skill.level === 'Learning';

  return (
    <div className="p-3 rounded-lg bg-gray-950/70 border border-gray-850 hover:border-cyan-500/40 transition-colors group space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
          <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-cyan-400 font-bold">
            {skill.proficiency}%
          </span>
          <span className="text-[10px] font-mono text-gray-400 bg-gray-900 px-2 py-0.5 rounded border border-gray-800">
            {skill.tag}
          </span>
          {isLearning && (
            <Badge size="sm" variant="cyan" className="text-[10px] py-0 px-1.5">
              Learning
            </Badge>
          )}
        </div>
      </div>

      {/* Visual Proficiency Bar */}
      <div className="w-full bg-gray-900 rounded-full h-1.5 overflow-hidden border border-gray-800/80">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            isLearning 
              ? 'bg-gradient-to-r from-teal-500 to-cyan-500 opacity-75' 
              : 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-glow-cyan'
          }`}
          style={{ width: `${skill.proficiency}%` }}
        />
      </div>
    </div>
  );
}
```

# 4. Binary Files

- public\anum.jpeg
- src\assets\avatar-placeholder.svg
- src\assets\hero.png

# 5. Skipped Large Files

No large files skipped.

# 6. Statistics

- Files scanned : 72
- Included      : 69
- Skipped       : 3
- Binary        : 3
- Large         : 0
- Ignored dirs  : 0
- Total size    : 310.7 KB
- Markdown size : 168,654 characters
- Estimated tokens: 42,163