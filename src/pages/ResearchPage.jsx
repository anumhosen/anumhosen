import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import ResearchHero from '../components/research/ResearchHero';
import ResearchTimeline from '../components/research/ResearchTimeline';

export default function ResearchPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <SectionHeader
        badge="Biophysics & MD"
        title="Research & Scientific Computing"
        subtitle="Bridging theoretical physics and computational simulation to model bacterial outer membrane biophysics with atomic precision."
      />

      {/* Hero & Abstract */}
      <ResearchHero />

      {/* Timeline of Simulation Phases */}
      <div className="pt-6">
        <ResearchTimeline />
      </div>
    </div>
  );
}
