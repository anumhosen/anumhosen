import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useActiveNav } from '../../hooks/useActiveNav';
import { personalInfo } from '../../data/personalInfo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isScrolled, isActive } = useActiveNav();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Research', path: '/research' },
    { name: 'Open Source', path: '/opensource' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-950/85 backdrop-blur-md border-b border-gray-800/80 shadow-lg shadow-black/20 py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md shadow-cyan-950/40 group-hover:scale-105 transition-transform">
            AH
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold tracking-tight text-sm sm:text-base group-hover:text-cyan-400 transition-colors">
              {personalInfo.shortName}
            </span>
            <span className="text-[10px] font-mono text-cyan-400/80 -mt-1 hidden sm:block">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-gray-900/60 border border-gray-800/80 px-3 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  active
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/60 border border-transparent'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/60 rounded-lg transition"
            aria-label="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/60 rounded-lg transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-950/30 transition-transform active:scale-95"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <HiX className="w-6 h-6" /> : <HiOutlineMenuAlt3 className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-gray-950/95 border-b border-gray-800 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                isActive(link.path)
                  ? 'bg-cyan-950/40 text-cyan-300 border border-cyan-800/50'
                  : 'text-gray-300 hover:text-white hover:bg-gray-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg"
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
