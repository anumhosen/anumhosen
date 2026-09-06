import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';
import Button from '../common/Button';
import { openSourceData } from '../../data/openSourceData';

export default function GitHubProfileCard() {
  return (
    <GlassCard className="p-6 sm:p-8 bg-gradient-to-r from-gray-900/80 to-gray-950/80 border-gray-800">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="relative shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gray-900 border-2 border-cyan-500/40 p-[2px] shadow-glow-cyan overflow-hidden">
              <img
                src="/anum.jpeg"
                alt={openSourceData.username}
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 p-1.5 rounded-md bg-gray-950 border border-cyan-500/60 text-cyan-400 shadow-md">
              <FaGithub className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                @{openSourceData.username}
              </h3>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded-full">
                GitHub Verified
              </span>
            </div>
            <p className="text-sm text-gray-300 max-w-xl">
              {openSourceData.tagline}
            </p>
          </div>
        </div>

        <Button
          href={openSourceData.profileUrl}
          variant="primary"
          size="md"
          icon={FaExternalLinkAlt}
          className="shrink-0"
        >
          View GitHub Profile
        </Button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-800">
        {openSourceData.stats.map((stat, idx) => (
          <div key={idx} className="p-3 rounded-lg bg-gray-950/50 border border-gray-800/80 text-center">
            <span className="text-lg sm:text-xl font-bold text-cyan-400 font-mono block">
              {stat.value}
            </span>
            <span className="text-xs text-gray-400">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
