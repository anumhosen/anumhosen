import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { personalInfo } from '../../data/personalInfo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gray-850 bg-gray-950/80 backdrop-blur-md mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-mono font-bold text-xs">
                AH
              </div>
              <span className="text-white font-bold text-base tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              {personalInfo.tagline}
            </p>
            <div className="flex items-center gap-3 pt-2 text-gray-400">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-900 border border-gray-800 hover:text-cyan-400 hover:border-cyan-500/40 transition"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-900 border border-gray-800 hover:text-cyan-400 hover:border-cyan-500/40 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-gray-900 border border-gray-800 hover:text-cyan-400 hover:border-cyan-500/40 transition"
                aria-label="Email"
              >
                <FaEnvelope className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-3">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-cyan-400 transition">About</Link></li>
              <li><Link to="/skills" className="hover:text-cyan-400 transition">Skills & Stacks</Link></li>
              <li><Link to="/projects" className="hover:text-cyan-400 transition">Featured Projects</Link></li>
              <li><Link to="/research" className="hover:text-cyan-400 transition">Research & MD</Link></li>
              <li><Link to="/opensource" className="hover:text-cyan-400 transition">Open Source</Link></li>
            </ul>
          </div>

          {/* Contact / Domain */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-3">
              Contact & Domain
            </h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="font-mono text-xs text-cyan-400">
                {personalInfo.domain}
              </p>
              <p className="text-xs text-gray-400">
                {personalInfo.institution}
              </p>
              <Link 
                to="/contact" 
                className="inline-block text-xs text-cyan-400 hover:underline pt-1"
              >
                Send a message →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>React • Vite • Tailwind • Vercel</span>
            <button
              onClick={scrollToTop}
              type="button"
              className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <FaArrowUp className="w-3 h-3" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
