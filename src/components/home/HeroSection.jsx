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
