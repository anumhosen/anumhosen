import { FaGithub, FaFire, FaCodeCommit } from 'react-icons/fa6';
import GlassCard from '../common/GlassCard';

export default function ContributionGraph() {
  // Generate stylized representation of contribution activity grid (weeks x days)
  const weeks = 28;
  const days = 7;

  // Pattern matrix for realistic activity look
  const getActivityLevel = (w, d) => {
    const val = (Math.sin(w * 0.4 + d * 0.7) + Math.cos(w * 0.9 - d * 0.3) + 2) / 4;
    if (val > 0.8) return 'bg-cyan-400 shadow-glow-cyan';
    if (val > 0.55) return 'bg-cyan-600';
    if (val > 0.3) return 'bg-cyan-900/80';
    return 'bg-gray-900 border border-gray-850';
  };

  return (
    <GlassCard className="p-6 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-800 pb-3">
        <div className="flex items-center gap-2">
          <FaGithub className="text-cyan-400 w-5 h-5" />
          <h3 className="text-base sm:text-lg font-bold text-white">
            GitHub Contribution Activity
          </h3>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
          <span className="flex items-center gap-1.5 text-cyan-300">
            <FaFire className="text-amber-400" />
            500+ Commits this year
          </span>
          <span className="hidden sm:inline text-gray-500">•</span>
          <span className="hidden sm:inline text-emerald-400">Active Daily</span>
        </div>
      </div>

      {/* Responsive Horizontal Grid Container */}
      <div className="overflow-x-auto pb-2">
        <div className="flex gap-1.5 min-w-[580px] p-2 bg-gray-950/60 rounded-xl border border-gray-850 justify-center">
          {Array.from({ length: weeks }).map((_, w) => (
            <div key={w} className="flex flex-col gap-1.5">
              {Array.from({ length: days }).map((_, d) => (
                <div
                  key={d}
                  className={`w-3 h-3 rounded-sm transition-all duration-200 hover:scale-125 ${getActivityLevel(w, d)}`}
                  title={`Week ${w + 1}, Day ${d + 1}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Heatmap Legend */}
      <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 pt-1">
        <span>Continuous development cycle</span>
        <div className="flex items-center gap-1.5">
          <span>Less</span>
          <span className="w-2.5 h-2.5 rounded-sm bg-gray-900 border border-gray-800" />
          <span className="w-2.5 h-2.5 rounded-sm bg-cyan-900/80" />
          <span className="w-2.5 h-2.5 rounded-sm bg-cyan-600" />
          <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400" />
          <span>More</span>
        </div>
      </div>
    </GlassCard>
  );
}
