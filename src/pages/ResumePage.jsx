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
