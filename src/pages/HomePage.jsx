import React from 'react';
import HeroSection from '../components/home/HeroSection';
import QuickStats from '../components/home/QuickStats';
import FeaturedTeaser from '../components/home/FeaturedTeaser';
import Button from '../components/common/Button';
import { FaGraduationCap, FaDna, FaArrowRight } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Key Highlights & Metrics */}
      <QuickStats />

      {/* 3. Featured Projects Showcase */}
      <FeaturedTeaser />

      {/* 4. Quick Architecture & Research Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Research Teaser */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-cyan-950/20 border border-gray-800 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-cyan-400">
                <FaDna className="w-4 h-4" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">Research Focus</span>
              </div>
              <h3 className="text-xl font-bold text-white">Molecular Dynamics of E. coli Membrane</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Conducting all-atom molecular dynamics simulations on bacterial lipid bilayers using GROMACS, CHARMM-GUI, and Python analysis pipelines.
              </p>
            </div>
            <div className="pt-6">
              <Button to="/research" variant="outline" size="sm" icon={FaArrowRight}>
                Explore Research
              </Button>
            </div>
          </div>

          {/* Academic Teaser */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-blue-950/20 border border-gray-800 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-blue-400">
                <FaGraduationCap className="w-4 h-4" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">Academics</span>
              </div>
              <h3 className="text-xl font-bold text-white">Physics Department, JUST</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Final-year physics undergraduate combining computational mechanics, differential equations, and low-level software engineering.
              </p>
            </div>
            <div className="pt-6">
              <Button to="/about" variant="secondary" size="sm" icon={FaArrowRight}>
                Read Biography
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
