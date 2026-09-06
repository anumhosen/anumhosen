import React from 'react';

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glow = false,
  onClick = null
}) {
  return (
    <div
      onClick={onClick}
      className={`rounded-xl border border-gray-800/80 bg-gray-900/60 backdrop-blur-md p-5 sm:p-6 transition-all duration-300 ${
        hover ? 'hover:border-cyan-500/40 hover:bg-gray-900/80 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20' : ''
      } ${glow ? 'shadow-glow-cyan border-cyan-500/30' : ''} ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
