import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';
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
      <GlassCard className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">
          Contact Channels
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 mb-6 leading-relaxed">
          Feel free to connect directly via email or professional platforms.
        </p>

        <div className="space-y-4">
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

      {/* SLA / Availability Box */}
      <GlassCard className="p-5 bg-gradient-to-r from-gray-900/40 to-cyan-950/20 border-cyan-900/30">
        <div className="flex items-center gap-3">
          <FaClock className="w-5 h-5 text-cyan-400 shrink-0" />
          <div>
            <h4 className="text-sm font-bold text-white">Availability & Response</h4>
            <p className="text-xs text-gray-400 mt-0.5">
              Typically responding within 24 hours. Open to remote engineering roles and research projects.
            </p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
