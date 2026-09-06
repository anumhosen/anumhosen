import React from 'react';
import Badge from '../common/Badge';

export default function SkillItem({ skill }) {
  const isLearning = skill.level === 'Learning';

  return (
    <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-950/60 border border-gray-800/80 hover:border-cyan-500/40 transition-colors group">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
        <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
          {skill.name}
        </span>
      </div>
      <div className="flex items-center gap-1.5">
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
  );
}
