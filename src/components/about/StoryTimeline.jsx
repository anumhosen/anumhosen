import React from 'react';
import GlassCard from '../common/GlassCard';

export default function StoryTimeline() {
  const milestones = [
    {
      year: "Foundations",
      title: "Physics & Computational Logic",
      desc: "Delved into mathematical modeling, C programming, and algorithmic thinking at JUST Department of Physics."
    },
    {
      year: "Scientific Expansion",
      title: "Molecular Dynamics & Linux",
      desc: "Began modeling lipid bilayers using GROMACS, CHARMM-GUI, and Python for biophysical simulations."
    },
    {
      year: "Engineering Pivot",
      title: "Cross-Platform Desktop & Rust",
      desc: "Expanded into Tauri and Electron to build high-performance, native developer tools like DataSwitch, Sonic Browser, and GROMACS GUI."
    },
    {
      year: "Present",
      title: "Full Stack & Open Source Ecosystems",
      desc: "Building production-grade web systems with React & Node.js while shipping open-source utilities for developers worldwide."
    }
  ];

  return (
    <GlassCard className="space-y-6">
      <h3 className="text-lg font-bold text-white tracking-tight pb-2 border-b border-gray-800">
        Development Journey & Evolution
      </h3>

      <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-blue-500 before:to-gray-800">
        {milestones.map((item, idx) => (
          <div key={idx} className="relative group">
            <span className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full bg-gray-950 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors" />
            <div>
              <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wide">
                {item.year}
              </span>
              <h4 className="text-sm font-semibold text-white mt-0.5">
                {item.title}
              </h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
