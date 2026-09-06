import { FaDna, FaServer, FaTerminal, FaPython, FaCheckCircle, FaThermometerHalf, FaBookOpen } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';
import { researchData } from '../../data/researchData';

export default function ResearchHero() {
  const toolIcons = [
    { name: "GROMACS", role: "High-Performance MD Engine", icon: FaServer },
    { name: "CHARMM-GUI", role: "Membrane System Builder", icon: FaDna },
    { name: "Linux", role: "HPC Computing & Shell Scripts", icon: FaTerminal },
    { name: "Python", role: "Trajectory & Data Analysis", icon: FaPython }
  ];

  return (
    <div className="space-y-8">
      {/* Research Abstract & Meta Card */}
      <GlassCard className="p-6 sm:p-8 relative overflow-hidden space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-800 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="cyan" size="md">Physics Department, JUST</Badge>
            <Badge variant="glow" size="md">Computational Biophysics</Badge>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-full">
              <FaBookOpen className="w-3 h-3" />
              {researchData.publicationStatus}
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
            {researchData.project}
          </h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-4xl">
            {researchData.abstract}
          </p>
        </div>

        {/* Simulation Temperatures & Ensemble Metrics */}
        <div className="p-4 rounded-xl bg-gray-950/70 border border-gray-800/80 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase">
            <FaThermometerHalf className="w-3.5 h-3.5" />
            Simulation Thermodynamic Parameters & Environments
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {researchData.keyMetrics.map((metric, idx) => (
              <div key={idx} className="p-2.5 bg-gray-900/60 rounded-lg border border-gray-850">
                <span className="text-[10px] font-mono text-gray-400 block">{metric.label}</span>
                <span className="text-xs sm:text-sm font-mono font-bold text-cyan-300">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Research Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {researchData.highlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-gray-900/30 border border-gray-850">
              <FaCheckCircle className="w-3.5 h-3.5 text-cyan-400 mt-1 shrink-0" />
              <div>
                <span className="text-xs font-bold text-white block">{item.title}</span>
                <span className="text-[11px] text-gray-400 leading-relaxed">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Tools Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {toolIcons.map((tool, idx) => {
          const Icon = tool.icon;
          return (
            <GlassCard key={idx} className="p-4 flex items-center gap-3.5 bg-gray-900/50">
              <div className="p-3 rounded-xl bg-cyan-950/70 border border-cyan-800/50 text-cyan-400 shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">{tool.name}</h4>
                <p className="text-xs text-gray-400">{tool.role}</p>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
}
