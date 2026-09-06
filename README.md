# Anum Hosen Shawon — Modern Developer & Researcher Portfolio

A modern, high-performance portfolio website built for **Anum Hosen Shawon** (Full Stack Developer, Software Engineer, and Computational Physics Researcher at Jashore University of Science and Technology).

- **Production Domain**: [anumhosen.vercel.app](https://anumhosen.vercel.app)
- **Tech Stack**: React 19 (JavaScript only), Vite, Tailwind CSS, Framer Motion, React Icons, React Router DOM
- **Architecture**: Modular, responsive, component-driven, zero TypeScript (<200 lines per file)

---

## Features

- **Dark Professional Theme**: Built with Tailwind CSS `gray` palette (`gray-950` to `gray-700`) and cyan/blue accents.
- **Glassmorphism & Micro-animations**: Sleek backdrop-blur card surfaces, subtle hover elevation, and Framer Motion entrance animations.
- **Developer Window Mockups**: Custom code and preview frames styled with `react-icons/vsc` (`VscChromeMinimize`, `VscChromeMaximize`, `VscChromeClose`).
- **Full Showcase of 7 Core Projects**:
  1. **Llama Server** — Local AI model serving platform.
  2. **Sonic Browser** — Custom browser with productivity and scraping features.
  3. **DataSwitch** — Multi-database management and migration tool (SQLite, MongoDB, MySQL, PostgreSQL).
  4. **GROMACS GUI** — Graphical interface for molecular dynamics simulations.
  5. **Al Quran App** — Offline-first cross-platform desktop application.
  6. **Al Hadith App** — Fast indexed cross-platform desktop application.
  7. **Alapon Chat App** — Real-time MERN stack messaging platform.
- **Research & Scientific Computing**: Molecular dynamics simulation of *E. coli* lipid membrane using GROMACS, CHARMM-GUI, Linux, and Python analysis pipelines.
- **Open Source Section**: GitHub profile integration, repository showcases, and local-first software philosophy.
- **Contact Channels**: Interactive contact form with client-side feedback and direct communication links.
- **SEO & Social Optimization**: Meta descriptions, Open Graph preview tags, Twitter cards, and `robots.txt`.

---

## Project Structure

```
anumhosen/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── avatar-placeholder.svg
│   ├── components/
│   │   ├── common/
│   │   │   ├── Badge.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── GlassCard.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── SectionHeader.jsx
│   │   │   └── TechWindow.jsx
│   │   ├── home/
│   │   │   ├── FeaturedTeaser.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   └── QuickStats.jsx
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
│   │   │   └── ResearchTimeline.jsx
│   │   ├── opensource/
│   │   │   ├── GitHubProfileCard.jsx
│   │   │   ├── OpenSourceStats.jsx
│   │   │   └── RepoCard.jsx
│   │   └── contact/
│   │       ├── ContactDetails.jsx
│   │       └── ContactForm.jsx
│   ├── data/
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
│   │   ├── ProjectsPage.jsx
│   │   ├── ResearchPage.jsx
│   │   └── SkillsPage.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── DEPLOYMENT.md
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

---

## Commands for User Execution

### 1. Installation Commands
Install all dependencies including React Router, Framer Motion, React Icons, Tailwind CSS, PostCSS, and Autoprefixer:
```bash
npm install
```

### 2. Development Commands
Launch the Vite local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build & Validation Commands
Create an optimized production bundle in the `dist` directory:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

### 4. Vercel Deployment Commands

#### Install Vercel CLI (Global)
```bash
npm install -g vercel
```

#### Login to Vercel
```bash
vercel login
```

#### Deploy Preview
```bash
vercel
```

#### Deploy to Production
```bash
vercel --prod
```

---

## TODO: Files for Review

In accordance with file preservation rules, the following pre-existing Vite boilerplate files were left intact and may be reviewed or manually removed if desired:

1. `src/App.css` — Default Vite starter CSS file. Replaced by Tailwind CSS in `src/styles/index.css`.
2. `src/assets/hero.png` — Default Vite starter hero image.
3. `src/assets/react.svg` — Default React logo starter asset.
4. `src/assets/vite.svg` — Default Vite logo starter asset.

---

## License & Attribution
© Anum Hosen Shawon. Designed and developed with React, Vite, and Tailwind CSS.
