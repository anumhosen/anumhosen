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
