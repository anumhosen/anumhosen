import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import SkillCategoryCard from '../components/skills/SkillCategoryCard';
import { skillCategories } from '../data/skillsData';

export default function SkillsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <SectionHeader
        badge="Technical Arsenal"
        title="Skills & Technologies"
        subtitle="A comprehensive overview of programming languages, frameworks, databases, and desktop runtimes I use to build robust software."
      />

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <SkillCategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
