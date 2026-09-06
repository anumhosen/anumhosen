import { FaImage, FaTerminal } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';

export default function ScreenshotsGallery({ project }) {
  const screenshots = [
    { title: "Primary Dashboard", desc: "Main control view and live workspace panel." },
    { title: "Configuration & Inspection", desc: "Parameter tuning, query inspector, and schema mapping." }
  ];

  return (
    <GlassCard className="p-6 space-y-4">
      <div className="flex items-center justify-between border-b border-gray-800 pb-3">
        <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
          <FaImage className="text-cyan-400 w-4 h-4" />
          Screenshots Gallery
        </h3>
        <span className="text-xs font-mono text-gray-500">
          UI Showcase
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {screenshots.map((shot, idx) => (
          <div 
            key={idx} 
            className="rounded-xl border border-gray-800/80 bg-gray-950 overflow-hidden group"
          >
            {/* Placeholder Canvas screen */}
            <div className="h-44 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 relative flex flex-col items-center justify-center p-4 text-center">
              <div className="p-3 rounded-xl bg-gray-900/90 border border-gray-800 text-cyan-400 mb-2 group-hover:scale-105 transition-transform">
                <FaTerminal className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-gray-300 font-semibold">{shot.title}</span>
              <span className="text-[10px] font-mono text-cyan-400/80 mt-1">app://{project.id}/screen-{idx + 1}</span>
              
              {/* TODO Note indicator */}
              <span className="absolute bottom-2 text-[9px] font-mono text-gray-600">
                TODO: Replace with actual screenshot
              </span>
            </div>

            <div className="p-3 bg-gray-900/60 border-t border-gray-850">
              <p className="text-xs text-gray-400">{shot.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
