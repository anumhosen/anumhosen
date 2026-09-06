import React from 'react';

export default function Badge({ 
  children, 
  variant = "default", 
  className = "",
  size = "md" 
}) {
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-xs px-2.5 py-1",
    lg: "text-sm px-3 py-1.5"
  };

  const variantClasses = {
    default: "bg-gray-800/80 text-gray-300 border-gray-700/60 hover:border-gray-600",
    cyan: "bg-cyan-950/40 text-cyan-300 border-cyan-800/50 hover:border-cyan-500/60",
    blue: "bg-blue-950/40 text-blue-300 border-blue-800/50 hover:border-blue-500/60",
    glow: "bg-gradient-to-r from-cyan-950/60 to-blue-950/60 text-cyan-300 border-cyan-700/50 shadow-glow-cyan",
    outline: "bg-transparent text-gray-400 border-gray-700 hover:text-gray-200"
  };

  return (
    <span 
      className={`inline-flex items-center gap-1.5 rounded-full font-medium border transition-colors ${sizeClasses[size]} ${variantClasses[variant] || variantClasses.default} ${className}`}
    >
      {children}
    </span>
  );
}
