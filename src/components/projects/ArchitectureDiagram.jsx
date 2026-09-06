import { FaServer, FaDesktop, FaDatabase, FaExchangeAlt } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';

export default function ArchitectureDiagram({ project }) {
  return (
    <GlassCard className="p-6 space-y-4">
      <div className="flex items-center justify-between border-b border-gray-800 pb-3">
        <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
          <FaServer className="text-cyan-400 w-4 h-4" />
          System Architecture & Data Flow
        </h3>
        <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">
          Architecture Overview
        </span>
      </div>

      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
        {project.architecture}
      </p>

      {/* Visual Component Diagram Box */}
      <div className="p-4 sm:p-5 rounded-xl bg-gray-950/80 border border-gray-800 space-y-3 font-mono text-xs">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center text-center">
          {/* Frontend Client */}
          <div className="p-3 rounded-lg bg-gray-900 border border-cyan-800/40 text-cyan-300 space-y-1">
            <FaDesktop className="w-5 h-5 mx-auto text-cyan-400" />
            <div className="font-bold">Presentation UI</div>
            <div className="text-[10px] text-gray-400">React • Tailwind • State</div>
          </div>

          {/* IPC / Bridge */}
          <div className="flex flex-col items-center justify-center text-gray-500 py-1">
            <FaExchangeAlt className="w-4 h-4 text-cyan-400" />
            <span className="text-[10px] text-cyan-400 font-bold mt-1">IPC / Event Loop</span>
            <span className="text-[9px] text-gray-400">Streaming Buffers</span>
          </div>

          {/* Native Backend */}
          <div className="p-3 rounded-lg bg-gray-900 border border-blue-800/40 text-blue-300 space-y-1">
            <FaDatabase className="w-5 h-5 mx-auto text-blue-400" />
            <div className="font-bold">Core Engine</div>
            <div className="text-[10px] text-gray-400">Rust / Python / C++ Drivers</div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
