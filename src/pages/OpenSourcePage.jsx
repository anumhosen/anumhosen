import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import GitHubProfileCard from '../components/opensource/GitHubProfileCard';
import OpenSourceStats from '../components/opensource/OpenSourceStats';
import RepoCard from '../components/opensource/RepoCard';
import { openSourceData } from '../data/openSourceData';

export default function OpenSourcePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <SectionHeader
        badge="Community & Code"
        title="Open Source Software & Tools"
        subtitle="Contributing to developer utilities, native desktop ecosystems, and local-first software architectures."
      />

      {/* GitHub Profile Card */}
      <GitHubProfileCard />

      {/* Repository Showcase */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white tracking-tight">
            Featured Repositories
          </h3>
          <span className="text-xs font-mono text-cyan-400">
            Open Source Projects
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {openSourceData.featuredRepositories.map((repo) => (
            <RepoCard key={repo.name} repo={repo} />
          ))}
        </div>
      </div>

      {/* Philosophy & Principles */}
      <div className="pt-6">
        <OpenSourceStats />
      </div>
    </div>
  );
}
