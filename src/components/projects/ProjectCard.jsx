import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaTerminal } from 'react-icons/fa';
import { VscChromeMinimize, VscChromeMaximize, VscChromeClose } from 'react-icons/vsc';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';

export default function ProjectCard({ project }) {
  return (
    <GlassCard className="flex flex-col justify-between h-full p-0 overflow-hidden border-gray-800/80 group">
      {/* Screenshot / Interactive Tech Window Mockup Placeholder */}
      <div className="bg-gray-950 border-b border-gray-800">
        {/* Window controls bar */}
        <div className="flex items-center justify-between px-3 py-2 bg-gray-900/90 border-b border-gray-800/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="text-[11px] font-mono text-gray-400 truncate max-w-[180px]">
              app://{project.id}.local
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <VscChromeMinimize className="w-2.5 h-2.5" />
            <VscChromeMaximize className="w-2.5 h-2.5" />
            <VscChromeClose className="w-2.5 h-2.5" />
          </div>
        </div>

        {/* Mockup Canvas Screen */}
        <div className="h-36 sm:h-40 relative flex items-center justify-center p-4 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 tech-grid-pattern opacity-30" />

          {/* Glowing gradient background circle */}
          <div className={`absolute w-28 h-28 rounded-full bg-gradient-to-br ${project.accent} opacity-20 blur-xl`} />

          {/* Centered Tech Preview Badge */}
          <div className="relative z-10 text-center space-y-1.5">
            <div className="inline-flex p-3 rounded-xl bg-gray-900/90 border border-gray-700/60 shadow-lg text-cyan-400">
              <FaTerminal className="w-5 h-5" />
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

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>
            {project.featured && (
              <Badge variant="glow" size="sm">
                Featured
              </Badge>
            )}
          </div>

          <p className="text-xs sm:text-sm text-gray-400 mb-3 leading-relaxed">
            {project.shortDesc}
          </p>

          <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">
            {project.fullDesc}
          </p>

          {/* Technology badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <Badge key={tech} size="sm" variant="default">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Actions: GitHub & Demo Button */}
        <div className="pt-4 border-t border-gray-800/80 flex items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium rounded-lg bg-gray-800 hover:bg-gray-750 text-gray-200 hover:text-white border border-gray-700/80 transition"
          >
            <FaGithub className="w-3.5 h-3.5" />
            GitHub
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-950/40 transition"
          >
            <FaExternalLinkAlt className="w-3 h-3" />
            Demo
          </a>
        </div>
      </div>
    </GlassCard>
  );
}
