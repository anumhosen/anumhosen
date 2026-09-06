import HeroSection from '../components/home/HeroSection';
import CurrentlyBuilding from '../components/home/CurrentlyBuilding';
import QuickStats from '../components/home/QuickStats';
import FeaturedTeaser from '../components/home/FeaturedTeaser';
import Button from '../components/common/Button';
import { FaGraduationCap, FaDna, FaArrowRight } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section with Typing & CTA Hierarchy */}
      <HeroSection />

      {/* 2. Currently Building Section */}
      <CurrentlyBuilding />

      {/* 3. Key Highlights & Metrics */}
      <QuickStats />

      {/* 4. Featured Projects Showcase */}
      <FeaturedTeaser />

      {/* 5. Quick Architecture & Research Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Research Teaser */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-cyan-950/20 border border-gray-850 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-cyan-400">
                <FaDna className="w-4 h-4" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">Research & Simulation</span>
              </div>
              <h3 className="text-xl font-bold text-white">Molecular Dynamics of E. coli Membrane</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Conducting all-atom molecular dynamics simulations on bacterial lipid bilayers using GROMACS, CHARMM-GUI, and custom automated Python analysis pipelines.
              </p>
            </div>
            <div className="pt-6">
              <Button to="/research" variant="outline" size="sm" icon={FaArrowRight}>
                Explore Research
              </Button>
            </div>
          </div>

          {/* Academic & Systems Teaser */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-blue-950/20 border border-gray-850 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-blue-400">
                <FaGraduationCap className="w-4 h-4" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">Background & Evolution</span>
              </div>
              <h3 className="text-xl font-bold text-white">From Physics to Software Engineering</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Bridging mathematical modeling and biophysics into low-latency desktop development with Tauri (Rust), Electron, and modern web architectures.
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
