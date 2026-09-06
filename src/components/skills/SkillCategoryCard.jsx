import React from 'react';
import { 
  FaLaptopCode, 
  FaServer, 
  FaDatabase, 
  FaDesktop, 
  FaTerminal, 
  FaTools 
} from 'react-icons/fa';
import GlassCard from '../common/GlassCard';
import SkillItem from './SkillItem';

const categoryIcons = {
  frontend: FaLaptopCode,
  backend: FaServer,
  database: FaDatabase,
  desktop: FaDesktop,
  programming: FaTerminal,
  tools: FaTools
};

export default function SkillCategoryCard({ category }) {
  const Icon = categoryIcons[category.id] || FaLaptopCode;

  return (
    <GlassCard className="flex flex-col justify-between h-full space-y-4">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">
              {category.name}
            </h3>
            <span className="text-[11px] font-mono text-cyan-400/80">
              {category.skills.length} Technologies
            </span>
          </div>
        </div>

        <p className="text-xs text-gray-400 mb-4 leading-relaxed">
          {category.description}
        </p>

        <div className="space-y-2">
          {category.skills.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
