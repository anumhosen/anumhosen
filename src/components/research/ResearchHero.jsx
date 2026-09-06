import React from 'react';
import { FaDna, FaServer, FaTerminal, FaPython } from 'react-icons/fa';
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
      {/* Research Abstract Card */}
      <GlassCard className="p-6 sm:p-8 relative overflow-hidden">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge variant="cyan" size="md">Physics Department</Badge>
          <Badge variant="outline" size="md">Computational Biophysics</Badge>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          {researchData.project}
        </h3>

        <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-4xl mb-6">
          {researchData.abstract}
        </p>

        {/* Key Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-gray-800">
          {researchData.keyMetrics.map((metric, idx) => (
            <div key={idx} className="p-3 bg-gray-950/60 rounded-lg border border-gray-800/80">
              <span className="text-[11px] font-mono text-gray-400 block">{metric.label}</span>
              <span className="text-xs sm:text-sm font-mono font-semibold text-cyan-300">{metric.value}</span>
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
