import React from 'react';
import { VscChromeMinimize, VscChromeMaximize, VscChromeClose } from 'react-icons/vsc';

export default function TechWindow({ 
  title = "anumhosen@dev:~", 
  children, 
  className = "",
  headerRight = null 
}) {
  return (
    <div className={`rounded-xl overflow-hidden border border-gray-800 bg-gray-900/90 shadow-2xl backdrop-blur-md ${className}`}>
      {/* Window Titlebar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-gray-950/80 border-b border-gray-800/80 select-none">
        <div className="flex items-center gap-2">
          {/* Terminal / System Status indicator */}
          <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan/80 animate-pulse"></span>
          <span className="font-mono text-xs text-gray-400 font-medium tracking-wide">
            {title}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {headerRight}
          {/* Window Control Buttons using VscChrome icons */}
          <div className="flex items-center gap-1 text-gray-400">
            <button 
              type="button" 
              className="p-1 hover:text-gray-200 hover:bg-gray-800 rounded transition"
              aria-label="Minimize"
            >
              <VscChromeMinimize className="w-3 h-3" />
            </button>
            <button 
              type="button" 
              className="p-1 hover:text-gray-200 hover:bg-gray-800 rounded transition"
              aria-label="Maximize"
            >
              <VscChromeMaximize className="w-3 h-3" />
            </button>
            <button 
              type="button" 
              className="p-1 hover:text-red-400 hover:bg-red-950/40 rounded transition"
              aria-label="Close"
            >
              <VscChromeClose className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Window Body */}
      <div className="p-4 sm:p-5 font-mono text-sm text-gray-300">
        {children}
      </div>
    </div>
  );
}
