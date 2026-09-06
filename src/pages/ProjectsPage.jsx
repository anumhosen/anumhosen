import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import ProjectFilter from '../components/projects/ProjectFilter';
import ProjectCard from '../components/projects/ProjectCard';
import { projectsData, projectCategories } from '../data/projectsData';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <SectionHeader
        badge="Engineering Portfolio"
        title="Featured Projects & Software"
        subtitle="Explore cross-platform desktop applications, developer tools, database synchronizers, and AI model servers."
      />

      {/* Category Filter */}
      <ProjectFilter
        categories={projectCategories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
