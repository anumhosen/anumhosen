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
