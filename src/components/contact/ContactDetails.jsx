import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';
import { personalInfo } from '../../data/personalInfo';

export default function ContactDetails() {
  const contactPoints = [
    {
      icon: FaEnvelope,
      label: "Direct Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: FaGithub,
      label: "GitHub Profile",
      value: `@${personalInfo.githubUsername}`,
      href: personalInfo.githubUrl
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn Network",
      value: "Anum Hosen Shawon",
      href: personalInfo.linkedinUrl
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: `${personalInfo.location}`,
      href: null
    }
  ];

  return (
    <div className="space-y-6">
      {/* Recruiter Availability Banner */}
      <GlassCard className="p-6 bg-gradient-to-r from-gray-900/80 to-cyan-950/40 border-cyan-800/60 shadow-glow-cyan/20 space-y-3">
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase">
          <FaBriefcase className="w-3.5 h-3.5" />
          Recruiter & Hiring Notice
        </div>
        <h4 className="text-base font-bold text-white">
          Actively Available For:
        </h4>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {personalInfo.availableFor.map((item) => (
            <Badge key={item} variant="cyan" size="md">
              {item}
            </Badge>
          ))}
        </div>
        <p className="text-xs text-gray-400 pt-1 leading-relaxed">
          Open to remote software engineering roles, hybrid positions, and sponsored open-source development.
        </p>
      </GlassCard>

      {/* Direct Contact Channels */}
      <GlassCard className="p-6">
        <h3 className="text-lg font-bold text-white mb-2">
          Direct Channels
        </h3>
        <p className="text-xs text-gray-400 mb-5 leading-relaxed">
          Reach out directly via email or connect on developer networks.
        </p>

        <div className="space-y-3.5">
          {contactPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5 p-3 rounded-lg bg-gray-950/60 border border-gray-800/80">
                <div className="p-2.5 rounded-lg bg-cyan-950/70 text-cyan-400 border border-cyan-800/50 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-gray-400 block">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('mailto') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-cyan-400 transition truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-white truncate block">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </GlassCard>
    </div>
  );
}
