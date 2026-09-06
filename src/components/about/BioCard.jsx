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
