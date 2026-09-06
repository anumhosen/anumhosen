import React from 'react';
import { FaGraduationCap, FaUniversity, FaMicroscope, FaAward } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';
import { personalInfo } from '../../data/personalInfo';

export default function EducationCard() {
  const academicHighlights = [
    "Computational Physics & Numerical Methods",
    "Molecular Dynamics Simulation (GROMACS)",
    "Mathematical Physics & Differential Equations",
    "Computer Programming & Algorithms (C / Python)",
    "Statistical Mechanics & Biophysics"
  ];

  return (
    <GlassCard className="space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-gray-800">
        <div className="p-3 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-950/40">
          <FaGraduationCap className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
            Higher Education
          </span>
          <h3 className="text-lg font-bold text-white">
            Bachelor of Science in Physics
          </h3>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-2.5 text-sm text-gray-300">
          <FaUniversity className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
          <div>
            <span className="font-semibold text-white">{personalInfo.institution}</span>
            <p className="text-xs text-gray-400">{personalInfo.department}</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 text-sm text-gray-300">
          <FaAward className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Status: <strong className="text-cyan-300 font-medium">{personalInfo.academicStatus}</strong></span>
        </div>

        <div className="flex items-start gap-2.5 text-sm text-gray-300">
          <FaMicroscope className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
          <span>Specialization: <strong>Biophysical Molecular Dynamics & Computational Tools</strong></span>
        </div>
      </div>

      <div className="pt-2">
        <h4 className="text-xs font-mono font-semibold uppercase text-gray-400 tracking-wider mb-2.5">
          Key Academic & Scientific Competencies
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {academicHighlights.map((item, idx) => (
            <Badge key={idx} size="sm" variant="default">
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
