import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaArrowRight, FaHammer } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';
import { currentlyBuildingData } from '../../data/currentlyBuildingData';

export default function CurrentlyBuilding() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
        <div>
          <div className="inline-flex items-center gap-2 mb-2">
            <Badge variant="cyan" size="sm">
              <FaHammer className="w-3 h-3" />
              Active Pipelines
            </Badge>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Currently Building
          </h2>
          <p className="text-sm text-gray-400 mt-1 max-w-xl">
            Live engineering work in progress across desktop architectures, database synchronizers, and local AI engines.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {currentlyBuildingData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <GlassCard className="h-full flex flex-col justify-between p-5 sm:p-6 space-y-4">
              <div>
                {/* Header with Title and ASCII Bar */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/70 border border-cyan-800/60 px-2 py-0.5 rounded">
                    {item.progress}%
                  </span>
                </div>

                <p className="text-xs text-gray-400 mb-3">
                  {item.tagline}
                </p>

                {/* Styled Visual Progress Bar */}
                <div className="w-full bg-gray-950 rounded-full h-2.5 overflow-hidden border border-gray-800 mb-2">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-500 shadow-glow-cyan"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>

                {/* Monospace ASCII Indicator representation */}
                <div className="font-mono text-[11px] text-gray-500 mb-4 tracking-wider">
                  {item.asciiBar}
                </div>

                {/* Current Milestone */}
                <div className="p-3 rounded-lg bg-gray-950/60 border border-gray-850 text-xs text-gray-300 space-y-1 mb-4">
                  <span className="text-[10px] font-mono uppercase text-cyan-400 font-semibold block">
                    Current Milestone:
                  </span>
                  <p className="leading-relaxed text-gray-300">
                    {item.currentMilestone}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {item.stack.map((tech) => (
                    <Badge key={tech} size="sm" variant="default" className="text-[10px]">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-3 border-t border-gray-850 flex items-center justify-between text-xs">
                <a
                  href={item.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition"
                >
                  <FaGithub className="w-3.5 h-3.5" /> Source
                </a>
                <Link
                  to={item.detailUrl}
                  className="inline-flex items-center gap-1.5 font-semibold text-cyan-400 hover:text-cyan-300 transition"
                >
                  Deep Dive <FaArrowRight className="w-2.5 h-2.5" />
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
