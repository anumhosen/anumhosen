import GlassCard from '../common/GlassCard';

export default function StoryTimeline() {
  const narrativeStages = [
    {
      stage: "Step 1",
      title: "Physics Student",
      subtitle: "Foundational Analytics & Modeling",
      desc: "Immersed in classical mechanics, differential equations, and computational methods at JUST Department of Physics, building deep mathematical decomposition skills."
    },
    {
      stage: "Step 2",
      title: "Scientific Computing",
      subtitle: "Numerical Algorithms & Simulation",
      desc: "Harnessed C and Python for statistical simulations, modeling physical interactions and numerical approximations with algorithmic rigor."
    },
    {
      stage: "Step 3",
      title: "Research Software",
      subtitle: "Molecular Dynamics & HPC Workflows",
      desc: "Engineered automated data pipelines for GROMACS and CHARMM-GUI, accelerating biophysical lipid membrane simulations across multi-core Linux clusters."
    },
    {
      stage: "Step 4",
      title: "Full Stack Development",
      subtitle: "Component Architecture & Distributed APIs",
      desc: "Transitioned computational capabilities into production web systems, mastering React, Node.js, Express, MongoDB, and duplex WebSocket messaging."
    },
    {
      stage: "Step 5",
      title: "Desktop Application Development",
      subtitle: "High-Performance Systems & Native Bindings",
      desc: "Specialized in native desktop software using Tauri (Rust) and Electron, building privacy-first developer tools like DataSwitch, Llama Server, and Sonic Browser."
    }
  ];

  return (
    <GlassCard className="space-y-6">
      <div className="border-b border-gray-800 pb-3">
        <h3 className="text-lg font-bold text-white tracking-tight">
          Evolution: Science into Software
        </h3>
        <p className="text-xs text-gray-400 mt-0.5">
          From analytical biophysics to cross-platform systems engineering.
        </p>
      </div>

      <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 via-blue-500 to-indigo-600">
        {narrativeStages.map((item, idx) => (
          <div key={idx} className="relative group">
            <span className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full bg-gray-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-110 transition-all shadow-glow-cyan" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-cyan-400 font-bold tracking-wide uppercase">
                  {item.stage}
                </span>
                <span className="text-xs text-gray-500 font-mono">•</span>
                <span className="text-xs text-gray-400 font-medium">
                  {item.subtitle}
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mt-0.5 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
