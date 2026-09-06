import Badge from '../common/Badge';

export default function SkillItem({ skill }) {
  const isLearning = skill.level === 'Learning';

  return (
    <div className="p-3 rounded-lg bg-gray-950/70 border border-gray-850 hover:border-cyan-500/40 transition-colors group space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
          <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-cyan-400 font-bold">
            {skill.proficiency}%
          </span>
          <span className="text-[10px] font-mono text-gray-400 bg-gray-900 px-2 py-0.5 rounded border border-gray-800">
            {skill.tag}
          </span>
          {isLearning && (
            <Badge size="sm" variant="cyan" className="text-[10px] py-0 px-1.5">
              Learning
            </Badge>
          )}
        </div>
      </div>

      {/* Visual Proficiency Bar */}
      <div className="w-full bg-gray-900 rounded-full h-1.5 overflow-hidden border border-gray-800/80">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            isLearning 
              ? 'bg-gradient-to-r from-teal-500 to-cyan-500 opacity-75' 
              : 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-glow-cyan'
          }`}
          style={{ width: `${skill.proficiency}%` }}
        />
      </div>
    </div>
  );
}
