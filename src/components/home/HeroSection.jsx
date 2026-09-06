import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaTerminal } from 'react-icons/fa';
import Button from '../common/Button';
import Badge from '../common/Badge';
import TechWindow from '../common/TechWindow';
import { personalInfo } from '../../data/personalInfo';

export default function HeroSection() {
  return (
    <section className="relative pt-8 pb-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-mono text-cyan-400 font-medium tracking-wide">
              Open for Software Engineering & Research
            </span>
          </div>

          {/* Name & Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {personalInfo.name}
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-gradient-cyan">
              {personalInfo.headline}
            </p>
          </div>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl">
            {personalInfo.tagline}
          </p>

          {/* Hero Core Stack Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {personalInfo.heroStack.map((tech) => (
              <Badge key={tech} variant="cyan" size="sm">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <Button
              href={personalInfo.resumeUrl}
              variant="primary"
              size="md"
              icon={FaFileDownload}
            >
              Download Resume
            </Button>
            <Button
              to="/contact"
              variant="secondary"
              size="md"
              icon={FaEnvelope}
            >
              Contact Me
            </Button>
            <Button
              href={personalInfo.githubUrl}
              variant="outline"
              size="md"
              icon={FaGithub}
            >
              GitHub
            </Button>
            <Button
              href={personalInfo.linkedinUrl}
              variant="outline"
              size="md"
              icon={FaLinkedin}
            >
              LinkedIn
            </Button>
          </div>
        </motion.div>

        {/* Right Column: Interactive Tech Terminal Window & Avatar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <TechWindow title="anumhosen@system:~" className="relative shadow-glow-cyan/20">
            {/* Developer profile preview with avatar */}
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

            {/* Terminal snippet */}
            <div className="pt-4 space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-gray-500">
                <FaTerminal className="text-cyan-400 w-3 h-3" />
                <span className="text-cyan-300">$</span>
                <span>cat bio.json</span>
              </div>
              <div className="p-3 bg-gray-950/70 rounded-lg text-gray-300 leading-relaxed border border-gray-800/60">
                <p><span className="text-cyan-400">"role":</span> "Full Stack & Desktop Engineer",</p>
                <p><span className="text-cyan-400">"focus":</span> ["Tauri", "Electron", "React", "Python"],</p>
                <p><span className="text-cyan-400">"research":</span> "Molecular Dynamics (GROMACS)",</p>
                <p><span className="text-cyan-400">"status":</span> <span className="text-emerald-400">"Building & Shipping"</span></p>
              </div>
            </div>
          </TechWindow>
        </motion.div>
      </div>
    </section>
  );
}
