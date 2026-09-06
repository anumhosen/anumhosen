import { FaGraduationCap, FaMapMarkerAlt, FaUniversity, FaCodeBranch, FaBriefcase } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';
import { personalInfo } from '../../data/personalInfo';

export default function EducationCard() {
  return (
    <GlassCard className="space-y-6">
      {/* Education Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-gray-800">
        <div className="p-3 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-950/40">
          <FaGraduationCap className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
            Academic Background
          </span>
          <h3 className="text-lg font-bold text-white">
            B.Sc. in Physics (Final Year)
          </h3>
        </div>
      </div>

      {/* Recruiter Profile Matrix Card */}
      <div className="space-y-3.5 text-xs sm:text-sm">
        <div className="flex items-center gap-3 text-gray-300">
          <FaUniversity className="w-4 h-4 text-cyan-400 shrink-0" />
          <div>
            <span className="font-semibold text-white block">{personalInfo.institution}</span>
            <span className="text-xs text-gray-400">{personalInfo.department}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-300">
          <FaMapMarkerAlt className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Location: <strong className="text-white">{personalInfo.location}</strong></span>
        </div>

        <div className="flex items-center gap-3 text-gray-300">
          <FaCodeBranch className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Open Source: <strong className="text-cyan-300 font-medium">Active Creator & Contributor</strong></span>
        </div>

        <div className="flex items-start gap-3 text-gray-300 pt-2 border-t border-gray-850">
          <FaBriefcase className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
          <div className="space-y-1.5 w-full">
            <span className="font-semibold text-white block">Availability Status:</span>
            <div className="flex flex-wrap gap-1.5">
              {personalInfo.availableFor.map((role) => (
                <Badge key={role} size="sm" variant="cyan" className="text-[10px]">
                  {role}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
