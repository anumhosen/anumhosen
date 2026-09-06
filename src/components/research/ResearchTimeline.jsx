import React from 'react';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';
import { researchData } from '../../data/researchData';

export default function ResearchTimeline() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white tracking-tight">
          Simulation Pipeline & Milestones
        </h3>
        <span className="text-xs font-mono text-cyan-400">
          5-Phase Methodology
        </span>
      </div>

      <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 via-blue-500 to-indigo-600">
        {researchData.timeline.map((step, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <span className="absolute -left-6 sm:-left-8 top-1.5 w-4 h-4 rounded-full bg-gray-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-110 transition-all shadow-glow-cyan" />

            <GlassCard className="space-y-3 p-5 sm:p-6 bg-gray-900/60">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Badge variant="cyan" size="sm">
                    {step.phase}
                  </Badge>
                  <h4 className="text-base font-bold text-white">
                    {step.title}
                  </h4>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-0.5 rounded-full w-fit">
                  {step.status}
                </span>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                {step.description}
              </p>

              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-gray-850">
                <span className="text-xs text-gray-400 mr-2 font-mono">Tools:</span>
                {step.toolsUsed.map((tool) => (
                  <Badge key={tool} size="sm" variant="default">
                    {tool}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </div>
  );
}
