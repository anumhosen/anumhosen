import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import BioCard from '../components/about/BioCard';
import EducationCard from '../components/about/EducationCard';
import StoryTimeline from '../components/about/StoryTimeline';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <SectionHeader
        badge="About Me"
        title="Software Engineer with a Physics Mindset"
        subtitle="Final year Physics student at Jashore University of Science and Technology building high-performance desktop and web applications."
      />

      {/* Main Grid: Bio & Academic Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7">
          <BioCard />
        </div>
        <div className="lg:col-span-5 space-y-6">
          <EducationCard />
          <StoryTimeline />
        </div>
      </div>
    </div>
  );
}
